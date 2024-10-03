export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof len === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get students() {
    return this._students;
  }

  set students(list) {
    if (Array.isArray(list) && list.every((e) => typeof e === 'string')) {
      this._students = list;
    } else {
      throw new TypeError('Name must be an array of strings');
    }
  }
}
