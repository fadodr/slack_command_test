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

    const [param, email] = command.text.split(',');

    if (param == 'no') {
      await say(
        `We could not find the user ${email} requested by @${command.user_name}. Please, check and try again`
      );
    } else {
      const user = {
        firstName: 'fuad',
        lastName: 'Agboola',
        email: 'agboola@gmial.com',
      };

      const response = `First Name: ${user.firstName}\nLast Name: ${user.lastName}\nEmail: ${user.email}`

      await say(
        `Here’s the profile of user, ${email} requested by @${command.user_name
        } \n\n ${response}`
      );
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
