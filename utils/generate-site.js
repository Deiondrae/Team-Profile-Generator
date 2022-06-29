//require file system to be able to write and copy files
const fs = require('fs');
//writes new index.html file in dist folder
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};
//copies css from src folder for the index.html
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err =>{
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "Stylesheet Created!"
            });
        });
    });
};

module.exports = {writeFile, copyFile};
