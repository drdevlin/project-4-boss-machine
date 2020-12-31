const express = require('express');
const apiRouter = express.Router();

// Mount routers
const ideasRouter = require('./routers/ideas');
const meetingsRouter = require('./routers/meetings');
const minionsRouter = require('./routers/minions');

apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);
apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
