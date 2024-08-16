function isEqual(dict, other) {
  if (typeof dict !== 'object' || typeof other !== 'object') {
    return false;
  }
  if (Object.keys(dict).length !== Object.keys(other).length) {
    return false;
  }
  for (let key in dict) {
    if (!Object.prototype.hasOwnProperty.call(dict, key)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(other, key)) {
      return false;
    }
    if (dict[key] !== other[key]) {
      return false;
    }
  }
  return true;
}
