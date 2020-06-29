# Secret App

Secret App is a serverless web application built with AWS Lambda,
Amazon API Gateway, and Amazon DynamoDB, and with React and
Material UI on the front-end.

A user's secret is not saved to the database in plaintext. It is
encrypted with 128-bit AES encryption (using the built-in Node.js
crypto module). When a user inputs a valid verification code, the
secret is retrieved from the database and decrypted for the user.

Once a secret has been viewed, it will be destroyed. The code will
not work again.

Secrets that have not been viewed within 2 days will be
automatically deleted.
