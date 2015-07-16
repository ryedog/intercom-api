describe('Admins Resource', function() {
  var id = 109625;


  describe('getAdmins()', function() {
    before_promise(function() {
      return intercom.getAdmins();
    });

    it('returns list of admins', function() {
      subject.should.have.property('admins');
    });

    it('should have at least 1 admin', function() {
      subject.admins.should.have.length.above(0);
    });

    it('should have admin ' + id, function(){
      subject.admins[0].should.have.property('id', id);
    });
  });

});
