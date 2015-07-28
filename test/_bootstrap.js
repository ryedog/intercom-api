/*eslint no-extend-native:0 */
/*eslint no-unused-vars:0 */
var path = require('path');

// Convenience
global.l = console.log;

// Chai Setup
// -------------------------
global.chai   = require('chai');
global.expect = chai.expect;
global.assert = chai.assert;

var chaiSubset = require('chai-subset');
    chai.use(chaiSubset);

// Chai Promise Setup
var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);

// // Sinon Setup
// global.sinon = require("sinon");
// var sinonChai = require("sinon-chai");



global.should = chai.should();
// chai.use(sinonChai);

// Replay (Like Ruby's VCR)
global.Replay  = require('replay');
Replay.fixtures = path.join(__dirname, 'fixtures/replay');
Replay.mode = 'record';

l('Replacy', Replay.mode);

// Intercom Service
//
// These are to a TEST Intercom app, so these credentials
// can safetly be committed and used by others for
// adding additional tests / features
// -------------------------------------------------------
var app_id = 'jbslxytr';
var api_key = '72cdef54ab2f9ecc53cc806a1b6c4ab3d40f14a4';

global.Intercom = require('../lib/intercom-api.js');
global.intercom = new Intercom(app_id, api_key);


/**
 * Used to set the global var "subject" to the return
 * value of the callbacks Promise. The tests will not
 * run until the returned Promise has resolved.
 *
 * @param  {Function} The callback which returns a Promise
 * @return {Promise} which is provided to a before()
 */
global.subject = null;


var hook_promise_handle = function(hook, var_name, callback) {
  // Polymorphic
  if ( typeof var_name === 'function') {
    callback = var_name;
    var_name = 'subject';
  }

  hook.call(null, function(){
    global.promise = callback()

    .then(function(data){
      return (global[var_name] = data);
    })

    .catch(function(data){
      return (global[var_name] = data);
    });

    return global.promise;
  });
};

global.before_promise = function(var_name, callback) {
  hook_promise_handle(before, var_name, callback);
};

global.beforeEachPromise = function(var_name, callback) {
  hook_promise_handle(beforeEach, var_name, callback);
};

Array.prototype.has = function(value) {
  return this.indexOf(value) !== -1;
};


// intercom.createCompany = function(data) {
//   return Promise.resolve(data);
// }
// intercom.getCompany = function(id) {
//   return Promise.resolve(subject);
// }
// intercom.getCompanies = function() {
//   return Promise.resolve({companies: []});
// }
// intercom.updateCompany = function(data) {
//   return Promise.resolve(data);
// }
