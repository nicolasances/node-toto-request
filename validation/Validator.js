
exports.validate = (req) => {

  if (req.microservice == null) return {code: 400, 'Missing "microservice" field. That should contain the host name of the microservice.'};
  if (req.correlationId == null) return {code: 400, 'Missing "correlationId" field.'}

  return {code: 200};

}
