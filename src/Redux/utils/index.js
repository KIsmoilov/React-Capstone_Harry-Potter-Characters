import nextId from 'react-id-generator';

export default function pick(obj, arr) {
  const single = arr.reduce((acc, record) => {
    acc[record] = obj[record];
    return acc;
  }, {});

  return single;
}

export const addId = (array) => {
  const characters = array.map((obj) => ({ ...obj, id: nextId() }));
  return characters;
};
