var assert = require('assert'),
    oi = require('@oi/oi'),
    pluginFn = require('../index');

describe("Sysl Oi module", () => {
    it("can be loaded", () => {
        var plugin = pluginFn(null, null, null);
        assert.equal(plugin.command, 'sysl');
    });

    it("can be loaded as a module", () => {
        var plugin = pluginFn();
        var module = new oi.Module(plugin);
        assert.equal(module.command, 'sysl');
    });
});
