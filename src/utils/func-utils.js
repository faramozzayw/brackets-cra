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

export const getRandomArbitrary = (
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) => Math.random() * (max - min) + min;
