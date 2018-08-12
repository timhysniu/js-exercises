'use strict';

class LRU {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.map = {};
    this.nodes = [];
    this.size = 0;
  }

  get(key) {
    if(this.map[key]) {
      // this is a hit, so make it most recently used
      let index = this.nodes.indexOf(key);
      this.nodes.splice(index, 1);
      this.nodes.unshift(key);
      return this.map[key];
    }

    return -1;
  }

  set(key, value) {
    this.map[key] = value;

    // replacement is needed. pop least used
    if(this.size >= this.maxSize) {
      let leastUsedKey = this.nodes.pop();
      delete this.map[leastUsedKey];
    }

    this.nodes.unshift(key);
    this.size = this.nodes.length;
  }

  getCache() {
    return this.map;
  }

  getNodes() {
    return this.nodes;
  }
}

module.exports = LRU;
