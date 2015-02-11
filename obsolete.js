'use strict';

var obsolete = function(object, property, reason) {
  var message = 'obsolete property "'+property+'" of '+object+' removed';
  if (reason) message += ': ' + reason; 
  Object.defineProperty(object,
      property,
      {
        get:function() { throw new Error(message); },
        set:function() { throw new Error(message); }
      });
};

module.exports = obsolete;
