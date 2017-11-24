window.isArray = function(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};
window.isObject = function(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

window.extend = function(base) {
  base = base || {};
  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    if (!obj) continue;
    else if (isArray(obj)) base[obj[0]] = obj[1];
    else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (isObject(obj[key])) extend(base[key], obj[key]);
          else base[key] = obj[key];
        }
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
  for (var i = 0; i < input.length; i++) {
    var value = input[i];
    if (isArray(value)) {
      value = flatten(value);
      for (var j = 0; j < value.length; j++) output.push(value[j]);
    } else {
      output.push(value)
    }
  }
  return output;
};

window.m5 = function(n) {
  return (n + 5) % 5;
};
