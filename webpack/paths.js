const path = require("path");

module.exports = {
    srcPath: path.join(__dirname, "..", "src"),
    entryPath: path.join(__dirname, "..", "src", "bootstrap.js"),
    outputPath: path.join(__dirname, "..", "dist"),
    templatePath: path.join(__dirname, "..", "template.html"),
    distPath: "dist"
};
