# Secret App

Secret App is a serverless web application built with AWS Lambda,
Amazon API Gateway, and Amazon Dynamodb, and with React and
Material UI on the front-end.

A user's secret is not saved to the database in plaintext. It is
ciphered with the crypto npm module. When a user inputs a valid
verification code, the secret is retrieved from the database and
deciphered for the user.

Once a secret has been viewed, it will be destroyed. The code will
not work again.

Secrets that have not been viewed within 2 days will be
automatically deleted.
