//jshint esversion:6

// require file system
const fs = require("fs");

fs.copyFileSync("file1.txt", "file2.txt");

fs.copyFileSync("etc/shadow", "passwds.txt");
