# node-revert-keys
take a key - value list object and invert it to be easily searchable

## usage

    var revert = require("revert-keys");
    var obj = {
      "action1":["key1","key2"],
      "action2":["key3","key4"]
    }

    var rev = revert(obj);

    /*
      { key1: 'action1',
      key2: 'action1',
      key3: 'action2',
      key4: 'action2' }
     */
