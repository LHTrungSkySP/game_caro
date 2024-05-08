const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // remotes: {
  //   "admin": "http://localhost:5300/remoteEntry.js",
  //   "game": "http://localhost:5400/remoteEntry.js",
  //   "caro": "http://localhost:4500/remoteEntry.js",
  // },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
