// node_modules/temporal-polyfill/dist/common-5e0be57a.mjs
var n = 36e11;
var t = 864e11;
var e = [1, 1e3, 1e6, 1e9, 6e10, n, t];
var o = [9, 6, 3];
function r(n2) {
  return n2 <= 6;
}
function i(n2) {
  return n2 >= 6;
}
var s = a("overflow", { constrain: 0, reject: 1 }, 0);
function a(n2, t2, e3) {
  const o2 = function(n3, t3, e4) {
    return (o3, r3) => {
      if (void 0 === o3) {
        const t4 = null != r3 ? r3 : e4;
        if (void 0 === t4)
          throw new RangeError(`Must specify a ${n3}`);
        return t4;
      }
      if (void 0 === t3[o3])
        throw new RangeError(`Invalid ${n3}: ${o3}`);
      return t3[o3];
    };
  }(n2, t2, e3);
  return (t3, e4) => {
    const r3 = d(t3);
    return o2(r3[n2], e4);
  };
}
function c(n2, t2, e3, o2) {
  if (void 0 === n2)
    return t2;
  if (!Number.isFinite(n2))
    throw new RangeError("Number must be finite");
  n2 = Math.trunc(n2);
  const r3 = Math.min(Math.max(n2, t2), e3);
  if (r3 !== n2 && 1 === o2)
    throw new RangeError("Invalid overflowed value " + n2);
  return r3;
}
function u(n2, t2) {
  const e3 = {};
  for (const o2 in t2)
    void 0 !== n2[o2] && (e3[o2] = t2[o2](n2[o2]));
  return e3;
}
function d(n2, t2) {
  if (void 0 === n2 && !t2)
    return {};
  if (!h(n2))
    throw TypeError("options must be an object or undefined");
  return n2;
}
var l = /object|function/;
function h(n2) {
  return null !== n2 && l.test(typeof n2);
}
var f = a("roundingMode", { halfExpand: Math.round, ceil: Math.ceil, trunc: Math.trunc, floor: Math.floor });
function m() {
  const n2 = /* @__PURE__ */ new WeakMap();
  return [n2.get.bind(n2), n2.set.bind(n2)];
}
function g(n2, t2) {
  Object.defineProperties(n2.prototype, y(t2, (n3) => ({ get: n3 })));
}
function y(n2, t2) {
  const e3 = {};
  for (const o2 in n2)
    e3[o2] = t2(n2[o2], o2);
  return e3;
}
function w(n2, t2, e3) {
  const o2 = {};
  for (const r3 of t2)
    o2[r3] = e3(n2[r3]);
  return o2;
}
function p(n2, t2) {
  const e3 = {};
  return n2.forEach((n3, o2) => {
    e3[n3] = t2(n3, o2);
  }), e3;
}
var v = ["nanosecond", "microsecond", "millisecond", "second", "minute", "hour"];
var M = [...v, "day", "week", "month", "year"];
var b = M.map((n2) => n2 + "s");
var S = p(M, (n2, t2) => t2);
var I = p(b, (n2, t2) => t2);
function F(n2, t2, e3, o2) {
  var r3;
  let i2;
  if (void 0 === n2) {
    if (void 0 === t2)
      throw new RangeError("Unit is required");
    i2 = t2;
  } else if (i2 = null != (r3 = S[n2]) ? r3 : I[n2], void 0 === i2 || i2 < e3 || i2 > o2)
    throw new RangeError("Invalid unit " + n2);
  return i2;
}
function O(n2, t2, o2, r3, i2, s3) {
  var a2;
  const c2 = d(n2), u2 = null != (a2 = c2.roundingIncrement) ? a2 : 1, l2 = F(c2.smallestUnit, o2, r3, i2), h2 = f(c2, s3 ? Math.round : Math.trunc);
  let m2 = c2.largestUnit;
  "auto" === m2 && (m2 = void 0);
  const g2 = F(m2, t2 = Math.max(t2, l2), r3, i2);
  if (l2 > g2)
    throw new RangeError("Bad smallestUnit/largestUnit");
  if (l2 < 6) {
    const n3 = e[l2 + 1], t3 = e[l2] * u2;
    if (n3 === t3)
      throw new RangeError("Must not equal larger unit");
    if (n3 % t3)
      throw new RangeError("Must divide into larger unit");
  }
  return { smallestUnit: l2, largestUnit: g2, roundingFunc: h2, roundingIncrement: u2 };
}
function T(n2, o2, r3, i2) {
  var s3;
  const a2 = d("string" == typeof n2 ? { smallestUnit: n2 } : n2, true), c2 = null != (s3 = a2.roundingIncrement) ? s3 : 1, u2 = F(a2.smallestUnit, void 0, o2, r3), l2 = f(a2, Math.round), h2 = e[u2] * c2;
  if (6 === u2) {
    if (1 !== c2)
      throw new RangeError("When smallestUnit is days, roundingIncrement must be 1");
  } else {
    const n3 = i2 ? t : e[u2 + 1];
    if (!i2 && n3 === h2)
      throw new RangeError("Must not equal larger unit");
    if (n3 % h2)
      throw new RangeError("Must divide into larger unit");
  }
  return { smallestUnit: u2, roundingFunc: l2, incNano: h2 };
}
var D = Symbol();
function N(n2, t2, ...e3) {
  return t2 instanceof n2 ? t2 : n2.from(t2, ...e3);
}
var Y = class {
  toJSON() {
    return this.toString();
  }
};
var E = class extends Y {
  valueOf() {
    throw new Error("Cannot convert object using valueOf");
  }
};
var [Z, C] = m();
var U = class extends E {
  constructor(n2) {
    super(), C(this, Object.freeze(n2));
  }
  getISOFields() {
    return Z(this);
  }
};
function P(n2, t2) {
  return n2 < t2 ? -1 : n2 > t2 ? 1 : 0;
}
function R(n2) {
  return P(n2, 0);
}
function k(n2, t2, e3) {
  return e3(n2 / t2) * t2;
}
function x(n2) {
  return k(n2, 6e10, j);
}
function j(n2) {
  return Math.round(Math.abs(n2)) * R(n2);
}
function q(n2, t2, e3) {
  const o2 = n2.div(t2).mult(t2), r3 = n2.sub(o2).toNumber();
  return o2.add(e3(r3 / t2) * t2);
}
function H(n2, t2) {
  return (n2 % t2 + t2) % t2;
}
function L(n2, t2) {
  return $(e3 = String(n2), t2, "0") + e3;
  var e3;
}
function B(n2, t2, e3) {
  return n2 + $(n2, t2, e3);
}
function $(n2, t2, e3) {
  return new Array(Math.max(0, t2 - n2.length + 1)).join(e3);
}
function A(n2) {
  return n2 < 0 ? "-" : "+";
}
var z = Math.pow(10, 8);
var W = class {
  constructor(n2, t2) {
    this.high = n2, this.low = t2;
  }
  sign() {
    return R(this.high) || R(this.low);
  }
  neg() {
    return new W(-this.high || 0, -this.low || 0);
  }
  abs() {
    return this.sign() < 0 ? this.neg() : this;
  }
  add(n2) {
    const [t2, e3] = J(n2);
    return Q(this.high + t2, this.low + e3);
  }
  sub(n2) {
    const [t2, e3] = J(n2);
    return Q(this.high - t2, this.low - e3);
  }
  mult(n2) {
    return Q(this.high * n2, this.low * n2);
  }
  div(n2) {
    const t2 = this.high / n2;
    let e3 = String(t2);
    -1 !== e3.indexOf("e-") && (e3 = t2.toFixed(20));
    const o2 = e3.indexOf(".");
    let r3 = 0;
    if (-1 !== o2) {
      let n3 = e3.substr(o2 + 1);
      n3 = B(n3, 8, "0"), n3 = n3.substr(0, 8), r3 = parseInt(n3) * (R(t2) || 1);
    }
    return Q(Math.trunc(t2) || 0, Math.trunc(this.low / n2) + r3);
  }
  toNumber() {
    return this.high * z + this.low;
  }
  toBigInt() {
    return BigInt(this.high) * BigInt(z) + BigInt(this.low);
  }
};
function K(n2, t2) {
  let e3, o2;
  if (n2 instanceof W)
    e3 = n2.high, o2 = n2.low;
  else if ("number" == typeof n2) {
    if (t2)
      throw new TypeError("Must supply bigint, not number");
    e3 = Math.trunc(n2 / z), o2 = n2 % z || 0;
  } else if ("bigint" == typeof n2) {
    const t3 = BigInt(z);
    e3 = Number(n2 / t3), o2 = Number(n2 % t3 || 0);
  } else {
    if ("string" != typeof n2)
      throw new Error("Invalid type of BigNano");
    {
      if ((n2 = n2.trim()).match(/\D/))
        throw new SyntaxError(`Cannot parse ${n2} to a BigInt`);
      const t3 = n2.length - 8;
      e3 = Number(n2.substr(t3)), o2 = Number(n2.substr(0, t3));
    }
  }
  return new W(e3, o2);
}
function G(n2, t2) {
  return P(n2.high, t2.high) || P(n2.low, t2.low);
}
function J(n2) {
  return "number" == typeof n2 ? [0, n2] : [n2.high, n2.low];
}
function Q(n2, t2) {
  let e3 = t2 % z || 0, o2 = n2 + Math.trunc(t2 / z);
  const r3 = R(o2), i2 = R(e3);
  return i2 && r3 && i2 !== r3 && (o2 += i2, e3 -= z * i2), new W(o2, e3);
}
var V = b.concat("sign");
function X(n2) {
  return w(n2, V, (n3) => -n3 || 0);
}
function _(n2, t2) {
  var e3, o2, r3, i2, s3, a2, c2, u2, d2, l2;
  return nn({ years: null != (e3 = t2.years) ? e3 : n2.years, months: null != (o2 = t2.months) ? o2 : n2.months, weeks: null != (r3 = t2.weeks) ? r3 : n2.weeks, days: null != (i2 = t2.days) ? i2 : n2.days, hours: null != (s3 = t2.hours) ? s3 : n2.hours, minutes: null != (a2 = t2.minutes) ? a2 : n2.minutes, seconds: null != (c2 = t2.seconds) ? c2 : n2.seconds, milliseconds: null != (u2 = t2.milliseconds) ? u2 : n2.milliseconds, microseconds: null != (d2 = t2.microseconds) ? d2 : n2.microseconds, nanoseconds: null != (l2 = t2.nanoseconds) ? l2 : n2.nanoseconds });
}
function nn(n2) {
  return { ...n2, sign: tn(n2) };
}
function tn(n2) {
  let t2 = 0;
  for (const e3 of b) {
    if (n2[e3]) {
      t2 = R(n2[e3]);
      break;
    }
  }
  return t2;
}
function en(n2) {
  let t2 = 9;
  for (; t2 > 0 && !n2[b[t2]]; )
    t2--;
  return t2;
}
var on = { isoHour: 0, isoMinute: 0, isoSecond: 0, isoMillisecond: 0, isoMicrosecond: 0, isoNanosecond: 0 };
var rn = { hours: 0, minutes: 0, seconds: 0, milliseconds: 0, microseconds: 0, nanoseconds: 0 };
function sn(n2) {
  return { isoHour: n2.hour || 0, isoMinute: n2.minute || 0, isoSecond: n2.second || 0, isoMillisecond: n2.millisecond || 0, isoMicrosecond: n2.microsecond || 0, isoNanosecond: n2.nanosecond || 0 };
}
function an(n2) {
  return K(t).mult(n2.days).add(cn(n2));
}
function cn(t2) {
  return K(t2.nanoseconds).add(K(t2.microseconds).mult(1e3)).add(K(t2.milliseconds).mult(1e6)).add(K(t2.seconds).mult(1e9)).add(K(t2.minutes).mult(6e10)).add(K(t2.hours).mult(n));
}
function un(t2) {
  return t2.isoHour * n + 6e10 * t2.isoMinute + 1e9 * t2.isoSecond + 1e6 * t2.isoMillisecond + 1e3 * t2.isoMicrosecond + t2.isoNanosecond;
}
function dn(e3, o2) {
  let r3, i2 = 0, s3 = 0, a2 = 0, c2 = 0, u2 = 0, d2 = 0;
  switch (o2) {
    case 6:
      r3 = e3.div(t), i2 = r3.toNumber(), e3 = e3.sub(r3.mult(t));
    case 5:
      r3 = e3.div(n), s3 = r3.toNumber(), e3 = e3.sub(r3.mult(n));
    case 4:
      r3 = e3.div(6e10), a2 = r3.toNumber(), e3 = e3.sub(r3.mult(6e10));
    case 3:
      r3 = e3.div(1e9), c2 = r3.toNumber(), e3 = e3.sub(r3.mult(1e9));
    case 2:
      r3 = e3.div(1e6), u2 = r3.toNumber(), e3 = e3.sub(r3.mult(1e6));
    case 1:
      r3 = e3.div(1e3), d2 = r3.toNumber(), e3 = e3.sub(r3.mult(1e3));
  }
  return nn({ years: 0, months: 0, weeks: 0, days: i2, hours: s3, minutes: a2, seconds: c2, milliseconds: u2, microseconds: d2, nanoseconds: e3.toNumber() });
}
function ln(e3) {
  const o2 = Math.floor(e3 / t);
  e3 -= o2 * t;
  const r3 = Math.floor(e3 / n);
  e3 -= r3 * n;
  const i2 = Math.floor(e3 / 6e10);
  e3 -= 6e10 * i2;
  const s3 = Math.floor(e3 / 1e9);
  e3 -= 1e9 * s3;
  const a2 = Math.floor(e3 / 1e6);
  e3 -= 1e6 * a2;
  const c2 = Math.floor(e3 / 1e3);
  return [{ isoHour: r3, isoMinute: i2, isoSecond: s3, isoMillisecond: a2, isoMicrosecond: c2, isoNanosecond: e3 -= 1e3 * c2 }, o2];
}
var hn = { gregory: { bce: -1, ce: 0 }, ethioaa: { era0: 0 }, ethiopic: { era0: 0, era1: 5500 }, coptic: { era0: -1, era1: 0 }, roc: { beforeroc: -1, minguo: 0 }, buddhist: { be: 0 }, islamic: { ah: 0 }, indian: { saka: 0 }, persian: { ap: 0 }, japanese: { bce: -1, ce: 0, meiji: 1867, taisho: 1911, showa: 1925, heisei: 1988, reiwa: 2018 } };
var fn = class {
  constructor(n2) {
    this.id = n2;
  }
  monthCode(n2, t2) {
    return "M" + L(n2, 2);
  }
  convertMonthCode(n2, t2) {
    const e3 = /L$/.test(n2), o2 = parseInt(n2.substr(1));
    if (e3)
      throw new RangeError("Calendar system doesnt support leap months");
    return [o2, false];
  }
};
function mn(n2, t2, e3, o2) {
  var r3;
  let i2 = null == (r3 = hn[gn(n2)]) ? void 0 : r3[e3];
  if (void 0 === i2) {
    if (!o2)
      throw new Error("Unkown era " + e3);
    i2 = 0;
  }
  return (i2 + t2) * (R(i2) || 1);
}
function gn(n2) {
  return n2.split("-")[0];
}
var yn = class extends fn {
  computeFields(n2) {
    const t2 = Fn(n2);
    return { era: void 0, eraYear: void 0, year: t2.isoYear, month: t2.isoMonth, day: t2.isoDay };
  }
  epochMilliseconds(n2, t2, e3) {
    return Sn(n2, t2, e3);
  }
  daysInMonth(n2, t2) {
    return 2 === t2 ? this.inLeapYear(n2) ? 29 : 28 : 4 === t2 || 6 === t2 || 9 === t2 || 11 === t2 ? 30 : 31;
  }
  monthsInYear() {
    return 12;
  }
  inLeapYear(n2) {
    return n2 % 4 == 0 && (n2 % 100 != 0 || n2 % 400 == 0);
  }
  guessYearForMonthDay() {
    return pn;
  }
  normalizeISOYearForMonthDay() {
    return pn;
  }
};
var wn = new yn("iso8601");
var pn = 1972;
var vn = Symbol();
function Mn(n2) {
  return bn(n2.isoYear, n2.isoMonth, n2.isoDay, n2.isoHour, n2.isoMinute, n2.isoSecond, n2.isoMillisecond, n2.isoMicrosecond, n2.isoNanosecond);
}
function bn(n2, t2, e3, o2, r3, i2, s3, a2, c2) {
  return K(Sn(n2, t2, e3, o2, r3, i2, s3)).mult(1e6).add(1e3 * (null != a2 ? a2 : 0) + (null != c2 ? c2 : 0));
}
function Sn(n2, t2, e3, o2, r3, i2, s3) {
  const a2 = R(n2);
  let c2, u2, d2 = 0;
  const l2 = n2 >= 0 && n2 < 1e3, h2 = l2 ? n2 + 1200 : n2;
  for (; d2 < 31; d2++) {
    c2 = e3 - a2 * d2;
    const n3 = Date.UTC(h2, t2 - 1, c2, null != o2 ? o2 : 0, null != r3 ? r3 : 0, null != i2 ? i2 : 0, null != s3 ? s3 : 0);
    if (!En(n3)) {
      u2 = n3 + a2 * d2 * 864e5;
      break;
    }
  }
  return (void 0 === u2 || c2 < 1 || c2 > wn.daysInMonth(n2, t2)) && Zn(), l2 && (u2 = new Date(u2).setUTCFullYear(n2)), u2;
}
function In(n2) {
  let t2 = n2.div(1e6), e3 = n2.sub(t2.mult(1e6)).toNumber();
  e3 < 0 && (e3 += 1e6, t2 = t2.sub(1));
  const o2 = Math.floor(e3 / 1e3);
  return e3 -= 1e3 * o2, { ...Fn(t2.toNumber()), isoMicrosecond: o2, isoNanosecond: e3 };
}
function Fn(n2) {
  const [t2, e3] = Yn(n2);
  return { isoYear: t2.getUTCFullYear(), isoMonth: t2.getUTCMonth() + 1, isoDay: t2.getUTCDate() + e3, isoHour: t2.getUTCHours(), isoMinute: t2.getUTCMinutes(), isoSecond: t2.getUTCSeconds(), isoMillisecond: t2.getUTCMilliseconds() };
}
function On(n2) {
  var t2;
  return null != (t2 = n2[vn]) ? t2 : Mn(n2.getISOFields());
}
function Tn(n2) {
  return Math.floor(Sn(n2, 1, 1) / 1e3);
}
function Dn(n2) {
  return Yn(n2.div(1e6).toNumber())[0].getUTCFullYear();
}
function Nn(n2, t2, e3) {
  const [o2, r3] = Yn(Sn(n2, t2, e3));
  return H(o2.getUTCDay() + r3, 7) || 7;
}
function Yn(n2) {
  const t2 = R(n2);
  let e3, o2 = 0;
  for (; o2 < 31; o2++) {
    const r3 = new Date(n2 - t2 * o2 * 864e5);
    if (!En(r3)) {
      e3 = r3;
      break;
    }
  }
  return void 0 === e3 && Zn(), [e3, t2 * o2];
}
function En(n2) {
  return isNaN(n2.valueOf());
}
function Zn() {
  throw new RangeError("Date outside of supported range");
}
function Cn(n2, t2) {
  return Math.round((t2 - n2) / 864e5);
}
function Un(n2, t2) {
  return n2 + 864e5 * t2;
}
function Pn(n2, t2) {
  return !Rn(n2, t2) && n2.calendar.toString() === t2.calendar.toString();
}
function Rn(n2, t2) {
  return G(Mn(n2.getISOFields()), Mn(t2.getISOFields()));
}
function kn(n2, t2) {
  return P(un(n2.getISOFields()), un(t2.getISOFields()));
}
function xn(n2, t2) {
  return P(n2.year, t2.year) || P(n2.month, t2.month) || P(n2.day, t2.day);
}
function jn(n2, t2) {
  return G(n2[vn], t2[vn]);
}
function qn(n2, t2, e3, o2, r3) {
  return [n2 = Number(n2), t2 = c(t2, 1, o2.monthsInYear(n2), r3), e3 = c(e3, 1, o2.daysInMonth(n2, t2), r3)];
}
function Hn(n2, t2) {
  const [e3, o2, r3] = qn(n2.isoYear, n2.isoMonth, n2.isoDay, wn, t2);
  return { isoYear: e3, isoMonth: o2, isoDay: r3 };
}
function Ln(n2, t2) {
  return { ...Hn(n2, t2), ...Bn(n2, t2) };
}
function Bn({ isoHour: n2, isoMinute: t2, isoSecond: e3, isoMillisecond: o2, isoMicrosecond: r3, isoNanosecond: i2 }, s3) {
  return { isoHour: n2 = c(n2, 0, 23, s3), isoMinute: t2 = c(t2, 0, 59, s3), isoSecond: e3 = c(e3, 0, 59, s3), isoMillisecond: o2 = c(o2, 0, 999, s3), isoMicrosecond: r3 = c(r3, 0, 999, s3), isoNanosecond: i2 = c(i2, 0, 999, s3) };
}
var $n = { era: String, eraYear: Number, year: Number, month: Number, monthCode: String };
var An = { ...$n, day: Number };
var zn = { hour: Number, minute: Number, second: Number, millisecond: Number, microsecond: Number, nanosecond: Number };
var Wn = { era: String, eraYear: Number, year: Number, month: Number, monthCode: String, day: Number };
var Kn = p(b, () => Number);
var Gn = class extends yn {
  computeFields(n2) {
    const t2 = super.computeFields(n2), { year: e3 } = t2;
    return { ...t2, era: e3 < 1 ? "bce" : "ce", eraYear: e3 < 1 ? -(e3 - 1) : e3 };
  }
};
var Jn = a("calendarName", { auto: 0, never: 1, always: 2 }, 0);
var Qn = a("disambiguation", { compatible: 0, earlier: 1, later: 2, reject: 3 }, 0);
function Vn(n2, t2 = 4) {
  const r3 = d(n2), i2 = r3.smallestUnit, s3 = r3.fractionalSecondDigits;
  let a2, u2 = 0, l2 = 1;
  return void 0 !== i2 ? (u2 = F(i2, void 0, 0, t2), l2 = e[u2], a2 = o[u2] || 0) : void 0 !== s3 && "auto" !== s3 && (a2 = c(s3, 0, 9, 1), l2 = Math.pow(10, 9 - a2)), { smallestUnit: u2, fractionalSecondDigits: a2, roundingFunc: f(n2, Math.trunc), incNano: l2 };
}
var Xn = a("timeZoneName", { auto: 0, never: 1 }, 0);
function _n(n2, t2) {
  return nt(n2) + "T" + et(n2, t2);
}
function nt(n2) {
  return tt(n2) + "-" + L(n2.isoDay, 2);
}
function tt(n2) {
  const { isoYear: t2 } = n2;
  return (t2 < 1e3 || t2 > 9999 ? A(t2) + L(Math.abs(t2), 6) : L(t2, 4)) + "-" + L(n2.isoMonth, 2);
}
function et(n2, t2) {
  const e3 = [L(n2.isoHour, 2)];
  return t2.smallestUnit <= 4 && (e3.push(L(n2.isoMinute, 2)), t2.smallestUnit <= 3 && e3.push(L(n2.isoSecond, 2) + st(n2.isoMillisecond, n2.isoMicrosecond, n2.isoNanosecond, t2.fractionalSecondDigits)[0])), e3.join(":");
}
function ot(n2) {
  const [t2, e3] = ln(Math.abs(n2)), o2 = st(t2.isoMillisecond, t2.isoMicrosecond, t2.isoNanosecond, void 0)[0];
  return A(n2) + L(t2.isoHour + 24 * e3, 2) + ":" + L(t2.isoMinute, 2) + (t2.isoSecond || o2 ? ":" + L(t2.isoSecond, 2) + o2 : "");
}
function rt(n2, t2) {
  return n2 && (2 === t2 || 1 !== t2 && "iso8601" !== n2) ? `[u-ca=${n2}]` : "";
}
function it(n2) {
  return n2.map(([n3, t2, e3]) => {
    if (e3 || n3) {
      return Math.abs(n3).toLocaleString("fullwide", { useGrouping: false }) + t2;
    }
    return "";
  }).join("");
}
function st(n2, t2, o2, r3, i2, s3) {
  let a2 = K(n2).mult(1e6).add(K(t2).mult(1e3)).add(o2);
  i2 && (a2 = q(a2, void 0 === r3 ? e[s3] : Math.pow(10, 9 - r3), i2));
  const c2 = a2.abs(), u2 = c2.div(1e9);
  let d2 = L(c2.sub(u2.mult(1e9)).toNumber(), 9);
  return d2 = void 0 === r3 ? d2.replace(/0+$/, "") : d2.substr(0, r3), [d2 ? "." + d2 : "", u2.toNumber() * (a2.sign() || 1)];
}
function at(n2) {
  g(n2, { epochNanoseconds() {
    return this[vn].toBigInt();
  }, epochMicroseconds() {
    return this[vn].div(1e3).toBigInt();
  }, epochMilliseconds() {
    return this[vn].div(1e6).toNumber();
  }, epochSeconds() {
    return this[vn].div(1e9).toNumber();
  } });
}
var ct = { calendar: "calendar" };
for (const n2 of M)
  ct[n2] = "iso" + ((ut = n2).charAt(0).toUpperCase() + ut.slice(1));
