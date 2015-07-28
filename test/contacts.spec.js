'use strict';
/*eslint no-unused-vars:0 */

var contacts
  , data1 = {email: 'ryanmhubbard+4@gmail.com'}
  , data2 = {email: 'ryanmhubbard+3@gmail.com'};


describe('Contacts Resource', function() {

  before_promise(function() {
    return Promise.all([
      intercom.createContact(data1),
      intercom.createContact(data2)
    ]);
  });


  describe('createContact', function() {
    it('creates the contact', function() {
      contacts = subject;

      contacts[0].id.should.not.eq(null);
      contacts[0].email.should.eq(data1.email);
      contacts.should.have.length(2);
    });
  });


  describe('getContacts()', function() {
    before_promise(function() {
      return intercom.getContacts();
    });

    it('returns a list of contacts', function() {
      subject.should.have.property('contacts');
      subject.contacts.should.have.length.of.at.least(2);
    });
  });


  describe('getContact() with an id', function() {
    before_promise(function(){
      return intercom.getContact(contacts[0].id);
    });

    it('returns the contact', function() {
      subject.should.containSubset(contacts[0]);
    });
  });


  describe('getContact() with a user_id', function() {
    before_promise(function(){
      return intercom.getContact({ user_id: contacts[1].user_id});
    });

    it('returns the contact', function() {
      subject.should.containSubset(contacts[1]);
    });
  });


  describe('convertContact()', function() {
    before_promise(function() {
      return intercom.convertContact(contacts[0]);
    });

    after(function() {
      intercom.deleteUser(subject.id);
    });

    it('converts the contact', function() {
      subject.should.have.property('type', 'user');
      subject.should.have.property('email', contacts[0].email);
    });
  });


  describe('deleteContact()', function() {
    before_promise(function() {
      return intercom.deleteContact(contacts[1]);
    });

    it('deletes the contact', function() {
      subject.should.have.property('email', contacts[1].email);
    });
  });

});
