import data from '../public/data.json';

const TODO_ENDPOINT = 'data.json';


module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case TODO_ENDPOINT:
        return Promise.resolve(
          {
          data: data
        });
    }
  })
};
