# Least Recently Used (LRU) Cache Algorithm - Javascript

A fixed size Least Recently Used (LRU) algorithm, where most recently used items are kept
at the top of the cache while least recently used items are evicted once cache is filled to max.

## Usage

Check `run.js` for how to use and test cases.

```js
const LRU = require('./lru');

var lru = new LRU(3);
lru.set('a', 1);  // a
lru.set('b', 2);  // b-a
lru.set('c', 3);  // c-b-a
lru.get('a');     // a-c-b
lru.set('d', 4);  // d-a-c
lru.get('d');     // d-a-c
lru.get('c')      // c-d-a
lru.set('e', 5)   // e-c-d
console.log(lru.getNodes());   // [ 'e', 'c', 'd' ]
console.log(lru.getCache());   // { c: 3, d: 4, e: 5 }
```

# MIT license

Copyright (c) 2010-2016 Tim Hysniu <http://hysniu.com/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
