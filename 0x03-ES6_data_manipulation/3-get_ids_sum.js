export default function getStudentIdsSum(list) {
  return list.reduce((prev, curr) => prev.id + curr.id);
}
