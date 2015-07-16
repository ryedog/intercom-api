'use strict';

var Stallion = require('stallion');


var Intercom = new Stallion({
  baseUrl: 'https://api.intercom.io',
  objects: {
    Admin: 'l',
    Company: {
      actions: 'crl',

      /**
       * Intercom uses an upsert on the POST to 
       * update the company
       * 
       * @param  {object} the company to update
       * @return {[type]}
       */
      update: function(data) {
        var options = {
          data: JSON.stringify(data)
        }
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
    User: 'crudl'
  }
});


module.exports = Intercom;