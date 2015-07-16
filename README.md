# intercom-api [![Build](https://img.shields.io/codeship/22c38720-0db2-0133-9521-0ae38d210868.svg)]()

> Node client for the intercom.io api using [Stallion](https://github.com/ryedog/stallion)

intercom-api uses [Stallion](https://github.com/ryedog/stallion) so it's
* minimal code
* easy to add new methods
* promised based

It's a simple wrapper around the [Intercom.io api](https://doc.intercom.io/api) so requests and responses follow their documentation
* [Common structures](https://doc.intercom.io/api/#common-api-structures)
* [Error responses](https://doc.intercom.io/api/#errors)

# Installation
```
npm install intercom-api --save
```

# Support Resources
All methods are supported on all the below resources

```
* https://api.intercom.io/admins
* https://api.intercom.io/companies
* https://api.intercom.io/contacts
* https://api.intercom.io/notes
* https://api.intercom.io/segments
* https://api.intercom.io/tags
* https://api.intercom.io/users
```

# Creating a client
```
require Intercom = require('intercom-api');

# You can find these in your app's integrations page under the "API Keys" section
var app_id = 'jbslxytr';
var api_key = '72cdef54ab2f9ecc53cc806a1b6c4ab3d40f14a4';

var intercom = new Intercom(app_id, api_key);
```

# Users

For the complete list of user attributes for the request & response see the [User Model](https://doc.intercom.io/api/#user-model)
```javascript
var data =
  user_id: 123,
  email: 'joe.montana@intercom.io',
  name: 'Joe Montana'
};

intercom.createUser(data).then(function(user) {
  // User will be an object
  // {
  //   id:
  //   user_id: 3,
  //   name: "Joe Montana",
  //   ...
  //   updated_at: 1398269574
  // }
});
```

# Todo

1. Add support for https://api.intercom.io/conversations
2. Add support for https://api.intercom.io/messages
3. Add support for https://api.intercom.io/counts
4. Add support for https://api.intercom.io/events