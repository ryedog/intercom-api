
exports.behaves_like_an_object = function(type, data) {

  it('returns a promise that is fullfilled', function() {
    return promise.should.be.fulfilled;
  });

  it('returns an object with type "' + type + '"', function() {
    return promise.should.eventually.have.property('type', type);
  });

  it('returns an object with all the same data', function() {
    return promise.should.eventually.containSubset(data);
  });

};
