'use strict';

var Stallion = require('stallion');


var Intercom = new Stallion({
  baseUrl: 'https://api.intercom.io',
  objects: {
    Admin: 'l',
    Company: {
      actions: 'crl',

      // Intercom only has an upsert and uses POST
      update: function(data) {
        var options = {
          data: JSON.stringify(data)
        };
        return this.post('companies', options);
      }
    },
    Contact: {
      actions: 'crudl',
      convert: function(data) {
        var options = {data: data};

        return this.post('contacts/convert', options);
      }
    },
    Note: 'crl',
    Segment: 'rl',
    Tag: 'cudl',
    User: {
      actions: 'crdl',

      // Intercom only has an upsert and uses POST
      update: function(data) {
        var options = {
          data: JSON.stringify(data)
        };
        return this.post('users', options);
      }
    }
  }
});


module.exports = Intercom;
