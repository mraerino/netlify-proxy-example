exports.handler = async event => {
  console.log(event.queryStringParameters);
  return {
    statusCode: 200,
    body: "Hello Proxy!"
  };
};
