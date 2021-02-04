function validatePassword(str) {
  if (str.length < 8) {
    return true;
  } else if (str.search(/\d/) === -1) {
    return true;
  } else if (str.search(/[a-zA-Z]/) === -1) {
    return true;
  }
  return false;
}

export default validatePassword;
