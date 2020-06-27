const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
const { v4: uuidv4 } = require('uuid');
const encrypt = require('./encrypt');

exports.handler = (event, context, callback) => {
  console.log('processing event: ', event);

  let params = {
    Item: {
      uuid: uuidv4(),
      message: encrypt(event.message),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 2,
    },

    TableName: 'SecretEncrypt',
  };
  console.log('params: ', params);

  docClient.put(params, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, params.Item.uuid);
    }
  });
};
