describe('Intercom api', function(){

  describe('Api methods', function() {
    var sample_methods = [
      'createUser',
      'deleteContact',
      'updateCompany',
      'getAdmins'
    ];

    it('should be the correct count', function() {
      Intercom.api.should.have.length(25);
    });

    it('sampling of methods should be available', function() {
      for (var method of sample_methods)
        intercom.should.respondTo(method);
    });

  });

});
