/**
 * Created by hui on 2017/8/8.
 */
const detector = require('./index.js');
let assert = require('assert');
describe('Node', ()=> {
  describe('#node', ()=> {
    it('should return true', ()=> {
      assert.equal(detector.node, true);
    });
  });
});

describe('Window', ()=> {
  describe('#widow', ()=> {
    it('should return false', ()=> {
      assert.equal(detector.win, false);
    });
  });
});