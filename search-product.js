const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function searchProduct(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const products = [];

    $(".s-main-slot .s-result-item").each((index, element) => {
      const productName = $(element).find("h2 .a-link-normal").text().trim();
      const img = $(element).find(".s-image").attr("src");
      const price = $(element)
        .find(".a-price-whole")
        .first()
        .text()
        .replace(",", "")
        .trim();
      const rating = $(element).find(".a-icon-alt").text().trim().split(" ")[0];
      const productDetails = $(element).find(".a-size-base").text().trim();
      const Purl = $(element)
        .find(".a-link-normal.s-underline-text")
        .attr("href");

      if (productName) {
        products.push({
          productName,
          img,
          productURL: "https://www.amazon.in" + Purl || "N/A",
          price: price ? `₹${price}` : "N/A",
          rating: rating || "N/A",
          productDetails: productDetails || "N/A",
        });
      }
    });

    return products;
  } catch (error) {
    console.error("Error scraping the Amazon search page:", error);
    return null;
  }
}

const url = "https://www.amazon.in/s?k=earphones";

searchProduct(url).then((data) => {
  if (data) {
    fs.writeFileSync("search-data.json", JSON.stringify(data, null, 2));
    // console.log("Scraped Data:", data);
  }
});
