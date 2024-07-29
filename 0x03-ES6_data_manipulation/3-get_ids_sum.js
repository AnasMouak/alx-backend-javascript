export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
