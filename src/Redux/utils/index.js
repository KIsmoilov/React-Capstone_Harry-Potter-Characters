/* eslint-disable no-return-assign */
import nextId from 'react-id-generator';

export default function pick(obj, arr) {
  // eslint-disable-next-line no-sequences
  return arr.reduce((acc, record) => (record in obj && (acc[record] = obj[record]), acc), {});
}

export const addId = (array) => {
  const characters = array.map((obj) => ({ ...obj, id: nextId() }));
  return characters;
};
