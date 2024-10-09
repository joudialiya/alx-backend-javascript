namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number,
  }

  export class Cpp extends Subjects.Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    public getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC || this.teacher.experienceTeachingC < 1) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}