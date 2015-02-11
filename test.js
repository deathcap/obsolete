
var test = require('tape');
var obsolete = require('./');

var object = {good: 123};
obsolete(object, 'bad');

test('existing valid property unaffected', function(t) {
  t.equal(object.good, 123);
  t.end();
});

test('obsolete property get throws', function(t) {
  t.throws(function() {
    //console.log(object.bad);
    object.bad;
  });
  t.end();
});

test('obsolete property set throws', function(t) {
  t.throws(function() {
    object.bad = 0;
  });
  t.end();
});

test('obsolete property call throws', function(t) {
  t.throws(function() {
    object.bad();
  });
  t.end();
});

