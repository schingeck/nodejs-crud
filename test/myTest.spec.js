require('dotenv').config();

const theValue = require('../lib/test');

describe('my test, test', () => {
  it('tests everything else', () => {
    console.log(theValue);
    console.log(process.env.DATABASE_PASSWORD);
  });
});
