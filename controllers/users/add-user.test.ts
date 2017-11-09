const { addUser } = require('./add-user');
const { query } = require('../../db');

test('Can add user', async () => {
  afterEach(() => {
    query('users', (col) => {
      col.deleteOne({ email: 'kingbyers+test@gmail.com' });
    });
  });

  const addUserRes = await addUser('kingbyers+test@gmail.com');
  expect(addUserRes).toEqual(true);
});
