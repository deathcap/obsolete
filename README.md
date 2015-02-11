# obsolete

Mark removed properties as obsolete so they throw an exception when used

[![Build Status](https://travis-ci.org/deathcap/obsolete.png)](https://travis-ci.org/deathcap/obsolete)

Usage:

    var obsolete = require('obsolete');

    var foo = {};
    obsolete(foo, 'bar');

    // throws exceptions 'obsolete property "bar" removed'
    foo.bar;
    foo.bar = 1;
    foo.bar();

Uses [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
with a custom `get`ter and `set`ter to throw `Error` exceptions on usage.

Useful to cause old dependant code that needs to be updated to
fail fast and fail early as possible, instead of returning and propagating
invalid data (`undefined`) leading to hard-to-track-down errors further down the line.

## License

MIT

