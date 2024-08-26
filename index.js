const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs"); // Import the File System module

async function scrapeAmazonProduct(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const productName = $("#productTitle").text().trim();
    const price = $(".a-price").text().slice(0, 5);
    const rating = $(".a-size-base").text().slice(0, 4);
    const numberOfReviews = $("#acrCustomerReviewText")
      .text()
      .trim()
      .split(" ")[0];

    let productDescription = $(
      "#detailBullets_feature_div ul.a-unordered-list li span.a-list-item"
    )
      .map(function () {
        return $(this).text().trim();
      })
      .get()
      .join(" | ");

    productDescription = productDescription
      .replace(/\s*:\s*/g, ": ")
      .replace(/ \| /g, "\n")
      .replace(/\s+/g, " ")
      .trim();

    const scrapedData = {
      productName,
      price,
      rating,
      numberOfReviews,
      productDescription,
    };

    // Save the scraped data to data.json

    return scrapedData;
  } catch (error) {
    console.error("Error scraping the Amazon product page:", error);
    return null;
  }
}

const url =
  "https://www.amazon.in/Richscot-Stylish-Black-Trackpant-Pocket/dp/B0CQH9ZY9Q/";

scrapeAmazonProduct(url).then((data) => {
  if (data) {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

    console.log("Data successfully saved to data.json");
    // console.log("Scraped Data:", data);
  }
});
