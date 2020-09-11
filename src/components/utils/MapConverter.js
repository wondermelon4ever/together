// convert Map to object
export const mapToObj = (map) => {
  return Array.from(map).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
};