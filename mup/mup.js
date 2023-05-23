module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: 'XX.XXX.XXX.X',
      username: 'ubuntu',
      pem: '~/Meteor/moopt-codespace-action/mup/XXXX.pem'
      // password: 'PASSWORD?!'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'mooptos',
    path: '~/Meteor/moopt-codespace-action/moopt',
    volumes: {
      '/opt/.static':'/.static'
    },
    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'https://os.moopt.com',
      MONGO_URL: 'mongodb://mongodb/meteor', 
      //MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'zodern/meteor:root', //'abernix/meteord:node-8.4.0-base',
      //args: ['--add-host="host-name:ip-address"', '--add-host="host-2:1.1.1.1"'],
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true,

    ssl: {
      autogenerate: {
        email: 'kafechew@moopt.com',
        domains: 'moopt.com'
      }
    }
  },

  /*mongo: {
    version: '5.0',
    servers: {
      one: {}
    }
  },*/

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
