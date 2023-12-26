const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

try {

const app = new App({
  signingSecret: process.env.SECRET,
  token: process.env.TOKEN,
});

app.command('/fado-ag', async ({ command, ack, say, context }) => {
      await ack();

      await say('welcome my king');
    //   /* Add functionality here */
});


(async () => {
    // Start the app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();
} catch (error) {
    console.log(error);
}
