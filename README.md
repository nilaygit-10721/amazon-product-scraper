# 🛒 The Ultimate Amazon Scraper 🕵️‍♂️

Welcome to the Ultimate Amazon Scraper! This little tool will help you scrape Amazon product data like a pro, all from the comfort of your terminal. No more endless scrolling through Amazon pages; let this script do the hard work for you!

<h2 id="started">🚀 Getting started</h2>

Before you dive into the world of Amazon scraping, let’s make sure your environment is ready for the adventure.

1. Clone the Repo 🐙

First things first, grab a copy of the repo. Open your terminal (or command prompt if you're feeling retro) and run:

git clone https://github.com/nilaygit-10721/amazon-product-scraper.git

cd amazon-product-scraper

2. Install the Magic ✨

To make the scraper work its magic, you’ll need to install the dependencies. This is the digital equivalent of giving it a wand and some pixie dust.

Make sure you have Node.js installed (if not, go here and grab it). Then run:

npm install

This will install the mighty axios, cheerio, and fs packages that power the scraper.

3. Run the Scraper 🏃‍♂️

Ready to scrape? Of course, you are! Just type the following command and hit enter:

node index.js

If everything goes according to plan, you’ll see some glorious product data appearing before your eyes and saved in a neat little file called data.json.

🛠 Customizing Your Scraper

Want to scrape a different product? No problem! Just replace the url variable in index.js with the URL of your chosen Amazon product.
const url = "https://www.amazon.in/some-awesome-product";

Note: Be careful! Scraping too many products too fast might get you noticed by the Amazon guardians. Don't overdo it!

📜 License

This project is licensed under the MIT License - do whatever you want, just don’t sue us if Amazon sends you angry emails.

🤓 Final Words of Wisdom

Remember, with great power comes great responsibility. Scrape responsibly and have fun!
