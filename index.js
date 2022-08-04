const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const projectUrl =
    "https://generator.artblocks.io/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/13000";

  //   Optional
    await page.setViewport({
      width: 1000,
      height: 1000,
    });

  for (let index = 0; index < 1000; index++) {
    const num = `${index}`;
    const id = num.padStart(3, 0);

    await page.goto(`${projectUrl}${id}`);
    await page.screenshot({ path: `ringers/${id}.png` });
  }

  await browser.close();
})();
