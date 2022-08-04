const puppeteer = require("puppeteer");
const tokenCount = 432;
const projectUrl =
  "https://generator.artblocks.io/0x0a1bbd57033f57e7b6743621b79fcb9eb2ce3676/12000";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Render the window at this size, this will the exported image size
  await page.setViewport({
    width: 1000,
    height: 1240,
  });

  for (let index = 0; index < tokenCount; index++) {
    const tokenIndex = `${index}`;
    const tokenId = tokenIndex.padStart(3, 0);

    await page.goto(`${projectUrl}${tokenId}`);
    await page.screenshot({ path: `exports/${tokenId}.png` });
  }

  await browser.close();
})();
