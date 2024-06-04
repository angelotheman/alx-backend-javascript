export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const result = students.reduce((acc, curr) => acc.id + curr.id, 0);

  return result;
}
