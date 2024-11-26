const http = require('http');
const fs = require('fs');

const PORT = 1245;
const DB_FILE = process.argv[2] ? process.argv[2] : 'database.csv';
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const majorStudentsMap = {};
      const lines = data.trim().split('\n').slice(1);
      let res = '';
      for (const line of lines) {
        const firstname = line.split(',')[0];
        const major = line.split(',')[3];
        if (majorStudentsMap[major]) {
          majorStudentsMap[major].push(firstname);
        } else {
          majorStudentsMap[major] = [firstname];
        }
      }
      res += `Number of students: ${lines.length}\n`;
      const majors = Object.getOwnPropertyNames(majorStudentsMap);
      for (const major of majors) {
        res += `Number of students in ${major}: ${majorStudentsMap[major].length}. List: ${majorStudentsMap[major].join(', ')}\n`;
      }
      resolve(res);
    });
  });
}
const app = http.createServer((req, res) => {
  const text = 'Hello Holberton School!';
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  switch (req.url) {
    case '/':
      res.end(text);
      break;
    case '/students':
      countStudents(DB_FILE)
        .then((value) => res.end(value))
        .catch((err) => res.end(err.toString()));
      break;
    default:
      break;
  }
});
app.listen(PORT);

module.exports = app;