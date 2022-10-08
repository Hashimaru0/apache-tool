import fetch from "node-fetch";

const API_ENDPOINT = "https://steamspy.com/api.php?request=top100in2weeks";
const testapi = "https://jsonplaceholder.typicode.com/todos";

exports.handler = async (event, context) => {
  let response;
  try {
    let testData = await fetch(API_ENDPOINT);
    let testJSON = await testData.json();
    response = testJSON;
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response,
    }),
  };
};
