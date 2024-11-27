import readDatabase from '../utils';

const AVAILABLE_MAJORS = ['CS', 'SWE'];
const path = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then((data) => {
        const chunks = ['This is the list of our students'];
        const fields = Object.getOwnPropertyNames(data).sort();

        for (const field of fields) {
          chunks.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
        }
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
        response.status(200).end(text);
      })
      .catch((err) => {
        response
          .status(500)
          .end(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
