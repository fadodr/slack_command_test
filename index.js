const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

try {

const app = new App({
  signingSecret: process.env.SECRET,
  token: process.env.TOKEN,
});

app.command('/fado', async ({ command, ack, say }) => {
  // Acknowledge the command request
  await ack();

  // Respond to the command
  await say(`Received a command: ${command.text}`);
});

(async () => {
    // Start the app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();
} catch (error) {
    console.log(error);
}
