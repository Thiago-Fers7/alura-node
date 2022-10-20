import { connect } from 'mongoose';

const uri = 'mongodb+srv://main-cluster.il3rvjk.mongodb.net/node-auth';
const password = '123';
const username = 'node-auth-app';

async function run() {
  connect(
    uri,
    {
      auth: {
        password,
        username,
      },
    },
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to database');
      }
    },
  );
}

run();
