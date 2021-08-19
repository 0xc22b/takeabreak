/**
 * Exclude objects in an object that meets the criteria.
 **/
const exclude = (obj, key, value) => {
  if (Array.isArray(obj)) throw new Error(`Must be obj, not arr: ${obj}`);

  const newObj = {};
  for (const id in obj) {
    if (Array.isArray(value)) {
      if (value.includes(obj[id][key])) {
        continue;
      }

      newObj[id] = obj[id];
      continue;
    }

    if (obj[id][key] === value) {
      continue;
    }
    newObj[id] = obj[id];
  }
  return newObj;
};

export const _ = { exclude };
