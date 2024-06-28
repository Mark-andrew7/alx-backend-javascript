export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = this.verifyType(name, 'string', 'Name');
      this._length = this.verifyType(length, 'number', 'Length');
      this._students = this.verifyArrayOfStrings(students, 'Students');
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = this.verifyType(value, 'string', 'Name');
    }
  
    get length() {
      return this._length;
    }
  
    set length(value) {
      this._length = this.verifyType(value, 'number', 'Length');
    }
  
    get students() {
      return this._students;
    }
  
    set students(value) {
      this._students = this.verifyArrayOfStrings(value, 'Students')
    }
  
    verifyType(value, expectedType, attributeName) {
      if (typeof value !== expectedType) {
        throw new TypeError(`${attributeName} must be a ${expectedType}`);
      }
      return value;
    }

    verifyArrayOfStrings(value, attributeName) {
        if (!Array.isArray(value)) {
            throw new TypeError(`${attributeName} must be an array of strings`);
        }
        if (!value.every(item => typeof item === 'string')) {
            throw new TypeError(`${attributeName} must be an array of strings`);
        }
        return value;
    }
  }
  