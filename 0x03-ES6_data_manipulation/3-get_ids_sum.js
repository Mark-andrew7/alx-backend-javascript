export default function getStudentsIdsSum(students) {
  return students.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
}