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

    //Step 4 Send message to the queue
    channel.sendToQueue(QUEUE, Buffer.from("hello"));
    console.log("Message Sent");
  });
});
