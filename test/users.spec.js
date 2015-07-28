'use strict';

var shared = require('./shared.js');
var data = {email: 'ryanmhubbard+1@gmail.com'}
  , user;

describe('Users Resource', function() {

  describe('createUser()', function() {
    before_promise(function() {
      return intercom.createUser(data);
    });

    it('returns a promise that is fullfilled', function() {
      return promise.should.be.fulfilled;
    });

    it('returns an object with type "user"', function() {
      return promise.should.eventually.have.property('type', 'user');
    });

    it('returns an object with type "user"', function() {
      subject.should.containSubset(data);
      user = subject;
    });
  });


  describe('updateUser()', function() {
    var updated_user = {
      email: data.email,
      name: 'Hurricane Hubbard'
    };

    before_promise(function() {
      return intercom.updateUser(updated_user);
    });

    it('returns the same id as the previously created user', function() {
      subject.id.should.eql(user.id);
    });

    it('updates the user', function() {
      subject.name = updated_user.name;
    });
  });


  describe('getUser() with an id', function() {
    it('returns the user', function() {
      return intercom.getUser(user.id).should.eventually.containSubset(data);
    });
  });


  describe('getUser() with an email', function() {
    it('returns the user', function() {
      return intercom.getUser({ email: user.email })
        .should.eventually.containSubset(data);
    });
  });


  describe('getUsers()', function() {
    before_promise(function() {
      return intercom.getUsers();
    });

    it('returns at least 1 user', function() {
      subject.should.have.property('users');

      subject.should
        .have.property('total_count')
        .be.at.least(1);
    });

  });


  describe('deleteUser() with an id', function() {
    it('returns the user', function() {
      return intercom.deleteUser(user.id).should.eventually.containSubset(data);
    });
  });


  describe('deleteUser() with an email', function() {
    var data2 = {email: 'ryanmhubbard+2@gmail.com'};

    before_promise(function() {
      // Create the user
      return intercom.createUser(data2)

      // Delete the user
      .then(function() {
        return intercom.deleteUser({ email: data2.email });
      });
    });

    shared.behaves_like_an_object('user', data2);
  });
});
