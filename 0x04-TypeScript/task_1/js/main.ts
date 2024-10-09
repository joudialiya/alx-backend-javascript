interface Teatcher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [prop: string]: any,
}

interface Director extends Teatcher {
  numberOfReports: number,
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string,
}

const printTeacher: printTeacherFunction = function (
  firstName: string, 
  lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public workOnHomework(): string {
    return 'Currently working';
  }

  public displayName(): string {
    return this.firstName;
  }
}
