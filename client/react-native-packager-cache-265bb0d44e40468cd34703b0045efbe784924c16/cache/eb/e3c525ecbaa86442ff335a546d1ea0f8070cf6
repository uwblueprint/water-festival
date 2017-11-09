"use strict";

function dedent(strings) {

  var raw = undefined;
  if (typeof strings === "string") {
    raw = [strings];
  } else {
    raw = strings.raw;
  }

  var result = "";

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < raw.length; i++) {
    result += raw[i].replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`");

    if (i < values.length) {
      result += values[i];
    }
  }

  result = result.trim();

  var lines = result.split("\n");
  var mindent = null;
  lines.forEach(function (l) {
    var m = l.match(/^ +/);
    if (m) {
      var indent = m[0].length;
      if (!mindent) {
        mindent = indent;
      } else {
        mindent = Math.min(mindent, indent);
      }
    }
  });

  if (mindent !== null) {
    result = lines.map(function (l) {
      return l[0] === " " ? l.slice(mindent) : l;
    }).join("\n");
  }

  return result.replace(/\\n/g, "\n");
}

if (typeof module !== "undefined") {
  module.exports = dedent;
}