require('dotenv').config();
require('./utils/mongoClient.js');
const { app, PORT } = require('./api/index.js');

app.listen(PORT, () => {
  console.log(`Server initialized on PORT: ${PORT}`);
});
