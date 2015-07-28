describe('Companies Resource', function() {
  var company;
  var data = {
    name: 'Acme Co.',
    company_id: '2'
  };


  describe('createCompany()', function() {
    before_promise(function() {
      return intercom.createCompany(data);
    });

    it('returns the created company', function() {
      company = subject;
      subject.should.containSubset(data);
    });
  });

  describe('Add a user to a company', function() {
    var user;

    before_promise(function() {
      user = {
        email: 'ryanmhubbard+5@gmail.com',
        companies: [{
          id: company.id
        }]
      };

      return intercom.createUser(user);
    });

    it('associates the user to the company', function(){
      subject.companies.companies.should.have.length.above(0);
    });
  });

  describe('getCompany()', function() {
    it('returns the company', function() {
      return intercom.getCompany(company.id)
        .should.eventually.containSubset(data);
    });
  });

  // FYI Companies do not show up in companies list
  // unless there are users associated with them
  describe('getCompanies()', function() {
    before_promise(function() {
      return intercom.getCompanies();
    });
    it('returns list of companies', function() {
      return intercom.getCompanies()
        .should.eventually.have.property('companies');
    });
  });

  describe('updateCompany()', function() {
    before_promise(function(){
      data.name = 'Roadrunner Productions';
      return intercom.updateCompany(data);
    });

    it('returns the updated company', function() {
      return subject.should.containSubset(data);
    });
  });

});
