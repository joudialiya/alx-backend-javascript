import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err || !data) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const majorStudentsMap = {};
      const lines = data.trim().split('\n').slice(1);
      for (const line of lines) {
        const firstname = line.split(',')[0];
        const major = line.split(',')[3];
        if (majorStudentsMap[major]) {
          majorStudentsMap[major].push(firstname);
        } else {
          majorStudentsMap[major] = [firstname];
        }
      }
      resolve(majorStudentsMap);
    });
  });
}
module.exports = readDatabase;
