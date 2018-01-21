import uuidv4 from 'uuid/v4';

export const modifiedData = (list) => list.map(item => Object.assign({}, item, {
  id: uuidv4(),
  isBeingEdit: false
}));
