const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = (event, context, callback) => {
  console.log('processing event: ', event);

  let params = {
    TableName: 'Secret',
    ExpressionAttributeNames: {
      '#id': 'uuid',
    },
    KeyConditionExpression: '#id = :uuid',
    ExpressionAttributeValues: {
      ':uuid': event.uuid,
    },
  };

  console.log('params: ', params);

  docClient.query(params, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};
