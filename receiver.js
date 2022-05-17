const amqp = require("amqplib/callback_api");

//Step 1: Create Connection
amqp.connect("amqp://localhost", (connError, connection) => {
  if (connError) {
    throw connError;
  }
  //Step 2: Create Channel
  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }
    //Step 3: Assert thr queue
    const QUEUE = "codingtest";
    channel.assertQueue(QUEUE);

    channel.consume(QUEUE, (msg) => {
        console.log(`Message Recieved: ${msg.content}`);
    })
})
})