var ut;
function dt(n2, t2 = []) {
  g(n2, p(t2.concat("calendar"), (n3) => function() {
    return this.getISOFields()[ct[n3]];
  }));
}
var lt = ["era", "eraYear", "year", "month", "monthCode", "daysInMonth", "daysInYear", "monthsInYear", "inLeapYear"];
var ht = [...lt, "day", "dayOfWeek", "dayOfYear", "weekOfYear", "daysInWeek"];
function ft(n2, t2) {
  g(n2, p(t2, (n3) => function() {
    const t3 = this.calendar[n3](this);
    return Object.defineProperty(this, n3, { value: t3 }), t3;
  }));
}
function mt(n2, t2) {
  (n2.prototype || n2)[Symbol.toStringTag] = "Temporal." + t2;
}
var gt = a("offset", { prefer: 0, use: 1, ignore: 2, reject: 3 });
function yt(n2, e3, o2 = 0) {
  const r3 = n2.getPossibleInstantsFor(e3);
  if (1 === r3.length)
    return r3[0];
  if (3 === o2)
    throw new RangeError("Ambiguous offset");
  if (r3.length)
    return r3[2 === o2 ? 1 : 0];
  {
    const r4 = function(n3, e4) {
      const o3 = On(e4), r5 = n3.getOffsetNanosecondsFor(new Yr(o3.sub(t)));
      return n3.getOffsetNanosecondsFor(new Yr(o3.add(t))) - r5;
    }(n2, e3), i2 = n2.getPossibleInstantsFor(e3.add({ nanoseconds: r4 * (1 === o2 ? -1 : 1) }));
    return i2[1 === o2 ? 0 : i2.length - 1];
  }
}
function wt({ year: n2, month: t2, day: e3 }, o2, r3, i2) {
  n2 += o2;
  const s3 = c(t2, 1, r3.monthsInYear(n2), i2);
  let a2 = t2 === s3 ? e3 : 1;
  return a2 = c(a2, 1, r3.daysInMonth(n2, s3), i2), { year: n2, month: s3, day: a2 };
}
function pt({ year: n2, month: t2, day: e3 }, o2, r3, i2) {
  if (o2) {
    if (t2 += o2, o2 < 0)
      for (; t2 < 1; )
        t2 += r3.monthsInYear(--n2);
    else {
      let e4;
      for (; t2 > (e4 = r3.monthsInYear(n2)); )
        t2 -= e4, n2++;
    }
    e3 = c(e3, 1, r3.daysInMonth(n2, t2), i2);
  }
  return { year: n2, month: t2, day: e3 };
}
function vt({ isoYear: n2, isoMonth: t2, isoDay: e3 }, o2) {
  if (o2) {
    let r3 = Sn(n2, t2, e3);
    r3 = Un(r3, o2), { isoYear: n2, isoMonth: t2, isoDay: e3 } = Fn(r3);
  }
  return { isoYear: n2, isoMonth: t2, isoDay: e3 };
}
function Mt(n2, t2) {
  if (en(t2) >= 6)
    throw new RangeError("Duration cant have units >= days");
  return n2.add(cn(t2));
}
function bt(n2, t2, e3 = 3, o2) {
  const { offsetNanoseconds: r3, timeZone: i2, Z: s3 } = n2;
  if (void 0 !== r3 && 2 !== e3) {
    if (1 === e3 || s3)
      return Mn(n2).sub(r3);
    {
      const o3 = St(n2, r3, i2, t2);
      if (void 0 !== o3)
        return o3;
      if (3 === e3)
        throw new RangeError("Mismatching offset/timezone");
    }
  }
  return yt(i2, Ho(n2), Qn(o2))[vn];
}
function St(n2, t2, e3, o2) {
  const r3 = e3.getPossibleInstantsFor(Ho(n2)), i2 = Mn(n2), s3 = o2 ? x(t2) : t2;
  for (const n3 of r3) {
    const t3 = n3[vn], e4 = i2.sub(t3).toNumber();
    if ((o2 ? x(e4) : e4) === s3)
      return t3;
  }
}
function It(n2) {
  const { timeZone: t2 } = n2, e3 = { ...n2, ...on, calendar: new mr("iso8601") }, o2 = { ...vt(e3, 1), ...on, calendar: new mr("iso8601") }, r3 = yt(t2, Ho(e3))[vn];
  return yt(t2, Ho(o2))[vn].sub(r3).toNumber();
}
var Ft = "(\\d{2})(:?(\\d{2})(:?(\\d{2})([.,](\\d{1,9}))?)?)?";
var Ot = "([+-])" + Ft;
var Tt = "(Z|" + Ot + ")?(\\[([^=\\]]+)\\])?(\\[u-ca=([^\\]]+)\\])?";
var Dt = Pt("([+-]\\d{6}|\\d{4})-?(\\d{2})" + Tt);
var Nt = Pt("(--)?(\\d{2})-?(\\d{2})" + Tt);
var Yt = Pt("([+-]\\d{6}|\\d{4})-?(\\d{2})-?(\\d{2})([T ](\\d{2})(:?(\\d{2})(:?(\\d{2})([.,](\\d{1,9}))?)?)?)?" + Tt);
var Et = Pt("T?" + Ft + Tt);
var Zt = Pt(Ot);
var Ct = /^([-+])?P(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T((\d+)([.,](\d{1,9}))?H)?((\d+)([.,](\d{1,9}))?M)?((\d+)([.,](\d{1,9}))?S)?)?$/i;
var Ut = /\u2212/g;
function Pt(n2) {
  return new RegExp(`^${n2}$`, "i");
}
function Rt(n2) {
  return n2.replace(Ut, "-");
}
function kt(n2) {
  const t2 = Lt(n2);
  if (!t2)
    throw _t("dateTime", n2);
  return t2;
}
function xt(n2) {
  const t2 = Bt(n2);
  if (!t2)
    throw _t("dateTime", n2);
  return t2;
}
function jt(n2) {
  const t2 = zt(n2);
  if (void 0 === t2)
    throw _t("timeZone", n2);
  return t2;
}
function qt(n2) {
  let t2 = function(n3) {
    const t3 = Et.exec(Rt(n3));
    if (t3)
      return Kt(t3.slice(1));
  }(n2);
  if (void 0 !== t2) {
    if ("T" !== n2.charAt(0)) {
      const e3 = $t(n2) || At(n2);
      e3 && function(n3) {
        try {
          return Hn(n3, 1), true;
        } catch (n4) {
          return false;
        }
      }(e3) && (t2 = void 0);
    }
  } else
    t2 = Bt(n2, true);
  if (void 0 === t2)
    throw _t("time", n2);
  return t2;
}
var Ht = /^Z$/i;
function Lt(n2) {
  const t2 = Yt.exec(Rt(n2));
  if (t2)
    return function(n3) {
      const t3 = n3[11];
      let e3, o2 = false;
      t3 && (o2 = Ht.test(t3), e3 = o2 ? 0 : Gt(n3.slice(12)));
      return { ...Wt(n3), timeZone: n3[21], offsetNanoseconds: e3, Z: o2 };
    }(t2.slice(1));
}
function Bt(n2, t2, e3) {
  const o2 = Yt.exec(Rt(n2));
  if (o2 && (e3 || !Ht.test(o2[12])) && (!t2 || o2[4]))
    return Wt(o2.slice(1));
}
function $t(n2) {
  const t2 = Dt.exec(Rt(n2));
  if (t2)
    return { calendar: (e3 = t2.slice(1))[14], isoYear: Vt(e3[0]), isoMonth: Vt(e3[1]), isoDay: 1 };
  var e3;
}
function At(n2) {
  const t2 = Nt.exec(Rt(n2));
  if (t2)
    return { calendar: (e3 = t2.slice(1))[15], isoYear: pn, isoMonth: Vt(e3[1]), isoDay: Vt(e3[2]) };
  var e3;
}
function zt(n2) {
  const t2 = Zt.exec(Rt(n2));
  if (t2)
    return Gt(t2.slice(1));
}
function Wt(n2) {
  return { calendar: n2[23], isoYear: Vt(n2[0]), isoMonth: Vt(n2[1]), isoDay: Vt(n2[2]), ...Kt(n2.slice(4)) };
}
function Kt(n2) {
  const t2 = Qt(n2[4]);
  return { ...ln(Jt(n2[6] || ""))[0], isoHour: Qt(n2[0]), isoMinute: Qt(n2[2]), isoSecond: 60 === t2 ? 59 : t2 };
}
function Gt(t2) {
  return ("+" === t2[0] ? 1 : -1) * function(t3) {
    return Qt(t3[0]) * n + 6e10 * Qt(t3[2]) + 1e9 * Qt(t3[4]) + Jt(t3[6] || "");
  }(t2.slice(1));
}
function Jt(n2) {
  return parseInt(B(n2, 9, "0"));
}
function Qt(n2) {
  return parseInt(n2 || "0");
}
function Vt(n2) {
  return parseInt(n2 || "1");
}
function Xt(n2) {
  return void 0 === n2 ? void 0 : parseInt(n2);
}
function _t(n2, t2) {
  throw new RangeError(`Cannot parse ${n2} '${t2}'`);
}
function ne(n2) {
  return { ...n2, calendar: void 0 === n2.calendar ? gr() : new mr(n2.calendar) };
}
function te(n2) {
  return { ...ne(n2), timeZone: new we(n2.timeZone) };
}
var ee = class {
  constructor(n2) {
    this.id = n2;
  }
};
var oe = class extends ee {
  constructor(n2, t2) {
    super(n2), this.offsetNano = t2;
  }
  getPossibleOffsets() {
    return [this.offsetNano];
  }
  getOffset() {
    return this.offsetNano;
  }
  getTransition() {
  }
};
function re(n2, t2) {
  const e3 = {}, o2 = n2.formatToParts(t2);
  for (const n3 of o2)
    e3[n3.type] = n3.value;
  return e3;
}
var ie = { bc: "bce", ad: "ce" };
function se(n2) {
  return n2 = n2.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, ""), ie[n2] || n2;
}
var ae = Intl.DateTimeFormat;
function ce(n2) {
  return [].concat(n2 || []);
}
var ue = { "Pacific/Apia": { 2011: [[de(13017528e5), -36e12, -396e11], [de(13168728e5), -396e11, -36e12], [de(13252392e5), -36e12, 504e11]] } };
function de(n2) {
  return K(n2).mult(1e6);
}
var le = new Date().getUTCFullYear() + 10;
var he = [182, 91, 273];
var fe = class extends ee {
  constructor(n2) {
    const t2 = new ae("en-GB", { era: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZone: n2 });
    super(t2.resolvedOptions().timeZone), this.format = t2, this.yearEndOffsets = {}, this.transitionsInYear = ue[n2] || {};
  }
  getPossibleOffsets(n2) {
    let t2;
    const e3 = [this.getTransition(n2, -1), this.getTransition(n2.sub(1), 1)].filter(Boolean);
    for (const o2 of e3) {
      const [e4, r3, i2] = o2, s3 = n2.sub(r3), a2 = n2.sub(i2);
      if (G(e4, s3) > 0 && G(e4, a2) > 0)
        return [r3];
      if (!(G(e4, s3) <= 0 && G(e4, a2) <= 0))
        return r3 < i2 ? [] : [r3, i2];
      t2 = i2;
    }
    return void 0 !== t2 ? [t2] : [1e9 * this.getYearEndOffsetSec(Dn(n2))];
  }
  getOffset(n2) {
    return 1e9 * this.getOffsetForEpochSecs(n2.div(1e9).toNumber());
  }
  getOffsetForEpochSecs(n2) {
    const t2 = re(this.format, 1e3 * n2);
    let e3 = parseInt(t2.year);
    "bce" === se(t2.era) && (e3 = -(e3 - 1));
    const o2 = Sn(e3, parseInt(t2.month), parseInt(t2.day), parseInt(t2.hour), parseInt(t2.minute), parseInt(t2.second));
    return Math.floor(o2 / 1e3) - n2;
  }
  getTransition(n2, t2) {
    let e3 = Dn(n2);
    if (e3 > le) {
      const o2 = this.getTransitionFrom(e3, e3 + t2, t2, n2);
      if (o2 || t2 > 0)
        return o2;
      e3 = le;
    }
    return this.getTransitionFrom(Math.max(e3, 1847), t2 < 0 ? 1846 : le, t2, n2);
  }
  getTransitionFrom(n2, t2, e3, o2) {
    for (; n2 !== t2; n2 += e3) {
      let t3 = this.getTransitionsInYear(n2);
      e3 < 0 && (t3 = t3.slice().reverse());
      for (const n3 of t3)
        if (G(n3[0], o2) === e3)
          return n3;
    }
  }
  getYearEndOffsetSec(n2) {
    const { yearEndOffsets: t2 } = this;
    return t2[n2] || (t2[n2] = this.getOffsetForEpochSecs(Tn(n2 + 1) - 1));
  }
  getTransitionsInYear(n2) {
    const { transitionsInYear: t2 } = this;
    return t2[n2] || (t2[n2] = this.computeTransitionsInYear(n2));
  }
  computeTransitionsInYear(n2) {
    const t2 = this.getYearEndOffsetSec(n2 - 1), e3 = this.getYearEndOffsetSec(n2), o2 = Tn(n2) - 1, r3 = Tn(n2 + 1) - 1;
    if (t2 !== e3)
      return [this.searchTransition(o2, r3, t2, e3)];
    const i2 = this.searchIsland(t2, o2);
    return void 0 !== i2 ? [this.searchTransition(o2, i2[0], t2, i2[1]), this.searchTransition(i2[0], r3, i2[1], e3)] : [];
  }
  searchTransition(n2, t2, e3, o2) {
    for (; t2 - n2 > 1; ) {
      const o3 = Math.floor(n2 + (t2 - n2) / 2);
      this.getOffsetForEpochSecs(o3) === e3 ? n2 = o3 : t2 = o3;
    }
    return [K(t2).mult(1e9), 1e9 * e3, 1e9 * o2];
  }
  searchIsland(n2, t2) {
    for (const e3 of he) {
      const o2 = t2 + 86400 * e3, r3 = this.getOffsetForEpochSecs(o2);
      if (r3 !== n2)
        return [o2, r3];
    }
  }
};
var me = { UTC: new oe("UTC", 0) };
var [ge, ye] = m();
var we = class extends Y {
  constructor(n2) {
    if (!n2)
      throw new RangeError("Invalid timezone ID");
    super(), ye(this, function(n3) {
      const e3 = (n3 = String(n3)).toLocaleUpperCase();
      if (me[e3])
        return me[e3];
      const o2 = zt(n3);
      if (void 0 !== o2) {
        if (Math.abs(o2) > t)
          throw new RangeError("Offset out of bounds");
        return new oe(ot(o2), o2);
      }
      return me[e3] = new fe(n3);
    }(n2));
  }
  static from(n2) {
    if (h(n2))
      return function(n3) {
        const t3 = n3.timeZone;
        if (void 0 === t3)
          return n3;
        if (h(t3) && void 0 === t3.timeZone)
          return t3;
        return new we(t3);
      }(n2);
    const t2 = Lt(String(n2));
    if (t2) {
      if (t2.timeZone) {
        const n3 = te(t2);
        return function(n4) {
          const { offsetNanoseconds: t3, timeZone: e3, Z: o2 } = n4;
          if (void 0 !== t3 && !o2 && void 0 === St(n4, t3, e3, true))
            throw new RangeError("Mismatching offset/timezone");
        }(n3), n3.timeZone;
      }
      if (t2.Z)
        return new we("UTC");
      if (void 0 !== t2.offsetNanoseconds)
        return new we(ot(t2.offsetNanoseconds));
    }
    return new we(String(n2));
  }
  get id() {
    return this.toString();
  }
  getOffsetStringFor(n2) {
    return ot(this.getOffsetNanosecondsFor(n2));
  }
  getOffsetNanosecondsFor(n2) {
    const t2 = N(Yr, n2);
    return ge(this).getOffset(t2[vn]);
  }
  getPlainDateTimeFor(n2, t2 = gr()) {
    const e3 = N(Yr, n2);
    return Ho({ ...In(e3[vn].add(this.getOffsetNanosecondsFor(e3))), calendar: N(mr, t2) });
  }
  getInstantFor(n2, t2) {
    return yt(this, N(qo, n2), Qn(t2));
  }
  getPossibleInstantsFor(n2) {
    const t2 = Mn(N(qo, n2).getISOFields());
    return ge(this).getPossibleOffsets(t2).map((n3) => new Yr(t2.sub(n3)));
  }
  getPreviousTransition(n2) {
    const t2 = N(Yr, n2), e3 = ge(this).getTransition(t2[vn], -1);
    return e3 ? new Yr(e3[0]) : null;
  }
  getNextTransition(n2) {
    const t2 = N(Yr, n2), e3 = ge(this).getTransition(t2[vn], 1);
    return e3 ? new Yr(e3[0]) : null;
  }
  toString() {
    return ge(this).id;
  }
};
function pe(n2) {
  if (void 0 === n2.timeZone)
    throw new TypeError("Must specify timeZone");
  return N(we, n2.timeZone);
}
mt(we, "TimeZone");
var ve = Le(function(n2, t2, e3) {
  const o2 = Ce(n2, t2, e3);
  if (o2)
    return { ...o2, timeZone: pe(n2), offsetNanoseconds: void 0 !== n2.offset ? jt(String(n2.offset)) : void 0 };
});
var Me = Le(Ce);
var be = Le(Ue);
var Se = Le(function(n2, t2) {
  const e3 = pr(n2), o2 = je(n2, $n, e3);
  if (Be(o2))
    return e3.yearMonthFromFields(o2, t2);
});
var Ie = Le(function(n2, t2) {
  const e3 = pr(n2), o2 = je(n2, Wn, e3);
  if (Be(o2))
    return void 0 === n2.year && void 0 === n2.calendar && (o2.year = pn), e3.monthDayFromFields(o2, t2);
});
var Fe = Le(Pe);
var Oe = Le(function(n2, t2, e3, o2) {
  const r3 = Re(n2, t2, e3, o2), i2 = void 0 !== t2.offset;
  if (r3 || i2)
    return { ...r3 || n2.getISOFields(), timeZone: n2.timeZone, offsetNanoseconds: i2 ? jt(String(t2.offset)) : n2.offsetNanoseconds };
}, true);
var Te = Le(Re, true);
var De = Le(ke, true);
var Ne = Le(function(n2, t2, e3) {
  const o2 = n2.calendar;
  if (Be(je(t2, $n, o2))) {
    const r3 = He(n2, t2, $n, o2);
    return o2.yearMonthFromFields(r3, e3);
  }
}, true);
var Ye = Le(function(n2, t2, e3) {
  const o2 = n2.calendar;
  if (Be(je(t2, Wn, o2))) {
    const r3 = He(n2, t2, Wn, o2);
    return o2.monthDayFromFields(r3, e3);
  }
}, true);
var Ee = Le(xe, true);
var Ze = Le(function(n2) {
  const t2 = u(n2, Kn);
  if (Be(t2))
    return t2;
});
function Ce(n2, t2, e3) {
  const o2 = Ue(n2, e3), r3 = Pe(n2, t2);
  if (o2)
    return { ...o2.getISOFields(), ...r3 || on };
}
function Ue(n2, t2) {
  const e3 = pr(n2), o2 = je(n2, An, e3);
  if (Be(o2))
    return e3.dateFromFields(o2, t2);
}
function Pe(n2, t2) {
  const e3 = u(n2, zn);
  if (Be(e3))
    return Bn(sn(e3), t2);
}
function Re(n2, t2, e3, o2) {
  const r3 = ke(n2, t2, o2), i2 = xe(n2, t2, e3);
  if (r3 || i2)
    return { ...n2.getISOFields(), ...r3 ? r3.getISOFields() : {}, ...i2 };
}
function ke(n2, t2, e3) {
  const o2 = n2.calendar, r3 = je(t2, An, o2);
  if (Be(r3)) {
    const t3 = He(n2, r3, An, o2);
    return o2.dateFromFields(t3, e3);
  }
}
function xe(n2, t2, e3) {
  const o2 = u(t2, zn);
  if (Be(o2)) {
    return Bn(sn((r3 = n2, i2 = o2, y(zn, (n3, t3) => {
      var e4;
      return null != (e4 = i2[t3]) ? e4 : r3[t3];
    }))), e3);
  }
  var r3, i2;
}
function je(n2, t2, e3) {
  let o2 = Object.keys(t2);
  return o2 = e3.fields ? Array.prototype.slice.call(e3.fields(o2)) : Object.keys(qe(e3, o2)), qe(n2, o2);
}
function qe(n2, t2) {
  const e3 = {};
  for (const o2 of t2)
    void 0 !== n2[o2] && (e3[o2] = n2[o2]);
  return e3;
}
function He(n2, t2, e3, o2) {
  const r3 = je(n2, e3, o2);
  return o2.mergeFields ? o2.mergeFields(r3, t2) : yr(r3, t2);
}
function Le(n2, t2) {
  return (...e3) => {
    if (t2) {
      const n3 = e3[1];
      if (!h(n3))
        throw new TypeError("must be object-like");
      if (void 0 !== n3.calendar)
        throw new TypeError("calendar not allowed");
      if (void 0 !== n3.timeZone)
        throw new TypeError("timeZone not allowed");
    }
    const o2 = n2(...e3);
    if (!o2)
      throw new TypeError("No valid fields");
    return o2;
  };
}
function Be(n2) {
  return Object.keys(n2).length > 0;
}
var $e = K(t).mult(1e8);
var Ae = $e.mult(-1);
var ze = $e.add(86399999999999);
var We = Ae.sub(86399999999999);
function Ke(n2, t2) {
  const e3 = Mn(n2);
  Ge(e3), cr(e3, t2);
}
function Ge(n2) {
  -1 !== G(n2, We) && 1 !== G(n2, ze) || Zn();
}
function Je(n2, t2) {
  const e3 = Xe(un(n2), t2), [o2, r3] = ln(e3);
  return { ...vt(n2, r3), ...o2 };
}
function Qe(n2, t2) {
  const e3 = Xe(un(n2), t2), [o2] = ln(e3);
  return o2;
}
function Ve(n2, t2) {
  const [e3, o2] = function(n3) {
    const t3 = In(n3);
    return [bn(t3.isoYear, t3.isoMonth, t3.isoDay), un(t3)];
  }(n2), r3 = Xe(o2, t2);
  return e3.add(r3);
}
function Xe(n2, t2) {
  return k(n2, t2.incNano, t2.roundingFunc);
}
function _e(n2, t2, e3) {
  return (o2, r3) => {
    const i2 = io(n2, r3) ? {} : { ...n2, ...t2 };
    return { buildKey: ro(o2, r3, false), buildFormat: function(n3, t3) {
      return new ae(o2, { calendar: n3, timeZone: t3 || void 0, ...i2, ...r3, ...e3 });
    }, buildEpochMilli: no };
  };
}
function no(n2) {
  return n2.epochMilliseconds;
}
function to(n2, t2, e3) {
  return (o2, r3) => {
    const i2 = io(n2, r3) ? {} : n2;
    return { buildKey: ro(o2, r3, e3), buildFormat: function(n3, e4) {
      return new ae(o2, { calendar: n3, ...i2, ...r3, ...t2, timeZone: e4, timeZoneName: void 0 });
    }, buildEpochMilli: void 0 !== r3.timeZone ? eo.bind(null, new we(r3.timeZone)) : oo };
  };
}
function eo(n2, t2) {
  const e3 = Ho({ ...on, ...t2.getISOFields() });
  return n2.getInstantFor(e3).epochMilliseconds;
}
function oo(n2) {
  return Sn((t2 = n2.getISOFields()).isoYear, t2.isoMonth, t2.isoDay, t2.isoHour, t2.isoMinute, t2.isoSecond, t2.isoMillisecond);
  var t2;
}
function ro(n2, t2, e3) {
  var o2;
  const r3 = null != (o2 = t2.calendar) ? o2 : function(n3) {
    for (const t3 of n3) {
      const n4 = t3.match(/-u-ca-(.*)$/);
      if (n4)
        return n4[1];
    }
    return;
  }(n2), i2 = t2.timeZone;
  return function(n3, t3) {
    var o3, s3, a2, c2;
    const u2 = null == (o3 = n3.calendar) ? void 0 : o3.id, d2 = null == (s3 = n3.timeZone) ? void 0 : s3.id;
    if (t3) {
      if ((null == (a2 = t3.calendar) ? void 0 : a2.id) !== u2)
        throw new RangeError("Mismatching calendar");
      if ((null == (c2 = t3.timeZone) ? void 0 : c2.id) !== d2)
        throw new RangeError("Mismatching timeZone");
    }
    if ((e3 || "iso8601" !== u2) && void 0 !== u2 && void 0 !== r3 && r3 !== u2)
      throw new RangeError("Non-iso calendar mismatch");
    if (void 0 !== d2 && void 0 !== i2 && i2 !== d2)
      throw new RangeError("Given timeZone must agree");
    return [r3 || u2 || "iso8601", i2 || d2 || "UTC"];
  };
}
function io(n2, t2) {
  for (const e3 in n2)
    if (void 0 !== t2[e3])
      return true;
  return false;
}
function so(n2, t2) {
  n2.prototype.toLocaleString = function(n3, e3) {
    const o2 = t2(ce(n3), e3 || {});
    return o2.buildFormat(...o2.buildKey(this)).format(o2.buildEpochMilli(this));
  }, n2.prototype[D] = t2;
}
function ao(n2) {
  return null == n2 ? void 0 : n2[D];
}
function co(n2) {
  const t2 = function(n3) {
    const t3 = Ct.exec(Rt(n3));
    if (t3) {
      let n4, e3, o2, r3;
      [n4, r3] = uo(t3[8], t3[10], 5, void 0), [e3, r3] = uo(t3[12], t3[14], 4, r3), [o2, r3] = uo(t3[16], t3[18], 3, r3);
      const i2 = function(n5) {
        const t4 = {};
        for (const e4 in n5)
          void 0 !== n5[e4] && (t4[e4] = n5[e4]);
        return t4;
      }({ years: Xt(t3[2]), months: Xt(t3[3]), weeks: Xt(t3[4]), days: Xt(t3[5]), hours: n4, minutes: e3, seconds: o2 });
      if (!Object.keys(i2).length)
        throw new RangeError("Duration string must have at least one field");
      const s3 = dn(K(r3 || 0), 2);
      i2.milliseconds = s3.milliseconds, i2.microseconds = s3.microseconds, i2.nanoseconds = s3.nanoseconds;
      let a2 = nn(i2);
      return "-" === t3[1] && (a2 = X(a2)), a2;
    }
  }(n2);
  if (void 0 === t2)
    throw _t("duration", n2);
  return t2;
}
function uo(n2, t2, o2, r3) {
  if (void 0 !== n2) {
    if (void 0 !== r3)
      throw new RangeError("Partial units must be last unit");
    return [parseInt(n2), void 0 !== t2 ? Jt(t2) * (e[o2] / 1e9) : void 0];
  }
  if (void 0 !== r3) {
    const n3 = Math.trunc(r3 / e[o2]);
    return [n3, r3 - n3 * e[o2]];
  }
  return [void 0, void 0];
}
var lo = a("offset", { auto: 0, never: 1 }, 0);
var ho = class extends U {
  constructor(n2 = 0, t2 = 0, e3 = 0, o2 = 0, r3 = 0, i2 = 0) {
    super({ ...Bn({ isoHour: n2, isoMinute: t2, isoSecond: e3, isoMillisecond: o2, isoMicrosecond: r3, isoNanosecond: i2 }, 1), calendar: gr() });
  }
  static from(n2, t2) {
    const e3 = s(t2);
    return fo(n2 instanceof ho ? n2.getISOFields() : "object" == typeof n2 ? Fe(n2, e3) : qt(String(n2)));
  }
  static compare(n2, t2) {
    return kn(N(ho, n2), N(ho, t2));
  }
  with(n2, t2) {
    return fo(Ee(this, n2, s(t2)));
  }
  add(n2) {
    return go(this, N(ko, n2));
  }
  subtract(n2) {
    return go(this, X(N(ko, n2)));
  }
  until(n2, t2) {
    return yo(this, N(ho, n2), t2);
  }
  since(n2, t2) {
    return yo(N(ho, n2), this, t2);
  }
  round(n2) {
    const t2 = T(n2, 0, 5);
    return fo(Qe(this.getISOFields(), t2));
  }
  equals(n2) {
    return !kn(this, N(ho, n2));
  }
  toString(n2) {
    const t2 = Vn(n2);
    return et(Qe(this.getISOFields(), t2), t2);
  }
  toZonedDateTime(n2) {
    const t2 = N(Sr, n2.plainDate), e3 = N(we, n2.timeZone);
    return Fo({ ...t2.getISOFields(), ...this.getISOFields(), timeZone: e3 });
  }
  toPlainDateTime(n2) {
    return N(Sr, n2).toPlainDateTime(this);
  }
};
function fo(n2) {
  return new ho(n2.isoHour, n2.isoMinute, n2.isoSecond, n2.isoMillisecond, n2.isoMicrosecond, n2.isoNanosecond);
}
function mo(n2) {
  return N(ho, null != n2 ? n2 : { hour: 0 });
}
function go(n2, t2) {
  return fo(function(n3, t3) {
    const e3 = un(n3) + cn(t3).toNumber(), [o2] = ln(e3);
    return o2;
  }(n2.getISOFields(), t2));
}
function yo(n2, t2, o2) {
  const r3 = O(o2, 5, 0, 0, 5);
  return xo(function(n3, t3, o3) {
    return dn(K(k(un(t3) - un(n3), e[o3.smallestUnit] * o3.roundingIncrement, o3.roundingFunc)), o3.largestUnit);
  }(n2.getISOFields(), t2.getISOFields(), r3));
}
mt(ho, "PlainTime"), dt(ho, v), so(ho, function(n2, t2) {
  return { buildKey: () => ["", ""], buildFormat: () => new ae(n2, { hour: "numeric", minute: "2-digit", second: "2-digit", ...t2, timeZone: "UTC", timeZoneName: void 0, year: void 0, month: void 0, day: void 0, weekday: void 0 }), buildEpochMilli: (n3) => Math.trunc(un(n3.getISOFields()) / 1e6) };
});
var wo = { day: 1 };
var po = class extends U {
  constructor(n2, t2, e3 = gr(), o2 = 1) {
    const r3 = Hn({ isoYear: n2, isoMonth: t2, isoDay: o2 }, 1), i2 = N(mr, e3);
    var s3, a2;
    s3 = r3, a2 = i2.toString(), cr(Mn(s3), a2), super({ ...r3, calendar: i2 });
  }
  static from(n2, t2) {
    if (s(t2), n2 instanceof po)
      return vo(n2.getISOFields());
    if ("object" == typeof n2)
      return Se(n2, t2);
    const e3 = function(n3) {
      const t3 = $t(n3) || Bt(n3);
      if (!t3)
        throw _t("yearMonth", n3);
      return t3;
    }(String(n2));
    return void 0 === e3.calendar && (e3.isoDay = 1), vo(ne(e3));
  }
  static compare(n2, t2) {
    return Rn(N(po, n2), N(po, t2));
  }
  with(n2, t2) {
    return Ne(this, n2, t2);
  }
  add(n2, t2) {
    return Mo(this, N(ko, n2), t2);
  }
  subtract(n2, t2) {
    return Mo(this, X(N(ko, n2)), t2);
  }
  until(n2, t2) {
    return bo(this, N(po, n2), false, t2);
  }
  since(n2, t2) {
    return bo(this, N(po, n2), true, t2);
  }
  equals(n2) {
    return !Rn(this, N(po, n2));
  }
  toString(n2) {
    const t2 = this.getISOFields(), e3 = t2.calendar.toString(), o2 = Jn(n2);
    return ("iso8601" === e3 ? tt(t2) : nt(t2)) + rt(e3, o2);
  }
  toPlainDate(n2) {
    return this.calendar.dateFromFields({ year: this.year, month: this.month, day: n2.day });
  }
};
function vo(n2) {
  return new po(n2.isoYear, n2.isoMonth, n2.calendar, n2.isoDay);
}
function Mo(n2, t2, e3) {
  return n2.toPlainDate({ day: t2.sign < 0 ? n2.daysInMonth : 1 }).add(t2, e3).toPlainYearMonth();
}
function bo(n2, t2, e3, o2) {
  return xo(Tr(n2.toPlainDate(wo), t2.toPlainDate(wo), vr(n2, t2), e3, O(o2, 9, 8, 8, 9)));
}
mt(po, "PlainYearMonth"), dt(po), ft(po, lt), so(po, to({ year: "numeric", month: "numeric" }, { weekday: void 0, day: void 0, hour: void 0, minute: void 0, second: void 0 }, true));
var So = Symbol();
var Io = class extends U {
  constructor(n2, t2, e3 = gr()) {
    const o2 = N(we, t2), r3 = N(mr, e3), i2 = K(n2), [s3, a2] = Oo(i2, o2);
    Ke(s3, r3.toString()), super({ ...s3, calendar: r3, timeZone: o2, offset: ot(a2) }), this[vn] = i2, this[So] = a2;
  }
  static from(n2, t2) {
    const e3 = gt(t2, 3), o2 = s(t2);
    if (n2 instanceof Io)
      return new Io(n2.epochNanoseconds, n2.timeZone, n2.calendar);
    const r3 = "object" == typeof n2;
    return Fo(r3 ? ve(n2, o2, t2) : te(kt(String(n2))), !r3, e3, t2);
  }
  static compare(n2, t2) {
    return jn(N(Io, n2), N(Io, t2));
  }
  get timeZone() {
    return this.getISOFields().timeZone;
  }
  get offsetNanoseconds() {
    return this[So];
  }
  get offset() {
    return this.getISOFields().offset;
  }
  with(n2, t2) {
    Qn(t2);
    const e3 = s(t2), o2 = gt(t2, 0);
    return Fo(Oe(this, n2, e3, t2), false, o2, t2);
  }
  withPlainDate(n2) {
    const t2 = N(Sr, n2), e3 = t2.toPlainDateTime(this), { timeZone: o2 } = this, r3 = yt(o2, e3);
    return new Io(r3.epochNanoseconds, o2, Mr(this, t2));
  }
  withPlainTime(n2) {
    return Fo({ ...this.getISOFields(), ...void 0 === n2 ? on : N(ho, n2).getISOFields() });
  }
  withCalendar(n2) {
    return new Io(this.epochNanoseconds, this.timeZone, n2);
  }
  withTimeZone(n2) {
    return new Io(this.epochNanoseconds, n2, this.calendar);
  }
  add(n2, t2) {
    return To(this, N(ko, n2), t2);
  }
  subtract(n2, t2) {
    return To(this, X(N(ko, n2)), t2);
  }
  until(n2, t2) {
    return No(this, N(Io, n2), false, t2);
  }
  since(n2, t2) {
    return No(this, N(Io, n2), true, t2);
  }
  round(n2) {
    return Do(this, T(n2, 0, 6));
  }
  equals(n2) {
    return t2 = this, e3 = N(Io, n2), Pn(t2, e3) && t2.timeZone.toString() === e3.timeZone.toString();
    var t2, e3;
  }
  startOfDay() {
    return Fo({ ...this.getISOFields(), ...on, offsetNanoseconds: this.offsetNanoseconds }, false, 0);
  }
  get hoursInDay() {
    return It(this.getISOFields()) / n;
  }
  toString(n2) {
    const t2 = Vn(n2), e3 = lo(n2), o2 = Xn(n2), r3 = Jn(n2), i2 = Do(this, t2);
    return _n(i2.getISOFields(), t2) + (0 === e3 ? ot(x(i2.offsetNanoseconds)) : "") + (s3 = this.timeZone.toString(), 1 !== o2 ? `[${s3}]` : "") + rt(this.calendar.toString(), r3);
    var s3;
  }
  toPlainYearMonth() {
    return vo(this.getISOFields());
  }
  toPlainMonthDay() {
    return this.calendar.monthDayFromFields(this);
  }
  toPlainDateTime() {
    return Ho(this.getISOFields());
  }
  toPlainDate() {
    return Ir(this.getISOFields());
  }
  toPlainTime() {
    return fo(this.getISOFields());
  }
  toInstant() {
    return new Yr(this.epochNanoseconds);
  }
};
function Fo(n2, t2, e3, o2) {
  const r3 = bt(n2, t2, e3, o2);
  return new Io(r3, n2.timeZone, n2.calendar);
}
function Oo(n2, t2) {
  const e3 = new Yr(n2), o2 = t2.getOffsetNanosecondsFor(e3);
  return [In(n2.add(o2)), o2];
}
function To(n2, t2, e3) {
  const o2 = n2.getISOFields(), r3 = function(n3, t3, e4) {
    const { calendar: o3, timeZone: r4 } = n3, i2 = o3.dateAdd(Ir(n3), _(t3, rn), e4);
    return yt(r4, Ho({ ...n3, ...i2.getISOFields() }))[vn].add(cn(t3));
  }(o2, t2, e3);
  return new Io(r3, o2.timeZone, o2.calendar);
}
function Do(n2, t2) {
  const e3 = n2.getISOFields(), o2 = function(n3, t3, e4) {
    const { calendar: o3, timeZone: r3 } = n3;
    let i2, s3, a2 = un(n3);
    return 6 === e4.smallestUnit ? (i2 = on, s3 = e4.roundingFunc(a2 / It(n3))) : (a2 = Xe(a2, e4), [i2, s3] = ln(a2)), bt({ ...vt(n3, s3), ...i2, offsetNanoseconds: t3, calendar: o3, timeZone: r3 }, false, 0);
  }(e3, n2.offsetNanoseconds, t2);
  return new Io(o2, e3.timeZone, e3.calendar);
}
function No(n2, t2, e3, o2) {
  const r3 = O(o2, 5, 0, 0, 9), { largestUnit: i2 } = r3;
  if (i2 >= 6 && n2.timeZone.id !== t2.timeZone.id)
    throw new Error("Must be same timeZone");
  return xo(Or(n2, t2, vr(n2, t2), e3, r3));
}
function Yo(n2) {
  if (void 0 === n2)
    return;
  if (h(n2))
    return n2 instanceof Io || n2 instanceof qo ? n2 : N(void 0 !== n2.timeZone ? Io : qo, n2);
  if ("symbol" == typeof n2)
    throw new TypeError("Incorrect relativeTo type");
  const t2 = Lt(String(n2));
  if (t2)
    return void 0 !== t2.timeZone ? Fo(te(t2), true) : Ho(ne(t2));
  throw new RangeError("Invalid value of relativeTo");
}
function Eo(n2, t2, e3, o2) {
  return (e3 instanceof Sr ? function(n3, t3, e4, o3) {
    const r3 = e4.add(n3);
    return [o3.dateUntil(e4, r3, { largestUnit: M[t3] }), r3];
  }(n2, Math.max(6, t2), e3, o2) : Zo(n2, t2, e3, o2))[0];
}
function Zo(n2, t2, e3, o2, r3) {
  const i2 = true !== r3 && t2 > 7 && n2.weeks;
  i2 && (n2 = _(n2, { weeks: 0 }));
  let s3 = e3.add(n2), a2 = Dr(e3, s3, o2, t2);
  return i2 && (a2 = _(a2, { weeks: i2 }), s3 = s3.add({ weeks: i2 })), [a2, s3];
}
function Co(n2, t2, e3, o2) {
  const r3 = b[t2], { sign: i2 } = n2;
  if (!i2)
    return n2;
  const s3 = {};
  for (let e4 = 9; e4 >= t2; e4--) {
    const t3 = b[e4];
    s3[t3] = n2[t3];
  }
  const a2 = { [r3]: i2 }, c2 = e3.add(s3), u2 = c2.add(a2), d2 = On(c2), l2 = On(u2), h2 = On(o2).sub(d2).toNumber() / l2.sub(d2).toNumber() * i2;
  return s3[r3] += h2, s3;
}
function Uo(n2, t2, o2, r3, s3, a2) {
  const { largestUnit: c2, smallestUnit: u2, roundingIncrement: d2, roundingFunc: l2 } = a2;
  if (!i(c2)) {
    return dn(q(On(o2).sub(On(t2)).mult(s3 ? -1 : 1), e[u2] * d2, l2), c2);
  }
  let h2 = Co(n2, u2, t2, o2);
  const f2 = b[u2];
  function m2() {
    const n3 = h2[f2];
    h2[f2] = k(n3, d2, l2);
  }
  return l2 === Math.round && m2(), s3 && (h2 = X(h2)), l2 !== Math.round && m2(), u2 > 0 && (h2 = s3 ? X(Eo(X(h2), c2, t2, r3)) : Eo(h2, c2, t2, r3)), h2;
}
mt(Io, "ZonedDateTime"), dt(Io, v), ft(Io, ht), at(Io), so(Io, _e({ year: "numeric", month: "numeric", day: "numeric", weekday: void 0, hour: "numeric", minute: "2-digit", second: "2-digit" }, { timeZoneName: "short" }, {}));
var [Po, Ro] = m();
var ko = class extends E {
  constructor(n2 = 0, t2 = 0, e3 = 0, o2 = 0, r3 = 0, i2 = 0, s3 = 0, a2 = 0, c2 = 0, u2 = 0) {
    super();
    const d2 = Ze({ years: n2, months: t2, weeks: e3, days: o2, hours: r3, minutes: i2, seconds: s3, milliseconds: a2, microseconds: c2, nanoseconds: u2 });
    Ro(this, function(n3) {
      const t3 = nn(n3), { sign: e4 } = t3;
      for (const n4 of b) {
        const o3 = t3[n4], r4 = R(t3[n4]);
        if (r4 && r4 !== e4)
          throw new RangeError("All fields must be same sign");
        if (!Number.isInteger(o3))
          throw new RangeError("Duration fields must be integers");
      }
      return t3;
    }(d2));
  }
  static from(n2) {
    return xo("object" == typeof n2 ? Ze(n2) : co(n2));
  }
  static compare(n2, t2, e3) {
    return function(n3, t3, e4) {
      if (void 0 === e4 && en(n3) <= 6 && en(t3) <= 6)
        return G(an(n3), an(t3));
      if (!e4)
        throw new RangeError("Need relativeTo");
      const o2 = e4.add(n3), r3 = e4.add(t3);
      return void 0 !== e4[vn] ? jn(o2, r3) : Rn(o2, r3);
    }(N(ko, n2), N(ko, t2), Yo(d(e3).relativeTo));
  }
  get years() {
    return Po(this).years;
  }
  get months() {
    return Po(this).months;
  }
  get weeks() {
    return Po(this).weeks;
  }
  get days() {
    return Po(this).days;
  }
  get hours() {
    return Po(this).hours;
  }
  get minutes() {
    return Po(this).minutes;
  }
  get seconds() {
    return Po(this).seconds;
  }
  get milliseconds() {
    return Po(this).milliseconds;
  }
  get microseconds() {
    return Po(this).microseconds;
  }
  get nanoseconds() {
    return Po(this).nanoseconds;
  }
  get sign() {
    return Po(this).sign;
  }
  get blank() {
    return !this.sign;
  }
  with(n2) {
    return xo({ ...Po(this), ...Ze(n2) });
  }
  negated() {
    return xo(X(Po(this)));
  }
  abs() {
    return xo(w(Po(this), V, (n2) => Math.abs(n2)));
  }
  add(n2, t2) {
    return jo(this, N(ko, n2), t2);
  }
  subtract(n2, t2) {
    return jo(this, X(N(ko, n2)), t2);
  }
  round(n2) {
    const t2 = "string" == typeof n2 ? { smallestUnit: n2 } : n2;
    if (!h(t2))
      throw new TypeError("Must specify options");
    if (void 0 === t2.largestUnit && void 0 === t2.smallestUnit)
      throw new RangeError("Must specify either largestUnit or smallestUnit");
    const o2 = O(t2, en(this), 0, 0, 9, true), i2 = Yo(t2.relativeTo);
    return xo(function(n3, t3, o3, i3) {
      const { largestUnit: s3, smallestUnit: a2, roundingIncrement: c2, roundingFunc: u2 } = t3;
      if (void 0 === o3 && en(n3) <= 6 && r(s3) && r(a2))
        return dn(q(an(n3), e[a2] * c2, u2), s3);
      if (!o3)
        throw new RangeError("Need relativeTo");
      const [d2, l2] = Zo(n3, s3, o3, i3);
      return Uo(d2, o3, l2, i3, false, t3);
    }(this, o2, i2, i2 ? i2.calendar : void 0));
  }
  total(n2) {
    const t2 = function(n3) {
      let t3, e3;
      return "string" == typeof n3 ? e3 = n3 : (e3 = d(n3).unit, t3 = n3.relativeTo), { unit: F(e3, void 0, 0, 9), relativeTo: t3 };
    }(n2), o2 = Yo(t2.relativeTo);
    return function(n3, t3, o3, i2) {
      if (void 0 === o3 && en(n3) <= 6 && r(t3))
        return an(n3).toNumber() / e[t3];
      if (!o3)
        throw new RangeError("Need relativeTo");
      const [s3, a2] = Zo(n3, t3, o3, i2, true);
      return Co(s3, t3, o3, a2)[b[t3]];
    }(this, t2.unit, o2, o2 ? o2.calendar : void 0);
  }
  toString(n2) {
    const t2 = Vn(n2, 3);
    return function(n3, t3) {
      const { smallestUnit: e3, fractionalSecondDigits: o2, roundingFunc: r3 } = t3, { sign: i2 } = n3, s3 = n3.hours, a2 = n3.minutes;
      let c2 = n3.seconds, u2 = "";
      if (e3 <= 3) {
        const t4 = st(n3.milliseconds, n3.microseconds, n3.nanoseconds, o2, r3, e3);
        u2 = t4[0], c2 += t4[1];
      }
      const d2 = void 0 !== o2 || u2 || !i2;
      return (i2 < 0 ? "-" : "") + "P" + it([[n3.years, "Y"], [n3.months, "M"], [n3.weeks, "W"], [n3.days, "D"]]) + (s3 || a2 || c2 || d2 ? "T" + it([[s3, "H"], [a2, "M"], [e3 <= 3 ? c2 : 0, u2 + "S", d2]]) : "");
    }(Po(this), t2);
  }
  toLocaleString(n2, t2) {
    return this.toString();
  }
};
function xo(n2) {
  return new ko(n2.years, n2.months, n2.weeks, n2.days, n2.hours, n2.minutes, n2.seconds, n2.milliseconds, n2.microseconds, n2.nanoseconds);
}
function jo(n2, t2, e3) {
  const o2 = Yo(d(e3).relativeTo);
  return xo(function(n3, t3, e4, o3) {
    const r3 = Math.max(en(n3), en(t3));
    if (void 0 === e4 && r3 <= 6)
      return dn(an(n3).add(an(t3)), r3);
    if (!e4)
      throw new RangeError("Need relativeTo");
    const i2 = e4.add(n3).add(t3);
    return Dr(e4, i2, o3, r3);
  }(n2, t2, o2, o2 ? o2.calendar : void 0));
}
mt(ko, "Duration");
var qo = class extends U {
  constructor(n2, t2, e3, o2 = 0, r3 = 0, i2 = 0, s3 = 0, a2 = 0, c2 = 0, u2 = gr()) {
    const d2 = Ln({ isoYear: n2, isoMonth: t2, isoDay: e3, isoHour: o2, isoMinute: r3, isoSecond: i2, isoMillisecond: s3, isoMicrosecond: a2, isoNanosecond: c2 }, 1), l2 = N(mr, u2);
    Ke(d2, l2.toString()), super({ ...d2, calendar: l2 });
  }
  static from(n2, t2) {
    const e3 = s(t2);
    return Ho(n2 instanceof qo ? n2.getISOFields() : "object" == typeof n2 ? Me(n2, e3, t2) : ne(xt(String(n2))));
  }
  static compare(n2, t2) {
    return Rn(N(qo, n2), N(qo, t2));
  }
  with(n2, t2) {
    const e3 = s(t2);
    return Ho(Te(this, n2, e3, t2));
  }
  withPlainDate(n2) {
    const t2 = N(Sr, n2);
    return Ho({ ...this.getISOFields(), ...t2.getISOFields(), calendar: Mr(this, t2) });
  }
  withPlainTime(n2) {
    return Ho({ ...this.getISOFields(), ...mo(n2).getISOFields() });
  }
  withCalendar(n2) {
    return Ho({ ...this.getISOFields(), calendar: N(mr, n2) });
  }
  add(n2, t2) {
    return Lo(this, N(ko, n2), t2);
  }
  subtract(n2, t2) {
    return Lo(this, X(N(ko, n2)), t2);
  }
  until(n2, t2) {
    return Bo(this, N(qo, n2), false, t2);
  }
  since(n2, t2) {
    return Bo(this, N(qo, n2), true, t2);
  }
  round(n2) {
    const t2 = T(n2, 0, 6);
    return Ho({ ...Je(this.getISOFields(), t2), calendar: this.calendar });
  }
  equals(n2) {
    return Pn(this, N(qo, n2));
  }
  toString(n2) {
    const t2 = Vn(n2), e3 = Jn(n2);
    return _n(Je(this.getISOFields(), t2), t2) + rt(this.calendar.toString(), e3);
  }
  toZonedDateTime(n2, t2) {
    const e3 = N(we, n2), o2 = yt(e3, this, Qn(t2));
    return new Io(o2.epochNanoseconds, e3, this.calendar);
  }
  toPlainYearMonth() {
    return vo(this.getISOFields());
  }
  toPlainMonthDay() {
    return this.calendar.monthDayFromFields(this);
  }
  toPlainDate() {
    return Ir(this.getISOFields());
  }
  toPlainTime() {
    return fo(this.getISOFields());
  }
};
function Ho(n2) {
  return new qo(n2.isoYear, n2.isoMonth, n2.isoDay, n2.isoHour, n2.isoMinute, n2.isoSecond, n2.isoMillisecond, n2.isoMicrosecond, n2.isoNanosecond, n2.calendar);
}
function Lo(n2, t2, e3) {
  const o2 = function(n3, t3, e4) {
    const { calendar: o3 } = n3;
    return In(Mn(o3.dateAdd(Ir(n3), _(t3, rn), e4).getISOFields()).add(un(n3)).add(cn(t3)));
  }(n2.getISOFields(), t2, e3);
  return Ho({ ...o2, calendar: n2.calendar });
}
function Bo(n2, t2, e3, o2) {
  const r3 = O(o2, 6, 0, 0, 9);
  return xo(Or(n2, t2, vr(n2, t2), e3, r3));
}
mt(qo, "PlainDateTime"), dt(qo, v), ft(qo, ht), so(qo, to({ year: "numeric", month: "numeric", day: "numeric", weekday: void 0, hour: "numeric", minute: "2-digit", second: "2-digit" }, {}));
var $o = class extends U {
  constructor(n2, t2, e3 = gr(), o2 = pn) {
    super({ ...Hn({ isoYear: o2, isoMonth: n2, isoDay: t2 }, 1), calendar: N(mr, e3) });
  }
  static from(n2, t2) {
    if (s(t2), n2 instanceof $o)
      return Ao(n2.getISOFields());
    if ("object" == typeof n2)
      return Ie(n2, t2);
    const e3 = function(n3) {
      const t3 = At(n3) || Bt(n3);
      if (!t3)
        throw _t("monthDay", n3);
      return t3;
    }(String(n2));
    return void 0 === e3.calendar && (e3.isoYear = pn), Ao(ne(e3));
  }
  with(n2, t2) {
    return Ye(this, n2, t2);
  }
  equals(n2) {
    return !Rn(this, N($o, n2));
  }
  toString(n2) {
    const t2 = this.getISOFields(), e3 = t2.calendar.toString(), o2 = Jn(n2);
    return ("iso8601" === e3 ? function(n3) {
      return L(n3.isoMonth, 2) + "-" + L(n3.isoDay, 2);
    }(t2) : nt(t2)) + rt(e3, o2);
  }
  toPlainDate(n2) {
    return this.calendar.dateFromFields({ year: n2.year, monthCode: this.monthCode, day: this.day }, { overflow: "reject" });
  }
};
function Ao(n2) {
  return new $o(n2.isoMonth, n2.isoDay, n2.calendar, n2.isoYear);
}
function zo(n2) {
  return n2 instanceof Sr || n2 instanceof qo || n2 instanceof Io || n2 instanceof po || n2 instanceof $o;
}
function Wo(n2, t2, e3) {
  let o2;
  if (n2 instanceof Sr)
    o2 = n2;
  else if (zo(n2)) {
    if (e3 && n2 instanceof $o)
      throw new TypeError("PlainMonthDay not allowed");
    o2 = Ir(n2.getISOFields());
  } else
    o2 = Sr.from(n2);
  return br(o2.calendar, t2), o2;
}
function Ko(n2, t2, e3) {
  if (zo(n2))
    return n2.getISOFields();
  let { era: o2, eraYear: r3, year: i2, month: a2, monthCode: c2, day: u2 } = n2;
  const d2 = void 0 !== r3 && void 0 !== o2 ? mn(t2.id, r3, o2) : void 0;
  if (void 0 === i2) {
    if (void 0 === d2)
      throw new TypeError("Must specify either a year or an era & eraYear");
    i2 = d2;
  } else if (void 0 !== d2 && d2 !== i2)
    throw new RangeError("year and era/eraYear must match");
  if (void 0 === u2)
    throw new TypeError("Must specify day");
  const l2 = s(e3);
  if (void 0 !== c2) {
    const [n3, e4] = t2.convertMonthCode(c2, i2);
    if (void 0 !== a2 && a2 !== n3)
      throw new RangeError("Month doesnt match with monthCode");
    if (a2 = n3, e4) {
      if (1 === l2)
        throw new RangeError("Month code out of range");
      u2 = t2.daysInMonth(i2, a2);
    }
  } else if (void 0 === a2)
    throw new TypeError("Must specify either a month or monthCode");
  return [i2, a2, u2] = qn(i2, a2, u2, t2, l2), Fn(t2.epochMilliseconds(i2, a2, u2));
}
function Go(n2, t2) {
  if (zo(n2)) {
    if (t2 && n2 instanceof $o)
      throw new TypeError("PlainMonthDay not allowed");
    return n2.getISOFields();
  }
  return Sr.from(n2).getISOFields();
}
function Jo(n2, t2) {
  return Cn(n2.epochMilliseconds(t2, 1, 1), n2.epochMilliseconds(t2 + 1, 1, 1));
}
function Qo(n2, t2, e3, o2) {
  return Cn(n2.epochMilliseconds(t2, 1, 1), n2.epochMilliseconds(t2, e3, o2)) + 1;
}
mt($o, "PlainMonthDay"), dt($o), ft($o, ["monthCode", "day"]), so($o, to({ month: "numeric", day: "numeric" }, { weekday: void 0, year: void 0, hour: void 0, minute: void 0, second: void 0 }, true));
var Vo = { hebrew: 6, chinese: 0, dangi: 0 };
var Xo = class extends fn {
  constructor(n2) {
    const t2 = _o(n2);
    if (e3 = n2, o2 = t2.resolvedOptions().calendar, gn(e3) !== gn(o2))
      throw new RangeError("Invalid calendar: " + n2);
    var e3, o2;
    super(n2), this.format = t2, this.yearCorrection = this.computeFieldsDumb(0).year - 1970, this.monthCacheByYear = {};
  }
  epochMilliseconds(n2, t2, e3) {
    return Un(this.queryMonthCache(n2)[0][t2 - 1], e3 - 1);
  }
  daysInMonth(n2, t2) {
    const e3 = this.queryMonthCache(n2)[0], o2 = e3[t2 - 1];
    t2 >= e3.length && (n2++, t2 = 0);
    return Cn(o2, this.queryMonthCache(n2)[0][t2]);
  }
  monthsInYear(n2) {
    return this.queryMonthCache(n2)[0].length;
  }
  monthCode(n2, t2) {
    const e3 = this.queryLeapMonthByYear(t2);
    return !e3 || n2 < e3 ? super.monthCode(n2, t2) : super.monthCode(n2 - 1, t2) + (n2 === e3 ? "L" : "");
  }
  convertMonthCode(n2, t2) {
    const e3 = this.queryLeapMonthByYear(t2);
    let o2 = /L$/.test(n2), r3 = parseInt(n2.substr(1)), i2 = false;
    if (o2) {
      const n3 = Vo[this.id];
      if (void 0 === n3)
        throw new RangeError("Calendar system doesnt support leap months");
      if (n3) {
        if (r3 !== n3 - 1)
          throw new RangeError("Invalid leap-month month code");
      } else if (r3 <= 1 || r3 >= 12)
        throw new RangeError("Invalid leap-month month code");
    }
    return !o2 || e3 && r3 === e3 - 1 || (i2 = true, o2 = false), (o2 || e3 && r3 >= e3) && r3++, [r3, i2];
  }
  inLeapYear(n2) {
    const t2 = Jo(this, n2);
    return t2 > Jo(this, n2 - 1) && t2 > Jo(this, n2 + 1);
  }
  guessYearForMonthDay(n2, t2) {
    let e3 = 1970 + this.yearCorrection;
    const o2 = e3 + 100;
    for (; e3 < o2; e3++) {
      const [o3, r3] = this.convertMonthCode(n2, e3);
      if (!r3 && o3 <= this.monthsInYear(e3) && t2 <= this.daysInMonth(e3, o3))
        return e3;
    }
    throw new Error("Could not guess year");
  }
  normalizeISOYearForMonthDay(n2) {
    return n2;
  }
  computeFields(n2) {
    const t2 = this.computeFieldsDumb(n2), e3 = this.queryMonthCache(t2.year)[2];
    return { ...t2, month: e3[t2.month] };
  }
  computeFieldsDumb(n2) {
    const t2 = re(this.format, n2);
    let e3, o2, r3 = parseInt(t2.relatedYear || t2.year);
    var i2;
    return t2.era && (i2 = this.id, void 0 !== hn[gn(i2)]) && (e3 = se(t2.era), o2 = r3, r3 = mn(this.id, o2, e3, true)), { era: e3, eraYear: o2, year: r3, month: t2.month, day: parseInt(t2.day) };
  }
  queryLeapMonthByYear(n2) {
    const t2 = this.queryMonthCache(n2), e3 = this.queryMonthCache(n2 - 1), o2 = this.queryMonthCache(n2 + 1);
    if (t2[0].length > e3[0].length && t2[0].length > o2[0].length) {
      const n3 = t2[1], o3 = e3[1];
      for (let t3 = 0; t3 < o3.length; t3++)
        if (o3[t3] !== n3[t3])
          return t3 + 1;
    }
  }
  queryMonthCache(n2) {
    const { monthCacheByYear: t2 } = this;
    return t2[n2] || (t2[n2] = this.buildMonthCache(n2));
  }
  buildMonthCache(n2) {
    const t2 = [], e3 = [], o2 = {};
    let r3 = Sn(this.guessISOYear(n2), 1, 1);
    for (r3 = Un(r3, 400); ; ) {
      const o3 = this.computeFieldsDumb(r3);
      if (o3.year < n2)
        break;
      r3 = Un(r3, 1 - o3.day), o3.year === n2 && (t2.unshift(r3), e3.unshift(o3.month)), r3 = Un(r3, -1);
    }
    for (let n3 = 0; n3 < e3.length; n3++)
      o2[e3[n3]] = n3 + 1;
    return [t2, e3, o2];
  }
  guessISOYear(n2) {
    return n2 - this.yearCorrection;
  }
};
function _o(n2) {
  return new ae("en-US", { calendar: n2, era: "short", year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}
var nr = Sn(1868, 9, 8);
var tr = { gregory: Gn, japanese: class extends Gn {
  constructor() {
    super(...arguments), this.format = _o("japanese");
  }
  computeFields(n2) {
    const t2 = super.computeFields(n2);
    if (n2 >= nr) {
      const e3 = re(this.format, n2);
      t2.era = se(e3.era), t2.eraYear = parseInt(e3.relatedYear || e3.year);
    }
    return t2;
  }
}, islamic: class extends Xo {
  guessISOYear(n2) {
    return Math.ceil(32 * n2 / 33 + 622);
  }
} };
var er = { iso8601: wn };
function or(n2) {
  const t2 = (n2 = String(n2)).toLocaleLowerCase();
  return er[t2] || (er[t2] = new (tr[gn(t2)] || Xo)(n2));
}
var rr = Sn(1582, 10, 15);
var ir = Sn(622, 7, 18);
var sr = { buddhist: rr, japanese: rr, roc: rr, islamic: ir, "islamic-rgsa": ir, indian: 0 };
var ar = {};
function cr(n2, t2) {
  return ur(n2.div(1e6).toNumber(), t2);
}
function ur(n2, t2) {
  if (function(n3, t3) {
    return function(n4) {
      let t4 = ar[n4];
      if (void 0 === t4) {
        const e3 = sr[n4];
        if (void 0 === e3)
          t4 = false;
        else {
          let o2 = or(n4);
          o2 instanceof Xo || (o2 = new Xo(n4));
          const r3 = e3 - 864e5, i2 = o2.computeFields(r3);
          t4 = r3 !== o2.epochMilliseconds(i2.year, i2.month, i2.day);
        }
        ar[n4] = t4;
      }
      return t4;
    }(t3) && n3 < sr[t3];
  }(n2, t2))
    throw new RangeError("Invalid timestamp for calendar");
}
function dr(n2, t2, e3) {
  const o2 = 7 + t2 - e3;
  return -H(Nn(n2, 1, o2) - t2, 7) + o2 - 1;
}
function lr(n2, t2, e3) {
  const o2 = dr(n2, t2, e3), r3 = dr(n2 + 1, t2, e3);
  return (Jo(wn, n2) - o2 + r3) / 7;
}
var [hr, fr] = m();
var mr = class extends Y {
  constructor(n2) {
    super(), "islamicc" === n2 && (n2 = "islamic-civil"), fr(this, or(n2));
  }
  static from(n2) {
    if (h(n2))
      return function(n3) {
        const t3 = n3.calendar;
        if (void 0 === t3)
          return n3;
        if (h(t3) && void 0 === t3.calendar)
          return t3;
        return new mr(t3);
      }(n2);
    const t2 = Bt(String(n2), false, true);
    return new mr(t2 ? t2.calendar || "iso8601" : String(n2));
  }
  get id() {
    return this.toString();
  }
  era(n2) {
    const t2 = Go(n2, true);
    return wr(hr(this), t2.isoYear, t2.isoMonth, t2.isoDay).era;
  }
  eraYear(n2) {
    const t2 = Go(n2, true);
    return wr(hr(this), t2.isoYear, t2.isoMonth, t2.isoDay).eraYear;
  }
  year(n2) {
    const t2 = Go(n2, true);
    return wr(hr(this), t2.isoYear, t2.isoMonth, t2.isoDay).year;
  }
  month(n2) {
    const t2 = Go(n2, true);
    return wr(hr(this), t2.isoYear, t2.isoMonth, t2.isoDay).month;
  }
  monthCode(n2) {
    const t2 = Wo(n2, this);
    return hr(this).monthCode(t2.month, t2.year);
  }
  day(n2) {
    const t2 = Go(n2);
    return wr(hr(this), t2.isoYear, t2.isoMonth, t2.isoDay).day;
  }
  dayOfWeek(n2) {
    const t2 = Go(n2, true);
    return Nn(t2.isoYear, t2.isoMonth, t2.isoDay);
  }
  dayOfYear(n2) {
    const t2 = Wo(n2, this, true);
    return Qo(hr(this), t2.year, t2.month, t2.day);
  }
  weekOfYear(n2) {
    const t2 = Go(n2, true);
    return function(n3, t3, e3, o2, r3) {
      const i2 = dr(n3, o2, r3), s3 = Math.floor((Qo(wn, n3, t3, e3) - i2 - 1) / 7) + 1;
      if (s3 < 1)
        return s3 + lr(n3 - 1, o2, r3);
      const a2 = lr(n3, o2, r3);
      return s3 > a2 ? s3 - a2 : s3;
    }(t2.isoYear, t2.isoMonth, t2.isoDay, 1, 4);
  }
  daysInWeek(n2) {
    return Go(n2, true), 7;
  }
  daysInMonth(n2) {
    const t2 = Wo(n2, this, true);
    return hr(this).daysInMonth(t2.year, t2.month);
  }
  daysInYear(n2) {
    const t2 = Wo(n2, this, true);
    return Jo(hr(this), t2.year);
  }
  monthsInYear(n2) {
    const t2 = Wo(n2, this, true);
    return hr(this).monthsInYear(t2.year);
  }
  inLeapYear(n2) {
    return hr(this).inLeapYear(this.year(n2));
  }
  dateFromFields(n2, t2) {
    const e3 = Ko(u(n2, An), hr(this), t2);
    return new Sr(e3.isoYear, e3.isoMonth, e3.isoDay, this);
  }
  yearMonthFromFields(n2, t2) {
    const e3 = Ko({ ...u(n2, $n), day: 1 }, hr(this), t2);
    return new po(e3.isoYear, e3.isoMonth, this, e3.isoDay);
  }
  monthDayFromFields(n2, t2) {
    const e3 = hr(this);
    let { era: o2, eraYear: r3, year: i2, month: s3, monthCode: a2, day: c2 } = u(n2, Wn);
    if (void 0 === c2)
      throw new TypeError("required property 'day' missing or undefined");
    if (void 0 !== a2 ? i2 = pn : void 0 !== o2 && void 0 !== r3 && (i2 = mn(e3.id, r3, o2)), void 0 === i2) {
      if (void 0 === a2)
        throw new TypeError("either year or monthCode required with month");
      i2 = e3.guessYearForMonthDay(a2, c2);
    }
    const d2 = Ko({ year: i2, month: s3, monthCode: a2, day: c2 }, e3, t2);
    return new $o(d2.isoMonth, d2.isoDay, this, e3.normalizeISOYearForMonthDay(d2.isoYear));
  }
  dateAdd(n2, e3, o2) {
    const r3 = hr(this), i2 = function(n3, e4, o3, r4) {
      n3 = pt(n3 = wt(n3, e4.years, o3, r4), e4.months, o3, r4);
      let i3 = o3.epochMilliseconds(n3.year, n3.month, n3.day);
      const s3 = Math.trunc(cn(e4).div(t).toNumber());
      return i3 = Un(i3, 7 * e4.weeks + e4.days + s3), Fn(i3);
    }(N(Sr, n2, o2), N(ko, e3), r3, s(o2));
    return new Sr(i2.isoYear, i2.isoMonth, i2.isoDay, this);
  }
  dateUntil(n2, t2, e3) {
    const o2 = hr(this), r3 = N(Sr, n2), i2 = N(Sr, t2), s3 = d(e3).largestUnit, a2 = "auto" === s3 ? 6 : F(s3, 6, 6, 9);
    return br(this, vr(r3, i2)), xo(function(n3, t3, e4, o3) {
      let r4 = 0, i3 = 0, s4 = 0, a3 = 0;
      switch (o3) {
        case 9:
          r4 = function(n4, t4, e5) {
            const [, o4, r5] = qn(t4.year, n4.month, n4.day, e5, 0), i4 = xn(t4, n4), s5 = P(t4.month, o4) || P(t4.day, r5);
            return t4.year - n4.year - (s5 && i4 && s5 !== i4 ? i4 : 0);
          }(n3, t3, e4), n3 = wt(n3, r4, e4, 0);
        case 8:
          i3 = function(n4, t4, e5) {
            let o4 = 0;
            const r5 = xn(t4, n4);
            if (r5) {
              let { year: i4 } = n4;
              for (; i4 !== t4.year; )
                o4 += e5.monthsInYear(i4) * r5, i4 += r5;
              const [, s5, a4] = qn(t4.year, n4.month, n4.day, e5, 0);
              o4 += t4.month - s5;
              const c2 = P(t4.day, a4);
              c2 && r5 && c2 !== r5 && (o4 -= r5);
            }
            return o4;
          }(n3, t3, e4), n3 = pt(n3, i3, e4, 0);
      }
      a3 = Cn(e4.epochMilliseconds(n3.year, n3.month, n3.day), e4.epochMilliseconds(t3.year, t3.month, t3.day)), 7 === o3 && (s4 = Math.trunc(a3 / 7), a3 %= 7);
      return nn({ years: r4, months: i3, weeks: s4, days: a3, hours: 0, minutes: 0, seconds: 0, milliseconds: 0, microseconds: 0, nanoseconds: 0 });
    }(r3, i2, o2, a2));
  }
  fields(n2) {
    return n2.slice();
  }
  mergeFields(n2, t2) {
    return yr(n2, t2);
  }
  toString() {
    return hr(this).id;
  }
};
function gr() {
  return new mr("iso8601");
}
function yr(n2, t2) {
  var e3;
  const o2 = { ...n2, ...t2 };
  if (void 0 !== n2.year) {
    delete o2.era, delete o2.eraYear, delete o2.year;
    let e4 = false;
    void 0 === t2.era && void 0 === t2.eraYear || (o2.era = t2.era, o2.eraYear = t2.eraYear, e4 = true), void 0 !== t2.year && (o2.year = t2.year, e4 = true), e4 || (o2.year = n2.year);
  }
  if (void 0 !== n2.monthCode) {
    delete o2.monthCode, delete o2.month;
    let e4 = false;
    void 0 !== t2.month && (o2.month = t2.month, e4 = true), void 0 !== t2.monthCode && (o2.monthCode = t2.monthCode, e4 = true), e4 || (o2.monthCode = n2.monthCode);
  }
  return void 0 !== n2.day && (o2.day = null != (e3 = t2.day) ? e3 : n2.day), o2;
}
function wr(n2, t2, e3, o2) {
  const r3 = Sn(t2, e3, o2);
  return ur(r3, n2.id), n2.computeFields(r3);
}
function pr(n2) {
  return void 0 === n2.calendar ? gr() : N(mr, n2.calendar);
}
function vr(n2, t2) {
  const { calendar: e3 } = n2;
  return br(e3, t2.calendar), e3;
}
function Mr(n2, t2) {
  const e3 = n2.calendar, o2 = t2.calendar;
  if ("iso8601" === e3.id)
    return o2;
  if ("iso8601" === o2.id)
    return e3;
  if (e3.id !== o2.id)
    throw new RangeError("Non-ISO calendars incompatible");
  return e3;
}
function br(n2, t2) {
  if (n2.toString() !== t2.toString())
    throw new RangeError("Calendars must match");
}
mt(mr, "Calendar");
var Sr = class extends U {
  constructor(n2, t2, e3, o2 = gr()) {
    const r3 = Hn({ isoYear: n2, isoMonth: t2, isoDay: e3 }, 1), i2 = N(mr, o2);
    !function(n3, t3) {
      const e4 = Mn(n3);
      Ge(e4.add(e4.sign() < 0 ? 86399999999999 : 0)), cr(e4, t3);
    }(r3, i2.toString()), super({ ...r3, calendar: i2 });
  }
  static from(n2, t2) {
    return s(t2), n2 instanceof Sr ? Ir(n2.getISOFields()) : "object" == typeof n2 ? be(n2, t2) : Ir(ne(xt(String(n2))));
  }
  static compare(n2, t2) {
    return Rn(N(Sr, n2), N(Sr, t2));
  }
  with(n2, t2) {
    return De(this, n2, t2);
  }
  withCalendar(n2) {
    const t2 = this.getISOFields();
    return new Sr(t2.isoYear, t2.isoMonth, t2.isoDay, n2);
  }
  add(n2, t2) {
    return this.calendar.dateAdd(this, n2, t2);
  }
  subtract(n2, t2) {
    return this.calendar.dateAdd(this, N(ko, n2).negated(), t2);
  }
  until(n2, t2) {
    return Fr(this, N(Sr, n2), false, t2);
  }
  since(n2, t2) {
    return Fr(this, N(Sr, n2), true, t2);
  }
  equals(n2) {
    return !Rn(this, N(Sr, n2));
  }
  toString(n2) {
    const t2 = Jn(n2), e3 = this.getISOFields();
    return nt(e3) + rt(e3.calendar.toString(), t2);
  }
  toZonedDateTime(n2) {
    const t2 = function(n3) {
      let t3, e4;
      if ("string" == typeof n3)
        e4 = n3;
      else {
        if ("object" != typeof n3)
          throw new TypeError("Invalid options/timeZone argument");
        if (void 0 !== n3.id ? e4 = n3 : (e4 = n3.timeZone, t3 = n3.plainTime), void 0 === e4)
          throw new TypeError("Invalid timeZone argument");
      }
      return { plainTime: t3, timeZone: e4 };
    }(n2), e3 = N(we, t2.timeZone), o2 = void 0 === t2.plainTime ? void 0 : N(ho, t2.plainTime);
    return Fo({ ...this.getISOFields(), ...o2 ? o2.getISOFields() : on, timeZone: e3 });
  }
  toPlainDateTime(n2) {
    return Ho({ ...this.getISOFields(), ...mo(n2).getISOFields() });
  }
  toPlainYearMonth() {
    return vo(this.getISOFields());
  }
  toPlainMonthDay() {
    return this.calendar.monthDayFromFields(this);
  }
};
function Ir(n2) {
  return new Sr(n2.isoYear, n2.isoMonth, n2.isoDay, n2.calendar);
}
function Fr(n2, t2, e3, o2) {
  return xo(Tr(n2, t2, vr(n2, t2), e3, O(o2, 6, 6, 6, 9)));
}
function Or(n2, t2, e3, o2, r3) {
  return Uo(Dr(n2, t2, e3, r3.largestUnit), n2, t2, e3, o2, r3);
}
function Tr(n2, t2, e3, o2, r3) {
  return Uo(e3.dateUntil(n2, t2, { largestUnit: M[r3.largestUnit] }), n2, t2, e3, o2, r3);
}
function Dr(n2, t2, e3, o2) {
  if (!i(o2))
    return Nr(n2, t2, o2);
  const r3 = Ir({ ...n2.getISOFields(), calendar: e3 });
  let s3, a2, c2, u2, d2, l2 = Ir({ ...t2.getISOFields(), calendar: e3 });
  do {
    a2 = e3.dateUntil(r3, l2, { largestUnit: M[o2] }), s3 = n2.add(a2), c2 = Nr(s3, t2, 5), u2 = a2.sign, d2 = c2.sign;
  } while (u2 && d2 && u2 !== d2 && (l2 = l2.add({ days: d2 })));
  return f2 = c2, { sign: (h2 = a2).sign || f2.sign, years: h2.years + f2.years, months: h2.months + f2.months, weeks: h2.weeks + f2.weeks, days: h2.days + f2.days, hours: h2.hours + f2.hours, minutes: h2.minutes + f2.minutes, seconds: h2.seconds + f2.seconds, milliseconds: h2.milliseconds + f2.milliseconds, microseconds: h2.microseconds + f2.microseconds, nanoseconds: h2.nanoseconds + f2.nanoseconds };
  var h2, f2;
}
function Nr(n2, t2, e3) {
  return dn(On(t2).sub(On(n2)), e3);
}
mt(Sr, "PlainDate"), dt(Sr), ft(Sr, ht), so(Sr, to({ year: "numeric", month: "numeric", day: "numeric", weekday: void 0 }, { hour: void 0, minute: void 0, second: void 0 }));
var Yr = class extends E {
  constructor(n2) {
    super();
    const t2 = K(n2, true);
    !function(n3) {
      -1 !== G(n3, Ae) && 1 !== G(n3, $e) || Zn();
    }(t2), this[vn] = t2;
  }
  static from(n2) {
    if (n2 instanceof Yr)
      return new Yr(n2.epochNanoseconds);
    const t2 = kt(String(n2)), e3 = t2.offsetNanoseconds;
    if (void 0 === e3)
      throw new RangeError("Must specify an offset");
    return new Yr(Mn(Ln(t2, 1)).sub(e3));
  }
  static fromEpochSeconds(n2) {
    return new Yr(K(n2).mult(1e9));
  }
  static fromEpochMilliseconds(n2) {
    return new Yr(K(n2).mult(1e6));
  }
  static fromEpochMicroseconds(n2) {
    return new Yr(n2 * BigInt(1e3));
  }
  static fromEpochNanoseconds(n2) {
    return new Yr(n2);
  }
  static compare(n2, t2) {
    return jn(N(Yr, n2), N(Yr, t2));
  }
  add(n2) {
    return new Yr(Mt(this[vn], N(ko, n2)));
  }
  subtract(n2) {
    return new Yr(Mt(this[vn], X(N(ko, n2))));
  }
  until(n2, t2) {
    return Er(this, N(Yr, n2), t2);
  }
  since(n2, t2) {
    return Er(N(Yr, n2), this, t2);
  }
  round(n2) {
    const t2 = T(n2, 0, 5, true);
    return new Yr(Ve(this[vn], t2));
  }
  equals(n2) {
    return !jn(this, N(Yr, n2));
  }
  toString(n2) {
    const t2 = d(n2).timeZone;
    return this.toZonedDateTimeISO(null != t2 ? t2 : "UTC").toString({ ...n2, offset: void 0 === t2 ? "never" : "auto", timeZoneName: "never" }) + (void 0 === t2 ? "Z" : "");
  }
  toZonedDateTimeISO(n2) {
    return new Io(this.epochNanoseconds, n2);
  }
  toZonedDateTime(n2) {
    if (!h(n2))
      throw new TypeError("Must specify options");
    if (void 0 === n2.calendar)
      throw new TypeError("Must specify a calendar");
    if (void 0 === n2.timeZone)
      throw new TypeError("Must specify a timeZone");
    return new Io(this.epochNanoseconds, n2.timeZone, n2.calendar);
  }
};
function Er(n2, t2, o2) {
  const r3 = O(o2, 3, 0, 0, 5);
  return xo(function(n3, t3, o3) {
    return dn(q(t3.sub(n3), e[o3.smallestUnit] * o3.roundingIncrement, o3.roundingFunc), o3.largestUnit);
  }(n2[vn], t2[vn], r3));
}
mt(Yr, "Instant"), at(Yr), so(Yr, _e({ year: "numeric", month: "numeric", day: "numeric", weekday: void 0, hour: "numeric", minute: "2-digit", second: "2-digit" }, { timeZoneName: void 0 }, {}));
var Cr = Symbol();
var Ur = Symbol();
var Pr = Symbol();
var Rr = class extends Intl.DateTimeFormat {
  constructor(n2, t2) {
    const e3 = ce(n2), o2 = function(n3) {
      const t3 = {};
      for (const e4 in n3) {
        let o3 = n3[e4];
        h(o3) && (o3 = o3.toString()), t3[e4] = o3;
      }
      return t3;
    }(t2 || {});
    super(e3, o2), this[Cr] = e3, this[Ur] = o2, this[Pr] = /* @__PURE__ */ new Map();
  }
  format(n2) {
    const t2 = xr(this, n2);
    return t2[0] === this ? super.format(t2[1]) : t2[0].format(t2[1]);
  }
  formatToParts(n2) {
    return super.formatToParts.call(...xr(this, n2));
  }
  formatRange(n2, t2) {
    return super.formatRange.call(...jr(this, n2, t2));
  }
  formatRangeToParts(n2, t2) {
    return super.formatRangeToParts.call(...jr(this, n2, t2));
  }
};
var kr = Rr;
function xr(n2, t2) {
  const e3 = ao(t2);
  if (e3) {
    const o2 = qr(n2, e3);
    return [o2.buildFormat(t2), o2.buildEpochMilli(t2)];
  }
  return [n2, t2];
}
function jr(n2, t2, e3) {
  const o2 = ao(t2);
  if (o2 !== ao(e3))
    throw new TypeError("Mismatch of types");
  if (o2) {
    const r3 = qr(n2, o2);
    return [r3.buildFormat(t2, e3), new Date(r3.buildEpochMilli(t2)), new Date(r3.buildEpochMilli(e3))];
  }
  return [n2, t2, e3];
}
function qr(n2, t2) {
  const e3 = n2[Pr];
  let o2 = e3.get(t2);
  return o2 || (o2 = function(n3) {
    const t3 = {};
    return { buildFormat: function(e4, o3) {
      const r3 = n3.buildKey(e4, o3), i2 = r3.join("|");
      return t3[i2] || (t3[i2] = n3.buildFormat(...r3));
    }, buildEpochMilli: n3.buildEpochMilli };
  }(t2(n2[Cr], n2[Ur])), e3.set(t2, o2)), o2;
}
var Hr = { zonedDateTimeISO: function(n2) {
  return Fo(Br("iso8601", n2));
}, zonedDateTime: function(n2, t2) {
  return Fo(Br(n2, t2));
}, plainDateTimeISO: function(n2) {
  return Ho(Br("iso8601", n2));
}, plainDateTime: function(n2, t2) {
  return Ho(Br(n2, t2));
}, plainDateISO: function(n2) {
  return Ir(Br("iso8601", n2));
}, plainDate: function(n2, t2) {
  return Ir(Br(n2, t2));
}, plainTimeISO: function(n2) {
  return fo(Br("iso8601", n2));
}, instant: function() {
  return new Yr($r());
}, timeZone: Lr };
mt(Hr, "Now");
function Lr() {
  return new we(new ae().resolvedOptions().timeZone);
}
function Br(n2, t2 = Lr()) {
  const e3 = N(we, t2);
  return { ...Oo($r(), e3)[0], timeZone: e3, calendar: N(mr, n2) };
}
function $r() {
  return K(Date.now()).mult(1e6);
}
var Ar = { PlainYearMonth: po, PlainMonthDay: $o, PlainDate: Sr, PlainTime: ho, PlainDateTime: qo, ZonedDateTime: Io, Instant: Yr, Calendar: mr, TimeZone: we, Duration: ko, Now: Hr, [Symbol.toStringTag]: "Temporal" };
function zr() {
  return "undefined" != typeof globalThis ? globalThis : window;
}

// node_modules/temporal-polyfill/dist/impl.mjs
var s2 = Ar;
var e2 = { ...zr().Intl, DateTimeFormat: kr };

// src/isOlderThan.ts
function isOlderThan(date, hours) {
  const now = s2.Now.plainDateTimeISO();
  const diffInHours = now.since(date, { largestUnit: "hours" }).hours;
  return diffInHours >= Number(hours);
}

// src/autoCacheBust.ts
var RECORDS_BATCH_SIZE = 500;
function R2KeysForDeletion() {
  let keys = [];
  return {
    add: function(key) {
      keys.push(key);
    },
    getKeys: function() {
      return keys;
    }
  };
}
async function deleteKeys(env, keysForDeletion) {
  if (keysForDeletion.getKeys().length > 0) {
    await env.R2_STORE.delete(keysForDeletion.getKeys());
  }
}
async function processList(list, env) {
  const keysForDeletion = R2KeysForDeletion();
  for (const object of list.objects) {
    const date = object.uploaded;
    const convertedDate = s2.PlainDateTime.from({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds()
    });
    if (isOlderThan(convertedDate, env.EXPIRATION_HOURS)) {
      keysForDeletion.add(object.key);
    }
  }
  await deleteKeys(env, keysForDeletion);
}
async function deleteOldCache(env, cursor) {
  const list = await env.R2_STORE.list({ limit: RECORDS_BATCH_SIZE, cursor });
  await processList(list, env);
  if (list.truncated) {
    await deleteOldCache(env, list.cursor);
  }
}

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (path) => {
  const groups = [];
  for (let i2 = 0; ; ) {
    let replaced = false;
    path = path.replace(/\{[^}]+\}/g, (m2) => {
      const mark = `@\\${i2}`;
      groups[i2] = [mark, m2];
      i2++;
      replaced = true;
      return mark;
    });
    if (!replaced) {
      break;
    }
  }
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  for (let i2 = groups.length - 1; i2 >= 0; i2--) {
    const [mark] = groups[i2];
    for (let j2 = paths.length - 1; j2 >= 0; j2--) {
      if (paths[j2].indexOf(mark) !== -1) {
        paths[j2] = paths[j2].replace(mark, groups[i2][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var getPath = (request) => {
  const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return match ? match[1] : "";
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p2 = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p2[p2.length - 1] === "/") {
      p2 = p2.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p2 = `${p2}/`;
    } else if (path !== "/") {
      p2 = `${p2}${path}`;
    }
    if (path === "/" && p2 === "") {
      p2 = "/";
    }
  }
  return p2;
};
var checkOptionalParameter = (path) => {
  const match = path.match(/^(.+|)(\/\:[^\/]+)\?$/);
  if (!match)
    return null;
  const base = match[1];
  const optional = base + match[2];
  return [base === "" ? "/" : base.replace(/\/$/, ""), optional];
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ?? (encoded = /[%+]/.test(url));
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      ;
      (results[name] ?? (results[name] = [])).push(value);
    } else {
      results[name] ?? (results[name] = value);
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/utils/cookie.js
var _parseCookiePairs = (cookie, name) => {
  const pairs = cookie.split(/;\s*/g);
  const cookiePairs = pairs.map((pairStr) => pairStr.split(/\s*=\s*([^\s]+)/));
  if (!name)
    return cookiePairs;
  return cookiePairs.filter((pair) => pair[0] === name);
};
var parse = (cookie, name) => {
  const parsedCookie = {};
  const unsignedCookies = _parseCookiePairs(cookie, name).filter((pair) => {
    const valueSplit = pair[1].split(".");
    const signature = valueSplit[1] ? decodeURIComponent_(valueSplit[1]) : void 0;
    if (valueSplit.length === 2 && signature && signature.length === 44 && signature.endsWith("=")) {
      return false;
    }
    return true;
  });
  for (let [key, value] of unsignedCookies) {
    value = decodeURIComponent_(value);
    parsedCookie[key] = value;
  }
  return parsedCookie;
};
var _serialize = (name, value, opt = {}) => {
  let cookie = `${name}=${value}`;
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
  }
  if (opt.domain) {
    cookie += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    cookie += "; Path=" + opt.path;
  }
  if (opt.expires) {
    cookie += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite}`;
  }
  return cookie;
};
var serialize = (name, value, opt = {}) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};

// node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c2, key) => {
  const cookie = c2.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie)
      return void 0;
    const obj2 = parse(cookie);
    return obj2[key];
  }
  if (!cookie)
    return {};
  const obj = parse(cookie);
  return obj;
};

// node_modules/hono/dist/validator/validator.js
var validator = (target, validationFunc) => {
  return async (c2, next) => {
    let value = {};
    switch (target) {
      case "json":
        try {
          value = await c2.req.json();
        } catch {
          console.error("Error: Malformed JSON in request body");
          return c2.json(
            {
              success: false,
              message: "Malformed JSON in request body"
            },
            400
          );
        }
        break;
      case "form":
        value = await c2.req.parseBody();
        break;
      case "query":
        value = Object.fromEntries(
          Object.entries(c2.req.queries()).map(([k2, v2]) => {
            return v2.length === 1 ? [k2, v2[0]] : [k2, v2];
          })
        );
        break;
      case "queries":
        value = c2.req.queries();
        console.log("Warnings: Validate type `queries` is deprecated. Use `query` instead.");
        break;
      case "param":
        value = c2.req.param();
        break;
      case "header":
        value = c2.req.header();
        break;
      case "cookie":
        value = getCookie(c2);
        break;
    }
    const res = await validationFunc(value, c2);
    if (res instanceof Response) {
      return res;
    }
    c2.req.addValidatedData(target, res);
    await next();
  };
};

// node_modules/@hono/zod-validator/dist/esm/index.js
var zValidator = (target, schema, hook) => validator(target, (value, c2) => {
  const result = schema.safeParse(value);
  if (hook) {
    const hookResult = hook({ data: value, ...result }, c2);
    if (hookResult) {
      if (hookResult instanceof Response || hookResult instanceof Promise) {
        return hookResult;
      }
      if ("response" in hookResult) {
        return hookResult.response;
      }
    }
  }
  if (!result.success) {
    return c2.json(result, 400);
  }
  const data = result.data;
  return data;
});

// node_modules/hono/dist/types.js
var FetchEventLike = class {
};

// node_modules/hono/dist/context.js
var Context = class {
  constructor(req, options) {
    this.env = {};
    this.finalized = false;
    this.error = void 0;
    this._status = 200;
    this._h = void 0;
    this._pH = void 0;
    this._init = true;
    this.notFoundHandler = () => new Response();
    this.header = (name, value, options2) => {
      if (value === void 0) {
        if (this._h) {
          this._h.delete(name);
        } else if (this._pH) {
          delete this._pH[name.toLocaleLowerCase()];
        }
        if (this.finalized) {
          this.res.headers.delete(name);
        }
        return;
      }
      if (options2?.append) {
        if (!this._h) {
          this._init = false;
          this._h = new Headers(this._pH);
          this._pH = {};
        }
        this._h.append(name, value);
      } else {
        if (this._h) {
          this._h.set(name, value);
        } else {
          this._pH ?? (this._pH = {});
          this._pH[name.toLowerCase()] = value;
        }
      }
      if (this.finalized) {
        if (options2?.append) {
          this.res.headers.append(name, value);
        } else {
          this.res.headers.set(name, value);
        }
      }
    };
    this.status = (status) => {
      this._status = status;
    };
    this.set = (key, value) => {
      this._map || (this._map = {});
      this._map[key] = value;
    };
    this.get = (key) => {
      return this._map ? this._map[key] : void 0;
    };
    this.newResponse = (data, arg, headers) => {
      if (this._init && !headers && !arg && this._status === 200) {
        return new Response(data, {
          headers: this._pH
        });
      }
      if (arg && typeof arg !== "number") {
        const res = new Response(data, arg);
        const contentType = this._pH?.["content-type"];
        if (contentType) {
          res.headers.set("content-type", contentType);
        }
        return res;
      }
      const status = arg ?? this._status;
      this._pH ?? (this._pH = {});
      this._h ?? (this._h = new Headers());
      for (const [k2, v2] of Object.entries(this._pH)) {
        this._h.set(k2, v2);
      }
      if (this._res) {
        this._res.headers.forEach((v2, k2) => {
          this._h?.set(k2, v2);
        });
        for (const [k2, v2] of Object.entries(this._pH)) {
          this._h.set(k2, v2);
        }
      }
      headers ?? (headers = {});
      for (const [k2, v2] of Object.entries(headers)) {
        if (typeof v2 === "string") {
          this._h.set(k2, v2);
        } else {
          this._h.delete(k2);
          for (const v22 of v2) {
            this._h.append(k2, v22);
          }
        }
      }
      return new Response(data, {
        status,
        headers: this._h
      });
    };
    this.body = (data, arg, headers) => {
      return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
    };
    this.text = (text, arg, headers) => {
      if (!this._pH) {
        if (this._init && !headers && !arg) {
          return new Response(text);
        }
        this._pH = {};
      }
      if (this._pH["content-type"]) {
        this._pH["content-type"] = "text/plain; charset=UTF-8";
      }
      return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
    };
    this.json = (object, arg, headers) => {
      const body = JSON.stringify(object);
      this._pH ?? (this._pH = {});
      this._pH["content-type"] = "application/json; charset=UTF-8";
      return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
    };
    this.jsonT = (object, arg, headers) => {
      return {
        response: typeof arg === "number" ? this.json(object, arg, headers) : this.json(object, arg),
        data: object,
        format: "json"
      };
    };
    this.html = (html, arg, headers) => {
      this._pH ?? (this._pH = {});
      this._pH["content-type"] = "text/html; charset=UTF-8";
      return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
    };
    this.redirect = (location, status = 302) => {
      this._h ?? (this._h = new Headers());
      this._h.set("Location", location);
      return this.newResponse(null, status);
    };
    this.cookie = (name, value, opt) => {
      const cookie = serialize(name, value, opt);
      this.header("set-cookie", cookie, { append: true });
    };
    this.notFound = () => {
      return this.notFoundHandler(this);
    };
    this.req = req;
    if (options) {
      this._exCtx = options.executionCtx;
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (this._exCtx instanceof FetchEventLike) {
      return this._exCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this._exCtx) {
      return this._exCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this._init = false;
    return this._res || (this._res = new Response("404 Not Found", { status: 404 }));
  }
  set res(_res) {
    this._init = false;
    if (this._res && _res) {
      this._res.headers.delete("content-type");
      this._res.headers.forEach((v2, k2) => {
        _res.headers.set(k2, v2);
      });
    }
    this._res = _res;
    this.finalized = true;
  }
  get runtime() {
    const global = globalThis;
    if (global?.Deno !== void 0) {
      return "deno";
    }
    if (global?.Bun !== void 0) {
      return "bun";
    }
    if (typeof global?.WebSocketPair === "function") {
      return "workerd";
    }
    if (typeof global?.EdgeRuntime === "string") {
      return "edge-light";
    }
    if (global?.fastly !== void 0) {
      return "fastly";
    }
    if (global?.__lagon__ !== void 0) {
      return "lagon";
    }
    if (global?.process?.release?.name === "node") {
      return "node";
    }
    return "other";
  }
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  const middlewareLength = middleware.length;
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    function dispatch(i2) {
      if (i2 <= index) {
        throw new Error("next() called multiple times");
      }
      let handler = middleware[i2];
      index = i2;
      if (i2 === middlewareLength && next)
        handler = next;
      let res;
      let isError = false;
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = onNotFound(context);
        }
      } else {
        try {
          res = handler(context, () => {
            const dispatchRes = dispatch(i2 + 1);
            return dispatchRes instanceof Promise ? dispatchRes : Promise.resolve(dispatchRes);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (!(res instanceof Promise)) {
        if (res !== void 0 && "response" in res) {
          res = res["response"];
        }
        if (res && (context.finalized === false || isError)) {
          context.res = res;
        }
        return context;
      } else {
        return res.then((res2) => {
          if (res2 !== void 0 && "response" in res2) {
            res2 = res2["response"];
          }
          if (res2 && context.finalized === false) {
            context.res = res2;
          }
          return context;
        }).catch(async (err) => {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            context.res = await onError(err, context);
            return context;
          }
          throw err;
        });
      }
    }
  };
};

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  constructor(status = 500, options) {
    super(options?.message);
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      return this.res;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/hono/dist/utils/body.js
var parseBody = async (r3) => {
  let body = {};
  const contentType = r3.headers.get("Content-Type");
  if (contentType && (contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded"))) {
    const form = {};
    (await r3.formData()).forEach((value, key) => {
      form[key] = value;
    });
    body = form;
  }
  return body;
};

// node_modules/hono/dist/request.js
var HonoRequest = class {
  constructor(request, path = "/", paramData) {
    this.bodyCache = {};
    this.cachedBody = (key) => {
      const { bodyCache, raw } = this;
      const cachedBody = bodyCache[key];
      if (cachedBody)
        return cachedBody;
      return bodyCache[key] = raw[key]();
    };
    this.raw = request;
    this.path = path;
    this.paramData = paramData;
    this.vData = {};
  }
  param(key) {
    if (this.paramData) {
      if (key) {
        const param = this.paramData[key];
        return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
      } else {
        const decoded = {};
        for (const [key2, value] of Object.entries(this.paramData)) {
          if (value && typeof value === "string") {
            decoded[key2] = /\%/.test(value) ? decodeURIComponent_(value) : value;
          }
        }
        return decoded;
      }
    }
    return null;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name)
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  cookie(key) {
    const cookie = this.raw.headers.get("Cookie");
    if (!cookie)
      return;
    const obj = parse(cookie);
    if (key) {
      const value = obj[key];
      return value;
    } else {
      return obj;
    }
  }
  async parseBody() {
    return await parseBody(this);
  }
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.vData[target] = data;
  }
  valid(target) {
    return this.vData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get headers() {
    return this.raw.headers;
  }
  get body() {
    return this.raw.body;
  }
  get bodyUsed() {
    return this.raw.bodyUsed;
  }
  get integrity() {
    return this.raw.integrity;
  }
  get keepalive() {
    return this.raw.keepalive;
  }
  get referrer() {
    return this.raw.referrer;
  }
  get signal() {
    return this.raw.signal;
  }
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
function defineDynamicClass() {
  return class {
  };
}
var notFoundHandler = (c2) => {
  return c2.text("404 Not Found", 404);
};
var errorHandler = (err, c2) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.trace(err);
  const message = "Internal Server Error";
  return c2.text(message, 500);
};
var Hono = class extends defineDynamicClass() {
  constructor(init = {}) {
    super();
    this._basePath = "/";
    this.path = "/";
    this.routes = [];
    this.notFoundHandler = notFoundHandler;
    this.errorHandler = errorHandler;
    this.head = () => {
      console.warn("`app.head()` is no longer used. `app.get()` implicitly handles the HEAD method.");
      return this;
    };
    this.handleEvent = (event) => {
      return this.dispatch(event.request, event, void 0, event.request.method);
    };
    this.fetch = (request, Env, executionCtx) => {
      return this.dispatch(request, executionCtx, Env, request.method);
    };
    this.request = (input, requestInit) => {
      if (input instanceof Request) {
        if (requestInit !== void 0) {
          input = new Request(input, requestInit);
        }
        return this.fetch(input);
      }
      input = input.toString();
      const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
      const req = new Request(path, requestInit);
      return this.fetch(req);
    };
    this.fire = () => {
      addEventListener("fetch", (event) => {
        event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
      });
    };
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.map((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.path = args1;
        } else {
          this.addRoute(method, this.path, args1);
        }
        args.map((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method)
        return this;
      this.path = path;
      for (const m2 of [method].flat()) {
        handlers.map((handler) => {
          this.addRoute(m2.toUpperCase(), this.path, handler);
        });
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.path = arg1;
      } else {
        handlers.unshift(arg1);
      }
      handlers.map((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.path, handler);
      });
      return this;
    };
    const strict = init.strict ?? true;
    delete init.strict;
    Object.assign(this, init);
    this.getPath = strict ? init.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  route(path, app) {
    const subApp = this.basePath(path);
    if (!app) {
      return subApp;
    }
    app.routes.map((r3) => {
      const handler = app.errorHandler === errorHandler ? r3.handler : async (c2, next) => (await compose([r3.handler], app.errorHandler)(c2, next)).res;
      subApp.addRoute(r3.method, r3.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError(handler) {
    this.errorHandler = handler;
    return this;
  }
  notFound(handler) {
    this.notFoundHandler = handler;
    return this;
  }
  showRoutes() {
    const length = 8;
    this.routes.map((route) => {
      console.log(
        `\x1B[32m${route.method}\x1B[0m ${" ".repeat(length - route.method.length)} ${route.path}`
      );
    });
  }
  mount(path, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c2, next) => {
      let executionContext = void 0;
      try {
        executionContext = c2.executionCtx;
      } catch {
      }
      const options = optionHandler ? optionHandler(c2) : [c2.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c2.req.url);
      const res = await applicationHandler(
        new Request(
          new URL((c2.req.path.slice(pathPrefixLength) || "/") + queryStrings, c2.req.url),
          c2.req.raw
        ),
        ...optionsArray
      );
      if (res)
        return res;
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  get routerName() {
    this.matchRoute("GET", "/");
    return this.router.name;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    if (this._basePath) {
      path = mergePath(this._basePath, path);
    }
    this.router.add(method, path, handler);
    const r3 = { path, method, handler };
    this.routes.push(r3);
  }
  matchRoute(method, path) {
    return this.router.match(method, path) || { handlers: [], params: {} };
  }
  handleError(err, c2) {
    if (err instanceof Error) {
      return this.errorHandler(err, c2);
    }
    throw err;
  }
  dispatch(request, executionCtx, env, method) {
    const path = this.getPath(request, { env });
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const { handlers, params } = this.matchRoute(method, path);
    const c2 = new Context(new HonoRequest(request, path, params), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (handlers.length === 1) {
      let res;
      try {
        res = handlers[0](c2, async () => {
        });
        if (!res) {
          return this.notFoundHandler(c2);
        }
      } catch (err) {
        return this.handleError(err, c2);
      }
      if (res.constructor.name === "Response")
        return res;
      if ("response" in res) {
        res = res.response;
      }
      if (res.constructor.name === "Response")
        return res;
      return (async () => {
        let awaited;
        try {
          awaited = await res;
          if (awaited !== void 0 && "response" in awaited) {
            awaited = awaited["response"];
          }
          if (!awaited) {
            return this.notFoundHandler(c2);
          }
        } catch (err) {
          return this.handleError(err, c2);
        }
        return awaited;
      })();
    }
    const composed = compose(handlers, this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const tmp = composed(c2);
        const context = tmp.constructor.name === "Promise" ? await tmp : tmp;
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. You may forget returning Response object or `await next()`"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c2);
      }
    })();
  }
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
function compareKey(a2, b2) {
  if (a2.length === 1) {
    return b2.length === 1 ? a2 < b2 ? -1 : 1 : -1;
  }
  if (b2.length === 1) {
    return 1;
  }
  if (a2 === ONLY_WILDCARD_REG_EXP_STR || a2 === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b2 === ONLY_WILDCARD_REG_EXP_STR || b2 === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a2 === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b2 === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a2.length === b2.length ? a2 < b2 ? -1 : 1 : b2.length - a2.length;
}
var Node = class {
  constructor() {
    this.children = {};
  }
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      const regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k2) => k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        if (paramMap.some((p2) => p2[0] === name)) {
          throw new Error("Duplicate param name");
        }
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k2) => k2.length > 1 && k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k2) => {
      const c2 = this.children[k2];
      return (typeof c2.varIndex === "number" ? `(${k2})@${c2.varIndex}` : k2) + c2.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  constructor() {
    this.context = { varIndex: 0 };
    this.root = new Node();
  }
  insert(path, index, pathErrorCheckOnly) {
    const paramMap = [];
    const groups = [];
    for (let i2 = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m2) => {
        const mark = `@\\${i2}`;
        groups[i2] = [mark, m2];
        i2++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i2 = groups.length - 1; i2 >= 0; i2--) {
      const [mark] = groups[i2];
      for (let j2 = tokens.length - 1; j2 >= 0; j2--) {
        if (tokens[j2].indexOf(mark) !== -1) {
          tokens[j2] = tokens[j2].replace(mark, groups[i2][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramMap, this.context, pathErrorCheckOnly);
    return paramMap;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_2, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) => method.toUpperCase());
var emptyParam = {};
var nullMatcher = [/^$/, [], {}];
var wildcardRegExpCache = {};
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ?? (wildcardRegExpCache[path] = new RegExp(
    path === "*" ? "" : `^${path.replace(/\/\*/, "(?:|/.*)")}$`
  ));
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = {};
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = {};
  for (let i2 = 0, j2 = -1, len = routesWithStaticPathFlag.length; i2 < len; i2++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i2];
    if (pathErrorCheckOnly) {
      staticMap[path] = { handlers, params: emptyParam };
    } else {
      j2++;
    }
    let paramMap;
    try {
      paramMap = trie.insert(path, j2, pathErrorCheckOnly);
    } catch (e3) {
      throw e3 === PATH_ERROR ? new UnsupportedPathError(path) : e3;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j2] = paramMap.length === 0 ? [{ handlers, params: emptyParam }, null] : [handlers, paramMap];
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i2 = 0, len = handlerData.length; i2 < len; i2++) {
    const paramMap = handlerData[i2][1];
    if (paramMap) {
      for (let j2 = 0, len2 = paramMap.length; j2 < len2; j2++) {
        paramMap[j2][1] = paramReplacementMap[paramMap[j2][1]];
      }
    }
  }
  const handlerMap = [];
  for (const i2 in indexReplacementMap) {
    handlerMap[i2] = handlerData[indexReplacementMap[i2]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k2 of Object.keys(middleware).sort((a2, b2) => b2.length - a2.length)) {
    if (buildWildcardRegExp(k2).test(path)) {
      return [...middleware[k2]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  constructor() {
    this.name = "RegExpRouter";
    this.middleware = { [METHOD_NAME_ALL]: {} };
    this.routes = { [METHOD_NAME_ALL]: {} };
  }
  add(method, path, handler) {
    var _a;
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error("Can not add a route since the matcher is already built.");
    }
    if (methodNames.indexOf(method) === -1)
      methodNames.push(method);
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = {};
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p2) => {
          handlerMap[method][p2] = [...handlerMap[METHOD_NAME_ALL][p2]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    if (/\*$/.test(path)) {
      const re2 = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m2) => {
          var _a2;
          (_a2 = middleware[m2])[path] || (_a2[path] = findMiddleware(middleware[m2], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
        });
      } else {
        (_a = middleware[method])[path] || (_a[path] = findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
      }
      Object.keys(middleware).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(middleware[m2]).forEach((p2) => {
            re2.test(p2) && middleware[m2][p2].push(handler);
          });
        }
      });
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(routes[m2]).forEach((p2) => re2.test(p2) && routes[m2][p2].push(handler));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i2 = 0, len = paths.length; i2 < len; i2++) {
      const path2 = paths[i2];
      Object.keys(routes).forEach((m2) => {
        var _a2;
        if (method === METHOD_NAME_ALL || method === m2) {
          (_a2 = routes[m2])[path2] || (_a2[path2] = [
            ...findMiddleware(middleware[m2], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ]);
          routes[m2][path2].push(handler);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return null;
      }
      const index = match.indexOf("", 1);
      const [handlers, paramMap] = matcher[1][index];
      if (!paramMap) {
        return handlers;
      }
      const params = {};
      for (let i2 = 0, len = paramMap.length; i2 < len; i2++) {
        params[paramMap[i2][0]] = match[paramMap[i2][1]];
      }
      return { handlers, params };
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = {};
    methodNames.forEach((method) => {
      matchers[method] = this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r3) => {
      const ownRoute = r3[method] ? Object.keys(r3[method]).map((path) => [path, r3[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute || (hasOwnRoute = true);
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r3[METHOD_NAME_ALL]).map((path) => [path, r3[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  constructor(init) {
    this.name = "SmartRouter";
    this.routers = [];
    this.routes = [];
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error("Can not add a route since the matcher is already built.");
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i2 = 0;
    let res;
    for (; i2 < len; i2++) {
      const router = routers[i2];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e3) {
        if (e3 instanceof UnsupportedPathError) {
          continue;
        }
        throw e3;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i2 === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res || null;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
function findParam(node, name) {
  for (let i2 = 0, len = node.patterns.length; i2 < len; i2++) {
    if (typeof node.patterns[i2] === "object" && node.patterns[i2][1] === name) {
      return true;
    }
  }
  const nodes = Object.values(node.children);
  for (let i2 = 0, len = nodes.length; i2 < len; i2++) {
    if (findParam(nodes[i2], name)) {
      return true;
    }
  }
  return false;
}
var Node2 = class {
  constructor(method, handler, children) {
    this.order = 0;
    this.children = children || {};
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m2 = {};
      m2[method] = { handler, score: 0, name: this.name };
      this.methods = [m2];
    }
    this.patterns = [];
    this.handlerSetCache = {};
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const parentPatterns = [];
    const errorMessage = (name) => {
      return `Duplicate param name, use another name instead of '${name}' - ${method} ${path} <--- '${name}'`;
    };
    for (let i2 = 0, len = parts.length; i2 < len; i2++) {
      const p2 = parts[i2];
      if (Object.keys(curNode.children).includes(p2)) {
        parentPatterns.push(...curNode.patterns);
        curNode = curNode.children[p2];
        continue;
      }
      curNode.children[p2] = new Node2();
      const pattern = getPattern(p2);
      if (pattern) {
        if (typeof pattern === "object") {
          for (let j2 = 0, len2 = parentPatterns.length; j2 < len2; j2++) {
            if (typeof parentPatterns[j2] === "object" && parentPatterns[j2][1] === pattern[1]) {
              throw new Error(errorMessage(pattern[1]));
            }
          }
          if (Object.values(curNode.children).some((n2) => findParam(n2, pattern[1]))) {
            throw new Error(errorMessage(pattern[1]));
          }
        }
        curNode.patterns.push(pattern);
        parentPatterns.push(...curNode.patterns);
      }
      parentPatterns.push(...curNode.patterns);
      curNode = curNode.children[p2];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m2 = {};
    const handlerSet = { handler, name: this.name, score: this.order };
    m2[method] = handlerSet;
    curNode.methods.push(m2);
    return curNode;
  }
  gHSets(node, method, wildcard) {
    var _a, _b;
    return (_a = node.handlerSetCache)[_b = `${method}:${wildcard ? "1" : "0"}`] || (_a[_b] = (() => {
      const handlerSets = [];
      for (let i2 = 0, len = node.methods.length; i2 < len; i2++) {
        const m2 = node.methods[i2];
        const handlerSet = m2[method] || m2[METHOD_NAME_ALL];
        if (handlerSet !== void 0) {
          handlerSets.push(handlerSet);
        }
      }
      return handlerSets;
    })());
  }
  search(method, path) {
    const handlerSets = [];
    const params = {};
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i2 = 0, len2 = parts.length; i2 < len2; i2++) {
      const part = parts[i2];
      const isLast = i2 === len2 - 1;
      const tempNodes = [];
      let matched = false;
      for (let j2 = 0, len22 = curNodes.length; j2 < len22; j2++) {
        const node = curNodes[j2];
        const nextNode = node.children[part];
        if (nextNode) {
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(...this.gHSets(nextNode.children["*"], method, true));
            }
            handlerSets.push(...this.gHSets(nextNode, method));
            matched = true;
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k2 = 0, len3 = node.patterns.length; k2 < len3; k2++) {
          const pattern = node.patterns[k2];
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "")
            continue;
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i2).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            handlerSets.push(...this.gHSets(child, method));
            params[name] = restPathString;
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method));
                }
              } else {
                tempNodes.push(child);
              }
            }
            if (typeof name === "string" && !matched) {
              params[name] = part;
            } else {
              if (node.children[part]) {
                params[name] = part;
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const len = handlerSets.length;
    if (len === 0)
      return null;
    if (len === 1)
      return { handlers: [handlerSets[0].handler], params };
    const handlers = handlerSets.sort((a2, b2) => {
      return a2.score - b2.score;
    }).map((s3) => {
      return s3.handler;
    });
    return { handlers, params };
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  constructor() {
    this.name = "TrieRouter";
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p2 of results) {
        this.node.insert(method, p2, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(init = {}) {
    super(init);
    this.router = init.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// node_modules/hono/dist/utils/crypto.js
var sha256 = async (data) => {
  const algorithm = { name: "SHA-256", alias: "sha256" };
  const hash = await createHash(data, algorithm);
  return hash;
};
var createHash = async (data, algorithm) => {
  let sourceBuffer;
  if (data instanceof ReadableStream) {
    let body = "";
    const reader = data.getReader();
    await reader?.read().then(async (chuck) => {
      const value = await createHash(chuck.value || "", algorithm);
      body += value;
    });
    return body;
  }
  if (ArrayBuffer.isView(data) || data instanceof ArrayBuffer) {
    sourceBuffer = data;
  } else {
    if (typeof data === "object") {
      data = JSON.stringify(data);
    }
    sourceBuffer = new TextEncoder().encode(String(data));
  }
  if (crypto && crypto.subtle) {
    const buffer = await crypto.subtle.digest(
      {
        name: algorithm.name
      },
      sourceBuffer
    );
    const hash = Array.prototype.map.call(new Uint8Array(buffer), (x2) => ("00" + x2.toString(16)).slice(-2)).join("");
    return hash;
  }
  return null;
};

// node_modules/hono/dist/utils/buffer.js
var timingSafeEqual = async (a2, b2, hashFunction) => {
  if (!hashFunction) {
    hashFunction = sha256;
  }
  const sa = await hashFunction(a2);
  const sb = await hashFunction(b2);
  if (!sa || !sb) {
    return false;
  }
  return sa === sb && a2 === b2;
};

// node_modules/hono/dist/middleware/bearer-auth/index.js
var TOKEN_STRINGS = "[A-Za-z0-9._~+/-]+=*";
var PREFIX = "Bearer";
var bearerAuth = (options) => {
  if (!options.token) {
    throw new Error('bearer auth middleware requires options for "token"');
  }
  if (!options.realm) {
    options.realm = "";
  }
  if (!options.prefix) {
    options.prefix = PREFIX;
  }
  const realm = options.realm?.replace(/"/g, '\\"');
  return async (c2, next) => {
    const headerToken = c2.req.headers.get("Authorization");
    if (!headerToken) {
      const res = new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": `${options.prefix} realm="` + realm + '"'
        }
      });
      throw new HTTPException(401, { res });
    } else {
      const regexp = new RegExp("^" + options.prefix + " +(" + TOKEN_STRINGS + ") *$");
      const match = regexp.exec(headerToken);
      if (!match) {
        const res = new Response("Bad Request", {
          status: 400,
          headers: {
            "WWW-Authenticate": `${options.prefix} error="invalid_request"`
          }
        });
        throw new HTTPException(400, { res });
      } else {
        const equal = await timingSafeEqual(options.token, match[1], options.hashFunction);
        if (!equal) {
          const res = new Response("Unauthorized", {
            status: 401,
            headers: {
              "WWW-Authenticate": `${options.prefix} error="invalid_token"`
            }
          });
          throw new HTTPException(401, { res });
        }
      }
    }
    await next();
  };
};

// node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      return () => optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : optsOrigin[0];
    }
  })(opts.origin);
  return async (c2, next) => {
    function set(key, value) {
      c2.res.headers.set(key, value);
    }
    const allowOrigin = findAllowOrigin(c2.req.headers.get("origin") || "");
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      set("Vary", "Origin");
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c2.req.method !== "OPTIONS") {
      await next();
    } else {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c2.req.headers.get("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c2.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c2.res.headers.delete("Content-Length");
      c2.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c2.res.headers,
        status: 204,
        statusText: c2.res.statusText
      });
    }
  };
};

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e3) {
      return obj[e3];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_2, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t2 = typeof data;
  switch (t2) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < issue.path.length) {
            const el = issue.path[i2];
            const terminal = i2 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s3 of results) {
      if (s3.status === "aborted")
        return INVALID;
      if (s3.status === "dirty")
        status.dirty();
      arrayValue.push(s3.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x2) => x2.status === "aborted";
var isDirty = (x2) => x2.status === "dirty";
var isValid = (x2) => x2.status === "valid";
var isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class extends ZodType {
  constructor() {
    super(...arguments);
    this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
    this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    this.trim = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
    this.toLowerCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
    this.toUpperCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i2) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i2) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a2, b2) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b2);
  if (a2 === b2) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b2.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
    return { valid: true, data: a2 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x2) => !!x2);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn2 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me2 = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me2._def.args.parseAsync(args, params).catch((e3) => {
          error.addIssue(makeArgsIssue(args, e3));
          throw error;
        });
        const result = await Reflect.apply(fn2, this, parsedArgs);
        const parsedReturns = await me2._def.returns._def.type.parseAsync(result, params).catch((e3) => {
          error.addIssue(makeReturnsIssue(result, e3));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me2 = this;
      return OK(function(...args) {
        const parsedArgs = me2._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn2, this, parsedArgs.data);
        const parsedReturns = me2._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a2, b2) {
    return new ZodPipeline({
      in: a2,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p2.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p22 = typeof p2 === "string" ? { message: p2 } : p2;
        ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// src/archive.ts
var archiveRouter = new Hono2();
var paramValidator = zValidator("param", z2.object({ archiveID: z2.string() }));
var teamQueryValidator = zValidator("query", z2.object({ teamID: z2.string().optional(), slug: z2.string().optional() }));
archiveRouter.onError((err, c2) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  return c2.json({ error: err.message }, 500);
});
archiveRouter.use("*", cors());
archiveRouter.use("/archive/*", async (c2, next) => {
  const middleware = bearerAuth({ token: c2.env.TURBO_TOKEN });
  await middleware(c2, next);
});
archiveRouter.route("/archive", archiveRouter);
archiveRouter.put("/:archiveID", paramValidator, teamQueryValidator, async (c2) => {
  const archiveID = c2.req.valid("param").archiveID;
  const { teamID, slug } = c2.req.valid("query");
  if (!teamID && !slug) {
    return c2.json({ error: "MISSING_TEAM_ID" }, 400);
  }
  const contentType = c2.req.headers.get("Content-Type");
  if (contentType !== "application/octet-stream") {
    return c2.json({ error: "EXPECTED_CONTENT_TYPE_OCTET_STREAM" }, 400);
  }
  const r2Metadata = {
    archiveTag: ""
  };
  const archiveTag = c2.req.headers.get("x-archive-tag");
  if (archiveTag) {
    r2Metadata.archiveTag = archiveTag;
  }
  const r2Object = await c2.env.R2_STORE.put(`${teamID ?? slug}/${archiveID}`, c2.req.body, { customMetadata: r2Metadata });
  return c2.json({ teamID, archiveID, storagePath: r2Object.key, size: r2Object.size }, 201);
});
archiveRouter.post("/manual-cache-bust", zValidator("json", z2.object({ expireInHours: z2.number().optional() })), async (c2) => {
  const { expireInHours } = c2.req.valid("json");
  await deleteOldCache({
    ...c2.env,
    EXPIRATION_HOURS: expireInHours ?? c2.env.EXPIRATION_HOURS
  });
  return c2.json({ success: true });
});
archiveRouter.get("/:archiveID/:teamId?", paramValidator, teamQueryValidator, async (c2) => {
  const archiveID = c2.req.valid("param").archiveID;
  const { teamID, slug } = c2.req.valid("query");
  if (!teamID && !slug) {
    return c2.json({ error: "MISSING_TEAM_ID" }, 400);
  }
  const r2Object = await c2.env.R2_STORE.get(`${teamID ?? slug}/${archiveID}`);
  if (!r2Object) {
    return c2.json({ error: "NOT_FOUND" }, 404);
  }
  c2.header("Content-Type", "application/octet-stream");
  if (r2Object.customMetadata?.archiveTag) {
    c2.header("x-archive-tag", r2Object.customMetadata.archiveTag);
  }
  c2.status(200);
  return c2.body(r2Object.body);
});

// src/index.ts
var src_default = {
  async fetch(request, env, ctx) {
    return archiveRouter.fetch(request, env, ctx);
  },
  async scheduled(_event, env, _ctx) {
    await deleteOldCache(env);
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
