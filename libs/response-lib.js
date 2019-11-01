export function success(body) {
  return createResponse(200, body);
}

export function failure(body) {
  return createResponse(500, body);
}

function createResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    }
  };
}
