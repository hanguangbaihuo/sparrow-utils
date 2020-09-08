function defaultCompare(a, b) {
  if (Object.is(a, b)) {
    return 0;
  }
  return a < b ? -1 : 1;
}

export default defaultCompare;
