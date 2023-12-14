module.exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const allowedOrigins = [origin]; // Puedes agregar más hosts permitidos si es necesario.

  const responseHeaders = {
    'Access-Control-Allow-Origin': allowedOrigins.join(', '),
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': true,
  };


  // Agrega un retraso de 5 segundos usando setTimeout y await
  await new Promise(resolve => setTimeout(resolve, 5000));

  const message = `Nice bro`;

  return {
    statusCode: 200,
    headers: responseHeaders,
    body: JSON.stringify({ message }),
  };
};
