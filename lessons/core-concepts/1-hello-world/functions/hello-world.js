
exports.handler = (event, context, callback) => {
  /* Step 3. In this_file, Create a `200` response code and return the `event` data in the response body.

    The response needs a `statusCode` and a `body` object returned. Remember to `JSON.stringify` the body.

    For more details, see the [docs](https://bit.ly/2uEFyKU)
  */
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    }),
  }
  /** Node style callback(error, response) */
  return callback(null, response)
}
