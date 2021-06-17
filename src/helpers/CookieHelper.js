// set (key, value, expire)
// getAll
// get (key)
// remove(key)

// HELPERS ///////
const calculateExpireDate = (expire) => {
  var d = new Date();
  // d.setTime(d.getTime() + expire * 24 * 60 * 60 * 1000) // days
  d.setTime(d.getTime() + expire * 60 * 1000); // minutes
  return d.toUTCString();
};
//////////////////

const set = (key, value, expire) => {
  const cookie = [
    key,
    '=',
    value,
    expire ? '; Expires=' + calculateExpireDate(expire) : '',
  ].join('');
  console.log('cookie set:', cookie);
  document.cookie = cookie;
};

const getAll = () => {
  return decodeURIComponent(document.cookie).split(';');
};

const get = (key) => {
  const name = key + '=';
  const cookieArray = getAll();
  for (let cookie of cookieArray) {
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return;
};
const remove = (key) => {
  set(key, '', -1);
};

export { set, getAll, get, remove };

// set with options-object
//
// const setCookie = (key, value, options = {}) => {
//   const cookieString = `${key}=${value}`
//   const cookie = [
//     cookieString,
//     options.expires ? '; Expires=' + calculateExpireDate(options.expires) : '',
//     options.path ? '; Path=' + options.path : '',
//     options.secure ? '; Secure' : '',
//   ].join('')
//   console.log(cookie)
//   document.cookie = cookie
// }
