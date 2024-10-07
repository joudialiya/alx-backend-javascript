export default function getStudentIdsSum(list) {
  return list.reduce((accu, curr) => accu + curr.id, 0);
}
