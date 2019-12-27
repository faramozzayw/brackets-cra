export function delay(fn, ms = 0) {
  return function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(fn.apply(this, arguments));
        } catch (err) {
          reject(err);
        }
      }, ms);
    });
  };
}