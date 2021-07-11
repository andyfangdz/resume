const fs = require('fs/promises');
const getPort = require('get-port');
const handler = require('serve-handler');
const http = require('http');
const puppeteer = require('puppeteer');
const minify = require('html-minifier-terser').minify;

const server = http.createServer((request, response) => {
  return handler(request, response, {
    "public": "build",
    "rewrites": [
      { "source": "resume", "destination": "/index.html" },
      { "source": "cv", "destination": "/index.html" },
    ]
  });
});

(async () => {
    const port = await getPort();
    //=> 51402
    await server.listen(port, () => {
      console.log(`listening at http://localhost:${port}`);
    });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log('building resume.pdf...')
    await page.goto(`http://localhost:${port}/resume`);
    await page.waitForTimeout(1000);
    await page.pdf({
      printBackground: true,
      path: 'build/andy-fang-resume.pdf'
    });

    console.log('building cv.pdf...')
    await page.goto(`http://localhost:${port}/cv`);
    await page.waitForTimeout(1000);
    await page.pdf({
      printBackground: true,
      path: 'build/andy-fang-cv.pdf'
    });

    console.log('saving pre-rendered content...')

    await fs.writeFile('build/200.html', minify(await page.content(), {
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      collapseWhitespace: true
    }));
    await fs.unlink('build/index.html');
    
    console.log("done! cleaning up...");
    await browser.close();
    await server.close();
    console.log("closed both browser and server.")
})();
