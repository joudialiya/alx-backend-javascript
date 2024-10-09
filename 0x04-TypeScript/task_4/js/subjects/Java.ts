namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number,
  }

  export class Java extends Subjects.Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    public getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava < 1) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}