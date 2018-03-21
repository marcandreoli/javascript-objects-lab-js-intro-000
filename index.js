var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object.assign({}, {key: value});
  return newobject;
};

function destructivelyUpdateObjectWithKeyAndValue(object,
 key, value) {
   object[key] = value;
   return object;
 };
