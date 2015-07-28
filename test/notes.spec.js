'use strict';

var data = {user_id: 3};


intercom.createUser({
  email: 'ryanmhubbard+3@gmail.com',
  user_id: 3
});

describe('Notes Resource', function() {

  describe('getNotes() for a user', function() {
    before_promise(function() {
      return intercom.getNotes(data);
    });

    it('returns the users notes', function() {
      subject.notes.length.should.be.at.least(1);
    });
  });


  describe('getNote() by id', function() {
    var data2 = {
      id: '3105339',
      type: 'note',
      body: '<p>First test note</p>'
    };
    it('returns the Note', function() {
      return intercom.getNote(data2.id)
        .should.eventually.containSubset(data2);
    });
  });

  describe('createNote()', function() {
    var note = {
      user: data,
      body: 'Note created via test'
    };

    before_promise(function() {
      return intercom.createNote(note);
    });

    it('returns the created note', function() {
      subject.should.have.property('type', 'note');
      subject.body.should.have.string(note.body);
    });
  });

});
