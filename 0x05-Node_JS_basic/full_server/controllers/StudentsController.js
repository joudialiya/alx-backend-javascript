import readDatabase from '../utils';

const AVAILABLE_MAJORS = ['CS', 'SWE'];
const path = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then((data) => {
        const chunks = ['This is the list of our students'];
        let numberOfStudent = 0;
        const fields = Object.getOwnPropertyNames(data);
        for (const field of fields) {
          chunks.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
          numberOfStudent += data[field].length;
        }
        chunks.splice(1, 0, `Number of students: ${numberOfStudent}`);
        response
          .status(200)
          .end(chunks.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .end(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!AVAILABLE_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
      .then((data) => {
        let text = '';
        if (Object.keys(data).includes(major)) {
          text = `List: ${data[major].join(', ')}`;
        }
        response.status(200).send(text);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
