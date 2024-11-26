const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
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
      console.log(`Number of students: ${lines.length}`);
      const majors = Object.getOwnPropertyNames(majorStudentsMap);
      for (const major of majors) {
        console.log(`Number of students in ${major}: ${majorStudentsMap[major].length}. List: ${majorStudentsMap[major].join(', ')}`);
      }
    });
    resolve(true);
  });
}
module.exports = countStudents;
