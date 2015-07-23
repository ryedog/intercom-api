if (typeof task === 'undefined') require('./_bootstrap.js');

Replay.mode = 'record';

var promise;
var data = {
  event_name: 'My Tag',
  user_id: 3,
  created_at: 1433386800
};


describe('Event Resource', function() {

  describe('createEvent()', function() {
    beforeEach(function() {
      promise = intercom.createEvent(data);
    });


    it('creates the event', function() {
      return promise.should.eventually.be.fullfilled;
    });

    describe('when a required field is missing', function() {
      before(function() {
        data = {};
      });

      it('rejects the promise', function() {
        return promise.should.eventually.be.rejected;
      });
    });
  });

});
