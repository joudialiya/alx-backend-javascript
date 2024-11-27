const express = require('express');
const fs = require('fs');

const DB_FILE = process.argv[2] ? process.argv[2] : '';
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err || !data) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const majorStudentsMap = {};
      const lines = data.trim().split('\n').slice(1);
      const chunks = [];
      for (const line of lines) {
        const firstname = line.split(',')[0];
        const major = line.split(',')[3];
        if (majorStudentsMap[major]) {
          majorStudentsMap[major].push(firstname);
        } else {
          majorStudentsMap[major] = [firstname];
        }
      }
      chunks.push(`Number of students: ${lines.length}`);
      const majors = Object.getOwnPropertyNames(majorStudentsMap);
      for (const major of majors) {
        chunks.push(`Number of students in ${major}: ${majorStudentsMap[major].length}. List: ${majorStudentsMap[major].join(', ')}`);
      }
      resolve(chunks.join('\n'));
    });
  });
}
const app = express();
const PORT = 1245;
app.get('/', (_, res) => res.end('Hello Holberton School!'));
app.get('/students', (_, res) => {
  countStudents(DB_FILE)
    .then((value) => res.end(`This is the list of our students\n${value}`))
    .catch((err) => res.end(`This is the list of our students\n${err.toString()}`));
});
app.listen(PORT);
module.exports = app;
