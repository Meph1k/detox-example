const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');

if (!Array.prototype.flatMap) {
  Object.defineProperty(Array.prototype, 'flatMap', {
    value: function(callback, thisArg) {
      var self = thisArg || this;
      if (self === null) {
        throw new TypeError( 'Array.prototype.flatMap ' +
          'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback +
          ' is not a function');
      }

      var list = [];

      // 1. Let O be ? ToObject(this value).
      var o = Object(self);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      for (var k = 0; k < len; ++k) {
        if (k in o) {
          var part_list = callback.call(self, o[k], k, o);
          list = list.concat(part_list);
        }
      }

      return list;
    }
  });
}

// Set the default timeout
jest.setTimeout(60000);
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await detox.init(config);
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
