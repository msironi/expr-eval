
export function neg(a) {
  return a === undefined ? undefined : -a;
}

export function pos(a) {
  return a === undefined ? undefined : Number(a);
}

// fac is in functions.js

export function abs(a) {
  if (a === undefined) return undefined;
  return Math.abs(a);
}

export function acos(a) {
  if (a === undefined) return undefined;
  return Math.acos(a);
}

export function acosh(a) {
  if (a === undefined) return undefined;
  if (Math.acosh) {
    return Math.acosh(a);
  } else {
    return Math.log(a + Math.sqrt((a * a) - 1));
  }
}

export function asin(a) {
  if (a === undefined) return undefined;
  return Math.asin(a);
}

export function asinh(a) {
  if (a === undefined) return undefined;
  if (Math.asinh) {
    return Math.asinh(a);
  } else {
    if (a === -Infinity) return a;
    return Math.log(a + Math.sqrt((a * a) + 1));
  }
}

export function atan(a) {
  if (a === undefined) return undefined;
  return Math.atan(a);
}

export function atanh(a) {
  if (a === undefined) return undefined;
  if (Math.atanh) {
    return Math.atanh(a);
  } else {
    return (Math.log((1 + a) / (1 - a)) / 2);
  }
}

var ONE_THIRD = 1 / 3;
export function cbrt(x) {
  if (x === undefined) return undefined;
  if (Math.cbrt) {
    return Math.cbrt(x);
  } else {
    return x < 0 ? -Math.pow(-x, ONE_THIRD) : Math.pow(x, ONE_THIRD);
  }
}

export function ceil(a) {
  if (a === undefined) return undefined;
  return Math.ceil(a);
}

export function cos(a) {
  if (a === undefined) return undefined;
  return Math.cos(a);
}

export function cosh(a) {
  if (a === undefined) return undefined;
  if (Math.cosh) {
    return Math.cosh(a);
  } else {
    return ((Math.exp(a) + Math.exp(-a)) / 2);
  }
}

export function exp(a) {
  if (a === undefined) return undefined;
  return Math.exp(a);
}

export function expm1(x) {
  if (x === undefined) return undefined;
  if (Math.expm1) {
    return Math.expm1(x);
  } else {
    return Math.exp(x) - 1;
  }
}

export function floor(a) {
  if (a === undefined) return undefined;
  return Math.floor(a);
}

export function length(s) {
  if (s === undefined) return undefined;
  if (Array.isArray(s)) {
    return s.length;
  }
  return String(s).length;
}

export function log(a) {
  if (a === undefined) return undefined;
  return Math.log(a);
}

export function log1p(x) {
  if (x === undefined) return undefined;
  if (Math.log1p) {
    return Math.log1p(x);
  } else {
    return Math.log(1 + x);
  }
}

export function log2(x) {
  if (x === undefined) return undefined;
  if (Math.log2) {
    return Math.log2(x);
  } else {
    return Math.log(x) / Math.LN2;
  }
}

export function log10(a) {
  if (a === undefined) return undefined;
  if (Math.log10) {
    return Math.log10(a);
  } else {
    return Math.log(a) * Math.LOG10E;
  }
}

export function not(a) {
  return !a;
}

export function round(a) {
  if (a === undefined) return undefined;
  return Math.round(a);
}

export function sign(x) {
  if (x === undefined) return undefined;
  if (Math.sign) {
    return Math.sign(x);
  } else {
    return ((x > 0) - (x < 0)) || +x;
  }
}

export function sin(a) {
  if (a === undefined) return undefined;
  return Math.sin(a);
}

export function sinh(a) {
  if (a === undefined) return undefined;
  if (Math.sinh) {
    return Math.sinh(a);
  } else {
    return ((Math.exp(a) - Math.exp(-a)) / 2);
  }
}

export function sqrt(a) {
  if (a === undefined) return undefined;
  return Math.sqrt(a);
}

export function tan(a) {
  if (a === undefined) return undefined;
  return Math.tan(a);
}

export function tanh(a) {
  if (a === undefined) return undefined;
  if (Math.tanh) {
    return Math.tanh(a);
  } else {
    if (a === Infinity) return 1;
    if (a === -Infinity) return -1;
    return (Math.exp(a) - Math.exp(-a)) / (Math.exp(a) + Math.exp(-a));
  }
}

export function trunc(a) {
  if (a === undefined) return undefined;
  if (Math.trunc) {
    return Math.trunc(a);
  } else {
    return a < 0 ? Math.ceil(a) : Math.floor(a);
  }
}
