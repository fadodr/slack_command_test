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

    console.log(`Received a command: ${command.text}`);
    // Acknowledge the command request

    // Respond to the command
    await say({
      status: true,
      data: {
        user: {
          firstname: 'fado',
          lastname: 'agboola',
        },
      },
    });
  });

  (async () => {
    // Start the app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
  })();
} catch (error) {
  console.log(error);
}
