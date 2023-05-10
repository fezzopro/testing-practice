const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('invalid');
  }
  return string.length;
};
export default stringLength ;