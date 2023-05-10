const capitalized = (string) => {
  if (string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  throw new Error('Empty String');
};

export default capitalized;