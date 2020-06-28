const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
const decrypt = require('./decrypt');

exports.handler = (event, context, callback) => {
  let params = {
    TableName: 'SecretEncrypt',
    ExpressionAttributeNames: {
      '#id': 'uuid',
    },
    KeyConditionExpression: '#id = :uuid',
    ExpressionAttributeValues: {
      ':uuid': event.uuid,
    },
  };

  docClient.query(params, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      if (data.Count) {
        const message = data['Items'][0]['message'];
        const secret = decrypt(message);
        callback(null, secret);
      } else {
        callback(null, { errorMessage: 'Secret Not Found.' });
      }
    }
  });
};
