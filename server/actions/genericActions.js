const validateBody = (req, res, next) => {
  const schemas = {
    idea: {},
    meeting: {
      time: 'string',
      date: 'object',
      day: 'string',
      note: 'string',
    },
    minion: {},
  }
  const schemaKeys = Object.keys(schemas);

  // Grab the schema that corresponds to the current route
  const currentSchemaName = schemaKeys.find(key => {
    const keyAsRegex = RegExp(key);
    return keyAsRegex.test(req.baseUrl);
  })

  const currentSchema = schemas[currentSchemaName];
  const currentSchemaKeys = Object.keys(currentSchema);
  const bodyKeys = Object.keys(req.body);
  
  const valid = currentSchemaKeys.every(schemaKey => bodyKeys.includes(schemaKey));
  if (!valid) res.status(400).send();
  next();
}

const sendResponse = (req, res) => {
  const payload = req.payload || null;
  res.send(payload);
}

module.exports = { validateBody, sendResponse };