interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  public workFromHome(): string {
    return 'Working from home';
  }

  public getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  public workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teatcher implements TeacherInterface {
  public workFromHome(): string {
    return 'Cannot work from home';
  }

  public getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  public workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Teatcher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teatcher();
  }
  return new Director();
}

function isDirector(employee: Teatcher | Director): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Teatcher | Director): void {
  if (employee instanceof Teatcher) {
    employee.workTeacherTasks();
  } else if (employee instanceof Director) {
    employee.workDirectorTasks();
  }
}

type Subject = 'Math' | 'History';

function teachClass(todayClass: Subject): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}
