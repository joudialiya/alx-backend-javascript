export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((e) => e.location === city)
    .map((e) => ({
      ...e,
      grade: (newGrades.filter((grade) => grade.studentId === e.id).length > 0)
        ? newGrades.filter((grade) => grade.studentId === e.id)[0].grade : 'N/A',
    }));
}
