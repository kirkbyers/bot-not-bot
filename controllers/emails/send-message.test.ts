import { sendMessage } from './send-message';

test('Mail transport test', async () => {
  beforeEach(() => {
    process.env.NODE_ENV = 'production';
  });
  const sentMessage = await sendMessage('kingbyers@gmail.com', 'Test Message', `
  <p>Hello,
  This is a test.
  </p>
  `);
  expect(sentMessage).toEqual(true);
});
