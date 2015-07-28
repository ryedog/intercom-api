'use strict';

var data;

describe('Count Resource', function() {

  beforeEachPromise(function() {
    return intercom.getCounts(data);
  });

  describe('getCounts()', function() {
    it('gets the app counts', function() {
      subject.should.have.property('company');
      subject.should.have.property('user');
      subject.should.have.property('tag');
    });
  });

  describe('getCounts() for conversations', function() {
    before(function() {
      data = { type: 'conversation' };
    });

    it('gets the conversation counts', function() {
      subject.should.have.property('conversation');
    });
  });

  describe('getCounts() for conversations', function() {
    before(function() {
      data = { type: 'conversation', count: 'admin' };
    });

    it('gets the conversation counts for admins', function() {
      subject.should.have.property('conversation');
      subject.conversation.should.have.property('admin');
    });
  });

});
