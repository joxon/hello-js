const fs = require("fs");
const glob = require("glob");
const imageToBase64 = require("image-to-base64");

const rootDirPath = "test/";
const imageDirPath = "test/images/";

let htmlPath;
let htmlName;
let htmlData;

(() => {
  glob(rootDirPath + "*.html", (err, htmls) => {
    htmlPath = htmls[0];
    htmlName = htmlPath.split("/")[1];
    htmlData = fs.readFileSync(htmlPath, "utf-8");
    const images = fs.readdirSync(imageDirPath);
    images.forEach((image) => {
      const imagePath = imageDirPath + image;
      imageToBase64(imagePath).then((res) => {
        const src = "images/" + image;
        console.log(`replacing ${imagePath}`);
        console.assert(htmlData.includes(src), `${src} not found in data`);
        htmlData = htmlData.replace(src, "data:image/png;base64," + res);
      });
    });
  });

  setTimeout(() => {
    fs.writeFileSync(htmlName, JSON.stringify(htmlData));
    console.log(`data written to ${htmlName}`);
  }, 3000);
})();
