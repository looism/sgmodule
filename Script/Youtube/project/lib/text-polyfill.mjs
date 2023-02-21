// fastestsmallesttextencoderdecoder
function text(r) {
  "use strict";
  function x() {}
  function y() {}
  var z = String.fromCharCode,
    v = {}.toString,
    A = v.call(r.SharedArrayBuffer),
    B = v(),
    q = r.Uint8Array,
    t = q || Array,
    w = q ? ArrayBuffer : t,
    C =
      w.isView ||
      function (g) {
        return g && "length" in g;
      },
    D = v.call(w.prototype);
  w = y.prototype;
  var E = r.TextEncoder,
    a = new (q ? Uint16Array : t)(32);
  x.prototype.decode = function (g) {
    if (!C(g)) {
      var l = v.call(g);
      if (l !== D && l !== A && l !== B)
        throw TypeError(
          "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"
        );
      g = q ? new t(g) : g || [];
    }
    for (
      var f = (l = ""), b = 0, c = g.length | 0, u = (c - 32) | 0, e, d, h = 0, p = 0, m, k = 0, n = -1;
      b < c;

    ) {
      for (e = b <= u ? 32 : (c - b) | 0; k < e; b = (b + 1) | 0, k = (k + 1) | 0) {
        d = g[b] & 255;
        switch (d >> 4) {
          case 15:
            m = g[(b = (b + 1) | 0)] & 255;
            if (2 !== m >> 6 || 247 < d) {
              b = (b - 1) | 0;
              break;
            }
            h = ((d & 7) << 6) | (m & 63);
            p = 5;
            d = 256;
          case 14:
            (m = g[(b = (b + 1) | 0)] & 255),
              (h <<= 6),
              (h |= ((d & 15) << 6) | (m & 63)),
              (p = 2 === m >> 6 ? (p + 4) | 0 : 24),
              (d = (d + 256) & 768);
          case 13:
          case 12:
            (m = g[(b = (b + 1) | 0)] & 255),
              (h <<= 6),
              (h |= ((d & 31) << 6) | (m & 63)),
              (p = (p + 7) | 0),
              b < c && 2 === m >> 6 && h >> p && 1114112 > h
                ? ((d = h),
                  (h = (h - 65536) | 0),
                  0 <= h &&
                    ((n = ((h >> 10) + 55296) | 0),
                    (d = ((h & 1023) + 56320) | 0),
                    31 > k ? ((a[k] = n), (k = (k + 1) | 0), (n = -1)) : ((m = n), (n = d), (d = m))))
                : ((d >>= 8), (b = (b - d - 1) | 0), (d = 65533)),
              (h = p = 0),
              (e = b <= u ? 32 : (c - b) | 0);
          default:
            a[k] = d;
            continue;
          case 11:
          case 10:
          case 9:
          case 8:
        }
        a[k] = 65533;
      }
      f += z(
        a[0],
        a[1],
        a[2],
        a[3],
        a[4],
        a[5],
        a[6],
        a[7],
        a[8],
        a[9],
        a[10],
        a[11],
        a[12],
        a[13],
        a[14],
        a[15],
        a[16],
        a[17],
        a[18],
        a[19],
        a[20],
        a[21],
        a[22],
        a[23],
        a[24],
        a[25],
        a[26],
        a[27],
        a[28],
        a[29],
        a[30],
        a[31]
      );
      32 > k && (f = f.slice(0, (k - 32) | 0));
      if (b < c) {
        if (((a[0] = n), (k = ~n >>> 31), (n = -1), f.length < l.length)) continue;
      } else -1 !== n && (f += z(n));
      l += f;
      f = "";
    }
    return l;
  };
  w.encode = function (g) {
    g = void 0 === g ? "" : "" + g;
    var l = g.length | 0,
      f = new t(((l << 1) + 8) | 0),
      b,
      c = 0,
      u = !q;
    for (b = 0; b < l; b = (b + 1) | 0, c = (c + 1) | 0) {
      var e = g.charCodeAt(b) | 0;
      if (127 >= e) f[c] = e;
      else {
        if (2047 >= e) f[c] = 192 | (e >> 6);
        else {
          a: {
            if (55296 <= e)
              if (56319 >= e) {
                var d = g.charCodeAt((b = (b + 1) | 0)) | 0;
                if (56320 <= d && 57343 >= d) {
                  e = ((e << 10) + d - 56613888) | 0;
                  if (65535 < e) {
                    f[c] = 240 | (e >> 18);
                    f[(c = (c + 1) | 0)] = 128 | ((e >> 12) & 63);
                    f[(c = (c + 1) | 0)] = 128 | ((e >> 6) & 63);
                    f[(c = (c + 1) | 0)] = 128 | (e & 63);
                    continue;
                  }
                  break a;
                }
                e = 65533;
              } else 57343 >= e && (e = 65533);
            !u && b << 1 < c && b << 1 < ((c - 7) | 0) && ((u = !0), (d = new t(3 * l)), d.set(f), (f = d));
          }
          f[c] = 224 | (e >> 12);
          f[(c = (c + 1) | 0)] = 128 | ((e >> 6) & 63);
        }
        f[(c = (c + 1) | 0)] = 128 | (e & 63);
      }
    }
    return q ? f.subarray(0, c) : f.slice(0, c);
  };
  r.TextDecoder = x;
  r.TextEncoder = y;
}
export const ___ = text(globalThis);
