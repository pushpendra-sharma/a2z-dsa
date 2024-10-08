/** Time complexity - O(n) Space complexity - O(1) */
export function pattern1(n) {
  let str = '';
  let line = '';
  for (let k = 0; k < n; k++) {
    line += '*';
  }
  for (let i = 0; i < n; i++) {
    str += line + '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern2(n) {
  let str = '';

  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      str += '*';
    }
    str += '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern3(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      str += `${k}`;
    }
    str += '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern4(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      str += `${i}`;
    }
    str += '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern5(n) {
  let str = '';

  for (let i = 0; i < n; i++) {
    for (let k = i; k < n; k++) {
      str += `*`;
    }
    str += '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern6(n) {
  let str = '';

  for (let i = n; i > 0; i--) {
    for (let k = 1; k <= i; k++) {
      str += `${k}`;
    }
    str += '\n ';
  }
  return str;
}

/**
 * Time complexity - O(n^2)
 * @param {Number} n
 * @returns {String}
 */
export function pattern7(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    // space
    for (let j = 1; j <= n - i; j++) {
      str += ` `;
    }
    // star
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += `*`;
    }
    // space
    for (let j = 1; j <= n - i; j++) {
      str += ` `;
    }
    str += '\n ';
  }
  return str;
}

export function pattern8(n) {
  let str = '';
  for (let i = n; i >= 0; i--) {
    // space
    for (let j = 1; j <= n - i; j++) {
      str += ` `;
    }
    // star
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += `*`;
    }
    // space
    for (let j = 1; j <= n - i; j++) {
      str += ` `;
    }
    str += '\n ';
  }
  return str;
}

export function pattern9(n) {
  return pattern7(n) + pattern8(n);
}

export function pattern10(n) {
  return pattern2(n) + pattern5(n);
}

/** Time complexity - O(n^2) */
export function pattern11(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += `${(i + j + 1) % 2}`;
    }
    str += '\n ';
  }
  return str;
}

/**
 * Time complexity - O(n^2)
 * @param {Number} n
 * @returns {String}
 */
export function pattern12(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n; j++) {
      if (j <= i) str += `${j}`;
      else if (j >= 2 * n - i + 1) str += `${2 * n - j + 1}`;
      else str += ' ';
    }
    str += '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern13(n) {
  let str = '';
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      counter++;
      str += `${counter} `;
    }
    str += '\n ';
  }
  return str;
}

/**
 * Time complexity - O(n^2)
 * @param {Number} n
 * @returns {String}
 */
export function pattern14(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 65; j <= 65 + i; j++) {
      str += String.fromCharCode(j);
    }
    str += '\n ';
  }
  return str;
}

/**
 * Time complexity - O(n^2)
 * @param {Number} n
 * @returns {String}
 */
export function pattern15(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += String.fromCharCode(65 + j);
    }
    str += '\n ';
  }
  return str;
}

/**
 * Time complexity - O(n^2)
 * @param {Number} n
 * @returns {String}
 */
export function pattern16(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + i);
    }
    str += '\n ';
  }
  return str;
}

export function pattern17(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    // spaces
    for (let j = 1; j <= n - i; j++) {
      str += ` `;
    }
    // increasing order letters
    for (let j = 1; j < i; j++) {
      str += String.fromCharCode(64 + j);
    }

    // middle letter
    str += String.fromCharCode(64 + i);

    // decreasing order letters
    for (let j = i - 1; j >= 1; j--) {
      str += String.fromCharCode(64 + j);
    }

    // space
    for (let j = 1; j <= n - i; j++) {
      str += ` `;
    }
    str += '\n ';
  }
  return str;
}
/**
 * Time complexity - O(n^2)
 * @param {Number} n
 * @returns {String}
 */
export function pattern18(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      str += String.fromCharCode(69 - j);
    }
    str += '\n ';
  }
  return str;
}

export function pattern19(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    // stars
    for (let j = 1; j <= n - i; j++) {
      str += '*';
    }

    // spaces
    for (let j = 0; j < 2 * i; j++) {
      str += ' ';
    }

    // stars
    for (let j = 1; j <= n - i; j++) {
      str += '*';
    }

    str += '\n ';
  }
  for (let i = 1; i <= n; i++) {
    // stars
    for (let j = 1; j <= i; j++) {
      str += '*';
    }

    // spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
      str += ' ';
    }

    // stars
    for (let j = 1; j <= i; j++) {
      str += '*';
    }

    str += '\n ';
  }
  return str;
}

export function pattern20(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    // stars
    for (let j = 1; j <= i; j++) {
      str += '*';
    }

    // spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
      str += ' ';
    }

    // stars
    for (let j = 1; j <= i; j++) {
      str += '*';
    }
    str += '\n ';
  }

  for (let i = 1; i < n; i++) {
    // stars
    for (let j = 1; j <= n - i; j++) {
      str += '*';
    }

    // spaces
    for (let j = 0; j < 2 * i; j++) {
      str += ' ';
    }

    // stars
    for (let j = 1; j <= n - i; j++) {
      str += '*';
    }

    str += '\n ';
  }
  return str;
}

export function pattern21(n) {
  let str = '';
  let line = '';
  for (let i = 1; i <= n; i++) {
    line += '*';
  }

  str += line;
  str += '\n ';

  for (let i = 1; i <= n - 2; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === 1 || j === n) str += '*';
      else str += ' ';
    }
    str += '\n ';
  }

  str += line;

  return str;
}

/* 
  Time complexity - O(n^2) 
  Space complexity - O(n^2) 
*/
export function pattern22(n) {
  let str = '';
  const size = 2 * n - 1;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Calculate the minimum distance to the nearest edge and add 1 to get the pattern value.
      const minDistance = Math.min(i, j, size - 1 - i, size - 1 - j);
      str += n - minDistance + ' ';
    }
    str += `\n`;
  }

  return str;
}
