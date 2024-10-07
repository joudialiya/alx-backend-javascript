export default function getStudentsByLocation(list, city) {
  return list.filter((e) => e.location === city);
}
