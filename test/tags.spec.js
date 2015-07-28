'use strict';
/*global tag*/

var data = { name: 'My Tag'};

describe('Tag Resource', function() {

  describe('createTag()', function() {
    before_promise('tag', function() {
      return intercom.createTag(data);
    });

    it('creates the tag', function() {
      tag.should.containSubset(data);
    });
  });

  describe('updateTag()', function() {
    before_promise('tag', function() {
      data = {
        id: tag.id,
        name: 'My New Tag name'
      };

      return intercom.createTag(data);
    });

    it('creates the tag', function() {
      tag.should.containSubset(data);
    });
  });


  describe('getTags()', function() {
    before_promise(function() {
      return intercom.getTags();
    });

    it('returns at least 1 tag', function() {
      subject.should.have.property('tags');
      subject.tags.length.should.be.at.least(1);
    });
  });

  describe('deleteTag() with an id', function() {
    it('returns the tag', function() {
      return intercom.deleteTag(tag.id).should.be.fulfilled;
    });
  });

});
