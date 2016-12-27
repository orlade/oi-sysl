var oi = require('@oi/oi');

module.exports = function (data, host, options) {
  return new oi.Module({
    command: "sysl",
    describe: "Runs actions on the Sysl repository",
    actions: {
      build: {
        describe: "Builds Sysl from source",
        handler: (name, options) => oi.utils.exec('bazel build ...')
      },
      test: {
        describe: "Tests the Sysl sources",
        handler: (name, options) => oi.utils.exec('bazel test ...')
      }
    },
    config: {
      workspace: '${workspace}/Sysl'
    },
    requireConfig: {
      workspace: true
    }
  });
};
