const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
const { v4: uuidv4 } = require('uuid');

exports.handler = function(event, context, callback) {
  console.log('processing event: ', event);

  let params = {
    Item: {
      uuid: uuidv4(),
      message: event.message,
    },

    TableName: 'Secret',
  };
  console.log('params: ', params);

  docClient.put(params, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};
