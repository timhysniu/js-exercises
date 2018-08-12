'use strict';

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
