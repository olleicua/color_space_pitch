window.extend = function(base) {
  base = base || {};
  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    if (!obj) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') extend(base[key], obj[key]);
        else base[key] = obj[key];
      }
    }
  }
  return base;
};

window.parent = function(parent, children) {
  for (var i = 0; i < children.length; i++) parent.appendChild(children[i]);
  return parent;
};

window.times = function(n, fn) {
  var out = [];
  for (var i = 0; i < n; i++) out.push(fn(i));
  return out;
};

window.map = function(array, fn) {
  var out = [];
  for (var i = 0; i < array.length; i++) out.push(fn(array[i]));
  return out;
};

window.flatten = function(input) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    var value = input[i];
    if (Object.prototype.toString.call(value) === '[object Array]') {
      value = flatten(value);
      for (var j = 0; j < value.length; j++) output.push(value[j]);
    } else {
      output.push(value)
    }
  }
  return out;
};

window.m5 = function(n) {
  return (n + 5) % 5;
};
