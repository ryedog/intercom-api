'use strict';

var data = {id: '5585c51af84d21785f000206'};

describe('Segments Resource', function() {

  describe('getSegments()', function() {
    before_promise(function() {
      return intercom.getSegments();
    });

    it('returns a promise that is fullfilled', () => {
      subject.segments.length.should.be.at.least(3);
    });
  });


  describe('getSegment() by id', function() {
    it('returns the Segment', function() {
      return intercom.getSegment(data.id)
        .should.eventually.containSubset(data);
    });
  });

});
