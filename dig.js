import arrayEach from './.internal/arrayEach.js'

function dig(object, ...keys) {
  const func = Array.isArray(keys) ? arrayEach : null;
  let val = null;

  if (!func) return null;

  func(keys, (key) => {
    object = object[key];
    if (object) val = object
    return object
  })

  return val
}