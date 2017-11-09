var clone = function () {
  'use strict';

  function clone(parent, circular, depth, prototype) {
    var filter;
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      filter = circular.filter;
      circular = circular.circular;
    }

    var allParents = [];
    var allChildren = [];

    var useBuffer = typeof Buffer != 'undefined';

    if (typeof circular == 'undefined') circular = true;

    if (typeof depth == 'undefined') depth = Infinity;

    function _clone(parent, depth) {
      if (parent === null) return null;

      if (depth == 0) return parent;

      var child;
      var proto;
      if (typeof parent != 'object') {
        return parent;
      }

      if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        child = new Buffer(parent.length);
        parent.copy(child);
        return child;
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }

      for (var i in parent) {
        var attrs;
        if (proto) {
          attrs = Object.getOwnPropertyDescriptor(proto, i);
        }

        if (attrs && attrs.set == null) {
          continue;
        }
        child[i] = _clone(parent[i], depth - 1);
      }

      return child;
    }

    return _clone(parent, depth);
  }

  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null) return null;

    var c = function c() {};
    c.prototype = parent;
    return new c();
  };

  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  };
  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Date]';
  };
  clone.__isDate = __isDate;

  function __isArray(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Array]';
  };
  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
  };
  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  };
  clone.__getRegExpFlags = __getRegExpFlags;

  return clone;
}();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}