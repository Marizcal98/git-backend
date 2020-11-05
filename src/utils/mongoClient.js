const { connect } = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const succesfulConnectionMsg = ({ connections }) => {
  const reducer = (acc, { name, user }) => `${acc} database: ${name} as user: ${user}\n`;
  return connections.reduce(reducer, 'Connected to: \n ');
};

connect(process.env.MONGO_URI, options)
  .then((connection) => {
    console.log(succesfulConnectionMsg(connection));
  })
  .catch((error) => {
    console.log(`Error connecting to DB: ${error.message}`);
  });
