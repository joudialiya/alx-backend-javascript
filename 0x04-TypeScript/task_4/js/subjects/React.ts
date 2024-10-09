namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number,
  }

  export class React extends Subjects.Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    public getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact < 1) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}