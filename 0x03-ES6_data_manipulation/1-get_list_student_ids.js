export default function getStudentsIds(arr) {
  if (!(arr instanceof Array)) {
    return [];
  }
  else {
    const map1 = arr.map((arr) => arr.id);
    return map1;
  }
}