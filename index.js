const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

try {
  const app = new App({
    signingSecret: process.env.SECRET,
    token: process.env.TOKEN,
  });

  app.command('/fado', async ({ command, ack, say }) => {
    await ack();

    const param = command.text;

    if (param == 'no') {
      await say('We could not find this user. Please, check and try again');
    } else {
      const user = {
        firstName: 'fuad',
        lastName: 'Agboola',
        email: 'agboola@gmial.com',
      };

      await say(`User profile : ${JSON.stringify(user)}`);
    }

    return;
  });

  (async () => {
    // Start the app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
  })();
} catch (error) {
  console.log(error);
}
