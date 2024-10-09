interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const s1: Student = {
  firstName: 'Joudia',
  lastName: 'Gaia',
  age: 23,
  location: 'Earth',
};

const s2: Student = {
  firstName: 'Hestia',
  lastName: 'Gaia',
  age: 23,
  location: 'Earth',
};

const studentsList: Array<Student> = [s1, s2];
const table = document.createElement('table');
studentsList.forEach((s) => {
  const row = table.insertRow();
  row.insertCell().textContent = s.firstName;
  row.insertCell().textContent = s.location;
});
document.body.appendChild(table);
