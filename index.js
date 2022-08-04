const puppeteer = require("puppeteer");
const tokenCount = 1000;
const projectUrl =
  "https://generator.artblocks.io/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/13000";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Render the window at this size, this will the exported image size
  await page.setViewport({
    width: 1000,
    height: 1000,
  });

  for (let index = 0; index < tokenCount; index++) {
    const tokenIndex = `${index}`;
    const tokenId = tokenIndex.padStart(3, 0);

    await page.goto(`${projectUrl}${tokenId}`);
    await page.screenshot({ path: `exports/${tokenId}.png` });
  }

  await browser.close();
})();
