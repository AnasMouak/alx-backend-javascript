export default function updateStudentGradeByCity(students, city, newGrades) {
  const studCity = students.filter((student) => student.location === city);

  const updatedStudents = studCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (studentGrade) {
      return { ...student, grade: studentGrade.grade || 'N/A' };
    }
    return { ...student, grade: 'N/A' };
  });

  return updatedStudents;
}
