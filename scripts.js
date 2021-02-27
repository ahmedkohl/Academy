/*!
 * Chart.js v2.9.2
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(function() { try { return require('moment'); } catch(e) { } }()) :
typeof define === 'function' && define.amd ? define(['require'], function(require) { return factory(function() { try { return require('moment'); } catch(e) { } }()); }) :
(global = global || self, global.Chart = factory(global.moment));
}(this, (function (moment) { 'use strict';

moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var colorName$1 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */


var colorString = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
};

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3,4})$/i,
       hex =  /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr),
       hexAlpha = "";
   if (match) {
      match = match[1];
      hexAlpha = match[3];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorName$1[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgba, a) {
   var a = (a !== undefined && rgba.length === 3) ? a : rgba[3];
   return "#" + hexDouble(rgba[0]) 
              + hexDouble(rgba[1])
              + hexDouble(rgba[2])
              + (
                 (a >= 0 && a < 1)
                 ? hexDouble(Math.round(a * 255))
                 : ""
              );
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorName$1) {
   reverseNames[colorName$1[name]] = name;
}

/* MIT license */



var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.valid = false;
	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = colorString.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = colorString.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = colorString.getHwb(obj)) {
			this.setValues('hwb', vals);
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		}
	}
};

Color.prototype = {
	isValid: function () {
		return this.valid;
	},
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return colorString.hexString(this.values.rgb);
	},
	rgbString: function () {
		return colorString.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return colorString.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return colorString.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return colorString.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return colorString.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return colorString.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return colorString.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	this.valid = true;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = colorConvert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

var chartjsColor = Color;

/**
 * @namespace Chart.helpers
 */
var helpers = {
	/**
	 * An empty function that can be used, for example, for optional callback.
	 */
	noop: function() {},

	/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {number}
	 * @function
	 */
	uid: (function() {
		var id = 0;
		return function() {
			return id++;
		};
	}()),

	/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @since 2.7.0
	 */
	isNullOrUndef: function(value) {
		return value === null || typeof value === 'undefined';
	},

	/**
	 * Returns true if `value` is an array (including typed arrays), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @function
	 */
	isArray: function(value) {
		if (Array.isArray && Array.isArray(value)) {
			return true;
		}
		var type = Object.prototype.toString.call(value);
		if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
			return true;
		}
		return false;
	},

	/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @since 2.7.0
	 */
	isObject: function(value) {
		return value !== null && Object.prototype.toString.call(value) === '[object Object]';
	},

	/**
	 * Returns true if `value` is a finite number, else returns false
	 * @param {*} value  - The value to test.
	 * @returns {boolean}
	 */
	isFinite: function(value) {
		return (typeof value === 'number' || value instanceof Number) && isFinite(value);
	},

	/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */
	valueOrDefault: function(value, defaultValue) {
		return typeof value === 'undefined' ? defaultValue : value;
	},

	/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */
	valueAtIndexOrDefault: function(value, index, defaultValue) {
		return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
	},

	/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */
	callback: function(fn, args, thisArg) {
		if (fn && typeof fn.call === 'function') {
			return fn.apply(thisArg, args);
		}
	},

	/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {object|Array} loopable - The object or array to be iterated.
	 * @param {function} fn - The function to call for each item.
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {boolean} [reverse] - If true, iterates backward on the loopable.
	 */
	each: function(loopable, fn, thisArg, reverse) {
		var i, len, keys;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					fn.call(thisArg, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					fn.call(thisArg, loopable[i], i);
				}
			}
		} else if (helpers.isObject(loopable)) {
			keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				fn.call(thisArg, loopable[keys[i]], keys[i]);
			}
		}
	},

	/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see https://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {boolean}
	 */
	arrayEquals: function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length !== a1.length) {
			return false;
		}

		for (i = 0, ilen = a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 !== v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	},

	/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */
	clone: function(source) {
		if (helpers.isArray(source)) {
			return source.map(helpers.clone);
		}

		if (helpers.isObject(source)) {
			var target = {};
			var keys = Object.keys(source);
			var klen = keys.length;
			var k = 0;

			for (; k < klen; ++k) {
				target[keys[k]] = helpers.clone(source[keys[k]]);
			}

			return target;
		}

		return source;
	},

	/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
	 * @private
	 */
	_merger: function(key, target, source, options) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.merge(tval, sval, options);
		} else {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */
	_mergerIf: function(key, target, source) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.mergeIf(tval, sval);
		} else if (!target.hasOwnProperty(key)) {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {object} target - The target object in which all sources are merged into.
	 * @param {object|object[]} source - Object(s) to merge into `target`.
	 * @param {object} [options] - Merging options:
	 * @param {function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {object} The `target` object.
	 */
	merge: function(target, source, options) {
		var sources = helpers.isArray(source) ? source : [source];
		var ilen = sources.length;
		var merge, i, keys, klen, k;

		if (!helpers.isObject(target)) {
			return target;
		}

		options = options || {};
		merge = options.merger || helpers._merger;

		for (i = 0; i < ilen; ++i) {
			source = sources[i];
			if (!helpers.isObject(source)) {
				continue;
			}

			keys = Object.keys(source);
			for (k = 0, klen = keys.length; k < klen; ++k) {
				merge(keys[k], target, source, options);
			}
		}

		return target;
	},

	/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {object} target - The target object in which all sources are merged into.
	 * @param {object|object[]} source - Object(s) to merge into `target`.
	 * @returns {object} The `target` object.
	 */
	mergeIf: function(target, source) {
		return helpers.merge(target, source, {merger: helpers._mergerIf});
	},

	/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {object} target - The target object in which all objects are merged into.
	 * @param {object} arg1 - Object containing additional properties to merge in target.
	 * @param {object} argN - Additional objects containing properties to merge in target.
	 * @returns {object} The `target` object.
	 */
	extend: Object.assign || function(target) {
		return helpers.merge(target, [].slice.call(arguments, 1), {
			merger: function(key, dst, src) {
				dst[key] = src[key];
			}
		});
	},

	/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */
	inherits: function(extensions) {
		var me = this;
		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
			return me.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};

		Surrogate.prototype = me.prototype;
		ChartElement.prototype = new Surrogate();
		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = me.prototype;
		return ChartElement;
	},

	_deprecated: function(scope, value, previous, current) {
		if (value !== undefined) {
			console.warn(scope + ': "' + previous +
				'" is deprecated. Please use "' + current + '" instead');
		}
	}
};

var helpers_core = helpers;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
helpers.callCallback = helpers.callback;

/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.indexOf = function(array, item, fromIndex) {
	return Array.prototype.indexOf.call(array, item, fromIndex);
};

/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueOrDefault = helpers.valueOrDefault;

/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easingEffects
 * @see http://www.robertpenner.com/easing/
 */
var effects = {
	linear: function(t) {
		return t;
	},

	easeInQuad: function(t) {
		return t * t;
	},

	easeOutQuad: function(t) {
		return -t * (t - 2);
	},

	easeInOutQuad: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t;
		}
		return -0.5 * ((--t) * (t - 2) - 1);
	},

	easeInCubic: function(t) {
		return t * t * t;
	},

	easeOutCubic: function(t) {
		return (t = t - 1) * t * t + 1;
	},

	easeInOutCubic: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t + 2);
	},

	easeInQuart: function(t) {
		return t * t * t * t;
	},

	easeOutQuart: function(t) {
		return -((t = t - 1) * t * t * t - 1);
	},

	easeInOutQuart: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t;
		}
		return -0.5 * ((t -= 2) * t * t * t - 2);
	},

	easeInQuint: function(t) {
		return t * t * t * t * t;
	},

	easeOutQuint: function(t) {
		return (t = t - 1) * t * t * t * t + 1;
	},

	easeInOutQuint: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t * t * t + 2);
	},

	easeInSine: function(t) {
		return -Math.cos(t * (Math.PI / 2)) + 1;
	},

	easeOutSine: function(t) {
		return Math.sin(t * (Math.PI / 2));
	},

	easeInOutSine: function(t) {
		return -0.5 * (Math.cos(Math.PI * t) - 1);
	},

	easeInExpo: function(t) {
		return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
	},

	easeOutExpo: function(t) {
		return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
	},

	easeInOutExpo: function(t) {
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if ((t /= 0.5) < 1) {
			return 0.5 * Math.pow(2, 10 * (t - 1));
		}
		return 0.5 * (-Math.pow(2, -10 * --t) + 2);
	},

	easeInCirc: function(t) {
		if (t >= 1) {
			return t;
		}
		return -(Math.sqrt(1 - t * t) - 1);
	},

	easeOutCirc: function(t) {
		return Math.sqrt(1 - (t = t - 1) * t);
	},

	easeInOutCirc: function(t) {
		if ((t /= 0.5) < 1) {
			return -0.5 * (Math.sqrt(1 - t * t) - 1);
		}
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	},

	easeInElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
	},

	easeOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
	},

	easeInOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if ((t /= 0.5) === 2) {
			return 1;
		}
		if (!p) {
			p = 0.45;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		if (t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
		}
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
	},
	easeInBack: function(t) {
		var s = 1.70158;
		return t * t * ((s + 1) * t - s);
	},

	easeOutBack: function(t) {
		var s = 1.70158;
		return (t = t - 1) * t * ((s + 1) * t + s) + 1;
	},

	easeInOutBack: function(t) {
		var s = 1.70158;
		if ((t /= 0.5) < 1) {
			return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
		}
		return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
	},

	easeInBounce: function(t) {
		return 1 - effects.easeOutBounce(1 - t);
	},

	easeOutBounce: function(t) {
		if (t < (1 / 2.75)) {
			return 7.5625 * t * t;
		}
		if (t < (2 / 2.75)) {
			return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
		}
		if (t < (2.5 / 2.75)) {
			return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
		}
		return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
	},

	easeInOutBounce: function(t) {
		if (t < 0.5) {
			return effects.easeInBounce(t * 2) * 0.5;
		}
		return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
	}
};

var helpers_easing = {
	effects: effects
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.easingEffects = effects;

var PI = Math.PI;
var RAD_PER_DEG = PI / 180;
var DOUBLE_PI = PI * 2;
var HALF_PI = PI / 2;
var QUARTER_PI = PI / 4;
var TWO_THIRDS_PI = PI * 2 / 3;

/**
 * @namespace Chart.helpers.canvas
 */
var exports$1 = {
	/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */
	clear: function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	},

	/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {number} width - The rectangle's width.
	 * @param {number} height - The rectangle's height.
	 * @param {number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */
	roundedRect: function(ctx, x, y, width, height, radius) {
		if (radius) {
			var r = Math.min(radius, height / 2, width / 2);
			var left = x + r;
			var top = y + r;
			var right = x + width - r;
			var bottom = y + height - r;

			ctx.moveTo(x, top);
			if (left < right && top < bottom) {
				ctx.arc(left, top, r, -PI, -HALF_PI);
				ctx.arc(right, top, r, -HALF_PI, 0);
				ctx.arc(right, bottom, r, 0, HALF_PI);
				ctx.arc(left, bottom, r, HALF_PI, PI);
			} else if (left < right) {
				ctx.moveTo(left, y);
				ctx.arc(right, top, r, -HALF_PI, HALF_PI);
				ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
			} else if (top < bottom) {
				ctx.arc(left, top, r, -PI, 0);
				ctx.arc(left, bottom, r, 0, PI);
			} else {
				ctx.arc(left, top, r, -PI, PI);
			}
			ctx.closePath();
			ctx.moveTo(x, y);
		} else {
			ctx.rect(x, y, width, height);
		}
	},

	drawPoint: function(ctx, style, radius, x, y, rotation) {
		var type, xOffset, yOffset, size, cornerRadius;
		var rad = (rotation || 0) * RAD_PER_DEG;

		if (style && typeof style === 'object') {
			type = style.toString();
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(rad);
				ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
				ctx.restore();
				return;
			}
		}

		if (isNaN(radius) || radius <= 0) {
			return;
		}

		ctx.beginPath();

		switch (style) {
		// Default includes circle
		default:
			ctx.arc(x, y, radius, 0, DOUBLE_PI);
			ctx.closePath();
			break;
		case 'triangle':
			ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			ctx.closePath();
			break;
		case 'rectRounded':
			// NOTE: the rounded rect implementation changed to use `arc` instead of
			// `quadraticCurveTo` since it generates better results when rect is
			// almost a circle. 0.516 (instead of 0.5) produces results with visually
			// closer proportion to the previous impl and it is inscribed in the
			// circle with `radius`. For more details, see the following PRs:
			// https://github.com/chartjs/Chart.js/issues/5597
			// https://github.com/chartjs/Chart.js/issues/5858
			cornerRadius = radius * 0.516;
			size = radius - cornerRadius;
			xOffset = Math.cos(rad + QUARTER_PI) * size;
			yOffset = Math.sin(rad + QUARTER_PI) * size;
			ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
			ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
			ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
			ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
			ctx.closePath();
			break;
		case 'rect':
			if (!rotation) {
				size = Math.SQRT1_2 * radius;
				ctx.rect(x - size, y - size, 2 * size, 2 * size);
				break;
			}
			rad += QUARTER_PI;
			/* falls through */
		case 'rectRot':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + yOffset, y - xOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			ctx.closePath();
			break;
		case 'crossRot':
			rad += QUARTER_PI;
			/* falls through */
		case 'cross':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			break;
		case 'star':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			rad += QUARTER_PI;
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			break;
		case 'line':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			break;
		case 'dash':
			ctx.moveTo(x, y);
			ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
			break;
		}

		ctx.fill();
		ctx.stroke();
	},

	/**
	 * Returns true if the point is inside the rectangle
	 * @param {object} point - The point to test
	 * @param {object} area - The rectangle
	 * @returns {boolean}
	 * @private
	 */
	_isPointInArea: function(point, area) {
		var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

		return point.x > area.left - epsilon && point.x < area.right + epsilon &&
			point.y > area.top - epsilon && point.y < area.bottom + epsilon;
	},

	clipArea: function(ctx, area) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
		ctx.clip();
	},

	unclipArea: function(ctx) {
		ctx.restore();
	},

	lineTo: function(ctx, previous, target, flip) {
		var stepped = target.steppedLine;
		if (stepped) {
			if (stepped === 'middle') {
				var midpoint = (previous.x + target.x) / 2.0;
				ctx.lineTo(midpoint, flip ? target.y : previous.y);
				ctx.lineTo(midpoint, flip ? previous.y : target.y);
			} else if ((stepped === 'after' && !flip) || (stepped !== 'after' && flip)) {
				ctx.lineTo(previous.x, target.y);
			} else {
				ctx.lineTo(target.x, previous.y);
			}
			ctx.lineTo(target.x, target.y);
			return;
		}

		if (!target.tension) {
			ctx.lineTo(target.x, target.y);
			return;
		}

		ctx.bezierCurveTo(
			flip ? previous.controlPointPreviousX : previous.controlPointNextX,
			flip ? previous.controlPointPreviousY : previous.controlPointNextY,
			flip ? target.controlPointNextX : target.controlPointPreviousX,
			flip ? target.controlPointNextY : target.controlPointPreviousY,
			target.x,
			target.y);
	}
};

var helpers_canvas = exports$1;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.clear = exports$1.clear;

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.drawRoundedRectangle = function(ctx) {
	ctx.beginPath();
	exports$1.roundedRect.apply(exports$1, arguments);
};

var defaults = {
	/**
	 * @private
	 */
	_set: function(scope, values) {
		return helpers_core.merge(this[scope] || (this[scope] = {}), values);
	}
};

// TODO(v3): remove 'global' from namespace.  all default are global and
// there's inconsistency around which options are under 'global'
defaults._set('global', {
	defaultColor: 'rgba(0,0,0,0.1)',
	defaultFontColor: '#666',
	defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	defaultFontSize: 12,
	defaultFontStyle: 'normal',
	defaultLineHeight: 1.2,
	showLines: true
});

var core_defaults = defaults;

var valueOrDefault = helpers_core.valueOrDefault;

/**
 * Converts the given font object into a CSS font string.
 * @param {object} font - A font object.
 * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */
function toFontString(font) {
	if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
		return null;
	}

	return (font.style ? font.style + ' ' : '')
		+ (font.weight ? font.weight + ' ' : '')
		+ font.size + 'px '
		+ font.family;
}

/**
 * @alias Chart.helpers.options
 * @namespace
 */
var helpers_options = {
	/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */
	toLineHeight: function(value, size) {
		var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
		if (!matches || matches[1] === 'normal') {
			return size * 1.2;
		}

		value = +matches[2];

		switch (matches[3]) {
		case 'px':
			return value;
		case '%':
			value /= 100;
			break;
		}

		return size * value;
	},

	/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {number|object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */
	toPadding: function(value) {
		var t, r, b, l;

		if (helpers_core.isObject(value)) {
			t = +value.top || 0;
			r = +value.right || 0;
			b = +value.bottom || 0;
			l = +value.left || 0;
		} else {
			t = r = b = l = +value || 0;
		}

		return {
			top: t,
			right: r,
			bottom: b,
			left: l,
			height: t + b,
			width: l + r
		};
	},

	/**
	 * Parses font options and returns the font object.
	 * @param {object} options - A object that contains font options to be parsed.
	 * @return {object} The font object.
	 * @todo Support font.* options and renamed to toFont().
	 * @private
	 */
	_parseFont: function(options) {
		var globalDefaults = core_defaults.global;
		var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		var font = {
			family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
			lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
			size: size,
			style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
			weight: null,
			string: ''
		};

		font.string = toFontString(font);
		return font;
	},

	/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array} inputs - An array of values, falling back to the last value.
	 * @param {object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @param {object} [info] - object to return information about resolution in
	 * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
	 * @since 2.7.0
	 */
	resolve: function(inputs, context, index, info) {
		var cacheable = true;
		var i, ilen, value;

		for (i = 0, ilen = inputs.length; i < ilen; ++i) {
			value = inputs[i];
			if (value === undefined) {
				continue;
			}
			if (context !== undefined && typeof value === 'function') {
				value = value(context);
				cacheable = false;
			}
			if (index !== undefined && helpers_core.isArray(value)) {
				value = value[index];
				cacheable = false;
			}
			if (value !== undefined) {
				if (info && !cacheable) {
					info.cacheable = false;
				}
				return value;
			}
		}
	}
};

/**
 * @alias Chart.helpers.math
 * @namespace
 */
var exports$2 = {
	/**
	 * Returns an array of factors sorted from 1 to sqrt(value)
	 * @private
	 */
	_factorize: function(value) {
		var result = [];
		var sqrt = Math.sqrt(value);
		var i;

		for (i = 1; i < sqrt; i++) {
			if (value % i === 0) {
				result.push(i);
				result.push(value / i);
			}
		}
		if (sqrt === (sqrt | 0)) { // if value is a square number
			result.push(sqrt);
		}

		result.sort(function(a, b) {
			return a - b;
		}).pop();
		return result;
	},

	log10: Math.log10 || function(x) {
		var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
		// Check for whole powers of 10,
		// which due to floating point rounding error should be corrected.
		var powerOf10 = Math.round(exponent);
		var isPowerOf10 = x === Math.pow(10, powerOf10);

		return isPowerOf10 ? powerOf10 : exponent;
	}
};

var helpers_math = exports$2;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.math.log10 instead.
 * @namespace Chart.helpers.log10
 * @deprecated since version 2.9.0
 * @todo remove at version 3
 * @private
 */
helpers_core.log10 = exports$2.log10;

var getRtlAdapter = function(rectX, width) {
	return {
		x: function(x) {
			return rectX + rectX + width - x;
		},
		setWidth: function(w) {
			width = w;
		},
		textAlign: function(align) {
			if (align === 'center') {
				return align;
			}
			return align === 'right' ? 'left' : 'right';
		},
		xPlus: function(x, value) {
			return x - value;
		},
		leftForLtr: function(x, itemWidth) {
			return x - itemWidth;
		},
	};
};

var getLtrAdapter = function() {
	return {
		x: function(x) {
			return x;
		},
		setWidth: function(w) { // eslint-disable-line no-unused-vars
		},
		textAlign: function(align) {
			return align;
		},
		xPlus: function(x, value) {
			return x + value;
		},
		leftForLtr: function(x, _itemWidth) { // eslint-disable-line no-unused-vars
			return x;
		},
	};
};

var getAdapter = function(rtl, rectX, width) {
	return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
};

var overrideTextDirection = function(ctx, direction) {
	var style, original;
	if (direction === 'ltr' || direction === 'rtl') {
		style = ctx.canvas.style;
		original = [
			style.getPropertyValue('direction'),
			style.getPropertyPriority('direction'),
		];

		style.setProperty('direction', direction, 'important');
		ctx.prevTextDirection = original;
	}
};

var restoreTextDirection = function(ctx) {
	var original = ctx.prevTextDirection;
	if (original !== undefined) {
		delete ctx.prevTextDirection;
		ctx.canvas.style.setProperty('direction', original[0], original[1]);
	}
};

var helpers_rtl = {
	getRtlAdapter: getAdapter,
	overrideTextDirection: overrideTextDirection,
	restoreTextDirection: restoreTextDirection,
};

var helpers$1 = helpers_core;
var easing = helpers_easing;
var canvas = helpers_canvas;
var options = helpers_options;
var math = helpers_math;
var rtl = helpers_rtl;
helpers$1.easing = easing;
helpers$1.canvas = canvas;
helpers$1.options = options;
helpers$1.math = math;
helpers$1.rtl = rtl;

function interpolate(start, view, model, ease) {
	var keys = Object.keys(model);
	var i, ilen, key, actual, origin, target, type, c0, c1;

	for (i = 0, ilen = keys.length; i < ilen; ++i) {
		key = keys[i];

		target = model[key];

		// if a value is added to the model after pivot() has been called, the view
		// doesn't contain it, so let's initialize the view to the target value.
		if (!view.hasOwnProperty(key)) {
			view[key] = target;
		}

		actual = view[key];

		if (actual === target || key[0] === '_') {
			continue;
		}

		if (!start.hasOwnProperty(key)) {
			start[key] = actual;
		}

		origin = start[key];

		type = typeof target;

		if (type === typeof origin) {
			if (type === 'string') {
				c0 = chartjsColor(origin);
				if (c0.valid) {
					c1 = chartjsColor(target);
					if (c1.valid) {
						view[key] = c1.mix(c0, ease).rgbString();
						continue;
					}
				}
			} else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
				view[key] = origin + (target - origin) * ease;
				continue;
			}
		}

		view[key] = target;
	}
}

var Element = function(configuration) {
	helpers$1.extend(this, configuration);
	this.initialize.apply(this, arguments);
};

helpers$1.extend(Element.prototype, {
	_type: undefined,

	initialize: function() {
		this.hidden = false;
	},

	pivot: function() {
		var me = this;
		if (!me._view) {
			me._view = helpers$1.extend({}, me._model);
		}
		me._start = {};
		return me;
	},

	transition: function(ease) {
		var me = this;
		var model = me._model;
		var start = me._start;
		var view = me._view;

		// No animation -> No Transition
		if (!model || ease === 1) {
			me._view = helpers$1.extend({}, model);
			me._start = null;
			return me;
		}

		if (!view) {
			view = me._view = {};
		}

		if (!start) {
			start = me._start = {};
		}

		interpolate(start, view, model, ease);

		return me;
	},

	tooltipPosition: function() {
		return {
			x: this._model.x,
			y: this._model.y
		};
	},

	hasValue: function() {
		return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
	}
});

Element.extend = helpers$1.inherits;

var core_element = Element;

var exports$3 = core_element.extend({
	chart: null, // the animation associated chart instance
	currentStep: 0, // the current animation step
	numSteps: 60, // default number of steps
	easing: '', // the easing to use for this animation
	render: null, // render function used by the animation service

	onAnimationProgress: null, // user specified callback to fire on each step of the animation
	onAnimationComplete: null, // user specified callback to fire when the animation finishes
});

var core_animation = exports$3;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.Animation instead
 * @prop Chart.Animation#animationObject
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 */
Object.defineProperty(exports$3.prototype, 'animationObject', {
	get: function() {
		return this;
	}
});

/**
 * Provided for backward compatibility, use Chart.Animation#chart instead
 * @prop Chart.Animation#chartInstance
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 */
Object.defineProperty(exports$3.prototype, 'chartInstance', {
	get: function() {
		return this.chart;
	},
	set: function(value) {
		this.chart = value;
	}
});

core_defaults._set('global', {
	animation: {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: helpers$1.noop,
		onComplete: helpers$1.noop
	}
});

var core_animations = {
	animations: [],
	request: null,

	/**
	 * @param {Chart} chart - The chart to animate.
	 * @param {Chart.Animation} animation - The animation that we will animate.
	 * @param {number} duration - The animation duration in ms.
	 * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
	 */
	addAnimation: function(chart, animation, duration, lazy) {
		var animations = this.animations;
		var i, ilen;

		animation.chart = chart;
		animation.startTime = Date.now();
		animation.duration = duration;

		if (!lazy) {
			chart.animating = true;
		}

		for (i = 0, ilen = animations.length; i < ilen; ++i) {
			if (animations[i].chart === chart) {
				animations[i] = animation;
				return;
			}
		}

		animations.push(animation);

		// If there are no animations queued, manually kickstart a digest, for lack of a better word
		if (animations.length === 1) {
			this.requestAnimationFrame();
		}
	},

	cancelAnimation: function(chart) {
		var index = helpers$1.findIndex(this.animations, function(animation) {
			return animation.chart === chart;
		});

		if (index !== -1) {
			this.animations.splice(index, 1);
			chart.animating = false;
		}
	},

	requestAnimationFrame: function() {
		var me = this;
		if (me.request === null) {
			// Skip animation frame requests until the active one is executed.
			// This can happen when processing mouse events, e.g. 'mousemove'
			// and 'mouseout' events will trigger multiple renders.
			me.request = helpers$1.requestAnimFrame.call(window, function() {
				me.request = null;
				me.startDigest();
			});
		}
	},

	/**
	 * @private
	 */
	startDigest: function() {
		var me = this;

		me.advance();

		// Do we have more stuff to animate?
		if (me.animations.length > 0) {
			me.requestAnimationFrame();
		}
	},

	/**
	 * @private
	 */
	advance: function() {
		var animations = this.animations;
		var animation, chart, numSteps, nextStep;
		var i = 0;

		// 1 animation per chart, so we are looping charts here
		while (i < animations.length) {
			animation = animations[i];
			chart = animation.chart;
			numSteps = animation.numSteps;

			// Make sure that currentStep starts at 1
			// https://github.com/chartjs/Chart.js/issues/6104
			nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
			animation.currentStep = Math.min(nextStep, numSteps);

			helpers$1.callback(animation.render, [chart, animation], chart);
			helpers$1.callback(animation.onAnimationProgress, [animation], chart);

			if (animation.currentStep >= numSteps) {
				helpers$1.callback(animation.onAnimationComplete, [animation], chart);
				chart.animating = false;
				animations.splice(i, 1);
			} else {
				++i;
			}
		}
	}
};

var resolve = helpers$1.options.resolve;

var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

/**
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
 */
function listenArrayEvents(array, listener) {
	if (array._chartjs) {
		array._chartjs.listeners.push(listener);
		return;
	}

	Object.defineProperty(array, '_chartjs', {
		configurable: true,
		enumerable: false,
		value: {
			listeners: [listener]
		}
	});

	arrayEvents.forEach(function(key) {
		var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
		var base = array[key];

		Object.defineProperty(array, key, {
			configurable: true,
			enumerable: false,
			value: function() {
				var args = Array.prototype.slice.call(arguments);
				var res = base.apply(this, args);

				helpers$1.each(array._chartjs.listeners, function(object) {
					if (typeof object[method] === 'function') {
						object[method].apply(object, args);
					}
				});

				return res;
			}
		});
	});
}

/**
 * Removes the given array event listener and cleanup extra attached properties (such as
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
 */
function unlistenArrayEvents(array, listener) {
	var stub = array._chartjs;
	if (!stub) {
		return;
	}

	var listeners = stub.listeners;
	var index = listeners.indexOf(listener);
	if (index !== -1) {
		listeners.splice(index, 1);
	}

	if (listeners.length > 0) {
		return;
	}

	arrayEvents.forEach(function(key) {
		delete array[key];
	});

	delete array._chartjs;
}

// Base class for all dataset controllers (line, bar, etc)
var DatasetController = function(chart, datasetIndex) {
	this.initialize(chart, datasetIndex);
};

helpers$1.extend(DatasetController.prototype, {

	/**
	 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
	 * @type {Chart.core.element}
	 */
	datasetElementType: null,

	/**
	 * Element type used to generate a meta data (e.g. Chart.element.Point).
	 * @type {Chart.core.element}
	 */
	dataElementType: null,

	/**
	 * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
	 * A derived controller may override this to resolve controller-specific options.
	 * The keys defined here are for backward compatibility for legend styles.
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderCapStyle',
		'borderColor',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'borderWidth'
	],

	/**
	 * Data element option keys to be resolved in _resolveDataElementOptions.
	 * A derived controller may override this to resolve controller-specific options.
	 * The keys defined here are for backward compatibility for legend styles.
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'pointStyle'
	],

	initialize: function(chart, datasetIndex) {
		var me = this;
		me.chart = chart;
		me.index = datasetIndex;
		me.linkScales();
		me.addElements();
		me._type = me.getMeta().type;
	},

	updateIndex: function(datasetIndex) {
		this.index = datasetIndex;
	},

	linkScales: function() {
		var me = this;
		var meta = me.getMeta();
		var chart = me.chart;
		var scales = chart.scales;
		var dataset = me.getDataset();
		var scalesOpts = chart.options.scales;

		if (meta.xAxisID === null || !(meta.xAxisID in scales) || dataset.xAxisID) {
			meta.xAxisID = dataset.xAxisID || scalesOpts.xAxes[0].id;
		}
		if (meta.yAxisID === null || !(meta.yAxisID in scales) || dataset.yAxisID) {
			meta.yAxisID = dataset.yAxisID || scalesOpts.yAxes[0].id;
		}
	},

	getDataset: function() {
		return this.chart.data.datasets[this.index];
	},

	getMeta: function() {
		return this.chart.getDatasetMeta(this.index);
	},

	getScaleForId: function(scaleID) {
		return this.chart.scales[scaleID];
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.getMeta().yAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.getMeta().xAxisID;
	},

	/**
	 * @private
	 */
	_getValueScale: function() {
		return this.getScaleForId(this._getValueScaleId());
	},

	/**
	 * @private
	 */
	_getIndexScale: function() {
		return this.getScaleForId(this._getIndexScaleId());
	},

	reset: function() {
		this._update(true);
	},

	/**
	 * @private
	 */
	destroy: function() {
		if (this._data) {
			unlistenArrayEvents(this._data, this);
		}
	},

	createMetaDataset: function() {
		var me = this;
		var type = me.datasetElementType;
		return type && new type({
			_chart: me.chart,
			_datasetIndex: me.index
		});
	},

	createMetaData: function(index) {
		var me = this;
		var type = me.dataElementType;
		return type && new type({
			_chart: me.chart,
			_datasetIndex: me.index,
			_index: index
		});
	},

	addElements: function() {
		var me = this;
		var meta = me.getMeta();
		var data = me.getDataset().data || [];
		var metaData = meta.data;
		var i, ilen;

		for (i = 0, ilen = data.length; i < ilen; ++i) {
			metaData[i] = metaData[i] || me.createMetaData(i);
		}

		meta.dataset = meta.dataset || me.createMetaDataset();
	},

	addElementAndReset: function(index) {
		var element = this.createMetaData(index);
		this.getMeta().data.splice(index, 0, element);
		this.updateElement(element, index, true);
	},

	buildOrUpdateElements: function() {
		var me = this;
		var dataset = me.getDataset();
		var data = dataset.data || (dataset.data = []);

		// In order to correctly handle data addition/deletion animation (an thus simulate
		// real-time charts), we need to monitor these data modifications and synchronize
		// the internal meta data accordingly.
		if (me._data !== data) {
			if (me._data) {
				// This case happens when the user replaced the data array instance.
				unlistenArrayEvents(me._data, me);
			}

			if (data && Object.isExtensible(data)) {
				listenArrayEvents(data, me);
			}
			me._data = data;
		}

		// Re-sync meta data in case the user replaced the data array or if we missed
		// any updates and so make sure that we handle number of datapoints changing.
		me.resyncElements();
	},

	/**
	 * Returns the merged user-supplied and default dataset-level options
	 * @private
	 */
	_configure: function() {
		var me = this;
		me._config = helpers$1.merge({}, [
			me.chart.options.datasets[me._type],
			me.getDataset(),
		], {
			merger: function(key, target, source) {
				if (key !== '_meta' && key !== 'data') {
					helpers$1._merger(key, target, source);
				}
			}
		});
	},

	_update: function(reset) {
		var me = this;
		me._configure();
		me._cachedDataOpts = null;
		me.update(reset);
	},

	update: helpers$1.noop,

	transition: function(easingValue) {
		var meta = this.getMeta();
		var elements = meta.data || [];
		var ilen = elements.length;
		var i = 0;

		for (; i < ilen; ++i) {
			elements[i].transition(easingValue);
		}

		if (meta.dataset) {
			meta.dataset.transition(easingValue);
		}
	},

	draw: function() {
		var meta = this.getMeta();
		var elements = meta.data || [];
		var ilen = elements.length;
		var i = 0;

		if (meta.dataset) {
			meta.dataset.draw();
		}

		for (; i < ilen; ++i) {
			elements[i].draw();
		}
	},

	/**
	 * Returns a set of predefined style properties that should be used to represent the dataset
	 * or the data if the index is specified
	 * @param {number} index - data index
	 * @return {IStyleInterface} style object
	 */
	getStyle: function(index) {
		var me = this;
		var meta = me.getMeta();
		var dataset = meta.dataset;
		var style;

		me._configure();
		if (dataset && index === undefined) {
			style = me._resolveDatasetElementOptions(dataset || {});
		} else {
			index = index || 0;
			style = me._resolveDataElementOptions(meta.data[index] || {}, index);
		}

		if (style.fill === false || style.fill === null) {
			style.backgroundColor = 'rgba(0,0,0,0)';
		}

		return style;
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function(element, hover) {
		var me = this;
		var chart = me.chart;
		var datasetOpts = me._config;
		var custom = element.custom || {};
		var options = chart.options.elements[me.datasetElementType.prototype._type] || {};
		var elementOptions = me._datasetElementOptions;
		var values = {};
		var i, ilen, key, readKey;

		// Scriptable options
		var context = {
			chart: chart,
			dataset: me.getDataset(),
			datasetIndex: me.index,
			hover: hover
		};

		for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
			key = elementOptions[i];
			readKey = hover ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
			values[key] = resolve([
				custom[readKey],
				datasetOpts[readKey],
				options[readKey]
			], context);
		}

		return values;
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function(element, index) {
		var me = this;
		var custom = element && element.custom;
		var cached = me._cachedDataOpts;
		if (cached && !custom) {
			return cached;
		}
		var chart = me.chart;
		var datasetOpts = me._config;
		var options = chart.options.elements[me.dataElementType.prototype._type] || {};
		var elementOptions = me._dataElementOptions;
		var values = {};

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: me.getDataset(),
			datasetIndex: me.index
		};

		// `resolve` sets cacheable to `false` if any option is indexed or scripted
		var info = {cacheable: !custom};

		var keys, i, ilen, key;

		custom = custom || {};

		if (helpers$1.isArray(elementOptions)) {
			for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
				key = elementOptions[i];
				values[key] = resolve([
					custom[key],
					datasetOpts[key],
					options[key]
				], context, index, info);
			}
		} else {
			keys = Object.keys(elementOptions);
			for (i = 0, ilen = keys.length; i < ilen; ++i) {
				key = keys[i];
				values[key] = resolve([
					custom[key],
					datasetOpts[elementOptions[key]],
					datasetOpts[key],
					options[key]
				], context, index, info);
			}
		}

		if (info.cacheable) {
			me._cachedDataOpts = Object.freeze(values);
		}

		return values;
	},

	removeHoverStyle: function(element) {
		helpers$1.merge(element._model, element.$previousStyle || {});
		delete element.$previousStyle;
	},

	setHoverStyle: function(element) {
		var dataset = this.chart.data.datasets[element._datasetIndex];
		var index = element._index;
		var custom = element.custom || {};
		var model = element._model;
		var getHoverColor = helpers$1.getHoverColor;

		element.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth
		};

		model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
		model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
		model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);
	},

	/**
	 * @private
	 */
	_removeDatasetHoverStyle: function() {
		var element = this.getMeta().dataset;

		if (element) {
			this.removeHoverStyle(element);
		}
	},

	/**
	 * @private
	 */
	_setDatasetHoverStyle: function() {
		var element = this.getMeta().dataset;
		var prev = {};
		var i, ilen, key, keys, hoverOptions, model;

		if (!element) {
			return;
		}

		model = element._model;
		hoverOptions = this._resolveDatasetElementOptions(element, true);

		keys = Object.keys(hoverOptions);
		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			prev[key] = model[key];
			model[key] = hoverOptions[key];
		}

		element.$previousStyle = prev;
	},

	/**
	 * @private
	 */
	resyncElements: function() {
		var me = this;
		var meta = me.getMeta();
		var data = me.getDataset().data;
		var numMeta = meta.data.length;
		var numData = data.length;

		if (numData < numMeta) {
			meta.data.splice(numData, numMeta - numData);
		} else if (numData > numMeta) {
			me.insertElements(numMeta, numData - numMeta);
		}
	},

	/**
	 * @private
	 */
	insertElements: function(start, count) {
		for (var i = 0; i < count; ++i) {
			this.addElementAndReset(start + i);
		}
	},

	/**
	 * @private
	 */
	onDataPush: function() {
		var count = arguments.length;
		this.insertElements(this.getDataset().data.length - count, count);
	},

	/**
	 * @private
	 */
	onDataPop: function() {
		this.getMeta().data.pop();
	},

	/**
	 * @private
	 */
	onDataShift: function() {
		this.getMeta().data.shift();
	},

	/**
	 * @private
	 */
	onDataSplice: function(start, count) {
		this.getMeta().data.splice(start, count);
		this.insertElements(start, arguments.length - 2);
	},

	/**
	 * @private
	 */
	onDataUnshift: function() {
		this.insertElements(0, arguments.length);
	}
});

DatasetController.extend = helpers$1.inherits;

var core_datasetController = DatasetController;

var TAU = Math.PI * 2;

core_defaults._set('global', {
	elements: {
		arc: {
			backgroundColor: core_defaults.global.defaultColor,
			borderColor: '#fff',
			borderWidth: 2,
			borderAlign: 'center'
		}
	}
});

function clipArc(ctx, arc) {
	var startAngle = arc.startAngle;
	var endAngle = arc.endAngle;
	var pixelMargin = arc.pixelMargin;
	var angleMargin = pixelMargin / arc.outerRadius;
	var x = arc.x;
	var y = arc.y;

	// Draw an inner border by cliping the arc and drawing a double-width border
	// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
	ctx.beginPath();
	ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);
	if (arc.innerRadius > pixelMargin) {
		angleMargin = pixelMargin / arc.innerRadius;
		ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
	} else {
		ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
	}
	ctx.closePath();
	ctx.clip();
}

function drawFullCircleBorders(ctx, vm, arc, inner) {
	var endAngle = arc.endAngle;
	var i;

	if (inner) {
		arc.endAngle = arc.startAngle + TAU;
		clipArc(ctx, arc);
		arc.endAngle = endAngle;
		if (arc.endAngle === arc.startAngle && arc.fullCircles) {
			arc.endAngle += TAU;
			arc.fullCircles--;
		}
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU, arc.startAngle, true);
	for (i = 0; i < arc.fullCircles; ++i) {
		ctx.stroke();
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);
	for (i = 0; i < arc.fullCircles; ++i) {
		ctx.stroke();
	}
}

function drawBorder(ctx, vm, arc) {
	var inner = vm.borderAlign === 'inner';

	if (inner) {
		ctx.lineWidth = vm.borderWidth * 2;
		ctx.lineJoin = 'round';
	} else {
		ctx.lineWidth = vm.borderWidth;
		ctx.lineJoin = 'bevel';
	}

	if (arc.fullCircles) {
		drawFullCircleBorders(ctx, vm, arc, inner);
	}

	if (inner) {
		clipArc(ctx, arc);
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
	ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
	ctx.closePath();
	ctx.stroke();
}

var element_arc = core_element.extend({
	_type: 'arc',

	inLabelRange: function(mouseX) {
		var vm = this._view;

		if (vm) {
			return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
		}
		return false;
	},

	inRange: function(chartX, chartY) {
		var vm = this._view;

		if (vm) {
			var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {x: chartX, y: chartY});
			var angle = pointRelativePosition.angle;
			var distance = pointRelativePosition.distance;

			// Sanitise angle range
			var startAngle = vm.startAngle;
			var endAngle = vm.endAngle;
			while (endAngle < startAngle) {
				endAngle += TAU;
			}
			while (angle > endAngle) {
				angle -= TAU;
			}
			while (angle < startAngle) {
				angle += TAU;
			}

			// Check if within the range of the open/close angle
			var betweenAngles = (angle >= startAngle && angle <= endAngle);
			var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

			return (betweenAngles && withinRadius);
		}
		return false;
	},

	getCenterPoint: function() {
		var vm = this._view;
		var halfAngle = (vm.startAngle + vm.endAngle) / 2;
		var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
		return {
			x: vm.x + Math.cos(halfAngle) * halfRadius,
			y: vm.y + Math.sin(halfAngle) * halfRadius
		};
	},

	getArea: function() {
		var vm = this._view;
		return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
	},

	tooltipPosition: function() {
		var vm = this._view;
		var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
		var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;

		return {
			x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
			y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
		};
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var pixelMargin = (vm.borderAlign === 'inner') ? 0.33 : 0;
		var arc = {
			x: vm.x,
			y: vm.y,
			innerRadius: vm.innerRadius,
			outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
			pixelMargin: pixelMargin,
			startAngle: vm.startAngle,
			endAngle: vm.endAngle,
			fullCircles: Math.floor(vm.circumference / TAU)
		};
		var i;

		ctx.save();

		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;

		if (arc.fullCircles) {
			arc.endAngle = arc.startAngle + TAU;
			ctx.beginPath();
			ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
			ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
			ctx.closePath();
			for (i = 0; i < arc.fullCircles; ++i) {
				ctx.fill();
			}
			arc.endAngle = arc.startAngle + vm.circumference % TAU;
		}

		ctx.beginPath();
		ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
		ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
		ctx.closePath();
		ctx.fill();

		if (vm.borderWidth) {
			drawBorder(ctx, vm, arc);
		}

		ctx.restore();
	}
});

var valueOrDefault$1 = helpers$1.valueOrDefault;

var defaultColor = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		line: {
			tension: 0.4,
			backgroundColor: defaultColor,
			borderWidth: 3,
			borderColor: defaultColor,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true, // do we fill in the area between the line and its base axis
		}
	}
});

var element_line = core_element.extend({
	_type: 'line',

	draw: function() {
		var me = this;
		var vm = me._view;
		var ctx = me._chart.ctx;
		var spanGaps = vm.spanGaps;
		var points = me._children.slice(); // clone array
		var globalDefaults = core_defaults.global;
		var globalOptionLineElements = globalDefaults.elements.line;
		var lastDrawnIndex = -1;
		var closePath = me._loop;
		var index, previous, currentVM;

		if (!points.length) {
			return;
		}

		if (me._loop) {
			for (index = 0; index < points.length; ++index) {
				previous = helpers$1.previousItem(points, index);
				// If the line has an open path, shift the point array
				if (!points[index]._view.skip && previous._view.skip) {
					points = points.slice(index).concat(points.slice(0, index));
					closePath = spanGaps;
					break;
				}
			}
			// If the line has a close path, add the first point again
			if (closePath) {
				points.push(points[0]);
			}
		}

		ctx.save();

		// Stroke Line Options
		ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

		// IE 9 and 10 do not support line dash
		if (ctx.setLineDash) {
			ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
		}

		ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
		ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
		ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
		ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

		// Stroke Line
		ctx.beginPath();

		// First point moves to it's starting position no matter what
		currentVM = points[0]._view;
		if (!currentVM.skip) {
			ctx.moveTo(currentVM.x, currentVM.y);
			lastDrawnIndex = 0;
		}

		for (index = 1; index < points.length; ++index) {
			currentVM = points[index]._view;
			previous = lastDrawnIndex === -1 ? helpers$1.previousItem(points, index) : points[lastDrawnIndex];

			if (!currentVM.skip) {
				if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
					// There was a gap and this is the first point after the gap
					ctx.moveTo(currentVM.x, currentVM.y);
				} else {
					// Line to next point
					helpers$1.canvas.lineTo(ctx, previous._view, currentVM);
				}
				lastDrawnIndex = index;
			}
		}

		if (closePath) {
			ctx.closePath();
		}

		ctx.stroke();
		ctx.restore();
	}
});

var valueOrDefault$2 = helpers$1.valueOrDefault;

var defaultColor$1 = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		point: {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: defaultColor$1,
			borderColor: defaultColor$1,
			borderWidth: 1,
			// Hover
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		}
	}
});

function xRange(mouseX) {
	var vm = this._view;
	return vm ? (Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius) : false;
}

function yRange(mouseY) {
	var vm = this._view;
	return vm ? (Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius) : false;
}

var element_point = core_element.extend({
	_type: 'point',

	inRange: function(mouseX, mouseY) {
		var vm = this._view;
		return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
	},

	inLabelRange: xRange,
	inXRange: xRange,
	inYRange: yRange,

	getCenterPoint: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	},

	getArea: function() {
		return Math.PI * Math.pow(this._view.radius, 2);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y,
			padding: vm.radius + vm.borderWidth
		};
	},

	draw: function(chartArea) {
		var vm = this._view;
		var ctx = this._chart.ctx;
		var pointStyle = vm.pointStyle;
		var rotation = vm.rotation;
		var radius = vm.radius;
		var x = vm.x;
		var y = vm.y;
		var globalDefaults = core_defaults.global;
		var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

		if (vm.skip) {
			return;
		}

		// Clipping for Points.
		if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
			ctx.strokeStyle = vm.borderColor || defaultColor;
			ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
			ctx.fillStyle = vm.backgroundColor || defaultColor;
			helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
		}
	}
});

var defaultColor$2 = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		rectangle: {
			backgroundColor: defaultColor$2,
			borderColor: defaultColor$2,
			borderSkipped: 'bottom',
			borderWidth: 0
		}
	}
});

function isVertical(vm) {
	return vm && vm.width !== undefined;
}

/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */
function getBarBounds(vm) {
	var x1, x2, y1, y2, half;

	if (isVertical(vm)) {
		half = vm.width / 2;
		x1 = vm.x - half;
		x2 = vm.x + half;
		y1 = Math.min(vm.y, vm.base);
		y2 = Math.max(vm.y, vm.base);
	} else {
		half = vm.height / 2;
		x1 = Math.min(vm.x, vm.base);
		x2 = Math.max(vm.x, vm.base);
		y1 = vm.y - half;
		y2 = vm.y + half;
	}

	return {
		left: x1,
		top: y1,
		right: x2,
		bottom: y2
	};
}

function swap(orig, v1, v2) {
	return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}

function parseBorderSkipped(vm) {
	var edge = vm.borderSkipped;
	var res = {};

	if (!edge) {
		return res;
	}

	if (vm.horizontal) {
		if (vm.base > vm.x) {
			edge = swap(edge, 'left', 'right');
		}
	} else if (vm.base < vm.y) {
		edge = swap(edge, 'bottom', 'top');
	}

	res[edge] = true;
	return res;
}

function parseBorderWidth(vm, maxW, maxH) {
	var value = vm.borderWidth;
	var skip = parseBorderSkipped(vm);
	var t, r, b, l;

	if (helpers$1.isObject(value)) {
		t = +value.top || 0;
		r = +value.right || 0;
		b = +value.bottom || 0;
		l = +value.left || 0;
	} else {
		t = r = b = l = +value || 0;
	}

	return {
		t: skip.top || (t < 0) ? 0 : t > maxH ? maxH : t,
		r: skip.right || (r < 0) ? 0 : r > maxW ? maxW : r,
		b: skip.bottom || (b < 0) ? 0 : b > maxH ? maxH : b,
		l: skip.left || (l < 0) ? 0 : l > maxW ? maxW : l
	};
}

function boundingRects(vm) {
	var bounds = getBarBounds(vm);
	var width = bounds.right - bounds.left;
	var height = bounds.bottom - bounds.top;
	var border = parseBorderWidth(vm, width / 2, height / 2);

	return {
		outer: {
			x: bounds.left,
			y: bounds.top,
			w: width,
			h: height
		},
		inner: {
			x: bounds.left + border.l,
			y: bounds.top + border.t,
			w: width - border.l - border.r,
			h: height - border.t - border.b
		}
	};
}

function inRange(vm, x, y) {
	var skipX = x === null;
	var skipY = y === null;
	var bounds = !vm || (skipX && skipY) ? false : getBarBounds(vm);

	return bounds
		&& (skipX || x >= bounds.left && x <= bounds.right)
		&& (skipY || y >= bounds.top && y <= bounds.bottom);
}

var element_rectangle = core_element.extend({
	_type: 'rectangle',

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var rects = boundingRects(vm);
		var outer = rects.outer;
		var inner = rects.inner;

		ctx.fillStyle = vm.backgroundColor;
		ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

		if (outer.w === inner.w && outer.h === inner.h) {
			return;
		}

		ctx.save();
		ctx.beginPath();
		ctx.rect(outer.x, outer.y, outer.w, outer.h);
		ctx.clip();
		ctx.fillStyle = vm.borderColor;
		ctx.rect(inner.x, inner.y, inner.w, inner.h);
		ctx.fill('evenodd');
		ctx.restore();
	},

	height: function() {
		var vm = this._view;
		return vm.base - vm.y;
	},

	inRange: function(mouseX, mouseY) {
		return inRange(this._view, mouseX, mouseY);
	},

	inLabelRange: function(mouseX, mouseY) {
		var vm = this._view;
		return isVertical(vm)
			? inRange(vm, mouseX, null)
			: inRange(vm, null, mouseY);
	},

	inXRange: function(mouseX) {
		return inRange(this._view, mouseX, null);
	},

	inYRange: function(mouseY) {
		return inRange(this._view, null, mouseY);
	},

	getCenterPoint: function() {
		var vm = this._view;
		var x, y;
		if (isVertical(vm)) {
			x = vm.x;
			y = (vm.y + vm.base) / 2;
		} else {
			x = (vm.x + vm.base) / 2;
			y = vm.y;
		}

		return {x: x, y: y};
	},

	getArea: function() {
		var vm = this._view;

		return isVertical(vm)
			? vm.width * Math.abs(vm.y - vm.base)
			: vm.height * Math.abs(vm.x - vm.base);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	}
});

var elements = {};
var Arc = element_arc;
var Line = element_line;
var Point = element_point;
var Rectangle = element_rectangle;
elements.Arc = Arc;
elements.Line = Line;
elements.Point = Point;
elements.Rectangle = Rectangle;

var deprecated = helpers$1._deprecated;
var valueOrDefault$3 = helpers$1.valueOrDefault;

core_defaults._set('bar', {
	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}],

		yAxes: [{
			type: 'linear'
		}]
	}
});

core_defaults._set('global', {
	datasets: {
		bar: {
			categoryPercentage: 0.8,
			barPercentage: 0.9
		}
	}
});

/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */
function computeMinSampleSize(scale, pixels) {
	var min = scale._length;
	var prev, curr, i, ilen;

	for (i = 1, ilen = pixels.length; i < ilen; ++i) {
		min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
	}

	for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {
		curr = scale.getPixelForTick(i);
		min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
		prev = curr;
	}

	return min;
}

/**
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
 * @private
 */
function computeFitCategoryTraits(index, ruler, options) {
	var thickness = options.barThickness;
	var count = ruler.stackCount;
	var curr = ruler.pixels[index];
	var min = helpers$1.isNullOrUndef(thickness)
		? computeMinSampleSize(ruler.scale, ruler.pixels)
		: -1;
	var size, ratio;

	if (helpers$1.isNullOrUndef(thickness)) {
		size = min * options.categoryPercentage;
		ratio = options.barPercentage;
	} else {
		// When bar thickness is enforced, category and bar percentages are ignored.
		// Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
		// and deprecate barPercentage since this value is ignored when thickness is absolute.
		size = thickness * count;
		ratio = 1;
	}

	return {
		chunk: size / count,
		ratio: ratio,
		start: curr - (size / 2)
	};
}

/**
 * Computes an "optimal" category that globally arranges bars side by side (no gap when
 * percentage options are 1), based on the previous and following categories. This mode
 * generates bars with different widths when data are not evenly spaced.
 * @private
 */
function computeFlexCategoryTraits(index, ruler, options) {
	var pixels = ruler.pixels;
	var curr = pixels[index];
	var prev = index > 0 ? pixels[index - 1] : null;
	var next = index < pixels.length - 1 ? pixels[index + 1] : null;
	var percent = options.categoryPercentage;
	var start, size;

	if (prev === null) {
		// first data: its size is double based on the next point or,
		// if it's also the last data, we use the scale size.
		prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
	}

	if (next === null) {
		// last data: its size is also double based on the previous point.
		next = curr + curr - prev;
	}

	start = curr - (curr - Math.min(prev, next)) / 2 * percent;
	size = Math.abs(next - prev) / 2 * percent;

	return {
		chunk: size / ruler.stackCount,
		ratio: options.barPercentage,
		start: start
	};
}

var controller_bar = core_datasetController.extend({

	dataElementType: elements.Rectangle,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderSkipped',
		'borderWidth',
		'barPercentage',
		'barThickness',
		'categoryPercentage',
		'maxBarThickness',
		'minBarLength'
	],

	initialize: function() {
		var me = this;
		var meta, scaleOpts;

		core_datasetController.prototype.initialize.apply(me, arguments);

		meta = me.getMeta();
		meta.stack = me.getDataset().stack;
		meta.bar = true;

		scaleOpts = me._getIndexScale().options;
		deprecated('bar chart', scaleOpts.barPercentage, 'scales.[x/y]Axes.barPercentage', 'dataset.barPercentage');
		deprecated('bar chart', scaleOpts.barThickness, 'scales.[x/y]Axes.barThickness', 'dataset.barThickness');
		deprecated('bar chart', scaleOpts.categoryPercentage, 'scales.[x/y]Axes.categoryPercentage', 'dataset.categoryPercentage');
		deprecated('bar chart', me._getValueScale().options.minBarLength, 'scales.[x/y]Axes.minBarLength', 'dataset.minBarLength');
		deprecated('bar chart', scaleOpts.maxBarThickness, 'scales.[x/y]Axes.maxBarThickness', 'dataset.maxBarThickness');
	},

	update: function(reset) {
		var me = this;
		var rects = me.getMeta().data;
		var i, ilen;

		me._ruler = me.getRuler();

		for (i = 0, ilen = rects.length; i < ilen; ++i) {
			me.updateElement(rects[i], i, reset);
		}
	},

	updateElement: function(rectangle, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var dataset = me.getDataset();
		var options = me._resolveDataElementOptions(rectangle, index);

		rectangle._xScale = me.getScaleForId(meta.xAxisID);
		rectangle._yScale = me.getScaleForId(meta.yAxisID);
		rectangle._datasetIndex = me.index;
		rectangle._index = index;
		rectangle._model = {
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderSkipped: options.borderSkipped,
			borderWidth: options.borderWidth,
			datasetLabel: dataset.label,
			label: me.chart.data.labels[index]
		};

		if (helpers$1.isArray(dataset.data[index])) {
			rectangle._model.borderSkipped = null;
		}

		me._updateElementGeometry(rectangle, index, reset, options);

		rectangle.pivot();
	},

	/**
	 * @private
	 */
	_updateElementGeometry: function(rectangle, index, reset, options) {
		var me = this;
		var model = rectangle._model;
		var vscale = me._getValueScale();
		var base = vscale.getBasePixel();
		var horizontal = vscale.isHorizontal();
		var ruler = me._ruler || me.getRuler();
		var vpixels = me.calculateBarValuePixels(me.index, index, options);
		var ipixels = me.calculateBarIndexPixels(me.index, index, ruler, options);

		model.horizontal = horizontal;
		model.base = reset ? base : vpixels.base;
		model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
		model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
		model.height = horizontal ? ipixels.size : undefined;
		model.width = horizontal ? undefined : ipixels.size;
	},

	/**
	 * Returns the stacks based on groups and bar visibility.
	 * @param {number} [last] - The dataset index
	 * @returns {string[]} The list of stack IDs
	 * @private
	 */
	_getStacks: function(last) {
		var me = this;
		var scale = me._getIndexScale();
		var metasets = scale._getMatchingVisibleMetas(me._type);
		var stacked = scale.options.stacked;
		var ilen = metasets.length;
		var stacks = [];
		var i, meta;

		for (i = 0; i < ilen; ++i) {
			meta = metasets[i];
			// stacked   | meta.stack
			//           | found | not found | undefined
			// false     |   x   |     x     |     x
			// true      |       |     x     |
			// undefined |       |     x     |     x
			if (stacked === false || stacks.indexOf(meta.stack) === -1 ||
				(stacked === undefined && meta.stack === undefined)) {
				stacks.push(meta.stack);
			}
			if (meta.index === last) {
				break;
			}
		}

		return stacks;
	},

	/**
	 * Returns the effective number of stacks based on groups and bar visibility.
	 * @private
	 */
	getStackCount: function() {
		return this._getStacks().length;
	},

	/**
	 * Returns the stack index for the given dataset based on groups and bar visibility.
	 * @param {number} [datasetIndex] - The dataset index
	 * @param {string} [name] - The stack name to find
	 * @returns {number} The stack index
	 * @private
	 */
	getStackIndex: function(datasetIndex, name) {
		var stacks = this._getStacks(datasetIndex);
		var index = (name !== undefined)
			? stacks.indexOf(name)
			: -1; // indexOf returns -1 if element is not present

		return (index === -1)
			? stacks.length - 1
			: index;
	},

	/**
	 * @private
	 */
	getRuler: function() {
		var me = this;
		var scale = me._getIndexScale();
		var pixels = [];
		var i, ilen;

		for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
			pixels.push(scale.getPixelForValue(null, i, me.index));
		}

		return {
			pixels: pixels,
			start: scale._startPixel,
			end: scale._endPixel,
			stackCount: me.getStackCount(),
			scale: scale
		};
	},

	/**
	 * Note: pixel values are not clamped to the scale area.
	 * @private
	 */
	calculateBarValuePixels: function(datasetIndex, index, options) {
		var me = this;
		var chart = me.chart;
		var scale = me._getValueScale();
		var isHorizontal = scale.isHorizontal();
		var datasets = chart.data.datasets;
		var metasets = scale._getMatchingVisibleMetas(me._type);
		var value = scale._parseValue(datasets[datasetIndex].data[index]);
		var minBarLength = options.minBarLength;
		var stacked = scale.options.stacked;
		var stack = me.getMeta().stack;
		var start = value.start === undefined ? 0 : value.max >= 0 && value.min >= 0 ? value.min : value.max;
		var length = value.start === undefined ? value.end : value.max >= 0 && value.min >= 0 ? value.max - value.min : value.min - value.max;
		var ilen = metasets.length;
		var i, imeta, ivalue, base, head, size, stackLength;

		if (stacked || (stacked === undefined && stack !== undefined)) {
			for (i = 0; i < ilen; ++i) {
				imeta = metasets[i];

				if (imeta.index === datasetIndex) {
					break;
				}

				if (imeta.stack === stack) {
					stackLength = scale._parseValue(datasets[imeta.index].data[index]);
					ivalue = stackLength.start === undefined ? stackLength.end : stackLength.min >= 0 && stackLength.max >= 0 ? stackLength.max : stackLength.min;

					if ((value.min < 0 && ivalue < 0) || (value.max >= 0 && ivalue > 0)) {
						start += ivalue;
					}
				}
			}
		}

		base = scale.getPixelForValue(start);
		head = scale.getPixelForValue(start + length);
		size = head - base;

		if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
			size = minBarLength;
			if (length >= 0 && !isHorizontal || length < 0 && isHorizontal) {
				head = base - minBarLength;
			} else {
				head = base + minBarLength;
			}
		}

		return {
			size: size,
			base: base,
			head: head,
			center: head + size / 2
		};
	},

	/**
	 * @private
	 */
	calculateBarIndexPixels: function(datasetIndex, index, ruler, options) {
		var me = this;
		var range = options.barThickness === 'flex'
			? computeFlexCategoryTraits(index, ruler, options)
			: computeFitCategoryTraits(index, ruler, options);

		var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
		var center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
		var size = Math.min(
			valueOrDefault$3(options.maxBarThickness, Infinity),
			range.chunk * range.ratio);

		return {
			base: center - size / 2,
			head: center + size / 2,
			center: center,
			size: size
		};
	},

	draw: function() {
		var me = this;
		var chart = me.chart;
		var scale = me._getValueScale();
		var rects = me.getMeta().data;
		var dataset = me.getDataset();
		var ilen = rects.length;
		var i = 0;

		helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

		for (; i < ilen; ++i) {
			var val = scale._parseValue(dataset.data[i]);
			if (!isNaN(val.min) && !isNaN(val.max)) {
				rects[i].draw();
			}
		}

		helpers$1.canvas.unclipArea(chart.ctx);
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function() {
		var me = this;
		var values = helpers$1.extend({}, core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments));
		var indexOpts = me._getIndexScale().options;
		var valueOpts = me._getValueScale().options;

		values.barPercentage = valueOrDefault$3(indexOpts.barPercentage, values.barPercentage);
		values.barThickness = valueOrDefault$3(indexOpts.barThickness, values.barThickness);
		values.categoryPercentage = valueOrDefault$3(indexOpts.categoryPercentage, values.categoryPercentage);
		values.maxBarThickness = valueOrDefault$3(indexOpts.maxBarThickness, values.maxBarThickness);
		values.minBarLength = valueOrDefault$3(valueOpts.minBarLength, values.minBarLength);

		return values;
	}

});

var valueOrDefault$4 = helpers$1.valueOrDefault;
var resolve$1 = helpers$1.options.resolve;

core_defaults._set('bubble', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			type: 'linear', // bubble should probably use a linear scale by default
			position: 'bottom',
			id: 'x-axis-0' // need an ID so datasets can reference the scale
		}],
		yAxes: [{
			type: 'linear',
			position: 'left',
			id: 'y-axis-0'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				// Title doesn't make sense for scatter since we format the data as a point
				return '';
			},
			label: function(item, data) {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
				var dataPoint = data.datasets[item.datasetIndex].data[item.index];
				return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
			}
		}
	}
});

var controller_bubble = core_datasetController.extend({
	/**
	 * @protected
	 */
	dataElementType: elements.Point,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
		'hoverRadius',
		'hitRadius',
		'pointStyle',
		'rotation'
	],

	/**
	 * @protected
	 */
	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var points = meta.data;

		// Update Points
		helpers$1.each(points, function(point, index) {
			me.updateElement(point, index, reset);
		});
	},

	/**
	 * @protected
	 */
	updateElement: function(point, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var custom = point.custom || {};
		var xScale = me.getScaleForId(meta.xAxisID);
		var yScale = me.getScaleForId(meta.yAxisID);
		var options = me._resolveDataElementOptions(point, index);
		var data = me.getDataset().data[index];
		var dsIndex = me.index;

		var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
		var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);

		point._xScale = xScale;
		point._yScale = yScale;
		point._options = options;
		point._datasetIndex = dsIndex;
		point._index = index;
		point._model = {
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			hitRadius: options.hitRadius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			radius: reset ? 0 : options.radius,
			skip: custom.skip || isNaN(x) || isNaN(y),
			x: x,
			y: y,
		};

		point.pivot();
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
		model.radius = options.radius + options.hoverRadius;
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function(point, index) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var custom = point.custom || {};
		var data = dataset.data[index] || {};
		var values = core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments);

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		// In case values were cached (and thus frozen), we need to clone the values
		if (me._cachedDataOpts === values) {
			values = helpers$1.extend({}, values);
		}

		// Custom radius resolution
		values.radius = resolve$1([
			custom.radius,
			data.r,
			me._config.radius,
			chart.options.elements.point.radius
		], context, index);

		return values;
	}
});

var valueOrDefault$5 = helpers$1.valueOrDefault;

var PI$1 = Math.PI;
var DOUBLE_PI$1 = PI$1 * 2;
var HALF_PI$1 = PI$1 / 2;

core_defaults._set('doughnut', {
	animation: {
		// Boolean - Whether we animate the rotation of the Doughnut
		animateRotate: true,
		// Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale: false
	},
	hover: {
		mode: 'single'
	},
	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');
		if (datasets.length) {
			for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
				listItem = list.appendChild(document.createElement('li'));
				listItemSpan = listItem.appendChild(document.createElement('span'));
				listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
				if (labels[i]) {
					listItem.appendChild(document.createTextNode(labels[i]));
				}
			}
		}

		return list.outerHTML;
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var style = meta.controller.getStyle(i);

						return {
							text: label,
							fillStyle: style.backgroundColor,
							strokeStyle: style.borderColor,
							lineWidth: style.borderWidth,
							hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				// toggle visibility of index if exists
				if (meta.data[index]) {
					meta.data[index].hidden = !meta.data[index].hidden;
				}
			}

			chart.update();
		}
	},

	// The percentage of the chart that we cut out of the middle.
	cutoutPercentage: 50,

	// The rotation of the chart, where the first data arc begins.
	rotation: -HALF_PI$1,

	// The total circumference of the chart.
	circumference: DOUBLE_PI$1,

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(tooltipItem, data) {
				var dataLabel = data.labels[tooltipItem.index];
				var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

				if (helpers$1.isArray(dataLabel)) {
					// show value on first line of multiline label
					// need to clone because we are changing the value
					dataLabel = dataLabel.slice();
					dataLabel[0] += value;
				} else {
					dataLabel += value;
				}

				return dataLabel;
			}
		}
	}
});

var controller_doughnut = core_datasetController.extend({

	dataElementType: elements.Arc,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'borderAlign',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
	],

	// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
	getRingIndex: function(datasetIndex) {
		var ringIndex = 0;

		for (var j = 0; j < datasetIndex; ++j) {
			if (this.chart.isDatasetVisible(j)) {
				++ringIndex;
			}
		}

		return ringIndex;
	},

	update: function(reset) {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var ratioX = 1;
		var ratioY = 1;
		var offsetX = 0;
		var offsetY = 0;
		var meta = me.getMeta();
		var arcs = meta.data;
		var cutout = opts.cutoutPercentage / 100 || 0;
		var circumference = opts.circumference;
		var chartWeight = me._getRingWeight(me.index);
		var maxWidth, maxHeight, i, ilen;

		// If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc
		if (circumference < DOUBLE_PI$1) {
			var startAngle = opts.rotation % DOUBLE_PI$1;
			startAngle += startAngle >= PI$1 ? -DOUBLE_PI$1 : startAngle < -PI$1 ? DOUBLE_PI$1 : 0;
			var endAngle = startAngle + circumference;
			var startX = Math.cos(startAngle);
			var startY = Math.sin(startAngle);
			var endX = Math.cos(endAngle);
			var endY = Math.sin(endAngle);
			var contains0 = (startAngle <= 0 && endAngle >= 0) || endAngle >= DOUBLE_PI$1;
			var contains90 = (startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1) || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
			var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
			var contains270 = (startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1) || endAngle >= PI$1 + HALF_PI$1;
			var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
			var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
			var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
			var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
			ratioX = (maxX - minX) / 2;
			ratioY = (maxY - minY) / 2;
			offsetX = -(maxX + minX) / 2;
			offsetY = -(maxY + minY) / 2;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
		}

		chart.borderWidth = me.getMaxBorderWidth();
		maxWidth = (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;
		maxHeight = (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
		chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
		chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
		chart.offsetX = offsetX * chart.outerRadius;
		chart.offsetY = offsetY * chart.outerRadius;

		meta.total = me.calculateTotal();

		me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
		me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			me.updateElement(arcs[i], i, reset);
		}
	},

	updateElement: function(arc, index, reset) {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var animationOpts = opts.animation;
		var centerX = (chartArea.left + chartArea.right) / 2;
		var centerY = (chartArea.top + chartArea.bottom) / 2;
		var startAngle = opts.rotation; // non reset case handled later
		var endAngle = opts.rotation; // non reset case handled later
		var dataset = me.getDataset();
		var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / DOUBLE_PI$1);
		var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
		var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
		var options = arc._options || {};

		helpers$1.extend(arc, {
			// Utility
			_datasetIndex: me.index,
			_index: index,

			// Desired view properties
			_model: {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				borderAlign: options.borderAlign,
				x: centerX + chart.offsetX,
				y: centerY + chart.offsetY,
				startAngle: startAngle,
				endAngle: endAngle,
				circumference: circumference,
				outerRadius: outerRadius,
				innerRadius: innerRadius,
				label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
			}
		});

		var model = arc._model;

		// Set correct angles if not resetting
		if (!reset || !animationOpts.animateRotate) {
			if (index === 0) {
				model.startAngle = opts.rotation;
			} else {
				model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
			}

			model.endAngle = model.startAngle + model.circumference;
		}

		arc.pivot();
	},

	calculateTotal: function() {
		var dataset = this.getDataset();
		var meta = this.getMeta();
		var total = 0;
		var value;

		helpers$1.each(meta.data, function(element, index) {
			value = dataset.data[index];
			if (!isNaN(value) && !element.hidden) {
				total += Math.abs(value);
			}
		});

		/* if (total === 0) {
			total = NaN;
		}*/

		return total;
	},

	calculateCircumference: function(value) {
		var total = this.getMeta().total;
		if (total > 0 && !isNaN(value)) {
			return DOUBLE_PI$1 * (Math.abs(value) / total);
		}
		return 0;
	},

	// gets the max border or hover width to properly scale pie charts
	getMaxBorderWidth: function(arcs) {
		var me = this;
		var max = 0;
		var chart = me.chart;
		var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

		if (!arcs) {
			// Find the outmost visible dataset
			for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
				if (chart.isDatasetVisible(i)) {
					meta = chart.getDatasetMeta(i);
					arcs = meta.data;
					if (i !== me.index) {
						controller = meta.controller;
					}
					break;
				}
			}
		}

		if (!arcs) {
			return 0;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arc = arcs[i];
			if (controller) {
				controller._configure();
				options = controller._resolveDataElementOptions(arc, i);
			} else {
				options = arc._options;
			}
			if (options.borderAlign !== 'inner') {
				borderWidth = options.borderWidth;
				hoverWidth = options.hoverBorderWidth;

				max = borderWidth > max ? borderWidth : max;
				max = hoverWidth > max ? hoverWidth : max;
			}
		}
		return max;
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(arc) {
		var model = arc._model;
		var options = arc._options;
		var getHoverColor = helpers$1.getHoverColor;

		arc.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
		};

		model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
	},

	/**
	 * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
	 * @private
	 */
	_getRingWeightOffset: function(datasetIndex) {
		var ringWeightOffset = 0;

		for (var i = 0; i < datasetIndex; ++i) {
			if (this.chart.isDatasetVisible(i)) {
				ringWeightOffset += this._getRingWeight(i);
			}
		}

		return ringWeightOffset;
	},

	/**
	 * @private
	 */
	_getRingWeight: function(dataSetIndex) {
		return Math.max(valueOrDefault$5(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
	},

	/**
	 * Returns the sum of all visibile data set weights.  This value can be 0.
	 * @private
	 */
	_getVisibleDatasetWeightTotal: function() {
		return this._getRingWeightOffset(this.chart.data.datasets.length);
	}
});

core_defaults._set('horizontalBar', {
	hover: {
		mode: 'index',
		axis: 'y'
	},

	scales: {
		xAxes: [{
			type: 'linear',
			position: 'bottom'
		}],

		yAxes: [{
			type: 'category',
			position: 'left',
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}]
	},

	elements: {
		rectangle: {
			borderSkipped: 'left'
		}
	},

	tooltips: {
		mode: 'index',
		axis: 'y'
	}
});

core_defaults._set('global', {
	datasets: {
		horizontalBar: {
			categoryPercentage: 0.8,
			barPercentage: 0.9
		}
	}
});

var controller_horizontalBar = controller_bar.extend({
	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.getMeta().xAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.getMeta().yAxisID;
	}
});

var valueOrDefault$6 = helpers$1.valueOrDefault;
var resolve$2 = helpers$1.options.resolve;
var isPointInArea = helpers$1.canvas._isPointInArea;

core_defaults._set('line', {
	showLines: true,
	spanGaps: false,

	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			id: 'x-axis-0'
		}],
		yAxes: [{
			type: 'linear',
			id: 'y-axis-0'
		}]
	}
});

function scaleClip(scale, halfBorderWidth) {
	var tickOpts = scale && scale.options.ticks || {};
	var reverse = tickOpts.reverse;
	var min = tickOpts.min === undefined ? halfBorderWidth : 0;
	var max = tickOpts.max === undefined ? halfBorderWidth : 0;
	return {
		start: reverse ? max : min,
		end: reverse ? min : max
	};
}

function defaultClip(xScale, yScale, borderWidth) {
	var halfBorderWidth = borderWidth / 2;
	var x = scaleClip(xScale, halfBorderWidth);
	var y = scaleClip(yScale, halfBorderWidth);

	return {
		top: y.end,
		right: x.end,
		bottom: y.start,
		left: x.start
	};
}

function toClip(value) {
	var t, r, b, l;

	if (helpers$1.isObject(value)) {
		t = value.top;
		r = value.right;
		b = value.bottom;
		l = value.left;
	} else {
		t = r = b = l = value;
	}

	return {
		top: t,
		right: r,
		bottom: b,
		left: l
	};
}


var controller_line = core_datasetController.extend({

	datasetElementType: elements.Line,

	dataElementType: elements.Point,

	/**
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderCapStyle',
		'borderColor',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'borderWidth',
		'cubicInterpolationMode',
		'fill'
	],

	/**
	 * @private
	 */
	_dataElementOptions: {
		backgroundColor: 'pointBackgroundColor',
		borderColor: 'pointBorderColor',
		borderWidth: 'pointBorderWidth',
		hitRadius: 'pointHitRadius',
		hoverBackgroundColor: 'pointHoverBackgroundColor',
		hoverBorderColor: 'pointHoverBorderColor',
		hoverBorderWidth: 'pointHoverBorderWidth',
		hoverRadius: 'pointHoverRadius',
		pointStyle: 'pointStyle',
		radius: 'pointRadius',
		rotation: 'pointRotation'
	},

	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var line = meta.dataset;
		var points = meta.data || [];
		var options = me.chart.options;
		var config = me._config;
		var showLine = me._showLine = valueOrDefault$6(config.showLine, options.showLines);
		var i, ilen;

		me._xScale = me.getScaleForId(meta.xAxisID);
		me._yScale = me.getScaleForId(meta.yAxisID);

		// Update Line
		if (showLine) {
			// Compatibility: If the properties are defined with only the old name, use those values
			if (config.tension !== undefined && config.lineTension === undefined) {
				config.lineTension = config.tension;
			}

			// Utility
			line._scale = me._yScale;
			line._datasetIndex = me.index;
			// Data
			line._children = points;
			// Model
			line._model = me._resolveDatasetElementOptions(line);

			line.pivot();
		}

		// Update Points
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			me.updateElement(points[i], i, reset);
		}

		if (showLine && line._model.tension !== 0) {
			me.updateBezierControlPoints();
		}

		// Now pivot the point for animation
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			points[i].pivot();
		}
	},

	updateElement: function(point, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var custom = point.custom || {};
		var dataset = me.getDataset();
		var datasetIndex = me.index;
		var value = dataset.data[index];
		var xScale = me._xScale;
		var yScale = me._yScale;
		var lineModel = meta.dataset._model;
		var x, y;

		var options = me._resolveDataElementOptions(point, index);

		x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
		y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

		// Utility
		point._xScale = xScale;
		point._yScale = yScale;
		point._options = options;
		point._datasetIndex = datasetIndex;
		point._index = index;

		// Desired view properties
		point._model = {
			x: x,
			y: y,
			skip: custom.skip || isNaN(x) || isNaN(y),
			// Appearance
			radius: options.radius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),
			steppedLine: lineModel ? lineModel.steppedLine : false,
			// Tooltip
			hitRadius: options.hitRadius
		};
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function(element) {
		var me = this;
		var config = me._config;
		var custom = element.custom || {};
		var options = me.chart.options;
		var lineOptions = options.elements.line;
		var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

		// The default behavior of lines is to break at null values, according
		// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
		// This option gives lines the ability to span gaps
		values.spanGaps = valueOrDefault$6(config.spanGaps, options.spanGaps);
		values.tension = valueOrDefault$6(config.lineTension, lineOptions.tension);
		values.steppedLine = resolve$2([custom.steppedLine, config.steppedLine, lineOptions.stepped]);
		values.clip = toClip(valueOrDefault$6(config.clip, defaultClip(me._xScale, me._yScale, values.borderWidth)));

		return values;
	},

	calculatePointY: function(value, index, datasetIndex) {
		var me = this;
		var chart = me.chart;
		var yScale = me._yScale;
		var sumPos = 0;
		var sumNeg = 0;
		var i, ds, dsMeta, stackedRightValue, rightValue, metasets, ilen;

		if (yScale.options.stacked) {
			rightValue = +yScale.getRightValue(value);
			metasets = chart._getSortedVisibleDatasetMetas();
			ilen = metasets.length;

			for (i = 0; i < ilen; ++i) {
				dsMeta = metasets[i];
				if (dsMeta.index === datasetIndex) {
					break;
				}

				ds = chart.data.datasets[dsMeta.index];
				if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id) {
					stackedRightValue = +yScale.getRightValue(ds.data[index]);
					if (stackedRightValue < 0) {
						sumNeg += stackedRightValue || 0;
					} else {
						sumPos += stackedRightValue || 0;
					}
				}
			}

			if (rightValue < 0) {
				return yScale.getPixelForValue(sumNeg + rightValue);
			}
			return yScale.getPixelForValue(sumPos + rightValue);
		}
		return yScale.getPixelForValue(value);
	},

	updateBezierControlPoints: function() {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var lineModel = meta.dataset._model;
		var area = chart.chartArea;
		var points = meta.data || [];
		var i, ilen, model, controlPoints;

		// Only consider points that are drawn in case the spanGaps option is used
		if (lineModel.spanGaps) {
			points = points.filter(function(pt) {
				return !pt._model.skip;
			});
		}

		function capControlPoint(pt, min, max) {
			return Math.max(Math.min(pt, max), min);
		}

		if (lineModel.cubicInterpolationMode === 'monotone') {
			helpers$1.splineCurveMonotone(points);
		} else {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				model = points[i]._model;
				controlPoints = helpers$1.splineCurve(
					helpers$1.previousItem(points, i)._model,
					model,
					helpers$1.nextItem(points, i)._model,
					lineModel.tension
				);
				model.controlPointPreviousX = controlPoints.previous.x;
				model.controlPointPreviousY = controlPoints.previous.y;
				model.controlPointNextX = controlPoints.next.x;
				model.controlPointNextY = controlPoints.next.y;
			}
		}

		if (chart.options.elements.line.capBezierPoints) {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				model = points[i]._model;
				if (isPointInArea(model, area)) {
					if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
						model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
						model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
					}
					if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
						model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
						model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
					}
				}
			}
		}
	},

	draw: function() {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var points = meta.data || [];
		var area = chart.chartArea;
		var canvas = chart.canvas;
		var i = 0;
		var ilen = points.length;
		var clip;

		if (me._showLine) {
			clip = meta.dataset._model.clip;

			helpers$1.canvas.clipArea(chart.ctx, {
				left: clip.left === false ? 0 : area.left - clip.left,
				right: clip.right === false ? canvas.width : area.right + clip.right,
				top: clip.top === false ? 0 : area.top - clip.top,
				bottom: clip.bottom === false ? canvas.height : area.bottom + clip.bottom
			});

			meta.dataset.draw();

			helpers$1.canvas.unclipArea(chart.ctx);
		}

		// Draw the points
		for (; i < ilen; ++i) {
			points[i].draw(area);
		}
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
		model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
	},
});

var resolve$3 = helpers$1.options.resolve;

core_defaults._set('polarArea', {
	scale: {
		type: 'radialLinear',
		angleLines: {
			display: false
		},
		gridLines: {
			circular: true
		},
		pointLabels: {
			display: false
		},
		ticks: {
			beginAtZero: true
		}
	},

	// Boolean - Whether to animate the rotation of the chart
	animation: {
		animateRotate: true,
		animateScale: true
	},

	startAngle: -0.5 * Math.PI,
	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');
		if (datasets.length) {
			for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
				listItem = list.appendChild(document.createElement('li'));
				listItemSpan = listItem.appendChild(document.createElement('span'));
				listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
				if (labels[i]) {
					listItem.appendChild(document.createTextNode(labels[i]));
				}
			}
		}

		return list.outerHTML;
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var style = meta.controller.getStyle(i);

						return {
							text: label,
							fillStyle: style.backgroundColor,
							strokeStyle: style.borderColor,
							lineWidth: style.borderWidth,
							hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				meta.data[index].hidden = !meta.data[index].hidden;
			}

			chart.update();
		}
	},

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(item, data) {
				return data.labels[item.index] + ': ' + item.yLabel;
			}
		}
	}
});

var controller_polarArea = core_datasetController.extend({

	dataElementType: elements.Arc,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'borderAlign',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
	],

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.chart.scale.id;
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.chart.scale.id;
	},

	update: function(reset) {
		var me = this;
		var dataset = me.getDataset();
		var meta = me.getMeta();
		var start = me.chart.options.startAngle || 0;
		var starts = me._starts = [];
		var angles = me._angles = [];
		var arcs = meta.data;
		var i, ilen, angle;

		me._updateRadius();

		meta.count = me.countVisibleElements();

		for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
			starts[i] = start;
			angle = me._computeAngle(i);
			angles[i] = angle;
			start += angle;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
			me.updateElement(arcs[i], i, reset);
		}
	},

	/**
	 * @private
	 */
	_updateRadius: function() {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);

		chart.outerRadius = Math.max(minSize / 2, 0);
		chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

		me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
		me.innerRadius = me.outerRadius - chart.radiusLength;
	},

	updateElement: function(arc, index, reset) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var opts = chart.options;
		var animationOpts = opts.animation;
		var scale = chart.scale;
		var labels = chart.data.labels;

		var centerX = scale.xCenter;
		var centerY = scale.yCenter;

		// var negHalfPI = -0.5 * Math.PI;
		var datasetStartAngle = opts.startAngle;
		var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
		var startAngle = me._starts[index];
		var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);

		var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
		var options = arc._options || {};

		helpers$1.extend(arc, {
			// Utility
			_datasetIndex: me.index,
			_index: index,
			_scale: scale,

			// Desired view properties
			_model: {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				borderAlign: options.borderAlign,
				x: centerX,
				y: centerY,
				innerRadius: 0,
				outerRadius: reset ? resetRadius : distance,
				startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
				endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
				label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
			}
		});

		arc.pivot();
	},

	countVisibleElements: function() {
		var dataset = this.getDataset();
		var meta = this.getMeta();
		var count = 0;

		helpers$1.each(meta.data, function(element, index) {
			if (!isNaN(dataset.data[index]) && !element.hidden) {
				count++;
			}
		});

		return count;
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(arc) {
		var model = arc._model;
		var options = arc._options;
		var getHoverColor = helpers$1.getHoverColor;
		var valueOrDefault = helpers$1.valueOrDefault;

		arc.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
		};

		model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
	},

	/**
	 * @private
	 */
	_computeAngle: function(index) {
		var me = this;
		var count = this.getMeta().count;
		var dataset = me.getDataset();
		var meta = me.getMeta();

		if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
			return 0;
		}

		// Scriptable options
		var context = {
			chart: me.chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		return resolve$3([
			me.chart.options.elements.arc.angle,
			(2 * Math.PI) / count
		], context, index);
	}
});

core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));
core_defaults._set('pie', {
	cutoutPercentage: 0
});

// Pie charts are Doughnut chart with different defaults
var controller_pie = controller_doughnut;

var valueOrDefault$7 = helpers$1.valueOrDefault;

core_defaults._set('radar', {
	spanGaps: false,
	scale: {
		type: 'radialLinear'
	},
	elements: {
		line: {
			fill: 'start',
			tension: 0 // no bezier in radar
		}
	}
});

var controller_radar = core_datasetController.extend({
	datasetElementType: elements.Line,

	dataElementType: elements.Point,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderWidth',
		'borderColor',
		'borderCapStyle',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'fill'
	],

	/**
	 * @private
	 */
	_dataElementOptions: {
		backgroundColor: 'pointBackgroundColor',
		borderColor: 'pointBorderColor',
		borderWidth: 'pointBorderWidth',
		hitRadius: 'pointHitRadius',
		hoverBackgroundColor: 'pointHoverBackgroundColor',
		hoverBorderColor: 'pointHoverBorderColor',
		hoverBorderWidth: 'pointHoverBorderWidth',
		hoverRadius: 'pointHoverRadius',
		pointStyle: 'pointStyle',
		radius: 'pointRadius',
		rotation: 'pointRotation'
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.chart.scale.id;
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.chart.scale.id;
	},

	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var line = meta.dataset;
		var points = meta.data || [];
		var scale = me.chart.scale;
		var config = me._config;
		var i, ilen;

		// Compatibility: If the properties are defined with only the old name, use those values
		if (config.tension !== undefined && config.lineTension === undefined) {
			config.lineTension = config.tension;
		}

		// Utility
		line._scale = scale;
		line._datasetIndex = me.index;
		// Data
		line._children = points;
		line._loop = true;
		// Model
		line._model = me._resolveDatasetElementOptions(line);

		line.pivot();

		// Update Points
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			me.updateElement(points[i], i, reset);
		}

		// Update bezier control points
		me.updateBezierControlPoints();

		// Now pivot the point for animation
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			points[i].pivot();
		}
	},

	updateElement: function(point, index, reset) {
		var me = this;
		var custom = point.custom || {};
		var dataset = me.getDataset();
		var scale = me.chart.scale;
		var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
		var options = me._resolveDataElementOptions(point, index);
		var lineModel = me.getMeta().dataset._model;
		var x = reset ? scale.xCenter : pointPosition.x;
		var y = reset ? scale.yCenter : pointPosition.y;

		// Utility
		point._scale = scale;
		point._options = options;
		point._datasetIndex = me.index;
		point._index = index;

		// Desired view properties
		point._model = {
			x: x, // value not used in dataset scale, but we want a consistent API between scales
			y: y,
			skip: custom.skip || isNaN(x) || isNaN(y),
			// Appearance
			radius: options.radius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			tension: valueOrDefault$7(custom.tension, lineModel ? lineModel.tension : 0),

			// Tooltip
			hitRadius: options.hitRadius
		};
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function() {
		var me = this;
		var config = me._config;
		var options = me.chart.options;
		var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

		values.spanGaps = valueOrDefault$7(config.spanGaps, options.spanGaps);
		values.tension = valueOrDefault$7(config.lineTension, options.elements.line.tension);

		return values;
	},

	updateBezierControlPoints: function() {
		var me = this;
		var meta = me.getMeta();
		var area = me.chart.chartArea;
		var points = meta.data || [];
		var i, ilen, model, controlPoints;

		// Only consider points that are drawn in case the spanGaps option is used
		if (meta.dataset._model.spanGaps) {
			points = points.filter(function(pt) {
				return !pt._model.skip;
			});
		}

		function capControlPoint(pt, min, max) {
			return Math.max(Math.min(pt, max), min);
		}

		for (i = 0, ilen = points.length; i < ilen; ++i) {
			model = points[i]._model;
			controlPoints = helpers$1.splineCurve(
				helpers$1.previousItem(points, i, true)._model,
				model,
				helpers$1.nextItem(points, i, true)._model,
				model.tension
			);

			// Prevent the bezier going outside of the bounds of the graph
			model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
			model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
			model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
			model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
		}
	},

	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$7(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$7(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$7(options.hoverBorderWidth, options.borderWidth);
		model.radius = valueOrDefault$7(options.hoverRadius, options.radius);
	}
});

core_defaults._set('scatter', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			id: 'x-axis-1',    // need an ID so datasets can reference the scale
			type: 'linear',    // scatter should not use a category axis
			position: 'bottom'
		}],
		yAxes: [{
			id: 'y-axis-1',
			type: 'linear',
			position: 'left'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				return '';     // doesn't make sense for scatter since data are formatted as a point
			},
			label: function(item) {
				return '(' + item.xLabel + ', ' + item.yLabel + ')';
			}
		}
	}
});

core_defaults._set('global', {
	datasets: {
		scatter: {
			showLine: false
		}
	}
});

// Scatter charts use line controllers
var controller_scatter = controller_line;

// NOTE export a map in which the key represents the controller type, not
// the class, and so must be CamelCase in order to be correctly retrieved
// by the controller in core.controller.js (`controllers[meta.type]`).

var controllers = {
	bar: controller_bar,
	bubble: controller_bubble,
	doughnut: controller_doughnut,
	horizontalBar: controller_horizontalBar,
	line: controller_line,
	polarArea: controller_polarArea,
	pie: controller_pie,
	radar: controller_radar,
	scatter: controller_scatter
};

/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {object} the event position
 */
function getRelativePosition(e, chart) {
	if (e.native) {
		return {
			x: e.x,
			y: e.y
		};
	}

	return helpers$1.getRelativePosition(e, chart);
}

/**
 * Helper function to traverse all of the visible elements in the chart
 * @param {Chart} chart - the chart
 * @param {function} handler - the callback to execute for each visible item
 */
function parseVisibleItems(chart, handler) {
	var metasets = chart._getSortedVisibleDatasetMetas();
	var metadata, i, j, ilen, jlen, element;

	for (i = 0, ilen = metasets.length; i < ilen; ++i) {
		metadata = metasets[i].data;
		for (j = 0, jlen = metadata.length; j < jlen; ++j) {
			element = metadata[j];
			if (!element._view.skip) {
				handler(element);
			}
		}
	}
}

/**
 * Helper function to get the items that intersect the event position
 * @param {ChartElement[]} items - elements to filter
 * @param {object} position - the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */
function getIntersectItems(chart, position) {
	var elements = [];

	parseVisibleItems(chart, function(element) {
		if (element.inRange(position.x, position.y)) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param {Chart} chart - the chart to look at elements from
 * @param {object} position - the point to be nearest to
 * @param {boolean} intersect - if true, only consider items that intersect the position
 * @param {function} distanceMetric - function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */
function getNearestItems(chart, position, intersect, distanceMetric) {
	var minDistance = Number.POSITIVE_INFINITY;
	var nearestItems = [];

	parseVisibleItems(chart, function(element) {
		if (intersect && !element.inRange(position.x, position.y)) {
			return;
		}

		var center = element.getCenterPoint();
		var distance = distanceMetric(position, center);
		if (distance < minDistance) {
			nearestItems = [element];
			minDistance = distance;
		} else if (distance === minDistance) {
			// Can have multiple items at the same distance in which case we sort by size
			nearestItems.push(element);
		}
	});

	return nearestItems;
}

/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {string} axis - the axis mode. x|y|xy
 */
function getDistanceMetricForAxis(axis) {
	var useX = axis.indexOf('x') !== -1;
	var useY = axis.indexOf('y') !== -1;

	return function(pt1, pt2) {
		var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
		var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	};
}

function indexMode(chart, e, options) {
	var position = getRelativePosition(e, chart);
	// Default axis for index mode is 'x' to match old behaviour
	options.axis = options.axis || 'x';
	var distanceMetric = getDistanceMetricForAxis(options.axis);
	var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
	var elements = [];

	if (!items.length) {
		return [];
	}

	chart._getSortedVisibleDatasetMetas().forEach(function(meta) {
		var element = meta.data[items[0]._index];

		// don't count items that are skipped (null data)
		if (element && !element._view.skip) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * @interface IInteractionOptions
 */
/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */

/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */
var core_interaction = {
	// Helper function for different modes
	modes: {
		single: function(chart, e) {
			var position = getRelativePosition(e, chart);
			var elements = [];

			parseVisibleItems(chart, function(element) {
				if (element.inRange(position.x, position.y)) {
					elements.push(element);
					return elements;
				}
			});

			return elements.slice(0, 1);
		},

		/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */
		label: indexMode,

		/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		index: indexMode,

		/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		dataset: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

			if (items.length > 0) {
				items = chart.getDatasetMeta(items[0]._datasetIndex).data;
			}

			return items;
		},

		/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */
		'x-axis': function(chart, e) {
			return indexMode(chart, e, {intersect: false});
		},

		/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		point: function(chart, e) {
			var position = getRelativePosition(e, chart);
			return getIntersectItems(chart, position);
		},

		/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		nearest: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			return getNearestItems(chart, position, options.intersect, distanceMetric);
		},

		/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		x: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inXRange(position.x)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		},

		/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		y: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inYRange(position.y)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		}
	}
};

var extend = helpers$1.extend;

function filterByPosition(array, position) {
	return helpers$1.where(array, function(v) {
		return v.pos === position;
	});
}

function sortByWeight(array, reverse) {
	return array.sort(function(a, b) {
		var v0 = reverse ? b : a;
		var v1 = reverse ? a : b;
		return v0.weight === v1.weight ?
			v0.index - v1.index :
			v0.weight - v1.weight;
	});
}

function wrapBoxes(boxes) {
	var layoutBoxes = [];
	var i, ilen, box;

	for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
		box = boxes[i];
		layoutBoxes.push({
			index: i,
			box: box,
			pos: box.position,
			horizontal: box.isHorizontal(),
			weight: box.weight
		});
	}
	return layoutBoxes;
}

function setLayoutDims(layouts, params) {
	var i, ilen, layout;
	for (i = 0, ilen = layouts.length; i < ilen; ++i) {
		layout = layouts[i];
		// store width used instead of chartArea.w in fitBoxes
		layout.width = layout.horizontal
			? layout.box.fullWidth && params.availableWidth
			: params.vBoxMaxWidth;
		// store height used instead of chartArea.h in fitBoxes
		layout.height = layout.horizontal && params.hBoxMaxHeight;
	}
}

function buildLayoutBoxes(boxes) {
	var layoutBoxes = wrapBoxes(boxes);
	var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
	var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
	var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
	var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));

	return {
		leftAndTop: left.concat(top),
		rightAndBottom: right.concat(bottom),
		chartArea: filterByPosition(layoutBoxes, 'chartArea'),
		vertical: left.concat(right),
		horizontal: top.concat(bottom)
	};
}

function getCombinedMax(maxPadding, chartArea, a, b) {
	return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}

function updateDims(chartArea, params, layout) {
	var box = layout.box;
	var maxPadding = chartArea.maxPadding;
	var newWidth, newHeight;

	if (layout.size) {
		// this layout was already counted for, lets first reduce old size
		chartArea[layout.pos] -= layout.size;
	}
	layout.size = layout.horizontal ? box.height : box.width;
	chartArea[layout.pos] += layout.size;

	if (box.getPadding) {
		var boxPadding = box.getPadding();
		maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
		maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
		maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
		maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
	}

	newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
	newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');

	if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
		chartArea.w = newWidth;
		chartArea.h = newHeight;

		// return true if chart area changed in layout's direction
		return layout.horizontal ? newWidth !== chartArea.w : newHeight !== chartArea.h;
	}
}

function handleMaxPadding(chartArea) {
	var maxPadding = chartArea.maxPadding;

	function updatePos(pos) {
		var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
		chartArea[pos] += change;
		return change;
	}
	chartArea.y += updatePos('top');
	chartArea.x += updatePos('left');
	updatePos('right');
	updatePos('bottom');
}

function getMargins(horizontal, chartArea) {
	var maxPadding = chartArea.maxPadding;

	function marginForPositions(positions) {
		var margin = {left: 0, top: 0, right: 0, bottom: 0};
		positions.forEach(function(pos) {
			margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
		});
		return margin;
	}

	return horizontal
		? marginForPositions(['left', 'right'])
		: marginForPositions(['top', 'bottom']);
}

function fitBoxes(boxes, chartArea, params) {
	var refitBoxes = [];
	var i, ilen, layout, box, refit, changed;

	for (i = 0, ilen = boxes.length; i < ilen; ++i) {
		layout = boxes[i];
		box = layout.box;

		box.update(
			layout.width || chartArea.w,
			layout.height || chartArea.h,
			getMargins(layout.horizontal, chartArea)
		);
		if (updateDims(chartArea, params, layout)) {
			changed = true;
			if (refitBoxes.length) {
				// Dimensions changed and there were non full width boxes before this
				// -> we have to refit those
				refit = true;
			}
		}
		if (!box.fullWidth) { // fullWidth boxes don't need to be re-fitted in any case
			refitBoxes.push(layout);
		}
	}

	return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
}

function placeBoxes(boxes, chartArea, params) {
	var userPadding = params.padding;
	var x = chartArea.x;
	var y = chartArea.y;
	var i, ilen, layout, box;

	for (i = 0, ilen = boxes.length; i < ilen; ++i) {
		layout = boxes[i];
		box = layout.box;
		if (layout.horizontal) {
			box.left = box.fullWidth ? userPadding.left : chartArea.left;
			box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
			box.top = y;
			box.bottom = y + box.height;
			box.width = box.right - box.left;
			y = box.bottom;
		} else {
			box.left = x;
			box.right = x + box.width;
			box.top = chartArea.top;
			box.bottom = chartArea.top + chartArea.h;
			box.height = box.bottom - box.top;
			x = box.right;
		}
	}

	chartArea.x = x;
	chartArea.y = y;
}

core_defaults._set('global', {
	layout: {
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	}
});

/**
 * @interface ILayoutItem
 * @prop {string} position - The position of the item in the chart layout. Possible values are
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
 * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
 * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
 * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
 * @prop {function} update - Takes two parameters: width and height. Returns size of item
 * @prop {function} getPadding -  Returns an object with padding on the edges
 * @prop {number} width - Width of item. Must be valid after update()
 * @prop {number} height - Height of item. Must be valid after update()
 * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
 * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
 * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
 * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
 */

// The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.
var core_layouts = {
	defaults: {},

	/**
	 * Register a box to a chart.
	 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
	 * @param {Chart} chart - the chart to use
	 * @param {ILayoutItem} item - the item to add to be layed out
	 */
	addBox: function(chart, item) {
		if (!chart.boxes) {
			chart.boxes = [];
		}

		// initialize item with default values
		item.fullWidth = item.fullWidth || false;
		item.position = item.position || 'top';
		item.weight = item.weight || 0;
		item._layers = item._layers || function() {
			return [{
				z: 0,
				draw: function() {
					item.draw.apply(item, arguments);
				}
			}];
		};

		chart.boxes.push(item);
	},

	/**
	 * Remove a layoutItem from a chart
	 * @param {Chart} chart - the chart to remove the box from
	 * @param {ILayoutItem} layoutItem - the item to remove from the layout
	 */
	removeBox: function(chart, layoutItem) {
		var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
		if (index !== -1) {
			chart.boxes.splice(index, 1);
		}
	},

	/**
	 * Sets (or updates) options on the given `item`.
	 * @param {Chart} chart - the chart in which the item lives (or will be added to)
	 * @param {ILayoutItem} item - the item to configure with the given options
	 * @param {object} options - the new item options.
	 */
	configure: function(chart, item, options) {
		var props = ['fullWidth', 'position', 'weight'];
		var ilen = props.length;
		var i = 0;
		var prop;

		for (; i < ilen; ++i) {
			prop = props[i];
			if (options.hasOwnProperty(prop)) {
				item[prop] = options[prop];
			}
		}
	},

	/**
	 * Fits boxes of the given chart into the given size by having each box measure itself
	 * then running a fitting algorithm
	 * @param {Chart} chart - the chart
	 * @param {number} width - the width to fit into
	 * @param {number} height - the height to fit into
	 */
	update: function(chart, width, height) {
		if (!chart) {
			return;
		}

		var layoutOptions = chart.options.layout || {};
		var padding = helpers$1.options.toPadding(layoutOptions.padding);

		var availableWidth = width - padding.width;
		var availableHeight = height - padding.height;
		var boxes = buildLayoutBoxes(chart.boxes);
		var verticalBoxes = boxes.vertical;
		var horizontalBoxes = boxes.horizontal;

		// Essentially we now have any number of boxes on each of the 4 sides.
		// Our canvas looks like the following.
		// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
		// B1 is the bottom axis
		// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
		// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
		// an error will be thrown.
		//
		// |----------------------------------------------------|
		// |                  T1 (Full Width)                   |
		// |----------------------------------------------------|
		// |    |    |                 T2                  |    |
		// |    |----|-------------------------------------|----|
		// |    |    | C1 |                           | C2 |    |
		// |    |    |----|                           |----|    |
		// |    |    |                                     |    |
		// | L1 | L2 |           ChartArea (C0)            | R1 |
		// |    |    |                                     |    |
		// |    |    |----|                           |----|    |
		// |    |    | C3 |                           | C4 |    |
		// |    |----|-------------------------------------|----|
		// |    |    |                 B1                  |    |
		// |----------------------------------------------------|
		// |                  B2 (Full Width)                   |
		// |----------------------------------------------------|
		//

		var params = Object.freeze({
			outerWidth: width,
			outerHeight: height,
			padding: padding,
			availableWidth: availableWidth,
			vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
			hBoxMaxHeight: availableHeight / 2
		});
		var chartArea = extend({
			maxPadding: extend({}, padding),
			w: availableWidth,
			h: availableHeight,
			x: padding.left,
			y: padding.top
		}, padding);

		setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);

		// First fit vertical boxes
		fitBoxes(verticalBoxes, chartArea, params);

		// Then fit horizontal boxes
		if (fitBoxes(horizontalBoxes, chartArea, params)) {
			// if the area changed, re-fit vertical boxes
			fitBoxes(verticalBoxes, chartArea, params);
		}

		handleMaxPadding(chartArea);

		// Finally place the boxes to correct coordinates
		placeBoxes(boxes.leftAndTop, chartArea, params);

		// Move to opposite side of chart
		chartArea.x += chartArea.w;
		chartArea.y += chartArea.h;

		placeBoxes(boxes.rightAndBottom, chartArea, params);

		chart.chartArea = {
			left: chartArea.left,
			top: chartArea.top,
			right: chartArea.left + chartArea.w,
			bottom: chartArea.top + chartArea.h
		};

		// Finally update boxes in chartArea (radial scale for example)
		helpers$1.each(boxes.chartArea, function(layout) {
			var box = layout.box;
			extend(box, chart.chartArea);
			box.update(chartArea.w, chartArea.h);
		});
	}
};

/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */

var platform_basic = {
	acquireContext: function(item) {
		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		return item && item.getContext('2d') || null;
	}
};

var platform_dom = "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n";

var platform_dom$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
'default': platform_dom
});

var stylesheet = getCjsExportFromNamespace(platform_dom$1);

var EXPANDO_KEY = '$chartjs';
var CSS_PREFIX = 'chartjs-';
var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];

/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */
var EVENT_TYPES = {
	touchstart: 'mousedown',
	touchmove: 'mousemove',
	touchend: 'mouseup',
	pointerenter: 'mouseenter',
	pointerdown: 'mousedown',
	pointermove: 'mousemove',
	pointerup: 'mouseup',
	pointerleave: 'mouseout',
	pointerout: 'mouseout'
};

/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {number} Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
	var value = helpers$1.getStyle(element, property);
	var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
	return matches ? Number(matches[1]) : undefined;
}

/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
function initCanvas(canvas, config) {
	var style = canvas.style;

	// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
	// returns null or '' if no explicit value has been set to the canvas attribute.
	var renderHeight = canvas.getAttribute('height');
	var renderWidth = canvas.getAttribute('width');

	// Chart.js modifies some canvas values that we want to restore on destroy
	canvas[EXPANDO_KEY] = {
		initial: {
			height: renderHeight,
			width: renderWidth,
			style: {
				display: style.display,
				height: style.height,
				width: style.width
			}
		}
	};

	// Force canvas to display as block to avoid extra space caused by inline
	// elements, which would interfere with the responsive resize process.
	// https://github.com/chartjs/Chart.js/issues/2538
	style.display = style.display || 'block';

	if (renderWidth === null || renderWidth === '') {
		var displayWidth = readUsedSize(canvas, 'width');
		if (displayWidth !== undefined) {
			canvas.width = displayWidth;
		}
	}

	if (renderHeight === null || renderHeight === '') {
		if (canvas.style.height === '') {
			// If no explicit render height and style height, let's apply the aspect ratio,
			// which one can be specified by the user but also by charts as default option
			// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
			canvas.height = canvas.width / (config.options.aspectRatio || 2);
		} else {
			var displayHeight = readUsedSize(canvas, 'height');
			if (displayWidth !== undefined) {
				canvas.height = displayHeight;
			}
		}
	}

	return canvas;
}

/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = (function() {
	var supports = false;
	try {
		var options = Object.defineProperty({}, 'passive', {
			// eslint-disable-next-line getter-return
			get: function() {
				supports = true;
			}
		});
		window.addEventListener('e', null, options);
	} catch (e) {
		// continue regardless of error
	}
	return supports;
}());

// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;

function addListener(node, type, listener) {
	node.addEventListener(type, listener, eventListenerOptions);
}

function removeListener(node, type, listener) {
	node.removeEventListener(type, listener, eventListenerOptions);
}

function createEvent(type, chart, x, y, nativeEvent) {
	return {
		type: type,
		chart: chart,
		native: nativeEvent || null,
		x: x !== undefined ? x : null,
		y: y !== undefined ? y : null,
	};
}

function fromNativeEvent(event, chart) {
	var type = EVENT_TYPES[event.type] || event.type;
	var pos = helpers$1.getRelativePosition(event, chart);
	return createEvent(type, chart, pos.x, pos.y, event);
}

function throttled(fn, thisArg) {
	var ticking = false;
	var args = [];

	return function() {
		args = Array.prototype.slice.call(arguments);
		thisArg = thisArg || this;

		if (!ticking) {
			ticking = true;
			helpers$1.requestAnimFrame.call(window, function() {
				ticking = false;
				fn.apply(thisArg, args);
			});
		}
	};
}

function createDiv(cls) {
	var el = document.createElement('div');
	el.className = cls || '';
	return el;
}

// Implementation based on https://github.com/marcj/css-element-queries
function createResizer(handler) {
	var maxSize = 1000000;

	// NOTE(SB) Don't use innerHTML because it could be considered unsafe.
	// https://github.com/chartjs/Chart.js/issues/5902
	var resizer = createDiv(CSS_SIZE_MONITOR);
	var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
	var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');

	expand.appendChild(createDiv());
	shrink.appendChild(createDiv());

	resizer.appendChild(expand);
	resizer.appendChild(shrink);
	resizer._reset = function() {
		expand.scrollLeft = maxSize;
		expand.scrollTop = maxSize;
		shrink.scrollLeft = maxSize;
		shrink.scrollTop = maxSize;
	};

	var onScroll = function() {
		resizer._reset();
		handler();
	};

	addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
	addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));

	return resizer;
}

// https://davidwalsh.name/detect-node-insertion
function watchForRender(node, handler) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
	var proxy = expando.renderProxy = function(e) {
		if (e.animationName === CSS_RENDER_ANIMATION) {
			handler();
		}
	};

	helpers$1.each(ANIMATION_START_EVENTS, function(type) {
		addListener(node, type, proxy);
	});

	// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
	// is removed then added back immediately (same animation frame?). Accessing the
	// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
	// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
	// https://github.com/chartjs/Chart.js/issues/4737
	expando.reflow = !!node.offsetParent;

	node.classList.add(CSS_RENDER_MONITOR);
}

function unwatchForRender(node) {
	var expando = node[EXPANDO_KEY] || {};
	var proxy = expando.renderProxy;

	if (proxy) {
		helpers$1.each(ANIMATION_START_EVENTS, function(type) {
			removeListener(node, type, proxy);
		});

		delete expando.renderProxy;
	}

	node.classList.remove(CSS_RENDER_MONITOR);
}

function addResizeListener(node, listener, chart) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

	// Let's keep track of this added resizer and thus avoid DOM query when removing it.
	var resizer = expando.resizer = createResizer(throttled(function() {
		if (expando.resizer) {
			var container = chart.options.maintainAspectRatio && node.parentNode;
			var w = container ? container.clientWidth : 0;
			listener(createEvent('resize', chart));
			if (container && container.clientWidth < w && chart.canvas) {
				// If the container size shrank during chart resize, let's assume
				// scrollbar appeared. So we resize again with the scrollbar visible -
				// effectively making chart smaller and the scrollbar hidden again.
				// Because we are inside `throttled`, and currently `ticking`, scroll
				// events are ignored during this whole 2 resize process.
				// If we assumed wrong and something else happened, we are resizing
				// twice in a frame (potential performance issue)
				listener(createEvent('resize', chart));
			}
		}
	}));

	// The resizer needs to be attached to the node parent, so we first need to be
	// sure that `node` is attached to the DOM before injecting the resizer element.
	watchForRender(node, function() {
		if (expando.resizer) {
			var container = node.parentNode;
			if (container && container !== resizer.parentNode) {
				container.insertBefore(resizer, container.firstChild);
			}

			// The container size might have changed, let's reset the resizer state.
			resizer._reset();
		}
	});
}

function removeResizeListener(node) {
	var expando = node[EXPANDO_KEY] || {};
	var resizer = expando.resizer;

	delete expando.resizer;
	unwatchForRender(node);

	if (resizer && resizer.parentNode) {
		resizer.parentNode.removeChild(resizer);
	}
}

/**
 * Injects CSS styles inline if the styles are not already present.
 * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
 * @param {string} css - the CSS to be injected.
 */
function injectCSS(rootNode, css) {
	// https://stackoverflow.com/q/3922139
	var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});
	if (!expando.containsStyles) {
		expando.containsStyles = true;
		css = '/* Chart.js */\n' + css;
		var style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.appendChild(document.createTextNode(css));
		rootNode.appendChild(style);
	}
}

var platform_dom$2 = {
	/**
	 * When `true`, prevents the automatic injection of the stylesheet required to
	 * correctly detect when the chart is added to the DOM and then resized. This
	 * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
	 * to be manually imported to make this library compatible with any CSP.
	 * See https://github.com/chartjs/Chart.js/issues/5208
	 */
	disableCSSInjection: false,

	/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */
	_enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

	/**
	 * Initializes resources that depend on platform options.
	 * @param {HTMLCanvasElement} canvas - The Canvas element.
	 * @private
	 */
	_ensureLoaded: function(canvas) {
		if (!this.disableCSSInjection) {
			// If the canvas is in a shadow DOM, then the styles must also be inserted
			// into the same shadow DOM.
			// https://github.com/chartjs/Chart.js/issues/5763
			var root = canvas.getRootNode ? canvas.getRootNode() : document;
			var targetNode = root.host ? root : document.head;
			injectCSS(targetNode, stylesheet);
		}
	},

	acquireContext: function(item, config) {
		if (typeof item === 'string') {
			item = document.getElementById(item);
		} else if (item.length) {
			// Support for array based queries (such as jQuery)
			item = item[0];
		}

		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		// To prevent canvas fingerprinting, some add-ons undefine the getContext
		// method, for example: https://github.com/kkapsner/CanvasBlocker
		// https://github.com/chartjs/Chart.js/issues/2807
		var context = item && item.getContext && item.getContext('2d');

		// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
		// inside an iframe or when running in a protected environment. We could guess the
		// types from their toString() value but let's keep things flexible and assume it's
		// a sufficient condition if the item has a context2D which has item as `canvas`.
		// https://github.com/chartjs/Chart.js/issues/3887
		// https://github.com/chartjs/Chart.js/issues/4102
		// https://github.com/chartjs/Chart.js/issues/4152
		if (context && context.canvas === item) {
			// Load platform resources on first chart creation, to make it possible to
			// import the library before setting platform options.
			this._ensureLoaded(item);
			initCanvas(item, config);
			return context;
		}

		return null;
	},

	releaseContext: function(context) {
		var canvas = context.canvas;
		if (!canvas[EXPANDO_KEY]) {
			return;
		}

		var initial = canvas[EXPANDO_KEY].initial;
		['height', 'width'].forEach(function(prop) {
			var value = initial[prop];
			if (helpers$1.isNullOrUndef(value)) {
				canvas.removeAttribute(prop);
			} else {
				canvas.setAttribute(prop, value);
			}
		});

		helpers$1.each(initial.style || {}, function(value, key) {
			canvas.style[key] = value;
		});

		// The canvas render size might have been changed (and thus the state stack discarded),
		// we can't use save() and restore() to restore the initial state. So make sure that at
		// least the canvas context is reset to the default state by setting the canvas width.
		// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
		// eslint-disable-next-line no-self-assign
		canvas.width = canvas.width;

		delete canvas[EXPANDO_KEY];
	},

	addEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			addResizeListener(canvas, listener, chart);
			return;
		}

		var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
		var proxies = expando.proxies || (expando.proxies = {});
		var proxy = proxies[chart.id + '_' + type] = function(event) {
			listener(fromNativeEvent(event, chart));
		};

		addListener(canvas, type, proxy);
	},

	removeEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			removeResizeListener(canvas);
			return;
		}

		var expando = listener[EXPANDO_KEY] || {};
		var proxies = expando.proxies || {};
		var proxy = proxies[chart.id + '_' + type];
		if (!proxy) {
			return;
		}

		removeListener(canvas, type, proxy);
	}
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers$1.addEvent = addListener;

/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers$1.removeEvent = removeListener;

// @TODO Make possible to select another platform at build time.
var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;

/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */
var platform = helpers$1.extend({
	/**
	 * @since 2.7.0
	 */
	initialize: function() {},

	/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */
	acquireContext: function() {},

	/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {boolean} true if the method succeeded, else false
	 */
	releaseContext: function() {},

	/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {string} type - The ({@link IEvent}) type to listen for
	 * @param {function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */
	addEventListener: function() {},

	/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart - Chart from which to remove the listener
	 * @param {string} type - The ({@link IEvent}) type to remove
	 * @param {function} listener - The listener function to remove from the event target.
	 */
	removeEventListener: function() {}

}, implementation);

core_defaults._set('global', {
	plugins: {}
});

/**
 * The plugin service singleton
 * @namespace Chart.plugins
 * @since 2.1.0
 */
var core_plugins = {
	/**
	 * Globally registered plugins.
	 * @private
	 */
	_plugins: [],

	/**
	 * This identifier is used to invalidate the descriptors cache attached to each chart
	 * when a global plugin is registered or unregistered. In this case, the cache ID is
	 * incremented and descriptors are regenerated during following API calls.
	 * @private
	 */
	_cacheId: 0,

	/**
	 * Registers the given plugin(s) if not already registered.
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
	 */
	register: function(plugins) {
		var p = this._plugins;
		([]).concat(plugins).forEach(function(plugin) {
			if (p.indexOf(plugin) === -1) {
				p.push(plugin);
			}
		});

		this._cacheId++;
	},

	/**
	 * Unregisters the given plugin(s) only if registered.
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
	 */
	unregister: function(plugins) {
		var p = this._plugins;
		([]).concat(plugins).forEach(function(plugin) {
			var idx = p.indexOf(plugin);
			if (idx !== -1) {
				p.splice(idx, 1);
			}
		});

		this._cacheId++;
	},

	/**
	 * Remove all registered plugins.
	 * @since 2.1.5
	 */
	clear: function() {
		this._plugins = [];
		this._cacheId++;
	},

	/**
	 * Returns the number of registered plugins?
	 * @returns {number}
	 * @since 2.1.5
	 */
	count: function() {
		return this._plugins.length;
	},

	/**
	 * Returns all registered plugin instances.
	 * @returns {IPlugin[]} array of plugin objects.
	 * @since 2.1.5
	 */
	getAll: function() {
		return this._plugins;
	},

	/**
	 * Calls enabled plugins for `chart` on the specified hook and with the given args.
	 * This method immediately returns as soon as a plugin explicitly returns false. The
	 * returned value can be used, for instance, to interrupt the current action.
	 * @param {Chart} chart - The chart instance for which plugins should be called.
	 * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
	 * @param {Array} [args] - Extra arguments to apply to the hook call.
	 * @returns {boolean} false if any of the plugins return false, else returns true.
	 */
	notify: function(chart, hook, args) {
		var descriptors = this.descriptors(chart);
		var ilen = descriptors.length;
		var i, descriptor, plugin, params, method;

		for (i = 0; i < ilen; ++i) {
			descriptor = descriptors[i];
			plugin = descriptor.plugin;
			method = plugin[hook];
			if (typeof method === 'function') {
				params = [chart].concat(args || []);
				params.push(descriptor.options);
				if (method.apply(plugin, params) === false) {
					return false;
				}
			}
		}

		return true;
	},

	/**
	 * Returns descriptors of enabled plugins for the given chart.
	 * @returns {object[]} [{ plugin, options }]
	 * @private
	 */
	descriptors: function(chart) {
		var cache = chart.$plugins || (chart.$plugins = {});
		if (cache.id === this._cacheId) {
			return cache.descriptors;
		}

		var plugins = [];
		var descriptors = [];
		var config = (chart && chart.config) || {};
		var options = (config.options && config.options.plugins) || {};

		this._plugins.concat(config.plugins || []).forEach(function(plugin) {
			var idx = plugins.indexOf(plugin);
			if (idx !== -1) {
				return;
			}

			var id = plugin.id;
			var opts = options[id];
			if (opts === false) {
				return;
			}

			if (opts === true) {
				opts = helpers$1.clone(core_defaults.global.plugins[id]);
			}

			plugins.push(plugin);
			descriptors.push({
				plugin: plugin,
				options: opts || {}
			});
		});

		cache.descriptors = descriptors;
		cache.id = this._cacheId;
		return descriptors;
	},

	/**
	 * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
	 * but in some cases, this reference can be changed by the user when updating options.
	 * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
	 * @private
	 */
	_invalidate: function(chart) {
		delete chart.$plugins;
	}
};

var core_scaleService = {
	// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
	// use the new chart options to grab the correct scale
	constructors: {},
	// Use a registration function so that we can move to an ES6 map when we no longer need to support
	// old browsers

	// Scale config defaults
	defaults: {},
	registerScaleType: function(type, scaleConstructor, scaleDefaults) {
		this.constructors[type] = scaleConstructor;
		this.defaults[type] = helpers$1.clone(scaleDefaults);
	},
	getScaleConstructor: function(type) {
		return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
	},
	getScaleDefaults: function(type) {
		// Return the scale defaults merged with the global settings so that we always use the latest ones
		return this.defaults.hasOwnProperty(type) ? helpers$1.merge({}, [core_defaults.scale, this.defaults[type]]) : {};
	},
	updateScaleDefaults: function(type, additions) {
		var me = this;
		if (me.defaults.hasOwnProperty(type)) {
			me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
		}
	},
	addScalesToLayout: function(chart) {
		// Adds each scale to the chart.boxes array to be sized accordingly
		helpers$1.each(chart.scales, function(scale) {
			// Set ILayoutItem parameters for backwards compatibility
			scale.fullWidth = scale.options.fullWidth;
			scale.position = scale.options.position;
			scale.weight = scale.options.weight;
			core_layouts.addBox(chart, scale);
		});
	}
};

var valueOrDefault$8 = helpers$1.valueOrDefault;
var getRtlHelper = helpers$1.rtl.getRtlAdapter;

core_defaults._set('global', {
	tooltips: {
		enabled: true,
		custom: null,
		mode: 'nearest',
		position: 'average',
		intersect: true,
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontStyle: 'bold',
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: '#fff',
		titleAlign: 'left',
		bodySpacing: 2,
		bodyFontColor: '#fff',
		bodyAlign: 'left',
		footerFontStyle: 'bold',
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: '#fff',
		footerAlign: 'left',
		yPadding: 6,
		xPadding: 6,
		caretPadding: 2,
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		displayColors: true,
		borderColor: 'rgba(0,0,0,0)',
		borderWidth: 0,
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers$1.noop,
			title: function(tooltipItems, data) {
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];
					if (item.label) {
						title = item.label;
					} else if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers$1.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers$1.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers$1.noop,
			label: function(tooltipItem, data) {
				var label = data.datasets[tooltipItem.datasetIndex].label || '';

				if (label) {
					label += ': ';
				}
				if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
					label += tooltipItem.value;
				} else {
					label += tooltipItem.yLabel;
				}
				return label;
			},
			labelColor: function(tooltipItem, chart) {
				var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			labelTextColor: function() {
				return this._options.bodyFontColor;
			},
			afterLabel: helpers$1.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers$1.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers$1.noop,
			footer: helpers$1.noop,
			afterFooter: helpers$1.noop
		}
	}
});

var positioners = {
	/**
	 * Average mode places the tooltip at the average position of the elements shown
	 * @function Chart.Tooltip.positioners.average
	 * @param elements {ChartElement[]} the elements being displayed in the tooltip
	 * @returns {object} tooltip position
	 */
	average: function(elements) {
		if (!elements.length) {
			return false;
		}

		var i, len;
		var x = 0;
		var y = 0;
		var count = 0;

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()) {
				var pos = el.tooltipPosition();
				x += pos.x;
				y += pos.y;
				++count;
			}
		}

		return {
			x: x / count,
			y: y / count
		};
	},

	/**
	 * Gets the tooltip position nearest of the item nearest to the event position
	 * @function Chart.Tooltip.positioners.nearest
	 * @param elements {Chart.Element[]} the tooltip elements
	 * @param eventPosition {object} the position of the event in canvas coordinates
	 * @returns {object} the tooltip position
	 */
	nearest: function(elements, eventPosition) {
		var x = eventPosition.x;
		var y = eventPosition.y;
		var minDistance = Number.POSITIVE_INFINITY;
		var i, len, nearestElement;

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()) {
				var center = el.getCenterPoint();
				var d = helpers$1.distanceBetweenPoints(eventPosition, center);

				if (d < minDistance) {
					minDistance = d;
					nearestElement = el;
				}
			}
		}

		if (nearestElement) {
			var tp = nearestElement.tooltipPosition();
			x = tp.x;
			y = tp.y;
		}

		return {
			x: x,
			y: y
		};
	}
};

// Helper to push or concat based on if the 2nd parameter is an array or not
function pushOrConcat(base, toPush) {
	if (toPush) {
		if (helpers$1.isArray(toPush)) {
			// base = base.concat(toPush);
			Array.prototype.push.apply(base, toPush);
		} else {
			base.push(toPush);
		}
	}

	return base;
}

/**
 * Returns array of strings split by newline
 * @param {string} value - The value to split by newline.
 * @returns {string[]} value if newline present - Returned from String split() method
 * @function
 */
function splitNewlines(str) {
	if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
		return str.split('\n');
	}
	return str;
}


/**
 * Private helper to create a tooltip item model
 * @param element - the chart element (point, arc, bar) to create the tooltip item for
 * @return new tooltip item
 */
function createTooltipItem(element) {
	var xScale = element._xScale;
	var yScale = element._yScale || element._scale; // handle radar || polarArea charts
	var index = element._index;
	var datasetIndex = element._datasetIndex;
	var controller = element._chart.getDatasetMeta(datasetIndex).controller;
	var indexScale = controller._getIndexScale();
	var valueScale = controller._getValueScale();

	return {
		xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
		yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
		label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',
		value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',
		index: index,
		datasetIndex: datasetIndex,
		x: element._model.x,
		y: element._model.y
	};
}

/**
 * Helper to get the reset model for the tooltip
 * @param tooltipOpts {object} the tooltip options
 */
function getBaseModel(tooltipOpts) {
	var globalDefaults = core_defaults.global;

	return {
		// Positioning
		xPadding: tooltipOpts.xPadding,
		yPadding: tooltipOpts.yPadding,
		xAlign: tooltipOpts.xAlign,
		yAlign: tooltipOpts.yAlign,

		// Drawing direction and text direction
		rtl: tooltipOpts.rtl,
		textDirection: tooltipOpts.textDirection,

		// Body
		bodyFontColor: tooltipOpts.bodyFontColor,
		_bodyFontFamily: valueOrDefault$8(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
		_bodyFontStyle: valueOrDefault$8(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
		_bodyAlign: tooltipOpts.bodyAlign,
		bodyFontSize: valueOrDefault$8(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
		bodySpacing: tooltipOpts.bodySpacing,

		// Title
		titleFontColor: tooltipOpts.titleFontColor,
		_titleFontFamily: valueOrDefault$8(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
		_titleFontStyle: valueOrDefault$8(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
		titleFontSize: valueOrDefault$8(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
		_titleAlign: tooltipOpts.titleAlign,
		titleSpacing: tooltipOpts.titleSpacing,
		titleMarginBottom: tooltipOpts.titleMarginBottom,

		// Footer
		footerFontColor: tooltipOpts.footerFontColor,
		_footerFontFamily: valueOrDefault$8(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
		_footerFontStyle: valueOrDefault$8(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
		footerFontSize: valueOrDefault$8(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
		_footerAlign: tooltipOpts.footerAlign,
		footerSpacing: tooltipOpts.footerSpacing,
		footerMarginTop: tooltipOpts.footerMarginTop,

		// Appearance
		caretSize: tooltipOpts.caretSize,
		cornerRadius: tooltipOpts.cornerRadius,
		backgroundColor: tooltipOpts.backgroundColor,
		opacity: 0,
		legendColorBackground: tooltipOpts.multiKeyBackground,
		displayColors: tooltipOpts.displayColors,
		borderColor: tooltipOpts.borderColor,
		borderWidth: tooltipOpts.borderWidth
	};
}

/**
 * Get the size of the tooltip
 */
function getTooltipSize(tooltip, model) {
	var ctx = tooltip._chart.ctx;

	var height = model.yPadding * 2; // Tooltip Padding
	var width = 0;

	// Count of all lines in the body
	var body = model.body;
	var combinedBodyLength = body.reduce(function(count, bodyItem) {
		return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
	}, 0);
	combinedBodyLength += model.beforeBody.length + model.afterBody.length;

	var titleLineCount = model.title.length;
	var footerLineCount = model.footer.length;
	var titleFontSize = model.titleFontSize;
	var bodyFontSize = model.bodyFontSize;
	var footerFontSize = model.footerFontSize;

	height += titleLineCount * titleFontSize; // Title Lines
	height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
	height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
	height += combinedBodyLength * bodyFontSize; // Body Lines
	height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
	height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
	height += footerLineCount * (footerFontSize); // Footer Lines
	height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

	// Title width
	var widthPadding = 0;
	var maxLineWidth = function(line) {
		width = Math.max(width, ctx.measureText(line).width + widthPadding);
	};

	ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
	helpers$1.each(model.title, maxLineWidth);

	// Body width
	ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
	helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

	// Body lines may include some extra width due to the color box
	widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
	helpers$1.each(body, function(bodyItem) {
		helpers$1.each(bodyItem.before, maxLineWidth);
		helpers$1.each(bodyItem.lines, maxLineWidth);
		helpers$1.each(bodyItem.after, maxLineWidth);
	});

	// Reset back to 0
	widthPadding = 0;

	// Footer width
	ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
	helpers$1.each(model.footer, maxLineWidth);

	// Add padding
	width += 2 * model.xPadding;

	return {
		width: width,
		height: height
	};
}

/**
 * Helper to get the alignment of a tooltip given the size
 */
function determineAlignment(tooltip, size) {
	var model = tooltip._model;
	var chart = tooltip._chart;
	var chartArea = tooltip._chart.chartArea;
	var xAlign = 'center';
	var yAlign = 'center';

	if (model.y < size.height) {
		yAlign = 'top';
	} else if (model.y > (chart.height - size.height)) {
		yAlign = 'bottom';
	}

	var lf, rf; // functions to determine left, right alignment
	var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
	var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
	var midX = (chartArea.left + chartArea.right) / 2;
	var midY = (chartArea.top + chartArea.bottom) / 2;

	if (yAlign === 'center') {
		lf = function(x) {
			return x <= midX;
		};
		rf = function(x) {
			return x > midX;
		};
	} else {
		lf = function(x) {
			return x <= (size.width / 2);
		};
		rf = function(x) {
			return x >= (chart.width - (size.width / 2));
		};
	}

	olf = function(x) {
		return x + size.width + model.caretSize + model.caretPadding > chart.width;
	};
	orf = function(x) {
		return x - size.width - model.caretSize - model.caretPadding < 0;
	};
	yf = function(y) {
		return y <= midY ? 'top' : 'bottom';
	};

	if (lf(model.x)) {
		xAlign = 'left';

		// Is tooltip too wide and goes over the right side of the chart.?
		if (olf(model.x)) {
			xAlign = 'center';
			yAlign = yf(model.y);
		}
	} else if (rf(model.x)) {
		xAlign = 'right';

		// Is tooltip too wide and goes outside left edge of canvas?
		if (orf(model.x)) {
			xAlign = 'center';
			yAlign = yf(model.y);
		}
	}

	var opts = tooltip._options;
	return {
		xAlign: opts.xAlign ? opts.xAlign : xAlign,
		yAlign: opts.yAlign ? opts.yAlign : yAlign
	};
}

/**
 * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
 */
function getBackgroundPoint(vm, size, alignment, chart) {
	// Background Position
	var x = vm.x;
	var y = vm.y;

	var caretSize = vm.caretSize;
	var caretPadding = vm.caretPadding;
	var cornerRadius = vm.cornerRadius;
	var xAlign = alignment.xAlign;
	var yAlign = alignment.yAlign;
	var paddingAndSize = caretSize + caretPadding;
	var radiusAndPadding = cornerRadius + caretPadding;

	if (xAlign === 'right') {
		x -= size.width;
	} else if (xAlign === 'center') {
		x -= (size.width / 2);
		if (x + size.width > chart.width) {
			x = chart.width - size.width;
		}
		if (x < 0) {
			x = 0;
		}
	}

	if (yAlign === 'top') {
		y += paddingAndSize;
	} else if (yAlign === 'bottom') {
		y -= size.height + paddingAndSize;
	} else {
		y -= (size.height / 2);
	}

	if (yAlign === 'center') {
		if (xAlign === 'left') {
			x += paddingAndSize;
		} else if (xAlign === 'right') {
			x -= paddingAndSize;
		}
	} else if (xAlign === 'left') {
		x -= radiusAndPadding;
	} else if (xAlign === 'right') {
		x += radiusAndPadding;
	}

	return {
		x: x,
		y: y
	};
}

function getAlignedX(vm, align) {
	return align === 'center'
		? vm.x + vm.width / 2
		: align === 'right'
			? vm.x + vm.width - vm.xPadding
			: vm.x + vm.xPadding;
}

/**
 * Helper to build before and after body lines
 */
function getBeforeAfterBodyLines(callback) {
	return pushOrConcat([], splitNewlines(callback));
}

var exports$4 = core_element.extend({
	initialize: function() {
		this._model = getBaseModel(this._options);
		this._lastActive = [];
	},

	// Get the title
	// Args are: (tooltipItem, data)
	getTitle: function() {
		var me = this;
		var opts = me._options;
		var callbacks = opts.callbacks;

		var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
		var title = callbacks.title.apply(me, arguments);
		var afterTitle = callbacks.afterTitle.apply(me, arguments);

		var lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeTitle));
		lines = pushOrConcat(lines, splitNewlines(title));
		lines = pushOrConcat(lines, splitNewlines(afterTitle));

		return lines;
	},

	// Args are: (tooltipItem, data)
	getBeforeBody: function() {
		return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
	},

	// Args are: (tooltipItem, data)
	getBody: function(tooltipItems, data) {
		var me = this;
		var callbacks = me._options.callbacks;
		var bodyItems = [];

		helpers$1.each(tooltipItems, function(tooltipItem) {
			var bodyItem = {
				before: [],
				lines: [],
				after: []
			};
			pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
			pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
			pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));

			bodyItems.push(bodyItem);
		});

		return bodyItems;
	},

	// Args are: (tooltipItem, data)
	getAfterBody: function() {
		return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
	},

	// Get the footer and beforeFooter and afterFooter lines
	// Args are: (tooltipItem, data)
	getFooter: function() {
		var me = this;
		var callbacks = me._options.callbacks;

		var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
		var footer = callbacks.footer.apply(me, arguments);
		var afterFooter = callbacks.afterFooter.apply(me, arguments);

		var lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeFooter));
		lines = pushOrConcat(lines, splitNewlines(footer));
		lines = pushOrConcat(lines, splitNewlines(afterFooter));

		return lines;
	},

	update: function(changed) {
		var me = this;
		var opts = me._options;

		// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
		// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
		// which breaks any animations.
		var existingModel = me._model;
		var model = me._model = getBaseModel(opts);
		var active = me._active;

		var data = me._data;

		// In the case where active.length === 0 we need to keep these at existing values for good animations
		var alignment = {
			xAlign: existingModel.xAlign,
			yAlign: existingModel.yAlign
		};
		var backgroundPoint = {
			x: existingModel.x,
			y: existingModel.y
		};
		var tooltipSize = {
			width: existingModel.width,
			height: existingModel.height
		};
		var tooltipPosition = {
			x: existingModel.caretX,
			y: existingModel.caretY
		};

		var i, len;

		if (active.length) {
			model.opacity = 1;

			var labelColors = [];
			var labelTextColors = [];
			tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);

			var tooltipItems = [];
			for (i = 0, len = active.length; i < len; ++i) {
				tooltipItems.push(createTooltipItem(active[i]));
			}

			// If the user provided a filter function, use it to modify the tooltip items
			if (opts.filter) {
				tooltipItems = tooltipItems.filter(function(a) {
					return opts.filter(a, data);
				});
			}

			// If the user provided a sorting function, use it to modify the tooltip items
			if (opts.itemSort) {
				tooltipItems = tooltipItems.sort(function(a, b) {
					return opts.itemSort(a, b, data);
				});
			}

			// Determine colors for boxes
			helpers$1.each(tooltipItems, function(tooltipItem) {
				labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
				labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
			});


			// Build the Text Lines
			model.title = me.getTitle(tooltipItems, data);
			model.beforeBody = me.getBeforeBody(tooltipItems, data);
			model.body = me.getBody(tooltipItems, data);
			model.afterBody = me.getAfterBody(tooltipItems, data);
			model.footer = me.getFooter(tooltipItems, data);

			// Initial positioning and colors
			model.x = tooltipPosition.x;
			model.y = tooltipPosition.y;
			model.caretPadding = opts.caretPadding;
			model.labelColors = labelColors;
			model.labelTextColors = labelTextColors;

			// data points
			model.dataPoints = tooltipItems;

			// We need to determine alignment of the tooltip
			tooltipSize = getTooltipSize(this, model);
			alignment = determineAlignment(this, tooltipSize);
			// Final Size and Position
			backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
		} else {
			model.opacity = 0;
		}

		model.xAlign = alignment.xAlign;
		model.yAlign = alignment.yAlign;
		model.x = backgroundPoint.x;
		model.y = backgroundPoint.y;
		model.width = tooltipSize.width;
		model.height = tooltipSize.height;

		// Point where the caret on the tooltip points to
		model.caretX = tooltipPosition.x;
		model.caretY = tooltipPosition.y;

		me._model = model;

		if (changed && opts.custom) {
			opts.custom.call(me, model);
		}

		return me;
	},

	drawCaret: function(tooltipPoint, size) {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);

		ctx.lineTo(caretPosition.x1, caretPosition.y1);
		ctx.lineTo(caretPosition.x2, caretPosition.y2);
		ctx.lineTo(caretPosition.x3, caretPosition.y3);
	},
	getCaretPosition: function(tooltipPoint, size, vm) {
		var x1, x2, x3, y1, y2, y3;
		var caretSize = vm.caretSize;
		var cornerRadius = vm.cornerRadius;
		var xAlign = vm.xAlign;
		var yAlign = vm.yAlign;
		var ptX = tooltipPoint.x;
		var ptY = tooltipPoint.y;
		var width = size.width;
		var height = size.height;

		if (yAlign === 'center') {
			y2 = ptY + (height / 2);

			if (xAlign === 'left') {
				x1 = ptX;
				x2 = x1 - caretSize;
				x3 = x1;

				y1 = y2 + caretSize;
				y3 = y2 - caretSize;
			} else {
				x1 = ptX + width;
				x2 = x1 + caretSize;
				x3 = x1;

				y1 = y2 - caretSize;
				y3 = y2 + caretSize;
			}
		} else {
			if (xAlign === 'left') {
				x2 = ptX + cornerRadius + (caretSize);
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else if (xAlign === 'right') {
				x2 = ptX + width - cornerRadius - caretSize;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else {
				x2 = vm.caretX;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			}
			if (yAlign === 'top') {
				y1 = ptY;
				y2 = y1 - caretSize;
				y3 = y1;
			} else {
				y1 = ptY + height;
				y2 = y1 + caretSize;
				y3 = y1;
				// invert drawing order
				var tmp = x3;
				x3 = x1;
				x1 = tmp;
			}
		}
		return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
	},

	drawTitle: function(pt, vm, ctx) {
		var title = vm.title;
		var length = title.length;
		var titleFontSize, titleSpacing, i;

		if (length) {
			var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

			pt.x = getAlignedX(vm, vm._titleAlign);

			ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
			ctx.textBaseline = 'middle';

			titleFontSize = vm.titleFontSize;
			titleSpacing = vm.titleSpacing;

			ctx.fillStyle = vm.titleFontColor;
			ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

			for (i = 0; i < length; ++i) {
				ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
				pt.y += titleFontSize + titleSpacing; // Line Height and spacing

				if (i + 1 === length) {
					pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
				}
			}
		}
	},

	drawBody: function(pt, vm, ctx) {
		var bodyFontSize = vm.bodyFontSize;
		var bodySpacing = vm.bodySpacing;
		var bodyAlign = vm._bodyAlign;
		var body = vm.body;
		var drawColorBoxes = vm.displayColors;
		var xLinePadding = 0;
		var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;

		var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

		var fillLineOfText = function(line) {
			ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyFontSize / 2);
			pt.y += bodyFontSize + bodySpacing;
		};

		var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;
		var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);

		ctx.textAlign = bodyAlign;
		ctx.textBaseline = 'middle';
		ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

		pt.x = getAlignedX(vm, bodyAlignForCalculation);

		// Before body lines
		ctx.fillStyle = vm.bodyFontColor;
		helpers$1.each(vm.beforeBody, fillLineOfText);

		xLinePadding = drawColorBoxes && bodyAlignForCalculation !== 'right'
			? bodyAlign === 'center' ? (bodyFontSize / 2 + 1) : (bodyFontSize + 2)
			: 0;

		// Draw body lines now
		for (i = 0, ilen = body.length; i < ilen; ++i) {
			bodyItem = body[i];
			textColor = vm.labelTextColors[i];
			labelColors = vm.labelColors[i];

			ctx.fillStyle = textColor;
			helpers$1.each(bodyItem.before, fillLineOfText);

			lines = bodyItem.lines;
			for (j = 0, jlen = lines.length; j < jlen; ++j) {
				// Draw Legend-like boxes if needed
				if (drawColorBoxes) {
					var rtlColorX = rtlHelper.x(colorX);

					// Fill a white rect so that colours merge nicely if the opacity is < 1
					ctx.fillStyle = vm.legendColorBackground;
					ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize);

					// Border
					ctx.lineWidth = 1;
					ctx.strokeStyle = labelColors.borderColor;
					ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize);

					// Inner square
					ctx.fillStyle = labelColors.backgroundColor;
					ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), bodyFontSize - 2), pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
					ctx.fillStyle = textColor;
				}

				fillLineOfText(lines[j]);
			}

			helpers$1.each(bodyItem.after, fillLineOfText);
		}

		// Reset back to 0 for after body
		xLinePadding = 0;

		// After body lines
		helpers$1.each(vm.afterBody, fillLineOfText);
		pt.y -= bodySpacing; // Remove last body spacing
	},

	drawFooter: function(pt, vm, ctx) {
		var footer = vm.footer;
		var length = footer.length;
		var footerFontSize, i;

		if (length) {
			var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

			pt.x = getAlignedX(vm, vm._footerAlign);
			pt.y += vm.footerMarginTop;

			ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
			ctx.textBaseline = 'middle';

			footerFontSize = vm.footerFontSize;

			ctx.fillStyle = vm.footerFontColor;
			ctx.font = helpers$1.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

			for (i = 0; i < length; ++i) {
				ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
				pt.y += footerFontSize + vm.footerSpacing;
			}
		}
	},

	drawBackground: function(pt, vm, ctx, tooltipSize) {
		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;
		ctx.lineWidth = vm.borderWidth;
		var xAlign = vm.xAlign;
		var yAlign = vm.yAlign;
		var x = pt.x;
		var y = pt.y;
		var width = tooltipSize.width;
		var height = tooltipSize.height;
		var radius = vm.cornerRadius;

		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		if (yAlign === 'top') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		if (yAlign === 'center' && xAlign === 'right') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		if (yAlign === 'bottom') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		if (yAlign === 'center' && xAlign === 'left') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();

		ctx.fill();

		if (vm.borderWidth > 0) {
			ctx.stroke();
		}
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;

		if (vm.opacity === 0) {
			return;
		}

		var tooltipSize = {
			width: vm.width,
			height: vm.height
		};
		var pt = {
			x: vm.x,
			y: vm.y
		};

		// IE11/Edge does not like very small opacities, so snap to 0
		var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

		// Truthy/falsey value for empty tooltip
		var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

		if (this._options.enabled && hasTooltipContent) {
			ctx.save();
			ctx.globalAlpha = opacity;

			// Draw Background
			this.drawBackground(pt, vm, ctx, tooltipSize);

			// Draw Title, Body, and Footer
			pt.y += vm.yPadding;

			helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection);

			// Titles
			this.drawTitle(pt, vm, ctx);

			// Body
			this.drawBody(pt, vm, ctx);

			// Footer
			this.drawFooter(pt, vm, ctx);

			helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);

			ctx.restore();
		}
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 * @returns {boolean} true if the tooltip changed
	 */
	handleEvent: function(e) {
		var me = this;
		var options = me._options;
		var changed = false;

		me._lastActive = me._lastActive || [];

		// Find Active Elements for tooltips
		if (e.type === 'mouseout') {
			me._active = [];
		} else {
			me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
			if (options.reverse) {
				me._active.reverse();
			}
		}

		// Remember Last Actives
		changed = !helpers$1.arrayEquals(me._active, me._lastActive);

		// Only handle target event on tooltip change
		if (changed) {
			me._lastActive = me._active;

			if (options.enabled || options.custom) {
				me._eventPosition = {
					x: e.x,
					y: e.y
				};

				me.update(true);
				me.pivot();
			}
		}

		return changed;
	}
});

/**
 * @namespace Chart.Tooltip.positioners
 */
var positioners_1 = positioners;

var core_tooltip = exports$4;
core_tooltip.positioners = positioners_1;

var valueOrDefault$9 = helpers$1.valueOrDefault;

core_defaults._set('global', {
	elements: {},
	events: [
		'mousemove',
		'mouseout',
		'click',
		'touchstart',
		'touchmove'
	],
	hover: {
		onHover: null,
		mode: 'nearest',
		intersect: true,
		animationDuration: 400
	},
	onClick: null,
	maintainAspectRatio: true,
	responsive: true,
	responsiveAnimationDuration: 0
});

/**
 * Recursively merge the given config objects representing the `scales` option
 * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
 * returns a deep copy of the result, thus doesn't alter inputs.
 */
function mergeScaleConfig(/* config objects ... */) {
	return helpers$1.merge({}, [].slice.call(arguments), {
		merger: function(key, target, source, options) {
			if (key === 'xAxes' || key === 'yAxes') {
				var slen = source[key].length;
				var i, type, scale;

				if (!target[key]) {
					target[key] = [];
				}

				for (i = 0; i < slen; ++i) {
					scale = source[key][i];
					type = valueOrDefault$9(scale.type, key === 'xAxes' ? 'category' : 'linear');

					if (i >= target[key].length) {
						target[key].push({});
					}

					if (!target[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
						// new/untyped scale or type changed: let's apply the new defaults
						// then merge source scale to correctly overwrite the defaults.
						helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
					} else {
						// scales type are the same
						helpers$1.merge(target[key][i], scale);
					}
				}
			} else {
				helpers$1._merger(key, target, source, options);
			}
		}
	});
}

/**
 * Recursively merge the given config objects as the root options by handling
 * default scale options for the `scales` and `scale` properties, then returns
 * a deep copy of the result, thus doesn't alter inputs.
 */
function mergeConfig(/* config objects ... */) {
	return helpers$1.merge({}, [].slice.call(arguments), {
		merger: function(key, target, source, options) {
			var tval = target[key] || {};
			var sval = source[key];

			if (key === 'scales') {
				// scale config merging is complex. Add our own function here for that
				target[key] = mergeScaleConfig(tval, sval);
			} else if (key === 'scale') {
				// used in polar area & radar charts since there is only one scale
				target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
			} else {
				helpers$1._merger(key, target, source, options);
			}
		}
	});
}

function initConfig(config) {
	config = config || {};

	// Do NOT use mergeConfig for the data object because this method merges arrays
	// and so would change references to labels and datasets, preventing data updates.
	var data = config.data = config.data || {};
	data.datasets = data.datasets || [];
	data.labels = data.labels || [];

	config.options = mergeConfig(
		core_defaults.global,
		core_defaults[config.type],
		config.options || {});

	return config;
}

function updateConfig(chart) {
	var newOptions = chart.options;

	helpers$1.each(chart.scales, function(scale) {
		core_layouts.removeBox(chart, scale);
	});

	newOptions = mergeConfig(
		core_defaults.global,
		core_defaults[chart.config.type],
		newOptions);

	chart.options = chart.config.options = newOptions;
	chart.ensureScalesHaveIDs();
	chart.buildOrUpdateScales();

	// Tooltip
	chart.tooltip._options = newOptions.tooltips;
	chart.tooltip.initialize();
}

function nextAvailableScaleId(axesOpts, prefix, index) {
	var id;
	var hasId = function(obj) {
		return obj.id === id;
	};

	do {
		id = prefix + index++;
	} while (helpers$1.findIndex(axesOpts, hasId) >= 0);

	return id;
}

function positionIsHorizontal(position) {
	return position === 'top' || position === 'bottom';
}

function compare2Level(l1, l2) {
	return function(a, b) {
		return a[l1] === b[l1]
			? a[l2] - b[l2]
			: a[l1] - b[l1];
	};
}

var Chart = function(item, config) {
	this.construct(item, config);
	return this;
};

helpers$1.extend(Chart.prototype, /** @lends Chart */ {
	/**
	 * @private
	 */
	construct: function(item, config) {
		var me = this;

		config = initConfig(config);

		var context = platform.acquireContext(item, config);
		var canvas = context && context.canvas;
		var height = canvas && canvas.height;
		var width = canvas && canvas.width;

		me.id = helpers$1.uid();
		me.ctx = context;
		me.canvas = canvas;
		me.config = config;
		me.width = width;
		me.height = height;
		me.aspectRatio = height ? width / height : null;
		me.options = config.options;
		me._bufferedRender = false;
		me._layers = [];

		/**
		 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
		 * the "instance" still need to be defined since it might be called from plugins.
		 * @prop Chart#chart
		 * @deprecated since version 2.6.0
		 * @todo remove at version 3
		 * @private
		 */
		me.chart = me;
		me.controller = me; // chart.chart.controller #inception

		// Add the chart instance to the global namespace
		Chart.instances[me.id] = me;

		// Define alias to the config data: `chart.data === chart.config.data`
		Object.defineProperty(me, 'data', {
			get: function() {
				return me.config.data;
			},
			set: function(value) {
				me.config.data = value;
			}
		});

		if (!context || !canvas) {
			// The given item is not a compatible context2d element, let's return before finalizing
			// the chart initialization but after setting basic chart / controller properties that
			// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
			// https://github.com/chartjs/Chart.js/issues/2807
			console.error("Failed to create chart: can't acquire context from the given item");
			return;
		}

		me.initialize();
		me.update();
	},

	/**
	 * @private
	 */
	initialize: function() {
		var me = this;

		// Before init plugin notification
		core_plugins.notify(me, 'beforeInit');

		helpers$1.retinaScale(me, me.options.devicePixelRatio);

		me.bindEvents();

		if (me.options.responsive) {
			// Initial resize before chart draws (must be silent to preserve initial animations).
			me.resize(true);
		}

		me.initToolTip();

		// After init plugin notification
		core_plugins.notify(me, 'afterInit');

		return me;
	},

	clear: function() {
		helpers$1.canvas.clear(this);
		return this;
	},

	stop: function() {
		// Stops any current animation loop occurring
		core_animations.cancelAnimation(this);
		return this;
	},

	resize: function(silent) {
		var me = this;
		var options = me.options;
		var canvas = me.canvas;
		var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;

		// the canvas render width and height will be casted to integers so make sure that
		// the canvas display style uses the same integer values to avoid blurring effect.

		// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed
		var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
		var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

		if (me.width === newWidth && me.height === newHeight) {
			return;
		}

		canvas.width = me.width = newWidth;
		canvas.height = me.height = newHeight;
		canvas.style.width = newWidth + 'px';
		canvas.style.height = newHeight + 'px';

		helpers$1.retinaScale(me, options.devicePixelRatio);

		if (!silent) {
			// Notify any plugins about the resize
			var newSize = {width: newWidth, height: newHeight};
			core_plugins.notify(me, 'resize', [newSize]);

			// Notify of resize
			if (options.onResize) {
				options.onResize(me, newSize);
			}

			me.stop();
			me.update({
				duration: options.responsiveAnimationDuration
			});
		}
	},

	ensureScalesHaveIDs: function() {
		var options = this.options;
		var scalesOptions = options.scales || {};
		var scaleOptions = options.scale;

		helpers$1.each(scalesOptions.xAxes, function(xAxisOptions, index) {
			if (!xAxisOptions.id) {
				xAxisOptions.id = nextAvailableScaleId(scalesOptions.xAxes, 'x-axis-', index);
			}
		});

		helpers$1.each(scalesOptions.yAxes, function(yAxisOptions, index) {
			if (!yAxisOptions.id) {
				yAxisOptions.id = nextAvailableScaleId(scalesOptions.yAxes, 'y-axis-', index);
			}
		});

		if (scaleOptions) {
			scaleOptions.id = scaleOptions.id || 'scale';
		}
	},

	/**
	 * Builds a map of scale ID to scale object for future lookup.
	 */
	buildOrUpdateScales: function() {
		var me = this;
		var options = me.options;
		var scales = me.scales || {};
		var items = [];
		var updated = Object.keys(scales).reduce(function(obj, id) {
			obj[id] = false;
			return obj;
		}, {});

		if (options.scales) {
			items = items.concat(
				(options.scales.xAxes || []).map(function(xAxisOptions) {
					return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
				}),
				(options.scales.yAxes || []).map(function(yAxisOptions) {
					return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
				})
			);
		}

		if (options.scale) {
			items.push({
				options: options.scale,
				dtype: 'radialLinear',
				isDefault: true,
				dposition: 'chartArea'
			});
		}

		helpers$1.each(items, function(item) {
			var scaleOptions = item.options;
			var id = scaleOptions.id;
			var scaleType = valueOrDefault$9(scaleOptions.type, item.dtype);

			if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
				scaleOptions.position = item.dposition;
			}

			updated[id] = true;
			var scale = null;
			if (id in scales && scales[id].type === scaleType) {
				scale = scales[id];
				scale.options = scaleOptions;
				scale.ctx = me.ctx;
				scale.chart = me;
			} else {
				var scaleClass = core_scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}
				scale = new scaleClass({
					id: id,
					type: scaleType,
					options: scaleOptions,
					ctx: me.ctx,
					chart: me
				});
				scales[scale.id] = scale;
			}

			scale.mergeTicksOptions();

			// TODO(SB): I think we should be able to remove this custom case (options.scale)
			// and consider it as a regular scale part of the "scales"" map only! This would
			// make the logic easier and remove some useless? custom code.
			if (item.isDefault) {
				me.scale = scale;
			}
		});
		// clear up discarded scales
		helpers$1.each(updated, function(hasUpdated, id) {
			if (!hasUpdated) {
				delete scales[id];
			}
		});

		me.scales = scales;

		core_scaleService.addScalesToLayout(this);
	},

	buildOrUpdateControllers: function() {
		var me = this;
		var newControllers = [];
		var datasets = me.data.datasets;
		var i, ilen;

		for (i = 0, ilen = datasets.length; i < ilen; i++) {
			var dataset = datasets[i];
			var meta = me.getDatasetMeta(i);
			var type = dataset.type || me.config.type;

			if (meta.type && meta.type !== type) {
				me.destroyDatasetMeta(i);
				meta = me.getDatasetMeta(i);
			}
			meta.type = type;
			meta.order = dataset.order || 0;
			meta.index = i;

			if (meta.controller) {
				meta.controller.updateIndex(i);
				meta.controller.linkScales();
			} else {
				var ControllerClass = controllers[meta.type];
				if (ControllerClass === undefined) {
					throw new Error('"' + meta.type + '" is not a chart type.');
				}

				meta.controller = new ControllerClass(me, i);
				newControllers.push(meta.controller);
			}
		}

		return newControllers;
	},

	/**
	 * Reset the elements of all datasets
	 * @private
	 */
	resetElements: function() {
		var me = this;
		helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
			me.getDatasetMeta(datasetIndex).controller.reset();
		}, me);
	},

	/**
	* Resets the chart back to it's state before the initial animation
	*/
	reset: function() {
		this.resetElements();
		this.tooltip.initialize();
	},

	update: function(config) {
		var me = this;
		var i, ilen;

		if (!config || typeof config !== 'object') {
			// backwards compatibility
			config = {
				duration: config,
				lazy: arguments[1]
			};
		}

		updateConfig(me);

		// plugins options references might have change, let's invalidate the cache
		// https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
		core_plugins._invalidate(me);

		if (core_plugins.notify(me, 'beforeUpdate') === false) {
			return;
		}

		// In case the entire data object changed
		me.tooltip._data = me.data;

		// Make sure dataset controllers are updated and new controllers are reset
		var newControllers = me.buildOrUpdateControllers();

		// Make sure all dataset controllers have correct meta data counts
		for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
			me.getDatasetMeta(i).controller.buildOrUpdateElements();
		}

		me.updateLayout();

		// Can only reset the new controllers after the scales have been updated
		if (me.options.animation && me.options.animation.duration) {
			helpers$1.each(newControllers, function(controller) {
				controller.reset();
			});
		}

		me.updateDatasets();

		// Need to reset tooltip in case it is displayed with elements that are removed
		// after update.
		me.tooltip.initialize();

		// Last active contains items that were previously in the tooltip.
		// When we reset the tooltip, we need to clear it
		me.lastActive = [];

		// Do this before render so that any plugins that need final scale updates can use it
		core_plugins.notify(me, 'afterUpdate');

		me._layers.sort(compare2Level('z', '_idx'));

		if (me._bufferedRender) {
			me._bufferedRequest = {
				duration: config.duration,
				easing: config.easing,
				lazy: config.lazy
			};
		} else {
			me.render(config);
		}
	},

	/**
	 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
	 * hook, in which case, plugins will not be called on `afterLayout`.
	 * @private
	 */
	updateLayout: function() {
		var me = this;

		if (core_plugins.notify(me, 'beforeLayout') === false) {
			return;
		}

		core_layouts.update(this, this.width, this.height);

		me._layers = [];
		helpers$1.each(me.boxes, function(box) {
			// _configure is called twice, once in core.scale.update and once here.
			// Here the boxes are fully updated and at their final positions.
			if (box._configure) {
				box._configure();
			}
			me._layers.push.apply(me._layers, box._layers());
		}, me);

		me._layers.forEach(function(item, index) {
			item._idx = index;
		});

		/**
		 * Provided for backward compatibility, use `afterLayout` instead.
		 * @method IPlugin#afterScaleUpdate
		 * @deprecated since version 2.5.0
		 * @todo remove at version 3
		 * @private
		 */
		core_plugins.notify(me, 'afterScaleUpdate');
		core_plugins.notify(me, 'afterLayout');
	},

	/**
	 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
	 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
	 * @private
	 */
	updateDatasets: function() {
		var me = this;

		if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
			return;
		}

		for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
			me.updateDataset(i);
		}

		core_plugins.notify(me, 'afterDatasetsUpdate');
	},

	/**
	 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
	 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
	 * @private
	 */
	updateDataset: function(index) {
		var me = this;
		var meta = me.getDatasetMeta(index);
		var args = {
			meta: meta,
			index: index
		};

		if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
			return;
		}

		meta.controller._update();

		core_plugins.notify(me, 'afterDatasetUpdate', [args]);
	},

	render: function(config) {
		var me = this;

		if (!config || typeof config !== 'object') {
			// backwards compatibility
			config = {
				duration: config,
				lazy: arguments[1]
			};
		}

		var animationOptions = me.options.animation;
		var duration = valueOrDefault$9(config.duration, animationOptions && animationOptions.duration);
		var lazy = config.lazy;

		if (core_plugins.notify(me, 'beforeRender') === false) {
			return;
		}

		var onComplete = function(animation) {
			core_plugins.notify(me, 'afterRender');
			helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
		};

		if (animationOptions && duration) {
			var animation = new core_animation({
				numSteps: duration / 16.66, // 60 fps
				easing: config.easing || animationOptions.easing,

				render: function(chart, animationObject) {
					var easingFunction = helpers$1.easing.effects[animationObject.easing];
					var currentStep = animationObject.currentStep;
					var stepDecimal = currentStep / animationObject.numSteps;

					chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
				},

				onAnimationProgress: animationOptions.onProgress,
				onAnimationComplete: onComplete
			});

			core_animations.addAnimation(me, animation, duration, lazy);
		} else {
			me.draw();

			// See https://github.com/chartjs/Chart.js/issues/3781
			onComplete(new core_animation({numSteps: 0, chart: me}));
		}

		return me;
	},

	draw: function(easingValue) {
		var me = this;
		var i, layers;

		me.clear();

		if (helpers$1.isNullOrUndef(easingValue)) {
			easingValue = 1;
		}

		me.transition(easingValue);

		if (me.width <= 0 || me.height <= 0) {
			return;
		}

		if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
			return;
		}

		// Because of plugin hooks (before/afterDatasetsDraw), datasets can't
		// currently be part of layers. Instead, we draw
		// layers <= 0 before(default, backward compat), and the rest after
		layers = me._layers;
		for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
			layers[i].draw(me.chartArea);
		}

		me.drawDatasets(easingValue);

		// Rest of layers
		for (; i < layers.length; ++i) {
			layers[i].draw(me.chartArea);
		}

		me._drawTooltip(easingValue);

		core_plugins.notify(me, 'afterDraw', [easingValue]);
	},

	/**
	 * @private
	 */
	transition: function(easingValue) {
		var me = this;

		for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
			if (me.isDatasetVisible(i)) {
				me.getDatasetMeta(i).controller.transition(easingValue);
			}
		}

		me.tooltip.transition(easingValue);
	},

	/**
	 * @private
	 */
	_getSortedDatasetMetas: function(filterVisible) {
		var me = this;
		var datasets = me.data.datasets || [];
		var result = [];
		var i, ilen;

		for (i = 0, ilen = datasets.length; i < ilen; ++i) {
			if (!filterVisible || me.isDatasetVisible(i)) {
				result.push(me.getDatasetMeta(i));
			}
		}

		result.sort(compare2Level('order', 'index'));

		return result;
	},

	/**
	 * @private
	 */
	_getSortedVisibleDatasetMetas: function() {
		return this._getSortedDatasetMetas(true);
	},

	/**
	 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
	 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
	 * @private
	 */
	drawDatasets: function(easingValue) {
		var me = this;
		var metasets, i;

		if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
			return;
		}

		metasets = me._getSortedVisibleDatasetMetas();
		for (i = metasets.length - 1; i >= 0; --i) {
			me.drawDataset(metasets[i], easingValue);
		}

		core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
	},

	/**
	 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
	 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
	 * @private
	 */
	drawDataset: function(meta, easingValue) {
		var me = this;
		var args = {
			meta: meta,
			index: meta.index,
			easingValue: easingValue
		};

		if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
			return;
		}

		meta.controller.draw(easingValue);

		core_plugins.notify(me, 'afterDatasetDraw', [args]);
	},

	/**
	 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
	 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
	 * @private
	 */
	_drawTooltip: function(easingValue) {
		var me = this;
		var tooltip = me.tooltip;
		var args = {
			tooltip: tooltip,
			easingValue: easingValue
		};

		if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
			return;
		}

		tooltip.draw();

		core_plugins.notify(me, 'afterTooltipDraw', [args]);
	},

	/**
	 * Get the single element that was clicked on
	 * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
	 */
	getElementAtEvent: function(e) {
		return core_interaction.modes.single(this, e);
	},

	getElementsAtEvent: function(e) {
		return core_interaction.modes.label(this, e, {intersect: true});
	},

	getElementsAtXAxis: function(e) {
		return core_interaction.modes['x-axis'](this, e, {intersect: true});
	},

	getElementsAtEventForMode: function(e, mode, options) {
		var method = core_interaction.modes[mode];
		if (typeof method === 'function') {
			return method(this, e, options);
		}

		return [];
	},

	getDatasetAtEvent: function(e) {
		return core_interaction.modes.dataset(this, e, {intersect: true});
	},

	getDatasetMeta: function(datasetIndex) {
		var me = this;
		var dataset = me.data.datasets[datasetIndex];
		if (!dataset._meta) {
			dataset._meta = {};
		}

		var meta = dataset._meta[me.id];
		if (!meta) {
			meta = dataset._meta[me.id] = {
				type: null,
				data: [],
				dataset: null,
				controller: null,
				hidden: null,			// See isDatasetVisible() comment
				xAxisID: null,
				yAxisID: null,
				order: dataset.order || 0,
				index: datasetIndex
			};
		}

		return meta;
	},

	getVisibleDatasetCount: function() {
		var count = 0;
		for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
			if (this.isDatasetVisible(i)) {
				count++;
			}
		}
		return count;
	},

	isDatasetVisible: function(datasetIndex) {
		var meta = this.getDatasetMeta(datasetIndex);

		// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
		// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
		return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
	},

	generateLegend: function() {
		return this.options.legendCallback(this);
	},

	/**
	 * @private
	 */
	destroyDatasetMeta: function(datasetIndex) {
		var id = this.id;
		var dataset = this.data.datasets[datasetIndex];
		var meta = dataset._meta && dataset._meta[id];

		if (meta) {
			meta.controller.destroy();
			delete dataset._meta[id];
		}
	},

	destroy: function() {
		var me = this;
		var canvas = me.canvas;
		var i, ilen;

		me.stop();

		// dataset controllers need to cleanup associated data
		for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
			me.destroyDatasetMeta(i);
		}

		if (canvas) {
			me.unbindEvents();
			helpers$1.canvas.clear(me);
			platform.releaseContext(me.ctx);
			me.canvas = null;
			me.ctx = null;
		}

		core_plugins.notify(me, 'destroy');

		delete Chart.instances[me.id];
	},

	toBase64Image: function() {
		return this.canvas.toDataURL.apply(this.canvas, arguments);
	},

	initToolTip: function() {
		var me = this;
		me.tooltip = new core_tooltip({
			_chart: me,
			_chartInstance: me, // deprecated, backward compatibility
			_data: me.data,
			_options: me.options.tooltips
		}, me);
	},

	/**
	 * @private
	 */
	bindEvents: function() {
		var me = this;
		var listeners = me._listeners = {};
		var listener = function() {
			me.eventHandler.apply(me, arguments);
		};

		helpers$1.each(me.options.events, function(type) {
			platform.addEventListener(me, type, listener);
			listeners[type] = listener;
		});

		// Elements used to detect size change should not be injected for non responsive charts.
		// See https://github.com/chartjs/Chart.js/issues/2210
		if (me.options.responsive) {
			listener = function() {
				me.resize();
			};

			platform.addEventListener(me, 'resize', listener);
			listeners.resize = listener;
		}
	},

	/**
	 * @private
	 */
	unbindEvents: function() {
		var me = this;
		var listeners = me._listeners;
		if (!listeners) {
			return;
		}

		delete me._listeners;
		helpers$1.each(listeners, function(listener, type) {
			platform.removeEventListener(me, type, listener);
		});
	},

	updateHoverStyle: function(elements, mode, enabled) {
		var prefix = enabled ? 'set' : 'remove';
		var element, i, ilen;

		for (i = 0, ilen = elements.length; i < ilen; ++i) {
			element = elements[i];
			if (element) {
				this.getDatasetMeta(element._datasetIndex).controller[prefix + 'HoverStyle'](element);
			}
		}

		if (mode === 'dataset') {
			this.getDatasetMeta(elements[0]._datasetIndex).controller['_' + prefix + 'DatasetHoverStyle']();
		}
	},

	/**
	 * @private
	 */
	eventHandler: function(e) {
		var me = this;
		var tooltip = me.tooltip;

		if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
			return;
		}

		// Buffer any update calls so that renders do not occur
		me._bufferedRender = true;
		me._bufferedRequest = null;

		var changed = me.handleEvent(e);
		// for smooth tooltip animations issue #4989
		// the tooltip should be the source of change
		// Animation check workaround:
		// tooltip._start will be null when tooltip isn't animating
		if (tooltip) {
			changed = tooltip._start
				? tooltip.handleEvent(e)
				: changed | tooltip.handleEvent(e);
		}

		core_plugins.notify(me, 'afterEvent', [e]);

		var bufferedRequest = me._bufferedRequest;
		if (bufferedRequest) {
			// If we have an update that was triggered, we need to do a normal render
			me.render(bufferedRequest);
		} else if (changed && !me.animating) {
			// If entering, leaving, or changing elements, animate the change via pivot
			me.stop();

			// We only need to render at this point. Updating will cause scales to be
			// recomputed generating flicker & using more memory than necessary.
			me.render({
				duration: me.options.hover.animationDuration,
				lazy: true
			});
		}

		me._bufferedRender = false;
		me._bufferedRequest = null;

		return me;
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event the event to handle
	 * @return {boolean} true if the chart needs to re-render
	 */
	handleEvent: function(e) {
		var me = this;
		var options = me.options || {};
		var hoverOptions = options.hover;
		var changed = false;

		me.lastActive = me.lastActive || [];

		// Find Active Elements for hover and tooltips
		if (e.type === 'mouseout') {
			me.active = [];
		} else {
			me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
		}

		// Invoke onHover hook
		// Need to call with native event here to not break backwards compatibility
		helpers$1.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);

		if (e.type === 'mouseup' || e.type === 'click') {
			if (options.onClick) {
				// Use e.native here for backwards compatibility
				options.onClick.call(me, e.native, me.active);
			}
		}

		// Remove styling for last active (even if it may still be active)
		if (me.lastActive.length) {
			me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
		}

		// Built in hover styling
		if (me.active.length && hoverOptions.mode) {
			me.updateHoverStyle(me.active, hoverOptions.mode, true);
		}

		changed = !helpers$1.arrayEquals(me.active, me.lastActive);

		// Remember Last Actives
		me.lastActive = me.active;

		return changed;
	}
});

/**
 * NOTE(SB) We actually don't use this container anymore but we need to keep it
 * for backward compatibility. Though, it can still be useful for plugins that
 * would need to work on multiple charts?!
 */
Chart.instances = {};

var core_controller = Chart;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart instead.
 * @class Chart.Controller
 * @deprecated since version 2.6
 * @todo remove at version 3
 * @private
 */
Chart.Controller = Chart;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart
 * @deprecated since version 2.8
 * @todo remove at version 3
 * @private
 */
Chart.types = {};

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.helpers.configMerge
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
helpers$1.configMerge = mergeConfig;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.helpers.scaleMerge
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
helpers$1.scaleMerge = mergeScaleConfig;

var core_helpers = function() {

	// -- Basic js utility methods

	helpers$1.where = function(collection, filterCallback) {
		if (helpers$1.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		}
		var filtered = [];

		helpers$1.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers$1.findIndex = Array.prototype.findIndex ?
		function(array, callback, scope) {
			return array.findIndex(callback, scope);
		} :
		function(array, callback, scope) {
			scope = scope === undefined ? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers$1.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (helpers$1.isNullOrUndef(startIndex)) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers$1.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (helpers$1.isNullOrUndef(startIndex)) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};

	// -- Math methods
	helpers$1.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers$1.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers$1.almostWhole = function(x, epsilon) {
		var rounded = Math.round(x);
		return ((rounded - epsilon) <= x) && ((rounded + epsilon) >= x);
	};
	helpers$1.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			}
			return max;
		}, Number.NEGATIVE_INFINITY);
	};
	helpers$1.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			}
			return min;
		}, Number.POSITIVE_INFINITY);
	};
	helpers$1.sign = Math.sign ?
		function(x) {
			return Math.sign(x);
		} :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers$1.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers$1.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};

	/**
	 * Returns the number of decimal places
	 * i.e. the number of digits after the decimal point, of the value of this Number.
	 * @param {number} x - A number.
	 * @returns {number} The number of decimal places.
	 * @private
	 */
	helpers$1._decimalPlaces = function(x) {
		if (!helpers$1.isFinite(x)) {
			return;
		}
		var e = 1;
		var p = 0;
		while (Math.round(x * e) / e !== x) {
			e *= 10;
			p++;
		}
		return p;
	};

	// Gets the angle from vertical upright to the point about a centre.
	helpers$1.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x;
		var distanceFromYCenter = anglePoint.y - centrePoint.y;
		var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers$1.distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};

	/**
	 * Provided for backward compatibility, not available anymore
	 * @function Chart.helpers.aliasPixel
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 */
	helpers$1.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};

	/**
	 * Returns the aligned pixel value to avoid anti-aliasing blur
	 * @param {Chart} chart - The chart instance.
	 * @param {number} pixel - A pixel value.
	 * @param {number} width - The width of the element.
	 * @returns {number} The aligned pixel value.
	 * @private
	 */
	helpers$1._alignPixel = function(chart, pixel, width) {
		var devicePixelRatio = chart.currentDevicePixelRatio;
		var halfWidth = width / 2;
		return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
	};

	helpers$1.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		// Props to Rob Spencer at scaled innovation for his post on splining between points
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint;
		var current = middlePoint;
		var next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers$1.EPSILON = Number.EPSILON || 1e-14;
	helpers$1.splineCurveMonotone = function(points) {
		// This function calculates Bézier control points in a similar way than |splineCurve|,
		// but preserves monotonicity of the provided data and ensures no local extremums are added
		// between the dataset discrete points due to the interpolation.
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

		var pointsWithTangents = (points || []).map(function(point) {
			return {
				model: point._model,
				deltaK: 0,
				mK: 0
			};
		});

		// Calculate slopes (deltaK) and initialize tangents (mK)
		var pointsLen = pointsWithTangents.length;
		var i, pointBefore, pointCurrent, pointAfter;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointAfter && !pointAfter.model.skip) {
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
			}

			if (!pointBefore || pointBefore.model.skip) {
				pointCurrent.mK = pointCurrent.deltaK;
			} else if (!pointAfter || pointAfter.model.skip) {
				pointCurrent.mK = pointBefore.deltaK;
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
				pointCurrent.mK = 0;
			} else {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
			}
		}

		// Adjust tangents to ensure monotonic properties
		var alphaK, betaK, tauK, squaredMagnitude;
		for (i = 0; i < pointsLen - 1; ++i) {
			pointCurrent = pointsWithTangents[i];
			pointAfter = pointsWithTangents[i + 1];
			if (pointCurrent.model.skip || pointAfter.model.skip) {
				continue;
			}

			if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
				pointCurrent.mK = pointAfter.mK = 0;
				continue;
			}

			alphaK = pointCurrent.mK / pointCurrent.deltaK;
			betaK = pointAfter.mK / pointCurrent.deltaK;
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
			if (squaredMagnitude <= 9) {
				continue;
			}

			tauK = 3 / Math.sqrt(squaredMagnitude);
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
		}

		// Compute control points
		var deltaX;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointBefore && !pointBefore.model.skip) {
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
			}
			if (pointAfter && !pointAfter.model.skip) {
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
			}
		}
	};
	helpers$1.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers$1.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers$1.niceNum = function(range, round) {
		var exponent = Math.floor(helpers$1.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else if (fraction <= 1.0) {
			niceFraction = 1;
		} else if (fraction <= 2) {
			niceFraction = 2;
		} else if (fraction <= 5) {
			niceFraction = 5;
		} else {
			niceFraction = 10;
		}

		return niceFraction * Math.pow(10, exponent);
	};
	// Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers$1.requestAnimFrame = (function() {
		if (typeof window === 'undefined') {
			return function(callback) {
				callback();
			};
		}
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	}());
	// -- DOM methods
	helpers$1.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt;
		var canvas = evt.target || evt.srcElement;
		var boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof styleValue === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}

	/**
	 * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
	 * @param {HTMLElement} domNode - the node to check the constraint on
	 * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
	 * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
	 * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
	 */
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = helpers$1._getParentNode(domNode);
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers$1.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers$1.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	/**
	 * @private
 	 */
	helpers$1._calculatePadding = function(container, padding, parentDimension) {
		padding = helpers$1.getStyle(container, padding);

		return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
	};
	/**
	 * @private
	 */
	helpers$1._getParentNode = function(domNode) {
		var parent = domNode.parentNode;
		if (parent && parent.toString() === '[object ShadowRoot]') {
			parent = parent.host;
		}
		return parent;
	};
	helpers$1.getMaximumWidth = function(domNode) {
		var container = helpers$1._getParentNode(domNode);
		if (!container) {
			return domNode.clientWidth;
		}

		var clientWidth = container.clientWidth;
		var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);
		var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);

		var w = clientWidth - paddingLeft - paddingRight;
		var cw = helpers$1.getConstraintWidth(domNode);
		return isNaN(cw) ? w : Math.min(w, cw);
	};
	helpers$1.getMaximumHeight = function(domNode) {
		var container = helpers$1._getParentNode(domNode);
		if (!container) {
			return domNode.clientHeight;
		}

		var clientHeight = container.clientHeight;
		var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);
		var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);

		var h = clientHeight - paddingTop - paddingBottom;
		var ch = helpers$1.getConstraintHeight(domNode);
		return isNaN(ch) ? h : Math.min(h, ch);
	};
	helpers$1.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers$1.retinaScale = function(chart, forceRatio) {
		var pixelRatio = chart.currentDevicePixelRatio = forceRatio || (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
		if (pixelRatio === 1) {
			return;
		}

		var canvas = chart.canvas;
		var height = chart.height;
		var width = chart.width;

		canvas.height = height * pixelRatio;
		canvas.width = width * pixelRatio;
		chart.ctx.scale(pixelRatio, pixelRatio);

		// If no style has been set on the canvas, the render size is used as display size,
		// making the chart visually bigger, so let's enforce it to the "correct" values.
		// See https://github.com/chartjs/Chart.js/issues/3575
		if (!canvas.style.height && !canvas.style.width) {
			canvas.style.height = height + 'px';
			canvas.style.width = width + 'px';
		}
	};
	// -- Canvas methods
	helpers$1.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	};
	helpers$1.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		var ilen = arrayOfThings.length;
		var i, j, jlen, thing, nestedThing;
		for (i = 0; i < ilen; i++) {
			thing = arrayOfThings[i];

			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
				longest = helpers$1.measureText(ctx, data, gc, longest, thing);
			} else if (helpers$1.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				for (j = 0, jlen = thing.length; j < jlen; j++) {
					nestedThing = thing[j];
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
						longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
					}
				}
			}
		}

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers$1.measureText = function(ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};

	/**
	 * @deprecated
	 */
	helpers$1.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers$1.each(arrayOfThings, function(thing) {
			if (helpers$1.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};

	helpers$1.color = !chartjsColor ?
		function(value) {
			console.error('Color.js not found!');
			return value;
		} :
		function(value) {
			/* global CanvasGradient */
			if (value instanceof CanvasGradient) {
				value = core_defaults.global.defaultColor;
			}

			return chartjsColor(value);
		};

	helpers$1.getHoverColor = function(colorValue) {
		/* global CanvasPattern */
		return (colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient) ?
			colorValue :
			helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	};
};

function abstract() {
	throw new Error(
		'This method is not implemented: either no adapter can ' +
		'be found or an incomplete integration was provided.'
	);
}

/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */

/**
 * Currently supported unit string values.
 * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
 * @memberof Chart._adapters._date
 * @name Unit
 */

/**
 * @class
 */
function DateAdapter(options) {
	this.options = options || {};
}

helpers$1.extend(DateAdapter.prototype, /** @lends DateAdapter */ {
	/**
	 * Returns a map of time formats for the supported formatting units defined
	 * in Unit as well as 'datetime' representing a detailed date/time string.
	 * @returns {{string: string}}
	 */
	formats: abstract,

	/**
	 * Parses the given `value` and return the associated timestamp.
	 * @param {any} value - the value to parse (usually comes from the data)
	 * @param {string} [format] - the expected data format
	 * @returns {(number|null)}
	 * @function
	 */
	parse: abstract,

	/**
	 * Returns the formatted date in the specified `format` for a given `timestamp`.
	 * @param {number} timestamp - the timestamp to format
	 * @param {string} format - the date/time token
	 * @return {string}
	 * @function
	 */
	format: abstract,

	/**
	 * Adds the specified `amount` of `unit` to the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {number} amount - the amount to add
	 * @param {Unit} unit - the unit as string
	 * @return {number}
	 * @function
	 */
	add: abstract,

	/**
	 * Returns the number of `unit` between the given timestamps.
	 * @param {number} max - the input timestamp (reference)
	 * @param {number} min - the timestamp to substract
	 * @param {Unit} unit - the unit as string
	 * @return {number}
	 * @function
	 */
	diff: abstract,

	/**
	 * Returns start of `unit` for the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {Unit} unit - the unit as string
	 * @param {number} [weekday] - the ISO day of the week with 1 being Monday
	 * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
	 * @function
	 */
	startOf: abstract,

	/**
	 * Returns end of `unit` for the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {Unit} unit - the unit as string
	 * @function
	 */
	endOf: abstract,

	// DEPRECATIONS

	/**
	 * Provided for backward compatibility for scale.getValueForPixel(),
	 * this method should be overridden only by the moment adapter.
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 * @private
	 */
	_create: function(value) {
		return value;
	}
});

DateAdapter.override = function(members) {
	helpers$1.extend(DateAdapter.prototype, members);
};

var _date = DateAdapter;

var core_adapters = {
	_date: _date
};

/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */
var core_ticks = {
	/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */
	formatters: {
		/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {string|string[]} the label to display
		 */
		values: function(value) {
			return helpers$1.isArray(value) ? value : '' + value;
		},

		/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {number} the value to be formatted
		 * @param index {number} the position of the tickValue parameter in the ticks array
		 * @param ticks {number[]} the list of ticks being converted
		 * @return {string} string representation of the tickValue parameter
		 */
		linear: function(tickValue, index, ticks) {
			// If we have lots of ticks, don't use the ones
			var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

			// If we have a number like 2.5 as the delta, figure out how many decimal places we need
			if (Math.abs(delta) > 1) {
				if (tickValue !== Math.floor(tickValue)) {
					// not an integer
					delta = tickValue - Math.floor(tickValue);
				}
			}

			var logDelta = helpers$1.log10(Math.abs(delta));
			var tickString = '';

			if (tickValue !== 0) {
				var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));
				if (maxTick < 1e-4) { // all ticks are small numbers; use scientific notation
					var logTick = helpers$1.log10(Math.abs(tickValue));
					var numExponential = Math.floor(logTick) - Math.floor(logDelta);
					numExponential = Math.max(Math.min(numExponential, 20), 0);
					tickString = tickValue.toExponential(numExponential);
				} else {
					var numDecimal = -1 * Math.floor(logDelta);
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
					tickString = tickValue.toFixed(numDecimal);
				}
			} else {
				tickString = '0'; // never show decimal places for 0
			}

			return tickString;
		},

		logarithmic: function(tickValue, index, ticks) {
			var remain = tickValue / (Math.pow(10, Math.floor(helpers$1.log10(tickValue))));

			if (tickValue === 0) {
				return '0';
			} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
				return tickValue.toExponential();
			}
			return '';
		}
	}
};

var isArray = helpers$1.isArray;
var isNullOrUndef = helpers$1.isNullOrUndef;
var valueOrDefault$a = helpers$1.valueOrDefault;
var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;

core_defaults._set('scale', {
	display: true,
	position: 'left',
	offset: false,

	// grid line settings
	gridLines: {
		display: true,
		color: 'rgba(0,0,0,0.1)',
		lineWidth: 1,
		drawBorder: true,
		drawOnChartArea: true,
		drawTicks: true,
		tickMarkLength: 10,
		zeroLineWidth: 1,
		zeroLineColor: 'rgba(0,0,0,0.25)',
		zeroLineBorderDash: [],
		zeroLineBorderDashOffset: 0.0,
		offsetGridLines: false,
		borderDash: [],
		borderDashOffset: 0.0
	},

	// scale label
	scaleLabel: {
		// display property
		display: false,

		// actual label
		labelString: '',

		// top/bottom padding
		padding: {
			top: 4,
			bottom: 4
		}
	},

	// label settings
	ticks: {
		beginAtZero: false,
		minRotation: 0,
		maxRotation: 50,
		mirror: false,
		padding: 0,
		reverse: false,
		display: true,
		autoSkip: true,
		autoSkipPadding: 0,
		labelOffset: 0,
		// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
		callback: core_ticks.formatters.values,
		minor: {},
		major: {}
	}
});

/** Returns a new array containing numItems from arr */
function sample(arr, numItems) {
	var result = [];
	var increment = arr.length / numItems;
	var i = 0;
	var len = arr.length;

	for (; i < len; i += increment) {
		result.push(arr[Math.floor(i)]);
	}
	return result;
}

function getPixelForGridLine(scale, index, offsetGridLines) {
	var length = scale.getTicks().length;
	var validIndex = Math.min(index, length - 1);
	var lineValue = scale.getPixelForTick(validIndex);
	var start = scale._startPixel;
	var end = scale._endPixel;
	var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.
	var offset;

	if (offsetGridLines) {
		if (length === 1) {
			offset = Math.max(lineValue - start, end - lineValue);
		} else if (index === 0) {
			offset = (scale.getPixelForTick(1) - lineValue) / 2;
		} else {
			offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
		}
		lineValue += validIndex < index ? offset : -offset;

		// Return undefined if the pixel is out of the range
		if (lineValue < start - epsilon || lineValue > end + epsilon) {
			return;
		}
	}
	return lineValue;
}

function garbageCollect(caches, length) {
	helpers$1.each(caches, function(cache) {
		var gc = cache.gc;
		var gcLen = gc.length / 2;
		var i;
		if (gcLen > length) {
			for (i = 0; i < gcLen; ++i) {
				delete cache.data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
	});
}

/**
 * Returns {width, height, offset} objects for the first, last, widest, highest tick
 * labels where offset indicates the anchor point offset from the top in pixels.
 */
function computeLabelSizes(ctx, tickFonts, ticks, caches) {
	var length = ticks.length;
	var widths = [];
	var heights = [];
	var offsets = [];
	var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel, widest, highest;

	for (i = 0; i < length; ++i) {
		label = ticks[i].label;
		tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
		ctx.font = fontString = tickFont.string;
		cache = caches[fontString] = caches[fontString] || {data: {}, gc: []};
		lineHeight = tickFont.lineHeight;
		width = height = 0;
		// Undefined labels and arrays should not be measured
		if (!isNullOrUndef(label) && !isArray(label)) {
			width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
			height = lineHeight;
		} else if (isArray(label)) {
			// if it is an array let's measure each element
			for (j = 0, jlen = label.length; j < jlen; ++j) {
				nestedLabel = label[j];
				// Undefined labels and arrays should not be measured
				if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
					width = helpers$1.measureText(ctx, cache.data, cache.gc, width, nestedLabel);
					height += lineHeight;
				}
			}
		}
		widths.push(width);
		heights.push(height);
		offsets.push(lineHeight / 2);
	}
	garbageCollect(caches, length);

	widest = widths.indexOf(Math.max.apply(null, widths));
	highest = heights.indexOf(Math.max.apply(null, heights));

	function valueAt(idx) {
		return {
			width: widths[idx] || 0,
			height: heights[idx] || 0,
			offset: offsets[idx] || 0
		};
	}

	return {
		first: valueAt(0),
		last: valueAt(length - 1),
		widest: valueAt(widest),
		highest: valueAt(highest)
	};
}

function getTickMarkLength(options) {
	return options.drawTicks ? options.tickMarkLength : 0;
}

function getScaleLabelHeight(options) {
	var font, padding;

	if (!options.display) {
		return 0;
	}

	font = helpers$1.options._parseFont(options);
	padding = helpers$1.options.toPadding(options.padding);

	return font.lineHeight + padding.height;
}

function parseFontOptions(options, nestedOpts) {
	return helpers$1.extend(helpers$1.options._parseFont({
		fontFamily: valueOrDefault$a(nestedOpts.fontFamily, options.fontFamily),
		fontSize: valueOrDefault$a(nestedOpts.fontSize, options.fontSize),
		fontStyle: valueOrDefault$a(nestedOpts.fontStyle, options.fontStyle),
		lineHeight: valueOrDefault$a(nestedOpts.lineHeight, options.lineHeight)
	}), {
		color: helpers$1.options.resolve([nestedOpts.fontColor, options.fontColor, core_defaults.global.defaultFontColor])
	});
}

function parseTickFontOptions(options) {
	var minor = parseFontOptions(options, options.minor);
	var major = options.major.enabled ? parseFontOptions(options, options.major) : minor;

	return {minor: minor, major: major};
}

function nonSkipped(ticksToFilter) {
	var filtered = [];
	var item, index, len;
	for (index = 0, len = ticksToFilter.length; index < len; ++index) {
		item = ticksToFilter[index];
		if (typeof item._index !== 'undefined') {
			filtered.push(item);
		}
	}
	return filtered;
}

function getEvenSpacing(arr) {
	var len = arr.length;
	var i, diff;

	if (len < 2) {
		return false;
	}

	for (diff = arr[0], i = 1; i < len; ++i) {
		if (arr[i] - arr[i - 1] !== diff) {
			return false;
		}
	}
	return diff;
}

function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
	var evenMajorSpacing = getEvenSpacing(majorIndices);
	var spacing = (ticks.length - 1) / ticksLimit;
	var factors, factor, i, ilen;

	// If the major ticks are evenly spaced apart, place the minor ticks
	// so that they divide the major ticks into even chunks
	if (!evenMajorSpacing) {
		return Math.max(spacing, 1);
	}

	factors = helpers$1.math._factorize(evenMajorSpacing);
	for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
		factor = factors[i];
		if (factor > spacing) {
			return factor;
		}
	}
	return Math.max(spacing, 1);
}

function getMajorIndices(ticks) {
	var result = [];
	var i, ilen;
	for (i = 0, ilen = ticks.length; i < ilen; i++) {
		if (ticks[i].major) {
			result.push(i);
		}
	}
	return result;
}

function skipMajors(ticks, majorIndices, spacing) {
	var count = 0;
	var next = majorIndices[0];
	var i, tick;

	spacing = Math.ceil(spacing);
	for (i = 0; i < ticks.length; i++) {
		tick = ticks[i];
		if (i === next) {
			tick._index = i;
			count++;
			next = majorIndices[count * spacing];
		} else {
			delete tick.label;
		}
	}
}

function skip(ticks, spacing, majorStart, majorEnd) {
	var start = valueOrDefault$a(majorStart, 0);
	var end = Math.min(valueOrDefault$a(majorEnd, ticks.length), ticks.length);
	var count = 0;
	var length, i, tick, next;

	spacing = Math.ceil(spacing);
	if (majorEnd) {
		length = majorEnd - majorStart;
		spacing = length / Math.floor(length / spacing);
	}

	next = start;

	while (next < 0) {
		count++;
		next = Math.round(start + count * spacing);
	}

	for (i = Math.max(start, 0); i < end; i++) {
		tick = ticks[i];
		if (i === next) {
			tick._index = i;
			count++;
			next = Math.round(start + count * spacing);
		} else {
			delete tick.label;
		}
	}
}

var Scale = core_element.extend({

	zeroLineIndex: 0,

	/**
	 * Get the padding needed for the scale
	 * @method getPadding
	 * @private
	 * @returns {Padding} the necessary padding
	 */
	getPadding: function() {
		var me = this;
		return {
			left: me.paddingLeft || 0,
			top: me.paddingTop || 0,
			right: me.paddingRight || 0,
			bottom: me.paddingBottom || 0
		};
	},

	/**
	 * Returns the scale tick objects ({label, major})
	 * @since 2.7
	 */
	getTicks: function() {
		return this._ticks;
	},

	/**
	* @private
	*/
	_getLabels: function() {
		var data = this.chart.data;
		return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
	},

	// These methods are ordered by lifecyle. Utilities then follow.
	// Any function defined here is inherited by all scale types.
	// Any function can be extended by the scale type

	/**
	 * Provided for backward compatibility, not available anymore
	 * @function Chart.Scale.mergeTicksOptions
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 */
	mergeTicksOptions: function() {
		// noop
	},

	beforeUpdate: function() {
		helpers$1.callback(this.options.beforeUpdate, [this]);
	},

	/**
	 * @param {number} maxWidth - the max width in pixels
	 * @param {number} maxHeight - the max height in pixels
	 * @param {object} margins - the space between the edge of the other scales and edge of the chart
	 *   This space comes from two sources:
	 *     - padding - space that's required to show the labels at the edges of the scale
	 *     - thickness of scales or legends in another orientation
	 */
	update: function(maxWidth, maxHeight, margins) {
		var me = this;
		var tickOpts = me.options.ticks;
		var sampleSize = tickOpts.sampleSize;
		var i, ilen, labels, ticks, samplingEnabled;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = helpers$1.extend({
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, margins);

		me._ticks = null;
		me.ticks = null;
		me._labelSizes = null;
		me._maxLabelLines = 0;
		me.longestLabelWidth = 0;
		me.longestTextCache = me.longestTextCache || {};
		me._gridLineItems = null;
		me._labelItems = null;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();

		// Data min/max
		me.beforeDataLimits();
		me.determineDataLimits();
		me.afterDataLimits();

		// Ticks - `this.ticks` is now DEPRECATED!
		// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
		// and must not be accessed directly from outside this class. `this.ticks` being
		// around for long time and not marked as private, we can't change its structure
		// without unexpected breaking changes. If you need to access the scale ticks,
		// use scale.getTicks() instead.

		me.beforeBuildTicks();

		// New implementations should return an array of objects but for BACKWARD COMPAT,
		// we still support no return (`this.ticks` internally set by calling this method).
		ticks = me.buildTicks() || [];

		// Allow modification of ticks in callback.
		ticks = me.afterBuildTicks(ticks) || ticks;

		// Ensure ticks contains ticks in new tick format
		if ((!ticks || !ticks.length) && me.ticks) {
			ticks = [];
			for (i = 0, ilen = me.ticks.length; i < ilen; ++i) {
				ticks.push({
					value: me.ticks[i],
					major: false
				});
			}
		}

		me._ticks = ticks;

		// Compute tick rotation and fit using a sampled subset of labels
		// We generally don't need to compute the size of every single label for determining scale size
		samplingEnabled = sampleSize < ticks.length;
		labels = me._convertTicksToLabels(samplingEnabled ? sample(ticks, sampleSize) : ticks);

		// _configure is called twice, once here, once from core.controller.updateLayout.
		// Here we haven't been positioned yet, but dimensions are correct.
		// Variables set in _configure are needed for calculateTickRotation, and
		// it's ok that coordinates are not correct there, only dimensions matter.
		me._configure();

		// Tick Rotation
		me.beforeCalculateTickRotation();
		me.calculateTickRotation();
		me.afterCalculateTickRotation();

		me.beforeFit();
		me.fit();
		me.afterFit();

		// Auto-skip
		me._ticksToDraw = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(ticks) : ticks;

		if (samplingEnabled) {
			// Generate labels using all non-skipped ticks
			labels = me._convertTicksToLabels(me._ticksToDraw);
		}

		me.ticks = labels;   // BACKWARD COMPATIBILITY

		// IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!

		me.afterUpdate();

		// TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
		// make maxWidth and maxHeight private
		return me.minSize;
	},

	/**
	 * @private
	 */
	_configure: function() {
		var me = this;
		var reversePixels = me.options.ticks.reverse;
		var startPixel, endPixel;

		if (me.isHorizontal()) {
			startPixel = me.left;
			endPixel = me.right;
		} else {
			startPixel = me.top;
			endPixel = me.bottom;
			// by default vertical scales are from bottom to top, so pixels are reversed
			reversePixels = !reversePixels;
		}
		me._startPixel = startPixel;
		me._endPixel = endPixel;
		me._reversePixels = reversePixels;
		me._length = endPixel - startPixel;
	},

	afterUpdate: function() {
		helpers$1.callback(this.options.afterUpdate, [this]);
	},

	//

	beforeSetDimensions: function() {
		helpers$1.callback(this.options.beforeSetDimensions, [this]);
	},
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;
	},
	afterSetDimensions: function() {
		helpers$1.callback(this.options.afterSetDimensions, [this]);
	},

	// Data limits
	beforeDataLimits: function() {
		helpers$1.callback(this.options.beforeDataLimits, [this]);
	},
	determineDataLimits: helpers$1.noop,
	afterDataLimits: function() {
		helpers$1.callback(this.options.afterDataLimits, [this]);
	},

	//
	beforeBuildTicks: function() {
		helpers$1.callback(this.options.beforeBuildTicks, [this]);
	},
	buildTicks: helpers$1.noop,
	afterBuildTicks: function(ticks) {
		var me = this;
		// ticks is empty for old axis implementations here
		if (isArray(ticks) && ticks.length) {
			return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
		}
		// Support old implementations (that modified `this.ticks` directly in buildTicks)
		me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
		return ticks;
	},

	beforeTickToLabelConversion: function() {
		helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
	},
	convertTicksToLabels: function() {
		var me = this;
		// Convert ticks to strings
		var tickOpts = me.options.ticks;
		me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
	},
	afterTickToLabelConversion: function() {
		helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
	},

	//

	beforeCalculateTickRotation: function() {
		helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
	},
	calculateTickRotation: function() {
		var me = this;
		var options = me.options;
		var tickOpts = options.ticks;
		var numTicks = me.getTicks().length;
		var minRotation = tickOpts.minRotation || 0;
		var maxRotation = tickOpts.maxRotation;
		var labelRotation = minRotation;
		var labelSizes, maxLabelWidth, maxLabelHeight, maxWidth, tickWidth, maxHeight, maxLabelDiagonal;

		if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
			me.labelRotation = minRotation;
			return;
		}

		labelSizes = me._getLabelSizes();
		maxLabelWidth = labelSizes.widest.width;
		maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset;

		// Estimate the width of each grid based on the canvas width, the maximum
		// label width and the number of tick intervals
		maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
		tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1);

		// Allow 3 pixels x2 padding either side for label readability
		if (maxLabelWidth + 6 > tickWidth) {
			tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
			maxHeight = me.maxHeight - getTickMarkLength(options.gridLines)
				- tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
			maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
			labelRotation = helpers$1.toDegrees(Math.min(
				Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)),
				Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)
			));
			labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
		}

		me.labelRotation = labelRotation;
	},
	afterCalculateTickRotation: function() {
		helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
	},

	//

	beforeFit: function() {
		helpers$1.callback(this.options.beforeFit, [this]);
	},
	fit: function() {
		var me = this;
		// Reset
		var minSize = me.minSize = {
			width: 0,
			height: 0
		};

		var chart = me.chart;
		var opts = me.options;
		var tickOpts = opts.ticks;
		var scaleLabelOpts = opts.scaleLabel;
		var gridLineOpts = opts.gridLines;
		var display = me._isVisible();
		var isBottom = opts.position === 'bottom';
		var isHorizontal = me.isHorizontal();

		// Width
		if (isHorizontal) {
			minSize.width = me.maxWidth;
		} else if (display) {
			minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
		}

		// height
		if (!isHorizontal) {
			minSize.height = me.maxHeight; // fill all the height
		} else if (display) {
			minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
		}

		// Don't bother fitting the ticks if we are not showing the labels
		if (tickOpts.display && display) {
			var tickFonts = parseTickFontOptions(tickOpts);
			var labelSizes = me._getLabelSizes();
			var firstLabelSize = labelSizes.first;
			var lastLabelSize = labelSizes.last;
			var widestLabelSize = labelSizes.widest;
			var highestLabelSize = labelSizes.highest;
			var lineSpace = tickFonts.minor.lineHeight * 0.4;
			var tickPadding = tickOpts.padding;

			if (isHorizontal) {
				// A horizontal axis is more constrained by the height.
				var isRotated = me.labelRotation !== 0;
				var angleRadians = helpers$1.toRadians(me.labelRotation);
				var cosRotation = Math.cos(angleRadians);
				var sinRotation = Math.sin(angleRadians);

				var labelHeight = sinRotation * widestLabelSize.width
					+ cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0))
					+ (isRotated ? 0 : lineSpace); // padding

				minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);

				var offsetLeft = me.getPixelForTick(0) - me.left;
				var offsetRight = me.right - me.getPixelForTick(me.getTicks().length - 1);
				var paddingLeft, paddingRight;

				// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
				// which means that the right padding is dominated by the font height
				if (isRotated) {
					paddingLeft = isBottom ?
						cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset :
						sinRotation * (firstLabelSize.height - firstLabelSize.offset);
					paddingRight = isBottom ?
						sinRotation * (lastLabelSize.height - lastLabelSize.offset) :
						cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
				} else {
					paddingLeft = firstLabelSize.width / 2;
					paddingRight = lastLabelSize.width / 2;
				}

				// Adjust padding taking into account changes in offsets
				// and add 3 px to move away from canvas edges
				me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
				me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
			} else {
				// A vertical axis is more constrained by the width. Labels are the
				// dominant factor here, so get that length first and account for padding
				var labelWidth = tickOpts.mirror ? 0 :
					// use lineSpace for consistency with horizontal axis
					// tickPadding is not implemented for horizontal
					widestLabelSize.width + tickPadding + lineSpace;

				minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);

				me.paddingTop = firstLabelSize.height / 2;
				me.paddingBottom = lastLabelSize.height / 2;
			}
		}

		me.handleMargins();

		if (isHorizontal) {
			me.width = me._length = chart.width - me.margins.left - me.margins.right;
			me.height = minSize.height;
		} else {
			me.width = minSize.width;
			me.height = me._length = chart.height - me.margins.top - me.margins.bottom;
		}
	},

	/**
	 * Handle margins and padding interactions
	 * @private
	 */
	handleMargins: function() {
		var me = this;
		if (me.margins) {
			me.margins.left = Math.max(me.paddingLeft, me.margins.left);
			me.margins.top = Math.max(me.paddingTop, me.margins.top);
			me.margins.right = Math.max(me.paddingRight, me.margins.right);
			me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);
		}
	},

	afterFit: function() {
		helpers$1.callback(this.options.afterFit, [this]);
	},

	// Shared Methods
	isHorizontal: function() {
		var pos = this.options.position;
		return pos === 'top' || pos === 'bottom';
	},
	isFullWidth: function() {
		return this.options.fullWidth;
	},

	// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
	getRightValue: function(rawValue) {
		// Null and undefined values first
		if (isNullOrUndef(rawValue)) {
			return NaN;
		}
		// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
		if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {
			return NaN;
		}

		// If it is in fact an object, dive in one more level
		if (rawValue) {
			if (this.isHorizontal()) {
				if (rawValue.x !== undefined) {
					return this.getRightValue(rawValue.x);
				}
			} else if (rawValue.y !== undefined) {
				return this.getRightValue(rawValue.y);
			}
		}

		// Value is good, return it
		return rawValue;
	},

	_convertTicksToLabels: function(ticks) {
		var me = this;
		var labels, i, ilen;

		me.ticks = ticks.map(function(tick) {
			return tick.value;
		});

		me.beforeTickToLabelConversion();

		// New implementations should return the formatted tick labels but for BACKWARD
		// COMPAT, we still support no return (`this.ticks` internally changed by calling
		// this method and supposed to contain only string values).
		labels = me.convertTicksToLabels(ticks) || me.ticks;

		me.afterTickToLabelConversion();

		// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			ticks[i].label = labels[i];
		}

		return labels;
	},

	/**
	 * @private
	 */
	_getLabelSizes: function() {
		var me = this;
		var labelSizes = me._labelSizes;

		if (!labelSizes) {
			me._labelSizes = labelSizes = computeLabelSizes(me.ctx, parseTickFontOptions(me.options.ticks), me.getTicks(), me.longestTextCache);
			me.longestLabelWidth = labelSizes.widest.width;
		}

		return labelSizes;
	},

	/**
	 * @private
	 */
	_parseValue: function(value) {
		var start, end, min, max;

		if (isArray(value)) {
			start = +this.getRightValue(value[0]);
			end = +this.getRightValue(value[1]);
			min = Math.min(start, end);
			max = Math.max(start, end);
		} else {
			value = +this.getRightValue(value);
			start = undefined;
			end = value;
			min = value;
			max = value;
		}

		return {
			min: min,
			max: max,
			start: start,
			end: end
		};
	},

	/**
	* @private
	*/
	_getScaleLabel: function(rawValue) {
		var v = this._parseValue(rawValue);
		if (v.start !== undefined) {
			return '[' + v.start + ', ' + v.end + ']';
		}

		return +this.getRightValue(rawValue);
	},

	/**
	 * Used to get the value to display in the tooltip for the data at the given index
	 * @param index
	 * @param datasetIndex
	 */
	getLabelForIndex: helpers$1.noop,

	/**
	 * Returns the location of the given data point. Value can either be an index or a numerical value
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 * @param value
	 * @param index
	 * @param datasetIndex
	 */
	getPixelForValue: helpers$1.noop,

	/**
	 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 * @param pixel
	 */
	getValueForPixel: helpers$1.noop,

	/**
	 * Returns the location of the tick at the given index
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getPixelForTick: function(index) {
		var me = this;
		var offset = me.options.offset;
		var numTicks = me._ticks.length;
		var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);

		return index < 0 || index > numTicks - 1
			? null
			: me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
	},

	/**
	 * Utility for getting the pixel location of a percentage of scale
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getPixelForDecimal: function(decimal) {
		var me = this;

		if (me._reversePixels) {
			decimal = 1 - decimal;
		}

		return me._startPixel + decimal * me._length;
	},

	getDecimalForPixel: function(pixel) {
		var decimal = (pixel - this._startPixel) / this._length;
		return this._reversePixels ? 1 - decimal : decimal;
	},

	/**
	 * Returns the pixel for the minimum chart value
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getBasePixel: function() {
		return this.getPixelForValue(this.getBaseValue());
	},

	getBaseValue: function() {
		var me = this;
		var min = me.min;
		var max = me.max;

		return me.beginAtZero ? 0 :
			min < 0 && max < 0 ? max :
			min > 0 && max > 0 ? min :
			0;
	},

	/**
	 * Returns a subset of ticks to be plotted to avoid overlapping labels.
	 * @private
	 */
	_autoSkip: function(ticks) {
		var me = this;
		var tickOpts = me.options.ticks;
		var axisLength = me._length;
		var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
		var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
		var numMajorIndices = majorIndices.length;
		var first = majorIndices[0];
		var last = majorIndices[numMajorIndices - 1];
		var i, ilen, spacing, avgMajorSpacing;

		// If there are too many major ticks to display them all
		if (numMajorIndices > ticksLimit) {
			skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
			return nonSkipped(ticks);
		}

		spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);

		if (numMajorIndices > 0) {
			for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
				skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
			}
			avgMajorSpacing = numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;
			skip(ticks, spacing, helpers$1.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
			skip(ticks, spacing, last, helpers$1.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
			return nonSkipped(ticks);
		}
		skip(ticks, spacing);
		return nonSkipped(ticks);
	},

	/**
	 * @private
	 */
	_tickSize: function() {
		var me = this;
		var optionTicks = me.options.ticks;

		// Calculate space needed by label in axis direction.
		var rot = helpers$1.toRadians(me.labelRotation);
		var cos = Math.abs(Math.cos(rot));
		var sin = Math.abs(Math.sin(rot));

		var labelSizes = me._getLabelSizes();
		var padding = optionTicks.autoSkipPadding || 0;
		var w = labelSizes ? labelSizes.widest.width + padding : 0;
		var h = labelSizes ? labelSizes.highest.height + padding : 0;

		// Calculate space needed for 1 tick in axis direction.
		return me.isHorizontal()
			? h * cos > w * sin ? w / cos : h / sin
			: h * sin < w * cos ? h / cos : w / sin;
	},

	/**
	 * @private
	 */
	_isVisible: function() {
		var me = this;
		var chart = me.chart;
		var display = me.options.display;
		var i, ilen, meta;

		if (display !== 'auto') {
			return !!display;
		}

		// When 'auto', the scale is visible if at least one associated dataset is visible.
		for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
			if (chart.isDatasetVisible(i)) {
				meta = chart.getDatasetMeta(i);
				if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
					return true;
				}
			}
		}

		return false;
	},

	/**
	 * @private
	 */
	_computeGridLineItems: function(chartArea) {
		var me = this;
		var chart = me.chart;
		var options = me.options;
		var gridLines = options.gridLines;
		var position = options.position;
		var offsetGridLines = gridLines.offsetGridLines;
		var isHorizontal = me.isHorizontal();
		var ticks = me._ticksToDraw;
		var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);

		var tl = getTickMarkLength(gridLines);
		var items = [];
		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
		var axisHalfWidth = axisWidth / 2;
		var alignPixel = helpers$1._alignPixel;
		var alignBorderValue = function(pixel) {
			return alignPixel(chart, pixel, axisWidth);
		};
		var borderValue, i, tick, lineValue, alignedLineValue;
		var tx1, ty1, tx2, ty2, x1, y1, x2, y2, lineWidth, lineColor, borderDash, borderDashOffset;

		if (position === 'top') {
			borderValue = alignBorderValue(me.bottom);
			ty1 = me.bottom - tl;
			ty2 = borderValue - axisHalfWidth;
			y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
			y2 = chartArea.bottom;
		} else if (position === 'bottom') {
			borderValue = alignBorderValue(me.top);
			y1 = chartArea.top;
			y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
			ty1 = borderValue + axisHalfWidth;
			ty2 = me.top + tl;
		} else if (position === 'left') {
			borderValue = alignBorderValue(me.right);
			tx1 = me.right - tl;
			tx2 = borderValue - axisHalfWidth;
			x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
			x2 = chartArea.right;
		} else {
			borderValue = alignBorderValue(me.left);
			x1 = chartArea.left;
			x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
			tx1 = borderValue + axisHalfWidth;
			tx2 = me.left + tl;
		}

		for (i = 0; i < ticksLength; ++i) {
			tick = ticks[i] || {};

			// autoskipper skipped this tick (#4635)
			if (isNullOrUndef(tick.label) && i < ticks.length) {
				continue;
			}

			if (i === me.zeroLineIndex && options.offset === offsetGridLines) {
				// Draw the first index specially
				lineWidth = gridLines.zeroLineWidth;
				lineColor = gridLines.zeroLineColor;
				borderDash = gridLines.zeroLineBorderDash || [];
				borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
			} else {
				lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, i, 1);
				lineColor = valueAtIndexOrDefault(gridLines.color, i, 'rgba(0,0,0,0.1)');
				borderDash = gridLines.borderDash || [];
				borderDashOffset = gridLines.borderDashOffset || 0.0;
			}

			lineValue = getPixelForGridLine(me, tick._index || i, offsetGridLines);

			// Skip if the pixel is out of the range
			if (lineValue === undefined) {
				continue;
			}

			alignedLineValue = alignPixel(chart, lineValue, lineWidth);

			if (isHorizontal) {
				tx1 = tx2 = x1 = x2 = alignedLineValue;
			} else {
				ty1 = ty2 = y1 = y2 = alignedLineValue;
			}

			items.push({
				tx1: tx1,
				ty1: ty1,
				tx2: tx2,
				ty2: ty2,
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				width: lineWidth,
				color: lineColor,
				borderDash: borderDash,
				borderDashOffset: borderDashOffset,
			});
		}

		items.ticksLength = ticksLength;
		items.borderValue = borderValue;

		return items;
	},

	/**
	 * @private
	 */
	_computeLabelItems: function() {
		var me = this;
		var options = me.options;
		var optionTicks = options.ticks;
		var position = options.position;
		var isMirrored = optionTicks.mirror;
		var isHorizontal = me.isHorizontal();
		var ticks = me._ticksToDraw;
		var fonts = parseTickFontOptions(optionTicks);
		var tickPadding = optionTicks.padding;
		var tl = getTickMarkLength(options.gridLines);
		var rotation = -helpers$1.toRadians(me.labelRotation);
		var items = [];
		var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;

		if (position === 'top') {
			y = me.bottom - tl - tickPadding;
			textAlign = !rotation ? 'center' : 'left';
		} else if (position === 'bottom') {
			y = me.top + tl + tickPadding;
			textAlign = !rotation ? 'center' : 'right';
		} else if (position === 'left') {
			x = me.right - (isMirrored ? 0 : tl) - tickPadding;
			textAlign = isMirrored ? 'left' : 'right';
		} else {
			x = me.left + (isMirrored ? 0 : tl) + tickPadding;
			textAlign = isMirrored ? 'right' : 'left';
		}

		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			tick = ticks[i];
			label = tick.label;

			// autoskipper skipped this tick (#4635)
			if (isNullOrUndef(label)) {
				continue;
			}

			pixel = me.getPixelForTick(tick._index || i) + optionTicks.labelOffset;
			font = tick.major ? fonts.major : fonts.minor;
			lineHeight = font.lineHeight;
			lineCount = isArray(label) ? label.length : 1;

			if (isHorizontal) {
				x = pixel;
				textOffset = position === 'top'
					? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight
					: (!rotation ? 0.5 : 0) * lineHeight;
			} else {
				y = pixel;
				textOffset = (1 - lineCount) * lineHeight / 2;
			}

			items.push({
				x: x,
				y: y,
				rotation: rotation,
				label: label,
				font: font,
				textOffset: textOffset,
				textAlign: textAlign
			});
		}

		return items;
	},

	/**
	 * @private
	 */
	_drawGrid: function(chartArea) {
		var me = this;
		var gridLines = me.options.gridLines;

		if (!gridLines.display) {
			return;
		}

		var ctx = me.ctx;
		var chart = me.chart;
		var alignPixel = helpers$1._alignPixel;
		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
		var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));
		var width, color, i, ilen, item;

		for (i = 0, ilen = items.length; i < ilen; ++i) {
			item = items[i];
			width = item.width;
			color = item.color;

			if (width && color) {
				ctx.save();
				ctx.lineWidth = width;
				ctx.strokeStyle = color;
				if (ctx.setLineDash) {
					ctx.setLineDash(item.borderDash);
					ctx.lineDashOffset = item.borderDashOffset;
				}

				ctx.beginPath();

				if (gridLines.drawTicks) {
					ctx.moveTo(item.tx1, item.ty1);
					ctx.lineTo(item.tx2, item.ty2);
				}

				if (gridLines.drawOnChartArea) {
					ctx.moveTo(item.x1, item.y1);
					ctx.lineTo(item.x2, item.y2);
				}

				ctx.stroke();
				ctx.restore();
			}
		}

		if (axisWidth) {
			// Draw the line at the edge of the axis
			var firstLineWidth = axisWidth;
			var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, items.ticksLength - 1, 1);
			var borderValue = items.borderValue;
			var x1, x2, y1, y2;

			if (me.isHorizontal()) {
				x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
				x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
				y1 = y2 = borderValue;
			} else {
				y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
				y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
				x1 = x2 = borderValue;
			}

			ctx.lineWidth = axisWidth;
			ctx.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
	},

	/**
	 * @private
	 */
	_drawLabels: function() {
		var me = this;
		var optionTicks = me.options.ticks;

		if (!optionTicks.display) {
			return;
		}

		var ctx = me.ctx;
		var items = me._labelItems || (me._labelItems = me._computeLabelItems());
		var i, j, ilen, jlen, item, tickFont, label, y;

		for (i = 0, ilen = items.length; i < ilen; ++i) {
			item = items[i];
			tickFont = item.font;

			// Make sure we draw text in the correct color and font
			ctx.save();
			ctx.translate(item.x, item.y);
			ctx.rotate(item.rotation);
			ctx.font = tickFont.string;
			ctx.fillStyle = tickFont.color;
			ctx.textBaseline = 'middle';
			ctx.textAlign = item.textAlign;

			label = item.label;
			y = item.textOffset;
			if (isArray(label)) {
				for (j = 0, jlen = label.length; j < jlen; ++j) {
					// We just make sure the multiline element is a string here..
					ctx.fillText('' + label[j], 0, y);
					y += tickFont.lineHeight;
				}
			} else {
				ctx.fillText(label, 0, y);
			}
			ctx.restore();
		}
	},

	/**
	 * @private
	 */
	_drawTitle: function() {
		var me = this;
		var ctx = me.ctx;
		var options = me.options;
		var scaleLabel = options.scaleLabel;

		if (!scaleLabel.display) {
			return;
		}

		var scaleLabelFontColor = valueOrDefault$a(scaleLabel.fontColor, core_defaults.global.defaultFontColor);
		var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);
		var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
		var halfLineHeight = scaleLabelFont.lineHeight / 2;
		var position = options.position;
		var rotation = 0;
		var scaleLabelX, scaleLabelY;

		if (me.isHorizontal()) {
			scaleLabelX = me.left + me.width / 2; // midpoint of the width
			scaleLabelY = position === 'bottom'
				? me.bottom - halfLineHeight - scaleLabelPadding.bottom
				: me.top + halfLineHeight + scaleLabelPadding.top;
		} else {
			var isLeft = position === 'left';
			scaleLabelX = isLeft
				? me.left + halfLineHeight + scaleLabelPadding.top
				: me.right - halfLineHeight - scaleLabelPadding.top;
			scaleLabelY = me.top + me.height / 2;
			rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
		}

		ctx.save();
		ctx.translate(scaleLabelX, scaleLabelY);
		ctx.rotate(rotation);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle = scaleLabelFontColor; // render in correct colour
		ctx.font = scaleLabelFont.string;
		ctx.fillText(scaleLabel.labelString, 0, 0);
		ctx.restore();
	},

	draw: function(chartArea) {
		var me = this;

		if (!me._isVisible()) {
			return;
		}

		me._drawGrid(chartArea);
		me._drawTitle();
		me._drawLabels();
	},

	/**
	 * @private
	 */
	_layers: function() {
		var me = this;
		var opts = me.options;
		var tz = opts.ticks && opts.ticks.z || 0;
		var gz = opts.gridLines && opts.gridLines.z || 0;

		if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
			// backward compatibility: draw has been overridden by custom scale
			return [{
				z: tz,
				draw: function() {
					me.draw.apply(me, arguments);
				}
			}];
		}

		return [{
			z: gz,
			draw: function() {
				me._drawGrid.apply(me, arguments);
				me._drawTitle.apply(me, arguments);
			}
		}, {
			z: tz,
			draw: function() {
				me._drawLabels.apply(me, arguments);
			}
		}];
	},

	/**
	 * @private
	 */
	_getMatchingVisibleMetas: function(type) {
		var me = this;
		var isHorizontal = me.isHorizontal();
		return me.chart._getSortedVisibleDatasetMetas()
			.filter(function(meta) {
				return (!type || meta.type === type)
					&& (isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id);
			});
	}
});

Scale.prototype._draw = Scale.prototype.draw;

var core_scale = Scale;

var isNullOrUndef$1 = helpers$1.isNullOrUndef;

var defaultConfig = {
	position: 'bottom'
};

var scale_category = core_scale.extend({
	determineDataLimits: function() {
		var me = this;
		var labels = me._getLabels();
		var ticksOpts = me.options.ticks;
		var min = ticksOpts.min;
		var max = ticksOpts.max;
		var minIndex = 0;
		var maxIndex = labels.length - 1;
		var findIndex;

		if (min !== undefined) {
			// user specified min value
			findIndex = labels.indexOf(min);
			if (findIndex >= 0) {
				minIndex = findIndex;
			}
		}

		if (max !== undefined) {
			// user specified max value
			findIndex = labels.indexOf(max);
			if (findIndex >= 0) {
				maxIndex = findIndex;
			}
		}

		me.minIndex = minIndex;
		me.maxIndex = maxIndex;
		me.min = labels[minIndex];
		me.max = labels[maxIndex];
	},

	buildTicks: function() {
		var me = this;
		var labels = me._getLabels();
		var minIndex = me.minIndex;
		var maxIndex = me.maxIndex;

		// If we are viewing some subset of labels, slice the original array
		me.ticks = (minIndex === 0 && maxIndex === labels.length - 1) ? labels : labels.slice(minIndex, maxIndex + 1);
	},

	getLabelForIndex: function(index, datasetIndex) {
		var me = this;
		var chart = me.chart;

		if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
			return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
		}

		return me._getLabels()[index];
	},

	_configure: function() {
		var me = this;
		var offset = me.options.offset;
		var ticks = me.ticks;

		core_scale.prototype._configure.call(me);

		if (!me.isHorizontal()) {
			// For backward compatibility, vertical category scale reverse is inverted.
			me._reversePixels = !me._reversePixels;
		}

		if (!ticks) {
			return;
		}

		me._startValue = me.minIndex - (offset ? 0.5 : 0);
		me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
	},

	// Used to get data value locations.  Value can either be an index or a numerical value
	getPixelForValue: function(value, index, datasetIndex) {
		var me = this;
		var valueCategory, labels, idx;

		if (!isNullOrUndef$1(index) && !isNullOrUndef$1(datasetIndex)) {
			value = me.chart.data.datasets[datasetIndex].data[index];
		}

		// If value is a data object, then index is the index in the data array,
		// not the index of the scale. We need to change that.
		if (!isNullOrUndef$1(value)) {
			valueCategory = me.isHorizontal() ? value.x : value.y;
		}
		if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
			labels = me._getLabels();
			value = helpers$1.valueOrDefault(valueCategory, value);
			idx = labels.indexOf(value);
			index = idx !== -1 ? idx : index;
			if (isNaN(index)) {
				index = value;
			}
		}
		return me.getPixelForDecimal((index - me._startValue) / me._valueRange);
	},

	getPixelForTick: function(index) {
		var ticks = this.ticks;
		return index < 0 || index > ticks.length - 1
			? null
			: this.getPixelForValue(ticks[index], index + this.minIndex);
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
		return Math.min(Math.max(value, 0), me.ticks.length - 1);
	},

	getBasePixel: function() {
		return this.bottom;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults = defaultConfig;
scale_category._defaults = _defaults;

var noop = helpers$1.noop;
var isNullOrUndef$2 = helpers$1.isNullOrUndef;

/**
 * Generate a set of linear ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */
function generateTicks(generationOptions, dataRange) {
	var ticks = [];
	// To get a "nice" value for the tick spacing, we will use the appropriately named
	// "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
	// for details.

	var MIN_SPACING = 1e-14;
	var stepSize = generationOptions.stepSize;
	var unit = stepSize || 1;
	var maxNumSpaces = generationOptions.maxTicks - 1;
	var min = generationOptions.min;
	var max = generationOptions.max;
	var precision = generationOptions.precision;
	var rmin = dataRange.min;
	var rmax = dataRange.max;
	var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
	var factor, niceMin, niceMax, numSpaces;

	// Beyond MIN_SPACING floating point numbers being to lose precision
	// such that we can't do the math necessary to generate ticks
	if (spacing < MIN_SPACING && isNullOrUndef$2(min) && isNullOrUndef$2(max)) {
		return [rmin, rmax];
	}

	numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
	if (numSpaces > maxNumSpaces) {
		// If the calculated num of spaces exceeds maxNumSpaces, recalculate it
		spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
	}

	if (stepSize || isNullOrUndef$2(precision)) {
		// If a precision is not specified, calculate factor based on spacing
		factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
	} else {
		// If the user specified a precision, round to that number of decimal places
		factor = Math.pow(10, precision);
		spacing = Math.ceil(spacing * factor) / factor;
	}

	niceMin = Math.floor(rmin / spacing) * spacing;
	niceMax = Math.ceil(rmax / spacing) * spacing;

	// If min, max and stepSize is set and they make an evenly spaced scale use it.
	if (stepSize) {
		// If very close to our whole number, use it.
		if (!isNullOrUndef$2(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
			niceMin = min;
		}
		if (!isNullOrUndef$2(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
			niceMax = max;
		}
	}

	numSpaces = (niceMax - niceMin) / spacing;
	// If very close to our rounded value, use it.
	if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
		numSpaces = Math.round(numSpaces);
	} else {
		numSpaces = Math.ceil(numSpaces);
	}

	niceMin = Math.round(niceMin * factor) / factor;
	niceMax = Math.round(niceMax * factor) / factor;
	ticks.push(isNullOrUndef$2(min) ? niceMin : min);
	for (var j = 1; j < numSpaces; ++j) {
		ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
	}
	ticks.push(isNullOrUndef$2(max) ? niceMax : max);

	return ticks;
}

var scale_linearbase = core_scale.extend({
	getRightValue: function(value) {
		if (typeof value === 'string') {
			return +value;
		}
		return core_scale.prototype.getRightValue.call(this, value);
	},

	handleTickRangeOptions: function() {
		var me = this;
		var opts = me.options;
		var tickOpts = opts.ticks;

		// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
		// do nothing since that would make the chart weird. If the user really wants a weird chart
		// axis, they can manually override it
		if (tickOpts.beginAtZero) {
			var minSign = helpers$1.sign(me.min);
			var maxSign = helpers$1.sign(me.max);

			if (minSign < 0 && maxSign < 0) {
				// move the top up to 0
				me.max = 0;
			} else if (minSign > 0 && maxSign > 0) {
				// move the bottom down to 0
				me.min = 0;
			}
		}

		var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
		var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

		if (tickOpts.min !== undefined) {
			me.min = tickOpts.min;
		} else if (tickOpts.suggestedMin !== undefined) {
			if (me.min === null) {
				me.min = tickOpts.suggestedMin;
			} else {
				me.min = Math.min(me.min, tickOpts.suggestedMin);
			}
		}

		if (tickOpts.max !== undefined) {
			me.max = tickOpts.max;
		} else if (tickOpts.suggestedMax !== undefined) {
			if (me.max === null) {
				me.max = tickOpts.suggestedMax;
			} else {
				me.max = Math.max(me.max, tickOpts.suggestedMax);
			}
		}

		if (setMin !== setMax) {
			// We set the min or the max but not both.
			// So ensure that our range is good
			// Inverted or 0 length range can happen when
			// ticks.min is set, and no datasets are visible
			if (me.min >= me.max) {
				if (setMin) {
					me.max = me.min + 1;
				} else {
					me.min = me.max - 1;
				}
			}
		}

		if (me.min === me.max) {
			me.max++;

			if (!tickOpts.beginAtZero) {
				me.min--;
			}
		}
	},

	getTickLimit: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var stepSize = tickOpts.stepSize;
		var maxTicksLimit = tickOpts.maxTicksLimit;
		var maxTicks;

		if (stepSize) {
			maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
		} else {
			maxTicks = me._computeTickLimit();
			maxTicksLimit = maxTicksLimit || 11;
		}

		if (maxTicksLimit) {
			maxTicks = Math.min(maxTicksLimit, maxTicks);
		}

		return maxTicks;
	},

	_computeTickLimit: function() {
		return Number.POSITIVE_INFINITY;
	},

	handleDirectionalChanges: noop,

	buildTicks: function() {
		var me = this;
		var opts = me.options;
		var tickOpts = opts.ticks;

		// Figure out what the max number of ticks we can support it is based on the size of
		// the axis area. For now, we say that the minimum tick spacing in pixels must be 40
		// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
		// the graph. Make sure we always have at least 2 ticks
		var maxTicks = me.getTickLimit();
		maxTicks = Math.max(2, maxTicks);

		var numericGeneratorOptions = {
			maxTicks: maxTicks,
			min: tickOpts.min,
			max: tickOpts.max,
			precision: tickOpts.precision,
			stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
		};
		var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);

		me.handleDirectionalChanges();

		// At this point, we need to update our max and min given the tick values since we have expanded the
		// range of the scale
		me.max = helpers$1.max(ticks);
		me.min = helpers$1.min(ticks);

		if (tickOpts.reverse) {
			ticks.reverse();

			me.start = me.max;
			me.end = me.min;
		} else {
			me.start = me.min;
			me.end = me.max;
		}
	},

	convertTicksToLabels: function() {
		var me = this;
		me.ticksAsNumbers = me.ticks.slice();
		me.zeroLineIndex = me.ticks.indexOf(0);

		core_scale.prototype.convertTicksToLabels.call(me);
	},

	_configure: function() {
		var me = this;
		var ticks = me.getTicks();
		var start = me.min;
		var end = me.max;
		var offset;

		core_scale.prototype._configure.call(me);

		if (me.options.offset && ticks.length) {
			offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
			start -= offset;
			end += offset;
		}
		me._startValue = start;
		me._endValue = end;
		me._valueRange = end - start;
	}
});

var defaultConfig$1 = {
	position: 'left',
	ticks: {
		callback: core_ticks.formatters.linear
	}
};

var DEFAULT_MIN = 0;
var DEFAULT_MAX = 1;

function getOrCreateStack(stacks, stacked, meta) {
	var key = [
		meta.type,
		// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
		stacked === undefined && meta.stack === undefined ? meta.index : '',
		meta.stack
	].join('.');

	if (stacks[key] === undefined) {
		stacks[key] = {
			pos: [],
			neg: []
		};
	}

	return stacks[key];
}

function stackData(scale, stacks, meta, data) {
	var opts = scale.options;
	var stacked = opts.stacked;
	var stack = getOrCreateStack(stacks, stacked, meta);
	var pos = stack.pos;
	var neg = stack.neg;
	var ilen = data.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = scale._parseValue(data[i]);
		if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
			continue;
		}

		pos[i] = pos[i] || 0;
		neg[i] = neg[i] || 0;

		if (opts.relativePoints) {
			pos[i] = 100;
		} else if (value.min < 0 || value.max < 0) {
			neg[i] += value.min;
		} else {
			pos[i] += value.max;
		}
	}
}

function updateMinMax(scale, meta, data) {
	var ilen = data.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = scale._parseValue(data[i]);
		if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
			continue;
		}

		scale.min = Math.min(scale.min, value.min);
		scale.max = Math.max(scale.max, value.max);
	}
}

var scale_linear = scale_linearbase.extend({
	determineDataLimits: function() {
		var me = this;
		var opts = me.options;
		var chart = me.chart;
		var datasets = chart.data.datasets;
		var metasets = me._getMatchingVisibleMetas();
		var hasStacks = opts.stacked;
		var stacks = {};
		var ilen = metasets.length;
		var i, meta, data, values;

		me.min = Number.POSITIVE_INFINITY;
		me.max = Number.NEGATIVE_INFINITY;

		if (hasStacks === undefined) {
			for (i = 0; !hasStacks && i < ilen; ++i) {
				meta = metasets[i];
				hasStacks = meta.stack !== undefined;
			}
		}

		for (i = 0; i < ilen; ++i) {
			meta = metasets[i];
			data = datasets[meta.index].data;
			if (hasStacks) {
				stackData(me, stacks, meta, data);
			} else {
				updateMinMax(me, meta, data);
			}
		}

		helpers$1.each(stacks, function(stackValues) {
			values = stackValues.pos.concat(stackValues.neg);
			me.min = Math.min(me.min, helpers$1.min(values));
			me.max = Math.max(me.max, helpers$1.max(values));
		});

		me.min = helpers$1.isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
		me.max = helpers$1.isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
		me.handleTickRangeOptions();
	},

	// Returns the maximum number of ticks based on the scale dimension
	_computeTickLimit: function() {
		var me = this;
		var tickFont;

		if (me.isHorizontal()) {
			return Math.ceil(me.width / 40);
		}
		tickFont = helpers$1.options._parseFont(me.options.ticks);
		return Math.ceil(me.height / tickFont.lineHeight);
	},

	// Called after the ticks are built. We need
	handleDirectionalChanges: function() {
		if (!this.isHorizontal()) {
			// We are in a vertical orientation. The top value is the highest. So reverse the array
			this.ticks.reverse();
		}
	},

	getLabelForIndex: function(index, datasetIndex) {
		return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
	},

	// Utils
	getPixelForValue: function(value) {
		var me = this;
		return me.getPixelForDecimal((+me.getRightValue(value) - me._startValue) / me._valueRange);
	},

	getValueForPixel: function(pixel) {
		return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
	},

	getPixelForTick: function(index) {
		var ticks = this.ticksAsNumbers;
		if (index < 0 || index > ticks.length - 1) {
			return null;
		}
		return this.getPixelForValue(ticks[index]);
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$1 = defaultConfig$1;
scale_linear._defaults = _defaults$1;

var valueOrDefault$b = helpers$1.valueOrDefault;
var log10 = helpers$1.math.log10;

/**
 * Generate a set of logarithmic ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */
function generateTicks$1(generationOptions, dataRange) {
	var ticks = [];

	var tickVal = valueOrDefault$b(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));

	var endExp = Math.floor(log10(dataRange.max));
	var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
	var exp, significand;

	if (tickVal === 0) {
		exp = Math.floor(log10(dataRange.minNotZero));
		significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

		ticks.push(tickVal);
		tickVal = significand * Math.pow(10, exp);
	} else {
		exp = Math.floor(log10(tickVal));
		significand = Math.floor(tickVal / Math.pow(10, exp));
	}
	var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

	do {
		ticks.push(tickVal);

		++significand;
		if (significand === 10) {
			significand = 1;
			++exp;
			precision = exp >= 0 ? 1 : precision;
		}

		tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
	} while (exp < endExp || (exp === endExp && significand < endSignificand));

	var lastTick = valueOrDefault$b(generationOptions.max, tickVal);
	ticks.push(lastTick);

	return ticks;
}

var defaultConfig$2 = {
	position: 'left',

	// label settings
	ticks: {
		callback: core_ticks.formatters.logarithmic
	}
};

// TODO(v3): change this to positiveOrDefault
function nonNegativeOrDefault(value, defaultValue) {
	return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
}

var scale_logarithmic = core_scale.extend({
	determineDataLimits: function() {
		var me = this;
		var opts = me.options;
		var chart = me.chart;
		var datasets = chart.data.datasets;
		var isHorizontal = me.isHorizontal();
		function IDMatches(meta) {
			return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
		}
		var datasetIndex, meta, value, data, i, ilen;

		// Calculate Range
		me.min = Number.POSITIVE_INFINITY;
		me.max = Number.NEGATIVE_INFINITY;
		me.minNotZero = Number.POSITIVE_INFINITY;

		var hasStacks = opts.stacked;
		if (hasStacks === undefined) {
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
					meta.stack !== undefined) {
					hasStacks = true;
					break;
				}
			}
		}

		if (opts.stacked || hasStacks) {
			var valuesPerStack = {};

			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				var key = [
					meta.type,
					// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
					((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
					meta.stack
				].join('.');

				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					if (valuesPerStack[key] === undefined) {
						valuesPerStack[key] = [];
					}

					data = datasets[datasetIndex].data;
					for (i = 0, ilen = data.length; i < ilen; i++) {
						var values = valuesPerStack[key];
						value = me._parseValue(data[i]);
						// invalid, hidden and negative values are ignored
						if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
							continue;
						}
						values[i] = values[i] || 0;
						values[i] += value.max;
					}
				}
			}

			helpers$1.each(valuesPerStack, function(valuesForType) {
				if (valuesForType.length > 0) {
					var minVal = helpers$1.min(valuesForType);
					var maxVal = helpers$1.max(valuesForType);
					me.min = Math.min(me.min, minVal);
					me.max = Math.max(me.max, maxVal);
				}
			});

		} else {
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					data = datasets[datasetIndex].data;
					for (i = 0, ilen = data.length; i < ilen; i++) {
						value = me._parseValue(data[i]);
						// invalid, hidden and negative values are ignored
						if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
							continue;
						}

						me.min = Math.min(value.min, me.min);
						me.max = Math.max(value.max, me.max);

						if (value.min !== 0) {
							me.minNotZero = Math.min(value.min, me.minNotZero);
						}
					}
				}
			}
		}

		me.min = helpers$1.isFinite(me.min) ? me.min : null;
		me.max = helpers$1.isFinite(me.max) ? me.max : null;
		me.minNotZero = helpers$1.isFinite(me.minNotZero) ? me.minNotZero : null;

		// Common base implementation to handle ticks.min, ticks.max
		this.handleTickRangeOptions();
	},

	handleTickRangeOptions: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var DEFAULT_MIN = 1;
		var DEFAULT_MAX = 10;

		me.min = nonNegativeOrDefault(tickOpts.min, me.min);
		me.max = nonNegativeOrDefault(tickOpts.max, me.max);

		if (me.min === me.max) {
			if (me.min !== 0 && me.min !== null) {
				me.min = Math.pow(10, Math.floor(log10(me.min)) - 1);
				me.max = Math.pow(10, Math.floor(log10(me.max)) + 1);
			} else {
				me.min = DEFAULT_MIN;
				me.max = DEFAULT_MAX;
			}
		}
		if (me.min === null) {
			me.min = Math.pow(10, Math.floor(log10(me.max)) - 1);
		}
		if (me.max === null) {
			me.max = me.min !== 0
				? Math.pow(10, Math.floor(log10(me.min)) + 1)
				: DEFAULT_MAX;
		}
		if (me.minNotZero === null) {
			if (me.min > 0) {
				me.minNotZero = me.min;
			} else if (me.max < 1) {
				me.minNotZero = Math.pow(10, Math.floor(log10(me.max)));
			} else {
				me.minNotZero = DEFAULT_MIN;
			}
		}
	},

	buildTicks: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var reverse = !me.isHorizontal();

		var generationOptions = {
			min: nonNegativeOrDefault(tickOpts.min),
			max: nonNegativeOrDefault(tickOpts.max)
		};
		var ticks = me.ticks = generateTicks$1(generationOptions, me);

		// At this point, we need to update our max and min given the tick values since we have expanded the
		// range of the scale
		me.max = helpers$1.max(ticks);
		me.min = helpers$1.min(ticks);

		if (tickOpts.reverse) {
			reverse = !reverse;
			me.start = me.max;
			me.end = me.min;
		} else {
			me.start = me.min;
			me.end = me.max;
		}
		if (reverse) {
			ticks.reverse();
		}
	},

	convertTicksToLabels: function() {
		this.tickValues = this.ticks.slice();

		core_scale.prototype.convertTicksToLabels.call(this);
	},

	// Get the correct tooltip label
	getLabelForIndex: function(index, datasetIndex) {
		return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
	},

	getPixelForTick: function(index) {
		var ticks = this.tickValues;
		if (index < 0 || index > ticks.length - 1) {
			return null;
		}
		return this.getPixelForValue(ticks[index]);
	},

	/**
	 * Returns the value of the first tick.
	 * @param {number} value - The minimum not zero value.
	 * @return {number} The first tick value.
	 * @private
	 */
	_getFirstTickValue: function(value) {
		var exp = Math.floor(log10(value));
		var significand = Math.floor(value / Math.pow(10, exp));

		return significand * Math.pow(10, exp);
	},

	_configure: function() {
		var me = this;
		var start = me.min;
		var offset = 0;

		core_scale.prototype._configure.call(me);

		if (start === 0) {
			start = me._getFirstTickValue(me.minNotZero);
			offset = valueOrDefault$b(me.options.ticks.fontSize, core_defaults.global.defaultFontSize) / me._length;
		}

		me._startValue = log10(start);
		me._valueOffset = offset;
		me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
	},

	getPixelForValue: function(value) {
		var me = this;
		var decimal = 0;

		value = +me.getRightValue(value);

		if (value > me.min && value > 0) {
			decimal = (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
		}
		return me.getPixelForDecimal(decimal);
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var decimal = me.getDecimalForPixel(pixel);
		return decimal === 0 && me.min === 0
			? 0
			: Math.pow(10, me._startValue + (decimal - me._valueOffset) * me._valueRange);
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$2 = defaultConfig$2;
scale_logarithmic._defaults = _defaults$2;

var valueOrDefault$c = helpers$1.valueOrDefault;
var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
var resolve$4 = helpers$1.options.resolve;

var defaultConfig$3 = {
	display: true,

	// Boolean - Whether to animate scaling the chart from the centre
	animate: true,
	position: 'chartArea',

	angleLines: {
		display: true,
		color: 'rgba(0,0,0,0.1)',
		lineWidth: 1,
		borderDash: [],
		borderDashOffset: 0.0
	},

	gridLines: {
		circular: false
	},

	// label settings
	ticks: {
		// Boolean - Show a backdrop to the scale label
		showLabelBackdrop: true,

		// String - The colour of the label backdrop
		backdropColor: 'rgba(255,255,255,0.75)',

		// Number - The backdrop padding above & below the label in pixels
		backdropPaddingY: 2,

		// Number - The backdrop padding to the side of the label in pixels
		backdropPaddingX: 2,

		callback: core_ticks.formatters.linear
	},

	pointLabels: {
		// Boolean - if true, show point labels
		display: true,

		// Number - Point label font size in pixels
		fontSize: 10,

		// Function - Used to convert point labels
		callback: function(label) {
			return label;
		}
	}
};

function getTickBackdropHeight(opts) {
	var tickOpts = opts.ticks;

	if (tickOpts.display && opts.display) {
		return valueOrDefault$c(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
	}
	return 0;
}

function measureLabelSize(ctx, lineHeight, label) {
	if (helpers$1.isArray(label)) {
		return {
			w: helpers$1.longestText(ctx, ctx.font, label),
			h: label.length * lineHeight
		};
	}

	return {
		w: ctx.measureText(label).width,
		h: lineHeight
	};
}

function determineLimits(angle, pos, size, min, max) {
	if (angle === min || angle === max) {
		return {
			start: pos - (size / 2),
			end: pos + (size / 2)
		};
	} else if (angle < min || angle > max) {
		return {
			start: pos - size,
			end: pos
		};
	}

	return {
		start: pos,
		end: pos + size
	};
}

/**
 * Helper function to fit a radial linear scale with point labels
 */
function fitWithPointLabels(scale) {

	// Right, this is really confusing and there is a lot of maths going on here
	// The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
	//
	// Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
	//
	// Solution:
	//
	// We assume the radius of the polygon is half the size of the canvas at first
	// at each index we check if the text overlaps.
	//
	// Where it does, we store that angle and that index.
	//
	// After finding the largest index and angle we calculate how much we need to remove
	// from the shape radius to move the point inwards by that x.
	//
	// We average the left and right distances to get the maximum shape radius that can fit in the box
	// along with labels.
	//
	// Once we have that, we can find the centre point for the chart, by taking the x text protrusion
	// on each side, removing that from the size, halving it and adding the left x protrusion width.
	//
	// This will mean we have a shape fitted to the canvas, as large as it can be with the labels
	// and position it in the most space efficient manner
	//
	// https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif

	var plFont = helpers$1.options._parseFont(scale.options.pointLabels);

	// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
	// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
	var furthestLimits = {
		l: 0,
		r: scale.width,
		t: 0,
		b: scale.height - scale.paddingTop
	};
	var furthestAngles = {};
	var i, textSize, pointPosition;

	scale.ctx.font = plFont.string;
	scale._pointLabelSizes = [];

	var valueCount = scale.chart.data.labels.length;
	for (i = 0; i < valueCount; i++) {
		pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
		textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
		scale._pointLabelSizes[i] = textSize;

		// Add quarter circle to make degree 0 mean top of circle
		var angleRadians = scale.getIndexAngle(i);
		var angle = helpers$1.toDegrees(angleRadians) % 360;
		var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
		var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

		if (hLimits.start < furthestLimits.l) {
			furthestLimits.l = hLimits.start;
			furthestAngles.l = angleRadians;
		}

		if (hLimits.end > furthestLimits.r) {
			furthestLimits.r = hLimits.end;
			furthestAngles.r = angleRadians;
		}

		if (vLimits.start < furthestLimits.t) {
			furthestLimits.t = vLimits.start;
			furthestAngles.t = angleRadians;
		}

		if (vLimits.end > furthestLimits.b) {
			furthestLimits.b = vLimits.end;
			furthestAngles.b = angleRadians;
		}
	}

	scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
}

function getTextAlignForAngle(angle) {
	if (angle === 0 || angle === 180) {
		return 'center';
	} else if (angle < 180) {
		return 'left';
	}

	return 'right';
}

function fillText(ctx, text, position, lineHeight) {
	var y = position.y + lineHeight / 2;
	var i, ilen;

	if (helpers$1.isArray(text)) {
		for (i = 0, ilen = text.length; i < ilen; ++i) {
			ctx.fillText(text[i], position.x, y);
			y += lineHeight;
		}
	} else {
		ctx.fillText(text, position.x, y);
	}
}

function adjustPointPositionForLabelHeight(angle, textSize, position) {
	if (angle === 90 || angle === 270) {
		position.y -= (textSize.h / 2);
	} else if (angle > 270 || angle < 90) {
		position.y -= textSize.h;
	}
}

function drawPointLabels(scale) {
	var ctx = scale.ctx;
	var opts = scale.options;
	var pointLabelOpts = opts.pointLabels;
	var tickBackdropHeight = getTickBackdropHeight(opts);
	var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);
	var plFont = helpers$1.options._parseFont(pointLabelOpts);

	ctx.save();

	ctx.font = plFont.string;
	ctx.textBaseline = 'middle';

	for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
		// Extra pixels out for some label spacing
		var extra = (i === 0 ? tickBackdropHeight / 2 : 0);
		var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5);

		// Keep this in loop since we may support array properties here
		var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
		ctx.fillStyle = pointLabelFontColor;

		var angleRadians = scale.getIndexAngle(i);
		var angle = helpers$1.toDegrees(angleRadians);
		ctx.textAlign = getTextAlignForAngle(angle);
		adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
		fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
	}
	ctx.restore();
}

function drawRadiusLine(scale, gridLineOpts, radius, index) {
	var ctx = scale.ctx;
	var circular = gridLineOpts.circular;
	var valueCount = scale.chart.data.labels.length;
	var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
	var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
	var pointPosition;

	if ((!circular && !valueCount) || !lineColor || !lineWidth) {
		return;
	}

	ctx.save();
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineWidth;
	if (ctx.setLineDash) {
		ctx.setLineDash(gridLineOpts.borderDash || []);
		ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
	}

	ctx.beginPath();
	if (circular) {
		// Draw circular arcs between the points
		ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
	} else {
		// Draw straight lines connecting each index
		pointPosition = scale.getPointPosition(0, radius);
		ctx.moveTo(pointPosition.x, pointPosition.y);

		for (var i = 1; i < valueCount; i++) {
			pointPosition = scale.getPointPosition(i, radius);
			ctx.lineTo(pointPosition.x, pointPosition.y);
		}
	}
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}

function numberOrZero(param) {
	return helpers$1.isNumber(param) ? param : 0;
}

var scale_radialLinear = scale_linearbase.extend({
	setDimensions: function() {
		var me = this;

		// Set the unconstrained dimension before label rotation
		me.width = me.maxWidth;
		me.height = me.maxHeight;
		me.paddingTop = getTickBackdropHeight(me.options) / 2;
		me.xCenter = Math.floor(me.width / 2);
		me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
		me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
	},

	determineDataLimits: function() {
		var me = this;
		var chart = me.chart;
		var min = Number.POSITIVE_INFINITY;
		var max = Number.NEGATIVE_INFINITY;

		helpers$1.each(chart.data.datasets, function(dataset, datasetIndex) {
			if (chart.isDatasetVisible(datasetIndex)) {
				var meta = chart.getDatasetMeta(datasetIndex);

				helpers$1.each(dataset.data, function(rawValue, index) {
					var value = +me.getRightValue(rawValue);
					if (isNaN(value) || meta.data[index].hidden) {
						return;
					}

					min = Math.min(value, min);
					max = Math.max(value, max);
				});
			}
		});

		me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
		me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
		me.handleTickRangeOptions();
	},

	// Returns the maximum number of ticks based on the scale dimension
	_computeTickLimit: function() {
		return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
	},

	convertTicksToLabels: function() {
		var me = this;

		scale_linearbase.prototype.convertTicksToLabels.call(me);

		// Point labels
		me.pointLabels = me.chart.data.labels.map(function() {
			var label = helpers$1.callback(me.options.pointLabels.callback, arguments, me);
			return label || label === 0 ? label : '';
		});
	},

	getLabelForIndex: function(index, datasetIndex) {
		return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
	},

	fit: function() {
		var me = this;
		var opts = me.options;

		if (opts.display && opts.pointLabels.display) {
			fitWithPointLabels(me);
		} else {
			me.setCenterPoint(0, 0, 0, 0);
		}
	},

	/**
	 * Set radius reductions and determine new radius and center point
	 * @private
	 */
	setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
		var me = this;
		var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
		var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
		var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
		var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);

		radiusReductionLeft = numberOrZero(radiusReductionLeft);
		radiusReductionRight = numberOrZero(radiusReductionRight);
		radiusReductionTop = numberOrZero(radiusReductionTop);
		radiusReductionBottom = numberOrZero(radiusReductionBottom);

		me.drawingArea = Math.min(
			Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
			Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
		me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
	},

	setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
		var me = this;
		var maxRight = me.width - rightMovement - me.drawingArea;
		var maxLeft = leftMovement + me.drawingArea;
		var maxTop = topMovement + me.drawingArea;
		var maxBottom = (me.height - me.paddingTop) - bottomMovement - me.drawingArea;

		me.xCenter = Math.floor(((maxLeft + maxRight) / 2) + me.left);
		me.yCenter = Math.floor(((maxTop + maxBottom) / 2) + me.top + me.paddingTop);
	},

	getIndexAngle: function(index) {
		var chart = this.chart;
		var angleMultiplier = 360 / chart.data.labels.length;
		var options = chart.options || {};
		var startAngle = options.startAngle || 0;

		// Start from the top instead of right, so remove a quarter of the circle
		var angle = (index * angleMultiplier + startAngle) % 360;

		return (angle < 0 ? angle + 360 : angle) * Math.PI * 2 / 360;
	},

	getDistanceFromCenterForValue: function(value) {
		var me = this;

		if (helpers$1.isNullOrUndef(value)) {
			return NaN;
		}

		// Take into account half font size + the yPadding of the top value
		var scalingFactor = me.drawingArea / (me.max - me.min);
		if (me.options.ticks.reverse) {
			return (me.max - value) * scalingFactor;
		}
		return (value - me.min) * scalingFactor;
	},

	getPointPosition: function(index, distanceFromCenter) {
		var me = this;
		var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
		return {
			x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
			y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
		};
	},

	getPointPositionForValue: function(index, value) {
		return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
	},

	getBasePosition: function(index) {
		var me = this;
		var min = me.min;
		var max = me.max;

		return me.getPointPositionForValue(index || 0,
			me.beginAtZero ? 0 :
			min < 0 && max < 0 ? max :
			min > 0 && max > 0 ? min :
			0);
	},

	/**
	 * @private
	 */
	_drawGrid: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;
		var gridLineOpts = opts.gridLines;
		var angleLineOpts = opts.angleLines;
		var lineWidth = valueOrDefault$c(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
		var lineColor = valueOrDefault$c(angleLineOpts.color, gridLineOpts.color);
		var i, offset, position;

		if (opts.pointLabels.display) {
			drawPointLabels(me);
		}

		if (gridLineOpts.display) {
			helpers$1.each(me.ticks, function(label, index) {
				if (index !== 0) {
					offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
					drawRadiusLine(me, gridLineOpts, offset, index);
				}
			});
		}

		if (angleLineOpts.display && lineWidth && lineColor) {
			ctx.save();
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = lineColor;
			if (ctx.setLineDash) {
				ctx.setLineDash(resolve$4([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
				ctx.lineDashOffset = resolve$4([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
			}

			for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
				offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
				position = me.getPointPosition(i, offset);
				ctx.beginPath();
				ctx.moveTo(me.xCenter, me.yCenter);
				ctx.lineTo(position.x, position.y);
				ctx.stroke();
			}

			ctx.restore();
		}
	},

	/**
	 * @private
	 */
	_drawLabels: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;
		var tickOpts = opts.ticks;

		if (!tickOpts.display) {
			return;
		}

		var startAngle = me.getIndexAngle(0);
		var tickFont = helpers$1.options._parseFont(tickOpts);
		var tickFontColor = valueOrDefault$c(tickOpts.fontColor, core_defaults.global.defaultFontColor);
		var offset, width;

		ctx.save();
		ctx.font = tickFont.string;
		ctx.translate(me.xCenter, me.yCenter);
		ctx.rotate(startAngle);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		helpers$1.each(me.ticks, function(label, index) {
			if (index === 0 && !tickOpts.reverse) {
				return;
			}

			offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

			if (tickOpts.showLabelBackdrop) {
				width = ctx.measureText(label).width;
				ctx.fillStyle = tickOpts.backdropColor;

				ctx.fillRect(
					-width / 2 - tickOpts.backdropPaddingX,
					-offset - tickFont.size / 2 - tickOpts.backdropPaddingY,
					width + tickOpts.backdropPaddingX * 2,
					tickFont.size + tickOpts.backdropPaddingY * 2
				);
			}

			ctx.fillStyle = tickFontColor;
			ctx.fillText(label, 0, -offset);
		});

		ctx.restore();
	},

	/**
	 * @private
	 */
	_drawTitle: helpers$1.noop
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$3 = defaultConfig$3;
scale_radialLinear._defaults = _defaults$3;

var deprecated$1 = helpers$1._deprecated;
var resolve$5 = helpers$1.options.resolve;
var valueOrDefault$d = helpers$1.valueOrDefault;

// Integer constants are from the ES6 spec.
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

var INTERVALS = {
	millisecond: {
		common: true,
		size: 1,
		steps: 1000
	},
	second: {
		common: true,
		size: 1000,
		steps: 60
	},
	minute: {
		common: true,
		size: 60000,
		steps: 60
	},
	hour: {
		common: true,
		size: 3600000,
		steps: 24
	},
	day: {
		common: true,
		size: 86400000,
		steps: 30
	},
	week: {
		common: false,
		size: 604800000,
		steps: 4
	},
	month: {
		common: true,
		size: 2.628e9,
		steps: 12
	},
	quarter: {
		common: false,
		size: 7.884e9,
		steps: 4
	},
	year: {
		common: true,
		size: 3.154e10
	}
};

var UNITS = Object.keys(INTERVALS);

function sorter(a, b) {
	return a - b;
}

function arrayUnique(items) {
	var hash = {};
	var out = [];
	var i, ilen, item;

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		item = items[i];
		if (!hash[item]) {
			hash[item] = true;
			out.push(item);
		}
	}

	return out;
}

function getMin(options) {
	return helpers$1.valueOrDefault(options.time.min, options.ticks.min);
}

function getMax(options) {
	return helpers$1.valueOrDefault(options.time.max, options.ticks.max);
}

/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */
function buildLookupTable(timestamps, min, max, distribution) {
	if (distribution === 'linear' || !timestamps.length) {
		return [
			{time: min, pos: 0},
			{time: max, pos: 1}
		];
	}

	var table = [];
	var items = [min];
	var i, ilen, prev, curr, next;

	for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
		curr = timestamps[i];
		if (curr > min && curr < max) {
			items.push(curr);
		}
	}

	items.push(max);

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		next = items[i + 1];
		prev = items[i - 1];
		curr = items[i];

		// only add points that breaks the scale linearity
		if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
			table.push({time: curr, pos: i / (ilen - 1)});
		}
	}

	return table;
}

// @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function lookup(table, key, value) {
	var lo = 0;
	var hi = table.length - 1;
	var mid, i0, i1;

	while (lo >= 0 && lo <= hi) {
		mid = (lo + hi) >> 1;
		i0 = table[mid - 1] || null;
		i1 = table[mid];

		if (!i0) {
			// given value is outside table (before first item)
			return {lo: null, hi: i1};
		} else if (i1[key] < value) {
			lo = mid + 1;
		} else if (i0[key] > value) {
			hi = mid - 1;
		} else {
			return {lo: i0, hi: i1};
		}
	}

	// given value is outside table (after last item)
	return {lo: i1, hi: null};
}

/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */
function interpolate$1(table, skey, sval, tkey) {
	var range = lookup(table, skey, sval);

	// Note: the lookup table ALWAYS contains at least 2 items (min and max)
	var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
	var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;

	var span = next[skey] - prev[skey];
	var ratio = span ? (sval - prev[skey]) / span : 0;
	var offset = (next[tkey] - prev[tkey]) * ratio;

	return prev[tkey] + offset;
}

function toTimestamp(scale, input) {
	var adapter = scale._adapter;
	var options = scale.options.time;
	var parser = options.parser;
	var format = parser || options.format;
	var value = input;

	if (typeof parser === 'function') {
		value = parser(value);
	}

	// Only parse if its not a timestamp already
	if (!helpers$1.isFinite(value)) {
		value = typeof format === 'string'
			? adapter.parse(value, format)
			: adapter.parse(value);
	}

	if (value !== null) {
		return +value;
	}

	// Labels are in an incompatible format and no `parser` has been provided.
	// The user might still use the deprecated `format` option for parsing.
	if (!parser && typeof format === 'function') {
		value = format(input);

		// `format` could return something else than a timestamp, if so, parse it
		if (!helpers$1.isFinite(value)) {
			value = adapter.parse(value);
		}
	}

	return value;
}

function parse(scale, input) {
	if (helpers$1.isNullOrUndef(input)) {
		return null;
	}

	var options = scale.options.time;
	var value = toTimestamp(scale, scale.getRightValue(input));
	if (value === null) {
		return value;
	}

	if (options.round) {
		value = +scale._adapter.startOf(value, options.round);
	}

	return value;
}

/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
	var ilen = UNITS.length;
	var i, interval, factor;

	for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
		interval = INTERVALS[UNITS[i]];
		factor = interval.steps ? interval.steps : MAX_INTEGER;

		if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
			return UNITS[i];
		}
	}

	return UNITS[ilen - 1];
}

/**
 * Figures out what unit to format a set of ticks with
 */
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
	var i, unit;

	for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
		unit = UNITS[i];
		if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
			return unit;
		}
	}

	return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}

function determineMajorUnit(unit) {
	for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
		if (INTERVALS[UNITS[i]].common) {
			return UNITS[i];
		}
	}
}

/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */
function generate(scale, min, max, capacity) {
	var adapter = scale._adapter;
	var options = scale.options;
	var timeOpts = options.time;
	var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
	var stepSize = resolve$5([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
	var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
	var first = min;
	var ticks = [];
	var time;

	// For 'week' unit, handle the first day of week option
	if (weekday) {
		first = +adapter.startOf(first, 'isoWeek', weekday);
	}

	// Align first ticks on unit
	first = +adapter.startOf(first, weekday ? 'day' : minor);

	// Prevent browser from freezing in case user options request millions of milliseconds
	if (adapter.diff(max, min, minor) > 100000 * stepSize) {
		throw min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor;
	}

	for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
		ticks.push(time);
	}

	if (time === max || options.bounds === 'ticks') {
		ticks.push(time);
	}

	return ticks;
}

/**
 * Returns the start and end offsets from edges in the form of {start, end}
 * where each value is a relative width to the scale and ranges between 0 and 1.
 * They add extra margins on the both sides by scaling down the original scale.
 * Offsets are added when the `offset` option is true.
 */
function computeOffsets(table, ticks, min, max, options) {
	var start = 0;
	var end = 0;
	var first, last;

	if (options.offset && ticks.length) {
		first = interpolate$1(table, 'time', ticks[0], 'pos');
		if (ticks.length === 1) {
			start = 1 - first;
		} else {
			start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
		}
		last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');
		if (ticks.length === 1) {
			end = last;
		} else {
			end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
		}
	}

	return {start: start, end: end, factor: 1 / (start + 1 + end)};
}

function setMajorTicks(scale, ticks, map, majorUnit) {
	var adapter = scale._adapter;
	var first = +adapter.startOf(ticks[0].value, majorUnit);
	var last = ticks[ticks.length - 1].value;
	var major, index;

	for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
		index = map[major];
		if (index >= 0) {
			ticks[index].major = true;
		}
	}
	return ticks;
}

function ticksFromTimestamps(scale, values, majorUnit) {
	var ticks = [];
	var map = {};
	var ilen = values.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = values[i];
		map[value] = i;

		ticks.push({
			value: value,
			major: false
		});
	}

	// We set the major ticks separately from the above loop because calling startOf for every tick
	// is expensive when there is a large number of ticks
	return (ilen === 0 || !majorUnit) ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}

var defaultConfig$4 = {
	position: 'bottom',

	/**
	 * Data distribution along the scale:
	 * - 'linear': data are spread according to their time (distances can vary),
	 * - 'series': data are spread at the same distance from each other.
	 * @see https://github.com/chartjs/Chart.js/pull/4507
	 * @since 2.7.0
	 */
	distribution: 'linear',

	/**
	 * Scale boundary strategy (bypassed by min/max time options)
	 * - `data`: make sure data are fully visible, ticks outside are removed
	 * - `ticks`: make sure ticks are fully visible, data outside are truncated
	 * @see https://github.com/chartjs/Chart.js/pull/4556
	 * @since 2.7.0
	 */
	bounds: 'data',

	adapters: {},
	time: {
		parser: false, // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
		unit: false, // false == automatic or override with week, month, year, etc.
		round: false, // none, or override with week, month, year, etc.
		displayFormat: false, // DEPRECATED
		isoWeekday: false, // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
		minUnit: 'millisecond',
		displayFormats: {}
	},
	ticks: {
		autoSkip: false,

		/**
		 * Ticks generation input values:
		 * - 'auto': generates "optimal" ticks based on scale size and time options.
		 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
		 * - 'labels': generates ticks from user given `data.labels` values ONLY.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */
		source: 'auto',

		major: {
			enabled: false
		}
	}
};

var scale_time = core_scale.extend({
	initialize: function() {
		this.mergeTicksOptions();
		core_scale.prototype.initialize.call(this);
	},

	update: function() {
		var me = this;
		var options = me.options;
		var time = options.time || (options.time = {});
		var adapter = me._adapter = new core_adapters._date(options.adapters.date);

		// DEPRECATIONS: output a message only one time per update
		deprecated$1('time scale', time.format, 'time.format', 'time.parser');
		deprecated$1('time scale', time.min, 'time.min', 'ticks.min');
		deprecated$1('time scale', time.max, 'time.max', 'ticks.max');

		// Backward compatibility: before introducing adapter, `displayFormats` was
		// supposed to contain *all* unit/string pairs but this can't be resolved
		// when loading the scale (adapters are loaded afterward), so let's populate
		// missing formats on update
		helpers$1.mergeIf(time.displayFormats, adapter.formats());

		return core_scale.prototype.update.apply(me, arguments);
	},

	/**
	 * Allows data to be referenced via 't' attribute
	 */
	getRightValue: function(rawValue) {
		if (rawValue && rawValue.t !== undefined) {
			rawValue = rawValue.t;
		}
		return core_scale.prototype.getRightValue.call(this, rawValue);
	},

	determineDataLimits: function() {
		var me = this;
		var chart = me.chart;
		var adapter = me._adapter;
		var options = me.options;
		var unit = options.time.unit || 'day';
		var min = MAX_INTEGER;
		var max = MIN_INTEGER;
		var timestamps = [];
		var datasets = [];
		var labels = [];
		var i, j, ilen, jlen, data, timestamp, labelsAdded;
		var dataLabels = me._getLabels();

		for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
			labels.push(parse(me, dataLabels[i]));
		}

		for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
			if (chart.isDatasetVisible(i)) {
				data = chart.data.datasets[i].data;

				// Let's consider that all data have the same format.
				if (helpers$1.isObject(data[0])) {
					datasets[i] = [];

					for (j = 0, jlen = data.length; j < jlen; ++j) {
						timestamp = parse(me, data[j]);
						timestamps.push(timestamp);
						datasets[i][j] = timestamp;
					}
				} else {
					datasets[i] = labels.slice(0);
					if (!labelsAdded) {
						timestamps = timestamps.concat(labels);
						labelsAdded = true;
					}
				}
			} else {
				datasets[i] = [];
			}
		}

		if (labels.length) {
			min = Math.min(min, labels[0]);
			max = Math.max(max, labels[labels.length - 1]);
		}

		if (timestamps.length) {
			timestamps = ilen > 1 ? arrayUnique(timestamps).sort(sorter) : timestamps.sort(sorter);
			min = Math.min(min, timestamps[0]);
			max = Math.max(max, timestamps[timestamps.length - 1]);
		}

		min = parse(me, getMin(options)) || min;
		max = parse(me, getMax(options)) || max;

		// In case there is no valid min/max, set limits based on unit time option
		min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
		max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max;

		// Make sure that max is strictly higher than min (required by the lookup table)
		me.min = Math.min(min, max);
		me.max = Math.max(min + 1, max);

		// PRIVATE
		me._table = [];
		me._timestamps = {
			data: timestamps,
			datasets: datasets,
			labels: labels
		};
	},

	buildTicks: function() {
		var me = this;
		var min = me.min;
		var max = me.max;
		var options = me.options;
		var tickOpts = options.ticks;
		var timeOpts = options.time;
		var timestamps = me._timestamps;
		var ticks = [];
		var capacity = me.getLabelCapacity(min);
		var source = tickOpts.source;
		var distribution = options.distribution;
		var i, ilen, timestamp;

		if (source === 'data' || (source === 'auto' && distribution === 'series')) {
			timestamps = timestamps.data;
		} else if (source === 'labels') {
			timestamps = timestamps.labels;
		} else {
			timestamps = generate(me, min, max, capacity);
		}

		if (options.bounds === 'ticks' && timestamps.length) {
			min = timestamps[0];
			max = timestamps[timestamps.length - 1];
		}

		// Enforce limits with user min/max options
		min = parse(me, getMin(options)) || min;
		max = parse(me, getMax(options)) || max;

		// Remove ticks outside the min/max range
		for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
			timestamp = timestamps[i];
			if (timestamp >= min && timestamp <= max) {
				ticks.push(timestamp);
			}
		}

		me.min = min;
		me.max = max;

		// PRIVATE
		// determineUnitForFormatting relies on the number of ticks so we don't use it when
		// autoSkip is enabled because we don't yet know what the final number of ticks will be
		me._unit = timeOpts.unit || (tickOpts.autoSkip
			? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, capacity)
			: determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
		me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined
			: determineMajorUnit(me._unit);
		me._table = buildLookupTable(me._timestamps.data, min, max, distribution);
		me._offsets = computeOffsets(me._table, ticks, min, max, options);

		if (tickOpts.reverse) {
			ticks.reverse();
		}

		return ticksFromTimestamps(me, ticks, me._majorUnit);
	},

	getLabelForIndex: function(index, datasetIndex) {
		var me = this;
		var adapter = me._adapter;
		var data = me.chart.data;
		var timeOpts = me.options.time;
		var label = data.labels && index < data.labels.length ? data.labels[index] : '';
		var value = data.datasets[datasetIndex].data[index];

		if (helpers$1.isObject(value)) {
			label = me.getRightValue(value);
		}
		if (timeOpts.tooltipFormat) {
			return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
		}
		if (typeof label === 'string') {
			return label;
		}
		return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
	},

	/**
	 * Function to format an individual tick mark
	 * @private
	 */
	tickFormatFunction: function(time, index, ticks, format) {
		var me = this;
		var adapter = me._adapter;
		var options = me.options;
		var formats = options.time.displayFormats;
		var minorFormat = formats[me._unit];
		var majorUnit = me._majorUnit;
		var majorFormat = formats[majorUnit];
		var tick = ticks[index];
		var tickOpts = options.ticks;
		var major = majorUnit && majorFormat && tick && tick.major;
		var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
		var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
		var formatter = resolve$5([
			nestedTickOpts.callback,
			nestedTickOpts.userCallback,
			tickOpts.callback,
			tickOpts.userCallback
		]);

		return formatter ? formatter(label, index, ticks) : label;
	},

	convertTicksToLabels: function(ticks) {
		var labels = [];
		var i, ilen;

		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
		}

		return labels;
	},

	/**
	 * @private
	 */
	getPixelForOffset: function(time) {
		var me = this;
		var offsets = me._offsets;
		var pos = interpolate$1(me._table, 'time', time, 'pos');
		return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
	},

	getPixelForValue: function(value, index, datasetIndex) {
		var me = this;
		var time = null;

		if (index !== undefined && datasetIndex !== undefined) {
			time = me._timestamps.datasets[datasetIndex][index];
		}

		if (time === null) {
			time = parse(me, value);
		}

		if (time !== null) {
			return me.getPixelForOffset(time);
		}
	},

	getPixelForTick: function(index) {
		var ticks = this.getTicks();
		return index >= 0 && index < ticks.length ?
			this.getPixelForOffset(ticks[index].value) :
			null;
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var offsets = me._offsets;
		var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
		var time = interpolate$1(me._table, 'pos', pos, 'time');

		// DEPRECATION, we should return time directly
		return me._adapter._create(time);
	},

	/**
	 * @private
	 */
	_getLabelSize: function(label) {
		var me = this;
		var ticksOpts = me.options.ticks;
		var tickLabelWidth = me.ctx.measureText(label).width;
		var angle = helpers$1.toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
		var cosRotation = Math.cos(angle);
		var sinRotation = Math.sin(angle);
		var tickFontSize = valueOrDefault$d(ticksOpts.fontSize, core_defaults.global.defaultFontSize);

		return {
			w: (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation),
			h: (tickLabelWidth * sinRotation) + (tickFontSize * cosRotation)
		};
	},

	/**
	 * Crude approximation of what the label width might be
	 * @private
	 */
	getLabelWidth: function(label) {
		return this._getLabelSize(label).w;
	},

	/**
	 * @private
	 */
	getLabelCapacity: function(exampleTime) {
		var me = this;
		var timeOpts = me.options.time;
		var displayFormats = timeOpts.displayFormats;

		// pick the longest format (milliseconds) for guestimation
		var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
		var exampleLabel = me.tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);
		var size = me._getLabelSize(exampleLabel);
		var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h);

		if (me.options.offset) {
			capacity--;
		}

		return capacity > 0 ? capacity : 1;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$4 = defaultConfig$4;
scale_time._defaults = _defaults$4;

var scales = {
	category: scale_category,
	linear: scale_linear,
	logarithmic: scale_logarithmic,
	radialLinear: scale_radialLinear,
	time: scale_time
};

var FORMATS = {
	datetime: 'MMM D, YYYY, h:mm:ss a',
	millisecond: 'h:mm:ss.SSS a',
	second: 'h:mm:ss a',
	minute: 'h:mm a',
	hour: 'hA',
	day: 'MMM D',
	week: 'll',
	month: 'MMM YYYY',
	quarter: '[Q]Q - YYYY',
	year: 'YYYY'
};

core_adapters._date.override(typeof moment === 'function' ? {
	_id: 'moment', // DEBUG ONLY

	formats: function() {
		return FORMATS;
	},

	parse: function(value, format) {
		if (typeof value === 'string' && typeof format === 'string') {
			value = moment(value, format);
		} else if (!(value instanceof moment)) {
			value = moment(value);
		}
		return value.isValid() ? value.valueOf() : null;
	},

	format: function(time, format) {
		return moment(time).format(format);
	},

	add: function(time, amount, unit) {
		return moment(time).add(amount, unit).valueOf();
	},

	diff: function(max, min, unit) {
		return moment(max).diff(moment(min), unit);
	},

	startOf: function(time, unit, weekday) {
		time = moment(time);
		if (unit === 'isoWeek') {
			return time.isoWeekday(weekday).valueOf();
		}
		return time.startOf(unit).valueOf();
	},

	endOf: function(time, unit) {
		return moment(time).endOf(unit).valueOf();
	},

	// DEPRECATIONS

	/**
	 * Provided for backward compatibility with scale.getValueForPixel().
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 * @private
	 */
	_create: function(time) {
		return moment(time);
	},
} : {});

core_defaults._set('global', {
	plugins: {
		filler: {
			propagate: true
		}
	}
});

var mappers = {
	dataset: function(source) {
		var index = source.fill;
		var chart = source.chart;
		var meta = chart.getDatasetMeta(index);
		var visible = meta && chart.isDatasetVisible(index);
		var points = (visible && meta.dataset._children) || [];
		var length = points.length || 0;

		return !length ? null : function(point, i) {
			return (i < length && points[i]._view) || null;
		};
	},

	boundary: function(source) {
		var boundary = source.boundary;
		var x = boundary ? boundary.x : null;
		var y = boundary ? boundary.y : null;

		if (helpers$1.isArray(boundary)) {
			return function(point, i) {
				return boundary[i];
			};
		}

		return function(point) {
			return {
				x: x === null ? point.x : x,
				y: y === null ? point.y : y,
			};
		};
	}
};

// @todo if (fill[0] === '#')
function decodeFill(el, index, count) {
	var model = el._model || {};
	var fill = model.fill;
	var target;

	if (fill === undefined) {
		fill = !!model.backgroundColor;
	}

	if (fill === false || fill === null) {
		return false;
	}

	if (fill === true) {
		return 'origin';
	}

	target = parseFloat(fill, 10);
	if (isFinite(target) && Math.floor(target) === target) {
		if (fill[0] === '-' || fill[0] === '+') {
			target = index + target;
		}

		if (target === index || target < 0 || target >= count) {
			return false;
		}

		return target;
	}

	switch (fill) {
	// compatibility
	case 'bottom':
		return 'start';
	case 'top':
		return 'end';
	case 'zero':
		return 'origin';
	// supported boundaries
	case 'origin':
	case 'start':
	case 'end':
		return fill;
	// invalid fill values
	default:
		return false;
	}
}

function computeLinearBoundary(source) {
	var model = source.el._model || {};
	var scale = source.el._scale || {};
	var fill = source.fill;
	var target = null;
	var horizontal;

	if (isFinite(fill)) {
		return null;
	}

	// Backward compatibility: until v3, we still need to support boundary values set on
	// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
	// controllers might still use it (e.g. the Smith chart).

	if (fill === 'start') {
		target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
	} else if (fill === 'end') {
		target = model.scaleTop === undefined ? scale.top : model.scaleTop;
	} else if (model.scaleZero !== undefined) {
		target = model.scaleZero;
	} else if (scale.getBasePixel) {
		target = scale.getBasePixel();
	}

	if (target !== undefined && target !== null) {
		if (target.x !== undefined && target.y !== undefined) {
			return target;
		}

		if (helpers$1.isFinite(target)) {
			horizontal = scale.isHorizontal();
			return {
				x: horizontal ? target : null,
				y: horizontal ? null : target
			};
		}
	}

	return null;
}

function computeCircularBoundary(source) {
	var scale = source.el._scale;
	var options = scale.options;
	var length = scale.chart.data.labels.length;
	var fill = source.fill;
	var target = [];
	var start, end, center, i, point;

	if (!length) {
		return null;
	}

	start = options.ticks.reverse ? scale.max : scale.min;
	end = options.ticks.reverse ? scale.min : scale.max;
	center = scale.getPointPositionForValue(0, start);
	for (i = 0; i < length; ++i) {
		point = fill === 'start' || fill === 'end'
			? scale.getPointPositionForValue(i, fill === 'start' ? start : end)
			: scale.getBasePosition(i);
		if (options.gridLines.circular) {
			point.cx = center.x;
			point.cy = center.y;
			point.angle = scale.getIndexAngle(i) - Math.PI / 2;
		}
		target.push(point);
	}
	return target;
}

function computeBoundary(source) {
	var scale = source.el._scale || {};

	if (scale.getPointPositionForValue) {
		return computeCircularBoundary(source);
	}
	return computeLinearBoundary(source);
}

function resolveTarget(sources, index, propagate) {
	var source = sources[index];
	var fill = source.fill;
	var visited = [index];
	var target;

	if (!propagate) {
		return fill;
	}

	while (fill !== false && visited.indexOf(fill) === -1) {
		if (!isFinite(fill)) {
			return fill;
		}

		target = sources[fill];
		if (!target) {
			return false;
		}

		if (target.visible) {
			return fill;
		}

		visited.push(fill);
		fill = target.fill;
	}

	return false;
}

function createMapper(source) {
	var fill = source.fill;
	var type = 'dataset';

	if (fill === false) {
		return null;
	}

	if (!isFinite(fill)) {
		type = 'boundary';
	}

	return mappers[type](source);
}

function isDrawable(point) {
	return point && !point.skip;
}

function drawArea(ctx, curve0, curve1, len0, len1) {
	var i, cx, cy, r;

	if (!len0 || !len1) {
		return;
	}

	// building first area curve (normal)
	ctx.moveTo(curve0[0].x, curve0[0].y);
	for (i = 1; i < len0; ++i) {
		helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
	}

	if (curve1[0].angle !== undefined) {
		cx = curve1[0].cx;
		cy = curve1[0].cy;
		r = Math.sqrt(Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2));
		for (i = len1 - 1; i > 0; --i) {
			ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);
		}
		return;
	}

	// joining the two area curves
	ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);

	// building opposite area curve (reverse)
	for (i = len1 - 1; i > 0; --i) {
		helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
	}
}

function doFill(ctx, points, mapper, view, color, loop) {
	var count = points.length;
	var span = view.spanGaps;
	var curve0 = [];
	var curve1 = [];
	var len0 = 0;
	var len1 = 0;
	var i, ilen, index, p0, p1, d0, d1, loopOffset;

	ctx.beginPath();

	for (i = 0, ilen = count; i < ilen; ++i) {
		index = i % count;
		p0 = points[index]._view;
		p1 = mapper(p0, index, view);
		d0 = isDrawable(p0);
		d1 = isDrawable(p1);

		if (loop && loopOffset === undefined && d0) {
			loopOffset = i + 1;
			ilen = count + loopOffset;
		}

		if (d0 && d1) {
			len0 = curve0.push(p0);
			len1 = curve1.push(p1);
		} else if (len0 && len1) {
			if (!span) {
				drawArea(ctx, curve0, curve1, len0, len1);
				len0 = len1 = 0;
				curve0 = [];
				curve1 = [];
			} else {
				if (d0) {
					curve0.push(p0);
				}
				if (d1) {
					curve1.push(p1);
				}
			}
		}
	}

	drawArea(ctx, curve0, curve1, len0, len1);

	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}

var plugin_filler = {
	id: 'filler',

	afterDatasetsUpdate: function(chart, options) {
		var count = (chart.data.datasets || []).length;
		var propagate = options.propagate;
		var sources = [];
		var meta, i, el, source;

		for (i = 0; i < count; ++i) {
			meta = chart.getDatasetMeta(i);
			el = meta.dataset;
			source = null;

			if (el && el._model && el instanceof elements.Line) {
				source = {
					visible: chart.isDatasetVisible(i),
					fill: decodeFill(el, i, count),
					chart: chart,
					el: el
				};
			}

			meta.$filler = source;
			sources.push(source);
		}

		for (i = 0; i < count; ++i) {
			source = sources[i];
			if (!source) {
				continue;
			}

			source.fill = resolveTarget(sources, i, propagate);
			source.boundary = computeBoundary(source);
			source.mapper = createMapper(source);
		}
	},

	beforeDatasetsDraw: function(chart) {
		var metasets = chart._getSortedVisibleDatasetMetas();
		var ctx = chart.ctx;
		var meta, i, el, view, points, mapper, color;

		for (i = metasets.length - 1; i >= 0; --i) {
			meta = metasets[i].$filler;

			if (!meta || !meta.visible) {
				continue;
			}

			el = meta.el;
			view = el._view;
			points = el._children || [];
			mapper = meta.mapper;
			color = view.backgroundColor || core_defaults.global.defaultColor;

			if (mapper && color && points.length) {
				helpers$1.canvas.clipArea(ctx, chart.chartArea);
				doFill(ctx, points, mapper, view, color, el._loop);
				helpers$1.canvas.unclipArea(ctx);
			}
		}
	}
};

var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
var noop$1 = helpers$1.noop;
var valueOrDefault$e = helpers$1.valueOrDefault;

core_defaults._set('global', {
	legend: {
		display: true,
		position: 'top',
		align: 'center',
		fullWidth: true,
		reverse: false,
		weight: 1000,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		onHover: null,
		onLeave: null,

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var datasets = chart.data.datasets;
				var options = chart.options.legend || {};
				var usePointStyle = options.labels && options.labels.usePointStyle;

				return chart._getSortedDatasetMetas().map(function(meta) {
					var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);

					return {
						text: datasets[meta.index].label,
						fillStyle: style.backgroundColor,
						hidden: !chart.isDatasetVisible(meta.index),
						lineCap: style.borderCapStyle,
						lineDash: style.borderDash,
						lineDashOffset: style.borderDashOffset,
						lineJoin: style.borderJoinStyle,
						lineWidth: style.borderWidth,
						strokeStyle: style.borderColor,
						pointStyle: style.pointStyle,
						rotation: style.rotation,

						// Below is extra data used for toggling the datasets
						datasetIndex: meta.index
					};
				}, this);
			}
		}
	},

	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var datasets = chart.data.datasets;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');

		for (i = 0, ilen = datasets.length; i < ilen; i++) {
			listItem = list.appendChild(document.createElement('li'));
			listItemSpan = listItem.appendChild(document.createElement('span'));
			listItemSpan.style.backgroundColor = datasets[i].backgroundColor;
			if (datasets[i].label) {
				listItem.appendChild(document.createTextNode(datasets[i].label));
			}
		}

		return list.outerHTML;
	}
});

/**
 * Helper function to get the box width based on the usePointStyle option
 * @param {object} labelopts - the label options on the legend
 * @param {number} fontSize - the label font size
 * @return {number} width of the color box area
 */
function getBoxWidth(labelOpts, fontSize) {
	return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ?
		fontSize :
		labelOpts.boxWidth;
}

/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var Legend = core_element.extend({

	initialize: function(config) {
		var me = this;
		helpers$1.extend(me, config);

		// Contains hit boxes for each dataset (in dataset order)
		me.legendHitBoxes = [];

		/**
 		 * @private
 		 */
		me._hoveredItem = null;

		// Are we in doughnut mode which has a different data type
		me.doughnutMode = false;
	},

	// These methods are ordered by lifecycle. Utilities then follow.
	// Any function defined here is inherited by all legend types.
	// Any function can be extended by the legend type

	beforeUpdate: noop$1,
	update: function(maxWidth, maxHeight, margins) {
		var me = this;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = margins;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();
		// Labels
		me.beforeBuildLabels();
		me.buildLabels();
		me.afterBuildLabels();

		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;
	},
	afterUpdate: noop$1,

	//

	beforeSetDimensions: noop$1,
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;

		// Reset minSize
		me.minSize = {
			width: 0,
			height: 0
		};
	},
	afterSetDimensions: noop$1,

	//

	beforeBuildLabels: noop$1,
	buildLabels: function() {
		var me = this;
		var labelOpts = me.options.labels || {};
		var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

		if (labelOpts.filter) {
			legendItems = legendItems.filter(function(item) {
				return labelOpts.filter(item, me.chart.data);
			});
		}

		if (me.options.reverse) {
			legendItems.reverse();
		}

		me.legendItems = legendItems;
	},
	afterBuildLabels: noop$1,

	//

	beforeFit: noop$1,
	fit: function() {
		var me = this;
		var opts = me.options;
		var labelOpts = opts.labels;
		var display = opts.display;

		var ctx = me.ctx;

		var labelFont = helpers$1.options._parseFont(labelOpts);
		var fontSize = labelFont.size;

		// Reset hit boxes
		var hitboxes = me.legendHitBoxes = [];

		var minSize = me.minSize;
		var isHorizontal = me.isHorizontal();

		if (isHorizontal) {
			minSize.width = me.maxWidth; // fill all the width
			minSize.height = display ? 10 : 0;
		} else {
			minSize.width = display ? 10 : 0;
			minSize.height = me.maxHeight; // fill all the height
		}

		// Increase sizes here
		if (!display) {
			me.width = minSize.width = me.height = minSize.height = 0;
			return;
		}
		ctx.font = labelFont.string;

		if (isHorizontal) {
			// Labels

			// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
			var lineWidths = me.lineWidths = [0];
			var totalHeight = 0;

			ctx.textAlign = 'left';
			ctx.textBaseline = 'middle';

			helpers$1.each(me.legendItems, function(legendItem, i) {
				var boxWidth = getBoxWidth(labelOpts, fontSize);
				var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

				if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
					totalHeight += fontSize + labelOpts.padding;
					lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
				}

				// Store the hitbox width and height here. Final position will be updated in `draw`
				hitboxes[i] = {
					left: 0,
					top: 0,
					width: width,
					height: fontSize
				};

				lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
			});

			minSize.height += totalHeight;

		} else {
			var vPadding = labelOpts.padding;
			var columnWidths = me.columnWidths = [];
			var columnHeights = me.columnHeights = [];
			var totalWidth = labelOpts.padding;
			var currentColWidth = 0;
			var currentColHeight = 0;

			helpers$1.each(me.legendItems, function(legendItem, i) {
				var boxWidth = getBoxWidth(labelOpts, fontSize);
				var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

				// If too tall, go to new column
				if (i > 0 && currentColHeight + fontSize + 2 * vPadding > minSize.height) {
					totalWidth += currentColWidth + labelOpts.padding;
					columnWidths.push(currentColWidth); // previous column width
					columnHeights.push(currentColHeight);
					currentColWidth = 0;
					currentColHeight = 0;
				}

				// Get max width
				currentColWidth = Math.max(currentColWidth, itemWidth);
				currentColHeight += fontSize + vPadding;

				// Store the hitbox width and height here. Final position will be updated in `draw`
				hitboxes[i] = {
					left: 0,
					top: 0,
					width: itemWidth,
					height: fontSize
				};
			});

			totalWidth += currentColWidth;
			columnWidths.push(currentColWidth);
			columnHeights.push(currentColHeight);
			minSize.width += totalWidth;
		}

		me.width = minSize.width;
		me.height = minSize.height;
	},
	afterFit: noop$1,

	// Shared Methods
	isHorizontal: function() {
		return this.options.position === 'top' || this.options.position === 'bottom';
	},

	// Actually draw the legend on the canvas
	draw: function() {
		var me = this;
		var opts = me.options;
		var labelOpts = opts.labels;
		var globalDefaults = core_defaults.global;
		var defaultColor = globalDefaults.defaultColor;
		var lineDefault = globalDefaults.elements.line;
		var legendHeight = me.height;
		var columnHeights = me.columnHeights;
		var legendWidth = me.width;
		var lineWidths = me.lineWidths;

		if (!opts.display) {
			return;
		}

		var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
		var ctx = me.ctx;
		var fontColor = valueOrDefault$e(labelOpts.fontColor, globalDefaults.defaultFontColor);
		var labelFont = helpers$1.options._parseFont(labelOpts);
		var fontSize = labelFont.size;
		var cursor;

		// Canvas setup
		ctx.textAlign = rtlHelper.textAlign('left');
		ctx.textBaseline = 'middle';
		ctx.lineWidth = 0.5;
		ctx.strokeStyle = fontColor; // for strikethrough effect
		ctx.fillStyle = fontColor; // render in correct colour
		ctx.font = labelFont.string;

		var boxWidth = getBoxWidth(labelOpts, fontSize);
		var hitboxes = me.legendHitBoxes;

		// current position
		var drawLegendBox = function(x, y, legendItem) {
			if (isNaN(boxWidth) || boxWidth <= 0) {
				return;
			}

			// Set the ctx for the box
			ctx.save();

			var lineWidth = valueOrDefault$e(legendItem.lineWidth, lineDefault.borderWidth);
			ctx.fillStyle = valueOrDefault$e(legendItem.fillStyle, defaultColor);
			ctx.lineCap = valueOrDefault$e(legendItem.lineCap, lineDefault.borderCapStyle);
			ctx.lineDashOffset = valueOrDefault$e(legendItem.lineDashOffset, lineDefault.borderDashOffset);
			ctx.lineJoin = valueOrDefault$e(legendItem.lineJoin, lineDefault.borderJoinStyle);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = valueOrDefault$e(legendItem.strokeStyle, defaultColor);

			if (ctx.setLineDash) {
				// IE 9 and 10 do not support line dash
				ctx.setLineDash(valueOrDefault$e(legendItem.lineDash, lineDefault.borderDash));
			}

			if (labelOpts && labelOpts.usePointStyle) {
				// Recalculate x and y for drawPoint() because its expecting
				// x and y to be center of figure (instead of top left)
				var radius = boxWidth * Math.SQRT2 / 2;
				var centerX = rtlHelper.xPlus(x, boxWidth / 2);
				var centerY = y + fontSize / 2;

				// Draw pointStyle as legend symbol
				helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY, legendItem.rotation);
			} else {
				// Draw box as legend symbol
				ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
				if (lineWidth !== 0) {
					ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
				}
			}

			ctx.restore();
		};

		var fillText = function(x, y, legendItem, textWidth) {
			var halfFontSize = fontSize / 2;
			var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
			var yMiddle = y + halfFontSize;

			ctx.fillText(legendItem.text, xLeft, yMiddle);

			if (legendItem.hidden) {
				// Strikethrough the text if hidden
				ctx.beginPath();
				ctx.lineWidth = 2;
				ctx.moveTo(xLeft, yMiddle);
				ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
				ctx.stroke();
			}
		};

		var alignmentOffset = function(dimension, blockSize) {
			switch (opts.align) {
			case 'start':
				return labelOpts.padding;
			case 'end':
				return dimension - blockSize;
			default: // center
				return (dimension - blockSize + labelOpts.padding) / 2;
			}
		};

		// Horizontal
		var isHorizontal = me.isHorizontal();
		if (isHorizontal) {
			cursor = {
				x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
				y: me.top + labelOpts.padding,
				line: 0
			};
		} else {
			cursor = {
				x: me.left + labelOpts.padding,
				y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
				line: 0
			};
		}

		helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);

		var itemHeight = fontSize + labelOpts.padding;
		helpers$1.each(me.legendItems, function(legendItem, i) {
			var textWidth = ctx.measureText(legendItem.text).width;
			var width = boxWidth + (fontSize / 2) + textWidth;
			var x = cursor.x;
			var y = cursor.y;

			rtlHelper.setWidth(me.minSize.width);

			// Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
			// instead of me.right and me.bottom because me.width and me.height
			// may have been changed since me.minSize was calculated
			if (isHorizontal) {
				if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
					y = cursor.y += itemHeight;
					cursor.line++;
					x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
				}
			} else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
				x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
				cursor.line++;
				y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
			}

			var realX = rtlHelper.x(x);

			drawLegendBox(realX, y, legendItem);

			hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
			hitboxes[i].top = y;

			// Fill the actual label
			fillText(realX, y, legendItem, textWidth);

			if (isHorizontal) {
				cursor.x += width + labelOpts.padding;
			} else {
				cursor.y += itemHeight;
			}
		});

		helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
	},

	/**
	 * @private
	 */
	_getLegendItemAt: function(x, y) {
		var me = this;
		var i, hitBox, lh;

		if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
			// See if we are touching one of the dataset boxes
			lh = me.legendHitBoxes;
			for (i = 0; i < lh.length; ++i) {
				hitBox = lh[i];

				if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
					// Touching an element
					return me.legendItems[i];
				}
			}
		}

		return null;
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 */
	handleEvent: function(e) {
		var me = this;
		var opts = me.options;
		var type = e.type === 'mouseup' ? 'click' : e.type;
		var hoveredItem;

		if (type === 'mousemove') {
			if (!opts.onHover && !opts.onLeave) {
				return;
			}
		} else if (type === 'click') {
			if (!opts.onClick) {
				return;
			}
		} else {
			return;
		}

		// Chart event already has relative position in it
		hoveredItem = me._getLegendItemAt(e.x, e.y);

		if (type === 'click') {
			if (hoveredItem && opts.onClick) {
				// use e.native for backwards compatibility
				opts.onClick.call(me, e.native, hoveredItem);
			}
		} else {
			if (opts.onLeave && hoveredItem !== me._hoveredItem) {
				if (me._hoveredItem) {
					opts.onLeave.call(me, e.native, me._hoveredItem);
				}
				me._hoveredItem = hoveredItem;
			}

			if (opts.onHover && hoveredItem) {
				// use e.native for backwards compatibility
				opts.onHover.call(me, e.native, hoveredItem);
			}
		}
	}
});

function createNewLegendAndAttach(chart, legendOpts) {
	var legend = new Legend({
		ctx: chart.ctx,
		options: legendOpts,
		chart: chart
	});

	core_layouts.configure(chart, legend, legendOpts);
	core_layouts.addBox(chart, legend);
	chart.legend = legend;
}

var plugin_legend = {
	id: 'legend',

	/**
	 * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
	 * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
	_element: Legend,

	beforeInit: function(chart) {
		var legendOpts = chart.options.legend;

		if (legendOpts) {
			createNewLegendAndAttach(chart, legendOpts);
		}
	},

	beforeUpdate: function(chart) {
		var legendOpts = chart.options.legend;
		var legend = chart.legend;

		if (legendOpts) {
			helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

			if (legend) {
				core_layouts.configure(chart, legend, legendOpts);
				legend.options = legendOpts;
			} else {
				createNewLegendAndAttach(chart, legendOpts);
			}
		} else if (legend) {
			core_layouts.removeBox(chart, legend);
			delete chart.legend;
		}
	},

	afterEvent: function(chart, e) {
		var legend = chart.legend;
		if (legend) {
			legend.handleEvent(e);
		}
	}
};

var noop$2 = helpers$1.noop;

core_defaults._set('global', {
	title: {
		display: false,
		fontStyle: 'bold',
		fullWidth: true,
		padding: 10,
		position: 'top',
		text: '',
		weight: 2000         // by default greater than legend (1000) to be above
	}
});

/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var Title = core_element.extend({
	initialize: function(config) {
		var me = this;
		helpers$1.extend(me, config);

		// Contains hit boxes for each dataset (in dataset order)
		me.legendHitBoxes = [];
	},

	// These methods are ordered by lifecycle. Utilities then follow.

	beforeUpdate: noop$2,
	update: function(maxWidth, maxHeight, margins) {
		var me = this;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = margins;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();
		// Labels
		me.beforeBuildLabels();
		me.buildLabels();
		me.afterBuildLabels();

		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;

	},
	afterUpdate: noop$2,

	//

	beforeSetDimensions: noop$2,
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;

		// Reset minSize
		me.minSize = {
			width: 0,
			height: 0
		};
	},
	afterSetDimensions: noop$2,

	//

	beforeBuildLabels: noop$2,
	buildLabels: noop$2,
	afterBuildLabels: noop$2,

	//

	beforeFit: noop$2,
	fit: function() {
		var me = this;
		var opts = me.options;
		var minSize = me.minSize = {};
		var isHorizontal = me.isHorizontal();
		var lineCount, textSize;

		if (!opts.display) {
			me.width = minSize.width = me.height = minSize.height = 0;
			return;
		}

		lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
		textSize = lineCount * helpers$1.options._parseFont(opts).lineHeight + opts.padding * 2;

		me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
		me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
	},
	afterFit: noop$2,

	// Shared Methods
	isHorizontal: function() {
		var pos = this.options.position;
		return pos === 'top' || pos === 'bottom';
	},

	// Actually draw the title block on the canvas
	draw: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;

		if (!opts.display) {
			return;
		}

		var fontOpts = helpers$1.options._parseFont(opts);
		var lineHeight = fontOpts.lineHeight;
		var offset = lineHeight / 2 + opts.padding;
		var rotation = 0;
		var top = me.top;
		var left = me.left;
		var bottom = me.bottom;
		var right = me.right;
		var maxWidth, titleX, titleY;

		ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour
		ctx.font = fontOpts.string;

		// Horizontal
		if (me.isHorizontal()) {
			titleX = left + ((right - left) / 2); // midpoint of the width
			titleY = top + offset;
			maxWidth = right - left;
		} else {
			titleX = opts.position === 'left' ? left + offset : right - offset;
			titleY = top + ((bottom - top) / 2);
			maxWidth = bottom - top;
			rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
		}

		ctx.save();
		ctx.translate(titleX, titleY);
		ctx.rotate(rotation);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		var text = opts.text;
		if (helpers$1.isArray(text)) {
			var y = 0;
			for (var i = 0; i < text.length; ++i) {
				ctx.fillText(text[i], 0, y, maxWidth);
				y += lineHeight;
			}
		} else {
			ctx.fillText(text, 0, 0, maxWidth);
		}

		ctx.restore();
	}
});

function createNewTitleBlockAndAttach(chart, titleOpts) {
	var title = new Title({
		ctx: chart.ctx,
		options: titleOpts,
		chart: chart
	});

	core_layouts.configure(chart, title, titleOpts);
	core_layouts.addBox(chart, title);
	chart.titleBlock = title;
}

var plugin_title = {
	id: 'title',

	/**
	 * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
	 * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
	_element: Title,

	beforeInit: function(chart) {
		var titleOpts = chart.options.title;

		if (titleOpts) {
			createNewTitleBlockAndAttach(chart, titleOpts);
		}
	},

	beforeUpdate: function(chart) {
		var titleOpts = chart.options.title;
		var titleBlock = chart.titleBlock;

		if (titleOpts) {
			helpers$1.mergeIf(titleOpts, core_defaults.global.title);

			if (titleBlock) {
				core_layouts.configure(chart, titleBlock, titleOpts);
				titleBlock.options = titleOpts;
			} else {
				createNewTitleBlockAndAttach(chart, titleOpts);
			}
		} else if (titleBlock) {
			core_layouts.removeBox(chart, titleBlock);
			delete chart.titleBlock;
		}
	}
};

var plugins = {};
var filler = plugin_filler;
var legend = plugin_legend;
var title = plugin_title;
plugins.filler = filler;
plugins.legend = legend;
plugins.title = title;

/**
 * @namespace Chart
 */


core_controller.helpers = helpers$1;

// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
core_helpers();

core_controller._adapters = core_adapters;
core_controller.Animation = core_animation;
core_controller.animationService = core_animations;
core_controller.controllers = controllers;
core_controller.DatasetController = core_datasetController;
core_controller.defaults = core_defaults;
core_controller.Element = core_element;
core_controller.elements = elements;
core_controller.Interaction = core_interaction;
core_controller.layouts = core_layouts;
core_controller.platform = platform;
core_controller.plugins = core_plugins;
core_controller.Scale = core_scale;
core_controller.scaleService = core_scaleService;
core_controller.Ticks = core_ticks;
core_controller.Tooltip = core_tooltip;

// Register built-in scales

core_controller.helpers.each(scales, function(scale, type) {
	core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
});

// Load to register built-in adapters (as side effects)


// Loading built-in plugins

for (var k in plugins) {
	if (plugins.hasOwnProperty(k)) {
		core_controller.plugins.register(plugins[k]);
	}
}

core_controller.platform.initialize();

var src = core_controller;
if (typeof window !== 'undefined') {
	window.Chart = core_controller;
}

// DEPRECATIONS

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Chart
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
core_controller.Chart = core_controller;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Legend
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.Legend = plugins.legend._element;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Title
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.Title = plugins.title._element;

/**
 * Provided for backward compatibility, use Chart.plugins instead
 * @namespace Chart.pluginService
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.pluginService = core_controller.plugins;

/**
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
 * effect, instead simply create/register plugins via plain JavaScript objects.
 * @interface Chart.PluginBase
 * @deprecated since version 2.5.0
 * @todo remove at version 3
 * @private
 */
core_controller.PluginBase = core_controller.Element.extend({});

/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
core_controller.canvasHelpers = core_controller.helpers.canvas;

/**
 * Provided for backward compatibility, use Chart.layouts instead.
 * @namespace Chart.layoutService
 * @deprecated since version 2.7.3
 * @todo remove at version 3
 * @private
 */
core_controller.layoutService = core_controller.layouts;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.LinearScaleBase
 * @deprecated since version 2.8
 * @todo remove at version 3
 * @private
 */
core_controller.LinearScaleBase = scale_linearbase;

/**
 * Provided for backward compatibility, instead we should create a new Chart
 * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 */
core_controller.helpers.each(
	[
		'Bar',
		'Bubble',
		'Doughnut',
		'Line',
		'PolarArea',
		'Radar',
		'Scatter'
	],
	function(klass) {
		core_controller[klass] = function(ctx, cfg) {
			return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
				type: klass.charAt(0).toLowerCase() + klass.slice(1)
			}));
		};
	}
);

return src;

})));

;/*! pace 1.0.2 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(d in b.prototype)try{null==a[d]&&"function"!=typeof b[d]?"function"==typeof Object.defineProperty?e.push(Object.defineProperty(a,d,{get:function(){return b.prototype[d]},configurable:!0,enumerable:!0})):e.push(a[d]=b.prototype[d]):e.push(void 0)}catch(f){c=f}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e,f){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return a.lengthComputable?h.progress=100*a.loaded/a.total:h.progress=h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);
;// 4.5.7 (2017-04-25)
!function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){s[e]=i.apply(null,arguments)})}function i(e){return!!s[e]}function o(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function a(n){var r,i,o,a,l;for(r=0;r<n.length;r++){i=e,o=n[r],a=o.split(/[.\/]/);for(var u=0;u<a.length-1;++u)i[a[u]]===t&&(i[a[u]]={}),i=i[a[u]];i[a[a.length-1]]=s[o]}if(e.AMDLC_TESTS){l=e.privateModules||{};for(o in s)l[o]=s[o];for(r=0;r<n.length;r++)delete l[n[r]];e.privateModules=l}}var s={},l="tinymce/geom/Rect",u="tinymce/util/Promise",c="tinymce/util/Delay",d="tinymce/Env",f="tinymce/dom/EventUtils",p="tinymce/dom/Sizzle",h="tinymce/util/Arr",m="tinymce/util/Tools",g="tinymce/dom/DomQuery",v="tinymce/html/Styles",y="tinymce/dom/TreeWalker",b="tinymce/dom/Range",C="tinymce/html/Entities",x="tinymce/dom/StyleSheetLoader",w="tinymce/dom/DOMUtils",E="tinymce/dom/ScriptLoader",N="tinymce/AddOnManager",_="tinymce/dom/NodeType",S="tinymce/text/Zwsp",k="tinymce/caret/CaretContainer",T="tinymce/dom/RangeUtils",R="tinymce/NodeChange",A="tinymce/html/Node",B="tinymce/html/Schema",D="tinymce/html/SaxParser",L="tinymce/html/DomParser",M="tinymce/html/Writer",P="tinymce/html/Serializer",O="tinymce/dom/Serializer",H="tinymce/dom/TridentSelection",I="tinymce/util/VK",F="tinymce/dom/ControlSelection",z="tinymce/util/Fun",U="tinymce/caret/CaretCandidate",W="tinymce/geom/ClientRect",V="tinymce/text/ExtendingChar",$="tinymce/caret/CaretPosition",q="tinymce/caret/CaretBookmark",j="tinymce/dom/BookmarkManager",Y="tinymce/dom/Selection",X="tinymce/dom/ElementUtils",K="tinymce/fmt/Preview",G="tinymce/fmt/Hooks",J="tinymce/Formatter",Q="tinymce/undo/Diff",Z="tinymce/undo/Fragments",ee="tinymce/undo/Levels",te="tinymce/UndoManager",ne="tinymce/EnterKey",re="tinymce/ForceBlocks",ie="tinymce/caret/CaretUtils",oe="tinymce/caret/CaretWalker",ae="tinymce/InsertList",se="tinymce/InsertContent",le="tinymce/EditorCommands",ue="tinymce/util/URI",ce="tinymce/util/Class",de="tinymce/util/EventDispatcher",fe="tinymce/data/Binding",pe="tinymce/util/Observable",he="tinymce/data/ObservableObject",me="tinymce/ui/Selector",ge="tinymce/ui/Collection",ve="tinymce/ui/DomUtils",ye="tinymce/ui/BoxUtils",be="tinymce/ui/ClassList",Ce="tinymce/ui/ReflowQueue",xe="tinymce/ui/Control",we="tinymce/ui/Factory",Ee="tinymce/ui/KeyboardNavigation",Ne="tinymce/ui/Container",_e="tinymce/ui/DragHelper",Se="tinymce/ui/Scrollable",ke="tinymce/ui/Panel",Te="tinymce/ui/Movable",Re="tinymce/ui/Resizable",Ae="tinymce/ui/FloatPanel",Be="tinymce/ui/Window",De="tinymce/ui/MessageBox",Le="tinymce/WindowManager",Me="tinymce/ui/Tooltip",Pe="tinymce/ui/Widget",Oe="tinymce/ui/Progress",He="tinymce/ui/Notification",Ie="tinymce/NotificationManager",Fe="tinymce/dom/NodePath",ze="tinymce/util/Quirks",Ue="tinymce/EditorObservable",We="tinymce/Mode",Ve="tinymce/Shortcuts",$e="tinymce/file/Uploader",qe="tinymce/file/Conversions",je="tinymce/file/ImageScanner",Ye="tinymce/file/BlobCache",Xe="tinymce/file/UploadStatus",Ke="tinymce/ErrorReporter",Ge="tinymce/EditorUpload",Je="tinymce/caret/FakeCaret",Qe="tinymce/dom/Dimensions",Ze="tinymce/caret/LineWalker",et="tinymce/caret/LineUtils",tt="tinymce/dom/MousePosition",nt="tinymce/DragDropOverrides",rt="tinymce/SelectionOverrides",it="tinymce/util/Uuid",ot="tinymce/ui/Sidebar",at="tinymce/Editor",st="tinymce/util/I18n",lt="tinymce/FocusManager",ut="tinymce/EditorManager",ct="tinymce/LegacyInput",dt="tinymce/util/XHR",ft="tinymce/util/JSON",pt="tinymce/util/JSONRequest",ht="tinymce/util/JSONP",mt="tinymce/util/LocalStorage",gt="tinymce/Compat",vt="tinymce/ui/Layout",yt="tinymce/ui/AbsoluteLayout",bt="tinymce/ui/Button",Ct="tinymce/ui/ButtonGroup",xt="tinymce/ui/Checkbox",wt="tinymce/ui/ComboBox",Et="tinymce/ui/ColorBox",Nt="tinymce/ui/PanelButton",_t="tinymce/ui/ColorButton",St="tinymce/util/Color",kt="tinymce/ui/ColorPicker",Tt="tinymce/ui/Path",Rt="tinymce/ui/ElementPath",At="tinymce/ui/FormItem",Bt="tinymce/ui/Form",Dt="tinymce/ui/FieldSet",Lt="tinymce/content/LinkTargets",Mt="tinymce/ui/FilePicker",Pt="tinymce/ui/FitLayout",Ot="tinymce/ui/FlexLayout",Ht="tinymce/ui/FlowLayout",It="tinymce/fmt/FontInfo",Ft="tinymce/ui/FormatControls",zt="tinymce/ui/GridLayout",Ut="tinymce/ui/Iframe",Wt="tinymce/ui/InfoBox",Vt="tinymce/ui/Label",$t="tinymce/ui/Toolbar",qt="tinymce/ui/MenuBar",jt="tinymce/ui/MenuButton",Yt="tinymce/ui/MenuItem",Xt="tinymce/ui/Throbber",Kt="tinymce/ui/Menu",Gt="tinymce/ui/ListBox",Jt="tinymce/ui/Radio",Qt="tinymce/ui/ResizeHandle",Zt="tinymce/ui/SelectBox",en="tinymce/ui/Slider",tn="tinymce/ui/Spacer",nn="tinymce/ui/SplitButton",rn="tinymce/ui/StackLayout",on="tinymce/ui/TabPanel",an="tinymce/ui/TextBox",sn="tinymce/Register";r(l,[],function(){function e(e,t,n){var r,i,a,s,l,c;return r=t.x,i=t.y,a=e.w,s=e.h,l=t.w,c=t.h,n=(n||"").split(""),"b"===n[0]&&(i+=c),"r"===n[1]&&(r+=l),"c"===n[0]&&(i+=u(c/2)),"c"===n[1]&&(r+=u(l/2)),"b"===n[3]&&(i-=s),"r"===n[4]&&(r-=a),"c"===n[3]&&(i-=u(s/2)),"c"===n[4]&&(r-=u(a/2)),o(r,i,a,s)}function t(t,n,r,i){var o,a;for(a=0;a<i.length;a++)if(o=e(t,n,i[a]),o.x>=r.x&&o.x+o.w<=r.w+r.x&&o.y>=r.y&&o.y+o.h<=r.h+r.y)return i[a];return null}function n(e,t,n){return o(e.x-t,e.y-n,e.w+2*t,e.h+2*n)}function r(e,t){var n,r,i,a;return n=l(e.x,t.x),r=l(e.y,t.y),i=s(e.x+e.w,t.x+t.w),a=s(e.y+e.h,t.y+t.h),i-n<0||a-r<0?null:o(n,r,i-n,a-r)}function i(e,t,n){var r,i,a,s,u,c,d,f,p,h;return u=e.x,c=e.y,d=e.x+e.w,f=e.y+e.h,p=t.x+t.w,h=t.y+t.h,r=l(0,t.x-u),i=l(0,t.y-c),a=l(0,d-p),s=l(0,f-h),u+=r,c+=i,n&&(d+=r,f+=i,u-=a,c-=s),d-=a,f-=s,o(u,c,d-u,f-c)}function o(e,t,n,r){return{x:e,y:t,w:n,h:r}}function a(e){return o(e.left,e.top,e.width,e.height)}var s=Math.min,l=Math.max,u=Math.round;return{inflate:n,relativePosition:e,findBestRelativePosition:t,intersect:r,clamp:i,create:o,fromClientRect:a}}),r(u,[],function(){function e(e,t){return function(){e.apply(t,arguments)}}function t(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(t,e(r,this),e(i,this))}function n(e){var t=this;return null===this._state?void this._deferreds.push(e):void l(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(i){return void e.reject(i)}e.resolve(r)})}function r(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void s(e(n,t),e(r,this),e(i,this))}this._state=!0,this._value=t,o.call(this)}catch(a){i.call(this,a)}}function i(e){this._state=!1,this._value=e,o.call(this)}function o(){for(var e=0,t=this._deferreds.length;e<t;e++)n.call(this,this._deferreds[e]);this._deferreds=null}function a(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function s(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(i){if(r)return;r=!0,n(i)}}if(window.Promise)return window.Promise;var l=t.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)},u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,r){var i=this;return new t(function(t,o){n.call(i,new a(e,r,t,o))})},t.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&u(arguments[0])?arguments[0]:arguments);return new t(function(t,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(o,e)},n)}e[o]=a,0===--i&&t(e)}catch(l){n(l)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.race=function(e){return new t(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},t}),r(c,[u],function(e){function t(e,t){function n(e){window.setTimeout(e,0)}var r,i=window.requestAnimationFrame,o=["ms","moz","webkit"];for(r=0;r<o.length&&!i;r++)i=window[o[r]+"RequestAnimationFrame"];i||(i=n),i(e,t)}function n(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)}function r(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)}function i(e){return clearTimeout(e)}function o(e){return clearInterval(e)}function a(e,t){var r,i;return i=function(){var i=arguments;clearTimeout(r),r=n(function(){e.apply(this,i)},t)},i.stop=function(){clearTimeout(r)},i}var s;return{requestAnimationFrame:function(n,r){return s?void s.then(n):void(s=new e(function(e){r||(r=document.body),t(e,r)}).then(n))},setTimeout:n,setInterval:r,setEditorTimeout:function(e,t,r){return n(function(){e.removed||t()},r)},setEditorInterval:function(e,t,n){var i;return i=r(function(){e.removed?clearInterval(i):t()},n)},debounce:a,throttle:a,clearInterval:o,clearTimeout:i}}),r(d,[],function(){function e(e){return"matchMedia"in window&&matchMedia(e).matches}var t=navigator,n=t.userAgent,r,i,o,a,s,l,u,c,d,f,p,h,m;r=window.opera&&window.opera.buildNumber,d=/Android/.test(n),i=/WebKit/.test(n),o=!i&&!r&&/MSIE/gi.test(n)&&/Explorer/gi.test(t.appName),o=o&&/MSIE (\w+)\./.exec(n)[1],a=n.indexOf("Trident/")!=-1&&(n.indexOf("rv:")!=-1||t.appName.indexOf("Netscape")!=-1)&&11,s=n.indexOf("Edge/")!=-1&&!o&&!a&&12,o=o||a||s,l=!i&&!a&&/Gecko/.test(n),u=n.indexOf("Mac")!=-1,c=/(iPad|iPhone)/.test(n),f="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,p=e("only screen and (max-device-width: 480px)")&&(d||c),h=e("only screen and (min-width: 800px)")&&(d||c),m=n.indexOf("Windows Phone")!=-1,s&&(i=!1);var g=!c||f||n.match(/AppleWebKit\/(\d*)/)[1]>=534;return{opera:r,webkit:i,ie:o,gecko:l,mac:u,iOS:c,android:d,contentEditable:g,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!=o,range:window.getSelection&&"Range"in window,documentMode:o&&!s?document.documentMode||7:10,fileApi:f,ceFalse:o===!1||o>8,canHaveCSP:o===!1||o>11,desktop:!p&&!h,windowsPhone:m}}),r(f,[c,d],function(e,t){function n(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function r(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)}function i(e,t){var n,r=t;return n=e.path,n&&n.length>0&&(r=n[0]),e.deepPath&&(n=e.deepPath(),n&&n.length>0&&(r=n[0])),r}function o(e,n){function r(){return!1}function o(){return!0}var a,s=n||{},l;for(a in e)c[a]||(s[a]=e[a]);if(s.target||(s.target=s.srcElement||document),t.experimentalShadowDom&&(s.target=i(e,s.target)),e&&u.test(e.type)&&e.pageX===l&&e.clientX!==l){var d=s.target.ownerDocument||document,f=d.documentElement,p=d.body;s.pageX=e.clientX+(f&&f.scrollLeft||p&&p.scrollLeft||0)-(f&&f.clientLeft||p&&p.clientLeft||0),s.pageY=e.clientY+(f&&f.scrollTop||p&&p.scrollTop||0)-(f&&f.clientTop||p&&p.clientTop||0)}return s.preventDefault=function(){s.isDefaultPrevented=o,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},s.stopPropagation=function(){s.isPropagationStopped=o,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},s.stopImmediatePropagation=function(){s.isImmediatePropagationStopped=o,s.stopPropagation()},s.isDefaultPrevented||(s.isDefaultPrevented=r,s.isPropagationStopped=r,s.isImmediatePropagationStopped=r),"undefined"==typeof s.metaKey&&(s.metaKey=!1),s}function a(t,i,o){function a(){o.domLoaded||(o.domLoaded=!0,i(c))}function s(){("complete"===u.readyState||"interactive"===u.readyState&&u.body)&&(r(u,"readystatechange",s),a())}function l(){try{u.documentElement.doScroll("left")}catch(t){return void e.setTimeout(l)}a()}var u=t.document,c={type:"ready"};return o.domLoaded?void i(c):(u.addEventListener?"complete"===u.readyState?a():n(t,"DOMContentLoaded",a):(n(u,"readystatechange",s),u.documentElement.doScroll&&t.self===t.top&&l()),void n(t,"load",a))}function s(){function e(e,t){var n,r,o,a,s=i[t];if(n=s&&s[e.type])for(r=0,o=n.length;r<o;r++)if(a=n[r],a&&a.func.call(a.scope,e)===!1&&e.preventDefault(),e.isImmediatePropagationStopped())return}var t=this,i={},s,u,c,d,f;u=l+(+new Date).toString(32),d="onmouseenter"in document.documentElement,c="onfocusin"in document.documentElement,f={mouseenter:"mouseover",mouseleave:"mouseout"},s=1,t.domLoaded=!1,t.events=i,t.bind=function(r,l,p,h){function m(t){e(o(t||E.event),g)}var g,v,y,b,C,x,w,E=window;if(r&&3!==r.nodeType&&8!==r.nodeType){for(r[u]?g=r[u]:(g=s++,r[u]=g,i[g]={}),h=h||r,l=l.split(" "),y=l.length;y--;)b=l[y],x=m,C=w=!1,"DOMContentLoaded"===b&&(b="ready"),t.domLoaded&&"ready"===b&&"complete"==r.readyState?p.call(h,o({type:b})):(d||(C=f[b],C&&(x=function(t){var n,r;if(n=t.currentTarget,r=t.relatedTarget,r&&n.contains)r=n.contains(r);else for(;r&&r!==n;)r=r.parentNode;r||(t=o(t||E.event),t.type="mouseout"===t.type?"mouseleave":"mouseenter",t.target=n,e(t,g))})),c||"focusin"!==b&&"focusout"!==b||(w=!0,C="focusin"===b?"focus":"blur",x=function(t){t=o(t||E.event),t.type="focus"===t.type?"focusin":"focusout",e(t,g)}),v=i[g][b],v?"ready"===b&&t.domLoaded?p({type:b}):v.push({func:p,scope:h}):(i[g][b]=v=[{func:p,scope:h}],v.fakeName=C,v.capture=w,v.nativeHandler=x,"ready"===b?a(r,x,t):n(r,C||b,x,w)));return r=v=0,p}},t.unbind=function(e,n,o){var a,s,l,c,d,f;if(!e||3===e.nodeType||8===e.nodeType)return t;if(a=e[u]){if(f=i[a],n){for(n=n.split(" "),l=n.length;l--;)if(d=n[l],s=f[d]){if(o)for(c=s.length;c--;)if(s[c].func===o){var p=s.nativeHandler,h=s.fakeName,m=s.capture;s=s.slice(0,c).concat(s.slice(c+1)),s.nativeHandler=p,s.fakeName=h,s.capture=m,f[d]=s}o&&0!==s.length||(delete f[d],r(e,s.fakeName||d,s.nativeHandler,s.capture))}}else{for(d in f)s=f[d],r(e,s.fakeName||d,s.nativeHandler,s.capture);f={}}for(d in f)return t;delete i[a];try{delete e[u]}catch(g){e[u]=null}}return t},t.fire=function(n,r,i){var a;if(!n||3===n.nodeType||8===n.nodeType)return t;i=o(null,i),i.type=r,i.target=n;do a=n[u],a&&e(i,a),n=n.parentNode||n.ownerDocument||n.defaultView||n.parentWindow;while(n&&!i.isPropagationStopped());return t},t.clean=function(e){var n,r,i=t.unbind;if(!e||3===e.nodeType||8===e.nodeType)return t;if(e[u]&&i(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(i(e),r=e.getElementsByTagName("*"),n=r.length;n--;)e=r[n],e[u]&&i(e);return t},t.destroy=function(){i={}},t.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}}var l="mce-data-",u=/^(?:mouse|contextmenu)|click/,c={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1};return s.Event=new s,s.Event.bind(window,"ready",function(){}),s}),r(p,[],function(){function e(e,t,n,r){var i,o,a,s,l,u,d,p,h,m;if((t?t.ownerDocument||t:z)!==D&&B(t),t=t||D,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(M&&!r){if(i=ve.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&I(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&x.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(x.qsa&&(!P||!P.test(e))){if(p=d=F,h=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=_(e),(d=t.getAttribute("id"))?p=d.replace(be,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",l=u.length;l--;)u[l]=p+f(u[l]);h=ye.test(e)&&c(t.parentNode)||t,m=u.join(",")}if(m)try{return Z.apply(n,h.querySelectorAll(m)),n}catch(g){}finally{d||t.removeAttribute("id")}}}return k(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=D.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)w.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||X)-(~e.sourceIndex||X);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&typeof e.getElementsByTagName!==Y&&e}function d(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=W++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u=[U,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[F]||(t[F]={}),(s=l[r])&&s[0]===U&&s[1]===o)return u[2]=s[2];if(l[r]=u,u[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(t,n,r){for(var i=0,o=n.length;i<o;i++)e(t,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),u&&t.push(s)));return a}function v(e,t,n,i,o,a){return i&&!i[F]&&(i=v(i)),o&&!o[F]&&(o=v(o,a)),r(function(r,a,s,l){var u,c,d,f=[],p=[],h=a.length,v=r||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:g(v,f,e,s,l),b=n?o||(r?e:h||i)?[]:a:y;if(n&&n(y,b,s,l),i)for(u=g(b,p),i(u,[],s,l),c=u.length;c--;)(d=u[c])&&(b[p[c]]=!(y[p[c]]=d));if(r){if(o||e){if(o){for(u=[],c=b.length;c--;)(d=b[c])&&u.push(y[c]=d);o(null,b=[],u,l)}for(c=b.length;c--;)(d=b[c])&&(u=o?te.call(r,d):f[c])>-1&&(r[u]=!(a[u]=d))}}else b=g(b===a?b.splice(h,b.length):b),o?o(null,a,b,l):Z.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,l=p(function(e){return e===t},a,!0),u=p(function(e){return te.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==T)||((t=n).nodeType?l(e,n,r):u(e,n,r))}];s<i;s++)if(n=w.relative[e[s].type])c=[p(h(c),n)];else{if(n=w.filter[e[s].type].apply(null,e[s].matches),n[F]){for(r=++s;r<i&&!w.relative[e[r].type];r++);return v(s>1&&h(c),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<r&&y(e.slice(s,r)),r<i&&y(e=e.slice(r)),r<i&&f(e))}c.push(n)}return h(c)}function b(t,n){var i=n.length>0,o=t.length>0,a=function(r,a,s,l,u){var c,d,f,p=0,h="0",m=r&&[],v=[],y=T,b=r||o&&w.find.TAG("*",u),C=U+=null==y?1:Math.random()||.1,x=b.length;for(u&&(T=a!==D&&a);h!==x&&null!=(c=b[h]);h++){if(o&&c){for(d=0;f=t[d++];)if(f(c,a,s)){l.push(c);break}u&&(U=C)}i&&((c=!f&&c)&&p--,r&&m.push(c))}if(p+=h,i&&h!==p){for(d=0;f=n[d++];)f(m,v,a,s);if(r){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=J.call(l));v=g(v)}Z.apply(l,v),u&&!r&&v.length>0&&p+n.length>1&&e.uniqueSort(l)}return u&&(U=C,T=y),m};return i?r(a):a}var C,x,w,E,N,_,S,k,T,R,A,B,D,L,M,P,O,H,I,F="sizzle"+-new Date,z=window.document,U=0,W=0,V=n(),$=n(),q=n(),j=function(e,t){return e===t&&(A=!0),0},Y=typeof t,X=1<<31,K={}.hasOwnProperty,G=[],J=G.pop,Q=G.push,Z=G.push,ee=G.slice,te=G.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe="\\["+re+"*("+ie+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+re+"*\\]",ae=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),le=new RegExp("^"+re+"*,"+re+"*"),ue=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),ce=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),de=new RegExp(ae),fe=new RegExp("^"+ie+"$"),pe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,be=/'|\\/g,Ce=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),xe=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(G=ee.call(z.childNodes),z.childNodes),G[z.childNodes.length].nodeType}catch(we){Z={apply:G.length?function(e,t){Q.apply(e,ee.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}x=e.support={},N=e.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},B=e.setDocument=function(e){function t(e){try{return e.top}catch(t){}return null}var n,r=e?e.ownerDocument||e:z,o=r.defaultView;return r!==D&&9===r.nodeType&&r.documentElement?(D=r,L=r.documentElement,M=!N(r),o&&o!==t(o)&&(o.addEventListener?o.addEventListener("unload",function(){B()},!1):o.attachEvent&&o.attachEvent("onunload",function(){B()})),x.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ge.test(r.getElementsByClassName),x.getById=i(function(e){return L.appendChild(e).id=F,!r.getElementsByName||!r.getElementsByName(F).length}),x.getById?(w.find.ID=function(e,t){if(typeof t.getElementById!==Y&&M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},w.filter.ID=function(e){var t=e.replace(Ce,xe);return function(e){return e.getAttribute("id")===t}}):(delete w.find.ID,w.filter.ID=function(e){var t=e.replace(Ce,xe);return function(e){var n=typeof e.getAttributeNode!==Y&&e.getAttributeNode("id");return n&&n.value===t}}),w.find.TAG=x.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Y)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=x.getElementsByClassName&&function(e,t){if(M)return t.getElementsByClassName(e)},O=[],P=[],(x.qsa=ge.test(r.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+re+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+re+"*(?:value|"+ne+")"),e.querySelectorAll(":checked").length||P.push(":checked")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+re+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(x.matchesSelector=ge.test(H=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&i(function(e){x.disconnectedMatch=H.call(e,"div"),H.call(e,"[s!='']:x"),O.push("!=",ae)}),P=P.length&&new RegExp(P.join("|")),O=O.length&&new RegExp(O.join("|")),n=ge.test(L.compareDocumentPosition),I=n||ge.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},j=n?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===z&&I(z,e)?-1:t===r||t.ownerDocument===z&&I(z,t)?1:R?te.call(R,e)-te.call(R,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:R?te.call(R,e)-te.call(R,t):0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;l[i]===u[i];)i++;return i?a(l[i],u[i]):l[i]===z?-1:u[i]===z?1:0},r):D},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==D&&B(t),n=n.replace(ce,"='$1']"),x.matchesSelector&&M&&(!O||!O.test(n))&&(!P||!P.test(n)))try{var r=H.call(t,n);if(r||x.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(i){}return e(n,D,null,[t]).length>0},e.contains=function(e,t){return(e.ownerDocument||e)!==D&&B(e),I(e,t)},e.attr=function(e,n){(e.ownerDocument||e)!==D&&B(e);var r=w.attrHandle[n.toLowerCase()],i=r&&K.call(w.attrHandle,n.toLowerCase())?r(e,n,!M):t;return i!==t?i:x.attributes||!M?e.getAttribute(n):(i=e.getAttributeNode(n))&&i.specified?i.value:null},e.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},e.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!x.detectDuplicates,R=!x.sortStable&&e.slice(0),e.sort(j),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return R=null,e},E=e.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},w=e.selectors={cacheLength:50,createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ce,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(Ce,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=_(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ce,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=V[e+" "];return t||(t=new RegExp("(^|"+re+")"+e+"("+re+"|$)"))&&V(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Y&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(i){var o=e.attr(i,t);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,f,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(c=g[F]||(g[F]={}),u=c[e]||[],p=u[0]===U&&u[1],f=u[0]===U&&u[2],d=p&&g.childNodes[p];d=++p&&d&&d[m]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){c[e]=[U,p,f];break}}else if(y&&(u=(t[F]||(t[F]={}))[e])&&u[0]===U)f=u[1];else for(;(d=++p&&d&&d[m]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[F]||(d[F]={}))[e]=[U,f]),d!==t)););return f-=i,f===r||f%r===0&&f/r>=0}}},PSEUDO:function(t,n){var i,o=w.pseudos[t]||w.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return o[F]?o(n):o.length>1?(i=[t,t,"",n],w.setFilters.hasOwnProperty(t.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=te.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(se,"$1"));return i[F]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0}}),contains:r(function(e){return e=e.replace(Ce,xe),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(t){return fe.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(Ce,xe).toLowerCase(),function(e){var n;do if(n=M?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=window.location&&window.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===L},focus:function(e){return e===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[n<0?n+t:n]}),even:u(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},w.pseudos.nth=w.pseudos.eq;for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[C]=s(C);for(C in{submit:!0,reset:!0})w.pseudos[C]=l(C);return d.prototype=w.filters=w.pseudos,w.setFilters=new d,_=e.tokenize=function(t,n){var r,i,o,a,s,l,u,c=$[t+" "];if(c)return n?0:c.slice(0);for(s=t,l=[],u=w.preFilter;s;){r&&!(i=le.exec(s))||(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ue.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(a in w.filter)!(i=pe[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?e.error(t):$(t,l).slice(0)},S=e.compile=function(e,t){var n,r=[],i=[],o=q[e+" "];if(!o){for(t||(t=_(e)),n=t.length;n--;)o=y(t[n]),o[F]?r.push(o):i.push(o);o=q(e,b(i,r)),o.selector=e}return o},k=e.select=function(e,t,n,r){var i,o,a,s,l,u="function"==typeof e&&e,d=!r&&_(e=u.selector||e);
if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&x.getById&&9===t.nodeType&&M&&w.relative[o[1].type]){if(t=(w.find.ID(a.matches[0].replace(Ce,xe),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=pe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((l=w.find[s])&&(r=l(a.matches[0].replace(Ce,xe),ye.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&f(o),!e)return Z.apply(n,r),n;break}}return(u||S(e,d))(r,t,!M,n,ye.test(e)&&c(t.parentNode)||t),n},x.sortStable=F.split("").sort(j).join("")===F,x.detectDuplicates=!!A,B(),x.sortDetached=i(function(e){return 1&e.compareDocumentPosition(D.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(ne,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),e}),r(h,[],function(){function e(e){var t=e,n,r;if(!c(e))for(t=[],n=0,r=e.length;n<r;n++)t[n]=e[n];return t}function n(e,n,r){var i,o;if(!e)return 0;if(r=r||e,e.length!==t){for(i=0,o=e.length;i<o;i++)if(n.call(r,e[i],i,e)===!1)return 0}else for(i in e)if(e.hasOwnProperty(i)&&n.call(r,e[i],i,e)===!1)return 0;return 1}function r(e,t){var r=[];return n(e,function(n,i){r.push(t(n,i,e))}),r}function i(e,t){var r=[];return n(e,function(n,i){t&&!t(n,i,e)||r.push(n)}),r}function o(e,t){var n,r;if(e)for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function a(e,t,n,r){var i=0;for(arguments.length<3&&(n=e[0]);i<e.length;i++)n=t.call(r,n,e[i],i);return n}function s(e,t,n){var r,i;for(r=0,i=e.length;r<i;r++)if(t.call(n,e[r],r,e))return r;return-1}function l(e,n,r){var i=s(e,n,r);return i!==-1?e[i]:t}function u(e){return e[e.length-1]}var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return{isArray:c,toArray:e,each:n,map:r,filter:i,indexOf:o,reduce:a,findIndex:s,find:l,last:u}}),r(m,[d,h],function(e,n){function r(e){return null===e||e===t?"":(""+e).replace(h,"")}function i(e,r){return r?!("array"!=r||!n.isArray(e))||typeof e==r:e!==t}function o(e,t,n){var r;for(e=e||[],t=t||",","string"==typeof e&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={};return n}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e,t,n){var r=this,i,o,a,s,l,u=0;if(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),a=e[3].match(/(^|\.)(\w+)$/i)[2],o=r.createNS(e[3].replace(/\.\w+$/,""),n),!o[a]){if("static"==e[2])return o[a]=t,void(this.onCreate&&this.onCreate(e[2],e[3],o[a]));t[a]||(t[a]=function(){},u=1),o[a]=t[a],r.extend(o[a].prototype,t),e[5]&&(i=r.resolve(e[5]).prototype,s=e[5].match(/\.(\w+)$/i)[1],l=o[a],u?o[a]=function(){return i[s].apply(this,arguments)}:o[a]=function(){return this.parent=i[s],l.apply(this,arguments)},o[a].prototype[a]=o[a],r.each(i,function(e,t){o[a].prototype[t]=i[t]}),r.each(t,function(e,t){i[t]?o[a].prototype[t]=function(){return this.parent=i[t],e.apply(this,arguments)}:t!=a&&(o[a].prototype[t]=e)})),r.each(t["static"],function(e,t){o[a][t]=e})}}function l(e,n){var r,i,o,a=arguments,s;for(r=1,i=a.length;r<i;r++){n=a[r];for(o in n)n.hasOwnProperty(o)&&(s=n[o],s!==t&&(e[o]=s))}return e}function u(e,t,r,i){i=i||this,e&&(r&&(e=e[r]),n.each(e,function(e,n){return t.call(i,e,n,r)!==!1&&void u(e,t,r,i)}))}function c(e,t){var n,r;for(t=t||window,e=e.split("."),n=0;n<e.length;n++)r=e[n],t[r]||(t[r]={}),t=t[r];return t}function d(e,t){var n,r;for(t=t||window,e=e.split("."),n=0,r=e.length;n<r&&(t=t[e[n]],t);n++);return t}function f(e,t){return!e||i(e,"array")?e:n.map(e.split(t||","),r)}function p(t){var n=e.cacheSuffix;return n&&(t+=(t.indexOf("?")===-1?"?":"&")+n),t}var h=/^\s*|\s*$/g;return{trim:r,isArray:n.isArray,is:i,toArray:n.toArray,makeMap:o,each:n.each,map:n.map,grep:n.filter,inArray:n.indexOf,hasOwn:a,extend:l,create:s,walk:u,createNS:c,resolve:d,explode:f,_addCacheSuffix:p}}),r(g,[f,p,m,d],function(e,n,r,i){function o(e){return"undefined"!=typeof e}function a(e){return"string"==typeof e}function s(e){return e&&e==e.window}function l(e,t){var n,r,i;for(t=t||w,i=t.createElement("div"),n=t.createDocumentFragment(),i.innerHTML=e;r=i.firstChild;)n.appendChild(r);return n}function u(e,t,n,r){var i;if(a(t))t=l(t,v(e[0]));else if(t.length&&!t.nodeType){if(t=f.makeArray(t),r)for(i=t.length-1;i>=0;i--)u(e,t[i],n,r);else for(i=0;i<t.length;i++)u(e,t[i],n,r);return e}if(t.nodeType)for(i=e.length;i--;)n.call(e[i],t);return e}function c(e,t){return e&&t&&(" "+e.className+" ").indexOf(" "+t+" ")!==-1}function d(e,t,n){var r,i;return t=f(t)[0],e.each(function(){var e=this;n&&r==e.parentNode?i.appendChild(e):(r=e.parentNode,i=t.cloneNode(!1),e.parentNode.insertBefore(i,e),i.appendChild(e))}),e}function f(e,t){return new f.fn.init(e,t)}function p(e,t){var n;if(t.indexOf)return t.indexOf(e);for(n=t.length;n--;)if(t[n]===e)return n;return-1}function h(e){return null===e||e===k?"":(""+e).replace(P,"")}function m(e,t){var n,r,i,o,a;if(e)if(n=e.length,n===o){for(r in e)if(e.hasOwnProperty(r)&&(a=e[r],t.call(a,r,a)===!1))break}else for(i=0;i<n&&(a=e[i],t.call(a,i,a)!==!1);i++);return e}function g(e,t){var n=[];return m(e,function(e,r){t(r,e)&&n.push(r)}),n}function v(e){return e?9==e.nodeType?e:e.ownerDocument:w}function y(e,n,r){var i=[],o=e[n];for("string"!=typeof r&&r instanceof f&&(r=r[0]);o&&9!==o.nodeType;){if(r!==t){if(o===r)break;if("string"==typeof r&&f(o).is(r))break}1===o.nodeType&&i.push(o),o=o[n]}return i}function b(e,n,r,i){var o=[];for(i instanceof f&&(i=i[0]);e;e=e[n])if(!r||e.nodeType===r){if(i!==t){if(e===i)break;if("string"==typeof i&&f(e).is(i))break}o.push(e)}return o}function C(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType==n)return e;return null}function x(e,t,n){m(n,function(n,r){e[n]=e[n]||{},e[n][t]=r})}var w=document,E=Array.prototype.push,N=Array.prototype.slice,_=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,S=e.Event,k,T=r.makeMap("children,contents,next,prev"),R=r.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),A=r.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),B={"for":"htmlFor","class":"className",readonly:"readOnly"},D={"float":"cssFloat"},L={},M={},P=/^\s*|\s*$/g;return f.fn=f.prototype={constructor:f,selector:"",context:null,length:0,init:function(e,t){var n=this,r,i;if(!e)return n;if(e.nodeType)return n.context=n[0]=e,n.length=1,n;if(t&&t.nodeType)n.context=t;else{if(t)return f(e).attr(t);n.context=t=document}if(a(e)){if(n.selector=e,r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:_.exec(e),!r)return f(t).find(e);if(r[1])for(i=l(e,v(t)).firstChild;i;)E.call(n,i),i=i.nextSibling;else{if(i=v(t).getElementById(r[2]),!i)return n;if(i.id!==r[2])return n.find(e);n.length=1,n[0]=i}}else this.add(e,!1);return n},toArray:function(){return r.toArray(this)},add:function(e,t){var n=this,r,i;if(a(e))return n.add(f(e));if(t!==!1)for(r=f.unique(n.toArray().concat(f.makeArray(e))),n.length=r.length,i=0;i<r.length;i++)n[i]=r[i];else E.apply(n,f.makeArray(e));return n},attr:function(e,t){var n=this,r;if("object"==typeof e)m(e,function(e,t){n.attr(e,t)});else{if(!o(t)){if(n[0]&&1===n[0].nodeType){if(r=L[e],r&&r.get)return r.get(n[0],e);if(A[e])return n.prop(e)?e:k;t=n[0].getAttribute(e,2),null===t&&(t=k)}return t}this.each(function(){var n;if(1===this.nodeType){if(n=L[e],n&&n.set)return void n.set(this,t);null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}})}return n},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this;if(e=B[e]||e,"object"==typeof e)m(e,function(e,t){n.prop(e,t)});else{if(!o(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t;this.each(function(){1==this.nodeType&&(this[e]=t)})}return n},css:function(e,t){function n(e){return e.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})}function r(e){return e.replace(/[A-Z]/g,function(e){return"-"+e})}var i=this,a,s;if("object"==typeof e)m(e,function(e,t){i.css(e,t)});else if(o(t))e=n(e),"number"!=typeof t||R[e]||(t+="px"),i.each(function(){var n=this.style;if(s=M[e],s&&s.set)return void s.set(this,t);try{this.style[D[e]||e]=t}catch(i){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(r(e)):n.removeAttribute(e))});else{if(a=i[0],s=M[e],s&&s.get)return s.get(a);if(a.ownerDocument.defaultView)try{return a.ownerDocument.defaultView.getComputedStyle(a,null).getPropertyValue(r(e))}catch(l){return k}else if(a.currentStyle)return a.currentStyle[n(e)]}return i},remove:function(){for(var e=this,t,n=this.length;n--;)t=e[n],S.clean(t),t.parentNode&&t.parentNode.removeChild(t);return this},empty:function(){for(var e=this,t,n=this.length;n--;)for(t=e[n];t.firstChild;)t.removeChild(t.firstChild);return this},html:function(e){var t=this,n;if(o(e)){n=t.length;try{for(;n--;)t[n].innerHTML=e}catch(r){f(t[n]).empty().append(e)}return t}return t[0]?t[0].innerHTML:""},text:function(e){var t=this,n;if(o(e)){for(n=t.length;n--;)"innerText"in t[n]?t[n].innerText=e:t[0].textContent=e;return t}return t[0]?t[0].innerText||t[0].textContent:""},append:function(){return u(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)})},prepend:function(){return u(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)},!0)},before:function(){var e=this;return e[0]&&e[0].parentNode?u(e,arguments,function(e){this.parentNode.insertBefore(e,this)}):e},after:function(){var e=this;return e[0]&&e[0].parentNode?u(e,arguments,function(e){this.parentNode.insertBefore(e,this.nextSibling)},!0):e},appendTo:function(e){return f(e).append(this),this},prependTo:function(e){return f(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return d(this,e)},wrapAll:function(e){return d(this,e,!0)},wrapInner:function(e){return this.each(function(){f(this).contents().wrapAll(e)}),this},unwrap:function(){return this.parent().each(function(){f(this).replaceWith(this.childNodes)})},clone:function(){var e=[];return this.each(function(){e.push(this.cloneNode(!0))}),f(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this;return"string"!=typeof e?n:(e.indexOf(" ")!==-1?m(e.split(" "),function(){n.toggleClass(this,t)}):n.each(function(n,r){var i,o;o=c(r,e),o!==t&&(i=r.className,o?r.className=h((" "+i+" ").replace(" "+e+" "," ")):r.className+=i?" "+e:e)}),n)},hasClass:function(e){return c(this[0],e)},each:function(e){return m(this,e)},on:function(e,t){return this.each(function(){S.bind(this,e,t)})},off:function(e,t){return this.each(function(){S.unbind(this,e,t)})},trigger:function(e){return this.each(function(){"object"==typeof e?S.fire(this,e.type,e):S.fire(this,e)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new f(N.apply(this,arguments))},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[];for(t=0,n=this.length;t<n;t++)f.find(e,this[t],r);return f(r)},filter:function(e){return f("function"==typeof e?g(this.toArray(),function(t,n){return e(n,t)}):f.filter(e,this.toArray()))},closest:function(e){var t=[];return e instanceof f&&(e=e[0]),this.each(function(n,r){for(;r;){if("string"==typeof e&&f(r).is(e)){t.push(r);break}if(r==e){t.push(r);break}r=r.parentNode}}),f(t)},offset:function(e){var t,n,r,i=0,o=0,a;return e?this.css(e):(t=this[0],t&&(n=t.ownerDocument,r=n.documentElement,t.getBoundingClientRect&&(a=t.getBoundingClientRect(),i=a.left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,o=a.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:o})},push:E,sort:[].sort,splice:[].splice},r.extend(f,{extend:r.extend,makeArray:function(e){return s(e)||e.nodeType?[e]:r.toArray(e)},inArray:p,isArray:r.isArray,each:m,trim:h,grep:g,find:n,expr:n.selectors,unique:n.uniqueSort,text:n.getText,contains:n.contains,filter:function(e,t,n){var r=t.length;for(n&&(e=":not("+e+")");r--;)1!=t[r].nodeType&&t.splice(r,1);return t=1===t.length?f.find.matchesSelector(t[0],e)?[t[0]]:[]:f.find.matches(e,t)}}),m({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return y(e,"parentNode")},next:function(e){return C(e,"nextSibling",1)},prev:function(e){return C(e,"previousSibling",1)},children:function(e){return b(e.firstChild,"nextSibling",1)},contents:function(e){return r.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},function(e,t){f.fn[e]=function(n){var r=this,i=[];return r.each(function(){var e=t.call(i,this,n,i);e&&(f.isArray(e)?i.push.apply(i,e):i.push(e))}),this.length>1&&(T[e]||(i=f.unique(i)),0===e.indexOf("parents")&&(i=i.reverse())),i=f(i),n?i.filter(n):i}}),m({parentsUntil:function(e,t){return y(e,"parentNode",t)},nextUntil:function(e,t){return b(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return b(e,"previousSibling",1,t).slice(1)}},function(e,t){f.fn[e]=function(n,r){var i=this,o=[];return i.each(function(){var e=t.call(o,this,n,o);e&&(f.isArray(e)?o.push.apply(o,e):o.push(e))}),this.length>1&&(o=f.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse())),o=f(o),r?o.filter(r):o}}),f.fn.is=function(e){return!!e&&this.filter(e).length>0},f.fn.init.prototype=f.fn,f.overrideDefaults=function(e){function t(r,i){return n=n||e(),0===arguments.length&&(r=n.element),i||(i=n.context),new t.fn.init(r,i)}var n;return f.extend(t,this),t},i.ie&&i.ie<8&&(x(L,"get",{maxlength:function(e){var t=e.maxLength;return 2147483647===t?k:t},size:function(e){var t=e.size;return 20===t?k:t},"class":function(e){return e.className},style:function(e){var t=e.style.cssText;return 0===t.length?k:t}}),x(L,"set",{"class":function(e,t){e.className=t},style:function(e,t){e.style.cssText=t}})),i.ie&&i.ie<9&&(D["float"]="styleFloat",x(M,"set",{opacity:function(e,t){var n=e.style;null===t||""===t?n.removeAttribute("filter"):(n.zoom=1,n.filter="alpha(opacity="+100*t+")")}})),f.attrHooks=L,f.cssHooks=M,f}),r(v,[],function(){return function(e,t){function n(e,t,n,r){function i(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+i(t)+i(n)+i(r)}var r=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,i=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,o=/\s*([^:]+):\s*([^;]+);?/g,a=/\s+$/,s,l={},u,c,d,f="\ufeff";for(e=e||{},t&&(c=t.getValidStyles(),d=t.getInvalidStyles()),u=("\\\" \\' \\; \\: ; : "+f).split(" "),s=0;s<u.length;s++)l[u[s]]=f+s,l[f+s]=u[s];return{toHex:function(e){return e.replace(r,n)},parse:function(t){function u(e,t,n){var r,i,o,a;if(r=y[e+"-top"+t],r&&(i=y[e+"-right"+t],i&&(o=y[e+"-bottom"+t],o&&(a=y[e+"-left"+t])))){var l=[r,i,o,a];for(s=l.length-1;s--&&l[s]===l[s+1];);s>-1&&n||(y[e+t]=s==-1?l[0]:l.join(" "),delete y[e+"-top"+t],delete y[e+"-right"+t],delete y[e+"-bottom"+t],delete y[e+"-left"+t])}}function c(e){var t=y[e],n;if(t){for(t=t.split(" "),n=t.length;n--;)if(t[n]!==t[0])return!1;return y[e]=t[0],!0}}function d(e,t,n,r){c(t)&&c(n)&&c(r)&&(y[e]=y[t]+" "+y[n]+" "+y[r],delete y[t],delete y[n],delete y[r])}function p(e){return w=!0,l[e]}function h(e,t){return w&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return l[e]})),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e}function m(e){return String.fromCharCode(parseInt(e.slice(1),16))}function g(e){return e.replace(/\\[0-9a-f]+/gi,m)}function v(t,n,r,i,o,a){if(o=o||a)return o=h(o),"'"+o.replace(/\'/g,"\\'")+"'";if(n=h(n||r||i),!e.allow_script_urls){var s=n.replace(/[\s\r\n]+/g,"");if(/(java|vb)script:/i.test(s))return"";if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(s))return""}return E&&(n=E.call(N,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}var y={},b,C,x,w,E=e.url_converter,N=e.url_converter_scope||this;if(t){for(t=t.replace(/[\u0000-\u001F]/g,""),t=t.replace(/\\[\"\';:\uFEFF]/g,p).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,p)});b=o.exec(t);)if(o.lastIndex=b.index+b[0].length,C=b[1].replace(a,"").toLowerCase(),x=b[2].replace(a,""),C&&x){if(C=g(C),x=g(x),C.indexOf(f)!==-1||C.indexOf('"')!==-1)continue;if(!e.allow_script_urls&&("behavior"==C||/expression\s*\(|\/\*|\*\//.test(x)))continue;"font-weight"===C&&"700"===x?x="bold":"color"!==C&&"background-color"!==C||(x=x.toLowerCase()),x=x.replace(r,n),x=x.replace(i,v),y[C]=w?h(x,!0):x}u("border","",!0),u("border","-width"),u("border","-color"),u("border","-style"),u("padding",""),u("margin",""),d("border","border-width","border-style","border-color"),"medium none"===y.border&&delete y.border,"none"===y["border-image"]&&delete y["border-image"]}return y},serialize:function(e,t){function n(t){var n,r,o,a;if(n=c[t])for(r=0,o=n.length;r<o;r++)t=n[r],a=e[t],a&&(i+=(i.length>0?" ":"")+t+": "+a+";")}function r(e,t){var n;return n=d["*"],(!n||!n[e])&&(n=d[t],!n||!n[e])}var i="",o,a;if(t&&c)n("*"),n(t);else for(o in e)a=e[o],!a||d&&!r(o,t)||(i+=(i.length>0?" ":"")+o+": "+a+";");return i}}}}),r(y,[],function(){return function(e,t){function n(e,n,r,i){var o,a;if(e){if(!i&&e[n])return e[n];if(e!=t){if(o=e[r])return o;for(a=e.parentNode;a&&a!=t;a=a.parentNode)if(o=a[r])return o}}}function r(e,n,r,i){var o,a,s;if(e){if(o=e[r],t&&o===t)return;if(o){if(!i)for(s=o[n];s;s=s[n])if(!s[n])return s;return o}if(a=e.parentNode,a&&a!==t)return a}}var i=e;this.current=function(){return i},this.next=function(e){return i=n(i,"firstChild","nextSibling",e)},this.prev=function(e){return i=n(i,"lastChild","previousSibling",e)},this.prev2=function(e){return i=r(i,"lastChild","previousSibling",e)}}}),r(b,[m],function(e){function t(n){function r(){return P.createDocumentFragment()}function i(e,t){E(F,e,t)}function o(e,t){E(z,e,t)}function a(e){i(e.parentNode,j(e))}function s(e){i(e.parentNode,j(e)+1)}function l(e){o(e.parentNode,j(e))}function u(e){o(e.parentNode,j(e)+1)}function c(e){e?(M[V]=M[W],M[$]=M[U]):(M[W]=M[V],M[U]=M[$]),M.collapsed=F}function d(e){a(e),u(e)}function f(e){i(e,0),o(e,1===e.nodeType?e.childNodes.length:e.nodeValue.length)}function p(e,t){var n=M[W],r=M[U],i=M[V],o=M[$],a=t.startContainer,s=t.startOffset,l=t.endContainer,u=t.endOffset;return 0===e?w(n,r,a,s):1===e?w(i,o,a,s):2===e?w(i,o,l,u):3===e?w(n,r,l,u):void 0}function h(){N(I)}function m(){return N(O)}function g(){return N(H)}function v(e){var t=this[W],r=this[U],i,o;3!==t.nodeType&&4!==t.nodeType||!t.nodeValue?(t.childNodes.length>0&&(o=t.childNodes[r]),o?t.insertBefore(e,o):3==t.nodeType?n.insertAfter(e,t):t.appendChild(e)):r?r>=t.nodeValue.length?n.insertAfter(e,t):(i=t.splitText(r),t.parentNode.insertBefore(e,i)):t.parentNode.insertBefore(e,t)}function y(e){var t=M.extractContents();M.insertNode(e),e.appendChild(t),M.selectNode(e)}function b(){return q(new t(n),{startContainer:M[W],startOffset:M[U],endContainer:M[V],endOffset:M[$],collapsed:M.collapsed,commonAncestorContainer:M.commonAncestorContainer})}function C(e,t){var n;if(3==e.nodeType)return e;if(t<0)return e;for(n=e.firstChild;n&&t>0;)--t,n=n.nextSibling;return n?n:e}function x(){return M[W]==M[V]&&M[U]==M[$]}function w(e,t,r,i){var o,a,s,l,u,c;if(e==r)return t==i?0:t<i?-1:1;for(o=r;o&&o.parentNode!=e;)o=o.parentNode;if(o){for(a=0,s=e.firstChild;s!=o&&a<t;)a++,s=s.nextSibling;return t<=a?-1:1}for(o=e;o&&o.parentNode!=r;)o=o.parentNode;if(o){for(a=0,s=r.firstChild;s!=o&&a<i;)a++,s=s.nextSibling;return a<i?-1:1}for(l=n.findCommonAncestor(e,r),u=e;u&&u.parentNode!=l;)u=u.parentNode;for(u||(u=l),c=r;c&&c.parentNode!=l;)c=c.parentNode;if(c||(c=l),u==c)return 0;for(s=l.firstChild;s;){if(s==u)return-1;if(s==c)return 1;s=s.nextSibling}}function E(e,t,r){var i,o;for(e?(M[W]=t,M[U]=r):(M[V]=t,M[$]=r),i=M[V];i.parentNode;)i=i.parentNode;for(o=M[W];o.parentNode;)o=o.parentNode;o==i?w(M[W],M[U],M[V],M[$])>0&&M.collapse(e):M.collapse(e),M.collapsed=x(),M.commonAncestorContainer=n.findCommonAncestor(M[W],M[V])}function N(e){var t,n=0,r=0,i,o,a,s,l,u;if(M[W]==M[V])return _(e);for(t=M[V],i=t.parentNode;i;t=i,i=i.parentNode){if(i==M[W])return S(t,e);++n}for(t=M[W],i=t.parentNode;i;t=i,i=i.parentNode){if(i==M[V])return k(t,e);++r}for(o=r-n,a=M[W];o>0;)a=a.parentNode,o--;for(s=M[V];o<0;)s=s.parentNode,o++;for(l=a.parentNode,u=s.parentNode;l!=u;l=l.parentNode,u=u.parentNode)a=l,s=u;return T(a,s,e)}function _(e){var t,n,i,o,a,s,l,u,c;if(e!=I&&(t=r()),M[U]==M[$])return t;if(3==M[W].nodeType){if(n=M[W].nodeValue,i=n.substring(M[U],M[$]),e!=H&&(o=M[W],u=M[U],c=M[$]-M[U],0===u&&c>=o.nodeValue.length-1?o.parentNode.removeChild(o):o.deleteData(u,c),M.collapse(F)),e==I)return;return i.length>0&&t.appendChild(P.createTextNode(i)),t}for(o=C(M[W],M[U]),a=M[$]-M[U];o&&a>0;)s=o.nextSibling,l=D(o,e),t&&t.appendChild(l),--a,o=s;return e!=H&&M.collapse(F),t}function S(e,t){var n,i,o,a,s,l;if(t!=I&&(n=r()),i=R(e,t),n&&n.appendChild(i),o=j(e),a=o-M[U],a<=0)return t!=H&&(M.setEndBefore(e),M.collapse(z)),n;for(i=e.previousSibling;a>0;)s=i.previousSibling,l=D(i,t),n&&n.insertBefore(l,n.firstChild),--a,i=s;return t!=H&&(M.setEndBefore(e),M.collapse(z)),n}function k(e,t){var n,i,o,a,s,l;for(t!=I&&(n=r()),o=A(e,t),n&&n.appendChild(o),i=j(e),++i,a=M[$]-i,o=e.nextSibling;o&&a>0;)s=o.nextSibling,l=D(o,t),n&&n.appendChild(l),--a,o=s;return t!=H&&(M.setStartAfter(e),M.collapse(F)),n}function T(e,t,n){var i,o,a,s,l,u,c;for(n!=I&&(o=r()),i=A(e,n),o&&o.appendChild(i),a=j(e),s=j(t),++a,l=s-a,u=e.nextSibling;l>0;)c=u.nextSibling,i=D(u,n),o&&o.appendChild(i),u=c,--l;return i=R(t,n),o&&o.appendChild(i),n!=H&&(M.setStartAfter(e),M.collapse(F)),o}function R(e,t){var n=C(M[V],M[$]-1),r,i,o,a,s,l=n!=M[V];if(n==e)return B(n,l,z,t);for(r=n.parentNode,i=B(r,z,z,t);r;){for(;n;)o=n.previousSibling,a=B(n,l,z,t),t!=I&&i.insertBefore(a,i.firstChild),l=F,n=o;if(r==e)return i;n=r.previousSibling,r=r.parentNode,s=B(r,z,z,t),t!=I&&s.appendChild(i),i=s}}function A(e,t){var n=C(M[W],M[U]),r=n!=M[W],i,o,a,s,l;if(n==e)return B(n,r,F,t);for(i=n.parentNode,o=B(i,z,F,t);i;){for(;n;)a=n.nextSibling,s=B(n,r,F,t),t!=I&&o.appendChild(s),r=F,n=a;if(i==e)return o;n=i.nextSibling,i=i.parentNode,l=B(i,z,F,t),t!=I&&l.appendChild(o),o=l}}function B(e,t,r,i){var o,a,s,l,u;if(t)return D(e,i);if(3==e.nodeType){if(o=e.nodeValue,r?(l=M[U],a=o.substring(l),s=o.substring(0,l)):(l=M[$],a=o.substring(0,l),s=o.substring(l)),i!=H&&(e.nodeValue=s),i==I)return;return u=n.clone(e,z),u.nodeValue=a,u}if(i!=I)return n.clone(e,z)}function D(e,t){return t!=I?t==H?n.clone(e,F):e:void e.parentNode.removeChild(e)}function L(){return n.create("body",null,g()).outerText}var M=this,P=n.doc,O=0,H=1,I=2,F=!0,z=!1,U="startOffset",W="startContainer",V="endContainer",$="endOffset",q=e.extend,j=n.nodeIndex;return q(M,{startContainer:P,startOffset:0,endContainer:P,endOffset:0,collapsed:F,commonAncestorContainer:P,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:i,setEnd:o,setStartBefore:a,setStartAfter:s,setEndBefore:l,setEndAfter:u,collapse:c,selectNode:d,selectNodeContents:f,compareBoundaryPoints:p,deleteContents:h,extractContents:m,cloneContents:g,insertNode:v,surroundContents:y,cloneRange:b,toStringIE:L}),M}return t.prototype.toString=function(){return this.toStringIE()},t}),r(C,[m],function(e){function t(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.textContent||t.innerText||e}function n(e,t){var n,r,i,a={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),o[r]||(i="&"+e[n+1]+";",a[r]=i,a[i]=r);return a}}var r=e.makeMap,i,o,a,s=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=/[<>&\"\']/g,c=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,d={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};o={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},a={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},i=n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var f={encodeRaw:function(e,t){return e.replace(t?s:l,function(e){return o[e]||e})},encodeAllRaw:function(e){return(""+e).replace(u,function(e){return o[e]||e})},encodeNumeric:function(e,t){return e.replace(t?s:l,function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":o[e]||"&#"+e.charCodeAt(0)+";"})},encodeNamed:function(e,t,n){return n=n||i,e.replace(t?s:l,function(e){return o[e]||n[e]||e})},getEncodeFunc:function(e,t){function a(e,n){return e.replace(n?s:l,function(e){return o[e]||t[e]||"&#"+e.charCodeAt(0)+";"||e})}function u(e,n){return f.encodeNamed(e,n,t)}return t=n(t)||i,e=r(e.replace(/\+/g,",")),e.named&&e.numeric?a:e.named?t?u:f.encodeNamed:e.numeric?f.encodeNumeric:f.encodeRaw},decode:function(e){return e.replace(c,function(e,n){return n?(n="x"===n.charAt(0).toLowerCase()?parseInt(n.substr(1),16):parseInt(n,10),n>65535?(n-=65536,String.fromCharCode(55296+(n>>10),56320+(1023&n))):d[n]||String.fromCharCode(n)):a[e]||i[e]||t(e)})}};return f}),r(x,[m,c],function(e,t){return function(n,r){function i(e){n.getElementsByTagName("head")[0].appendChild(e)}function o(r,o,u){function c(){for(var e=b.passed,t=e.length;t--;)e[t]();b.status=2,b.passed=[],b.failed=[]}function d(){for(var e=b.failed,t=e.length;t--;)e[t]();b.status=3,b.passed=[],b.failed=[]}function f(){var e=navigator.userAgent.match(/WebKit\/(\d*)/);return!!(e&&e[1]<536)}function p(e,n){e()||((new Date).getTime()-y<l?t.setTimeout(n):d())}function h(){p(function(){for(var e=n.styleSheets,t,r=e.length,i;r--;)if(t=e[r],i=t.ownerNode?t.ownerNode:t.owningElement,i&&i.id===g.id)return c(),!0},h)}function m(){p(function(){try{var e=v.sheet.cssRules;return c(),!!e}catch(t){}},m)}var g,v,y,b;if(r=e._addCacheSuffix(r),s[r]?b=s[r]:(b={passed:[],failed:[]},s[r]=b),o&&b.passed.push(o),u&&b.failed.push(u),1!=b.status){if(2==b.status)return void c();if(3==b.status)return void d();if(b.status=1,g=n.createElement("link"),g.rel="stylesheet",g.type="text/css",g.id="u"+a++,g.async=!1,g.defer=!1,y=(new Date).getTime(),"onload"in g&&!f())g.onload=h,g.onerror=d;else{if(navigator.userAgent.indexOf("Firefox")>0)return v=n.createElement("style"),v.textContent='@import "'+r+'"',m(),void i(v);h()}i(g),g.href=r}}var a=0,s={},l;r=r||{},l=r.maxLoadTime||5e3,this.load=o}}),r(w,[p,g,v,f,y,b,C,d,m,x],function(e,n,r,i,o,a,s,l,u,c){function d(e,t){var n={},r=t.keep_values,i;return i={set:function(n,r,i){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||e,r,i,n[0])),n.attr("data-mce-"+i,r).attr(i,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},n={style:{set:function(e,t){return null!==t&&"object"==typeof t?void e.css(t):(r&&e.attr("data-mce-style",t),void e.attr("style",t))},get:function(t){var n=t.attr("data-mce-style")||t.attr("style");return n=e.serializeStyle(e.parseStyle(n),t[0].nodeName)}}},r&&(n.href=n.src=i),n}function f(e,t){var n=t.attr("style");n=e.serializeStyle(e.parseStyle(n),t[0].nodeName),n||(n=null),t.attr("data-mce-style",n)}function p(e,t){var n=0,r,i;if(e)for(r=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)i=e.nodeType,(!t||3!=i||i!=r&&e.nodeValue.length)&&(n++,r=i);return n}function h(e,t){var o=this,a;o.doc=e,o.win=window,o.files={},o.counter=0,o.stdMode=!b||e.documentMode>=8,o.boxModel=!b||"CSS1Compat"==e.compatMode||o.stdMode,o.styleSheetLoader=new c(e),o.boundEvents=[],o.settings=t=t||{},o.schema=t.schema,o.styles=new r({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),o.fixDoc(e),o.events=t.ownEvents?new i(t.proxy):i.Event,o.attrHooks=d(o,t),a=t.schema?t.schema.getBlockElements():{},o.$=n.overrideDefaults(function(){return{context:e,element:o.getRoot()}}),o.isBlock=function(e){if(!e)return!1;var t=e.nodeType;return t?!(1!==t||!a[e.nodeName]):!!a[e]}}var m=u.each,g=u.is,v=u.grep,y=u.trim,b=l.ie,C=/^([a-z0-9],?)+$/i,x=/^[ \t\r\n]*$/;return h.prototype={$$:function(e){return"string"==typeof e&&(e=this.get(e)),this.$(e)},root:null,fixDoc:function(e){var t=this.settings,n;if(b&&t.schema){"abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g,function(t){e.createElement(t)});for(n in t.schema.getCustomElements())e.createElement(n)}},clone:function(e,t){var n=this,r,i;return!b||1!==e.nodeType||t?e.cloneNode(t):(i=n.doc,t?r.firstChild:(r=i.createElement(e.nodeName),m(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),r))},getRoot:function(){var e=this;return e.settings.root_element||e.doc.body},getViewPort:function(e){var t,n;return e=e?e:this.win,t=e.document,n=this.boxModel?t.documentElement:t.body,{x:e.pageXOffset||n.scrollLeft,y:e.pageYOffset||n.scrollTop,w:e.innerWidth||n.clientWidth,h:e.innerHeight||n.clientHeight}},getRect:function(e){var t=this,n,r;return e=t.get(e),n=t.getPos(e),r=t.getSize(e),{x:n.x,y:n.y,w:r.w,h:r.h}},getSize:function(e){var t=this,n,r;return e=t.get(e),n=t.getStyle(e,"width"),r=t.getStyle(e,"height"),n.indexOf("px")===-1&&(n=0),r.indexOf("px")===-1&&(r=0),
{w:parseInt(n,10)||e.offsetWidth||e.clientWidth,h:parseInt(r,10)||e.offsetHeight||e.clientHeight}},getParent:function(e,t,n){return this.getParents(e,t,n,!1)},getParents:function(e,n,r,i){var o=this,a,s=[];for(e=o.get(e),i=i===t,r=r||("BODY"!=o.getRoot().nodeName?o.getRoot().parentNode:null),g(n,"string")&&(a=n,n="*"===n?function(e){return 1==e.nodeType}:function(e){return o.is(e,a)});e&&e!=r&&e.nodeType&&9!==e.nodeType;){if(!n||n(e)){if(!i)return e;s.push(e)}e=e.parentNode}return i?s:null},get:function(e){var t;return e&&this.doc&&"string"==typeof e&&(t=e,e=this.doc.getElementById(e),e&&e.id!==t)?this.doc.getElementsByName(t)[1]:e},getNext:function(e,t){return this._findSib(e,t,"nextSibling")},getPrev:function(e,t){return this._findSib(e,t,"previousSibling")},select:function(t,n){var r=this;return e(t,r.get(n)||r.settings.root_element||r.doc,[])},is:function(n,r){var i;if(n.length===t){if("*"===r)return 1==n.nodeType;if(C.test(r)){for(r=r.toLowerCase().split(/,/),n=n.nodeName.toLowerCase(),i=r.length-1;i>=0;i--)if(r[i]==n)return!0;return!1}}if(n.nodeType&&1!=n.nodeType)return!1;var o=n.nodeType?[n]:n;return e(r,o[0].ownerDocument||o[0],null,o).length>0},add:function(e,t,n,r,i){var o=this;return this.run(e,function(e){var a;return a=g(t,"string")?o.doc.createElement(t):t,o.setAttribs(a,n),r&&(r.nodeType?a.appendChild(r):o.setHTML(a,r)),i?a:e.appendChild(a)})},create:function(e,t,n){return this.add(this.doc.createElement(e),e,t,n,1)},createHTML:function(e,t,n){var r="",i;r+="<"+e;for(i in t)t.hasOwnProperty(i)&&null!==t[i]&&"undefined"!=typeof t[i]&&(r+=" "+i+'="'+this.encode(t[i])+'"');return"undefined"!=typeof n?r+">"+n+"</"+e+">":r+" />"},createFragment:function(e){var t,n,r=this.doc,i;for(i=r.createElement("div"),t=r.createDocumentFragment(),e&&(i.innerHTML=e);n=i.firstChild;)t.appendChild(n);return t},remove:function(e,t){return e=this.$$(e),t?e.each(function(){for(var e;e=this.firstChild;)3==e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)}).remove():e.remove(),e.length>1?e.toArray():e[0]},setStyle:function(e,t,n){e=this.$$(e).css(t,n),this.settings.update_styles&&f(this,e)},getStyle:function(e,n,r){return e=this.$$(e),r?e.css(n):(n=n.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}),"float"==n&&(n=l.ie&&l.ie<12?"styleFloat":"cssFloat"),e[0]&&e[0].style?e[0].style[n]:t)},setStyles:function(e,t){e=this.$$(e).css(t),this.settings.update_styles&&f(this,e)},removeAllAttribs:function(e){return this.run(e,function(e){var t,n=e.attributes;for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))})},setAttrib:function(e,t,n){var r=this,i,o,a=r.settings;""===n&&(n=null),e=r.$$(e),i=e.attr(t),e.length&&(o=r.attrHooks[t],o&&o.set?o.set(e,n,t):e.attr(t,n),i!=n&&a.onSetAttrib&&a.onSetAttrib({attrElm:e,attrName:t,attrValue:n}))},setAttribs:function(e,t){var n=this;n.$$(e).each(function(e,r){m(t,function(e,t){n.setAttrib(r,t,e)})})},getAttrib:function(e,t,n){var r=this,i,o;return e=r.$$(e),e.length&&(i=r.attrHooks[t],o=i&&i.get?i.get(e,t):e.attr(t)),"undefined"==typeof o&&(o=n||""),o},getPos:function(e,t){var r=this,i=0,o=0,a,s=r.doc,l=s.body,u;if(e=r.get(e),t=t||l,e){if(t===l&&e.getBoundingClientRect&&"static"===n(l).css("position"))return u=e.getBoundingClientRect(),t=r.boxModel?s.documentElement:l,i=u.left+(s.documentElement.scrollLeft||l.scrollLeft)-t.clientLeft,o=u.top+(s.documentElement.scrollTop||l.scrollTop)-t.clientTop,{x:i,y:o};for(a=e;a&&a!=t&&a.nodeType;)i+=a.offsetLeft||0,o+=a.offsetTop||0,a=a.offsetParent;for(a=e.parentNode;a&&a!=t&&a.nodeType;)i-=a.scrollLeft||0,o-=a.scrollTop||0,a=a.parentNode}return{x:i,y:o}},parseStyle:function(e){return this.styles.parse(e)},serializeStyle:function(e,t){return this.styles.serialize(e,t)},addStyle:function(e){var t=this,n=t.doc,r,i;if(t!==h.DOM&&n===document){var o=h.DOM.addedStyles;if(o=o||[],o[e])return;o[e]=!0,h.DOM.addedStyles=o}i=n.getElementById("mceDefaultStyles"),i||(i=n.createElement("style"),i.id="mceDefaultStyles",i.type="text/css",r=n.getElementsByTagName("head")[0],r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i)),i.styleSheet?i.styleSheet.cssText+=e:i.appendChild(n.createTextNode(e))},loadCSS:function(e){var t=this,n=t.doc,r;return t!==h.DOM&&n===document?void h.DOM.loadCSS(e):(e||(e=""),r=n.getElementsByTagName("head")[0],void m(e.split(","),function(e){var i;e=u._addCacheSuffix(e),t.files[e]||(t.files[e]=!0,i=t.create("link",{rel:"stylesheet",href:e}),b&&n.documentMode&&n.recalc&&(i.onload=function(){n.recalc&&n.recalc(),i.onload=null}),r.appendChild(i))}))},addClass:function(e,t){this.$$(e).addClass(t)},removeClass:function(e,t){this.toggleClass(e,t,!1)},hasClass:function(e,t){return this.$$(e).hasClass(t)},toggleClass:function(e,t,r){this.$$(e).toggleClass(t,r).each(function(){""===this.className&&n(this).attr("class",null)})},show:function(e){this.$$(e).show()},hide:function(e){this.$$(e).hide()},isHidden:function(e){return"none"==this.$$(e).css("display")},uniqueId:function(e){return(e?e:"mce_")+this.counter++},setHTML:function(e,t){e=this.$$(e),b?e.each(function(e,r){if(r.canHaveHTML!==!1){for(;r.firstChild;)r.removeChild(r.firstChild);try{r.innerHTML="<br>"+t,r.removeChild(r.firstChild)}catch(i){n("<div></div>").html("<br>"+t).contents().slice(1).appendTo(r)}return t}}):e.html(t)},getOuterHTML:function(e){return e=this.get(e),1==e.nodeType&&"outerHTML"in e?e.outerHTML:n("<div></div>").append(n(e).clone()).html()},setOuterHTML:function(e,t){var r=this;r.$$(e).each(function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}r.remove(n(this).html(t),!0)})},decode:s.decode,encode:s.encodeAllRaw,insertAfter:function(e,t){return t=this.get(t),this.run(e,function(e){var n,r;return n=t.parentNode,r=t.nextSibling,r?n.insertBefore(e,r):n.appendChild(e),e})},replace:function(e,t,n){var r=this;return r.run(t,function(t){return g(t,"array")&&(e=e.cloneNode(!0)),n&&m(v(t.childNodes),function(t){e.appendChild(t)}),t.parentNode.replaceChild(e,t)})},rename:function(e,t){var n=this,r;return e.nodeName!=t.toUpperCase()&&(r=n.create(t),m(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),n.replace(r,e,1)),r||e},findCommonAncestor:function(e,t){for(var n=e,r;n;){for(r=t;r&&n!=r;)r=r.parentNode;if(n==r)break;n=n.parentNode}return!n&&e.ownerDocument?e.ownerDocument.documentElement:n},toHex:function(e){return this.styles.toHex(u.trim(e))},run:function(e,t,n){var r=this,i;return"string"==typeof e&&(e=r.get(e)),!!e&&(n=n||this,e.nodeType||!e.length&&0!==e.length?t.call(n,e):(i=[],m(e,function(e,o){e&&("string"==typeof e&&(e=r.get(e)),i.push(t.call(n,e,o)))}),i))},getAttribs:function(e){var t;if(e=this.get(e),!e)return[];if(b){if(t=[],"OBJECT"==e.nodeName)return e.attributes;"OPTION"===e.nodeName&&this.getAttrib(e,"selected")&&t.push({specified:1,nodeName:"selected"});var n=/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;return e.cloneNode(!1).outerHTML.replace(n,"").replace(/[\w:\-]+/gi,function(e){t.push({specified:1,nodeName:e})}),t}return e.attributes},isEmpty:function(e,t){var n=this,r,i,a,s,l,u,c=0;if(e=e.firstChild){l=new o(e,e.parentNode),t=t||(n.schema?n.schema.getNonEmptyElements():null),s=n.schema?n.schema.getWhiteSpaceElements():{};do{if(a=e.nodeType,1===a){var d=e.getAttribute("data-mce-bogus");if(d){e=l.next("all"===d);continue}if(u=e.nodeName.toLowerCase(),t&&t[u]){if("br"===u){c++,e=l.next();continue}return!1}for(i=n.getAttribs(e),r=i.length;r--;)if(u=i[r].nodeName,"name"===u||"data-mce-bookmark"===u)return!1}if(8==a)return!1;if(3===a&&!x.test(e.nodeValue))return!1;if(3===a&&e.parentNode&&s[e.parentNode.nodeName]&&x.test(e.nodeValue))return!1;e=l.next()}while(e)}return c<=1},createRng:function(){var e=this.doc;return e.createRange?e.createRange():new a(this)},nodeIndex:p,split:function(e,t,n){function r(e){function t(e){var t=e.previousSibling&&"SPAN"==e.previousSibling.nodeName,n=e.nextSibling&&"SPAN"==e.nextSibling.nodeName;return t&&n}var n,o=e.childNodes,a=e.nodeType;if(1!=a||"bookmark"!=e.getAttribute("data-mce-type")){for(n=o.length-1;n>=0;n--)r(o[n]);if(9!=a){if(3==a&&e.nodeValue.length>0){var s=y(e.nodeValue).length;if(!i.isBlock(e.parentNode)||s>0||0===s&&t(e))return}else if(1==a&&(o=e.childNodes,1==o.length&&o[0]&&1==o[0].nodeType&&"bookmark"==o[0].getAttribute("data-mce-type")&&e.parentNode.insertBefore(o[0],e),o.length||/^(br|hr|input|img)$/i.test(e.nodeName)))return;i.remove(e)}return e}}var i=this,o=i.createRng(),a,s,l;if(e&&t)return o.setStart(e.parentNode,i.nodeIndex(e)),o.setEnd(t.parentNode,i.nodeIndex(t)),a=o.extractContents(),o=i.createRng(),o.setStart(t.parentNode,i.nodeIndex(t)+1),o.setEnd(e.parentNode,i.nodeIndex(e)+1),s=o.extractContents(),l=e.parentNode,l.insertBefore(r(a),e),n?l.insertBefore(n,e):l.insertBefore(t,e),l.insertBefore(r(s),e),i.remove(e),n||t},bind:function(e,t,n,r){var i=this;if(u.isArray(e)){for(var o=e.length;o--;)e[o]=i.bind(e[o],t,n,r);return e}return!i.settings.collect||e!==i.doc&&e!==i.win||i.boundEvents.push([e,t,n,r]),i.events.bind(e,t,n,r||i)},unbind:function(e,t,n){var r=this,i;if(u.isArray(e)){for(i=e.length;i--;)e[i]=r.unbind(e[i],t,n);return e}if(r.boundEvents&&(e===r.doc||e===r.win))for(i=r.boundEvents.length;i--;){var o=r.boundEvents[i];e!=o[0]||t&&t!=o[1]||n&&n!=o[2]||this.events.unbind(o[0],o[1],o[2])}return this.events.unbind(e,t,n)},fire:function(e,t,n){return this.events.fire(e,t,n)},getContentEditable:function(e){var t;return e&&1==e.nodeType?(t=e.getAttribute("data-mce-contenteditable"),t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null):null},getContentEditableParent:function(e){for(var t=this.getRoot(),n=null;e&&e!==t&&(n=this.getContentEditable(e),null===n);e=e.parentNode);return n},destroy:function(){var t=this;if(t.boundEvents){for(var n=t.boundEvents.length;n--;){var r=t.boundEvents[n];this.events.unbind(r[0],r[1],r[2])}t.boundEvents=null}e.setDocument&&e.setDocument(),t.win=t.doc=t.root=t.events=t.frag=null},isChildOf:function(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset},_findSib:function(e,t,n){var r=this,i=t;if(e)for("string"==typeof i&&(i=function(e){return r.is(e,t)}),e=e[n];e;e=e[n])if(i(e))return e;return null}},h.DOM=new h(document),h.nodeIndex=p,h}),r(E,[w,m],function(e,t){function n(){function e(e,n,i){function o(){l.remove(c),u&&(u.onreadystatechange=u.onload=u=null),n()}function s(){a(i)?i():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)}var l=r,u,c;c=l.uniqueId(),u=document.createElement("script"),u.id=c,u.type="text/javascript",u.src=t._addCacheSuffix(e),"onreadystatechange"in u?u.onreadystatechange=function(){/loaded|complete/.test(u.readyState)&&o()}:u.onload=o,u.onerror=s,(document.getElementsByTagName("head")[0]||document.body).appendChild(u)}var n=0,s=1,l=2,u=3,c={},d=[],f={},p=[],h=0,m;this.isDone=function(e){return c[e]==l},this.markDone=function(e){c[e]=l},this.add=this.load=function(e,t,r,i){var o=c[e];o==m&&(d.push(e),c[e]=n),t&&(f[e]||(f[e]=[]),f[e].push({success:t,failure:i,scope:r||this}))},this.remove=function(e){delete c[e],delete f[e]},this.loadQueue=function(e,t,n){this.loadScripts(d,e,t,n)},this.loadScripts=function(t,n,r,d){function g(e,t){i(f[t],function(t){a(t[e])&&t[e].call(t.scope)}),f[t]=m}var v,y=[];p.push({success:n,failure:d,scope:r||this}),(v=function(){var n=o(t);t.length=0,i(n,function(t){return c[t]===l?void g("success",t):c[t]===u?void g("failure",t):void(c[t]!==s&&(c[t]=s,h++,e(t,function(){c[t]=l,h--,g("success",t),v()},function(){c[t]=u,h--,y.push(t),g("failure",t),v()})))}),h||(i(p,function(e){0===y.length?a(e.success)&&e.success.call(e.scope):a(e.failure)&&e.failure.call(e.scope,y)}),p.length=0)})()}}var r=e.DOM,i=t.each,o=t.grep,a=function(e){return"function"==typeof e};return n.ScriptLoader=new n,n}),r(N,[E,m],function(e,n){function r(){var e=this;e.items=[],e.urls={},e.lookup={}}var i=n.each;return r.prototype={get:function(e){return this.lookup[e]?this.lookup[e].instance:t},dependencies:function(e){var t;return this.lookup[e]&&(t=this.lookup[e].dependencies),t||[]},requireLangPack:function(t,n){var i=r.language;if(i&&r.languageLoad!==!1){if(n)if(n=","+n+",",n.indexOf(","+i.substr(0,2)+",")!=-1)i=i.substr(0,2);else if(n.indexOf(","+i+",")==-1)return;e.ScriptLoader.add(this.urls[t]+"/langs/"+i+".js")}},add:function(e,t,n){return this.items.push(t),this.lookup[e]={instance:t,dependencies:n},t},remove:function(e){delete this.urls[e],delete this.lookup[e]},createUrl:function(e,t){return"object"==typeof t?t:{prefix:e.prefix,resource:t,suffix:e.suffix}},addComponents:function(t,n){var r=this.urls[t];i(n,function(t){e.ScriptLoader.add(r+"/"+t)})},load:function(n,o,a,s,l){function u(){var r=c.dependencies(n);i(r,function(e){var n=c.createUrl(o,e);c.load(n.resource,n,t,t)}),a&&(s?a.call(s):a.call(e))}var c=this,d=o;c.urls[n]||("object"==typeof o&&(d=o.prefix+o.resource+o.suffix),0!==d.indexOf("/")&&d.indexOf("://")==-1&&(d=r.baseURL+"/"+d),c.urls[n]=d.substring(0,d.lastIndexOf("/")),c.lookup[n]?u():e.ScriptLoader.add(d,u,s,l))}},r.PluginManager=new r,r.ThemeManager=new r,r}),r(_,[],function(){function e(e){return function(t){return!!t&&t.nodeType==e}}function t(e){return e=e.toLowerCase().split(" "),function(t){var n,r;if(t&&t.nodeType)for(r=t.nodeName.toLowerCase(),n=0;n<e.length;n++)if(r===e[n])return!0;return!1}}function n(e,t){return t=t.toLowerCase().split(" "),function(n){var r,i;if(s(n))for(r=0;r<t.length;r++)if(i=getComputedStyle(n,null).getPropertyValue(e),i===t[r])return!0;return!1}}function r(e,t){return function(n){return s(n)&&n[e]===t}}function i(e,t){return function(n){return s(n)&&n.getAttribute(e)===t}}function o(e){return s(e)&&e.hasAttribute("data-mce-bogus")}function a(e){return function(t){if(s(t)){if(t.contentEditable===e)return!0;if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}}var s=e(1);return{isText:e(3),isElement:s,isComment:e(8),isBr:t("br"),isContentEditableTrue:a("true"),isContentEditableFalse:a("false"),matchNodeNames:t,hasPropValue:r,hasAttributeValue:i,matchStyleValues:n,isBogus:o}}),r(S,[],function(){function e(e){return e==n}function t(e){return e.replace(new RegExp(n,"g"),"")}var n="\ufeff";return{isZwsp:e,ZWSP:n,trim:t}}),r(k,[_,S],function(e,t){function n(e){return y(e)&&(e=e.parentNode),v(e)&&e.hasAttribute("data-mce-caret")}function r(e){return y(e)&&t.isZwsp(e.data)}function i(e){return n(e)||r(e)}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e){try{return e.nodeValue}catch(t){return""}}function s(e,t){0===t.length?o(e):e.nodeValue=t}function l(e,n){var r,o,a,s;if(r=e.ownerDocument,a=r.createTextNode(t.ZWSP),s=e.parentNode,n){if(o=e.previousSibling,y(o)){if(i(o))return o;if(h(o))return o.splitText(o.data.length-1)}s.insertBefore(a,e)}else{if(o=e.nextSibling,y(o)){if(i(o))return o;if(p(o))return o.splitText(1),o}e.nextSibling?s.insertBefore(a,e.nextSibling):s.appendChild(a)}return a}function u(){var e=document.createElement("br");return e.setAttribute("data-mce-bogus","1"),e}function c(e,t,n){var r,i,o;return r=t.ownerDocument,i=r.createElement(e),i.setAttribute("data-mce-caret",n?"before":"after"),i.setAttribute("data-mce-bogus","all"),i.appendChild(u()),o=t.parentNode,n?o.insertBefore(i,t):t.nextSibling?o.insertBefore(i,t.nextSibling):o.appendChild(i),i}function d(t){return t.firstChild!==t.lastChild||!e.isBr(t.firstChild)}function f(e){if(v(e)&&i(e)&&(d(e)?e.removeAttribute("data-mce-caret"):o(e)),y(e)){var n=t.trim(a(e));s(e,n)}}function p(e){return y(e)&&e.data[0]==t.ZWSP}function h(e){return y(e)&&e.data[e.data.length-1]==t.ZWSP}function m(t){var n=t.getElementsByTagName("br"),r=n[n.length-1];e.isBogus(r)&&r.parentNode.removeChild(r)}function g(e){return e&&e.hasAttribute("data-mce-caret")?(m(e),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null}var v=e.isElement,y=e.isText;return{isCaretContainer:i,isCaretContainerBlock:n,isCaretContainerInline:r,showCaretContainerBlock:g,insertInline:l,insertBlock:c,hasContent:d,remove:f,startsWithCaretContainer:p,endsWithCaretContainer:h}}),r(T,[m,y,_,b,k],function(e,t,n,r,i){function o(e){return m(e)||g(e)}function a(e,t){var n=e.childNodes;return t--,t>n.length-1?t=n.length-1:t<0&&(t=0),n[t]||e}function s(e,t,n){for(;e&&e!==t;){if(n(e))return e;e=e.parentNode}return null}function l(e,t,n){return null!==s(e,t,n)}function u(e){return"_mce_caret"===e.id}function c(e,t){return v(e)&&l(e,t,u)===!1}function d(e){this.walk=function(t,n){function r(e){var t;return t=e[0],3===t.nodeType&&t===l&&u>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===d&&e.length>0&&t===c&&3===t.nodeType&&e.splice(e.length-1,1),e}function i(e,t,n){for(var r=[];e&&e!=n;e=e[t])r.push(e);return r}function o(e,t){do{if(e.parentNode==t)return e;e=e.parentNode}while(e)}function s(e,t,o){var a=o?"nextSibling":"previousSibling";for(g=e,v=g.parentNode;g&&g!=t;g=v)v=g.parentNode,y=i(g==e?g:g[a],a),y.length&&(o||y.reverse(),n(r(y)))}var l=t.startContainer,u=t.startOffset,c=t.endContainer,d=t.endOffset,f,p,m,g,v,y,b;if(b=e.select("td[data-mce-selected],th[data-mce-selected]"),b.length>0)return void h(b,function(e){n([e])});if(1==l.nodeType&&l.hasChildNodes()&&(l=l.childNodes[u]),1==c.nodeType&&c.hasChildNodes()&&(c=a(c,d)),l==c)return n(r([l]));for(f=e.findCommonAncestor(l,c),g=l;g;g=g.parentNode){if(g===c)return s(l,f,!0);if(g===f)break}for(g=c;g;g=g.parentNode){if(g===l)return s(c,f);if(g===f)break}p=o(l,f)||l,m=o(c,f)||c,s(l,p,!0),y=i(p==l?p:p.nextSibling,"nextSibling",m==c?m.nextSibling:m),y.length&&n(r(y)),s(c,m)},this.split=function(e){function t(e,t){return e.splitText(t)}var n=e.startContainer,r=e.startOffset,i=e.endContainer,o=e.endOffset;return n==i&&3==n.nodeType?r>0&&r<n.nodeValue.length&&(i=t(n,r),n=i.previousSibling,o>r?(o-=r,n=i=t(i,o).previousSibling,o=i.nodeValue.length,r=0):o=0):(3==n.nodeType&&r>0&&r<n.nodeValue.length&&(n=t(n,r),r=0),3==i.nodeType&&o>0&&o<i.nodeValue.length&&(i=t(i,o).previousSibling,o=i.nodeValue.length)),{startContainer:n,startOffset:r,endContainer:i,endOffset:o}},this.normalize=function(n){function r(r){function a(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}function s(n,r){for(var i=new t(n,e.getParent(n.parentNode,e.isBlock)||m);n=i[r?"prev":"next"]();)if("BR"===n.nodeName)return!0}function l(e){for(;e&&e!=m;){if(g(e))return!0;e=e.parentNode}return!1}function u(e,t){return e.previousSibling&&e.previousSibling.nodeName==t}function d(n,r){var a,s,l;if(r=r||f,l=e.getParent(r.parentNode,e.isBlock)||m,n&&"BR"==r.nodeName&&x&&e.isEmpty(l))return f=r.parentNode,p=e.nodeIndex(r),void(i=!0);for(a=new t(r,l);y=a[n?"prev":"next"]();){if("false"===e.getContentEditableParent(y)||c(y,e.getRoot()))return;if(3===y.nodeType&&y.nodeValue.length>0)return f=y,p=n?y.nodeValue.length:0,void(i=!0);if(e.isBlock(y)||b[y.nodeName.toLowerCase()])return;s=y}o&&s&&(f=s,i=!0,p=0)}var f,p,h,m=e.getRoot(),y,b,C,x;if(f=n[(r?"start":"end")+"Container"],p=n[(r?"start":"end")+"Offset"],x=1==f.nodeType&&p===f.childNodes.length,b=e.schema.getNonEmptyElements(),C=r,!v(f)){if(1==f.nodeType&&p>f.childNodes.length-1&&(C=!1),9===f.nodeType&&(f=e.getRoot(),p=0),f===m){if(C&&(y=f.childNodes[p>0?p-1:0])){if(v(y))return;if(b[y.nodeName]||"TABLE"==y.nodeName)return}if(f.hasChildNodes()){if(p=Math.min(!C&&p>0?p-1:p,f.childNodes.length-1),f=f.childNodes[p],p=0,!o&&f===m.lastChild&&"TABLE"===f.nodeName)return;if(l(f)||v(f))return;if(f.hasChildNodes()&&!/TABLE/.test(f.nodeName)){y=f,h=new t(f,m);do{if(g(y)||v(y)){i=!1;break}if(3===y.nodeType&&y.nodeValue.length>0){p=C?0:y.nodeValue.length,f=y,i=!0;break}if(b[y.nodeName.toLowerCase()]&&!a(y)){p=e.nodeIndex(y),f=y.parentNode,"IMG"!=y.nodeName||C||p++,i=!0;break}}while(y=C?h.next():h.prev())}}}o&&(3===f.nodeType&&0===p&&d(!0),1===f.nodeType&&(y=f.childNodes[p],y||(y=f.childNodes[p-1]),!y||"BR"!==y.nodeName||u(y,"A")||s(y)||s(y,!0)||d(!0,y))),C&&!o&&3===f.nodeType&&p===f.nodeValue.length&&d(!1),i&&n["set"+(r?"Start":"End")](f,p)}}var i,o;return o=n.collapsed,r(!0),o||r(),i&&o&&n.collapse(!0),i}}function f(t,n,r){var i,o,a;if(i=r.elementFromPoint(t,n),o=r.body.createTextRange(),i&&"HTML"!=i.tagName||(i=r.body),o.moveToElementText(i),a=e.toArray(o.getClientRects()),a=a.sort(function(e,t){return e=Math.abs(Math.max(e.top-n,e.bottom-n)),t=Math.abs(Math.max(t.top-n,t.bottom-n)),e-t}),a.length>0){n=(a[0].bottom+a[0].top)/2;try{return o.moveToPoint(t,n),o.collapse(!0),o}catch(s){}}return null}function p(e,t){var n=e&&e.parentElement?e.parentElement():null;return g(s(n,t,o))?null:e}var h=e.each,m=n.isContentEditableTrue,g=n.isContentEditableFalse,v=i.isCaretContainer;return d.compareRanges=function(e,t){if(e&&t){if(!e.item&&!e.duplicate)return e.startContainer==t.startContainer&&e.startOffset==t.startOffset;if(e.item&&t.item&&e.item(0)===t.item(0))return!0;if(e.isEqual&&t.isEqual&&t.isEqual(e))return!0}return!1},d.getCaretRangeFromPoint=function(e,t,n){var r,i;if(n.caretPositionFromPoint)i=n.caretPositionFromPoint(e,t),r=n.createRange(),r.setStart(i.offsetNode,i.offset),r.collapse(!0);else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t);else if(n.body.createTextRange){r=n.body.createTextRange();try{r.moveToPoint(e,t),r.collapse(!0)}catch(o){r=f(e,t,n)}return p(r,n.body)}return r},d.getSelectedNode=function(e){var t=e.startContainer,n=e.startOffset;return t.hasChildNodes()&&e.endOffset==n+1?t.childNodes[n]:null},d.getNode=function(e,t){return 1==e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},d}),r(R,[T,d,c],function(e,t,n){return function(r){function i(e){var t,n;if(n=r.$(e).parentsUntil(r.getBody()).add(e),n.length===a.length){for(t=n.length;t>=0&&n[t]===a[t];t--);if(t===-1)return a=n,!0}return a=n,!1}var o,a=[];"onselectionchange"in r.getDoc()||r.on("NodeChange Click MouseUp KeyUp Focus",function(t){var n,i;n=r.selection.getRng(),i={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset},"nodechange"!=t.type&&e.compareRanges(i,o)||r.fire("SelectionChange"),o=i}),r.on("contextmenu",function(){r.fire("SelectionChange")}),r.on("SelectionChange",function(){var e=r.selection.getStart(!0);!t.range&&r.selection.isCollapsed()||!i(e)&&r.dom.isChildOf(e,r.getBody())&&r.nodeChanged({selectionChange:!0})}),r.on("MouseUp",function(e){e.isDefaultPrevented()||("IMG"==r.selection.getNode().nodeName?n.setEditorTimeout(r,function(){r.nodeChanged()}):r.nodeChanged())}),this.nodeChanged=function(e){var t=r.selection,n,i,o;r.initialized&&t&&!r.settings.disable_nodechange&&!r.readonly&&(o=r.getBody(),n=t.getStart()||o,n.ownerDocument==r.getDoc()&&r.dom.isChildOf(n,o)||(n=o),"IMG"==n.nodeName&&t.isCollapsed()&&(n=n.parentNode),i=[],r.dom.getParent(n,function(e){return e===o||void i.push(e)}),e=e||{},e.element=n,e.parents=i,r.fire("NodeChange",e))}}}),r(A,[],function(){function e(e,t,n){var r,i,o=n?"lastChild":"firstChild",a=n?"prev":"next";if(e[o])return e[o];if(e!==t){if(r=e[a])return r;for(i=e.parent;i&&i!==t;i=i.parent)if(r=i[a])return r}}function t(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}var n=/^[ \t\r\n]*$/,r={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11};return t.prototype={replace:function(e){var t=this;return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},attr:function(e,t){var n=this,r,i,o;if("string"!=typeof e){for(i in e)n.attr(i,e[i]);return n}if(r=n.attributes){if(t!==o){if(null===t){if(e in r.map)for(delete r.map[e],i=r.length;i--;)if(r[i].name===e)return r=r.splice(i,1),n;return n}if(e in r.map){for(i=r.length;i--;)if(r[i].name===e){r[i].value=t;break}}else r.push({name:e,value:t});return r.map[e]=t,n}return r.map[e]}},clone:function(){var e=this,n=new t(e.name,e.type),r,i,o,a,s;if(o=e.attributes){for(s=[],s.map={},r=0,i=o.length;r<i;r++)a=o[r],"id"!==a.name&&(s[s.length]={name:a.name,value:a.value},s.map[a.name]=a.value);n.attributes=s}return n.value=e.value,n.shortEnded=e.shortEnded,n},wrap:function(e){var t=this;return t.parent.insert(e,t),e.append(t),t},unwrap:function(){var e=this,t,n;for(t=e.firstChild;t;)n=t.next,e.insert(t,e,!0),t=n;e.remove()},remove:function(){var e=this,t=e.parent,n=e.next,r=e.prev;return t&&(t.firstChild===e?(t.firstChild=n,n&&(n.prev=null)):r.next=n,t.lastChild===e?(t.lastChild=r,r&&(r.next=null)):n.prev=r,e.parent=e.next=e.prev=null),e},append:function(e){var t=this,n;return e.parent&&e.remove(),n=t.lastChild,n?(n.next=e,e.prev=n,t.lastChild=e):t.lastChild=t.firstChild=e,e.parent=t,e},insert:function(e,t,n){var r;return e.parent&&e.remove(),r=t.parent||this,n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=r,e},getAll:function(t){var n=this,r,i=[];for(r=n.firstChild;r;r=e(r,n))r.name===t&&i.push(r);return i},empty:function(){var t=this,n,r,i;if(t.firstChild){for(n=[],i=t.firstChild;i;i=e(i,t))n.push(i);for(r=n.length;r--;)i=n[r],i.parent=i.firstChild=i.lastChild=i.next=i.prev=null}return t.firstChild=t.lastChild=null,t},isEmpty:function(t,r){var i=this,o=i.firstChild,a,s;if(r=r||{},o)do{if(1===o.type){if(o.attributes.map["data-mce-bogus"])continue;if(t[o.name])return!1;for(a=o.attributes.length;a--;)if(s=o.attributes[a].name,"name"===s||0===s.indexOf("data-mce-bookmark"))return!1}if(8===o.type)return!1;if(3===o.type&&!n.test(o.value))return!1;if(3===o.type&&o.parent&&r[o.parent.name]&&n.test(o.value))return!1}while(o=e(o,i));return!0},walk:function(t){return e(this,null,t)}},t.create=function(e,n){var i,o;if(i=new t(e,r[e]||1),n)for(o in n)i.attr(o,n[o]);return i},t}),r(B,[m],function(e){function t(t,n){return t=e.trim(t),t?t.split(n||" "):[]}function n(e){function n(e,n,r){function i(e,t){var n={},r,i;for(r=0,i=e.length;r<i;r++)n[e[r]]=t||{};return n}var s,u,c;for(r=r||[],n=n||"","string"==typeof r&&(r=t(r)),e=t(e),s=e.length;s--;)u=t([l,n].join(" ")),c={attributes:i(u),attributesOrder:u,children:i(r,o)},a[e[s]]=c}function r(e,n){var r,i,o,s;for(e=t(e),r=e.length,n=t(n);r--;)for(i=a[e[r]],o=0,s=n.length;o<s;o++)i.attributes[n[o]]={},i.attributesOrder.push(n[o])}var a={},l,u,c,d,f,p;return i[e]?i[e]:(l="id accesskey class dir lang style tabindex title",u="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",c="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!=e&&(l+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",u+=" article aside details dialog figure header footer hgroup section nav",c+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!=e&&(l+=" xml:lang",p="acronym applet basefont big font strike tt",c=[c,p].join(" "),s(t(p),function(e){n(e,"",c)}),f="center dir isindex noframes",u=[u,f].join(" "),d=[u,c].join(" "),s(t(f),function(e){n(e,"",d)})),d=d||[u,c].join(" "),n("html","manifest","head body"),n("head","","base command link meta noscript script style title"),n("title hr noscript br"),n("base","href target"),n("link","href rel media hreflang type sizes hreflang"),n("meta","name http-equiv content charset"),n("style","media type scoped"),n("script","src async defer type charset"),n("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",d),n("address dt dd div caption","",d),n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",c),n("blockquote","cite",d),n("ol","reversed start type","li"),n("ul","","li"),n("li","value",d),n("dl","","dt dd"),n("a","href target rel media hreflang type",c),n("q","cite",c),n("ins del","cite datetime",d),n("img","src sizes srcset alt usemap ismap width height"),n("iframe","src name width height",d),n("embed","src type width height"),n("object","data type typemustmatch name usemap form width height",[d,"param"].join(" ")),n("param","name value"),n("map","name",[d,"area"].join(" ")),n("area","alt coords shape href target rel media hreflang type"),n("table","border","caption colgroup thead tfoot tbody tr"+("html4"==e?" col":"")),n("colgroup","span","col"),n("col","span"),n("tbody thead tfoot","","tr"),n("tr","","td th"),n("td","colspan rowspan headers",d),n("th","colspan rowspan headers scope abbr",d),n("form","accept-charset action autocomplete enctype method name novalidate target",d),n("fieldset","disabled form name",[d,"legend"].join(" ")),n("label","form for",c),n("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),n("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"==e?d:c),n("select","disabled form multiple name required size","option optgroup"),n("optgroup","disabled label","option"),n("option","disabled label selected value"),n("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),n("menu","type label",[d,"li"].join(" ")),n("noscript","",d),"html4"!=e&&(n("wbr"),n("ruby","",[c,"rt rp"].join(" ")),n("figcaption","",d),n("mark rt rp summary bdi","",c),n("canvas","width height",d),n("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[d,"track source"].join(" ")),n("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[d,"track source"].join(" ")),n("picture","","img source"),n("source","src srcset type media sizes"),n("track","kind src srclang label default"),n("datalist","",[c,"option"].join(" ")),n("article section nav aside header footer","",d),n("hgroup","","h1 h2 h3 h4 h5 h6"),n("figure","",[d,"figcaption"].join(" ")),n("time","datetime",c),n("dialog","open",d),n("command","type label icon disabled checked radiogroup command"),n("output","for form name",c),n("progress","value max",c),n("meter","value min max low high optimum",c),n("details","open",[d,"summary"].join(" ")),n("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!=e&&(r("script","language xml:space"),r("style","xml:space"),r("object","declare classid code codebase codetype archive standby align border hspace vspace"),r("embed","align name hspace vspace"),r("param","valuetype type"),r("a","charset name rev shape coords"),r("br","clear"),r("applet","codebase archive code object alt name width height align hspace vspace"),r("img","name longdesc align border hspace vspace"),r("iframe","longdesc frameborder marginwidth marginheight scrolling align"),r("font basefont","size color face"),r("input","usemap align"),r("select","onchange"),r("textarea"),r("h1 h2 h3 h4 h5 h6 div p legend caption","align"),r("ul","type compact"),r("li","type"),r("ol dl menu dir","compact"),r("pre","width xml:space"),r("hr","align noshade size width"),r("isindex","prompt"),r("table","summary width frame rules cellspacing cellpadding align bgcolor"),r("col","width align char charoff valign"),r("colgroup","width align char charoff valign"),r("thead","align char charoff valign"),r("tr","align char charoff valign bgcolor"),r("th","axis align char charoff valign nowrap bgcolor width height"),r("form","accept"),r("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),r("tfoot","align char charoff valign"),r("tbody","align char charoff valign"),r("area","nohref"),r("body","background bgcolor text link vlink alink")),"html4"!=e&&(r("input button select textarea","autofocus"),r("input textarea","placeholder"),r("a","download"),
r("link script img","crossorigin"),r("iframe","sandbox seamless allowfullscreen")),s(t("a form meter progress dfn"),function(e){a[e]&&delete a[e].children[e]}),delete a.caption.children.table,delete a.script,i[e]=a,a)}function r(e,t){var n;return e&&(n={},"string"==typeof e&&(e={"*":e}),s(e,function(e,r){n[r]=n[r.toUpperCase()]="map"==t?a(e,/[, ]/):u(e,/[, ]/)})),n}var i={},o={},a=e.makeMap,s=e.each,l=e.extend,u=e.explode,c=e.inArray;return function(e){function o(t,n,r){var o=e[t];return o?o=a(o,/[, ]/,a(o.toUpperCase(),/[, ]/)):(o=i[t],o||(o=a(n," ",a(n.toUpperCase()," ")),o=l(o,r),i[t]=o)),o}function d(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")}function f(e){var n,r,i,o,s,l,u,f,p,h,m,g,v,b,x,w,E,N,_,S=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,k=/^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,T=/[*?+]/;if(e)for(e=t(e,","),y["@"]&&(w=y["@"].attributes,E=y["@"].attributesOrder),n=0,r=e.length;n<r;n++)if(s=S.exec(e[n])){if(b=s[1],p=s[2],x=s[3],f=s[5],g={},v=[],l={attributes:g,attributesOrder:v},"#"===b&&(l.paddEmpty=!0),"-"===b&&(l.removeEmpty=!0),"!"===s[4]&&(l.removeEmptyAttrs=!0),w){for(N in w)g[N]=w[N];v.push.apply(v,E)}if(f)for(f=t(f,"|"),i=0,o=f.length;i<o;i++)if(s=k.exec(f[i])){if(u={},m=s[1],h=s[2].replace(/::/g,":"),b=s[3],_=s[4],"!"===m&&(l.attributesRequired=l.attributesRequired||[],l.attributesRequired.push(h),u.required=!0),"-"===m){delete g[h],v.splice(c(v,h),1);continue}b&&("="===b&&(l.attributesDefault=l.attributesDefault||[],l.attributesDefault.push({name:h,value:_}),u.defaultValue=_),":"===b&&(l.attributesForced=l.attributesForced||[],l.attributesForced.push({name:h,value:_}),u.forcedValue=_),"<"===b&&(u.validValues=a(_,"?"))),T.test(h)?(l.attributePatterns=l.attributePatterns||[],u.pattern=d(h),l.attributePatterns.push(u)):(g[h]||v.push(h),g[h]=u)}w||"@"!=p||(w=g,E=v),x&&(l.outputName=p,y[x]=l),T.test(p)?(l.pattern=d(p),C.push(l)):y[p]=l}}function p(e){y={},C=[],f(e),s(E,function(e,t){b[t]=e.children})}function h(e){var n=/^(~)?(.+)$/;e&&(i.text_block_elements=i.block_elements=null,s(t(e,","),function(e){var t=n.exec(e),r="~"===t[1],i=r?"span":"div",o=t[2];if(b[o]=b[i],M[o]=i,r||(R[o.toUpperCase()]={},R[o]={}),!y[o]){var a=y[i];a=l({},a),delete a.removeEmptyAttrs,delete a.removeEmpty,y[o]=a}s(b,function(e,t){e[i]&&(b[t]=e=l({},b[t]),e[o]=e[i])})}))}function m(n){var r=/^([+\-]?)(\w+)\[([^\]]+)\]$/;i[e.schema]=null,n&&s(t(n,","),function(e){var n=r.exec(e),i,o;n&&(o=n[1],i=o?b[n[2]]:b[n[2]]={"#comment":{}},i=b[n[2]],s(t(n[3],"|"),function(e){"-"===o?delete i[e]:i[e]={}}))})}function g(e){var t=y[e],n;if(t)return t;for(n=C.length;n--;)if(t=C[n],t.pattern.test(e))return t}var v=this,y={},b={},C=[],x,w,E,N,_,S,k,T,R,A,B,D,L,M={},P={};e=e||{},E=n(e.schema),e.verify_html===!1&&(e.valid_elements="*[*]"),x=r(e.valid_styles),w=r(e.invalid_styles,"map"),T=r(e.valid_classes,"map"),N=o("whitespace_elements","pre script noscript style textarea video audio iframe object code"),_=o("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),S=o("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),k=o("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),A=o("non_empty_elements","td th iframe video audio object script pre code",S),B=o("move_caret_before_on_enter_elements","table",A),D=o("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"),R=o("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption",D),L=o("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp"),s((e.special||"script noscript style textarea").split(" "),function(e){P[e]=new RegExp("</"+e+"[^>]*>","gi")}),e.valid_elements?p(e.valid_elements):(s(E,function(e,t){y[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},b[t]=e.children}),"html5"!=e.schema&&s(t("strong/b em/i"),function(e){e=t(e,"/"),y[e[1]].outputName=e[0]}),s(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){y[e]&&(y[e].removeEmpty=!0)}),s(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"),function(e){y[e].paddEmpty=!0}),s(t("span"),function(e){y[e].removeEmptyAttrs=!0})),h(e.custom_elements),m(e.valid_children),f(e.extended_valid_elements),m("+ol[ul|ol],+ul[ul|ol]"),s({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},function(e,n){y[n]&&(y[n].parentsRequired=t(e))}),e.invalid_elements&&s(u(e.invalid_elements),function(e){y[e]&&delete y[e]}),g("span")||f("span[!data-mce-type|*]"),v.children=b,v.getValidStyles=function(){return x},v.getInvalidStyles=function(){return w},v.getValidClasses=function(){return T},v.getBoolAttrs=function(){return k},v.getBlockElements=function(){return R},v.getTextBlockElements=function(){return D},v.getTextInlineElements=function(){return L},v.getShortEndedElements=function(){return S},v.getSelfClosingElements=function(){return _},v.getNonEmptyElements=function(){return A},v.getMoveCaretBeforeOnEnterElements=function(){return B},v.getWhiteSpaceElements=function(){return N},v.getSpecialElements=function(){return P},v.isValidChild=function(e,t){var n=b[e];return!(!n||!n[t])},v.isValid=function(e,t){var n,r,i=g(e);if(i){if(!t)return!0;if(i.attributes[t])return!0;if(n=i.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},v.getElementRule=g,v.getCustomElements=function(){return M},v.addValidElements=f,v.setValidElements=p,v.addCustomElements=h,v.addValidChildren=m,v.elements=y}}),r(D,[B,C,m],function(e,t,n){function r(e,t,n){var r=1,i,o,a,s;for(s=e.getShortEndedElements(),a=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g,a.lastIndex=i=n;o=a.exec(t);){if(i=a.lastIndex,"/"===o[1])r--;else if(!o[1]){if(o[2]in s)continue;r++}if(0===r)break}return i}function i(i,a){function s(){}var l=this;i=i||{},l.schema=a=a||new e,i.fix_self_closing!==!1&&(i.fix_self_closing=!0),o("comment cdata text start end pi doctype".split(" "),function(e){e&&(l[e]=i[e]||s)}),l.parse=function(e){function o(e){var t,n;for(t=p.length;t--&&p[t].name!==e;);if(t>=0){for(n=p.length-1;n>=t;n--)e=p[n],e.valid&&l.end(e.name);p.length=t}}function s(e,t,n,r,o){var a,s,l=/[\s\u0000-\u001F]+/g;if(t=t.toLowerCase(),n=t in x?t:z(n||r||o||""),E&&!y&&0!==t.indexOf("data-")){if(a=T[t],!a&&R){for(s=R.length;s--&&(a=R[s],!a.pattern.test(t)););s===-1&&(a=null)}if(!a)return;if(a.validValues&&!(n in a.validValues))return}if(W[t]&&!i.allow_script_urls){var u=n.replace(l,"");try{u=decodeURIComponent(u)}catch(c){u=unescape(u)}if(V.test(u))return;if(!i.allow_html_data_urls&&$.test(u)&&!/^data:image\//i.test(u))return}h.map[t]=n,h.push({name:t,value:n})}var l=this,u,c=0,d,f,p=[],h,m,g,v,y,b,C,x,w,E,N,_,S,k,T,R,A,B,D,L,M,P,O,H,I,F=0,z=t.decode,U,W=n.makeMap("src,href,data,background,formaction,poster"),V=/((java|vb)script|mhtml):/i,$=/^data:/i;for(P=new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-_\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),O=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,C=a.getShortEndedElements(),M=i.self_closing_elements||a.getSelfClosingElements(),x=a.getBoolAttrs(),E=i.validate,b=i.remove_internals,U=i.fix_self_closing,H=a.getSpecialElements();u=P.exec(e);){if(c<u.index&&l.text(z(e.substr(c,u.index-c))),d=u[6])d=d.toLowerCase(),":"===d.charAt(0)&&(d=d.substr(1)),o(d);else if(d=u[7]){if(d=d.toLowerCase(),":"===d.charAt(0)&&(d=d.substr(1)),w=d in C,U&&M[d]&&p.length>0&&p[p.length-1].name===d&&o(d),!E||(N=a.getElementRule(d))){if(_=!0,E&&(T=N.attributes,R=N.attributePatterns),(k=u[8])?(y=k.indexOf("data-mce-type")!==-1,y&&b&&(_=!1),h=[],h.map={},k.replace(O,s)):(h=[],h.map={}),E&&!y){if(A=N.attributesRequired,B=N.attributesDefault,D=N.attributesForced,L=N.removeEmptyAttrs,L&&!h.length&&(_=!1),D)for(m=D.length;m--;)S=D[m],v=S.name,I=S.value,"{$uid}"===I&&(I="mce_"+F++),h.map[v]=I,h.push({name:v,value:I});if(B)for(m=B.length;m--;)S=B[m],v=S.name,v in h.map||(I=S.value,"{$uid}"===I&&(I="mce_"+F++),h.map[v]=I,h.push({name:v,value:I}));if(A){for(m=A.length;m--&&!(A[m]in h.map););m===-1&&(_=!1)}if(S=h.map["data-mce-bogus"]){if("all"===S){c=r(a,e,P.lastIndex),P.lastIndex=c;continue}_=!1}}_&&l.start(d,h,w)}else _=!1;if(f=H[d]){f.lastIndex=c=u.index+u[0].length,(u=f.exec(e))?(_&&(g=e.substr(c,u.index-c)),c=u.index+u[0].length):(g=e.substr(c),c=e.length),_&&(g.length>0&&l.text(g,!0),l.end(d)),P.lastIndex=c;continue}w||(k&&k.indexOf("/")==k.length-1?_&&l.end(d):p.push({name:d,valid:_}))}else(d=u[1])?(">"===d.charAt(0)&&(d=" "+d),i.allow_conditional_comments||"[if"!==d.substr(0,3).toLowerCase()||(d=" "+d),l.comment(d)):(d=u[2])?l.cdata(d):(d=u[3])?l.doctype(d):(d=u[4])&&l.pi(d,u[5]);c=u.index+u[0].length}for(c<e.length&&l.text(z(e.substr(c))),m=p.length-1;m>=0;m--)d=p[m],d.valid&&l.end(d.name)}}var o=n.each;return i.findEndTag=r,i}),r(L,[A,B,D,m],function(e,t,n,r){var i=r.makeMap,o=r.each,a=r.explode,s=r.extend,l=function(t,n){t.padd_empty_with_br?n.empty().append(new e("br","1")).shortEnded=!0:n.empty().append(new e("#text","3")).value="\xa0"},u=function(e,t){return e&&e.firstChild===e.lastChild&&e.firstChild.name===t};return function(c,d){function f(t){var n,r,o,a,s,l,c,f,h,m,g,v,y,b,C,x;for(v=i("tr,td,th,tbody,thead,tfoot,table"),m=d.getNonEmptyElements(),g=d.getWhiteSpaceElements(),y=d.getTextBlockElements(),b=d.getSpecialElements(),n=0;n<t.length;n++)if(r=t[n],r.parent&&!r.fixed)if(y[r.name]&&"li"==r.parent.name){for(C=r.next;C&&y[C.name];)C.name="li",C.fixed=!0,r.parent.insert(C,r.parent),C=C.next;r.unwrap(r)}else{for(a=[r],o=r.parent;o&&!d.isValidChild(o.name,r.name)&&!v[o.name];o=o.parent)a.push(o);if(o&&a.length>1){for(a.reverse(),s=l=p.filterNode(a[0].clone()),h=0;h<a.length-1;h++){for(d.isValidChild(l.name,a[h].name)?(c=p.filterNode(a[h].clone()),l.append(c)):c=l,f=a[h].firstChild;f&&f!=a[h+1];)x=f.next,c.append(f),f=x;l=c}s.isEmpty(m,g)?o.insert(r,a[0],!0):(o.insert(s,a[0],!0),o.insert(r,s)),o=a[0],(o.isEmpty(m,g)||u(o,"br"))&&o.empty().remove()}else if(r.parent){if("li"===r.name){if(C=r.prev,C&&("ul"===C.name||"ul"===C.name)){C.append(r);continue}if(C=r.next,C&&("ul"===C.name||"ul"===C.name)){C.insert(r,C.firstChild,!0);continue}r.wrap(p.filterNode(new e("ul",1)));continue}d.isValidChild(r.parent.name,"div")&&d.isValidChild("div",r.name)?r.wrap(p.filterNode(new e("div",1))):b[r.name]?r.empty().remove():r.unwrap()}}}var p=this,h={},m=[],g={},v={};c=c||{},c.validate=!("validate"in c)||c.validate,c.root_name=c.root_name||"body",p.schema=d=d||new t,p.filterNode=function(e){var t,n,r;n in h&&(r=g[n],r?r.push(e):g[n]=[e]),t=m.length;for(;t--;)n=m[t].name,n in e.attributes.map&&(r=v[n],r?r.push(e):v[n]=[e]);return e},p.addNodeFilter=function(e,t){o(a(e),function(e){var n=h[e];n||(h[e]=n=[]),n.push(t)})},p.addAttributeFilter=function(e,t){o(a(e),function(e){var n;for(n=0;n<m.length;n++)if(m[n].name===e)return void m[n].callbacks.push(t);m.push({name:e,callbacks:[t]})})},p.parse=function(t,r){function o(){function e(e){e&&(t=e.firstChild,t&&3==t.type&&(t.value=t.value.replace(A,"")),t=e.lastChild,t&&3==t.type&&(t.value=t.value.replace(L,"")))}var t=b.firstChild,n,r;if(d.isValidChild(b.name,F.toLowerCase())){for(;t;)n=t.next,3==t.type||1==t.type&&"p"!==t.name&&!R[t.name]&&!t.attr("data-mce-type")?r?r.append(t):(r=a(F,1),r.attr(c.forced_root_block_attrs),b.insert(r,t),r.append(t)):(e(r),r=null),t=n;e(r)}}function a(t,n){var r=new e(t,n),i;return t in h&&(i=g[t],i?i.push(r):g[t]=[r]),r}function u(e){var t,n,r,i,o=d.getBlockElements();for(t=e.prev;t&&3===t.type;){if(r=t.value.replace(L,""),r.length>0)return void(t.value=r);if(n=t.next){if(3==n.type&&n.value.length){t=t.prev;continue}if(!o[n.name]&&"script"!=n.name&&"style"!=n.name){t=t.prev;continue}}i=t.prev,t.remove(),t=i}}function p(e){var t,n={};for(t in e)"li"!==t&&"p"!=t&&(n[t]=e[t]);return n}var y,b,C,x,w,E,N,_,S,k,T,R,A,B=[],D,L,M,P,O,H,I,F;if(r=r||{},g={},v={},R=s(i("script,style,head,html,body,title,meta,param"),d.getBlockElements()),I=d.getNonEmptyElements(),H=d.children,T=c.validate,F="forced_root_block"in r?r.forced_root_block:c.forced_root_block,O=d.getWhiteSpaceElements(),A=/^[ \t\r\n]+/,L=/[ \t\r\n]+$/,M=/[ \t\r\n]+/g,P=/^[ \t\r\n]+$/,y=new n({validate:T,allow_script_urls:c.allow_script_urls,allow_conditional_comments:c.allow_conditional_comments,self_closing_elements:p(d.getSelfClosingElements()),cdata:function(e){C.append(a("#cdata",4)).value=e},text:function(e,t){var n;D||(e=e.replace(M," "),C.lastChild&&R[C.lastChild.name]&&(e=e.replace(A,""))),0!==e.length&&(n=a("#text",3),n.raw=!!t,C.append(n).value=e)},comment:function(e){C.append(a("#comment",8)).value=e},pi:function(e,t){C.append(a(e,7)).value=t,u(C)},doctype:function(e){var t;t=C.append(a("#doctype",10)),t.value=e,u(C)},start:function(e,t,n){var r,i,o,s,l;if(o=T?d.getElementRule(e):{}){for(r=a(o.outputName||e,1),r.attributes=t,r.shortEnded=n,C.append(r),l=H[C.name],l&&H[r.name]&&!l[r.name]&&B.push(r),i=m.length;i--;)s=m[i].name,s in t.map&&(S=v[s],S?S.push(r):v[s]=[r]);R[e]&&u(r),n||(C=r),!D&&O[e]&&(D=!0)}},end:function(e){var t,n,r,i,o;if(n=T?d.getElementRule(e):{}){if(R[e]&&!D){if(t=C.firstChild,t&&3===t.type)if(r=t.value.replace(A,""),r.length>0)t.value=r,t=t.next;else for(i=t.next,t.remove(),t=i;t&&3===t.type;)r=t.value,i=t.next,(0===r.length||P.test(r))&&(t.remove(),t=i),t=i;if(t=C.lastChild,t&&3===t.type)if(r=t.value.replace(L,""),r.length>0)t.value=r,t=t.prev;else for(i=t.prev,t.remove(),t=i;t&&3===t.type;)r=t.value,i=t.prev,(0===r.length||P.test(r))&&(t.remove(),t=i),t=i}if(D&&O[e]&&(D=!1),(n.removeEmpty||n.paddEmpty)&&C.isEmpty(I,O))if(n.paddEmpty)l(c,C);else if(!C.attributes.map.name&&!C.attributes.map.id)return o=C.parent,R[C.name]?C.empty().remove():C.unwrap(),void(C=o);C=C.parent}}},d),b=C=new e(r.context||c.root_name,11),y.parse(t),T&&B.length&&(r.context?r.invalid=!0:f(B)),F&&("body"==b.name||r.isRootContent)&&o(),!r.invalid){for(k in g){for(S=h[k],x=g[k],N=x.length;N--;)x[N].parent||x.splice(N,1);for(w=0,E=S.length;w<E;w++)S[w](x,k,r)}for(w=0,E=m.length;w<E;w++)if(S=m[w],S.name in v){for(x=v[S.name],N=x.length;N--;)x[N].parent||x.splice(N,1);for(N=0,_=S.callbacks.length;N<_;N++)S.callbacks[N](x,S.name,r)}}return b},c.remove_trailing_brs&&p.addNodeFilter("br",function(t){var n,r=t.length,i,o=s({},d.getBlockElements()),a=d.getNonEmptyElements(),u,f,p,h,m=d.getNonEmptyElements(),g,v;for(o.body=1,n=0;n<r;n++)if(i=t[n],u=i.parent,o[i.parent.name]&&i===u.lastChild){for(p=i.prev;p;){if(h=p.name,"span"!==h||"bookmark"!==p.attr("data-mce-type")){if("br"!==h)break;if("br"===h){i=null;break}}p=p.prev}i&&(i.remove(),u.isEmpty(a,m)&&(g=d.getElementRule(u.name),g&&(g.removeEmpty?u.remove():g.paddEmpty&&l(c,u))))}else{for(f=i;u&&u.firstChild===f&&u.lastChild===f&&(f=u,!o[u.name]);)u=u.parent;f===u&&c.padd_empty_with_br!==!0&&(v=new e("#text",3),v.value="\xa0",i.replace(v))}}),c.allow_unsafe_link_target||p.addAttributeFilter("href",function(e){function t(e){return e=n(e),e?[e,l].join(" "):l}function n(e){var t=new RegExp("("+l.replace(" ","|")+")","g");return e&&(e=r.trim(e.replace(t,""))),e?e:null}function i(e,r){return r?t(e):n(e)}for(var o=e.length,a,s,l="noopener noreferrer";o--;)a=e[o],s=a.attr("rel"),"a"===a.name&&a.attr("rel",i(s,"_blank"==a.attr("target")))}),c.allow_html_in_named_anchor||p.addAttributeFilter("id,name",function(e){for(var t=e.length,n,r,i,o;t--;)if(o=e[t],"a"===o.name&&o.firstChild&&!o.attr("href")){i=o.parent,n=o.lastChild;do r=n.prev,i.insert(n,o),n=r;while(n)}}),c.fix_list_elements&&p.addNodeFilter("ul,ol",function(t){for(var n=t.length,r,i;n--;)if(r=t[n],i=r.parent,"ul"===i.name||"ol"===i.name)if(r.prev&&"li"===r.prev.name)r.prev.append(r);else{var o=new e("li",1);o.attr("style","list-style-type: none"),r.wrap(o)}}),c.validate&&d.getValidClasses()&&p.addAttributeFilter("class",function(e){for(var t=e.length,n,r,i,o,a,s=d.getValidClasses(),l,u;t--;){for(n=e[t],r=n.attr("class").split(" "),a="",i=0;i<r.length;i++)o=r[i],u=!1,l=s["*"],l&&l[o]&&(u=!0),l=s[n.name],!u&&l&&l[o]&&(u=!0),u&&(a&&(a+=" "),a+=o);a.length||(a=null),n.attr("class",a)}})}}),r(M,[C,m],function(e,t){var n=t.makeMap;return function(t){var r=[],i,o,a,s,l;return t=t||{},i=t.indent,o=n(t.indent_before||""),a=n(t.indent_after||""),s=e.getEncodeFunc(t.entity_encoding||"raw",t.entities),l="html"==t.element_format,{start:function(e,t,n){var u,c,d,f;if(i&&o[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n")),r.push("<",e),t)for(u=0,c=t.length;u<c;u++)d=t[u],r.push(" ",d.name,'="',s(d.value,!0),'"');!n||l?r[r.length]=">":r[r.length]=" />",n&&i&&a[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n"))},end:function(e){var t;r.push("</",e,">"),i&&a[e]&&r.length>0&&(t=r[r.length-1],t.length>0&&"\n"!==t&&r.push("\n"))},text:function(e,t){e.length>0&&(r[r.length]=t?e:s(e))},cdata:function(e){r.push("<![CDATA[",e,"]]>")},comment:function(e){r.push("<!--",e,"-->")},pi:function(e,t){t?r.push("<?",e," ",s(t),"?>"):r.push("<?",e,"?>"),i&&r.push("\n")},doctype:function(e){r.push("<!DOCTYPE",e,">",i?"\n":"")},reset:function(){r.length=0},getContent:function(){return r.join("").replace(/\n$/,"")}}}}),r(P,[M,B],function(e,t){return function(n,r){var i=this,o=new e(n);n=n||{},n.validate=!("validate"in n)||n.validate,i.schema=r=r||new t,i.writer=o,i.serialize=function(e){function t(e){var n=i[e.type],s,l,u,c,d,f,p,h,m;if(n)n(e);else{if(s=e.name,l=e.shortEnded,u=e.attributes,a&&u&&u.length>1&&(f=[],f.map={},m=r.getElementRule(e.name))){for(p=0,h=m.attributesOrder.length;p<h;p++)c=m.attributesOrder[p],c in u.map&&(d=u.map[c],f.map[c]=d,f.push({name:c,value:d}));for(p=0,h=u.length;p<h;p++)c=u[p].name,c in f.map||(d=u.map[c],f.map[c]=d,f.push({name:c,value:d}));u=f}if(o.start(e.name,u,l),!l){if(e=e.firstChild)do t(e);while(e=e.next);o.end(s)}}}var i,a;return a=n.validate,i={3:function(e){o.text(e.value,e.raw)},8:function(e){o.comment(e.value)},7:function(e){o.pi(e.name,e.value)},10:function(e){o.doctype(e.value)},4:function(e){o.cdata(e.value)},11:function(e){if(e=e.firstChild)do t(e);while(e=e.next)}},o.reset(),1!=e.type||n.inner?i[11](e):t(e),o.getContent()}}}),r(O,[w,L,D,C,P,A,B,d,m,S],function(e,t,n,r,i,o,a,s,l,u){function c(e){function t(e){return e&&"br"===e.name}var n,r;n=e.lastChild,t(n)&&(r=n.prev,t(r)&&(n.remove(),r.remove()))}var d=l.each,f=l.trim,p=e.DOM;return function(e,o){function h(e){var t=new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>","\\s?("+x.join("|")+')="[^"]+"'].join("|"),"gi");return e=u.trim(e.replace(t,""))}function m(e){var t=e,r=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,i,a,s,l,u,c=o.schema;for(t=h(t),u=c.getShortEndedElements();l=r.exec(t);)a=r.lastIndex,s=l[0].length,i=u[l[1]]?a:n.findEndTag(c,t,a),t=t.substring(0,a-s)+t.substring(i),r.lastIndex=a-s;return t}function g(){return m(o.getBody().innerHTML)}function v(e){l.inArray(x,e)===-1&&(C.addAttributeFilter(e,function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),x.push(e))}var y,b,C,x=["data-mce-selected"];return o&&(y=o.dom,b=o.schema),y=y||p,b=b||new a(e),e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs,C=new t(e,b),C.addAttributeFilter("data-mce-tabindex",function(e,t){for(var n=e.length,r;n--;)r=e[n],r.attr("tabindex",r.attributes.map["data-mce-tabindex"]),r.attr(t,null)}),C.addAttributeFilter("src,href,style",function(t,n){for(var r=t.length,i,o,a="data-mce-"+n,s=e.url_converter,l=e.url_converter_scope,u;r--;)i=t[r],o=i.attributes.map[a],o!==u?(i.attr(n,o.length>0?o:null),i.attr(a,null)):(o=i.attributes.map[n],"style"===n?o=y.serializeStyle(y.parseStyle(o),i.name):s&&(o=s.call(l,o,n,i.name)),i.attr(n,o.length>0?o:null))}),C.addAttributeFilter("class",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("class"),r&&(r=n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),n.attr("class",r.length>0?r:null))}),C.addAttributeFilter("data-mce-type",function(e,t,n){for(var r=e.length,i;r--;)i=e[r],"bookmark"!==i.attributes.map["data-mce-type"]||n.cleanup||i.remove()}),C.addNodeFilter("noscript",function(e){for(var t=e.length,n;t--;)n=e[t].firstChild,n&&(n.value=r.decode(n.value))}),C.addNodeFilter("script,style",function(e,t){function n(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")}for(var r=e.length,i,o,a;r--;)i=e[r],o=i.firstChild?i.firstChild.value:"","script"===t?(a=i.attr("type"),a&&i.attr("type","mce-no/type"==a?null:a.replace(/^mce\-/,"")),o.length>0&&(i.firstChild.value="// <![CDATA[\n"+n(o)+"\n// ]]>")):o.length>0&&(i.firstChild.value="<!--\n"+n(o)+"\n-->")}),C.addNodeFilter("#comment",function(e){for(var t=e.length,n;t--;)n=e[t],0===n.value.indexOf("[CDATA[")?(n.name="#cdata",n.type=4,n.value=n.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===n.value.indexOf("mce:protected ")&&(n.name="#text",n.type=3,n.raw=!0,n.value=unescape(n.value).substr(14))}),C.addNodeFilter("xml:namespace,input",function(e,t){for(var n=e.length,r;n--;)r=e[n],7===r.type?r.remove():1===r.type&&("input"!==t||"type"in r.attributes.map||r.attr("type","text"))}),C.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),{schema:b,addNodeFilter:C.addNodeFilter,addAttributeFilter:C.addAttributeFilter,serialize:function(t,n){var r=this,o,a,l,p,h,m;return s.ie&&y.select("script,style,select,map").length>0?(h=t.innerHTML,t=t.cloneNode(!1),y.setHTML(t,h)):t=t.cloneNode(!0),o=document.implementation,o.createHTMLDocument&&(a=o.createHTMLDocument(""),d("BODY"==t.nodeName?t.childNodes:[t],function(e){a.body.appendChild(a.importNode(e,!0))}),t="BODY"!=t.nodeName?a.body.firstChild:a.body,l=y.doc,y.doc=a),n=n||{},n.format=n.format||"html",n.selection&&(n.forced_root_block=""),n.no_events||(n.node=t,r.onPreProcess(n)),m=C.parse(f(n.getInner?t.innerHTML:y.getOuterHTML(t)),n),c(m),p=new i(e,b),n.content=p.serialize(m),n.cleanup||(n.content=u.trim(n.content),n.content=n.content.replace(/\uFEFF/g,"")),n.no_events||r.onPostProcess(n),l&&(y.doc=l),n.node=null,n.content},addRules:function(e){b.addValidElements(e)},setRules:function(e){b.setValidElements(e)},onPreProcess:function(e){o&&o.fire("PreProcess",e)},onPostProcess:function(e){o&&o.fire("PostProcess",e)},addTempAttr:v,trimHtml:h,getTrimmedContent:g,trimContent:m}}}),r(H,[],function(){function e(e){function t(t,n){var r,i=0,o,a,s,l,u,c,d=-1,f;if(r=t.duplicate(),r.collapse(n),f=r.parentElement(),f.ownerDocument===e.dom.doc){for(;"false"===f.contentEditable;)f=f.parentNode;if(!f.hasChildNodes())return{node:f,inside:1};for(s=f.children,o=s.length-1;i<=o;)if(c=Math.floor((i+o)/2),l=s[c],r.moveToElementText(l),d=r.compareEndPoints(n?"StartToStart":"EndToEnd",t),d>0)o=c-1;else{if(!(d<0))return{node:l};i=c+1}if(d<0)for(l?r.collapse(!1):(r.moveToElementText(f),r.collapse(!0),l=f,a=!0),u=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",1)&&f==r.parentElement();)u++;else for(r.collapse(!0),u=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",-1)&&f==r.parentElement();)u++;return{node:l,position:d,offset:u,inside:a}}}function n(){function n(e){var n=t(o,e),r,i,s=0,l,u,c;if(r=n.node,i=n.offset,n.inside&&!r.hasChildNodes())return void a[e?"setStart":"setEnd"](r,0);if(i===u)return void a[e?"setStartBefore":"setEndAfter"](r);if(n.position<0){if(l=n.inside?r.firstChild:r.nextSibling,!l)return void a[e?"setStartAfter":"setEndAfter"](r);if(!i)return void(3==l.nodeType?a[e?"setStart":"setEnd"](l,0):a[e?"setStartBefore":"setEndBefore"](l));for(;l;){if(3==l.nodeType&&(c=l.nodeValue,s+=c.length,s>=i)){r=l,s-=i,s=c.length-s;break}l=l.nextSibling}}else{if(l=r.previousSibling,!l)return a[e?"setStartBefore":"setEndBefore"](r);if(!i)return void(3==r.nodeType?a[e?"setStart":"setEnd"](l,r.nodeValue.length):a[e?"setStartAfter":"setEndAfter"](l));for(;l;){if(3==l.nodeType&&(s+=l.nodeValue.length,s>=i)){r=l,s-=i;break}l=l.previousSibling}}a[e?"setStart":"setEnd"](r,s)}var o=e.getRng(),a=i.createRng(),s,l,u,c,d;if(s=o.item?o.item(0):o.parentElement(),s.ownerDocument!=i.doc)return a;if(l=e.isCollapsed(),o.item)return a.setStart(s.parentNode,i.nodeIndex(s)),a.setEnd(a.startContainer,a.startOffset+1),a;try{n(!0),l||n()}catch(f){if(f.number!=-2147024809)throw f;d=r.getBookmark(2),u=o.duplicate(),u.collapse(!0),s=u.parentElement(),l||(u=o.duplicate(),u.collapse(!1),c=u.parentElement(),c.innerHTML=c.innerHTML),s.innerHTML=s.innerHTML,r.moveToBookmark(d),o=e.getRng(),n(!0),l||n()}return a}var r=this,i=e.dom,o=!1;this.getBookmark=function(n){function r(e){var t,n,r,o,a=[];for(t=e.parentNode,n=i.getRoot().parentNode;t!=n&&9!==t.nodeType;){for(r=t.children,o=r.length;o--;)if(e===r[o]){a.push(o);break}e=t,t=t.parentNode}return a}function o(e){var n;if(n=t(a,e))return{position:n.position,offset:n.offset,indexes:r(n.node),inside:n.inside}}var a=e.getRng(),s={};return 2===n&&(a.item?s.start={ctrl:!0,indexes:r(a.item(0))}:(s.start=o(!0),e.isCollapsed()||(s.end=o()))),s},this.moveToBookmark=function(e){function t(e){var t,n,r,o;for(t=i.getRoot(),n=e.length-1;n>=0;n--)o=t.children,r=e[n],r<=o.length-1&&(t=o[r]);return t}function n(n){var i=e[n?"start":"end"],a,s,l,u;i&&(a=i.position>0,s=o.createTextRange(),s.moveToElementText(t(i.indexes)),u=i.offset,u!==l?(s.collapse(i.inside||a),s.moveStart("character",a?-u:u)):s.collapse(n),r.setEndPoint(n?"StartToStart":"EndToStart",s),n&&r.collapse(!0))}var r,o=i.doc.body;e.start&&(e.start.ctrl?(r=o.createControlRange(),r.addElement(t(e.start.indexes)),r.select()):(r=o.createTextRange(),n(!0),n(),r.select()))},this.addRange=function(t){function n(e){var t,n,a,d,h;a=i.create("a"),t=e?s:u,n=e?l:c,d=r.duplicate(),t!=f&&t!=f.documentElement||(t=p,n=0),3==t.nodeType?(t.parentNode.insertBefore(a,t),d.moveToElementText(a),d.moveStart("character",n),i.remove(a),r.setEndPoint(e?"StartToStart":"EndToEnd",d)):(h=t.childNodes,h.length?(n>=h.length?i.insertAfter(a,h[h.length-1]):t.insertBefore(a,h[n]),d.moveToElementText(a)):t.canHaveHTML&&(t.innerHTML="<span>&#xFEFF;</span>",a=t.firstChild,d.moveToElementText(a),d.collapse(o)),r.setEndPoint(e?"StartToStart":"EndToEnd",d),i.remove(a))}var r,a,s,l,u,c,d,f=e.dom.doc,p=f.body,h,m;if(s=t.startContainer,l=t.startOffset,u=t.endContainer,c=t.endOffset,r=p.createTextRange(),s==u&&1==s.nodeType){if(l==c&&!s.hasChildNodes()){if(s.canHaveHTML)return d=s.previousSibling,d&&!d.hasChildNodes()&&i.isBlock(d)?d.innerHTML="&#xFEFF;":d=null,s.innerHTML="<span>&#xFEFF;</span><span>&#xFEFF;</span>",r.moveToElementText(s.lastChild),r.select(),i.doc.selection.clear(),s.innerHTML="",void(d&&(d.innerHTML=""));l=i.nodeIndex(s),s=s.parentNode}if(l==c-1)try{if(m=s.childNodes[l],a=p.createControlRange(),a.addElement(m),a.select(),h=e.getRng(),h.item&&m===h.item(0))return}catch(g){}}n(!0),n(),r.select()},this.getRangeAt=n}return e}),r(I,[d],function(e){return{BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(t){return e.mac?t.metaKey:t.ctrlKey&&!t.altKey}}}),r(F,[I,m,c,d,_],function(e,t,n,r,i){function o(e,t){for(;t&&t!=e;){if(s(t)||a(t))return t;t=t.parentNode}return null}var a=i.isContentEditableFalse,s=i.isContentEditableTrue;return function(i,s){function l(e){var t=s.settings.object_resizing;return t!==!1&&!r.iOS&&("string"!=typeof t&&(t="table,img,div"),"false"!==e.getAttribute("data-mce-resize")&&(e!=s.getBody()&&s.dom.is(e,t)))}function u(t){var n,r,i,o,a;n=t.screenX-L,r=t.screenY-M,U=n*B[2]+H,W=r*B[3]+I,U=U<5?5:U,W=W<5?5:W,i="IMG"==k.nodeName&&s.settings.resize_img_proportional!==!1?!e.modifierPressed(t):e.modifierPressed(t)||"IMG"==k.nodeName&&B[2]*B[3]!==0,i&&(j(n)>j(r)?(W=Y(U*F),U=Y(W/F)):(U=Y(W/F),W=Y(U*F))),_.setStyles(T,{width:U,height:W}),o=B.startPos.x+n,a=B.startPos.y+r,o=o>0?o:0,a=a>0?a:0,_.setStyles(R,{left:o,top:a,display:"block"}),R.innerHTML=U+" &times; "+W,B[2]<0&&T.clientWidth<=U&&_.setStyle(T,"left",P+(H-U)),B[3]<0&&T.clientHeight<=W&&_.setStyle(T,"top",O+(I-W)),n=X.scrollWidth-K,r=X.scrollHeight-G,n+r!==0&&_.setStyles(R,{left:o-n,top:a-r}),z||(s.fire("ObjectResizeStart",{target:k,width:H,height:I}),z=!0)}function c(){function e(e,t){t&&(k.style[e]||!s.schema.isValid(k.nodeName.toLowerCase(),e)?_.setStyle(k,e,t):_.setAttrib(k,e,t))}z=!1,e("width",U),e("height",W),_.unbind(V,"mousemove",u),_.unbind(V,"mouseup",c),$!=V&&(_.unbind($,"mousemove",u),_.unbind($,"mouseup",c)),_.remove(T),_.remove(R),q&&"TABLE"!=k.nodeName||d(k),s.fire("ObjectResized",{target:k,width:U,height:W}),_.setAttrib(k,"style",_.getAttrib(k,"style")),s.nodeChanged()}function d(e,t,n){var i,o,a,d,p;f(),x(),i=_.getPos(e,X),P=i.x,O=i.y,p=e.getBoundingClientRect(),o=p.width||p.right-p.left,a=p.height||p.bottom-p.top,k!=e&&(C(),k=e,U=W=0),d=s.fire("ObjectSelected",{target:e}),l(e)&&!d.isDefaultPrevented()?S(A,function(e,i){function s(t){L=t.screenX,M=t.screenY,H=k.clientWidth,I=k.clientHeight,F=I/H,B=e,e.startPos={x:o*e[0]+P,y:a*e[1]+O},K=X.scrollWidth,G=X.scrollHeight,T=k.cloneNode(!0),_.addClass(T,"mce-clonedresizable"),_.setAttrib(T,"data-mce-bogus","all"),T.contentEditable=!1,T.unSelectabe=!0,_.setStyles(T,{left:P,top:O,margin:0}),T.removeAttribute("data-mce-selected"),X.appendChild(T),_.bind(V,"mousemove",u),_.bind(V,"mouseup",c),$!=V&&(_.bind($,"mousemove",u),_.bind($,"mouseup",c)),R=_.add(X,"div",{"class":"mce-resize-helper","data-mce-bogus":"all"},H+" &times; "+I)}var l;return t?void(i==t&&s(n)):(l=_.get("mceResizeHandle"+i),l&&_.remove(l),l=_.add(X,"div",{id:"mceResizeHandle"+i,"data-mce-bogus":"all","class":"mce-resizehandle",unselectable:!0,style:"cursor:"+i+"-resize; margin:0; padding:0"}),r.ie&&(l.contentEditable=!1),_.bind(l,"mousedown",function(e){e.stopImmediatePropagation(),e.preventDefault(),s(e)}),e.elm=l,void _.setStyles(l,{left:o*e[0]+P-l.offsetWidth/2,top:a*e[1]+O-l.offsetHeight/2}))}):f(),k.setAttribute("data-mce-selected","1")}function f(){var e,t;x(),k&&k.removeAttribute("data-mce-selected");for(e in A)t=_.get("mceResizeHandle"+e),t&&(_.unbind(t),_.remove(t))}function p(e){function t(e,t){if(e)do if(e===t)return!0;while(e=e.parentNode)}var n,r;if(!z&&!s.removed)return S(_.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")}),r="mousedown"==e.type?e.target:i.getNode(),r=_.$(r).closest(q?"table":"table,img,hr")[0],t(r,X)&&(w(),n=i.getStart(!0),t(n,r)&&t(i.getEnd(!0),r)&&(!q||r!=n&&"IMG"!==n.nodeName))?void d(r):void f()}function h(e,t,n){e&&e.attachEvent&&e.attachEvent("on"+t,n)}function m(e,t,n){e&&e.detachEvent&&e.detachEvent("on"+t,n)}function g(e){var t=e.srcElement,n,r,i,o,a,l,u;n=t.getBoundingClientRect(),l=D.clientX-n.left,u=D.clientY-n.top;for(r in A)if(i=A[r],o=t.offsetWidth*i[0],a=t.offsetHeight*i[1],j(o-l)<8&&j(a-u)<8){B=i;break}z=!0,s.fire("ObjectResizeStart",{target:k,width:k.clientWidth,height:k.clientHeight}),s.getDoc().selection.empty(),d(t,r,D)}function v(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function y(e){return a(o(s.getBody(),e))}function b(e){var t=e.srcElement;if(y(t))return void v(e);if(t!=k){if(s.fire("ObjectSelected",{target:t}),C(),0===t.id.indexOf("mceResizeHandle"))return void(e.returnValue=!1);
"IMG"!=t.nodeName&&"TABLE"!=t.nodeName||(f(),k=t,h(t,"resizestart",g))}}function C(){m(k,"resizestart",g)}function x(){for(var e in A){var t=A[e];t.elm&&(_.unbind(t.elm),delete t.elm)}}function w(){try{s.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(e){}}function E(e){var t;if(q){t=V.body.createControlRange();try{return t.addElement(e),t.select(),!0}catch(n){}}}function N(){k=T=null,q&&(C(),m(X,"controlselect",b))}var _=s.dom,S=t.each,k,T,R,A,B,D,L,M,P,O,H,I,F,z,U,W,V=s.getDoc(),$=document,q=r.ie&&r.ie<11,j=Math.abs,Y=Math.round,X=s.getBody(),K,G;A={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var J=".mce-content-body";return s.contentStyles.push(J+" div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: box-sizing;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+J+" .mce-resizehandle:hover {background: #000}"+J+" img[data-mce-selected],"+J+" hr[data-mce-selected] {outline: 1px solid black;resize: none}"+J+" .mce-clonedresizable {position: absolute;"+(r.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+J+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}"),s.on("init",function(){q?(s.on("ObjectResized",function(e){"TABLE"!=e.target.nodeName&&(f(),E(e.target))}),h(X,"controlselect",b),s.on("mousedown",function(e){D=e})):(w(),r.ie>=11&&(s.on("mousedown click",function(e){var t=e.target,n=t.nodeName;z||!/^(TABLE|IMG|HR)$/.test(n)||y(t)||(s.selection.select(t,"TABLE"==n),"mousedown"==e.type&&s.nodeChanged())}),s.dom.bind(X,"mscontrolselect",function(e){function t(e){n.setEditorTimeout(s,function(){s.selection.select(e)})}return y(e.target)?(e.preventDefault(),void t(e.target)):void(/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"==e.target.tagName&&t(e.target)))})));var e=n.throttle(function(e){s.composing||p(e)});s.on("nodechange ResizeEditor ResizeWindow drop",e),s.on("keyup compositionend",function(t){k&&"TABLE"==k.nodeName&&e(t)}),s.on("hide blur",f)}),s.on("remove",x),{isResizable:l,showResizeRect:d,hideResizeRect:f,updateResizeRect:p,controlSelect:E,destroy:N}}}),r(z,[],function(){function e(e){return function(){return e}}function t(e){return function(t){return!e(t)}}function n(e,t){return function(n){return e(t(n))}}function r(){var e=s.call(arguments);return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0;return!1}}function i(){var e=s.call(arguments);return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1;return!0}}function o(e){var t=s.call(arguments);return t.length-1>=e.length?e.apply(this,t.slice(1)):function(){var e=t.concat([].slice.call(arguments));return o.apply(this,e)}}function a(){}var s=[].slice;return{constant:e,negate:t,and:i,or:r,curry:o,compose:n,noop:a}}),r(U,[_,h,k],function(e,t,n){function r(e){return!m(e)&&(d(e)?!f(e.parentNode):p(e)||c(e)||h(e)||u(e))}function i(e,t){for(e=e.parentNode;e&&e!=t;e=e.parentNode){if(u(e))return!1;if(l(e))return!0}return!0}function o(e){return!!u(e)&&t.reduce(e.getElementsByTagName("*"),function(e,t){return e||l(t)},!1)!==!0}function a(e){return p(e)||o(e)}function s(e,t){return r(e)&&i(e,t)}var l=e.isContentEditableTrue,u=e.isContentEditableFalse,c=e.isBr,d=e.isText,f=e.matchNodeNames("script style textarea"),p=e.matchNodeNames("img input textarea hr iframe video audio object"),h=e.matchNodeNames("table"),m=n.isCaretContainer;return{isCaretCandidate:r,isInEditable:i,isAtomic:a,isEditableCaretCandidate:s}}),r(W,[],function(){function e(e){return e?{left:c(e.left),top:c(e.top),bottom:c(e.bottom),right:c(e.right),width:c(e.width),height:c(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}}function t(t,n){return t=e(t),n?t.right=t.left:(t.left=t.left+t.width,t.right=t.left),t.width=0,t}function n(e,t){return e.left===t.left&&e.top===t.top&&e.bottom===t.bottom&&e.right===t.right}function r(e,t,n){return e>=0&&e<=Math.min(t.height,n.height)/2}function i(e,t){return e.bottom<t.top||!(e.top>t.bottom)&&r(t.top-e.bottom,e,t)}function o(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&r(t.bottom-e.top,e,t)}function a(e,t){return e.left<t.left}function s(e,t){return e.right>t.right}function l(e,t){return i(e,t)?-1:o(e,t)?1:a(e,t)?-1:s(e,t)?1:0}function u(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom}var c=Math.round;return{clone:e,collapse:t,isEqual:n,isAbove:i,isBelow:o,isLeft:a,isRight:s,compare:l,containsXY:u}}),r(V,[],function(){function e(e){return"string"==typeof e&&e.charCodeAt(0)>=768&&t.test(e)}var t=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]");return{isExtendingChar:e}}),r($,[z,_,w,T,U,W,V],function(e,t,n,r,i,o,a){function s(e){return"createRange"in e?e.createRange():n.DOM.createRng()}function l(e){return e&&/[\r\n\t ]/.test(e)}function u(e){var t=e.startContainer,n=e.startOffset,r;return!!(l(e.toString())&&v(t.parentNode)&&(r=t.data,l(r[n-1])||l(r[n+1])))}function c(e){function t(e){var t=e.ownerDocument,n=s(t),r=t.createTextNode("\xa0"),i=e.parentNode,a;return i.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1),a=o.clone(n.getBoundingClientRect()),i.removeChild(r),a}function n(e){var n,r;return r=e.getClientRects(),n=r.length>0?o.clone(r[0]):o.clone(e.getBoundingClientRect()),b(e)&&0===n.left?t(e):n}function r(e,t){return e=o.collapse(e,t),e.width=1,e.right=e.left+1,e}function i(e){0!==e.height&&(c.length>0&&o.isEqual(e,c[c.length-1])||c.push(e))}function l(e,t){var o=s(e.ownerDocument);if(t<e.data.length){if(a.isExtendingChar(e.data[t]))return c;if(a.isExtendingChar(e.data[t-1])&&(o.setStart(e,t),o.setEnd(e,t+1),!u(o)))return i(r(n(o),!1)),c}t>0&&(o.setStart(e,t-1),o.setEnd(e,t),u(o)||i(r(n(o),!1))),t<e.data.length&&(o.setStart(e,t),o.setEnd(e,t+1),u(o)||i(r(n(o),!0)))}var c=[],d,p;if(y(e.container()))return l(e.container(),e.offset()),c;if(f(e.container()))if(e.isAtEnd())p=x(e.container(),e.offset()),y(p)&&l(p,p.data.length),g(p)&&!b(p)&&i(r(n(p),!1));else{if(p=x(e.container(),e.offset()),y(p)&&l(p,0),g(p)&&e.isAtEnd())return i(r(n(p),!1)),c;d=x(e.container(),e.offset()-1),g(d)&&!b(d)&&(h(d)||h(p)||!g(p))&&i(r(n(d),!1)),g(p)&&i(r(n(p),!0))}return c}function d(t,n,r){function i(){return y(t)?0===n:0===n}function o(){return y(t)?n>=t.data.length:n>=t.childNodes.length}function a(){var e;return e=s(t.ownerDocument),e.setStart(t,n),e.setEnd(t,n),e}function l(){return r||(r=c(new d(t,n))),r}function u(){return l().length>0}function f(e){return e&&t===e.container()&&n===e.offset()}function p(e){return x(t,e?n-1:n)}return{container:e.constant(t),offset:e.constant(n),toRange:a,getClientRects:l,isVisible:u,isAtStart:i,isAtEnd:o,isEqual:f,getNode:p}}var f=t.isElement,p=i.isCaretCandidate,h=t.matchStyleValues("display","block table"),m=t.matchStyleValues("float","left right"),g=e.and(f,p,e.negate(m)),v=e.negate(t.matchStyleValues("white-space","pre pre-line pre-wrap")),y=t.isText,b=t.isBr,C=n.nodeIndex,x=r.getNode;return d.fromRangeStart=function(e){return new d(e.startContainer,e.startOffset)},d.fromRangeEnd=function(e){return new d(e.endContainer,e.endOffset)},d.after=function(e){return new d(e.parentNode,C(e)+1)},d.before=function(e){return new d(e.parentNode,C(e))},d}),r(q,[_,w,z,h,$],function(e,t,n,r,i){function o(e){var t=e.parentNode;return v(t)?o(t):t}function a(e){return e?r.reduce(e.childNodes,function(e,t){return v(t)&&"BR"!=t.nodeName?e=e.concat(a(t)):e.push(t),e},[]):[]}function s(e,t){for(;(e=e.previousSibling)&&g(e);)t+=e.data.length;return t}function l(e){return function(t){return e===t}}function u(t){var n,i,s;return n=a(o(t)),i=r.findIndex(n,l(t),t),n=n.slice(0,i+1),s=r.reduce(n,function(e,t,r){return g(t)&&g(n[r-1])&&e++,e},0),n=r.filter(n,e.matchNodeNames(t.nodeName)),i=r.findIndex(n,l(t),t),i-s}function c(e){var t;return t=g(e)?"text()":e.nodeName.toLowerCase(),t+"["+u(e)+"]"}function d(e,t,n){var r=[];for(t=t.parentNode;t!=e&&(!n||!n(t));t=t.parentNode)r.push(t);return r}function f(t,i){var o,a,l=[],u,f,p;return o=i.container(),a=i.offset(),g(o)?u=s(o,a):(f=o.childNodes,a>=f.length?(u="after",a=f.length-1):u="before",o=f[a]),l.push(c(o)),p=d(t,o),p=r.filter(p,n.negate(e.isBogus)),l=l.concat(r.map(p,function(e){return c(e)})),l.reverse().join("/")+","+u}function p(t,n,i){var o=a(t);return o=r.filter(o,function(e,t){return!g(e)||!g(o[t-1])}),o=r.filter(o,e.matchNodeNames(n)),o[i]}function h(e,t){for(var n=e,r=0,o;g(n);){if(o=n.data.length,t>=r&&t<=r+o){e=n,t-=r;break}if(!g(n.nextSibling)){e=n,t=o;break}r+=o,n=n.nextSibling}return t>e.data.length&&(t=e.data.length),new i(e,t)}function m(e,t){var n,o,a;return t?(n=t.split(","),t=n[0].split("/"),a=n.length>1?n[1]:"before",o=r.reduce(t,function(e,t){return(t=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))?("text()"===t[1]&&(t[1]="#text"),p(e,t[1],parseInt(t[2],10))):null},e),o?g(o)?h(o,parseInt(a,10)):(a="after"===a?y(o)+1:y(o),new i(o.parentNode,a)):null):null}var g=e.isText,v=e.isBogus,y=t.nodeIndex;return{create:f,resolve:m}}),r(j,[d,m,k,q,$,_,T],function(e,t,n,r,i,o,a){function s(s){var u=s.dom;this.getBookmark=function(e,c){function d(e,n){var r=0;return t.each(u.select(e),function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!=n&&void r++}),r}function f(e){function t(t){var n,r,i,o=t?"start":"end";n=e[o+"Container"],r=e[o+"Offset"],1==n.nodeType&&"TR"==n.nodeName&&(i=n.childNodes,n=i[Math.min(t?r:r-1,i.length-1)],n&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r)))}return t(!0),t(),e}function p(e){function t(e,t){var r=e[t?"startContainer":"endContainer"],i=e[t?"startOffset":"endOffset"],o=[],a,s,l=0;if(3==r.nodeType){if(c)for(a=r.previousSibling;a&&3==a.nodeType;a=a.previousSibling)i+=a.nodeValue.length;o.push(i)}else s=r.childNodes,i>=s.length&&s.length&&(l=1,i=Math.max(0,s.length-1)),o.push(u.nodeIndex(s[i],c)+l);for(;r&&r!=n;r=r.parentNode)o.push(u.nodeIndex(r,c));return o}var n=u.getRoot(),r={};return r.start=t(e,!0),s.isCollapsed()||(r.end=t(e)),r}function h(e){function t(e,t){var r;if(o.isElement(e)&&(e=a.getNode(e,t),l(e)))return e;if(n.isCaretContainer(e)){if(o.isText(e)&&n.isCaretContainerBlock(e)&&(e=e.parentNode),r=e.previousSibling,l(r))return r;if(r=e.nextSibling,l(r))return r}}return t(e.startContainer,e.startOffset)||t(e.endContainer,e.endOffset)}var m,g,v,y,b,C,x="&#xFEFF;",w;if(2==e)return C=s.getNode(),b=C?C.nodeName:null,m=s.getRng(),l(C)||"IMG"==b?{name:b,index:d(b,C)}:s.tridentSel?s.tridentSel.getBookmark(e):(C=h(m),C?(b=C.tagName,{name:b,index:d(b,C)}):p(m));if(3==e)return m=s.getRng(),{start:r.create(u.getRoot(),i.fromRangeStart(m)),end:r.create(u.getRoot(),i.fromRangeEnd(m))};if(e)return{rng:s.getRng()};if(m=s.getRng(),v=u.uniqueId(),y=s.isCollapsed(),w="overflow:hidden;line-height:0px",m.duplicate||m.item){if(m.item)return C=m.item(0),b=C.nodeName,{name:b,index:d(b,C)};g=m.duplicate();try{m.collapse(),m.pasteHTML('<span data-mce-type="bookmark" id="'+v+'_start" style="'+w+'">'+x+"</span>"),y||(g.collapse(!1),m.moveToElementText(g.parentElement()),0===m.compareEndPoints("StartToEnd",g)&&g.move("character",-1),g.pasteHTML('<span data-mce-type="bookmark" id="'+v+'_end" style="'+w+'">'+x+"</span>"))}catch(E){return null}}else{if(C=s.getNode(),b=C.nodeName,"IMG"==b)return{name:b,index:d(b,C)};g=f(m.cloneRange()),y||(g.collapse(!1),g.insertNode(u.create("span",{"data-mce-type":"bookmark",id:v+"_end",style:w},x))),m=f(m),m.collapse(!0),m.insertNode(u.create("span",{"data-mce-type":"bookmark",id:v+"_start",style:w},x))}return s.moveToBookmark({id:v,keep:1}),{id:v}},this.moveToBookmark=function(n){function i(e){var t=n[e?"start":"end"],r,i,o,a;if(t){for(o=t[0],i=d,r=t.length-1;r>=1;r--){if(a=i.childNodes,t[r]>a.length-1)return;i=a[t[r]]}3===i.nodeType&&(o=Math.min(t[0],i.nodeValue.length)),1===i.nodeType&&(o=Math.min(t[0],i.childNodes.length)),e?c.setStart(i,o):c.setEnd(i,o)}return!0}function o(r){var i=u.get(n.id+"_"+r),o,a,s,l,c=n.keep;if(i&&(o=i.parentNode,"start"==r?(c?(o=i.firstChild,a=1):a=u.nodeIndex(i),f=p=o,h=m=a):(c?(o=i.firstChild,a=1):a=u.nodeIndex(i),p=o,m=a),!c)){for(l=i.previousSibling,s=i.nextSibling,t.each(t.grep(i.childNodes),function(e){3==e.nodeType&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))});i=u.get(n.id+"_"+r);)u.remove(i,1);l&&s&&l.nodeType==s.nodeType&&3==l.nodeType&&!e.opera&&(a=l.nodeValue.length,l.appendData(s.nodeValue),u.remove(s),"start"==r?(f=p=l,h=m=a):(p=l,m=a))}}function a(t){return!u.isBlock(t)||t.innerHTML||e.ie||(t.innerHTML='<br data-mce-bogus="1" />'),t}function l(){var e,t;return e=u.createRng(),t=r.resolve(u.getRoot(),n.start),e.setStart(t.container(),t.offset()),t=r.resolve(u.getRoot(),n.end),e.setEnd(t.container(),t.offset()),e}var c,d,f,p,h,m;if(n)if(t.isArray(n.start)){if(c=u.createRng(),d=u.getRoot(),s.tridentSel)return s.tridentSel.moveToBookmark(n);i(!0)&&i()&&s.setRng(c)}else"string"==typeof n.start?s.setRng(l(n)):n.id?(o("start"),o("end"),f&&(c=u.createRng(),c.setStart(a(f),h),c.setEnd(a(p),m),s.setRng(c))):n.name?s.select(u.select(n.name)[n.index]):n.rng&&s.setRng(n.rng)}}var l=o.isContentEditableFalse;return s.isBookmarkNode=function(e){return e&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},s}),r(Y,[y,H,F,T,j,_,d,m,$],function(e,n,r,i,o,a,s,l,u){function c(e,t,i,a){var s=this;s.dom=e,s.win=t,s.serializer=i,s.editor=a,s.bookmarkManager=new o(s),s.controlSelection=new r(s,a),s.win.getSelection||(s.tridentSel=new n(s))}var d=l.each,f=l.trim,p=s.ie;return c.prototype={setCursorLocation:function(e,t){var n=this,r=n.dom.createRng();e?(r.setStart(e,t),r.setEnd(e,t),n.setRng(r),n.collapse(!1)):(n._moveEndPoint(r,n.editor.getBody(),!0),n.setRng(r))},getContent:function(e){var n=this,r=n.getRng(),i=n.dom.create("body"),o=n.getSel(),a,s,l;return e=e||{},a=s="",e.get=!0,e.format=e.format||"html",e.selection=!0,n.editor.fire("BeforeGetContent",e),"text"==e.format?n.isCollapsed()?"":r.text||(o.toString?o.toString():""):(r.cloneContents?(l=r.cloneContents(),l&&i.appendChild(l)):r.item!==t||r.htmlText!==t?(i.innerHTML="<br>"+(r.item?r.item(0).outerHTML:r.htmlText),i.removeChild(i.firstChild)):i.innerHTML=r.toString(),/^\s/.test(i.innerHTML)&&(a=" "),/\s+$/.test(i.innerHTML)&&(s=" "),e.getInner=!0,e.content=n.isCollapsed()?"":a+n.serializer.serialize(i,e)+s,n.editor.fire("GetContent",e),e.content)},setContent:function(e,t){var n=this,r=n.getRng(),i,o=n.win.document,a,s;if(t=t||{format:"html"},t.set=!0,t.selection=!0,t.content=e,t.no_events||n.editor.fire("BeforeSetContent",t),e=t.content,r.insertNode){e+='<span id="__caret">_</span>',r.startContainer==o&&r.endContainer==o?o.body.innerHTML=e:(r.deleteContents(),0===o.body.childNodes.length?o.body.innerHTML=e:r.createContextualFragment?r.insertNode(r.createContextualFragment(e)):(a=o.createDocumentFragment(),s=o.createElement("div"),a.appendChild(s),s.outerHTML=e,r.insertNode(a))),i=n.dom.get("__caret"),r=o.createRange(),r.setStartBefore(i),r.setEndBefore(i),n.setRng(r),n.dom.remove("__caret");try{n.setRng(r)}catch(l){}}else r.item&&(o.execCommand("Delete",!1,null),r=n.getRng()),/^\s+/.test(e)?(r.pasteHTML('<span id="__mce_tmp">_</span>'+e),n.dom.remove("__mce_tmp")):r.pasteHTML(e);t.no_events||n.editor.fire("SetContent",t)},getStart:function(e){var t=this,n=t.getRng(),r,i,o,a;if(n.duplicate||n.item){if(n.item)return n.item(0);for(o=n.duplicate(),o.collapse(1),r=o.parentElement(),r.ownerDocument!==t.dom.doc&&(r=t.dom.getRoot()),i=a=n.parentElement();a=a.parentNode;)if(a==r){r=i;break}return r}return r=n.startContainer,1==r.nodeType&&r.hasChildNodes()&&(e&&n.collapsed||(r=r.childNodes[Math.min(r.childNodes.length-1,n.startOffset)])),r&&3==r.nodeType?r.parentNode:r},getEnd:function(e){var t=this,n=t.getRng(),r,i;return n.duplicate||n.item?n.item?n.item(0):(n=n.duplicate(),n.collapse(0),r=n.parentElement(),r.ownerDocument!==t.dom.doc&&(r=t.dom.getRoot()),r&&"BODY"==r.nodeName?r.lastChild||r:r):(r=n.endContainer,i=n.endOffset,1==r.nodeType&&r.hasChildNodes()&&(e&&n.collapsed||(r=r.childNodes[i>0?i-1:i])),r&&3==r.nodeType?r.parentNode:r)},getBookmark:function(e,t){return this.bookmarkManager.getBookmark(e,t)},moveToBookmark:function(e){return this.bookmarkManager.moveToBookmark(e)},select:function(e,t){var n=this,r=n.dom,i=r.createRng(),o;if(n.lastFocusBookmark=null,e){if(!t&&n.controlSelection.controlSelect(e))return;o=r.nodeIndex(e),i.setStart(e.parentNode,o),i.setEnd(e.parentNode,o+1),t&&(n._moveEndPoint(i,e,!0),n._moveEndPoint(i,e)),n.setRng(i)}return e},isCollapsed:function(){var e=this,t=e.getRng(),n=e.getSel();return!(!t||t.item)&&(t.compareEndPoints?0===t.compareEndPoints("StartToEnd",t):!n||t.collapsed)},collapse:function(e){var t=this,n=t.getRng(),r;n.item&&(r=n.item(0),n=t.win.document.body.createTextRange(),n.moveToElementText(r)),n.collapse(!!e),t.setRng(n)},getSel:function(){var e=this.win;return e.getSelection?e.getSelection():e.document.selection},getRng:function(e){function t(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}}var n=this,r,i,o,a,s,l;if(!n.win)return null;if(a=n.win.document,"undefined"==typeof a||null===a)return null;if(!e&&n.lastFocusBookmark){var u=n.lastFocusBookmark;return u.startContainer?(i=a.createRange(),i.setStart(u.startContainer,u.startOffset),i.setEnd(u.endContainer,u.endOffset)):i=u,i}if(e&&n.tridentSel)return n.tridentSel.getRangeAt(0);try{(r=n.getSel())&&(i=r.rangeCount>0?r.getRangeAt(0):r.createRange?r.createRange():a.createRange())}catch(c){}if(l=n.editor.fire("GetSelectionRange",{range:i}),l.range!==i)return l.range;if(p&&i&&i.setStart&&a.selection){try{s=a.selection.createRange()}catch(c){}s&&s.item&&(o=s.item(0),i=a.createRange(),i.setStartBefore(o),i.setEndAfter(o))}return i||(i=a.createRange?a.createRange():a.body.createTextRange()),i.setStart&&9===i.startContainer.nodeType&&i.collapsed&&(o=n.dom.getRoot(),i.setStart(o,0),i.setEnd(o,0)),n.selectedRange&&n.explicitRange&&(0===t(i.START_TO_START,i,n.selectedRange)&&0===t(i.END_TO_END,i,n.selectedRange)?i=n.explicitRange:(n.selectedRange=null,n.explicitRange=null)),i},setRng:function(e,t){var n=this,r,i,o;if(e)if(e.select){n.explicitRange=null;try{e.select()}catch(a){}}else if(n.tridentSel){if(e.cloneRange)try{n.tridentSel.addRange(e)}catch(a){}}else{if(r=n.getSel(),o=n.editor.fire("SetSelectionRange",{range:e}),e=o.range,r){n.explicitRange=e;try{r.removeAllRanges(),r.addRange(e)}catch(a){}t===!1&&r.extend&&(r.collapse(e.endContainer,e.endOffset),r.extend(e.startContainer,e.startOffset)),n.selectedRange=r.rangeCount>0?r.getRangeAt(0):null}e.collapsed||e.startContainer!=e.endContainer||!r.setBaseAndExtent||s.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(i=e.startContainer.childNodes[e.startOffset],i&&"IMG"==i.tagName&&(r.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),r.anchorNode===e.startContainer&&r.focusNode===e.endContainer||r.setBaseAndExtent(i,0,i,1))),n.editor.fire("AfterSetSelectionRange",{range:e})}},setNode:function(e){var t=this;return t.setContent(t.dom.getOuterHTML(e)),e},getNode:function(){function e(e,t){for(var n=e;e&&3===e.nodeType&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n}var t=this,n=t.getRng(),r,i,o,a,s,l=t.dom.getRoot();return n?(i=n.startContainer,o=n.endContainer,a=n.startOffset,s=n.endOffset,n.setStart?(r=n.commonAncestorContainer,!n.collapsed&&(i==o&&s-a<2&&i.hasChildNodes()&&(r=i.childNodes[a]),3===i.nodeType&&3===o.nodeType&&(i=i.length===a?e(i.nextSibling,!0):i.parentNode,o=0===s?e(o.previousSibling,!1):o.parentNode,i&&i===o))?i:r&&3==r.nodeType?r.parentNode:r):(r=n.item?n.item(0):n.parentElement(),r.ownerDocument!==t.win.document&&(r=l),r)):l},getSelectedBlocks:function(t,n){var r=this,i=r.dom,o,a,s=[];if(a=i.getRoot(),t=i.getParent(t||r.getStart(),i.isBlock),n=i.getParent(n||r.getEnd(),i.isBlock),t&&t!=a&&s.push(t),t&&n&&t!=n){o=t;for(var l=new e(t,a);(o=l.next())&&o!=n;)i.isBlock(o)&&s.push(o)}return n&&t!=n&&n!=a&&s.push(n),s},isForward:function(){var e=this.dom,t=this.getSel(),n,r;return!(t&&t.anchorNode&&t.focusNode)||(n=e.createRng(),n.setStart(t.anchorNode,t.anchorOffset),n.collapse(!0),r=e.createRng(),r.setStart(t.focusNode,t.focusOffset),r.collapse(!0),n.compareBoundaryPoints(n.START_TO_START,r)<=0)},normalize:function(){var e=this,t=e.getRng();return s.range&&new i(e.dom).normalize(t)&&e.setRng(t,e.isForward()),t},selectorChanged:function(e,t){var n=this,r;return n.selectorChangedData||(n.selectorChangedData={},r={},n.editor.on("NodeChange",function(e){var t=e.element,i=n.dom,o=i.getParents(t,null,i.getRoot()),a={};d(n.selectorChangedData,function(e,t){d(o,function(n){if(i.is(n,t))return r[t]||(d(e,function(e){e(!0,{node:n,selector:t,parents:o})}),r[t]=e),a[t]=e,!1})}),d(r,function(e,n){a[n]||(delete r[n],d(e,function(e){e(!1,{node:t,selector:n,parents:o})}))})})),n.selectorChangedData[e]||(n.selectorChangedData[e]=[]),n.selectorChangedData[e].push(t),n},getScrollContainer:function(){for(var e,t=this.dom.getRoot();t&&"BODY"!=t.nodeName;){if(t.scrollHeight>t.clientHeight){e=t;break}t=t.parentNode}return e},scrollIntoView:function(e,t){function n(e){for(var t=0,n=0,r=e;r&&r.nodeType;)t+=r.offsetLeft||0,n+=r.offsetTop||0,r=r.offsetParent;return{x:t,y:n}}var r,i,o=this,s=o.dom,l=s.getRoot(),u,c,d=0;if(a.isElement(e)){if(t===!1&&(d=e.offsetHeight),"BODY"!=l.nodeName){var f=o.getScrollContainer();if(f)return r=n(e).y-n(f).y+d,c=f.clientHeight,u=f.scrollTop,void((r<u||r+25>u+c)&&(f.scrollTop=r<u?r:r-c+25))}i=s.getViewPort(o.editor.getWin()),r=s.getPos(e).y+d,u=i.y,c=i.h,(r<i.y||r+25>u+c)&&o.editor.getWin().scrollTo(0,r<u?r:r-c+25)}},placeCaretAt:function(e,t){this.setRng(i.getCaretRangeFromPoint(e,t,this.editor.getDoc()))},_moveEndPoint:function(t,n,r){var i=n,o=new e(n,i),a=this.dom.schema.getNonEmptyElements();do{if(3==n.nodeType&&0!==f(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length));if(a[n.nodeName]&&!/^(TD|TH)$/.test(n.nodeName))return void(r?t.setStartBefore(n):"BR"==n.nodeName?t.setEndBefore(n):t.setEndAfter(n));if(s.ie&&s.ie<11&&this.dom.isBlock(n)&&this.dom.isEmpty(n))return void(r?t.setStart(n,0):t.setEnd(n,0))}while(n=r?o.next():o.prev());"BODY"==i.nodeName&&(r?t.setStart(i,0):t.setEnd(i,i.childNodes.length))},getBoundingClientRect:function(){var e=this.getRng();return e.collapsed?u.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){this.win=null,this.controlSelection.destroy()}},c}),r(X,[j,m],function(e,t){function n(t){this.compare=function(n,i){function o(e){var n={};return r(t.getAttribs(e),function(r){var i=r.nodeName.toLowerCase();0!==i.indexOf("_")&&"style"!==i&&0!==i.indexOf("data-")&&(n[i]=t.getAttrib(e,i))}),n}function a(e,t){var n,r;for(r in e)if(e.hasOwnProperty(r)){if(n=t[r],"undefined"==typeof n)return!1;if(e[r]!=n)return!1;delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1;return!0}return n.nodeName==i.nodeName&&(!!a(o(n),o(i))&&(!!a(t.parseStyle(t.getAttrib(n,"style")),t.parseStyle(t.getAttrib(i,"style")))&&(!e.isBookmarkNode(n)&&!e.isBookmarkNode(i))))}}var r=t.each;return n}),r(K,[w,m,B],function(e,t,n){function r(e,r){function i(e,t){t.classes.length&&u.addClass(e,t.classes.join(" ")),u.setAttribs(e,t.attrs)}function o(e){var t;return c="string"==typeof e?{name:e,classes:[],attrs:{}}:e,t=u.create(c.name),i(t,c),t}function a(e,n){var r="string"!=typeof e?e.nodeName.toLowerCase():e,i=f.getElementRule(r),o=i.parentsRequired;return!(!o||!o.length)&&(n&&t.inArray(o,n)!==-1?n:o[0])}function s(e,n,r){var i,l,c,d=n.length&&n[0],f=d&&d.name;if(c=a(e,f))f==c?(l=n[0],n=n.slice(1)):l=c;else if(d)l=n[0],n=n.slice(1);else if(!r)return e;return l&&(i=o(l),i.appendChild(e)),r&&(i||(i=u.create("div"),i.appendChild(e)),t.each(r,function(t){var n=o(t);i.insertBefore(n,e)})),s(i,n,l&&l.siblings)}var l,c,d,f=r&&r.schema||new n({});return e&&e.length?(c=e[0],l=o(c),d=u.create("div"),d.appendChild(s(l,e.slice(1),c.siblings)),d):""}function i(e,t){return r(a(e),t)}function o(e){var n,r={classes:[],attrs:{}};return e=r.selector=t.trim(e),"*"!==e&&(n=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,function(e,n,i,o,a){switch(n){case"#":r.attrs.id=i;break;case".":r.classes.push(i);break;case":":t.inArray("checked disabled enabled read-only required".split(" "),i)!==-1&&(r.attrs[i]=i)}if("["==o){var s=a.match(/([\w\-]+)(?:\=\"([^\"]+))?/);s&&(r.attrs[s[1]]=s[2])}return""})),r.name=n||"div",r}function a(e){return e&&"string"==typeof e?(e=e.split(/\s*,\s*/)[0],e=e.replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),t.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/),function(e){var n=t.map(e.split(/(?:~\+|~|\+)/),o),r=n.pop();return n.length&&(r.siblings=n),r}).reverse()):[]}function s(e,t){function n(e){return e.replace(/%(\w+)/g,"")}var i,o,s,c,d="",f,p;if(p=e.settings.preview_styles,p===!1)return"";if("string"!=typeof p&&(p="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),"string"==typeof t){if(t=e.formatter.get(t),!t)return;t=t[0]}return"preview"in t&&(p=t.preview,p===!1)?"":(i=t.block||t.inline||"span",c=a(t.selector),c.length?(c[0].name||(c[0].name=i),i=t.selector,o=r(c,e)):o=r([i],e),s=u.select(i,o)[0]||o.firstChild,l(t.styles,function(e,t){e=n(e),e&&u.setStyle(s,t,e)}),l(t.attributes,function(e,t){e=n(e),e&&u.setAttrib(s,t,e)}),l(t.classes,function(e){e=n(e),u.hasClass(s,e)||u.addClass(s,e)}),e.fire("PreviewFormats"),u.setStyles(o,{position:"absolute",left:-65535}),e.getBody().appendChild(o),f=u.getStyle(e.getBody(),"fontSize",!0),f=/px$/.test(f)?parseInt(f,10):0,l(p.split(" "),function(t){var n=u.getStyle(s,t,!0);if(!("background-color"==t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=u.getStyle(e.getBody(),t,!0),"#ffffff"==u.toHex(n).toLowerCase())||"color"==t&&"#000000"==u.toHex(n).toLowerCase())){if("font-size"==t&&/em|%$/.test(n)){if(0===f)return;n=parseFloat(n,10)/(/%$/.test(n)?100:1),n=n*f+"px"}"border"==t&&n&&(d+="padding:0 2px;"),d+=t+":"+n+";"}}),e.fire("AfterPreviewFormats"),u.remove(o),d)}var l=t.each,u=e.DOM;return{getCssText:s,parseSelector:a,selectorToHtml:i}}),r(G,[h,_,g],function(e,t,n){function r(e,t){var n=o[e];n||(o[e]=n=[]),o[e].push(t)}function i(e,t){s(o[e],function(e){e(t)})}var o={},a=e.filter,s=e.each;return r("pre",function(r){function i(t){return u(t.previousSibling)&&e.indexOf(c,t.previousSibling)!=-1}function o(e,t){n(t).remove(),n(e).append("<br><br>").append(t.childNodes)}var l=r.selection.getRng(),u,c;u=t.matchNodeNames("pre"),l.collapsed||(c=r.selection.getSelectedBlocks(),s(a(a(c,u),i),function(e){o(e.previousSibling,e)}))}),{postProcess:i}}),r(J,[y,T,j,X,z,m,K,G],function(e,t,n,r,i,o,a,s){return function(l){function u(e){return e.nodeType&&(e=e.nodeName),!!l.schema.getTextBlockElements()[e.toLowerCase()]}function c(e){return/^(TH|TD)$/.test(e.nodeName)}function d(e){return e&&/^(IMG)$/.test(e.nodeName)}function f(e,t){return Q.getParents(e,t,Q.getRoot())}function p(e){return 1===e.nodeType&&"_mce_caret"===e.id}function h(){v({valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0},fontname:{inline:"span",styles:{fontFamily:"%value"}},fontsize:{inline:"span",styles:{fontSize:"%value"}},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(e,t,n){me(n,function(t,n){Q.setAttrib(e,n,t)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,
deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}),me("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){v(e,{block:e,remove:"all"})}),v(l.settings.formats)}function m(){l.addShortcut("meta+b","bold_desc","Bold"),l.addShortcut("meta+i","italic_desc","Italic"),l.addShortcut("meta+u","underline_desc","Underline");for(var e=1;e<=6;e++)l.addShortcut("access+"+e,"",["FormatBlock",!1,"h"+e]);l.addShortcut("access+7","",["FormatBlock",!1,"p"]),l.addShortcut("access+8","",["FormatBlock",!1,"div"]),l.addShortcut("access+9","",["FormatBlock",!1,"address"])}function g(e){return e?J[e]:J}function v(e,t){e&&("string"!=typeof e?me(e,function(e,t){v(t,e)}):(t=t.length?t:[t],me(t,function(e){e.deep===ce&&(e.deep=!e.selector),e.split===ce&&(e.split=!e.selector||e.inline),e.remove===ce&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))}),J[e]=t))}function y(e){return e&&J[e]&&delete J[e],J}function b(e,t){var n=g(t);if(n)for(var r=0;r<n.length;r++)if(n[r].inherit===!1&&Q.is(e,n[r].selector))return!0;return!1}function C(e){var t;return l.dom.getParent(e,function(e){return t=l.dom.getStyle(e,"text-decoration"),t&&"none"!==t}),t}function x(e){var t;1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=C(e.parentNode),l.dom.getStyle(e,"color")&&t?l.dom.setStyle(e,"text-decoration",t):l.dom.getStyle(e,"text-decoration")===t&&l.dom.setStyle(e,"text-decoration",null))}function w(t,n,r){function i(e,t){if(t=t||f,e){if(t.onformat&&t.onformat(e,t,n,r),me(t.styles,function(t,r){Q.setStyle(e,r,F(t,n))}),t.styles){var i=Q.getAttrib(e,"style");i&&e.setAttribute("data-mce-style",i)}me(t.attributes,function(t,r){Q.setAttrib(e,r,F(t,n))}),me(t.classes,function(t){t=F(t,n),Q.hasClass(e,t)||Q.addClass(e,t)})}}function o(e,t){var n=!1;return!!f.selector&&(me(e,function(e){if(!("collapsed"in e&&e.collapsed!==v))return Q.is(t,e.selector)&&!p(t)?(i(t,e),n=!0,!1):void 0}),n)}function a(){function t(t,n){var i=new e(n);for(r=i.prev2();r;r=i.prev2()){if(3==r.nodeType&&r.data.length>0)return r;if(r.childNodes.length>1||r==t||"BR"==r.tagName)return r}}var n=l.selection.getRng(),i=n.startContainer,o=n.endContainer;if(i!=o&&0===n.endOffset){var a=t(i,o),s=3==a.nodeType?a.data.length:a.childNodes.length;n.setEnd(a,s)}return n}function c(e,r,a){var s=[],l,c,h=!0;l=f.inline||f.block,c=Q.create(l),i(c),ee.walk(e,function(e){function r(e){var g,v,y,b;if(b=h,g=e.nodeName.toLowerCase(),v=e.parentNode.nodeName.toLowerCase(),1===e.nodeType&&de(e)&&(b=h,h="true"===de(e),y=!0),D(g,"br"))return m=0,void(f.block&&Q.remove(e));if(f.wrapper&&_(e,t,n))return void(m=0);if(h&&!y&&f.block&&!f.wrapper&&u(g)&&te(v,l))return e=Q.rename(e,l),i(e),s.push(e),void(m=0);if(f.selector){var C=o(d,e);if(!f.inline||C)return void(m=0)}!h||y||!te(l,g)||!te(v,l)||!a&&3===e.nodeType&&1===e.nodeValue.length&&65279===e.nodeValue.charCodeAt(0)||p(e)||f.inline&&ne(e)?(m=0,me(ge(e.childNodes),r),y&&(h=b),m=0):(m||(m=Q.clone(c,se),e.parentNode.insertBefore(m,e),s.push(m)),m.appendChild(e))}var m;me(e,r)}),f.links===!0&&me(s,function(e){function t(e){"A"===e.nodeName&&i(e,f),me(ge(e.childNodes),t)}t(e)}),me(s,function(e){function r(e){var t=0;return me(e.childNodes,function(e){z(e)||he(e)||t++}),t}function o(e){var t=!1;return me(e.childNodes,function(e){if(M(e))return t=e,!1}),t}function a(e,t){do{if(1!==r(e))break;if(e=o(e),!e)break;if(t(e))return e}while(e);return null}function l(e){var t,n;return t=o(e),t&&!he(t)&&B(t,f)&&(n=Q.clone(t,se),i(n),Q.replace(n,e,le),Q.remove(t,1)),n||e}var u;if(u=r(e),(s.length>1||!ne(e))&&0===u)return void Q.remove(e,1);if(f.inline||f.wrapper){if(f.exact||1!==u||(e=l(e)),me(d,function(t){me(Q.select(t.inline,e),function(e){he(e)||$(t,n,e,t.exact?e:null)})}),_(e.parentNode,t,n)&&$(f,n,e)&&(e=0),f.merge_with_parents&&Q.getParent(e.parentNode,function(r){if(_(r,t,n))return $(f,n,e)&&(e=0),le}),!ne(e)&&!H(e,"fontSize")){var c=a(e,P("fontSize"));c&&w("fontsize",{value:H(c,"fontSize")},e)}e&&f.merge_siblings!==!1&&(e=Y(j(e),e),e=Y(e,j(e,le)))}})}var d=g(t),f=d[0],h,m,v=!r&&Z.isCollapsed();if("false"!==de(Z.getNode())){if(f){if(r)r.nodeType?o(d,r)||(m=Q.createRng(),m.setStartBefore(r),m.setEndAfter(r),c(W(m,d),null,!0)):c(r,null,!0);else if(v&&f.inline&&!Q.select("td[data-mce-selected],th[data-mce-selected]").length)K("apply",t,n);else{var y=l.selection.getNode();re||!d[0].defaultBlock||Q.getParent(y,Q.isBlock)||w(d[0].defaultBlock),l.selection.setRng(a()),h=Z.getBookmark(),c(W(Z.getRng(le),d),h),f.styles&&((f.styles.color||f.styles.textDecoration)&&(ve(y,x,"childNodes"),x(y)),f.styles.backgroundColor&&L(y,P("fontSize"),O("backgroundColor",F(f.styles.backgroundColor,n)))),Z.moveToBookmark(h),G(Z.getRng(le)),l.nodeChanged()}s.postProcess(t,l)}}else{r=Z.getNode();for(var b=0,C=d.length;b<C;b++)if(d[b].ceFalseOverride&&Q.is(r,d[b].selector))return void i(r,d[b])}}function E(e,t,n,r){function i(e){var n,r,o,a,s;if(1===e.nodeType&&de(e)&&(a=y,y="true"===de(e),s=!0),n=ge(e.childNodes),y&&!s)for(r=0,o=p.length;r<o&&!$(p[r],t,e,e);r++);if(h.deep&&n.length){for(r=0,o=n.length;r<o;r++)i(n[r]);s&&(y=a)}}function o(n){var i;return me(f(n.parentNode).reverse(),function(n){var o;i||"_start"==n.id||"_end"==n.id||(o=_(n,e,t,r),o&&o.split!==!1&&(i=n))}),i}function a(e,n,r,i){var o,a,s,l,u,c;if(e){for(c=e.parentNode,o=n.parentNode;o&&o!=c;o=o.parentNode){for(a=Q.clone(o,se),u=0;u<p.length;u++)if($(p[u],t,a,a)){a=0;break}a&&(s&&a.appendChild(s),l||(l=a),s=a)}!i||h.mixed&&ne(e)||(n=Q.split(e,n)),s&&(r.parentNode.insertBefore(s,r),l.appendChild(r))}return n}function s(e){return a(o(e),e,e,!0)}function u(e){var t=Q.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"];return he(n)&&(n=n[e?"firstChild":"lastChild"]),3==n.nodeType&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),Q.remove(t,!0),n}function d(e){var t,n,r=e.commonAncestorContainer;if(e=W(e,p,le),h.split){if(t=X(e,le),n=X(e),t!=n){if(/^(TR|TH|TD)$/.test(t.nodeName)&&t.firstChild&&(t="TR"==t.nodeName?t.firstChild.firstChild||t:t.firstChild||t),r&&/^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName)&&c(n)&&n.firstChild&&(n=n.firstChild||n),Q.isChildOf(t,n)&&!ne(n)&&!c(t)&&!c(n))return t=U(t,"span",{id:"_start","data-mce-type":"bookmark"}),s(t),void(t=u(le));t=U(t,"span",{id:"_start","data-mce-type":"bookmark"}),n=U(n,"span",{id:"_end","data-mce-type":"bookmark"}),s(t),s(n),t=u(le),n=u()}else t=n=s(t);e.startContainer=t.parentNode?t.parentNode:t,e.startOffset=ie(t),e.endContainer=n.parentNode?n.parentNode:n,e.endOffset=ie(n)+1}ee.walk(e,function(e){me(e,function(e){i(e),1===e.nodeType&&"underline"===l.dom.getStyle(e,"text-decoration")&&e.parentNode&&"underline"===C(e.parentNode)&&$({deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,e)})})}var p=g(e),h=p[0],m,v,y=!0;if(n)return void(n.nodeType?(v=Q.createRng(),v.setStartBefore(n),v.setEndAfter(n),d(v)):d(n));if("false"!==de(Z.getNode()))Z.isCollapsed()&&h.inline&&!Q.select("td[data-mce-selected],th[data-mce-selected]").length?K("remove",e,t,r):(m=Z.getBookmark(),d(Z.getRng(le)),Z.moveToBookmark(m),h.inline&&S(e,t,Z.getStart())&&G(Z.getRng(!0)),l.nodeChanged());else{n=Z.getNode();for(var b=0,x=p.length;b<x&&(!p[b].ceFalseOverride||!$(p[b],t,n,n));b++);}}function N(e,t,n){var r=g(e);!S(e,t,n)||"toggle"in r[0]&&!r[0].toggle?w(e,t,n):E(e,t,n)}function _(e,t,n,r){function i(e,t,i){var o,a,s=t[i],l;if(t.onmatch)return t.onmatch(e,t,i);if(s)if(s.length===ce){for(o in s)if(s.hasOwnProperty(o)){if(a="attributes"===i?Q.getAttrib(e,o):H(e,o),r&&!a&&!t.exact)return;if((!r||t.exact)&&!D(a,I(F(s[o],n),o)))return}}else for(l=0;l<s.length;l++)if("attributes"===i?Q.getAttrib(e,s[l]):H(e,s[l]))return t;return t}var o=g(t),a,s,l;if(o&&e)for(s=0;s<o.length;s++)if(a=o[s],B(e,a)&&i(e,a,"attributes")&&i(e,a,"styles")){if(l=a.classes)for(s=0;s<l.length;s++)if(!Q.hasClass(e,l[s]))return;return a}}function S(e,t,n){function r(n){var r=Q.getRoot();return n!==r&&(n=Q.getParent(n,function(n){return!!b(n,e)||(n.parentNode===r||!!_(n,e,t,!0))}),_(n,e,t))}var i;return n?r(n):(n=Z.getNode(),r(n)?le:(i=Z.getStart(),i!=n&&r(i)?le:se))}function k(e,t){var n,r=[],i={};return n=Z.getStart(),Q.getParent(n,function(n){var o,a;for(o=0;o<e.length;o++)a=e[o],!i[a]&&_(n,a,t)&&(i[a]=!0,r.push(a))},Q.getRoot()),r}function T(e){var t=g(e),n,r,i,o,a;if(t)for(n=Z.getStart(),r=f(n),o=t.length-1;o>=0;o--){if(a=t[o].selector,!a||t[o].defaultBlock)return le;for(i=r.length-1;i>=0;i--)if(Q.is(r[i],a))return le}return se}function R(e,t,n){var r;return ue||(ue={},r={},l.on("NodeChange",function(e){var t=f(e.element),n={};t=o.grep(t,function(e){return 1==e.nodeType&&!e.getAttribute("data-mce-bogus")}),me(ue,function(e,i){me(t,function(o){return _(o,i,{},e.similar)?(r[i]||(me(e,function(e){e(!0,{node:o,format:i,parents:t})}),r[i]=e),n[i]=e,!1):!b(o,i)&&void 0})}),me(r,function(i,o){n[o]||(delete r[o],me(i,function(n){n(!1,{node:e.element,format:o,parents:t})}))})})),me(e.split(","),function(e){ue[e]||(ue[e]=[],ue[e].similar=n),ue[e].push(t)}),this}function A(e){return a.getCssText(l,e)}function B(e,t){return D(e,t.inline)?le:D(e,t.block)?le:t.selector?1==e.nodeType&&Q.is(e,t.selector):void 0}function D(e,t){return e=e||"",t=t||"",e=""+(e.nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()==t.toLowerCase()}function L(e,t,n){me(e.childNodes,function(e){M(e)&&(t(e)&&n(e),e.hasChildNodes()&&L(e,t,n))})}function M(e){return 1==e.nodeType&&!he(e)&&!z(e)&&!p(e)}function P(e){return i.curry(function(e,t){return!(!t||!H(t,e))},e)}function O(e,t){return i.curry(function(e,t,n){Q.setStyle(n,e,t)},e,t)}function H(e,t){return I(Q.getStyle(e,t),t)}function I(e,t){return"color"!=t&&"backgroundColor"!=t||(e=Q.toHex(e)),"fontWeight"==t&&700==e&&(e="bold"),"fontFamily"==t&&(e=e.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+e}function F(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,function(e,n){return t[n]||e})),e}function z(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)}function U(e,t,n){var r=Q.create(t,n);return e.parentNode.insertBefore(r,e),r.appendChild(e),r}function W(t,n,r){function i(e){function t(e){return"BR"==e.nodeName&&e.getAttribute("data-mce-bogus")&&!e.nextSibling}var r,i,o,a,s;if(r=i=e?g:y,a=e?"previousSibling":"nextSibling",s=Q.getRoot(),3==r.nodeType&&!z(r)&&(e?v>0:b<r.nodeValue.length))return r;for(;;){if(!n[0].block_expand&&ne(i))return i;for(o=i[a];o;o=o[a])if(!he(o)&&!z(o)&&!t(o))return i;if(i==s||i.parentNode==s){r=i;break}i=i.parentNode}return r}function o(e,t){for(t===ce&&(t=3===e.nodeType?e.length:e.childNodes.length);e&&e.hasChildNodes();)e=e.childNodes[t],e&&(t=3===e.nodeType?e.length:e.childNodes.length);return{node:e,offset:t}}function a(e){for(var t=e;t;){if(1===t.nodeType&&de(t))return"false"===de(t)?t:e;t=t.parentNode}return e}function s(t,n,i){function o(e,t){var n,o,a=e.nodeValue;return"undefined"==typeof t&&(t=i?a.length:0),i?(n=a.lastIndexOf(" ",t),o=a.lastIndexOf("\xa0",t),n=n>o?n:o,n===-1||r||n++):(n=a.indexOf(" ",t),o=a.indexOf("\xa0",t),n=n!==-1&&(o===-1||n<o)?n:o),n}var a,s,u,c;if(3===t.nodeType){if(u=o(t,n),u!==-1)return{container:t,offset:u};c=t}for(a=new e(t,Q.getParent(t,ne)||l.getBody());s=a[i?"prev":"next"]();)if(3===s.nodeType){if(c=s,u=o(s),u!==-1)return{container:s,offset:u}}else if(ne(s))break;if(c)return n=i?0:c.length,{container:c,offset:n}}function c(e,r){var i,o,a,s;for(3==e.nodeType&&0===e.nodeValue.length&&e[r]&&(e=e[r]),i=f(e),o=0;o<i.length;o++)for(a=0;a<n.length;a++)if(s=n[a],!("collapsed"in s&&s.collapsed!==t.collapsed)&&Q.is(i[o],s.selector))return i[o];return e}function d(e,t){var r,i=Q.getRoot();if(n[0].wrapper||(r=Q.getParent(e,n[0].block,i)),r||(r=Q.getParent(3==e.nodeType?e.parentNode:e,function(e){return e!=i&&u(e)})),r&&n[0].wrapper&&(r=f(r,"ul,ol").reverse()[0]||r),!r)for(r=e;r[t]&&!ne(r[t])&&(r=r[t],!D(r,"br")););return r||e}var p,h,m,g=t.startContainer,v=t.startOffset,y=t.endContainer,b=t.endOffset;if(1==g.nodeType&&g.hasChildNodes()&&(p=g.childNodes.length-1,g=g.childNodes[v>p?p:v],3==g.nodeType&&(v=0)),1==y.nodeType&&y.hasChildNodes()&&(p=y.childNodes.length-1,y=y.childNodes[b>p?p:b-1],3==y.nodeType&&(b=y.nodeValue.length)),g=a(g),y=a(y),(he(g.parentNode)||he(g))&&(g=he(g)?g:g.parentNode,g=g.nextSibling||g,3==g.nodeType&&(v=0)),(he(y.parentNode)||he(y))&&(y=he(y)?y:y.parentNode,y=y.previousSibling||y,3==y.nodeType&&(b=y.length)),n[0].inline&&(t.collapsed&&(m=s(g,v,!0),m&&(g=m.container,v=m.offset),m=s(y,b),m&&(y=m.container,b=m.offset)),h=o(y,b),h.node)){for(;h.node&&0===h.offset&&h.node.previousSibling;)h=o(h.node.previousSibling);h.node&&h.offset>0&&3===h.node.nodeType&&" "===h.node.nodeValue.charAt(h.offset-1)&&h.offset>1&&(y=h.node,y.splitText(h.offset-1))}return(n[0].inline||n[0].block_expand)&&(n[0].inline&&3==g.nodeType&&0!==v||(g=i(!0)),n[0].inline&&3==y.nodeType&&b!==y.nodeValue.length||(y=i())),n[0].selector&&n[0].expand!==se&&!n[0].inline&&(g=c(g,"previousSibling"),y=c(y,"nextSibling")),(n[0].block||n[0].selector)&&(g=d(g,"previousSibling"),y=d(y,"nextSibling"),n[0].block&&(ne(g)||(g=i(!0)),ne(y)||(y=i()))),1==g.nodeType&&(v=ie(g),g=g.parentNode),1==y.nodeType&&(b=ie(y)+1,y=y.parentNode),{startContainer:g,startOffset:v,endContainer:y,endOffset:b}}function V(e,t){return t.links&&"A"==e.tagName}function $(e,t,n,r){var i,o,a;if(!B(n,e)&&!V(n,e))return se;if("all"!=e.remove)for(me(e.styles,function(i,o){i=I(F(i,t),o),"number"==typeof o&&(o=i,r=0),(e.remove_similar||!r||D(H(r,o),i))&&Q.setStyle(n,o,""),a=1}),a&&""===Q.getAttrib(n,"style")&&(n.removeAttribute("style"),n.removeAttribute("data-mce-style")),me(e.attributes,function(e,i){var o;if(e=F(e,t),"number"==typeof i&&(i=e,r=0),!r||D(Q.getAttrib(r,i),e)){if("class"==i&&(e=Q.getAttrib(n,i),e&&(o="",me(e.split(/\s+/),function(e){/mce\-\w+/.test(e)&&(o+=(o?" ":"")+e)}),o)))return void Q.setAttrib(n,i,o);"class"==i&&n.removeAttribute("className"),ae.test(i)&&n.removeAttribute("data-mce-"+i),n.removeAttribute(i)}}),me(e.classes,function(e){e=F(e,t),r&&!Q.hasClass(r,e)||Q.removeClass(n,e)}),o=Q.getAttribs(n),i=0;i<o.length;i++){var s=o[i].nodeName;if(0!==s.indexOf("_")&&0!==s.indexOf("data-"))return se}return"none"!=e.remove?(q(n,e),le):void 0}function q(e,t){function n(e,t,n){return e=j(e,t,n),!e||"BR"==e.nodeName||ne(e)}var r=e.parentNode,i;t.block&&(re?r==Q.getRoot()&&(t.list_block&&D(e,t.list_block)||me(ge(e.childNodes),function(e){te(re,e.nodeName.toLowerCase())?i?i.appendChild(e):(i=U(e,re),Q.setAttribs(i,l.settings.forced_root_block_attrs)):i=0})):ne(e)&&!ne(r)&&(n(e,se)||n(e.firstChild,le,1)||e.insertBefore(Q.create("br"),e.firstChild),n(e,le)||n(e.lastChild,se,1)||e.appendChild(Q.create("br")))),t.selector&&t.inline&&!D(t.inline,e)||Q.remove(e,1)}function j(e,t,n){if(e)for(t=t?"nextSibling":"previousSibling",e=n?e:e[t];e;e=e[t])if(1==e.nodeType||!z(e))return e}function Y(e,t){function n(e,t){for(i=e;i;i=i[t]){if(3==i.nodeType&&0!==i.nodeValue.length)return e;if(1==i.nodeType&&!he(i))return i}return e}var i,o,a=new r(Q);if(e&&t&&(e=n(e,"previousSibling"),t=n(t,"nextSibling"),a.compare(e,t))){for(i=e.nextSibling;i&&i!=t;)o=i,i=i.nextSibling,e.appendChild(o);return Q.remove(t),me(ge(t.childNodes),function(t){e.appendChild(t)}),e}return t}function X(t,n){var r,i,o;return r=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"],1==r.nodeType&&(o=r.childNodes.length-1,!n&&i&&i--,r=r.childNodes[i>o?o:i]),3===r.nodeType&&n&&i>=r.nodeValue.length&&(r=new e(r,l.getBody()).next()||r),3!==r.nodeType||n||0!==i||(r=new e(r,l.getBody()).prev()||r),r}function K(t,n,r,i){function o(e){var t=Q.create("span",{id:m,"data-mce-bogus":!0,style:v?"color:red":""});return e&&t.appendChild(l.getDoc().createTextNode(oe)),t}function a(e,t){for(;e;){if(3===e.nodeType&&e.nodeValue!==oe||e.childNodes.length>1)return!1;t&&1===e.nodeType&&t.push(e),e=e.firstChild}return!0}function s(e){for(;e;){if(e.id===m)return e;e=e.parentNode}}function c(t){var n;if(t)for(n=new e(t,t),t=n.current();t;t=n.next())if(3===t.nodeType)return t}function d(e,t){var n,r;if(e)r=Z.getRng(!0),a(e)?(t!==!1&&(r.setStartBefore(e),r.setEndBefore(e)),Q.remove(e)):(n=c(e),n.nodeValue.charAt(0)===oe&&(n.deleteData(0,1),r.startContainer==n&&r.startOffset>0&&r.setStart(n,r.startOffset-1),r.endContainer==n&&r.endOffset>0&&r.setEnd(n,r.endOffset-1)),Q.remove(e,1)),Z.setRng(r);else if(e=s(Z.getStart()),!e)for(;e=Q.get(m);)d(e,!1)}function f(){var e,t,i,a,l,u,d;e=Z.getRng(!0),a=e.startOffset,u=e.startContainer,d=u.nodeValue,t=s(Z.getStart()),t&&(i=c(t));var f=/[^\s\u00a0\u00ad\u200b\ufeff]/;d&&a>0&&a<d.length&&f.test(d.charAt(a))&&f.test(d.charAt(a-1))?(l=Z.getBookmark(),e.collapse(!0),e=W(e,g(n)),e=ee.split(e),w(n,r,e),Z.moveToBookmark(l)):(t&&i.nodeValue===oe?w(n,r,t):(t=o(!0),i=t.firstChild,e.insertNode(t),a=1,w(n,r,t)),Z.setCursorLocation(i,a))}function p(){var e=Z.getRng(!0),t,a,s,l,c,d,f=[],p,h;for(t=e.startContainer,a=e.startOffset,c=t,3==t.nodeType&&(a!=t.nodeValue.length&&(l=!0),c=c.parentNode);c;){if(_(c,n,r,i)){d=c;break}c.nextSibling&&(l=!0),f.push(c),c=c.parentNode}if(d)if(l)s=Z.getBookmark(),e.collapse(!0),e=W(e,g(n),!0),e=ee.split(e),E(n,r,e),Z.moveToBookmark(s);else{for(h=o(),c=h,p=f.length-1;p>=0;p--)c.appendChild(Q.clone(f[p],!1)),c=c.firstChild;c.appendChild(Q.doc.createTextNode(oe)),c=c.firstChild;var m=Q.getParent(d,u);m&&Q.isEmpty(m)?d.parentNode.replaceChild(h,d):Q.insertAfter(h,d),Z.setCursorLocation(c,1),Q.isEmpty(d)&&Q.remove(d)}}function h(){var e;e=s(Z.getStart()),e&&!Q.isEmpty(e)&&ve(e,function(e){1!=e.nodeType||e.id===m||Q.isEmpty(e)||Q.setAttrib(e,"data-mce-bogus",null)},"childNodes")}var m="_mce_caret",v=l.settings.caret_debug;l._hasCaretEvents||(pe=function(){var e=[],t;if(a(s(Z.getStart()),e))for(t=e.length;t--;)Q.setAttrib(e[t],"data-mce-bogus","1")},fe=function(e){var t=e.keyCode;d(),8==t&&Z.isCollapsed()&&Z.getStart().innerHTML==oe&&d(s(Z.getStart())),37!=t&&39!=t||d(s(Z.getStart())),h()},l.on("SetContent",function(e){e.selection&&h()}),l._hasCaretEvents=!0),"apply"==t?f():p()}function G(t){var n=t.startContainer,r=t.startOffset,i,o,a,s,l;if((t.startContainer!=t.endContainer||!d(t.startContainer.childNodes[t.startOffset]))&&(3==n.nodeType&&r>=n.nodeValue.length&&(r=ie(n),n=n.parentNode,i=!0),1==n.nodeType))for(s=n.childNodes,n=s[Math.min(r,s.length-1)],o=new e(n,Q.getParent(n,Q.isBlock)),(r>s.length-1||i)&&o.next(),a=o.current();a;a=o.next())if(3==a.nodeType&&!z(a))return l=Q.create("a",{"data-mce-bogus":"all"},oe),a.parentNode.insertBefore(l,a),t.setStart(a,0),Z.setRng(t),void Q.remove(l)}var J={},Q=l.dom,Z=l.selection,ee=new t(Q),te=l.schema.isValidChild,ne=Q.isBlock,re=l.settings.forced_root_block,ie=Q.nodeIndex,oe="\ufeff",ae=/^(src|href|style)$/,se=!1,le=!0,ue,ce,de=Q.getContentEditable,fe,pe,he=n.isBookmarkNode,me=o.each,ge=o.grep,ve=o.walk,ye=o.extend;ye(this,{get:g,register:v,unregister:y,apply:w,remove:E,toggle:N,match:S,matchAll:k,matchNode:_,canApply:T,formatChanged:R,getCssText:A}),h(),m(),l.on("BeforeGetContent",function(e){pe&&"raw"!=e.format&&pe()}),l.on("mouseup keydown",function(e){fe&&fe(e)})}}),r(Q,[],function(){var e=0,t=1,n=2,r=function(r,i){var o=r.length+i.length+2,a=new Array(o),s=new Array(o),l=function(e,t,n){return{start:e,end:t,diag:n}},u=function(o,a,s,l,c){var f=d(o,a,s,l);if(null===f||f.start===a&&f.diag===a-l||f.end===o&&f.diag===o-s)for(var p=o,h=s;p<a||h<l;)p<a&&h<l&&r[p]===i[h]?(c.push([e,r[p]]),++p,++h):a-o>l-s?(c.push([n,r[p]]),++p):(c.push([t,i[h]]),++h);else{u(o,f.start,s,f.start-f.diag,c);for(var m=f.start;m<f.end;++m)c.push([e,r[m]]);u(f.end,a,f.end-f.diag,l,c)}},c=function(e,t,n,o){for(var a=e;a-t<o&&a<n&&r[a]===i[a-t];)++a;return l(e,a,t)},d=function(e,t,n,o){var l=t-e,u=o-n;if(0===l||0===u)return null;var d=l-u,f=u+l,p=(f%2===0?f:f+1)/2;a[1+p]=e,s[1+p]=t+1;for(var h=0;h<=p;++h){for(var m=-h;m<=h;m+=2){var g=m+p;m===-h||m!=h&&a[g-1]<a[g+1]?a[g]=a[g+1]:a[g]=a[g-1]+1;for(var v=a[g],y=v-e+n-m;v<t&&y<o&&r[v]===i[y];)a[g]=++v,++y;if(d%2!=0&&d-h<=m&&m<=d+h&&s[g-d]<=a[g])return c(s[g-d],m+e-n,t,o)}for(m=d-h;m<=d+h;m+=2){for(g=m+p-d,m===d-h||m!=d+h&&s[g+1]<=s[g-1]?s[g]=s[g+1]-1:s[g]=s[g-1],v=s[g]-1,y=v-e+n-m;v>=e&&y>=n&&r[v]===i[y];)s[g]=v--,y--;if(d%2===0&&-h<=m&&m<=h&&s[g]<=a[g+d])return c(s[g],m+e-n,t,o)}}},f=[];return u(0,r.length,0,i.length,f),f};return{KEEP:e,DELETE:n,INSERT:t,diff:r}}),r(Z,[h,C,Q],function(e,t,n){var r=function(e){return 1===e.nodeType?e.outerHTML:3===e.nodeType?t.encodeRaw(e.data,!1):8===e.nodeType?"<!--"+e.data+"-->":""},i=function(e){var t,n,r;for(r=document.createElement("div"),t=document.createDocumentFragment(),e&&(r.innerHTML=e);n=r.firstChild;)t.appendChild(n);return t},o=function(e,t,n){var r=i(t);if(e.hasChildNodes()&&n<e.childNodes.length){var o=e.childNodes[n];o.parentNode.insertBefore(r,o)}else e.appendChild(r)},a=function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var n=e.childNodes[t];n.parentNode.removeChild(n)}},s=function(t,r){var i=0;e.each(t,function(e){e[0]===n.KEEP?i++:e[0]===n.INSERT?(o(r,e[1],i),i++):e[0]===n.DELETE&&a(r,i)})},l=function(t){return e.map(t.childNodes,r)},u=function(t,i){var o=e.map(i.childNodes,r);return s(n.diff(o,t),i),i};return{read:l,write:u}}),r(ee,[h,Z],function(e,t){var n=function(e){return e.indexOf("</iframe>")!==-1},r=function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}},i=function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}},o=function(o){var a,s,l;return a=t.read(o.getBody()),l=e.map(a,function(e){return o.serializer.trimContent(e)}),s=l.join(""),n(s)?r(l):i(s)},a=function(e,n,r){"fragmented"===n.type?t.write(n.fragments,e.getBody()):e.setContent(n.content,{format:"raw"}),e.selection.moveToBookmark(r?n.beforeBookmark:n.bookmark)},s=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},l=function(e,t){return s(e)===s(t)};return{createFragmentedLevel:r,createCompleteLevel:i,createFromEditor:o,applyToEditor:a,isEq:l}}),r(te,[I,m,ee],function(e,t,n){return function(e){function r(t){e.setDirty(t)}function i(e){a.typing=!1,a.add({},e)}function o(){a.typing&&(a.typing=!1,a.add())}var a=this,s=0,l=[],u,c,d=0;return e.on("init",function(){a.add()}),e.on("BeforeExecCommand",function(e){var t=e.command;"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&(o(),a.beforeChange())}),e.on("ExecCommand",function(e){var t=e.command;"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&i(e)}),e.on("ObjectResizeStart Cut",function(){a.beforeChange()}),e.on("SaveContent ObjectResized blur",i),e.on("DragEnd",i),e.on("KeyUp",function(t){var o=t.keyCode;t.isDefaultPrevented()||((o>=33&&o<=36||o>=37&&o<=40||45===o||t.ctrlKey)&&(i(),e.nodeChanged()),46!==o&&8!==o||e.nodeChanged(),c&&a.typing&&(e.isDirty()||(r(l[0]&&!n.isEq(n.createFromEditor(e),l[0])),e.isDirty()&&e.fire("change",{level:l[0],lastLevel:null})),e.fire("TypingUndo"),c=!1,e.nodeChanged()))}),e.on("KeyDown",function(e){var t=e.keyCode;if(!e.isDefaultPrevented()){if(t>=33&&t<=36||t>=37&&t<=40||45===t)return void(a.typing&&i(e));var n=e.ctrlKey&&!e.altKey||e.metaKey;!(t<16||t>20)||224===t||91===t||a.typing||n||(a.beforeChange(),a.typing=!0,a.add({},e),c=!0)}}),e.on("MouseDown",function(e){a.typing&&i(e)}),e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo"),e.on("AddUndo Undo Redo ClearUndos",function(t){t.isDefaultPrevented()||e.nodeChanged()}),a={data:l,typing:!1,beforeChange:function(){d||(u=e.selection.getBookmark(2,!0))},add:function(i,o){var a,c=e.settings,f,p;if(p=n.createFromEditor(e),i=i||{},i=t.extend(i,p),d||e.removed)return null;if(f=l[s],e.fire("BeforeAddUndo",{level:i,lastLevel:f,originalEvent:o}).isDefaultPrevented())return null;if(f&&n.isEq(f,i))return null;if(l[s]&&(l[s].beforeBookmark=u),c.custom_undo_redo_levels&&l.length>c.custom_undo_redo_levels){for(a=0;a<l.length-1;a++)l[a]=l[a+1];l.length--,s=l.length}i.bookmark=e.selection.getBookmark(2,!0),s<l.length-1&&(l.length=s+1),l.push(i),s=l.length-1;var h={level:i,lastLevel:f,originalEvent:o};return e.fire("AddUndo",h),s>0&&(r(!0),e.fire("change",h)),i},undo:function(){var t;return a.typing&&(a.add(),a.typing=!1),s>0&&(t=l[--s],n.applyToEditor(e,t,!0),r(!0),e.fire("undo",{level:t})),t},redo:function(){var t;return s<l.length-1&&(t=l[++s],n.applyToEditor(e,t,!1),r(!0),e.fire("redo",{level:t})),t},clear:function(){l=[],s=0,a.typing=!1,a.data=l,e.fire("ClearUndos")},hasUndo:function(){return s>0||a.typing&&l[0]&&!n.isEq(n.createFromEditor(e),l[0])},hasRedo:function(){return s<l.length-1&&!a.typing},transact:function(e){o(),a.beforeChange();try{d++,e()}finally{d--}return a.add()},extra:function(t,r){var i,o;a.transact(t)&&(o=l[s].bookmark,i=l[s-1],n.applyToEditor(e,i,!0),a.transact(r)&&(l[s-1].beforeBookmark=o))}}}}),r(ne,[y,T,k,d],function(e,t,n,r){var i=r.ie&&r.ie<11;return function(o){function a(a){function h(e){return e&&s.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&!/^(fixed|absolute)/i.test(e.style.position)&&"true"!==s.getContentEditable(e)}function m(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}function g(e){var t;s.isBlock(e)&&(t=l.getRng(),e.appendChild(s.create("span",null,"\xa0")),l.select(e),e.lastChild.outerHTML="",l.setRng(t))}function v(e){var t=e,n=[],r;if(t){for(;t=t.firstChild;){if(s.isBlock(t))return;1!=t.nodeType||f[t.nodeName.toLowerCase()]||n.push(t)}for(r=n.length;r--;)t=n[r],!t.hasChildNodes()||t.firstChild==t.lastChild&&""===t.firstChild.nodeValue?s.remove(t):"A"==t.nodeName&&" "===(t.innerText||t.textContent)&&s.remove(t)}}function y(t){function n(e){for(;e;){if(1==e.nodeType||3==e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e;e=e.nextSibling}}var i,o,a,u=t,c;if(t){if(r.ie&&r.ie<9&&P&&P.firstChild&&P.firstChild==P.lastChild&&"BR"==P.firstChild.tagName&&s.remove(P.firstChild),/^(LI|DT|DD)$/.test(t.nodeName)){var d=n(t.firstChild);d&&/^(UL|OL|DL)$/.test(d.nodeName)&&t.insertBefore(s.doc.createTextNode("\xa0"),t.firstChild)}if(a=s.createRng(),r.ie||t.normalize(),t.hasChildNodes()){for(i=new e(t,t);o=i.current();){if(3==o.nodeType){a.setStart(o,0),a.setEnd(o,0);break}if(p[o.nodeName.toLowerCase()]){a.setStartBefore(o),a.setEndBefore(o);break}u=o,o=i.next()}o||(a.setStart(u,0),a.setEnd(u,0))}else"BR"==t.nodeName?t.nextSibling&&s.isBlock(t.nextSibling)?((!O||O<9)&&(c=s.create("br"),t.parentNode.insertBefore(c,t)),a.setStartBefore(t),a.setEndBefore(t)):(a.setStartAfter(t),a.setEndAfter(t)):(a.setStart(t,0),a.setEnd(t,0));l.setRng(a),s.remove(c),l.scrollIntoView(t)}}function b(e){var t=u.forced_root_block;t&&t.toLowerCase()===e.tagName.toLowerCase()&&s.setAttribs(e,u.forced_root_block_attrs)}function C(e){e.innerHTML=i?"":'<br data-mce-bogus="1">'}function x(e){var t=L,n,r,o,a=d.getTextInlineElements();if(e||"TABLE"==U?(n=s.create(e||V),b(n)):n=P.cloneNode(!1),o=n,u.keep_styles!==!1)do if(a[t.nodeName]){if("_mce_caret"==t.id)continue;r=t.cloneNode(!1),s.setAttrib(r,"id",""),n.hasChildNodes()?(r.appendChild(n.firstChild),n.appendChild(r)):(o=r,n.appendChild(r))}while((t=t.parentNode)&&t!=D);return i||(o.innerHTML='<br data-mce-bogus="1">'),n}function w(t){var n,r,i;if(3==L.nodeType&&(t?M>0:M<L.nodeValue.length))return!1;if(L.parentNode==P&&$&&!t)return!0;if(t&&1==L.nodeType&&L==P.firstChild)return!0;if("TABLE"===L.nodeName||L.previousSibling&&"TABLE"==L.previousSibling.nodeName)return $&&!t||!$&&t;for(n=new e(L,P),3==L.nodeType&&(t&&0===M?n.prev():t||M!=L.nodeValue.length||n.next());r=n.current();){if(1===r.nodeType){if(!r.getAttribute("data-mce-bogus")&&(i=r.nodeName.toLowerCase(),f[i]&&"br"!==i))return!1}else if(3===r.nodeType&&!/^[ \t\r\n]*$/.test(r.nodeValue))return!1;t?n.prev():n.next()}return!0}function E(e,t){var n,r,i,a,l,u,c=V||"P";if(r=s.getParent(e,s.isBlock),!r||!h(r)){if(r=r||D,u=r==o.getBody()||m(r)?r.nodeName.toLowerCase():r.parentNode.nodeName.toLowerCase(),!r.hasChildNodes())return n=s.create(c),b(n),r.appendChild(n),A.setStart(n,0),A.setEnd(n,0),n;for(a=e;a.parentNode!=r;)a=a.parentNode;for(;a&&!s.isBlock(a);)i=a,a=a.previousSibling;if(i&&d.isValidChild(u,c.toLowerCase())){for(n=s.create(c),b(n),i.parentNode.insertBefore(n,i),a=i;a&&!s.isBlock(a);)l=a.nextSibling,n.appendChild(a),a=l;A.setStart(e,t),A.setEnd(e,t)}}return e}function N(){function e(e){for(var t=z[e?"firstChild":"lastChild"];t&&1!=t.nodeType;)t=t[e?"nextSibling":"previousSibling"];return t===P}function t(){var e=z.parentNode;return/^(LI|DT|DD)$/.test(e.nodeName)?e:z}if(z!=o.getBody()){var n=z.parentNode.nodeName;/^(OL|UL|LI)$/.test(n)&&(V="LI"),I=V?x(V):s.create("BR"),e(!0)&&e()?"LI"==n?s.insertAfter(I,t()):s.replace(I,z):e(!0)?"LI"==n?(s.insertAfter(I,t()),I.appendChild(s.doc.createTextNode(" ")),I.appendChild(z)):z.parentNode.insertBefore(I,z):e()?(s.insertAfter(I,t()),g(I)):(z=t(),B=A.cloneRange(),B.setStartAfter(P),B.setEndAfter(z),F=B.extractContents(),"LI"==V&&"LI"==F.firstChild.nodeName?(I=F.firstChild,s.insertAfter(F,z)):(s.insertAfter(F,z),s.insertAfter(I,z))),s.remove(P),y(I),c.add()}}function _(){o.execCommand("InsertLineBreak",!1,a)}function S(e){do 3===e.nodeType&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;while(e)}function k(e){var t=s.getRoot(),n,r;for(n=e;n!==t&&"false"!==s.getContentEditable(n);)"true"===s.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==t?r:t}function T(e){var t;i||(e.normalize(),t=e.lastChild,t&&!/^(left|right)$/gi.test(s.getStyle(t,"float",!0))||s.add(e,"br"))}function R(){I=/^(H[1-6]|PRE|FIGURE)$/.test(U)&&"HGROUP"!=W?x(V):x(),u.end_container_on_empty_block&&h(z)&&s.isEmpty(P)?I=s.split(z,P):s.insertAfter(I,P),y(I)}var A,B,D,L,M,P,O,H,I,F,z,U,W,V,$;if(A=l.getRng(!0),!a.isDefaultPrevented()){if(!A.collapsed)return void o.execCommand("Delete");if(new t(s).normalize(A),L=A.startContainer,M=A.startOffset,V=(u.force_p_newlines?"p":"")||u.forced_root_block,V=V?V.toUpperCase():"",O=s.doc.documentMode,H=a.shiftKey,1==L.nodeType&&L.hasChildNodes()&&($=M>L.childNodes.length-1,L=L.childNodes[Math.min(M,L.childNodes.length-1)]||L,M=$&&3==L.nodeType?L.nodeValue.length:0),D=k(L)){if(c.beforeChange(),!s.isBlock(D)&&D!=s.getRoot())return void(V&&!H||_());if((V&&!H||!V&&H)&&(L=E(L,M)),P=s.getParent(L,s.isBlock),z=P?s.getParent(P.parentNode,s.isBlock):null,U=P?P.nodeName.toUpperCase():"",W=z?z.nodeName.toUpperCase():"","LI"!=W||a.ctrlKey||(P=z,U=W),o.undoManager.typing&&(o.undoManager.typing=!1,o.undoManager.add()),/^(LI|DT|DD)$/.test(U)){if(!V&&H)return void _();if(s.isEmpty(P))return void N()}if("PRE"==U&&u.br_in_pre!==!1){if(!H)return void _()}else if(!V&&!H&&"LI"!=U||V&&H)return void _();V&&P===o.getBody()||(V=V||"P",n.isCaretContainerBlock(P)?(I=n.showCaretContainerBlock(P),s.isEmpty(P)&&C(P),y(I)):w()?R():w(!0)?(I=P.parentNode.insertBefore(x(),P),g(I),y(P)):(B=A.cloneRange(),B.setEndAfter(P),F=B.extractContents(),S(F),I=F.firstChild,s.insertAfter(F,P),v(I),T(P),s.isEmpty(P)&&C(P),I.normalize(),s.isEmpty(I)?(s.remove(I),R()):y(I)),s.setAttrib(I,"id",""),o.fire("NewBlock",{newBlock:I}),c.typing=!1,c.add())}}}var s=o.dom,l=o.selection,u=o.settings,c=o.undoManager,d=o.schema,f=d.getNonEmptyElements(),p=d.getMoveCaretBeforeOnEnterElements();o.on("keydown",function(e){13==e.keyCode&&a(e)!==!1&&e.preventDefault()})}}),r(re,[],function(){return function(e){function t(){var t=i.getStart(),s=e.getBody(),l,u,c,d,f,p,h,m=-16777215,g,v,y,b,C;if(C=n.forced_root_block,t&&1===t.nodeType&&C){for(;t&&t!=s;){if(a[t.nodeName])return;t=t.parentNode}if(l=i.getRng(),l.setStart){u=l.startContainer,c=l.startOffset,d=l.endContainer,f=l.endOffset;try{v=e.getDoc().activeElement===s}catch(x){}}else l.item&&(t=l.item(0),l=e.getDoc().body.createTextRange(),l.moveToElementText(t)),v=l.parentElement().ownerDocument===e.getDoc(),y=l.duplicate(),y.collapse(!0),c=y.move("character",m)*-1,y.collapsed||(y=l.duplicate(),y.collapse(!1),f=y.move("character",m)*-1-c);for(t=s.firstChild,b=s.nodeName.toLowerCase();t;)if((3===t.nodeType||1==t.nodeType&&!a[t.nodeName])&&o.isValidChild(b,C.toLowerCase())){if(3===t.nodeType&&0===t.nodeValue.length){h=t,t=t.nextSibling,r.remove(h);continue}p||(p=r.create(C,e.settings.forced_root_block_attrs),
t.parentNode.insertBefore(p,t),g=!0),h=t,t=t.nextSibling,p.appendChild(h)}else p=null,t=t.nextSibling;if(g&&v){if(l.setStart)l.setStart(u,c),l.setEnd(d,f),i.setRng(l);else try{l=e.getDoc().body.createTextRange(),l.moveToElementText(s),l.collapse(!0),l.moveStart("character",c),f>0&&l.moveEnd("character",f),l.select()}catch(x){}e.nodeChanged()}}}var n=e.settings,r=e.dom,i=e.selection,o=e.schema,a=o.getBlockElements();n.forced_root_block&&e.on("NodeChange",t)}}),r(ie,[z,y,_,$,k,U],function(e,t,n,r,i,o){function a(e){return e>0}function s(e){return e<0}function l(e,t){for(var n;n=e(t);)if(!N(n))return n;return null}function u(e,n,r,i,o){var u=new t(e,i);if(s(n)){if((x(e)||N(e))&&(e=l(u.prev,!0),r(e)))return e;for(;e=l(u.prev,o);)if(r(e))return e}if(a(n)){if((x(e)||N(e))&&(e=l(u.next,!0),r(e)))return e;for(;e=l(u.next,o);)if(r(e))return e}return null}function c(e,t){for(e=e.parentNode;e&&e!=t;e=e.parentNode)if(C(e))return e;return t}function d(e,t){for(;e&&e!=t;){if(w(e))return e;e=e.parentNode}return null}function f(e,t,n){return d(e.container(),n)==d(t.container(),n)}function p(e,t,n){return c(e.container(),n)==c(t.container(),n)}function h(e,t){var n,r;return t?(n=t.container(),r=t.offset(),S(n)?n.childNodes[r+e]:null):null}function m(e,t){var n=t.ownerDocument.createRange();return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n}function g(e,t,n){return d(t,e)==d(n,e)}function v(e,t,n){var r,i;for(i=e?"previousSibling":"nextSibling";n&&n!=t;){if(r=n[i],E(r)&&(r=r[i]),x(r)){if(g(t,r,n))return r;break}if(k(r))break;n=n.parentNode}return null}function y(e,t,r){var o,a,s,l,u=_(v,!0,t),c=_(v,!1,t);if(a=r.startContainer,s=r.startOffset,i.isCaretContainerBlock(a)){if(S(a)||(a=a.parentNode),l=a.getAttribute("data-mce-caret"),"before"==l&&(o=a.nextSibling,x(o)))return T(o);if("after"==l&&(o=a.previousSibling,x(o)))return R(o)}if(!r.collapsed)return r;if(n.isText(a)){if(E(a)){if(1===e){if(o=c(a))return T(o);if(o=u(a))return R(o)}if(e===-1){if(o=u(a))return R(o);if(o=c(a))return T(o)}return r}if(i.endsWithCaretContainer(a)&&s>=a.data.length-1)return 1===e&&(o=c(a))?T(o):r;if(i.startsWithCaretContainer(a)&&s<=1)return e===-1&&(o=u(a))?R(o):r;if(s===a.data.length)return o=c(a),o?T(o):r;if(0===s)return o=u(a),o?R(o):r}return r}function b(e,t){return x(h(e,t))}var C=n.isContentEditableTrue,x=n.isContentEditableFalse,w=n.matchStyleValues("display","block table table-cell table-caption"),E=i.isCaretContainer,N=i.isCaretContainerBlock,_=e.curry,S=n.isElement,k=o.isCaretCandidate,T=_(m,!0),R=_(m,!1);return{isForwards:a,isBackwards:s,findNode:u,getEditingHost:c,getParentBlock:d,isInSameBlock:f,isInSameEditingHost:p,isBeforeContentEditableFalse:_(b,0),isAfterContentEditableFalse:_(b,-1),normalizeRange:y}}),r(oe,[_,U,$,ie,h,z],function(e,t,n,r,i,o){function a(e,t){for(var n=[];e&&e!=t;)n.push(e),e=e.parentNode;return n}function s(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null}function l(e,t){if(m(e)){if(v(t.previousSibling)&&!f(t.previousSibling))return n.before(t);if(f(t))return n(t,0)}if(g(e)){if(v(t.nextSibling)&&!f(t.nextSibling))return n.after(t);if(f(t))return n(t,t.data.length)}return g(e)?h(t)?n.before(t):n.after(t):n.before(t)}function u(t,i){var o;return!!e.isBr(t)&&(o=c(1,n.after(t),i),!!o&&!r.isInSameBlock(n.before(t),n.before(o),i))}function c(e,t,h){var C,x,w,E,N,_,S;if(!p(h)||!t)return null;if(S=t,C=S.container(),x=S.offset(),f(C)){if(g(e)&&x>0)return n(C,--x);if(m(e)&&x<C.length)return n(C,++x);w=C}else{if(g(e)&&x>0&&(E=s(C,x-1),v(E)))return!y(E)&&(N=r.findNode(E,e,b,E))?f(N)?n(N,N.data.length):n.after(N):f(E)?n(E,E.data.length):n.before(E);if(m(e)&&x<C.childNodes.length&&(E=s(C,x),v(E)))return u(E,h)?c(e,n.after(E),h):!y(E)&&(N=r.findNode(E,e,b,E))?f(N)?n(N,0):n.before(N):f(E)?n(E,0):n.after(E);w=S.getNode()}return(m(e)&&S.isAtEnd()||g(e)&&S.isAtStart())&&(w=r.findNode(w,e,o.constant(!0),h,!0),b(w))?l(e,w):(E=r.findNode(w,e,b,h),_=i.last(i.filter(a(C,h),d)),!_||E&&_.contains(E)?E?l(e,E):null:S=m(e)?n.after(_):n.before(_))}var d=e.isContentEditableFalse,f=e.isText,p=e.isElement,h=e.isBr,m=r.isForwards,g=r.isBackwards,v=t.isCaretCandidate,y=t.isAtomic,b=t.isEditableCaretCandidate;return function(e){return{next:function(t){return c(1,t,e)},prev:function(t){return c(-1,t,e)}}}}),r(ae,[m,oe,$],function(e,t,n){var r=function(e){var t=e.firstChild,n=e.lastChild;return t&&"meta"===t.name&&(t=t.next),n&&"mce_marker"===n.attr("id")&&(n=n.prev),!(!t||t!==n)&&("ul"===t.name||"ol"===t.name)},i=function(e){var t=e.firstChild,n=e.lastChild;return t&&"META"===t.nodeName&&t.parentNode.removeChild(t),n&&"mce_marker"===n.id&&n.parentNode.removeChild(n),e},o=function(e,t,n){var r=t.serialize(n),o=e.createFragment(r);return i(o)},a=function(t){return e.grep(t.childNodes,function(e){return"LI"===e.nodeName})},s=function(e){return!e.firstChild},l=function(e){return e.length>0&&s(e[e.length-1])?e.slice(0,-1):e},u=function(e,t){var n=e.getParent(t,e.isBlock);return n&&"LI"===n.nodeName?n:null},c=function(e,t){return!!u(e,t)},d=function(e,t){var n=t.cloneRange(),r=t.cloneRange();return n.setStartBefore(e),r.setEndAfter(e),[n.cloneContents(),r.cloneContents()]},f=function(e,r){var i=n.before(e),o=new t(r),a=o.next(i);return a?a.toRange():null},p=function(e,r){var i=n.after(e),o=new t(r),a=o.prev(i);return a?a.toRange():null},h=function(t,n,r,i){var o=d(t,i),a=t.parentNode;return a.insertBefore(o[0],t),e.each(n,function(e){a.insertBefore(e,t)}),a.insertBefore(o[1],t),a.removeChild(t),p(n[n.length-1],r)},m=function(t,n,r){var i=t.parentNode;return e.each(n,function(e){i.insertBefore(e,t)}),f(t,r)},g=function(e,t,n,r){return r.insertAfter(t.reverse(),e),p(t[0],n)},v=function(e,r,i,s){var c=o(r,e,s),d=u(r,i.startContainer),f=l(a(c.firstChild)),p=1,v=2,y=r.getRoot(),b=function(e){var o=n.fromRangeStart(i),a=new t(r.getRoot()),s=e===p?a.prev(o):a.next(o);return!s||u(r,s.getNode())!==d};return b(p)?m(d,f,y):b(v)?g(d,f,y,r):h(d,f,y,i)};return{isListFragment:r,insertAtCaret:v,isParentBlockLi:c,trimListItems:l,listItems:a}}),r(se,[d,m,P,oe,$,X,_,ae],function(e,t,n,r,i,o,a,s){var l=a.matchNodeNames("td th"),u=function(e,t,n){if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n);else{var r=n.firstChild,i=n.lastChild;!r||r===i&&"BR"===r.nodeName?e.dom.setHTML(n,t):e.selection.setContent(t)}},c=function(a,c,d){function f(e){function t(e){return r[e]&&3==r[e].nodeType}var n,r,i;return n=L.getRng(!0),r=n.startContainer,i=n.startOffset,3==r.nodeType&&(i>0?e=e.replace(/^&nbsp;/," "):t("previousSibling")||(e=e.replace(/^ /,"&nbsp;")),i<r.length?e=e.replace(/&nbsp;(<br>|)$/," "):t("nextSibling")||(e=e.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),e}function p(){var e,t,n;e=L.getRng(!0),t=e.startContainer,n=e.startOffset,3==t.nodeType&&e.collapsed&&("\xa0"===t.data[n]?(t.deleteData(n,1),/[\u00a0| ]$/.test(c)||(c+=" ")):"\xa0"===t.data[n-1]&&(t.deleteData(n-1,1),/[\u00a0| ]$/.test(c)||(c=" "+c)))}function h(){if(B){var e=a.getBody(),n=new o(M);t.each(M.select("*[data-mce-fragment]"),function(t){for(var r=t.parentNode;r&&r!=e;r=r.parentNode)D[t.nodeName.toLowerCase()]&&n.compare(r,t)&&M.remove(t,!0)})}}function m(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}function g(e){t.each(e.getElementsByTagName("*"),function(e){e.removeAttribute("data-mce-fragment")})}function v(e){return!!e.getAttribute("data-mce-fragment")}function y(e){return e&&!a.schema.getShortEndedElements()[e.nodeName]}function b(t){function n(e){for(var t=a.getBody();e&&e!==t;e=e.parentNode)if("false"===a.dom.getContentEditable(e))return e;return null}function o(e){var t=i.fromRangeStart(e),n=new r(a.getBody());if(t=n.next(t))return t.toRange()}var s,u,c;if(t){if(L.scrollIntoView(t),s=n(t))return M.remove(t),void L.select(s);k=M.createRng(),T=t.previousSibling,T&&3==T.nodeType?(k.setStart(T,T.nodeValue.length),e.ie||(R=t.nextSibling,R&&3==R.nodeType&&(T.appendData(R.data),R.parentNode.removeChild(R)))):(k.setStartBefore(t),k.setEndBefore(t)),u=M.getParent(t,M.isBlock),M.remove(t),u&&M.isEmpty(u)&&(a.$(u).empty(),k.setStart(u,0),k.setEnd(u,0),l(u)||v(u)||!(c=o(k))?M.add(u,M.create("br",{"data-mce-bogus":"1"})):(k=c,M.remove(u))),L.setRng(k)}}var C,x,w,E,N,_,S,k,T,R,A,B,D=a.schema.getTextInlineElements(),L=a.selection,M=a.dom;/^ | $/.test(c)&&(c=f(c)),C=a.parser,B=d.merge,x=new n({validate:a.settings.validate},a.schema),A='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',_={content:c,format:"html",selection:!0},a.fire("BeforeSetContent",_),c=_.content,c.indexOf("{$caret}")==-1&&(c+="{$caret}"),c=c.replace(/\{\$caret\}/,A),k=L.getRng();var P=k.startContainer||(k.parentElement?k.parentElement():null),O=a.getBody();P===O&&L.isCollapsed()&&M.isBlock(O.firstChild)&&y(O.firstChild)&&M.isEmpty(O.firstChild)&&(k=M.createRng(),k.setStart(O.firstChild,0),k.setEnd(O.firstChild,0),L.setRng(k)),L.isCollapsed()||(a.selection.setRng(a.selection.getRng()),a.getDoc().execCommand("Delete",!1,null),p()),w=L.getNode();var H={context:w.nodeName.toLowerCase(),data:d.data};if(N=C.parse(c,H),d.paste===!0&&s.isListFragment(N)&&s.isParentBlockLi(M,w))return k=s.insertAtCaret(x,M,a.selection.getRng(!0),N),a.selection.setRng(k),void a.fire("SetContent",_);if(m(N),T=N.lastChild,"mce_marker"==T.attr("id"))for(S=T,T=T.prev;T;T=T.walk(!0))if(3==T.type||!M.isBlock(T.name)){a.schema.isValidChild(T.parent.name,"span")&&T.parent.insert(S,T,"br"===T.name);break}if(a._selectionOverrides.showBlockCaretContainer(w),H.invalid){for(L.setContent(A),w=L.getNode(),E=a.getBody(),9==w.nodeType?w=T=E:T=w;T!==E;)w=T,T=T.parentNode;c=w==E?E.innerHTML:M.getOuterHTML(w),c=x.serialize(C.parse(c.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return x.serialize(N)}))),w==E?M.setHTML(E,c):M.setOuterHTML(w,c)}else c=x.serialize(N),u(a,c,w);h(),b(M.get("mce_marker")),g(a.getBody()),a.fire("SetContent",_),a.addVisual()},d=function(e){var n;return"string"!=typeof e?(n=t.extend({paste:e.paste,data:{paste:e.paste}},e),{content:e.content,details:n}):{content:e,details:{}}},f=function(e,t){var n=d(t);c(e,n.content,n.details)};return{insertAtCaret:f}}),r(le,[d,m,T,y,se,_],function(e,n,r,i,o,a){var s=n.each,l=n.extend,u=n.map,c=n.inArray,d=n.explode,f=e.ie&&e.ie<11,p=!0,h=!1;return function(n){function m(e,t,r,i){var o,a,l=0;if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||i&&i.skip_focus||n.focus(),i=n.fire("BeforeExecCommand",{command:e,ui:t,value:r}),i.isDefaultPrevented())return!1;if(a=e.toLowerCase(),o=D.exec[a])return o(a,t,r),n.fire("ExecCommand",{command:e,ui:t,value:r}),!0;if(s(n.plugins,function(i){if(i.execCommand&&i.execCommand(e,t,r))return n.fire("ExecCommand",{command:e,ui:t,value:r}),l=!0,!1}),l)return l;if(n.theme&&n.theme.execCommand&&n.theme.execCommand(e,t,r))return n.fire("ExecCommand",{command:e,ui:t,value:r}),!0;try{l=n.getDoc().execCommand(e,t,r)}catch(u){}return!!l&&(n.fire("ExecCommand",{command:e,ui:t,value:r}),!0)}function g(e){var t;if(!n.quirks.isHidden()){if(e=e.toLowerCase(),t=D.state[e])return t(e);try{return n.getDoc().queryCommandState(e)}catch(r){}return!1}}function v(e){var t;if(!n.quirks.isHidden()){if(e=e.toLowerCase(),t=D.value[e])return t(e);try{return n.getDoc().queryCommandValue(e)}catch(r){}}}function y(e,t){t=t||"exec",s(e,function(e,n){s(n.toLowerCase().split(","),function(n){D[t][n]=e})})}function b(e,t,r){e=e.toLowerCase(),D.exec[e]=function(e,i,o,a){return t.call(r||n,i,o,a)}}function C(e){if(e=e.toLowerCase(),D.exec[e])return!0;try{return n.getDoc().queryCommandSupported(e)}catch(t){}return!1}function x(e,t,r){e=e.toLowerCase(),D.state[e]=function(){return t.call(r||n)}}function w(e,t,r){e=e.toLowerCase(),D.value[e]=function(){return t.call(r||n)}}function E(e){return e=e.toLowerCase(),!!D.exec[e]}function N(e,r,i){return r===t&&(r=h),i===t&&(i=null),n.getDoc().execCommand(e,r,i)}function _(e){return B.match(e)}function S(e,r){B.toggle(e,r?{value:r}:t),n.nodeChanged()}function k(e){M=A.getBookmark(e)}function T(){A.moveToBookmark(M)}var R,A,B,D={state:{},exec:{},value:{}},L=n.settings,M;n.on("PreInit",function(){R=n.dom,A=n.selection,L=n.settings,B=n.formatter}),l(this,{execCommand:m,queryCommandState:g,queryCommandValue:v,queryCommandSupported:C,addCommands:y,addCommand:b,addQueryStateHandler:x,addQueryValueHandler:w,hasCustomCommand:E}),y({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){n.undoManager.add()},"Cut,Copy,Paste":function(t){var r=n.getDoc(),i;try{N(t)}catch(o){i=p}if("paste"!==t||r.queryCommandEnabled(t)||(i=!0),i||!r.queryCommandSupported(t)){var a=n.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");e.mac&&(a=a.replace(/Ctrl\+/g,"\u2318+")),n.notificationManager.open({text:a,type:"error"})}},unlink:function(){if(A.isCollapsed()){var e=n.dom.getParent(n.selection.getStart(),"a");return void(e&&n.dom.remove(e,!0))}B.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(e){var t=e.substring(7);"full"==t&&(t="justify"),s("left,center,right,justify".split(","),function(e){t!=e&&B.remove("align"+e)}),"none"!=t&&S("align"+t)},"InsertUnorderedList,InsertOrderedList":function(e){var t,n;N(e),t=R.getParent(A.getNode(),"ol,ul"),t&&(n=t.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName)&&(k(),R.split(n,t),T()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){S(e)},"ForeColor,HiliteColor,FontName":function(e,t,n){S(e,n)},FontSize:function(e,t,n){var r,i;n>=1&&n<=7&&(i=d(L.font_size_style_values),r=d(L.font_size_classes),n=r?r[n-1]||n:i[n-1]||n),S(e,n)},RemoveFormat:function(e){B.remove(e)},mceBlockQuote:function(){S("blockquote")},FormatBlock:function(e,t,n){return S(n||"p")},mceCleanup:function(){var e=A.getBookmark();n.setContent(n.getContent({cleanup:p}),{cleanup:p}),A.moveToBookmark(e)},mceRemoveNode:function(e,t,r){var i=r||A.getNode();i!=n.getBody()&&(k(),n.dom.remove(i,p),T())},mceSelectNodeDepth:function(e,t,r){var i=0;R.getParent(A.getNode(),function(e){if(1==e.nodeType&&i++==r)return A.select(e),h},n.getBody())},mceSelectNode:function(e,t,n){A.select(n)},mceInsertContent:function(e,t,r){o.insertAtCaret(n,r)},mceInsertRawHTML:function(e,t,r){A.setContent("tiny_mce_marker"),n.setContent(n.getContent().replace(/tiny_mce_marker/g,function(){return r}))},mceToggleFormat:function(e,t,n){S(n)},mceSetContent:function(e,t,r){n.setContent(r)},"Indent,Outdent":function(e){var t,r,i;t=L.indentation,r=/[a-z%]+$/i.exec(t),t=parseInt(t,10),g("InsertUnorderedList")||g("InsertOrderedList")?N(e):(L.forced_root_block||R.getParent(A.getNode(),R.isBlock)||B.apply("div"),s(A.getSelectedBlocks(),function(o){if("false"!==R.getContentEditable(o)&&"LI"!==o.nodeName){var a=n.getParam("indent_use_margin",!1)?"margin":"padding";a="TABLE"===o.nodeName?"margin":a,a+="rtl"==R.getStyle(o,"direction",!0)?"Right":"Left","outdent"==e?(i=Math.max(0,parseInt(o.style[a]||0,10)-t),R.setStyle(o,a,i?i+r:"")):(i=parseInt(o.style[a]||0,10)+t+r,R.setStyle(o,a,i))}}))},mceRepaint:function(){},InsertHorizontalRule:function(){n.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){n.hasVisual=!n.hasVisual,n.addVisual()},mceReplaceContent:function(e,t,r){n.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,A.getContent({format:"text"})))},mceInsertLink:function(e,t,n){var r;"string"==typeof n&&(n={href:n}),r=R.getParent(A.getNode(),"a"),n.href=n.href.replace(" ","%20"),r&&n.href||B.remove("link"),n.href&&B.apply("link",n,r)},selectAll:function(){var e=R.getRoot(),t;if(A.getRng().setStart){var n=R.getParent(A.getStart(),a.isContentEditableTrue);n&&(t=R.createRng(),t.selectNodeContents(n),A.setRng(t))}else t=A.getRng(),t.item||(t.moveToElementText(e),t.select())},"delete":function(){N("Delete");var e=n.getBody();R.isEmpty(e)&&(n.setContent(""),e.firstChild&&R.isBlock(e.firstChild)?n.selection.setCursorLocation(e.firstChild,0):n.selection.setCursorLocation(e,0))},mceNewDocument:function(){n.setContent("")},InsertLineBreak:function(e,t,o){function a(){for(var e=new i(m,v),t,r=n.schema.getNonEmptyElements();t=e.next();)if(r[t.nodeName.toLowerCase()]||t.length>0)return!0}var s=o,l,u,c,d=A.getRng(!0);new r(R).normalize(d);var h=d.startOffset,m=d.startContainer;if(1==m.nodeType&&m.hasChildNodes()){var g=h>m.childNodes.length-1;m=m.childNodes[Math.min(h,m.childNodes.length-1)]||m,h=g&&3==m.nodeType?m.nodeValue.length:0}var v=R.getParent(m,R.isBlock),y=v?v.nodeName.toUpperCase():"",b=v?R.getParent(v.parentNode,R.isBlock):null,C=b?b.nodeName.toUpperCase():"",x=s&&s.ctrlKey;"LI"!=C||x||(v=b,y=C),m&&3==m.nodeType&&h>=m.nodeValue.length&&(f||a()||(l=R.create("br"),d.insertNode(l),d.setStartAfter(l),d.setEndAfter(l),u=!0)),l=R.create("br"),d.insertNode(l);var w=R.doc.documentMode;return f&&"PRE"==y&&(!w||w<8)&&l.parentNode.insertBefore(R.doc.createTextNode("\r"),l),c=R.create("span",{},"&nbsp;"),l.parentNode.insertBefore(c,l),A.scrollIntoView(c),R.remove(c),u?(d.setStartBefore(l),d.setEndBefore(l)):(d.setStartAfter(l),d.setEndAfter(l)),A.setRng(d),n.undoManager.add(),p}}),y({"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(e){var t="align"+e.substring(7),n=A.isCollapsed()?[R.getParent(A.getNode(),R.isBlock)]:A.getSelectedBlocks(),r=u(n,function(e){return!!B.matchNode(e,t)});return c(r,p)!==-1},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return _(e)},mceBlockQuote:function(){return _("blockquote")},Outdent:function(){var e;if(L.inline_styles){if((e=R.getParent(A.getStart(),R.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return p;if((e=R.getParent(A.getEnd(),R.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return p}return g("InsertUnorderedList")||g("InsertOrderedList")||!L.inline_styles&&!!R.getParent(A.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var t=R.getParent(A.getNode(),"ul,ol");return t&&("insertunorderedlist"===e&&"UL"===t.tagName||"insertorderedlist"===e&&"OL"===t.tagName)}},"state"),y({"FontSize,FontName":function(e){var t=0,n;return(n=R.getParent(A.getNode(),"span"))&&(t="fontsize"==e?n.style.fontSize:n.style.fontFamily.replace(/, /g,",").replace(/[\'\"]/g,"").toLowerCase()),t}},"value"),y({Undo:function(){n.undoManager.undo()},Redo:function(){n.undoManager.redo()}})}}),r(ue,[m],function(e){function t(e,o){var a=this,s,l;if(e=r(e),o=a.settings=o||{},s=o.base_uri,/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e))return void(a.source=e);var u=0===e.indexOf("//");0!==e.indexOf("/")||u||(e=(s?s.protocol||"http":"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(l=o.base_uri?o.base_uri.path:new t(location.href).directory,""===o.base_uri.protocol?e="//mce_host"+a.toAbsPath(l,e):(e=/([^#?]*)([#?]?.*)/.exec(e),e=(s&&s.protocol||"http")+"://mce_host"+a.toAbsPath(l,e[1])+e[2])),e=e.replace(/@@/g,"(mce_at)"),e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),n(i,function(t,n){var r=e[n];r&&(r=r.replace(/\(mce_at\)/g,"@@")),a[t]=r}),s&&(a.protocol||(a.protocol=s.protocol),a.userInfo||(a.userInfo=s.userInfo),a.port||"mce_host"!==a.host||(a.port=s.port),a.host&&"mce_host"!==a.host||(a.host=s.host),a.source=""),u&&(a.protocol="")}var n=e.each,r=e.trim,i="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),o={ftp:21,http:80,https:443,mailto:25};return t.prototype={setPath:function(e){var t=this;e=/^(.*?)\/?(\w+)?$/.exec(e),t.path=e[0],t.directory=e[1],t.file=e[2],t.source="",t.getURI()},toRelative:function(e){var n=this,r;if("./"===e)return e;if(e=new t(e,{base_uri:n}),"mce_host"!=e.host&&n.host!=e.host&&e.host||n.port!=e.port||n.protocol!=e.protocol&&""!==e.protocol)return e.getURI();var i=n.getURI(),o=e.getURI();return i==o||"/"==i.charAt(i.length-1)&&i.substr(0,i.length-1)==o?i:(r=n.toRelPath(n.path,e.path),e.query&&(r+="?"+e.query),e.anchor&&(r+="#"+e.anchor),r)},toAbsolute:function(e,n){return e=new t(e,{base_uri:this}),e.getURI(n&&this.isSameOrigin(e))},isSameOrigin:function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0;var t=o[this.protocol];if(t&&(this.port||t)==(e.port||t))return!0}return!1},toRelPath:function(e,t){var n,r=0,i="",o,a;if(e=e.substring(0,e.lastIndexOf("/")),e=e.split("/"),n=t.split("/"),e.length>=n.length)for(o=0,a=e.length;o<a;o++)if(o>=n.length||e[o]!=n[o]){r=o+1;break}if(e.length<n.length)for(o=0,a=n.length;o<a;o++)if(o>=e.length||e[o]!=n[o]){r=o+1;break}if(1===r)return t;for(o=0,a=e.length-(r-1);o<a;o++)i+="../";for(o=r-1,a=n.length;o<a;o++)i+=o!=r-1?"/"+n[o]:n[o];return i},toAbsPath:function(e,t){var r,i=0,o=[],a,s;for(a=/\/$/.test(t)?"/":"",e=e.split("/"),t=t.split("/"),n(e,function(e){e&&o.push(e)}),e=o,r=t.length-1,o=[];r>=0;r--)0!==t[r].length&&"."!==t[r]&&(".."!==t[r]?i>0?i--:o.push(t[r]):i++);return r=e.length-i,s=r<=0?o.reverse().join("/"):e.slice(0,r).join("/")+"/"+o.reverse().join("/"),0!==s.indexOf("/")&&(s="/"+s),a&&s.lastIndexOf("/")!==s.length-1&&(s+=a),s},getURI:function(e){var t,n=this;return n.source&&!e||(t="",e||(t+=n.protocol?n.protocol+"://":"//",n.userInfo&&(t+=n.userInfo+"@"),n.host&&(t+=n.host),n.port&&(t+=":"+n.port)),n.path&&(t+=n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),n.source=t),n.source}},t.parseDataUri=function(e){var t,n;return e=decodeURIComponent(e).split(","),n=/data:([^;]+)/.exec(e[0]),n&&(t=n[1]),{type:t,data:e[1]}},t.getDocumentBaseUrl=function(e){var t;return t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t},t}),r(ce,[m],function(e){function t(){}var n=e.each,r=e.extend,i,o;return t.extend=i=function(e){function t(){var e,t,n,r=this;if(!o&&(r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)n=t[e],n.init&&n.init.apply(r,arguments)}function a(){return this}function s(e,t){return function(){var n=this,r=n._super,i;return n._super=u[e],i=t.apply(n,arguments),n._super=r,i}}var l=this,u=l.prototype,c,d,f;o=!0,c=new l,o=!1,e.Mixins&&(n(e.Mixins,function(t){for(var n in t)"init"!==n&&(e[n]=t[n])}),u.Mixins&&(e.Mixins=u.Mixins.concat(e.Mixins))),e.Methods&&n(e.Methods.split(","),function(t){e[t]=a}),e.Properties&&n(e.Properties.split(","),function(t){var n="_"+t;e[t]=function(e){var t=this,r;return e!==r?(t[n]=e,t):t[n]}}),e.Statics&&n(e.Statics,function(e,n){t[n]=e}),e.Defaults&&u.Defaults&&(e.Defaults=r({},u.Defaults,e.Defaults));for(d in e)f=e[d],"function"==typeof f&&u[d]?c[d]=s(d,f):c[d]=f;return t.prototype=c,t.constructor=t,t.extend=i,t},t}),r(de,[m],function(e){function t(t){function n(){return!1}function r(){return!0}function i(e,i){var o,s,l,u;if(e=e.toLowerCase(),i=i||{},i.type=e,i.target||(i.target=c),i.preventDefault||(i.preventDefault=function(){i.isDefaultPrevented=r},i.stopPropagation=function(){i.isPropagationStopped=r},i.stopImmediatePropagation=function(){i.isImmediatePropagationStopped=r},i.isDefaultPrevented=n,i.isPropagationStopped=n,i.isImmediatePropagationStopped=n),t.beforeFire&&t.beforeFire(i),o=d[e])for(s=0,l=o.length;s<l;s++){if(u=o[s],u.once&&a(e,u.func),i.isImmediatePropagationStopped())return i.stopPropagation(),i;if(u.func.call(c,i)===!1)return i.preventDefault(),i}return i}function o(t,r,i,o){var a,s,l;if(r===!1&&(r=n),r)for(r={func:r},o&&e.extend(r,o),s=t.toLowerCase().split(" "),l=s.length;l--;)t=s[l],a=d[t],a||(a=d[t]=[],f(t,!0)),i?a.unshift(r):a.push(r);return u}function a(e,t){var n,r,i,o,a;if(e)for(o=e.toLowerCase().split(" "),n=o.length;n--;){if(e=o[n],r=d[e],!e){for(i in d)f(i,!1),delete d[i];return u}if(r){if(t)for(a=r.length;a--;)r[a].func===t&&(r=r.slice(0,a).concat(r.slice(a+1)),d[e]=r);else r.length=0;r.length||(f(e,!1),delete d[e])}}else{for(e in d)f(e,!1);d={}}return u}function s(e,t,n){return o(e,t,n,{once:!0})}function l(e){return e=e.toLowerCase(),!(!d[e]||0===d[e].length)}var u=this,c,d={},f;t=t||{},c=t.scope||u,f=t.toggleEvent||n,u.fire=i,u.on=o,u.off=a,u.once=s,u.has=l}var n=e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend"," ");return t.isNative=function(e){return!!n[e.toLowerCase()]},t}),r(fe,[],function(){function e(e){this.create=e.create}return e.create=function(t,n){return new e({create:function(e,r){function i(t){e.set(r,t.value)}function o(e){t.set(n,e.value)}var a;return e.on("change:"+r,o),t.on("change:"+n,i),a=e._bindings,a||(a=e._bindings=[],e.on("destroy",function(){for(var e=a.length;e--;)a[e]()})),a.push(function(){t.off("change:"+n,i)}),t.get(n)}})},e}),r(pe,[de],function(e){function t(t){return t._eventDispatcher||(t._eventDispatcher=new e({scope:t,toggleEvent:function(n,r){e.isNative(n)&&t.toggleNativeEvent&&t.toggleNativeEvent(n,r)}})),t._eventDispatcher}return{fire:function(e,n,r){var i=this;if(i.removed&&"remove"!==e)return n;if(n=t(i).fire(e,n,r),r!==!1&&i.parent)for(var o=i.parent();o&&!n.isPropagationStopped();)o.fire(e,n,!1),o=o.parent();return n},on:function(e,n,r){return t(this).on(e,n,r)},off:function(e,n){return t(this).off(e,n)},once:function(e,n){return t(this).once(e,n)},hasEventListeners:function(e){return t(this).has(e)}}}),r(he,[fe,pe,ce,m],function(e,t,n,r){function i(e){return e.nodeType>0}function o(e,t){var n,a;if(e===t)return!0;if(null===e||null===t)return e===t;if("object"!=typeof e||"object"!=typeof t)return e===t;if(r.isArray(t)){if(e.length!==t.length)return!1;for(n=e.length;n--;)if(!o(e[n],t[n]))return!1}if(i(e)||i(t))return e===t;a={};for(n in t){if(!o(e[n],t[n]))return!1;a[n]=!0}for(n in e)if(!a[n]&&!o(e[n],t[n]))return!1;return!0}return n.extend({Mixins:[t],init:function(t){var n,r;t=t||{};for(n in t)r=t[n],r instanceof e&&(t[n]=r.create(this,n));this.data=t},set:function(t,n){var r,i,a=this.data[t];if(n instanceof e&&(n=n.create(this,t)),"object"==typeof t){for(r in t)this.set(r,t[r]);return this}return o(a,n)||(this.data[t]=n,i={target:this,name:t,value:n,oldValue:a},this.fire("change:"+t,i),this.fire("change",i)),this},get:function(e){return this.data[e]},has:function(e){return e in this.data},bind:function(t){return e.create(this,t)},destroy:function(){this.fire("destroy")}})}),r(me,[ce],function(e){function t(e){for(var t=[],n=e.length,r;n--;)r=e[n],r.__checked||(t.push(r),r.__checked=1);for(n=t.length;n--;)delete t[n].__checked;return t}var n=/^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i=/^\s*|\s*$/g,o,a=e.extend({init:function(e){function t(e){if(e)return e=e.toLowerCase(),function(t){return"*"===e||t.type===e}}function o(e){if(e)return function(t){return t._name===e}}function a(e){if(e)return e=e.split("."),function(t){for(var n=e.length;n--;)if(!t.classes.contains(e[n]))return!1;return!0}}function s(e,t,n){if(e)return function(r){var i=r[e]?r[e]():"";return t?"="===t?i===n:"*="===t?i.indexOf(n)>=0:"~="===t?(" "+i+" ").indexOf(" "+n+" ")>=0:"!="===t?i!=n:"^="===t?0===i.indexOf(n):"$="===t&&i.substr(i.length-n.length)===n:!!n}}function l(e){var t;if(e)return e=/(?:not\((.+)\))|(.+)/i.exec(e),e[1]?(t=c(e[1],[]),function(e){return!d(e,t)}):(e=e[2],function(t,n,r){return"first"===e?0===n:"last"===e?n===r-1:"even"===e?n%2===0:"odd"===e?n%2===1:!!t[e]&&t[e]()})}function u(e,r,u){function c(e){e&&r.push(e)}var d;return d=n.exec(e.replace(i,"")),c(t(d[1])),c(o(d[2])),c(a(d[3])),c(s(d[4],d[5],d[6])),c(l(d[7])),r.pseudo=!!d[7],r.direct=u,r}function c(e,t){var n=[],i,o,a;do if(r.exec(""),o=r.exec(e),o&&(e=o[3],n.push(o[1]),o[2])){i=o[3];break}while(o);for(i&&c(i,t),e=[],a=0;a<n.length;a++)">"!=n[a]&&e.push(u(n[a],[],">"===n[a-1]));return t.push(e),t}var d=this.match;this._selectors=c(e,[])},match:function(e,t){var n,r,i,o,a,s,l,u,c,d,f,p,h;for(t=t||this._selectors,n=0,r=t.length;n<r;n++){for(a=t[n],o=a.length,h=e,p=0,i=o-1;i>=0;i--)for(u=a[i];h;){if(u.pseudo)for(f=h.parent().items(),c=d=f.length;c--&&f[c]!==h;);for(s=0,l=u.length;s<l;s++)if(!u[s](h,c,d)){s=l+1;break}if(s===l){p++;break}if(i===o-1)break;h=h.parent()}if(p===o)return!0}return!1},find:function(e){function n(e,t,i){var o,a,s,l,u,c=t[i];for(o=0,a=e.length;o<a;o++){for(u=e[o],s=0,l=c.length;s<l;s++)if(!c[s](u,o,a)){s=l+1;break}if(s===l)i==t.length-1?r.push(u):u.items&&n(u.items(),t,i+1);else if(c.direct)return;u.items&&n(u.items(),t,i)}}var r=[],i,s,l=this._selectors;if(e.items){for(i=0,s=l.length;i<s;i++)n(e.items(),l[i],0);s>1&&(r=t(r))}return o||(o=a.Collection),new o(r)}});return a}),r(ge,[m,me,ce],function(e,t,n){var r,i,o=Array.prototype.push,a=Array.prototype.slice;return i={length:0,init:function(e){e&&this.add(e)},add:function(t){var n=this;return e.isArray(t)?o.apply(n,t):t instanceof r?n.add(t.toArray()):o.call(n,t),n},set:function(e){var t=this,n=t.length,r;for(t.length=0,t.add(e),r=t.length;r<n;r++)delete t[r];return t},filter:function(e){var n=this,i,o,a=[],s,l;for("string"==typeof e?(e=new t(e),l=function(t){return e.match(t)}):l=e,i=0,o=n.length;i<o;i++)s=n[i],l(s)&&a.push(s);return new r(a)},slice:function(){return new r(a.apply(this,arguments))},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},each:function(t){return e.each(this,t),this},toArray:function(){return e.toArray(this)},indexOf:function(e){for(var t=this,n=t.length;n--&&t[n]!==e;);return n},reverse:function(){return new r(e.toArray(this).reverse())},hasClass:function(e){return!!this[0]&&this[0].classes.contains(e)},prop:function(e,t){var n=this,r,i;return t!==r?(n.each(function(n){n[e]&&n[e](t)}),n):(i=n[0],i&&i[e]?i[e]():void 0)},exec:function(t){var n=this,r=e.toArray(arguments).slice(1);return n.each(function(e){e[t]&&e[t].apply(e,r)}),n},remove:function(){for(var e=this.length;e--;)this[e].remove();return this},addClass:function(e){return this.each(function(t){t.classes.add(e)})},removeClass:function(e){return this.each(function(t){t.classes.remove(e)})}},e.each("fire on off show hide append prepend before after reflow".split(" "),function(t){i[t]=function(){var n=e.toArray(arguments);return this.each(function(e){t in e&&e[t].apply(e,n)}),this}}),e.each("text name disabled active selected checked visible parent value data".split(" "),function(e){i[e]=function(t){return this.prop(e,t)}}),r=n.extend(i),t.Collection=r,r}),r(ve,[d,m,w],function(e,t,n){var r=0,i={id:function(){return"mceu_"+r++},create:function(e,r,i){var o=document.createElement(e);return n.DOM.setAttribs(o,r),"string"==typeof i?o.innerHTML=i:t.each(i,function(e){e.nodeType&&o.appendChild(e)}),o},createFragment:function(e){return n.DOM.createFragment(e)},getWindowSize:function(){return n.DOM.getViewPort()},getSize:function(e){var t,n;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=Math.max(r.width||r.right-r.left,e.offsetWidth),n=Math.max(r.height||r.bottom-r.bottom,e.offsetHeight)}else t=e.offsetWidth,n=e.offsetHeight;return{width:t,height:n}},getPos:function(e,t){return n.DOM.getPos(e,t||i.getContainer())},getContainer:function(){return e.container?e.container:document.body},getViewPort:function(e){return n.DOM.getViewPort(e)},get:function(e){return document.getElementById(e)},addClass:function(e,t){return n.DOM.addClass(e,t)},removeClass:function(e,t){return n.DOM.removeClass(e,t)},hasClass:function(e,t){return n.DOM.hasClass(e,t)},toggleClass:function(e,t,r){return n.DOM.toggleClass(e,t,r)},css:function(e,t,r){return n.DOM.setStyle(e,t,r)},getRuntimeStyle:function(e,t){return n.DOM.getStyle(e,t,!0)},on:function(e,t,r,i){
return n.DOM.bind(e,t,r,i)},off:function(e,t,r){return n.DOM.unbind(e,t,r)},fire:function(e,t,r){return n.DOM.fire(e,t,r)},innerHtml:function(e,t){n.DOM.setHTML(e,t)}};return i}),r(ye,[],function(){return{parseBox:function(e){var t,n=10;if(e)return"number"==typeof e?(e=e||0,{top:e,left:e,bottom:e,right:e}):(e=e.split(" "),t=e.length,1===t?e[1]=e[2]=e[3]=e[0]:2===t?(e[2]=e[0],e[3]=e[1]):3===t&&(e[3]=e[1]),{top:parseInt(e[0],n)||0,right:parseInt(e[1],n)||0,bottom:parseInt(e[2],n)||0,left:parseInt(e[3],n)||0})},measureBox:function(e,t){function n(t){var n=document.defaultView;return n?(t=t.replace(/[A-Z]/g,function(e){return"-"+e}),n.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle[t]}function r(e){var t=parseFloat(n(e),10);return isNaN(t)?0:t}return{top:r(t+"TopWidth"),right:r(t+"RightWidth"),bottom:r(t+"BottomWidth"),left:r(t+"LeftWidth")}}}}),r(be,[m],function(e){function t(){}function n(e){this.cls=[],this.cls._map={},this.onchange=e||t,this.prefix=""}return e.extend(n.prototype,{add:function(e){return e&&!this.contains(e)&&(this.cls._map[e]=!0,this.cls.push(e),this._change()),this},remove:function(e){if(this.contains(e)){for(var t=0;t<this.cls.length&&this.cls[t]!==e;t++);this.cls.splice(t,1),delete this.cls._map[e],this._change()}return this},toggle:function(e,t){var n=this.contains(e);return n!==t&&(n?this.remove(e):this.add(e),this._change()),this},contains:function(e){return!!this.cls._map[e]},_change:function(){delete this.clsValue,this.onchange.call(this)}}),n.prototype.toString=function(){var e;if(this.clsValue)return this.clsValue;e="";for(var t=0;t<this.cls.length;t++)t>0&&(e+=" "),e+=this.prefix+this.cls[t];return e},n}),r(Ce,[c],function(e){var t={},n;return{add:function(r){var i=r.parent();if(i){if(!i._layout||i._layout.isNative())return;t[i._id]||(t[i._id]=i),n||(n=!0,e.requestAnimationFrame(function(){var e,r;n=!1;for(e in t)r=t[e],r.state.get("rendered")&&r.reflow();t={}},document.body))}},remove:function(e){t[e._id]&&delete t[e._id]}}}),r(xe,[ce,m,de,he,ge,ve,g,ye,be,Ce],function(e,t,n,r,i,o,a,s,l,u){function c(e){return e._eventDispatcher||(e._eventDispatcher=new n({scope:e,toggleEvent:function(t,r){r&&n.isNative(t)&&(e._nativeEvents||(e._nativeEvents={}),e._nativeEvents[t]=!0,e.state.get("rendered")&&d(e))}})),e._eventDispatcher}function d(e){function t(t){var n=e.getParentCtrl(t.target);n&&n.fire(t.type,t)}function n(){var e=u._lastHoverCtrl;e&&(e.fire("mouseleave",{target:e.getEl()}),e.parents().each(function(e){e.fire("mouseleave",{target:e.getEl()})}),u._lastHoverCtrl=null)}function r(t){var n=e.getParentCtrl(t.target),r=u._lastHoverCtrl,i=0,o,a,s;if(n!==r){if(u._lastHoverCtrl=n,a=n.parents().toArray().reverse(),a.push(n),r){for(s=r.parents().toArray().reverse(),s.push(r),i=0;i<s.length&&a[i]===s[i];i++);for(o=s.length-1;o>=i;o--)r=s[o],r.fire("mouseleave",{target:r.getEl()})}for(o=i;o<a.length;o++)n=a[o],n.fire("mouseenter",{target:n.getEl()})}}function i(t){t.preventDefault(),"mousewheel"==t.type?(t.deltaY=-.025*t.wheelDelta,t.wheelDeltaX&&(t.deltaX=-.025*t.wheelDeltaX)):(t.deltaX=0,t.deltaY=t.detail),t=e.fire("wheel",t)}var o,s,l,u,c,d;if(c=e._nativeEvents){for(l=e.parents().toArray(),l.unshift(e),o=0,s=l.length;!u&&o<s;o++)u=l[o]._eventsRoot;for(u||(u=l[l.length-1]||e),e._eventsRoot=u,s=o,o=0;o<s;o++)l[o]._eventsRoot=u;var h=u._delegates;h||(h=u._delegates={});for(d in c){if(!c)return!1;"wheel"!==d||p?("mouseenter"===d||"mouseleave"===d?u._hasMouseEnter||(a(u.getEl()).on("mouseleave",n).on("mouseover",r),u._hasMouseEnter=1):h[d]||(a(u.getEl()).on(d,t),h[d]=!0),c[d]=!1):f?a(e.getEl()).on("mousewheel",i):a(e.getEl()).on("DOMMouseScroll",i)}}}var f="onmousewheel"in document,p=!1,h="mce-",m,g=0,v={Statics:{classPrefix:h},isRtl:function(){return m.rtl},classPrefix:h,init:function(e){function n(e){var t;for(e=e.split(" "),t=0;t<e.length;t++)i.classes.add(e[t])}var i=this,o,u;i.settings=e=t.extend({},i.Defaults,e),i._id=e.id||"mceu_"+g++,i._aria={role:e.role},i._elmCache={},i.$=a,i.state=new r({visible:!0,active:!1,disabled:!1,value:""}),i.data=new r(e.data),i.classes=new l(function(){i.state.get("rendered")&&(i.getEl().className=this.toString())}),i.classes.prefix=i.classPrefix,o=e.classes,o&&(i.Defaults&&(u=i.Defaults.classes,u&&o!=u&&n(u)),n(o)),t.each("title text name visible disabled active value".split(" "),function(t){t in e&&i[t](e[t])}),i.on("click",function(){if(i.disabled())return!1}),i.settings=e,i.borderBox=s.parseBox(e.border),i.paddingBox=s.parseBox(e.padding),i.marginBox=s.parseBox(e.margin),e.hidden&&i.hide()},Properties:"parent,name",getContainerElm:function(){return o.getContainer()},getParentCtrl:function(e){for(var t,n=this.getRoot().controlIdLookup;e&&n&&!(t=n[e.id]);)e=e.parentNode;return t},initLayoutRect:function(){var e=this,t=e.settings,n,r,i=e.getEl(),a,l,u,c,d,f,p,h;n=e.borderBox=e.borderBox||s.measureBox(i,"border"),e.paddingBox=e.paddingBox||s.measureBox(i,"padding"),e.marginBox=e.marginBox||s.measureBox(i,"margin"),h=o.getSize(i),f=t.minWidth,p=t.minHeight,u=f||h.width,c=p||h.height,a=t.width,l=t.height,d=t.autoResize,d="undefined"!=typeof d?d:!a&&!l,a=a||u,l=l||c;var m=n.left+n.right,g=n.top+n.bottom,v=t.maxWidth||65535,y=t.maxHeight||65535;return e._layoutRect=r={x:t.x||0,y:t.y||0,w:a,h:l,deltaW:m,deltaH:g,contentW:a-m,contentH:l-g,innerW:a-m,innerH:l-g,startMinWidth:f||0,startMinHeight:p||0,minW:Math.min(u,v),minH:Math.min(c,y),maxW:v,maxH:y,autoResize:d,scrollW:0},e._lastLayoutRect={},r},layoutRect:function(e){var t=this,n=t._layoutRect,r,i,o,a,s,l;return n||(n=t.initLayoutRect()),e?(o=n.deltaW,a=n.deltaH,e.x!==s&&(n.x=e.x),e.y!==s&&(n.y=e.y),e.minW!==s&&(n.minW=e.minW),e.minH!==s&&(n.minH=e.minH),i=e.w,i!==s&&(i=i<n.minW?n.minW:i,i=i>n.maxW?n.maxW:i,n.w=i,n.innerW=i-o),i=e.h,i!==s&&(i=i<n.minH?n.minH:i,i=i>n.maxH?n.maxH:i,n.h=i,n.innerH=i-a),i=e.innerW,i!==s&&(i=i<n.minW-o?n.minW-o:i,i=i>n.maxW-o?n.maxW-o:i,n.innerW=i,n.w=i+o),i=e.innerH,i!==s&&(i=i<n.minH-a?n.minH-a:i,i=i>n.maxH-a?n.maxH-a:i,n.innerH=i,n.h=i+a),e.contentW!==s&&(n.contentW=e.contentW),e.contentH!==s&&(n.contentH=e.contentH),r=t._lastLayoutRect,r.x===n.x&&r.y===n.y&&r.w===n.w&&r.h===n.h||(l=m.repaintControls,l&&l.map&&!l.map[t._id]&&(l.push(t),l.map[t._id]=!0),r.x=n.x,r.y=n.y,r.w=n.w,r.h=n.h),t):n},repaint:function(){var e=this,t,n,r,i,o,a,s,l,u,c;u=document.createRange?function(e){return e}:Math.round,t=e.getEl().style,i=e._layoutRect,l=e._lastRepaintRect||{},o=e.borderBox,a=o.left+o.right,s=o.top+o.bottom,i.x!==l.x&&(t.left=u(i.x)+"px",l.x=i.x),i.y!==l.y&&(t.top=u(i.y)+"px",l.y=i.y),i.w!==l.w&&(c=u(i.w-a),t.width=(c>=0?c:0)+"px",l.w=i.w),i.h!==l.h&&(c=u(i.h-s),t.height=(c>=0?c:0)+"px",l.h=i.h),e._hasBody&&i.innerW!==l.innerW&&(c=u(i.innerW),r=e.getEl("body"),r&&(n=r.style,n.width=(c>=0?c:0)+"px"),l.innerW=i.innerW),e._hasBody&&i.innerH!==l.innerH&&(c=u(i.innerH),r=r||e.getEl("body"),r&&(n=n||r.style,n.height=(c>=0?c:0)+"px"),l.innerH=i.innerH),e._lastRepaintRect=l,e.fire("repaint",{},!1)},updateLayoutRect:function(){var e=this;e.parent()._lastRect=null,o.css(e.getEl(),{width:"",height:""}),e._layoutRect=e._lastRepaintRect=e._lastLayoutRect=null,e.initLayoutRect()},on:function(e,t){function n(e){var t,n;return"string"!=typeof e?e:function(i){return t||r.parentsAndSelf().each(function(r){var i=r.settings.callbacks;if(i&&(t=i[e]))return n=r,!1}),t?t.call(n,i):(i.action=e,void this.fire("execute",i))}}var r=this;return c(r).on(e,n(t)),r},off:function(e,t){return c(this).off(e,t),this},fire:function(e,t,n){var r=this;if(t=t||{},t.control||(t.control=r),t=c(r).fire(e,t),n!==!1&&r.parent)for(var i=r.parent();i&&!t.isPropagationStopped();)i.fire(e,t,!1),i=i.parent();return t},hasEventListeners:function(e){return c(this).has(e)},parents:function(e){var t=this,n,r=new i;for(n=t.parent();n;n=n.parent())r.add(n);return e&&(r=r.filter(e)),r},parentsAndSelf:function(e){return new i(this).add(this.parents(e))},next:function(){var e=this.parent().items();return e[e.indexOf(this)+1]},prev:function(){var e=this.parent().items();return e[e.indexOf(this)-1]},innerHtml:function(e){return this.$el.html(e),this},getEl:function(e){var t=e?this._id+"-"+e:this._id;return this._elmCache[t]||(this._elmCache[t]=a("#"+t)[0]),this._elmCache[t]},show:function(){return this.visible(!0)},hide:function(){return this.visible(!1)},focus:function(){try{this.getEl().focus()}catch(e){}return this},blur:function(){return this.getEl().blur(),this},aria:function(e,t){var n=this,r=n.getEl(n.ariaTarget);return"undefined"==typeof t?n._aria[e]:(n._aria[e]=t,n.state.get("rendered")&&r.setAttribute("role"==e?e:"aria-"+e,t),n)},encode:function(e,t){return t!==!1&&(e=this.translate(e)),(e||"").replace(/[&<>"]/g,function(e){return"&#"+e.charCodeAt(0)+";"})},translate:function(e){return m.translate?m.translate(e):e},before:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t),!0),t},after:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t)),t},remove:function(){var e=this,t=e.getEl(),n=e.parent(),r,i;if(e.items){var o=e.items().toArray();for(i=o.length;i--;)o[i].remove()}n&&n.items&&(r=[],n.items().each(function(t){t!==e&&r.push(t)}),n.items().set(r),n._lastRect=null),e._eventsRoot&&e._eventsRoot==e&&a(t).off();var s=e.getRoot().controlIdLookup;return s&&delete s[e._id],t&&t.parentNode&&t.parentNode.removeChild(t),e.state.set("rendered",!1),e.state.destroy(),e.fire("remove"),e},renderBefore:function(e){return a(e).before(this.renderHtml()),this.postRender(),this},renderTo:function(e){return a(e||this.getContainerElm()).append(this.renderHtml()),this.postRender(),this},preRender:function(){},render:function(){},renderHtml:function(){return'<div id="'+this._id+'" class="'+this.classes+'"></div>'},postRender:function(){var e=this,t=e.settings,n,r,i,o,s;e.$el=a(e.getEl()),e.state.set("rendered",!0);for(o in t)0===o.indexOf("on")&&e.on(o.substr(2),t[o]);if(e._eventsRoot){for(i=e.parent();!s&&i;i=i.parent())s=i._eventsRoot;if(s)for(o in s._nativeEvents)e._nativeEvents[o]=!0}d(e),t.style&&(n=e.getEl(),n&&(n.setAttribute("style",t.style),n.style.cssText=t.style)),e.settings.border&&(r=e.borderBox,e.$el.css({"border-top-width":r.top,"border-right-width":r.right,"border-bottom-width":r.bottom,"border-left-width":r.left}));var l=e.getRoot();l.controlIdLookup||(l.controlIdLookup={}),l.controlIdLookup[e._id]=e;for(var c in e._aria)e.aria(c,e._aria[c]);e.state.get("visible")===!1&&(e.getEl().style.display="none"),e.bindStates(),e.state.on("change:visible",function(t){var n=t.value,r;e.state.get("rendered")&&(e.getEl().style.display=n===!1?"none":"",e.getEl().getBoundingClientRect()),r=e.parent(),r&&(r._lastRect=null),e.fire(n?"show":"hide"),u.add(e)}),e.fire("postrender",{},!1)},bindStates:function(){},scrollIntoView:function(e){function t(e,t){var n,r,i=e;for(n=r=0;i&&i!=t&&i.nodeType;)n+=i.offsetLeft||0,r+=i.offsetTop||0,i=i.offsetParent;return{x:n,y:r}}var n=this.getEl(),r=n.parentNode,i,o,a,s,l,u,c=t(n,r);return i=c.x,o=c.y,a=n.offsetWidth,s=n.offsetHeight,l=r.clientWidth,u=r.clientHeight,"end"==e?(i-=l-a,o-=u-s):"center"==e&&(i-=l/2-a/2,o-=u/2-s/2),r.scrollLeft=i,r.scrollTop=o,this},getRoot:function(){for(var e=this,t,n=[];e;){if(e.rootControl){t=e.rootControl;break}n.push(e),t=e,e=e.parent()}t||(t=this);for(var r=n.length;r--;)n[r].rootControl=t;return t},reflow:function(){u.remove(this);var e=this.parent();return e._layout&&!e._layout.isNative()&&e.reflow(),this}};return t.each("text title visible disabled active value".split(" "),function(e){v[e]=function(t){return 0===arguments.length?this.state.get(e):("undefined"!=typeof t&&this.state.set(e,t),this)}}),m=e.extend(v)}),r(we,[],function(){var e={},t;return{add:function(t,n){e[t.toLowerCase()]=n},has:function(t){return!!e[t.toLowerCase()]},create:function(n,r){var i,o,a;if(!t){a=tinymce.ui;for(o in a)e[o.toLowerCase()]=a[o];t=!0}if("string"==typeof n?(r=r||{},r.type=n):(r=n,n=r.type),n=n.toLowerCase(),i=e[n],!i)throw new Error("Could not find control by type: "+n);return i=new i(r),i.type=n,i}}}),r(Ee,[],function(){return function(e){function t(e){return e&&1===e.nodeType}function n(e){return e=e||C,t(e)?e.getAttribute("role"):null}function r(e){for(var t,r=e||C;r=r.parentNode;)if(t=n(r))return t}function i(e){var n=C;if(t(n))return n.getAttribute("aria-"+e)}function o(e){var t=e.tagName.toUpperCase();return"INPUT"==t||"TEXTAREA"==t||"SELECT"==t}function a(e){return!(!o(e)||e.hidden)||!!/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(n(e))}function s(e){function t(e){if(1==e.nodeType&&"none"!=e.style.display&&!e.disabled){a(e)&&n.push(e);for(var r=0;r<e.childNodes.length;r++)t(e.childNodes[r])}}var n=[];return t(e||b.getEl()),n}function l(e){var t,n;e=e||x,n=e.parents().toArray(),n.unshift(e);for(var r=0;r<n.length&&(t=n[r],!t.settings.ariaRoot);r++);return t}function u(e){var t=l(e),n=s(t.getEl());t.settings.ariaRemember&&"lastAriaIndex"in t?c(t.lastAriaIndex,n):c(0,n)}function c(e,t){return e<0?e=t.length-1:e>=t.length&&(e=0),t[e]&&t[e].focus(),e}function d(e,t){var n=-1,r=l();t=t||s(r.getEl());for(var i=0;i<t.length;i++)t[i]===C&&(n=i);n+=e,r.lastAriaIndex=c(n,t)}function f(){var e=r();"tablist"==e?d(-1,s(C.parentNode)):x.parent().submenu?v():d(-1)}function p(){var e=n(),t=r();"tablist"==t?d(1,s(C.parentNode)):"menuitem"==e&&"menu"==t&&i("haspopup")?y():d(1)}function h(){d(-1)}function m(){var e=n(),t=r();"menuitem"==e&&"menubar"==t?y():"button"==e&&i("haspopup")?y({key:"down"}):d(1)}function g(e){var t=r();if("tablist"==t){var n=s(x.getEl("body"))[0];n&&n.focus()}else d(e.shiftKey?-1:1)}function v(){x.fire("cancel")}function y(e){e=e||{},x.fire("click",{target:C,aria:e})}var b=e.root,C,x;try{C=document.activeElement}catch(w){C=document.body}return x=b.getParentCtrl(C),b.on("keydown",function(e){function t(e,t){o(C)||"slider"!==n(C)&&t(e)!==!1&&e.preventDefault()}if(!e.isDefaultPrevented())switch(e.keyCode){case 37:t(e,f);break;case 39:t(e,p);break;case 38:t(e,h);break;case 40:t(e,m);break;case 27:v();break;case 14:case 13:case 32:t(e,y);break;case 9:g(e)!==!1&&e.preventDefault()}}),b.on("focusin",function(e){C=e.target,x=e.control}),{focusFirst:u}}}),r(Ne,[xe,ge,me,we,Ee,m,g,be,Ce],function(e,t,n,r,i,o,a,s,l){var u={};return e.extend({init:function(e){var n=this;n._super(e),e=n.settings,e.fixed&&n.state.set("fixed",!0),n._items=new t,n.isRtl()&&n.classes.add("rtl"),n.bodyClasses=new s(function(){n.state.get("rendered")&&(n.getEl("body").className=this.toString())}),n.bodyClasses.prefix=n.classPrefix,n.classes.add("container"),n.bodyClasses.add("container-body"),e.containerCls&&n.classes.add(e.containerCls),n._layout=r.create((e.layout||"")+"layout"),n.settings.items?n.add(n.settings.items):n.add(n.render()),n._hasBody=!0},items:function(){return this._items},find:function(e){return e=u[e]=u[e]||new n(e),e.find(this)},add:function(e){var t=this;return t.items().add(t.create(e)).parent(t),t},focus:function(e){var t=this,n,r,i;return e&&(r=t.keyboardNav||t.parents().eq(-1)[0].keyboardNav)?void r.focusFirst(t):(i=t.find("*"),t.statusbar&&i.add(t.statusbar.items()),i.each(function(e){return e.settings.autofocus?(n=null,!1):void(e.canFocus&&(n=n||e))}),n&&n.focus(),t)},replace:function(e,t){for(var n,r=this.items(),i=r.length;i--;)if(r[i]===e){r[i]=t;break}i>=0&&(n=t.getEl(),n&&n.parentNode.removeChild(n),n=e.getEl(),n&&n.parentNode.removeChild(n)),t.parent(this)},create:function(t){var n=this,i,a=[];return o.isArray(t)||(t=[t]),o.each(t,function(t){t&&(t instanceof e||("string"==typeof t&&(t={type:t}),i=o.extend({},n.settings.defaults,t),t.type=i.type=i.type||t.type||n.settings.defaultType||(i.defaults?i.defaults.type:null),t=r.create(i)),a.push(t))}),a},renderNew:function(){var e=this;return e.items().each(function(t,n){var r;t.parent(e),t.state.get("rendered")||(r=e.getEl("body"),r.hasChildNodes()&&n<=r.childNodes.length-1?a(r.childNodes[n]).before(t.renderHtml()):a(r).append(t.renderHtml()),t.postRender(),l.add(t))}),e._layout.applyClasses(e.items().filter(":visible")),e._lastRect=null,e},append:function(e){return this.add(e).renderNew()},prepend:function(e){var t=this;return t.items().set(t.create(e).concat(t.items().toArray())),t.renderNew()},insert:function(e,t,n){var r=this,i,o,a;return e=r.create(e),i=r.items(),!n&&t<i.length-1&&(t+=1),t>=0&&t<i.length&&(o=i.slice(0,t).toArray(),a=i.slice(t).toArray(),i.set(o.concat(e,a))),r.renderNew()},fromJSON:function(e){var t=this;for(var n in e)t.find("#"+n).value(e[n]);return t},toJSON:function(){var e=this,t={};return e.find("*").each(function(e){var n=e.name(),r=e.value();n&&"undefined"!=typeof r&&(t[n]=r)}),t},renderHtml:function(){var e=this,t=e._layout,n=this.settings.role;return e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'"'+(n?' role="'+this.settings.role+'"':"")+'><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this,t;return e.items().exec("postRender"),e._super(),e._layout.postRender(e),e.state.set("rendered",!0),e.settings.style&&e.$el.css(e.settings.style),e.settings.border&&(t=e.borderBox,e.$el.css({"border-top-width":t.top,"border-right-width":t.right,"border-bottom-width":t.bottom,"border-left-width":t.left})),e.parent()||(e.keyboardNav=new i({root:e})),e},initLayoutRect:function(){var e=this,t=e._super();return e._layout.recalc(e),t},recalc:function(){var e=this,t=e._layoutRect,n=e._lastRect;if(!n||n.w!=t.w||n.h!=t.h)return e._layout.recalc(e),t=e.layoutRect(),e._lastRect={x:t.x,y:t.y,w:t.w,h:t.h},!0},reflow:function(){var t;if(l.remove(this),this.visible()){for(e.repaintControls=[],e.repaintControls.map={},this.recalc(),t=e.repaintControls.length;t--;)e.repaintControls[t].repaint();"flow"!==this.settings.layout&&"stack"!==this.settings.layout&&this.repaint(),e.repaintControls=[]}return this}})}),r(_e,[g],function(e){function t(e){var t,n,r,i,o,a,s,l,u=Math.max;return t=e.documentElement,n=e.body,r=u(t.scrollWidth,n.scrollWidth),i=u(t.clientWidth,n.clientWidth),o=u(t.offsetWidth,n.offsetWidth),a=u(t.scrollHeight,n.scrollHeight),s=u(t.clientHeight,n.clientHeight),l=u(t.offsetHeight,n.offsetHeight),{width:r<o?i:r,height:a<l?s:a}}function n(e){var t,n;if(e.changedTouches)for(t="screenX screenY pageX pageY clientX clientY".split(" "),n=0;n<t.length;n++)e[t[n]]=e.changedTouches[0][t[n]]}return function(r,i){function o(){return s.getElementById(i.handle||r)}var a,s=i.document||document,l,u,c,d,f,p;i=i||{},u=function(r){var u=t(s),h,m;n(r),r.preventDefault(),l=r.button,h=o(),f=r.screenX,p=r.screenY,m=window.getComputedStyle?window.getComputedStyle(h,null).getPropertyValue("cursor"):h.runtimeStyle.cursor,a=e("<div></div>").css({position:"absolute",top:0,left:0,width:u.width,height:u.height,zIndex:2147483647,opacity:1e-4,cursor:m}).appendTo(s.body),e(s).on("mousemove touchmove",d).on("mouseup touchend",c),i.start(r)},d=function(e){return n(e),e.button!==l?c(e):(e.deltaX=e.screenX-f,e.deltaY=e.screenY-p,e.preventDefault(),void i.drag(e))},c=function(t){n(t),e(s).off("mousemove touchmove",d).off("mouseup touchend",c),a.remove(),i.stop&&i.stop(t)},this.destroy=function(){e(o()).off()},e(o()).on("mousedown touchstart",u)}}),r(Se,[g,_e],function(e,t){return{init:function(){var e=this;e.on("repaint",e.renderScroll)},renderScroll:function(){function n(){function t(t,a,s,l,u,c){var d,f,p,h,m,g,v,y,b;if(f=i.getEl("scroll"+t)){if(y=a.toLowerCase(),b=s.toLowerCase(),e(i.getEl("absend")).css(y,i.layoutRect()[l]-1),!u)return void e(f).css("display","none");e(f).css("display","block"),d=i.getEl("body"),p=i.getEl("scroll"+t+"t"),h=d["client"+s]-2*o,h-=n&&r?f["client"+c]:0,m=d["scroll"+s],g=h/m,v={},v[y]=d["offset"+a]+o,v[b]=h,e(f).css(v),v={},v[y]=d["scroll"+a]*g,v[b]=h*g,e(p).css(v)}}var n,r,a;a=i.getEl("body"),n=a.scrollWidth>a.clientWidth,r=a.scrollHeight>a.clientHeight,t("h","Left","Width","contentW",n,"Height"),t("v","Top","Height","contentH",r,"Width")}function r(){function n(n,r,a,s,l){var u,c=i._id+"-scroll"+n,d=i.classPrefix;e(i.getEl()).append('<div id="'+c+'" class="'+d+"scrollbar "+d+"scrollbar-"+n+'"><div id="'+c+'t" class="'+d+'scrollbar-thumb"></div></div>'),i.draghelper=new t(c+"t",{start:function(){u=i.getEl("body")["scroll"+r],e("#"+c).addClass(d+"active")},drag:function(e){var t,c,d,f,p=i.layoutRect();c=p.contentW>p.innerW,d=p.contentH>p.innerH,f=i.getEl("body")["client"+a]-2*o,f-=c&&d?i.getEl("scroll"+n)["client"+l]:0,t=f/i.getEl("body")["scroll"+a],i.getEl("body")["scroll"+r]=u+e["delta"+s]/t},stop:function(){e("#"+c).removeClass(d+"active")}})}i.classes.add("scroll"),n("v","Top","Height","Y","Width"),n("h","Left","Width","X","Height")}var i=this,o=2;i.settings.autoScroll&&(i._hasScroll||(i._hasScroll=!0,r(),i.on("wheel",function(e){var t=i.getEl("body");t.scrollLeft+=10*(e.deltaX||0),t.scrollTop+=10*e.deltaY,n()}),e(i.getEl("body")).on("scroll",n)),n())}}}),r(ke,[Ne,Se],function(e,t){return e.extend({Defaults:{layout:"fit",containerCls:"panel"},Mixins:[t],renderHtml:function(){var e=this,t=e._layout,n=e.settings.html;return e.preRender(),t.preRender(e),"undefined"==typeof n?n='<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div>":("function"==typeof n&&(n=n.call(e)),e._hasBody=!1),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1" role="group">'+(e._preBodyHtml||"")+n+"</div>"}})}),r(Te,[ve],function(e){function t(t,n,r){var i,o,a,s,l,u,c,d,f,p;return f=e.getViewPort(),o=e.getPos(n),a=o.x,s=o.y,t.state.get("fixed")&&"static"==e.getRuntimeStyle(document.body,"position")&&(a-=f.x,s-=f.y),i=t.getEl(),p=e.getSize(i),l=p.width,u=p.height,p=e.getSize(n),c=p.width,d=p.height,r=(r||"").split(""),"b"===r[0]&&(s+=d),"r"===r[1]&&(a+=c),"c"===r[0]&&(s+=Math.round(d/2)),"c"===r[1]&&(a+=Math.round(c/2)),"b"===r[3]&&(s-=u),"r"===r[4]&&(a-=l),"c"===r[3]&&(s-=Math.round(u/2)),"c"===r[4]&&(a-=Math.round(l/2)),{x:a,y:s,w:l,h:u}}return{testMoveRel:function(n,r){for(var i=e.getViewPort(),o=0;o<r.length;o++){var a=t(this,n,r[o]);if(this.state.get("fixed")){if(a.x>0&&a.x+a.w<i.w&&a.y>0&&a.y+a.h<i.h)return r[o]}else if(a.x>i.x&&a.x+a.w<i.w+i.x&&a.y>i.y&&a.y+a.h<i.h+i.y)return r[o]}return r[0]},moveRel:function(e,n){"string"!=typeof n&&(n=this.testMoveRel(e,n));var r=t(this,e,n);return this.moveTo(r.x,r.y)},moveBy:function(e,t){var n=this,r=n.layoutRect();return n.moveTo(r.x+e,r.y+t),n},moveTo:function(t,n){function r(e,t,n){return e<0?0:e+n>t?(e=t-n,e<0?0:e):e}var i=this;if(i.settings.constrainToViewport){var o=e.getViewPort(window),a=i.layoutRect();t=r(t,o.w+o.x,a.w),n=r(n,o.h+o.y,a.h)}return i.state.get("rendered")?i.layoutRect({x:t,y:n}).repaint():(i.settings.x=t,i.settings.y=n),i.fire("move",{x:t,y:n}),i}}}),r(Re,[ve],function(e){return{resizeToContent:function(){this._layoutRect.autoResize=!0,this._lastRect=null,this.reflow()},resizeTo:function(t,n){if(t<=1||n<=1){var r=e.getWindowSize();t=t<=1?t*r.w:t,n=n<=1?n*r.h:n}return this._layoutRect.autoResize=!1,this.layoutRect({minW:t,minH:n,w:t,h:n}).reflow()},resizeBy:function(e,t){var n=this,r=n.layoutRect();return n.resizeTo(r.w+e,r.h+t)}}}),r(Ae,[ke,Te,Re,ve,g,c],function(e,t,n,r,i,o){function a(e,t){for(;e;){if(e==t)return!0;e=e.parent()}}function s(e){for(var t=v.length;t--;){var n=v[t],r=n.getParentCtrl(e.target);if(n.settings.autohide){if(r&&(a(r,n)||n.parent()===r))continue;e=n.fire("autohide",{target:e.target}),e.isDefaultPrevented()||n.hide()}}}function l(){h||(h=function(e){2!=e.button&&s(e)},i(document).on("click touchstart",h))}function u(){m||(m=function(){var e;for(e=v.length;e--;)d(v[e])},i(window).on("scroll",m))}function c(){if(!g){var e=document.documentElement,t=e.clientWidth,n=e.clientHeight;g=function(){document.all&&t==e.clientWidth&&n==e.clientHeight||(t=e.clientWidth,n=e.clientHeight,C.hideAll())},i(window).on("resize",g)}}function d(e){function t(t,n){for(var r,i=0;i<v.length;i++)if(v[i]!=e)for(r=v[i].parent();r&&(r=r.parent());)r==e&&v[i].fixed(t).moveBy(0,n).repaint()}var n=r.getViewPort().y;e.settings.autofix&&(e.state.get("fixed")?e._autoFixY>n&&(e.fixed(!1).layoutRect({y:e._autoFixY}).repaint(),t(!1,e._autoFixY-n)):(e._autoFixY=e.layoutRect().y,e._autoFixY<n&&(e.fixed(!0).layoutRect({y:0}).repaint(),t(!0,n-e._autoFixY))))}function f(e,t){var n,r=C.zIndex||65535,o;if(e)y.push(t);else for(n=y.length;n--;)y[n]===t&&y.splice(n,1);if(y.length)for(n=0;n<y.length;n++)y[n].modal&&(r++,o=y[n]),y[n].getEl().style.zIndex=r,y[n].zIndex=r,r++;var a=i("#"+t.classPrefix+"modal-block",t.getContainerElm())[0];o?i(a).css("z-index",o.zIndex-1):a&&(a.parentNode.removeChild(a),b=!1),C.currentZIndex=r}function p(e){var t;for(t=v.length;t--;)v[t]===e&&v.splice(t,1);for(t=y.length;t--;)y[t]===e&&y.splice(t,1)}var h,m,g,v=[],y=[],b,C=e.extend({Mixins:[t,n],init:function(e){var t=this;t._super(e),t._eventsRoot=t,t.classes.add("floatpanel"),e.autohide&&(l(),c(),v.push(t)),e.autofix&&(u(),t.on("move",function(){d(this)})),t.on("postrender show",function(e){if(e.control==t){var n,r=t.classPrefix;t.modal&&!b&&(n=i("#"+r+"modal-block",t.getContainerElm()),n[0]||(n=i('<div id="'+r+'modal-block" class="'+r+"reset "+r+'fade"></div>').appendTo(t.getContainerElm())),o.setTimeout(function(){n.addClass(r+"in"),i(t.getEl()).addClass(r+"in")}),b=!0),f(!0,t)}}),t.on("show",function(){t.parents().each(function(e){if(e.state.get("fixed"))return t.fixed(!0),!1})}),e.popover&&(t._preBodyHtml='<div class="'+t.classPrefix+'arrow"></div>',t.classes.add("popover").add("bottom").add(t.isRtl()?"end":"start")),t.aria("label",e.ariaLabel),t.aria("labelledby",t._id),t.aria("describedby",t.describedBy||t._id+"-none")},fixed:function(e){var t=this;if(t.state.get("fixed")!=e){if(t.state.get("rendered")){var n=r.getViewPort();e?t.layoutRect().y-=n.y:t.layoutRect().y+=n.y}t.classes.toggle("fixed",e),t.state.set("fixed",e)}return t},show:function(){var e=this,t,n=e._super();for(t=v.length;t--&&v[t]!==e;);return t===-1&&v.push(e),n},hide:function(){return p(this),f(!1,this),this._super()},hideAll:function(){C.hideAll()},close:function(){var e=this;return e.fire("close").isDefaultPrevented()||(e.remove(),f(!1,e)),e},remove:function(){p(this),this._super()},postRender:function(){var e=this;return e.settings.bodyRole&&this.getEl("body").setAttribute("role",e.settings.bodyRole),e._super()}});return C.hideAll=function(){for(var e=v.length;e--;){var t=v[e];t&&t.settings.autohide&&(t.hide(),v.splice(e,1))}},C}),r(Be,[Ae,ke,ve,g,_e,ye,d,c],function(e,t,n,r,i,o,a,s){function l(e){var t="width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0",n=r("meta[name=viewport]")[0],i;a.overrideViewPort!==!1&&(n||(n=document.createElement("meta"),n.setAttribute("name","viewport"),document.getElementsByTagName("head")[0].appendChild(n)),i=n.getAttribute("content"),i&&"undefined"!=typeof p&&(p=i),n.setAttribute("content",e?t:p))}function u(e,t){c()&&t===!1&&r([document.documentElement,document.body]).removeClass(e+"fullscreen")}function c(){for(var e=0;e<f.length;e++)if(f[e]._fullscreen)return!0;return!1}function d(){function e(){var e,t=n.getWindowSize(),r;for(e=0;e<f.length;e++)r=f[e].layoutRect(),f[e].moveTo(f[e].settings.x||Math.max(0,t.w/2-r.w/2),f[e].settings.y||Math.max(0,t.h/2-r.h/2))}if(!a.desktop){var t={w:window.innerWidth,h:window.innerHeight};s.setInterval(function(){var e=window.innerWidth,n=window.innerHeight;t.w==e&&t.h==n||(t={w:e,h:n},r(window).trigger("resize"))},100)}r(window).on("resize",e)}var f=[],p="",h=e.extend({modal:!0,Defaults:{border:1,layout:"flex",containerCls:"panel",role:"dialog",callbacks:{submit:function(){this.fire("submit",{data:this.toJSON()})},close:function(){this.close()}}},init:function(e){var r=this;r._super(e),r.isRtl()&&r.classes.add("rtl"),r.classes.add("window"),r.bodyClasses.add("window-body"),r.state.set("fixed",!0),e.buttons&&(r.statusbar=new t({layout:"flex",border:"1 0 0 0",spacing:3,padding:10,align:"center",pack:r.isRtl()?"start":"end",defaults:{type:"button"},items:e.buttons}),r.statusbar.classes.add("foot"),r.statusbar.parent(r)),r.on("click",function(e){var t=r.classPrefix+"close";(n.hasClass(e.target,t)||n.hasClass(e.target.parentNode,t))&&r.close()}),r.on("cancel",function(){r.close()}),r.aria("describedby",r.describedBy||r._id+"-none"),r.aria("label",e.title),r._fullscreen=!1},recalc:function(){var e=this,t=e.statusbar,r,i,o,a;e._fullscreen&&(e.layoutRect(n.getWindowSize()),e.layoutRect().contentH=e.layoutRect().innerH),e._super(),r=e.layoutRect(),e.settings.title&&!e._fullscreen&&(i=r.headerW,i>r.w&&(o=r.x-Math.max(0,i/2),e.layoutRect({w:i,x:o}),a=!0)),t&&(t.layoutRect({w:e.layoutRect().innerW}).recalc(),i=t.layoutRect().minW+r.deltaW,i>r.w&&(o=r.x-Math.max(0,i-r.w),e.layoutRect({w:i,x:o}),a=!0)),a&&e.recalc()},initLayoutRect:function(){var e=this,t=e._super(),r=0,i;if(e.settings.title&&!e._fullscreen){i=e.getEl("head");var o=n.getSize(i);t.headerW=o.width,t.headerH=o.height,r+=t.headerH}e.statusbar&&(r+=e.statusbar.layoutRect().h),t.deltaH+=r,t.minH+=r,t.h+=r;var a=n.getWindowSize();return t.x=e.settings.x||Math.max(0,a.w/2-t.w/2),t.y=e.settings.y||Math.max(0,a.h/2-t.h/2),t},renderHtml:function(){var e=this,t=e._layout,n=e._id,r=e.classPrefix,i=e.settings,o="",a="",s=i.html;return e.preRender(),t.preRender(e),i.title&&(o='<div id="'+n+'-head" class="'+r+'window-head"><div id="'+n+'-title" class="'+r+'title">'+e.encode(i.title)+'</div><div id="'+n+'-dragh" class="'+r+'dragh"></div><button type="button" class="'+r+'close" aria-hidden="true"><i class="mce-ico mce-i-remove"></i></button></div>'),i.url&&(s='<iframe src="'+i.url+'" tabindex="-1"></iframe>'),"undefined"==typeof s&&(s=t.renderHtml(e)),e.statusbar&&(a=e.statusbar.renderHtml()),'<div id="'+n+'" class="'+e.classes+'" hidefocus="1"><div class="'+e.classPrefix+'reset" role="application">'+o+'<div id="'+n+'-body" class="'+e.bodyClasses+'">'+s+"</div>"+a+"</div></div>"},fullscreen:function(e){var t=this,i=document.documentElement,a,l=t.classPrefix,u;if(e!=t._fullscreen)if(r(window).on("resize",function(){var e;if(t._fullscreen)if(a)t._timer||(t._timer=s.setTimeout(function(){var e=n.getWindowSize();t.moveTo(0,0).resizeTo(e.w,e.h),t._timer=0},50));else{e=(new Date).getTime();var r=n.getWindowSize();t.moveTo(0,0).resizeTo(r.w,r.h),(new Date).getTime()-e>50&&(a=!0)}}),u=t.layoutRect(),t._fullscreen=e,e){t._initial={x:u.x,y:u.y,w:u.w,h:u.h},t.borderBox=o.parseBox("0"),t.getEl("head").style.display="none",u.deltaH-=u.headerH+2,r([i,document.body]).addClass(l+"fullscreen"),t.classes.add("fullscreen");var c=n.getWindowSize();t.moveTo(0,0).resizeTo(c.w,c.h)}else t.borderBox=o.parseBox(t.settings.border),t.getEl("head").style.display="",u.deltaH+=u.headerH,r([i,document.body]).removeClass(l+"fullscreen"),t.classes.remove("fullscreen"),t.moveTo(t._initial.x,t._initial.y).resizeTo(t._initial.w,t._initial.h);return t.reflow()},postRender:function(){var e=this,t;setTimeout(function(){e.classes.add("in"),e.fire("open")},0),e._super(),e.statusbar&&e.statusbar.postRender(),e.focus(),this.dragHelper=new i(e._id+"-dragh",{start:function(){t={x:e.layoutRect().x,y:e.layoutRect().y}},drag:function(n){e.moveTo(t.x+n.deltaX,t.y+n.deltaY)}}),e.on("submit",function(t){t.isDefaultPrevented()||e.close()}),f.push(e),l(!0)},submit:function(){return this.fire("submit",{data:this.toJSON()})},remove:function(){var e=this,t;for(e.dragHelper.destroy(),e._super(),e.statusbar&&this.statusbar.remove(),u(e.classPrefix,!1),t=f.length;t--;)f[t]===e&&f.splice(t,1);l(f.length>0)},getContentWindow:function(){var e=this.getEl().getElementsByTagName("iframe")[0];return e?e.contentWindow:null}});return d(),h}),r(De,[Be],function(e){var t=e.extend({init:function(e){e={border:1,padding:20,layout:"flex",pack:"center",align:"center",containerCls:"panel",autoScroll:!0,buttons:{type:"button",text:"Ok",action:"ok"},items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200}},this._super(e)},Statics:{OK:1,OK_CANCEL:2,YES_NO:3,YES_NO_CANCEL:4,msgBox:function(n){function r(e,t,n){return{type:"button",text:e,subtype:n?"primary":"",onClick:function(e){e.control.parents()[1].close(),o(t)}}}var i,o=n.callback||function(){};
switch(n.buttons){case t.OK_CANCEL:i=[r("Ok",!0,!0),r("Cancel",!1)];break;case t.YES_NO:case t.YES_NO_CANCEL:i=[r("Yes",1,!0),r("No",0)],n.buttons==t.YES_NO_CANCEL&&i.push(r("Cancel",-1));break;default:i=[r("Ok",!0,!0)]}return new e({padding:20,x:n.x,y:n.y,minWidth:300,minHeight:100,layout:"flex",pack:"center",align:"center",buttons:i,title:n.title,role:"alertdialog",items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200,text:n.text},onPostRender:function(){this.aria("describedby",this.items()[0]._id)},onClose:n.onClose,onCancel:function(){o(!1)}}).renderTo(document.body).reflow()},alert:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,t.msgBox(e)},confirm:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,e.buttons=t.OK_CANCEL,t.msgBox(e)}}});return t}),r(Le,[Be,De],function(e,t){return function(n){function r(){if(s.length)return s[s.length-1]}function i(e){n.fire("OpenWindow",{win:e})}function o(e){n.fire("CloseWindow",{win:e})}var a=this,s=[];a.windows=s,n.on("remove",function(){for(var e=s.length;e--;)s[e].close()}),a.open=function(t,r){var a;return n.editorManager.setActive(n),t.title=t.title||" ",t.url=t.url||t.file,t.url&&(t.width=parseInt(t.width||320,10),t.height=parseInt(t.height||240,10)),t.body&&(t.items={defaults:t.defaults,type:t.bodyType||"form",items:t.body,data:t.data,callbacks:t.commands}),t.url||t.buttons||(t.buttons=[{text:"Ok",subtype:"primary",onclick:function(){a.find("form")[0].submit()}},{text:"Cancel",onclick:function(){a.close()}}]),a=new e(t),s.push(a),a.on("close",function(){for(var e=s.length;e--;)s[e]===a&&s.splice(e,1);s.length||n.focus(),o(a)}),t.data&&a.on("postRender",function(){this.find("*").each(function(e){var n=e.name();n in t.data&&e.value(t.data[n])})}),a.features=t||{},a.params=r||{},1===s.length&&n.nodeChanged(),a=a.renderTo().reflow(),i(a),a},a.alert=function(e,r,a){var s;s=t.alert(e,function(){r?r.call(a||this):n.focus()}),s.on("close",function(){o(s)}),i(s)},a.confirm=function(e,n,r){var a;a=t.confirm(e,function(e){n.call(r||this,e)}),a.on("close",function(){o(a)}),i(a)},a.close=function(){r()&&r().close()},a.getParams=function(){return r()?r().params:null},a.setParams=function(e){r()&&(r().params=e)},a.getWindows=function(){return s}}}),r(Me,[xe,Te],function(e,t){return e.extend({Mixins:[t],Defaults:{classes:"widget tooltip tooltip-n"},renderHtml:function(){var e=this,t=e.classPrefix;return'<div id="'+e._id+'" class="'+e.classes+'" role="presentation"><div class="'+t+'tooltip-arrow"></div><div class="'+t+'tooltip-inner">'+e.encode(e.state.get("text"))+"</div></div>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl().lastChild.innerHTML=e.encode(t.value)}),e._super()},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=131070}})}),r(Pe,[xe,Me],function(e,t){var n,r=e.extend({init:function(e){var t=this;t._super(e),e=t.settings,t.canFocus=!0,e.tooltip&&r.tooltips!==!1&&(t.on("mouseenter",function(n){var r=t.tooltip().moveTo(-65535);if(n.control==t){var i=r.text(e.tooltip).show().testMoveRel(t.getEl(),["bc-tc","bc-tl","bc-tr"]);r.classes.toggle("tooltip-n","bc-tc"==i),r.classes.toggle("tooltip-nw","bc-tl"==i),r.classes.toggle("tooltip-ne","bc-tr"==i),r.moveRel(t.getEl(),i)}else r.hide()}),t.on("mouseleave mousedown click",function(){t.tooltip().hide()})),t.aria("label",e.ariaLabel||e.tooltip)},tooltip:function(){return n||(n=new t({type:"tooltip"}),n.renderTo()),n},postRender:function(){var e=this,t=e.settings;e._super(),e.parent()||!t.width&&!t.height||(e.initLayoutRect(),e.repaint()),t.autofocus&&e.focus()},bindStates:function(){function e(e){n.aria("disabled",e),n.classes.toggle("disabled",e)}function t(e){n.aria("pressed",e),n.classes.toggle("active",e)}var n=this;return n.state.on("change:disabled",function(t){e(t.value)}),n.state.on("change:active",function(e){t(e.value)}),n.state.get("disabled")&&e(!0),n.state.get("active")&&t(!0),n._super()},remove:function(){this._super(),n&&(n.remove(),n=null)}});return r}),r(Oe,[Pe],function(e){return e.extend({Defaults:{value:0},init:function(e){var t=this;t._super(e),t.classes.add("progress"),t.settings.filter||(t.settings.filter=function(e){return Math.round(e)})},renderHtml:function(){var e=this,t=e._id,n=this.classPrefix;return'<div id="'+t+'" class="'+e.classes+'"><div class="'+n+'bar-container"><div class="'+n+'bar"></div></div><div class="'+n+'text">0%</div></div>'},postRender:function(){var e=this;return e._super(),e.value(e.settings.value),e},bindStates:function(){function e(e){e=t.settings.filter(e),t.getEl().lastChild.innerHTML=e+"%",t.getEl().firstChild.firstChild.style.width=e+"%"}var t=this;return t.state.on("change:value",function(t){e(t.value)}),e(t.state.get("value")),t._super()}})}),r(He,[xe,Te,Oe,c],function(e,t,n,r){return e.extend({Mixins:[t],Defaults:{classes:"widget notification"},init:function(e){var t=this;t._super(e),e.text&&t.text(e.text),e.icon&&(t.icon=e.icon),e.color&&(t.color=e.color),e.type&&t.classes.add("notification-"+e.type),e.timeout&&(e.timeout<0||e.timeout>0)&&!e.closeButton?t.closeButton=!1:(t.classes.add("has-close"),t.closeButton=!0),e.progressBar&&(t.progressBar=new n),t.on("click",function(e){e.target.className.indexOf(t.classPrefix+"close")!=-1&&t.close()})},renderHtml:function(){var e=this,t=e.classPrefix,n="",r="",i="",o="";return e.icon&&(n='<i class="'+t+"ico "+t+"i-"+e.icon+'"></i>'),e.color&&(o=' style="background-color: '+e.color+'"'),e.closeButton&&(r='<button type="button" class="'+t+'close" aria-hidden="true">\xd7</button>'),e.progressBar&&(i=e.progressBar.renderHtml()),'<div id="'+e._id+'" class="'+e.classes+'"'+o+' role="presentation">'+n+'<div class="'+t+'notification-inner">'+e.state.get("text")+"</div>"+i+r+"</div>"},postRender:function(){var e=this;return r.setTimeout(function(){e.$el.addClass(e.classPrefix+"in")}),e._super()},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl().childNodes[1].innerHTML=t.value}),e.progressBar&&e.progressBar.bindStates(),e._super()},close:function(){var e=this;return e.fire("close").isDefaultPrevented()||e.remove(),e},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=65534}})}),r(Ie,[He,c,m],function(e,t,n){return function(r){function i(){if(f.length)return f[f.length-1]}function o(){t.requestAnimationFrame(function(){a(),s()})}function a(){for(var e=0;e<f.length;e++)f[e].moveTo(0,0)}function s(){if(f.length>0){var e=f.slice(0,1)[0],t=r.inline?r.getElement():r.getContentAreaContainer();if(e.moveRel(t,"tc-tc"),f.length>1)for(var n=1;n<f.length;n++)f[n].moveRel(f[n-1].getEl(),"bc-tc")}}function l(e,t){if(!c(t))return null;var r=n.grep(e,function(e){return u(t,e)});return 0===r.length?null:r[0]}function u(e,t){return e.type===t.settings.type&&e.text===t.settings.text}function c(e){return!e.progressBar&&!e.timeout}var d=this,f=[];d.notifications=f,r.on("remove",function(){for(var e=f.length;e--;)f[e].close()}),r.on("ResizeEditor",s),r.on("ResizeWindow",o),d.open=function(t){if(!r.removed){var n;r.editorManager.setActive(r);var i=l(f,t);return null===i?(n=new e(t),f.push(n),t.timeout>0&&(n.timer=setTimeout(function(){n.close()},t.timeout)),n.on("close",function(){var e=f.length;for(n.timer&&r.getWin().clearTimeout(n.timer);e--;)f[e]===n&&f.splice(e,1);s()}),n.renderTo(),s()):n=i,n}},d.close=function(){i()&&i().close()},d.getNotifications=function(){return f},r.on("SkinLoaded",function(){var e=r.settings.service_message;e&&r.notificationManager.open({text:e,type:"warning",timeout:0,icon:""})})}}),r(Fe,[w],function(e){function t(t,n,r){for(var i=[];n&&n!=t;n=n.parentNode)i.push(e.nodeIndex(n,r));return i}function n(e,t){var n,r,i;for(r=e,n=t.length-1;n>=0;n--){if(i=r.childNodes,t[n]>i.length-1)return null;r=i[t[n]]}return r}return{create:t,resolve:n}}),r(ze,[I,T,y,Fe,A,C,d,m,c,k,$,oe],function(e,t,n,r,i,o,a,s,l,u,c,d){return function(f){function p(e,t){try{f.getDoc().execCommand(e,!1,t)}catch(n){}}function h(){var e=f.getDoc().documentMode;return e?e:6}function m(e){return e.isDefaultPrevented()}function g(e){var t,n;e.dataTransfer&&(f.selection.isCollapsed()&&"IMG"==e.target.tagName&&re.select(e.target),t=f.selection.getContent(),t.length>0&&(n=ce+escape(f.id)+","+escape(t),e.dataTransfer.setData(de,n)))}function v(e){var t;return e.dataTransfer&&(t=e.dataTransfer.getData(de),t&&t.indexOf(ce)>=0)?(t=t.substr(ce.length).split(","),{id:unescape(t[0]),html:unescape(t[1])}):null}function y(e){f.queryCommandSupported("mceInsertClipboardContent")?f.execCommand("mceInsertClipboardContent",!1,{content:e}):f.execCommand("mceInsertContent",!1,e)}function b(){function i(e){var t=x.schema.getBlockElements(),n=f.getBody();if("BR"!=e.nodeName)return!1;for(;e!=n&&!t[e.nodeName];e=e.parentNode)if(e.nextSibling)return!1;return!0}function o(e,t){var n;for(n=e.nextSibling;n&&n!=t;n=n.nextSibling)if((3!=n.nodeType||0!==Z.trim(n.data).length)&&n!==t)return!1;return n===t}function a(e,t,r){var o,a,s;if(x.isChildOf(e,f.getBody()))for(s=x.schema.getNonEmptyElements(),o=new n(r||e,e);a=o[t?"next":"prev"]();){if(s[a.nodeName]&&!i(a))return a;if(3==a.nodeType&&a.data.length>0)return a}}function u(e){var n,r,i,o,s;if(!e.collapsed&&(n=x.getParent(t.getNode(e.startContainer,e.startOffset),x.isBlock),r=x.getParent(t.getNode(e.endContainer,e.endOffset),x.isBlock),s=f.schema.getTextBlockElements(),n!=r&&s[n.nodeName]&&s[r.nodeName]&&"false"!==x.getContentEditable(n)&&"false"!==x.getContentEditable(r)))return e.deleteContents(),i=a(n,!1),o=a(r,!0),x.isEmpty(r)||Z(n).append(r.childNodes),Z(r).remove(),i?1==i.nodeType?"BR"==i.nodeName?(e.setStartBefore(i),e.setEndBefore(i)):(e.setStartAfter(i),e.setEndAfter(i)):(e.setStart(i,i.data.length),e.setEnd(i,i.data.length)):o&&(1==o.nodeType?(e.setStartBefore(o),e.setEndBefore(o)):(e.setStart(o,0),e.setEnd(o,0))),w.setRng(e),!0}function c(e,n){var r,i,s,l,u,c;if(!e.collapsed)return e;if(u=e.startContainer,c=e.startOffset,3==u.nodeType)if(n){if(c<u.data.length)return e}else if(c>0)return e;r=t.getNode(u,c),s=x.getParent(r,x.isBlock),i=a(f.getBody(),n,r),l=x.getParent(i,x.isBlock);var d=1===u.nodeType&&c>u.childNodes.length-1;if(!r||!i)return e;if(l&&s!=l)if(n){if(!o(s,l))return e;1==r.nodeType?"BR"==r.nodeName?e.setStartBefore(r):e.setStartAfter(r):e.setStart(r,r.data.length),1==i.nodeType?e.setEnd(i,0):e.setEndBefore(i)}else{if(!o(l,s))return e;1==i.nodeType?"BR"==i.nodeName?e.setStartBefore(i):e.setStartAfter(i):e.setStart(i,i.data.length),1==r.nodeType&&d?e.setEndAfter(r):e.setEndBefore(r)}return e}function d(e){var t=w.getRng();if(t=c(t,e),u(t))return!0}function p(e,t){function n(e,n){return m=Z(n).parents().filter(function(e,t){return!!f.schema.getTextInlineElements()[t.nodeName]}),l=e.cloneNode(!1),m=s.map(m,function(e){return e=e.cloneNode(!1),l.hasChildNodes()?(e.appendChild(l.firstChild),l.appendChild(e)):l.appendChild(e),l.appendChild(e),e}),m.length?(h=x.create("br"),m[0].appendChild(h),x.replace(l,e),t.setStartBefore(h),t.setEndBefore(h),f.selection.setRng(t),h):null}function i(e){return e&&f.schema.getTextBlockElements()[e.tagName]}var o,a,l,u,c,d,p,h,m;if(t.collapsed&&(d=t.startContainer,p=t.startOffset,a=x.getParent(d,x.isBlock),i(a)))if(1==d.nodeType){if(d=d.childNodes[p],d&&"BR"!=d.tagName)return;if(c=e?a.nextSibling:a.previousSibling,x.isEmpty(a)&&i(c)&&x.isEmpty(c)&&n(a,d))return x.remove(c),!0}else if(3==d.nodeType){if(o=r.create(a,d),u=a.cloneNode(!0),d=r.resolve(u,o),e){if(p>=d.data.length)return;d.deleteData(p,1)}else{if(p<=0)return;d.deleteData(p-1,1)}if(x.isEmpty(u))return n(a,d)}}function h(e){var t,n,r;d(e)||(s.each(f.getBody().getElementsByTagName("*"),function(e){"SPAN"==e.tagName&&e.setAttribute("mce-data-marked",1),!e.hasAttribute("data-mce-style")&&e.hasAttribute("style")&&f.dom.setAttrib(e,"style",f.dom.getAttrib(e,"style"))}),t=new E(function(){}),t.observe(f.getDoc(),{childList:!0,attributes:!0,subtree:!0,attributeFilter:["style"]}),f.getDoc().execCommand(e?"ForwardDelete":"Delete",!1,null),n=f.selection.getRng(),r=n.startContainer.parentNode,s.each(t.takeRecords(),function(e){if(x.isChildOf(e.target,f.getBody())){if("style"==e.attributeName){var t=e.target.getAttribute("data-mce-style");t?e.target.setAttribute("style",t):e.target.removeAttribute("style")}s.each(e.addedNodes,function(e){if("SPAN"==e.nodeName&&!e.getAttribute("mce-data-marked")){var t,i;e==r&&(t=n.startOffset,i=e.firstChild),x.remove(e,!0),i&&(n.setStart(i,t),n.setEnd(i,t),f.selection.setRng(n))}})}}),t.disconnect(),s.each(f.dom.select("span[mce-data-marked]"),function(e){e.removeAttribute("mce-data-marked")}))}function b(e){f.undoManager.transact(function(){h(e)})}var C=f.getDoc(),x=f.dom,w=f.selection,E=window.MutationObserver,N,_;E||(N=!0,E=function(){function e(e){var t=e.relatedNode||e.target;n.push({target:t,addedNodes:[t]})}function t(e){var t=e.relatedNode||e.target;n.push({target:t,attributeName:e.attrName})}var n=[],r;this.observe=function(n){r=n,r.addEventListener("DOMSubtreeModified",e,!1),r.addEventListener("DOMNodeInsertedIntoDocument",e,!1),r.addEventListener("DOMNodeInserted",e,!1),r.addEventListener("DOMAttrModified",t,!1)},this.disconnect=function(){r.removeEventListener("DOMSubtreeModified",e,!1),r.removeEventListener("DOMNodeInsertedIntoDocument",e,!1),r.removeEventListener("DOMNodeInserted",e,!1),r.removeEventListener("DOMAttrModified",t,!1)},this.takeRecords=function(){return n}}),f.on("keydown",function(e){var t=e.keyCode==te,n=e.ctrlKey||e.metaKey;if(!m(e)&&(t||e.keyCode==ee)){var r=f.selection.getRng(),i=r.startContainer,o=r.startOffset;if(t&&e.shiftKey)return;if(p(t,r))return void e.preventDefault();if(!n&&r.collapsed&&3==i.nodeType&&(t?o<i.data.length:o>0))return;e.preventDefault(),n&&f.selection.getSel().modify("extend",t?"forward":"backward",e.metaKey?"lineboundary":"word"),h(t)}}),f.on("keypress",function(t){if(!m(t)&&!w.isCollapsed()&&t.charCode>31&&!e.metaKeyPressed(t)){var n,r,i,o,a,s;n=f.selection.getRng(),s=String.fromCharCode(t.charCode),t.preventDefault(),r=Z(n.startContainer).parents().filter(function(e,t){return!!f.schema.getTextInlineElements()[t.nodeName]}),h(!0),r=r.filter(function(e,t){return!Z.contains(f.getBody(),t)}),r.length?(i=x.createFragment(),r.each(function(e,t){t=t.cloneNode(!1),i.hasChildNodes()?(t.appendChild(i.firstChild),i.appendChild(t)):(a=t,i.appendChild(t)),i.appendChild(t)}),a.appendChild(f.getDoc().createTextNode(s)),o=x.getParent(n.startContainer,x.isBlock),x.isEmpty(o)?Z(o).empty().append(i):n.insertNode(i),n.setStart(a.firstChild,1),n.setEnd(a.firstChild,1),f.selection.setRng(n)):f.selection.setContent(s)}}),f.addCommand("Delete",function(){h()}),f.addCommand("ForwardDelete",function(){h(!0)}),N||(f.on("dragstart",function(e){_=w.getRng(),g(e)}),f.on("drop",function(e){if(!m(e)){var n=v(e);n&&(e.preventDefault(),l.setEditorTimeout(f,function(){var r=t.getCaretRangeFromPoint(e.x,e.y,C);_&&(w.setRng(_),_=null,b()),w.setRng(r),y(n.html)}))}}),f.on("cut",function(e){m(e)||!e.clipboardData||f.selection.isCollapsed()||(e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData("text/html",f.selection.getContent()),e.clipboardData.setData("text/plain",f.selection.getContent({format:"text"})),l.setEditorTimeout(f,function(){b(!0)}))}))}function C(){function e(e){var t=ne.create("body"),n=e.cloneContents();return t.appendChild(n),re.serializer.serialize(t,{format:"html"})}function n(n){if(!n.setStart){if(n.item)return!1;var r=n.duplicate();return r.moveToElementText(f.getBody()),t.compareRanges(n,r)}var i=e(n),o=ne.createRng();o.selectNode(f.getBody());var a=e(o);return i===a}f.on("keydown",function(e){var t=e.keyCode,r,i;if(!m(e)&&(t==te||t==ee)){if(r=f.selection.isCollapsed(),i=f.getBody(),r&&!ne.isEmpty(i))return;if(!r&&!n(f.selection.getRng()))return;e.preventDefault(),f.setContent(""),i.firstChild&&ne.isBlock(i.firstChild)?f.selection.setCursorLocation(i.firstChild,0):f.selection.setCursorLocation(i,0),f.nodeChanged()}})}function x(){f.shortcuts.add("meta+a",null,"SelectAll")}function w(){f.settings.content_editable||ne.bind(f.getDoc(),"mousedown mouseup",function(e){var t;if(e.target==f.getDoc().documentElement)if(t=re.getRng(),f.getBody().focus(),"mousedown"==e.type){if(u.isCaretContainer(t.startContainer))return;re.placeCaretAt(e.clientX,e.clientY)}else re.setRng(t)})}function E(){f.on("keydown",function(e){if(!m(e)&&e.keyCode===ee){if(!f.getBody().getElementsByTagName("hr").length)return;if(re.isCollapsed()&&0===re.getRng(!0).startOffset){var t=re.getNode(),n=t.previousSibling;if("HR"==t.nodeName)return ne.remove(t),void e.preventDefault();n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(ne.remove(n),e.preventDefault())}}})}function N(){window.Range.prototype.getClientRects||f.on("mousedown",function(e){if(!m(e)&&"HTML"===e.target.nodeName){var t=f.getBody();t.blur(),l.setEditorTimeout(f,function(){t.focus()})}})}function _(){f.on("click",function(e){var t=e.target;/^(IMG|HR)$/.test(t.nodeName)&&"false"!==ne.getContentEditableParent(t)&&(e.preventDefault(),re.select(t),f.nodeChanged()),"A"==t.nodeName&&ne.hasClass(t,"mce-item-anchor")&&(e.preventDefault(),re.select(t))})}function S(){function e(){var e=ne.getAttribs(re.getStart().cloneNode(!1));return function(){var t=re.getStart();t!==f.getBody()&&(ne.setAttrib(t,"style",null),Q(e,function(e){t.setAttributeNode(e.cloneNode(!0))}))}}function t(){return!re.isCollapsed()&&ne.getParent(re.getStart(),ne.isBlock)!=ne.getParent(re.getEnd(),ne.isBlock)}f.on("keypress",function(n){var r;if(!m(n)&&(8==n.keyCode||46==n.keyCode)&&t())return r=e(),f.getDoc().execCommand("delete",!1,null),r(),n.preventDefault(),!1}),ne.bind(f.getDoc(),"cut",function(n){var r;!m(n)&&t()&&(r=e(),l.setEditorTimeout(f,function(){r()}))})}function k(){document.body.setAttribute("role","application")}function T(){f.on("keydown",function(e){if(!m(e)&&e.keyCode===ee&&re.isCollapsed()&&0===re.getRng(!0).startOffset){var t=re.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}})}function R(){h()>7||(p("RespectVisibilityInDesign",!0),f.contentStyles.push(".mceHideBrInPre pre br {display: none}"),ne.addClass(f.getBody(),"mceHideBrInPre"),oe.addNodeFilter("pre",function(e){for(var t=e.length,n,r,o,a;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)o=n[r],a=o.prev,a&&3===a.type&&"\n"!=a.value.charAt(a.value-1)?a.value+="\n":o.parent.insert(new i("#text",3),o,!0).value="\n"}),ae.addNodeFilter("pre",function(e){for(var t=e.length,n,r,i,o;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)i=n[r],o=i.prev,o&&3==o.type&&(o.value=o.value.replace(/\r?\n$/,""))}))}function A(){ne.bind(f.getBody(),"mouseup",function(){var e,t=re.getNode();"IMG"==t.nodeName&&((e=ne.getStyle(t,"width"))&&(ne.setAttrib(t,"width",e.replace(/[^0-9%]+/g,"")),ne.setStyle(t,"width","")),(e=ne.getStyle(t,"height"))&&(ne.setAttrib(t,"height",e.replace(/[^0-9%]+/g,"")),ne.setStyle(t,"height","")))})}function B(){f.on("keydown",function(t){var n,r,i,o,a;if(!m(t)&&t.keyCode==e.BACKSPACE&&(n=re.getRng(),r=n.startContainer,i=n.startOffset,o=ne.getRoot(),a=r,n.collapsed&&0===i)){for(;a&&a.parentNode&&a.parentNode.firstChild==a&&a.parentNode!=o;)a=a.parentNode;"BLOCKQUOTE"===a.tagName&&(f.formatter.toggle("blockquote",null,a),n=ne.createRng(),n.setStart(r,0),n.setEnd(r,0),re.setRng(n))}})}function D(){function e(){K(),p("StyleWithCSS",!1),p("enableInlineTableEditing",!1),ie.object_resizing||p("enableObjectResizing",!1)}ie.readonly||f.on("BeforeExecCommand MouseDown",e)}function L(){function e(){Q(ne.select("a"),function(e){var t=e.parentNode,n=ne.getRoot();if(t.lastChild===e){for(;t&&!ne.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}ne.add(t,"br",{"data-mce-bogus":1})}})}f.on("SetContent ExecCommand",function(t){"setcontent"!=t.type&&"mceInsertLink"!==t.command||e()})}function M(){ie.forced_root_block&&f.on("init",function(){p("DefaultParagraphSeparator",ie.forced_root_block)})}function P(){f.on("keydown",function(e){var t;m(e)||e.keyCode!=ee||(t=f.getDoc().selection.createRange(),t&&t.item&&(e.preventDefault(),f.undoManager.beforeChange(),ne.remove(t.item(0)),f.undoManager.add()))})}function O(){var e;h()>=10&&(e="",Q("p div h1 h2 h3 h4 h5 h6".split(" "),function(t,n){e+=(n>0?",":"")+t+":empty"}),f.contentStyles.push(e+"{padding-right: 1px !important}"))}function H(){h()<9&&(oe.addNodeFilter("noscript",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.firstChild,r&&n.attr("data-mce-innertext",r.value)}),ae.addNodeFilter("noscript",function(e){for(var t=e.length,n,r,a;t--;)n=e[t],r=e[t].firstChild,r?r.value=o.decode(r.value):(a=n.attributes.map["data-mce-innertext"],a&&(n.attr("data-mce-innertext",null),r=new i("#text",3),r.value=a,r.raw=!0,n.append(r)))}))}function I(){function e(e,t){var n=i.createTextRange();try{n.moveToPoint(e,t)}catch(r){n=null}return n}function t(t){var r;t.button?(r=e(t.x,t.y),r&&(r.compareEndPoints("StartToStart",a)>0?r.setEndPoint("StartToStart",a):r.setEndPoint("EndToEnd",a),r.select())):n()}function n(){var e=r.selection.createRange();a&&!e.item&&0===e.compareEndPoints("StartToEnd",e)&&a.select(),ne.unbind(r,"mouseup",n),ne.unbind(r,"mousemove",t),a=o=0}var r=ne.doc,i=r.body,o,a,s;r.documentElement.unselectable=!0,ne.bind(r,"mousedown contextmenu",function(i){if("HTML"===i.target.nodeName){if(o&&n(),s=r.documentElement,s.scrollHeight>s.clientHeight)return;o=1,a=e(i.x,i.y),a&&(ne.bind(r,"mouseup",n),ne.bind(r,"mousemove",t),ne.getRoot().focus(),a.select())}})}function F(){f.on("keyup focusin mouseup",function(t){65==t.keyCode&&e.metaKeyPressed(t)||re.normalize()},!0)}function z(){f.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")}function U(){f.inline||f.on("keydown",function(){document.activeElement==document.body&&f.getWin().focus()})}function W(){f.inline||(f.contentStyles.push("body {min-height: 150px}"),f.on("click",function(e){var t;if("HTML"==e.target.nodeName){if(a.ie>11)return void f.getBody().focus();t=f.selection.getRng(),f.getBody().focus(),f.selection.setRng(t),f.selection.normalize(),f.nodeChanged()}}))}function V(){a.mac&&f.on("keydown",function(t){!e.metaKeyPressed(t)||t.shiftKey||37!=t.keyCode&&39!=t.keyCode||(t.preventDefault(),f.selection.getSel().modify("move",37==t.keyCode?"backward":"forward","lineboundary"))})}function $(){p("AutoUrlDetect",!1)}function q(){f.on("click",function(e){var t=e.target;do if("A"===t.tagName)return void e.preventDefault();while(t=t.parentNode)}),f.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")}function j(){f.on("init",function(){f.dom.bind(f.getBody(),"submit",function(e){e.preventDefault()})})}function Y(){oe.addNodeFilter("br",function(e){for(var t=e.length;t--;)"Apple-interchange-newline"==e[t].attr("class")&&e[t].remove()})}function X(){f.on("dragstart",function(e){g(e)}),f.on("drop",function(e){if(!m(e)){var n=v(e);if(n&&n.id!=f.id){e.preventDefault();var r=t.getCaretRangeFromPoint(e.x,e.y,f.getDoc());re.setRng(r),y(n.html)}}})}function K(){}function G(){var e;return se?(e=f.selection.getSel(),!e||!e.rangeCount||0===e.rangeCount):0}function J(){function t(e){var t=new d(e.getBody()),n=e.selection.getRng(),r=c.fromRangeStart(n),i=c.fromRangeEnd(n),o=t.prev(r),a=t.next(i);return!e.selection.isCollapsed()&&(!o||o.isAtStart()&&r.isEqual(o))&&(!a||a.isAtEnd()&&r.isEqual(a))}f.on("keypress",function(n){!m(n)&&!re.isCollapsed()&&n.charCode>31&&!e.metaKeyPressed(n)&&t(f)&&(n.preventDefault(),f.setContent(String.fromCharCode(n.charCode)),f.selection.select(f.getBody(),!0),f.selection.collapse(!1),f.nodeChanged())}),f.on("keydown",function(e){var n=e.keyCode;m(e)||n!=te&&n!=ee||t(f)&&(e.preventDefault(),f.setContent(""),f.nodeChanged())})}var Q=s.each,Z=f.$,ee=e.BACKSPACE,te=e.DELETE,ne=f.dom,re=f.selection,ie=f.settings,oe=f.parser,ae=f.serializer,se=a.gecko,le=a.ie,ue=a.webkit,ce="data:text/mce-internal,",de=le?"Text":"URL";return B(),C(),a.windowsPhone||F(),ue&&(J(),b(),w(),_(),M(),j(),T(),Y(),a.iOS?(U(),W(),q()):x()),le&&a.ie<11&&(E(),k(),R(),A(),P(),O(),H(),I()),a.ie>=11&&(W(),T()),a.ie&&(x(),$(),X()),se&&(J(),E(),N(),S(),D(),L(),z(),V(),T()),{refreshContentEditable:K,isHidden:G}}}),r(Ue,[pe,w,m],function(e,t,n){function r(e,t){return"selectionchange"==t?e.getDoc():!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)?e.getDoc().documentElement:e.settings.event_root?(e.eventRoot||(e.eventRoot=o.select(e.settings.event_root)[0]),e.eventRoot):e.getBody()}function i(e,t){function n(e){return!e.hidden&&!e.readonly}var i=r(e,t),s;if(e.delegates||(e.delegates={}),!e.delegates[t])if(e.settings.event_root){if(a||(a={},e.editorManager.on("removeEditor",function(){var t;if(!e.editorManager.activeEditor&&a){for(t in a)e.dom.unbind(r(e,t));a=null}})),a[t])return;s=function(r){for(var i=r.target,a=e.editorManager.editors,s=a.length;s--;){var l=a[s].getBody();(l===i||o.isChildOf(i,l))&&n(a[s])&&a[s].fire(t,r)}},a[t]=s,o.bind(i,t,s)}else s=function(r){n(e)&&e.fire(t,r)},o.bind(i,t,s),e.delegates[t]=s}var o=t.DOM,a,s={bindPendingEventDelegates:function(){var e=this;n.each(e._pendingNativeEvents,function(t){i(e,t)})},toggleNativeEvent:function(e,t){var n=this;"focus"!=e&&"blur"!=e&&(t?n.initialized?i(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(r(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t;if(e.delegates){for(t in e.delegates)e.dom.unbind(r(e,t),t,e.delegates[t]);delete e.delegates}e.inline||(e.getBody().onload=null,e.dom.unbind(e.getWin()),e.dom.unbind(e.getDoc())),e.dom.unbind(e.getBody()),e.dom.unbind(e.getContainer())}};return s=n.extend({},e,s)}),r(We,[],function(){function e(e,t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}}function t(e){var t,n;return t=e.getBody(),n=function(t){e.dom.getParents(t.target,"a").length>0&&t.preventDefault()},e.dom.bind(t,"click",n),{unbind:function(){e.dom.unbind(t,"click",n)}}}function n(n,r){n._clickBlocker&&(n._clickBlocker.unbind(),n._clickBlocker=null),r?(n._clickBlocker=t(n),n.selection.controlSelection.hideResizeRect(),n.readonly=!0,n.getBody().contentEditable=!1):(n.readonly=!1,n.getBody().contentEditable=!0,e(n,"StyleWithCSS",!1),e(n,"enableInlineTableEditing",!1),e(n,"enableObjectResizing",!1),n.focus(),n.nodeChanged())}function r(e,t){var r=e.readonly?"readonly":"design";t!=r&&(e.initialized?n(e,"readonly"==t):e.on("init",function(){n(e,"readonly"==t)}),e.fire("SwitchMode",{mode:t}))}return{setMode:r}}),r(Ve,[m,d],function(e,t){var n=e.each,r=e.explode,i={f9:120,f10:121,f11:122},o=e.makeMap("alt,ctrl,shift,meta,access");return function(a){function s(e){var a,s,l={};n(r(e,"+"),function(e){e in o?l[e]=!0:/^[0-9]{2,}$/.test(e)?l.keyCode=parseInt(e,10):(l.charCode=e.charCodeAt(0),l.keyCode=i[e]||e.toUpperCase().charCodeAt(0))}),a=[l.keyCode];for(s in o)l[s]?a.push(s):l[s]=!1;return l.id=a.join(","),l.access&&(l.alt=!0,t.mac?l.ctrl=!0:l.shift=!0),l.meta&&(t.mac?l.meta=!0:(l.ctrl=!0,l.meta=!1)),l}function l(t,n,i,o){var l;return l=e.map(r(t,">"),s),l[l.length-1]=e.extend(l[l.length-1],{func:i,scope:o||a}),e.extend(l[0],{desc:a.translate(n),subpatterns:l.slice(1)})}function u(e){return e.altKey||e.ctrlKey||e.metaKey}function c(e){return"keydown"===e.type&&e.keyCode>=112&&e.keyCode<=123}function d(e,t){return!!t&&(t.ctrl==e.ctrlKey&&t.meta==e.metaKey&&(t.alt==e.altKey&&t.shift==e.shiftKey&&(!!(e.keyCode==t.keyCode||e.charCode&&e.charCode==t.charCode)&&(e.preventDefault(),!0))))}function f(e){return e.func?e.func.call(e.scope):null}var p=this,h={},m=[];a.on("keyup keypress keydown",function(e){!u(e)&&!c(e)||e.isDefaultPrevented()||(n(h,function(t){if(d(e,t))return m=t.subpatterns.slice(0),"keydown"==e.type&&f(t),!0}),d(e,m[0])&&(1===m.length&&"keydown"==e.type&&f(m[0]),m.shift()))}),p.add=function(t,i,o,s){var u;return u=o,"string"==typeof o?o=function(){a.execCommand(u,!1,null)}:e.isArray(u)&&(o=function(){a.execCommand(u[0],u[1],u[2])}),n(r(e.trim(t.toLowerCase())),function(e){var t=l(e,i,o,s);h[t.id]=t}),!0},p.remove=function(e){var t=l(e);return!!h[t.id]&&(delete h[t.id],!0)}}}),r($e,[u,m,z],function(e,t,n){return function(r,i){function o(e){var t,n;return n={"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"},t=n[e.blob().type.toLowerCase()]||"dat",e.filename()+"."+t}function a(e,t){return e?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t}function s(e){return{id:e.id,blob:e.blob,base64:e.base64,filename:n.constant(o(e))}}function l(e,t,n,r){var o,s;o=new XMLHttpRequest,o.open("POST",i.url),o.withCredentials=i.credentials,o.upload.onprogress=function(e){r(e.loaded/e.total*100)},o.onerror=function(){n("Image upload failed due to a XHR Transport error. Code: "+o.status)},o.onload=function(){var e;return 200!=o.status?void n("HTTP Error: "+o.status):(e=JSON.parse(o.responseText),e&&"string"==typeof e.location?void t(a(i.basePath,e.location)):void n("Invalid JSON: "+o.responseText))},s=new FormData,s.append("file",e.blob(),e.filename()),o.send(s)}function u(){return new e(function(e){e([])})}function c(e,t){return{url:t,blobInfo:e,status:!0}}function d(e,t){return{url:"",blobInfo:e,status:!1,error:t}}function f(e,n){t.each(y[e],function(e){e(n)}),delete y[e]}function p(t,n,i){return r.markPending(t.blobUri()),new e(function(e){var o,a,l=function(){};try{var u=function(){o&&(o.close(),a=l)},p=function(n){u(),r.markUploaded(t.blobUri(),n),f(t.blobUri(),c(t,n)),e(c(t,n))},h=function(n){u(),r.removeFailed(t.blobUri()),f(t.blobUri(),d(t,n)),e(d(t,n))};a=function(e){e<0||e>100||(o||(o=i()),o.progressBar.value(e))},n(s(t),p,h,a)}catch(m){e(d(t,m.message))}})}function h(e){return e===l}function m(t){var n=t.blobUri();return new e(function(e){y[n]=y[n]||[],y[n].push(e)})}function g(n,o){return n=t.grep(n,function(e){return!r.isUploaded(e.blobUri())}),e.all(t.map(n,function(e){return r.isPending(e.blobUri())?m(e):p(e,i.handler,o)}))}function v(e,t){return!i.url&&h(i.handler)?u():g(e,t)}var y={};return i=t.extend({credentials:!1,handler:l},i),{upload:v}}}),r(qe,[u],function(e){function t(t){return new e(function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="blob",n.onload=function(){200==this.status&&e(this.response)},n.send()})}function n(e){var t,n;return e=decodeURIComponent(e).split(","),n=/data:([^;]+)/.exec(e[0]),n&&(t=n[1]),{type:t,data:e[1]}}function r(t){return new e(function(e){var r,i,o;t=n(t);try{r=atob(t.data)}catch(a){return void e(new Blob([]))}for(i=new Uint8Array(r.length),o=0;o<i.length;o++)i[o]=r.charCodeAt(o);e(new Blob([i],{type:t.type}))})}function i(e){return 0===e.indexOf("blob:")?t(e):0===e.indexOf("data:")?r(e):null}function o(t){return new e(function(e){var n=new FileReader;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}return{uriToBlob:i,blobToDataUri:o,parseDataUri:n}}),r(je,[u,h,z,qe,d],function(e,t,n,r,i){var o=0,a=function(e){return(e||"blobid")+o++};return function(o,s){function l(l,c){function d(e,t){var n,i;return 0===e.src.indexOf("blob:")?(i=s.getByUri(e.src),void(i?t({image:e,blobInfo:i}):r.uriToBlob(e.src).then(function(o){r.blobToDataUri(o).then(function(l){n=r.parseDataUri(l).data,i=s.create(a(),o,n),s.add(i),t({image:e,blobInfo:i})})}))):(n=r.parseDataUri(e.src).data,i=s.findFirst(function(e){return e.base64()===n}),void(i?t({image:e,blobInfo:i}):r.uriToBlob(e.src).then(function(r){i=s.create(a(),r,n),s.add(i),t({image:e,blobInfo:i})})))}var f,p;return c||(c=n.constant(!0)),f=t.filter(l.getElementsByTagName("img"),function(e){var t=e.src;return!!i.fileApi&&(!e.hasAttribute("data-mce-bogus")&&(!e.hasAttribute("data-mce-placeholder")&&(!(!t||t==i.transparentSrc)&&(0===t.indexOf("blob:")?!o.isUploaded(t):0===t.indexOf("data:")&&c(e)))))}),p=t.map(f,function(t){var n;return u[t.src]?new e(function(e){u[t.src].then(function(n){e({image:t,blobInfo:n.blobInfo})})}):(n=new e(function(e){d(t,e)}).then(function(e){return delete u[e.image.src],e})["catch"](function(e){return delete u[t.src],
e}),u[t.src]=n,n)}),e.all(p)}var u={};return{findAll:l}}}),r(Ye,[h,z],function(e,t){return function(){function n(e,t,n,r){return{id:c(e),filename:c(r||e),blob:c(t),base64:c(n),blobUri:c(URL.createObjectURL(t))}}function r(e){i(e.id())||u.push(e)}function i(e){return o(function(t){return t.id()===e})}function o(t){return e.filter(u,t)[0]}function a(e){return o(function(t){return t.blobUri()==e})}function s(t){u=e.filter(u,function(e){return e.blobUri()!==t||(URL.revokeObjectURL(e.blobUri()),!1)})}function l(){e.each(u,function(e){URL.revokeObjectURL(e.blobUri())}),u=[]}var u=[],c=t.constant;return{create:n,add:r,get:i,getByUri:a,findFirst:o,removeByUri:s,destroy:l}}}),r(Xe,[],function(){return function(){function e(e,t){return{status:e,resultUri:t}}function t(e){return e in d}function n(e){var t=d[e];return t?t.resultUri:null}function r(e){return!!t(e)&&d[e].status===u}function i(e){return!!t(e)&&d[e].status===c}function o(t){d[t]=e(u,null)}function a(t,n){d[t]=e(c,n)}function s(e){delete d[e]}function l(){d={}}var u=1,c=2,d={};return{hasBlobUri:t,getResultUri:n,isPending:r,isUploaded:i,markPending:o,markUploaded:a,removeFailed:s,destroy:l}}}),r(Ke,[N],function(e){var t=e.PluginManager,n=function(e,n){for(var r in t.urls){var i=t.urls[r]+"/plugin"+n+".js";if(i===e)return r}return null},r=function(e,t){var r=n(t,e.suffix);return r?"Failed to load plugin: "+r+" from url "+t:"Failed to load plugin url: "+t},i=function(e,t){e.notificationManager.open({type:"error",text:t})},o=function(e,t){e._skinLoaded?i(e,t):e.on("SkinLoaded",function(){i(e,t)})},a=function(e,t){o(e,"Failed to upload image: "+t)},s=function(e,t){o(e,r(e,t))};return{pluginLoadError:s,uploadError:a}}),r(Ge,[h,$e,je,Ye,Xe,Ke],function(e,t,n,r,i,o){return function(a){function s(e){return function(t){return a.selection?e(t):[]}}function l(){return"?"+(new Date).getTime()}function u(e,t,n){var r=0;do r=e.indexOf(t,r),r!==-1&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1);while(r!==-1);return e}function c(e,t,n){return e=u(e,'src="'+t+'"','src="'+n+'"'),e=u(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')}function d(t,n){e.each(a.undoManager.data,function(r){"fragmented"===r.type?r.fragments=e.map(r.fragments,function(e){return c(e,t,n)}):r.content=c(r.content,t,n)})}function f(){return a.notificationManager.open({text:a.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})}function p(e,t){C.removeByUri(e.src),d(e.src,t),a.$(e).attr({src:E.images_reuse_filename?t+l():t,"data-mce-src":a.convertURL(t,"src")})}function h(n){return x||(x=new t(N,{url:E.images_upload_url,basePath:E.images_upload_base_path,credentials:E.images_upload_credentials,handler:E.images_upload_handler})),v().then(s(function(t){var r;return r=e.map(t,function(e){return e.blobInfo}),x.upload(r,f).then(s(function(r){return r=e.map(r,function(e,n){var r=t[n].image;return e.status&&a.settings.images_replace_blob_uris!==!1?p(r,e.url):e.error&&o.uploadError(a,e.error),{element:r,status:e.status}}),n&&n(r),r}))}))}function m(e){if(E.automatic_uploads!==!1)return h(e)}function g(e){return!E.images_dataimg_filter||E.images_dataimg_filter(e)}function v(){return w||(w=new n(N,C)),w.findAll(a.getBody(),g).then(s(function(t){return e.each(t,function(e){d(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")}),t}))}function y(){C.destroy(),N.destroy(),w=x=null}function b(t){return t.replace(/src="(blob:[^"]+)"/g,function(t,n){var r=N.getResultUri(n);if(r)return'src="'+r+'"';var i=C.getByUri(n);return i||(i=e.reduce(a.editorManager.editors,function(e,t){return e||t.editorUpload.blobCache.getByUri(n)},null)),i?'src="data:'+i.blob().type+";base64,"+i.base64()+'"':t})}var C=new r,x,w,E=a.settings,N=new i;return a.on("setContent",function(){a.settings.automatic_uploads!==!1?m():v()}),a.on("RawSaveContent",function(e){e.content=b(e.content)}),a.on("getContent",function(e){e.source_view||"raw"==e.format||(e.content=b(e.content))}),a.on("PostRender",function(){a.parser.addNodeFilter("img",function(t){e.each(t,function(e){var t=e.attr("src");if(!C.getByUri(t)){var n=N.getResultUri(t);n&&e.attr("src",n)}})})}),{blobCache:C,uploadImages:h,uploadImagesAuto:m,scanForImages:v,destroy:y}}}),r(Je,[k,$,_,T,g,W,c],function(e,t,n,r,i,o,a){var s=n.isContentEditableFalse;return function(t,n){function r(e,n){var r=o.collapse(e.getBoundingClientRect(),n),i,a,s,l,u;return"BODY"==t.tagName?(i=t.ownerDocument.documentElement,a=t.scrollLeft||i.scrollLeft,s=t.scrollTop||i.scrollTop):(u=t.getBoundingClientRect(),a=t.scrollLeft-u.left,s=t.scrollTop-u.top),r.left+=a,r.right+=a,r.top+=s,r.bottom+=s,r.width=1,l=e.offsetWidth-e.clientWidth,l>0&&(n&&(l*=-1),r.left+=l,r.right+=l),r}function l(){var n,r,o,a,s;for(n=i("*[contentEditable=false]",t),a=0;a<n.length;a++)r=n[a],o=r.previousSibling,e.endsWithCaretContainer(o)&&(s=o.data,1==s.length?o.parentNode.removeChild(o):o.deleteData(s.length-1,1)),o=r.nextSibling,e.startsWithCaretContainer(o)&&(s=o.data,1==s.length?o.parentNode.removeChild(o):o.deleteData(0,1));return null}function u(o,a){var l,u;return c(),n(a)?(g=e.insertBlock("p",a,o),l=r(a,o),i(g).css("top",l.top),m=i('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(l).appendTo(t),o&&m.addClass("mce-visual-caret-before"),d(),u=a.ownerDocument.createRange(),u.setStart(g,0),u.setEnd(g,0),u):(g=e.insertInline(a,o),u=a.ownerDocument.createRange(),s(g.nextSibling)?(u.setStart(g,0),u.setEnd(g,0)):(u.setStart(g,1),u.setEnd(g,1)),u)}function c(){l(),g&&(e.remove(g),g=null),m&&(m.remove(),m=null),clearInterval(h)}function d(){h=a.setInterval(function(){i("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden")},500)}function f(){a.clearInterval(h)}function p(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"}var h,m,g;return{show:u,hide:c,getCss:p,destroy:f}}}),r(Qe,[h,_,W],function(e,t,n){function r(i){function o(t){return e.map(t,function(e){return e=n.clone(e),e.node=i,e})}if(e.isArray(i))return e.reduce(i,function(e,t){return e.concat(r(t))},[]);if(t.isElement(i))return o(i.getClientRects());if(t.isText(i)){var a=i.ownerDocument.createRange();return a.setStart(i,0),a.setEnd(i,i.data.length),o(a.getClientRects())}}return{getClientRects:r}}),r(Ze,[z,h,Qe,U,ie,oe,$,W],function(e,t,n,r,i,o,a,s){function l(e,t,n,o){for(;o=i.findNode(o,e,r.isEditableCaretCandidate,t);)if(n(o))return}function u(e,r,i,o,a,s){function u(o){var s,l,u;for(u=n.getClientRects(o),e==-1&&(u=u.reverse()),s=0;s<u.length;s++)if(l=u[s],!i(l,p)){if(f.length>0&&r(l,t.last(f))&&c++,l.line=c,a(l))return!0;f.push(l)}}var c=0,d,f=[],p;return(p=t.last(s.getClientRects()))?(d=s.getNode(),u(d),l(e,o,u,d),f):f}function c(e,t){return t.line>e}function d(e,t){return t.line===e}function f(e,n,r,i){function l(n){return 1==e?t.last(n.getClientRects()):t.last(n.getClientRects())}var u=new o(n),c,d,f,p,h=[],m=0,g,v;1==e?(c=u.next,d=s.isBelow,f=s.isAbove,p=a.after(i)):(c=u.prev,d=s.isAbove,f=s.isBelow,p=a.before(i)),v=l(p);do if(p.isVisible()&&(g=l(p),!f(g,v))){if(h.length>0&&d(g,t.last(h))&&m++,g=s.clone(g),g.position=p,g.line=m,r(g))return h;h.push(g)}while(p=c(p));return h}var p=e.curry,h=p(u,-1,s.isAbove,s.isBelow),m=p(u,1,s.isBelow,s.isAbove);return{upUntil:h,downUntil:m,positionsUntil:f,isAboveLine:p(c),isLine:p(d)}}),r(et,[z,h,_,Qe,W,ie,U],function(e,t,n,r,i,o,a){function s(e,t){return Math.abs(e.left-t)}function l(e,t){return Math.abs(e.right-t)}function u(e,n){function r(e,t){return e>=t.left&&e<=t.right}return t.reduce(e,function(e,t){var i,o;return i=Math.min(s(e,n),l(e,n)),o=Math.min(s(t,n),l(t,n)),r(n,t)?t:r(n,e)?e:o==i&&m(t.node)?t:o<i?t:e})}function c(e,t,n,r){for(;r=g(r,e,a.isEditableCaretCandidate,t);)if(n(r))return}function d(e,n){function o(e,i){var o;return o=t.filter(r.getClientRects(i),function(t){return!e(t,n)}),a=a.concat(o),0===o.length}var a=[];return a.push(n),c(-1,e,v(o,i.isAbove),n.node),c(1,e,v(o,i.isBelow),n.node),a}function f(e){return t.filter(t.toArray(e.getElementsByTagName("*")),m)}function p(e,t){return{node:e.node,before:s(e,t)<l(e,t)}}function h(e,n,i){var o,a;return o=r.getClientRects(f(e)),o=t.filter(o,function(e){return i>=e.top&&i<=e.bottom}),a=u(o,n),a&&(a=u(d(e,a),n),a&&m(a.node))?p(a,n):null}var m=n.isContentEditableFalse,g=o.findNode,v=e.curry;return{findClosestClientRect:u,findLineNodeRects:d,closestCaret:h}}),r(tt,[],function(){var e=function(e){var t,n,r,i;return i=e.getBoundingClientRect(),t=e.ownerDocument,n=t.documentElement,r=t.defaultView,{top:i.top+r.pageYOffset-n.clientTop,left:i.left+r.pageXOffset-n.clientLeft}},t=function(t){return t.inline?e(t.getBody()):{left:0,top:0}},n=function(e){var t=e.getBody();return e.inline?{left:t.scrollLeft,top:t.scrollTop}:{left:0,top:0}},r=function(e){var t=e.getBody(),n=e.getDoc().documentElement,r={left:t.scrollLeft,top:t.scrollTop},i={left:t.scrollLeft||n.scrollLeft,top:t.scrollTop||n.scrollTop};return e.inline?r:i},i=function(t,n){if(n.target.ownerDocument!==t.getDoc()){var i=e(t.getContentAreaContainer()),o=r(t);return{left:n.pageX-i.left+o.left,top:n.pageY-i.top+o.top}}return{left:n.pageX,top:n.pageY}},o=function(e,t,n){return{pageX:n.left-e.left+t.left,pageY:n.top-e.top+t.top}},a=function(e,r){return o(t(e),n(e),i(e,r))};return{calc:a}}),r(nt,[_,h,z,c,w,tt],function(e,t,n,r,i,o){var a=e.isContentEditableFalse,s=e.isContentEditableTrue,l=function(e,t){return a(t)&&t!==e},u=function(e,t,n){return t!==n&&!e.dom.isChildOf(t,n)&&!a(t)},c=function(e){var t=e.cloneNode(!0);return t.removeAttribute("data-mce-selected"),t},d=function(e,t,n,r){var i=t.cloneNode(!0);e.dom.setStyles(i,{width:n,height:r}),e.dom.setAttrib(i,"data-mce-selected",null);var o=e.dom.create("div",{"class":"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"});return e.dom.setStyles(o,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),e.dom.setStyles(i,{margin:0,boxSizing:"border-box"}),o.appendChild(i),o},f=function(e,t){e.parentNode!==t&&t.appendChild(e)},p=function(e,t,n,r,i,o){var a=0,s=0;e.style.left=t.pageX+"px",e.style.top=t.pageY+"px",t.pageX+n>i&&(a=t.pageX+n-i),t.pageY+r>o&&(s=t.pageY+r-o),e.style.width=n-a+"px",e.style.height=r-s+"px"},h=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},m=function(e){return 0===e.button},g=function(e){return e.element},v=function(e,t){return{pageX:t.pageX-e.relX,pageY:t.pageY+5}},y=function(e,r){return function(i){if(m(i)){var o=t.find(r.dom.getParents(i.target),n.or(a,s));if(l(r.getBody(),o)){var u=r.dom.getPos(o),c=r.getBody(),f=r.getDoc().documentElement;e.element=o,e.screenX=i.screenX,e.screenY=i.screenY,e.maxX=(r.inline?c.scrollWidth:f.offsetWidth)-2,e.maxY=(r.inline?c.scrollHeight:f.offsetHeight)-2,e.relX=i.pageX-u.x,e.relY=i.pageY-u.y,e.width=o.offsetWidth,e.height=o.offsetHeight,e.ghost=d(r,o,e.width,e.height)}}}},b=function(e,t){var n=r.throttle(function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)},0);return function(r){var i=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY));if(g(e)&&!e.dragging&&i>10){var a=t.fire("dragstart",{target:e.element});if(a.isDefaultPrevented())return;e.dragging=!0,t.focus()}if(e.dragging){var s=v(e,o.calc(t,r));f(e.ghost,t.getBody()),p(e.ghost,s,e.width,e.height,e.maxX,e.maxY),n(r.clientX,r.clientY)}}},C=function(e){var t=e.getSel().getRangeAt(0),n=t.startContainer;return 3===n.nodeType?n.parentNode:n},x=function(e,t){return function(n){if(e.dragging&&u(t,C(t.selection),e.element)){var r=c(e.element),i=t.fire("drop",{targetClone:r,clientX:n.clientX,clientY:n.clientY});i.isDefaultPrevented()||(r=i.targetClone,t.undoManager.transact(function(){h(e.element),t.insertContent(t.dom.getOuterHTML(r)),t._selectionOverrides.hideFakeCaret()}))}E(e)}},w=function(e,t){return function(){E(e),e.dragging&&t.fire("dragend")}},E=function(e){e.dragging=!1,e.element=null,h(e.ghost)},N=function(e){var t={},n,r,o,a,s,l;n=i.DOM,l=document,r=y(t,e),o=b(t,e),a=x(t,e),s=w(t,e),e.on("mousedown",r),e.on("mousemove",o),e.on("mouseup",a),n.bind(l,"mousemove",o),n.bind(l,"mouseup",s),e.on("remove",function(){n.unbind(l,"mousemove",o),n.unbind(l,"mouseup",s)})},_=function(e){e.on("drop",function(t){var n="undefined"!=typeof t.clientX?e.getDoc().elementFromPoint(t.clientX,t.clientY):null;(a(n)||a(e.dom.getContentEditableParent(n)))&&t.preventDefault()})},S=function(e){N(e),_(e)};return{init:S}}),r(rt,[d,oe,$,k,ie,Je,Ze,et,_,T,W,I,z,h,c,nt],function(e,t,n,r,i,o,a,s,l,u,c,d,f,p,h,m){function g(e,t){for(;t=e(t);)if(t.isVisible())return t;return t}function v(u){function v(e){return u.dom.hasClass(e,"mce-offscreen-selection")}function _(){var e=u.dom.get(ue);return e?e.getElementsByTagName("*")[0]:e}function S(e){return u.dom.isBlock(e)}function k(e){e&&u.selection.setRng(e)}function T(){return u.selection.getRng()}function R(e,t){u.selection.scrollIntoView(e,t)}function A(e,t,n){var r;return r=u.fire("ShowCaret",{target:t,direction:e,before:n}),r.isDefaultPrevented()?null:(R(t,e===-1),le.show(n,t))}function B(e){var t;return t=u.fire("BeforeObjectSelected",{target:e}),t.isDefaultPrevented()?null:D(e)}function D(e){var t=e.ownerDocument.createRange();return t.selectNode(e),t}function L(e,t){var n=i.isInSameBlock(e,t);return!(n||!l.isBr(e.getNode()))||n}function M(e,t){return t=i.normalizeRange(e,ie,t),e==-1?n.fromRangeStart(t):n.fromRangeEnd(t)}function P(e){return r.isCaretContainerBlock(e.startContainer)}function O(e,t,n,r){var i,o,a,s;return!r.collapsed&&(i=N(r),C(i))?A(e,i,e==-1):(s=P(r),o=M(e,r),n(o)?B(o.getNode(e==-1)):(o=t(o))?n(o)?A(e,o.getNode(e==-1),1==e):(a=t(o),n(a)&&L(o,a)?A(e,a.getNode(e==-1),1==e):s?$(o.toRange()):null):s?r:null)}function H(e,t,n){var r,i,o,l,u,c,d,f,h;if(h=N(n),r=M(e,n),i=t(ie,a.isAboveLine(1),r),o=p.filter(i,a.isLine(1)),u=p.last(r.getClientRects()),E(r)&&(h=r.getNode()),w(r)&&(h=r.getNode(!0)),!u)return null;if(c=u.left,l=s.findClosestClientRect(o,c),l&&C(l.node))return d=Math.abs(c-l.left),f=Math.abs(c-l.right),A(e,l.node,d<f);if(h){var m=a.positionsUntil(e,ie,a.isAboveLine(1),h);if(l=s.findClosestClientRect(p.filter(m,a.isLine(1)),c))return $(l.position.toRange());if(l=p.last(p.filter(m,a.isLine(0))))return $(l.position.toRange())}}function I(t,r){function i(){var t=u.dom.create(u.settings.forced_root_block);return(!e.ie||e.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">'),t}var o,a,s;if(r.collapsed&&u.settings.forced_root_block){if(o=u.dom.getParent(r.startContainer,"PRE"),!o)return;a=1==t?ae(n.fromRangeStart(r)):se(n.fromRangeStart(r)),a||(s=i(),1==t?u.$(o).after(s):u.$(o).before(s),u.selection.select(s,!0),u.selection.collapse())}}function F(e,t,n,r){var i;return(i=O(e,t,n,r))?i:(i=I(e,r),i?i:null)}function z(e,t,n){var r;return(r=H(e,t,n))?r:(r=I(e,n),r?r:null)}function U(){return de("*[data-mce-caret]")[0]}function W(e){e.hasAttribute("data-mce-caret")&&(r.showCaretContainerBlock(e),k(T()),R(e[0]))}function V(e){var t,r;return e=i.normalizeRange(1,ie,e),t=n.fromRangeStart(e),C(t.getNode())?A(1,t.getNode(),!t.isAtEnd()):C(t.getNode(!0))?A(1,t.getNode(!0),!1):(r=u.dom.getParent(t.getNode(),f.or(C,b)),C(r)?A(1,r,!1):null)}function $(e){var t;return e&&e.collapsed?(t=V(e),t?t:e):e}function q(e){var t,i,o,a;return C(e)?(C(e.previousSibling)&&(o=e.previousSibling),i=se(n.before(e)),i||(t=ae(n.after(e))),t&&x(t.getNode())&&(a=t.getNode()),r.remove(e.previousSibling),r.remove(e.nextSibling),u.dom.remove(e),u.dom.isEmpty(u.getBody())?(u.setContent(""),void u.focus()):o?n.after(o).toRange():a?n.before(a).toRange():i?i.toRange():t?t.toRange():null):null}function j(e){var t=u.schema.getTextBlockElements();return e.nodeName in t}function Y(e){return u.dom.isEmpty(e)}function X(e,t,r){var i=u.dom,o,a,s,l;if(o=i.getParent(t.getNode(),i.isBlock),a=i.getParent(r.getNode(),i.isBlock),e===-1){if(l=r.getNode(!0),w(r)&&S(l))return j(o)?(Y(o)&&i.remove(o),n.after(l).toRange()):q(r.getNode(!0))}else if(l=t.getNode(),E(t)&&S(l))return j(a)?(Y(a)&&i.remove(a),n.before(l).toRange()):q(t.getNode());if(o===a||!j(o)||!j(a))return null;for(;s=o.firstChild;)a.appendChild(s);return u.dom.remove(o),r.toRange()}function K(e,t,n,i){var o,a,s,l;return!i.collapsed&&(o=N(i),C(o))?$(q(o)):(a=M(e,i),n(a)&&r.isCaretContainerBlock(i.startContainer)?(l=e==-1?oe.prev(a):oe.next(a),l?$(l.toRange()):i):t(a)?$(q(a.getNode(e==-1))):(s=e==-1?oe.prev(a):oe.next(a),t(s)?e===-1?X(e,a,s):X(e,s,a):void 0))}function G(){function i(e,t){if(e.isDefaultPrevented()===!1){var n=t(T());n&&(e.preventDefault(),k(n))}}function o(e){for(var t=u.getBody();e&&e!=t;){if(b(e)||C(e))return e;e=e.parentNode}return null}function l(e,t,n){return!n.collapsed&&p.reduce(n.getClientRects(),function(n,r){return n||c.containsXY(r,e,t)},!1)}function f(e){var t=!1;e.on("touchstart",function(){t=!1}),e.on("touchmove",function(){t=!0}),e.on("touchend",function(e){var n=o(e.target);C(n)&&(t||(e.preventDefault(),ee(B(n))))})}function g(){var e,t=o(u.selection.getNode());b(t)&&S(t)&&u.dom.isEmpty(t)&&(e=u.dom.create("br",{"data-mce-bogus":"1"}),u.$(t).empty().append(e),u.selection.setRng(n.before(e).toRange()))}function x(e){var t=U();if(t)return"compositionstart"==e.type?(e.preventDefault(),e.stopPropagation(),void W(t)):void(r.hasContent(t)&&W(t))}function N(e){var t;switch(e.keyCode){case d.DELETE:t=g();break;case d.BACKSPACE:t=g()}t&&e.preventDefault()}var R=y(F,1,ae,E),D=y(F,-1,se,w),L=y(K,1,E,w),M=y(K,-1,w,E),P=y(z,-1,a.upUntil),O=y(z,1,a.downUntil);u.on("mouseup",function(){var e=T();e.collapsed&&k(V(e))}),u.on("click",function(e){var t;t=o(e.target),t&&(C(t)&&(e.preventDefault(),u.focus()),b(t)&&u.dom.isChildOf(t,u.selection.getNode())&&te())}),u.on("blur NewBlock",function(){te(),re()});var H=function(e){var r=new t(e);if(!e.firstChild)return!1;var i=n.before(e.firstChild),o=r.next(i);return o&&!E(o)&&!w(o)},I=function(e,t){var n=u.dom.getParent(e,u.dom.isBlock),r=u.dom.getParent(t,u.dom.isBlock);return n===r},j=function(e){return!(e.keyCode>=112&&e.keyCode<=123)},Y=function(e,t){var n=u.dom.getParent(e,u.dom.isBlock),r=u.dom.getParent(t,u.dom.isBlock);return n&&!I(n,r)&&H(n)};f(u),u.on("mousedown",function(e){var t;if(t=o(e.target))C(t)?(e.preventDefault(),ee(B(t))):l(e.clientX,e.clientY,u.selection.getRng())||u.selection.placeCaretAt(e.clientX,e.clientY);else{te(),re();var n=s.closestCaret(ie,e.clientX,e.clientY);n&&(Y(e.target,n.node)||(e.preventDefault(),u.getBody().focus(),k(A(1,n.node,n.before))))}}),u.on("keydown",function(e){if(!d.modifierPressed(e))switch(e.keyCode){case d.RIGHT:i(e,R);break;case d.DOWN:i(e,O);break;case d.LEFT:i(e,D);break;case d.UP:i(e,P);break;case d.DELETE:i(e,L);break;case d.BACKSPACE:i(e,M);break;default:C(u.selection.getNode())&&j(e)&&e.preventDefault()}}),u.on("keyup compositionstart",function(e){x(e),N(e)},!0),u.on("cut",function(){var e=u.selection.getNode();C(e)&&h.setEditorTimeout(u,function(){k($(q(e)))})}),u.on("getSelectionRange",function(e){var t=e.range;if(ce){if(!ce.parentNode)return void(ce=null);t=t.cloneRange(),t.selectNode(ce),e.range=t}}),u.on("setSelectionRange",function(e){var t;t=ee(e.range),t&&(e.range=t)}),u.on("AfterSetSelectionRange",function(e){var t=e.range;Z(t)||re(),v(t.startContainer.parentNode)||te()}),u.on("focus",function(){h.setEditorTimeout(u,function(){u.selection.setRng($(u.selection.getRng()))},0)}),u.on("copy",function(t){var n=t.clipboardData;if(!t.isDefaultPrevented()&&t.clipboardData&&!e.ie){var r=_();r&&(t.preventDefault(),n.clearData(),n.setData("text/html",r.outerHTML),n.setData("text/plain",r.outerText))}}),m.init(u)}function J(){var e=u.contentStyles,t=".mce-content-body";e.push(le.getCss()),e.push(t+" .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}"+t+" *[contentEditable=false] {cursor: default;}"+t+" *[contentEditable=true] {cursor: text;}")}function Q(e){return r.isCaretContainer(e)||r.startsWithCaretContainer(e)||r.endsWithCaretContainer(e)}function Z(e){return Q(e.startContainer)||Q(e.endContainer)}function ee(t){var n,r=u.$,i=u.dom,o,a,s,l,c,d,f,p,h;if(!t)return null;if(t.collapsed){if(!Z(t)){if(f=M(1,t),C(f.getNode()))return A(1,f.getNode(),!f.isAtEnd());if(C(f.getNode(!0)))return A(1,f.getNode(!0),!1)}return null}return s=t.startContainer,l=t.startOffset,c=t.endOffset,3==s.nodeType&&0==l&&C(s.parentNode)&&(s=s.parentNode,l=i.nodeIndex(s),s=s.parentNode),1!=s.nodeType?null:(c==l+1&&(n=s.childNodes[l]),C(n)?(p=h=n.cloneNode(!0),d=u.fire("ObjectSelected",{target:n,targetClone:p}),d.isDefaultPrevented()?null:(p=d.targetClone,o=r("#"+ue),0===o.length&&(o=r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",ue),o.appendTo(u.getBody())),t=u.dom.createRng(),p===h&&e.ie?(o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(p),t.setStartAfter(o[0].firstChild.firstChild),t.setEndAfter(p)):(o.empty().append("\xa0").append(p).append("\xa0"),t.setStart(o[0].firstChild,1),t.setEnd(o[0].lastChild,0)),o.css({top:i.getPos(n,u.getBody()).y}),o[0].focus(),a=u.selection.getSel(),a.removeAllRanges(),a.addRange(t),u.$("*[data-mce-selected]").removeAttr("data-mce-selected"),n.setAttribute("data-mce-selected",1),ce=n,re(),t)):null)}function te(){ce&&(ce.removeAttribute("data-mce-selected"),u.$("#"+ue).remove(),ce=null)}function ne(){le.destroy(),ce=null}function re(){le.hide()}var ie=u.getBody(),oe=new t(ie),ae=y(g,oe.next),se=y(g,oe.prev),le=new o(u.getBody(),S),ue="sel-"+u.dom.uniqueId(),ce,de=u.$;return e.ceFalse&&(G(),J()),{showBlockCaretContainer:W,hideFakeCaret:re,destroy:ne}}var y=f.curry,b=l.isContentEditableTrue,C=l.isContentEditableFalse,x=l.isElement,w=i.isAfterContentEditableFalse,E=i.isBeforeContentEditableFalse,N=u.getSelectedNode;return v}),r(it,[],function(){var e=0,t=function(){var e=function(){return Math.round(4294967295*Math.random()).toString(36)},t=(new Date).getTime();return"s"+t.toString(36)+e()+e()+e()},n=function(n){return n+e++ +t()};return{uuid:n}}),r(ot,[],function(){var e=function(e,t,n){var r=e.sidebars?e.sidebars:[];r.push({name:t,settings:n}),e.sidebars=r};return{add:e}}),r(at,[w,g,N,R,A,O,P,Y,J,te,ne,re,le,ue,E,f,Le,Ie,B,L,ze,d,m,c,Ue,We,Ve,Ge,rt,it,ot,Ke],function(e,n,r,i,o,a,s,l,u,c,d,f,p,h,m,g,v,y,b,C,x,w,E,N,_,S,k,T,R,A,B,D){function L(e,t,i){var o=this,a,s,l;a=o.documentBaseUrl=i.documentBaseURL,s=i.baseURI,l=i.defaultSettings,t=H({id:e,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:a,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,padd_empty_editor:!0,render_ui:!0,indentation:"30px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",validate:!0,entity_encoding:"named",url_converter:o.convertURL,url_converter_scope:o,ie7_compat:!0},l,t),l&&l.external_plugins&&t.external_plugins&&(t.external_plugins=H({},l.external_plugins,t.external_plugins)),o.settings=t,r.language=t.language||"en",r.languageLoad=t.language_load,r.baseURL=i.baseURL,o.id=t.id=e,o.setDirty(!1),o.plugins={},o.documentBaseURI=new h(t.document_base_url||a,{base_uri:s}),o.baseURI=s,o.contentCSS=[],o.contentStyles=[],o.shortcuts=new k(o),o.loadedCSS={},o.editorCommands=new p(o),o.suffix=i.suffix,o.editorManager=i,o.inline=t.inline,o.settings.content_editable=o.inline,t.cache_suffix&&(w.cacheSuffix=t.cache_suffix.replace(/^[\?\&]+/,"")),t.override_viewport===!1&&(w.overrideViewPort=!1),i.fire("SetupEditor",o),o.execCallback("setup",o),o.$=n.overrideDefaults(function(){return{context:o.inline?o.getBody():o.getDoc(),element:o.getBody()}})}var M=e.DOM,P=r.ThemeManager,O=r.PluginManager,H=E.extend,I=E.each,F=E.explode,z=E.inArray,U=E.trim,W=E.resolve,V=g.Event,$=w.gecko,q=w.ie;return L.prototype={render:function(){function e(){M.unbind(window,"ready",e),n.render()}function t(){var e=m.ScriptLoader;if(r.language&&"en"!=r.language&&!r.language_url&&(r.language_url=n.editorManager.baseURL+"/langs/"+r.language+".js"),r.language_url&&e.add(r.language_url),r.theme&&"function"!=typeof r.theme&&"-"!=r.theme.charAt(0)&&!P.urls[r.theme]){var t=r.theme_url;t=t?n.documentBaseURI.toAbsolute(t):"themes/"+r.theme+"/theme"+o+".js",P.load(r.theme,t)}E.isArray(r.plugins)&&(r.plugins=r.plugins.join(" ")),I(r.external_plugins,function(e,t){O.load(t,e),r.plugins+=" "+t}),I(r.plugins.split(/[ ,]/),function(e){if(e=U(e),e&&!O.urls[e])if("-"==e.charAt(0)){e=e.substr(1,e.length);var t=O.dependencies(e);I(t,function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"};e=O.createUrl(t,e),O.load(e.resource,e)})}else O.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"})}),e.loadQueue(function(){n.removed||n.init()},n,function(e){D.pluginLoadError(n,e[0]),n.removed||n.init()})}var n=this,r=n.settings,i=n.id,o=n.suffix;if(!V.domLoaded)return void M.bind(window,"ready",e);if(n.getElement()&&w.contentEditable){r.inline?n.inline=!0:(n.orgVisibility=n.getElement().style.visibility,n.getElement().style.visibility="hidden");var a=n.getElement().form||M.getParent(i,"form");a&&(n.formElement=a,r.hidden_input&&!/TEXTAREA|INPUT/i.test(n.getElement().nodeName)&&(M.insertAfter(M.create("input",{type:"hidden",name:i}),i),n.hasHiddenInput=!0),n.formEventDelegate=function(e){n.fire(e.type,e)},M.bind(a,"submit reset",n.formEventDelegate),n.on("reset",function(){n.setContent(n.startContent,{format:"raw"})}),!r.submit_patch||a.submit.nodeType||a.submit.length||a._mceOldSubmit||(a._mceOldSubmit=a.submit,a.submit=function(){return n.editorManager.triggerSave(),n.setDirty(!1),a._mceOldSubmit(a)})),n.windowManager=new v(n),n.notificationManager=new y(n),"xml"==r.encoding&&n.on("GetContent",function(e){e.save&&(e.content=M.encode(e.content))}),r.add_form_submit_trigger&&n.on("submit",function(){n.initialized&&n.save()}),r.add_unload_trigger&&(n._beforeUnload=function(){!n.initialized||n.destroyed||n.isHidden()||n.save({format:"raw",no_events:!0,set_dirty:!1})},n.editorManager.on("BeforeUnload",n._beforeUnload)),n.editorManager.add(n),t()}},init:function(){function e(n){var r=O.get(n),i,o;if(i=O.urls[n]||t.documentBaseUrl.replace(/\/$/,""),n=U(n),r&&z(m,n)===-1){if(I(O.dependencies(n),function(t){e(t)}),t.plugins[n])return;o=new r(t,i,t.$),t.plugins[n]=o,o.init&&(o.init(t,i),m.push(n))}}var t=this,n=t.settings,r=t.getElement(),i,o,a,s,l,u,c,d,f,p,h,m=[];if(t.rtl=n.rtl_ui||t.editorManager.i18n.rtl,t.editorManager.i18n.setCode(n.language),n.aria_label=n.aria_label||M.getAttrib(r,"aria-label",t.getLang("aria.rich_text_area")),t.fire("ScriptsLoaded"),n.theme&&("function"!=typeof n.theme?(n.theme=n.theme.replace(/-/,""),u=P.get(n.theme),t.theme=new u(t,P.urls[n.theme]),t.theme.init&&t.theme.init(t,P.urls[n.theme]||t.documentBaseUrl.replace(/\/$/,""),t.$)):t.theme=n.theme),I(n.plugins.replace(/\-/g,"").split(/[ ,]/),e),n.render_ui&&t.theme&&(t.orgDisplay=r.style.display,"function"!=typeof n.theme?(i=n.width||r.style.width||r.offsetWidth,o=n.height||r.style.height||r.offsetHeight,a=n.min_height||100,p=/^[0-9\.]+(|px)$/i,p.test(""+i)&&(i=Math.max(parseInt(i,10),100)),p.test(""+o)&&(o=Math.max(parseInt(o,10),a)),l=t.theme.renderUI({targetNode:r,width:i,height:o,deltaWidth:n.delta_width,deltaHeight:n.delta_height}),n.content_editable||(o=(l.iframeHeight||o)+("number"==typeof o?l.deltaHeight||0:""),o<a&&(o=a))):(l=n.theme(t,r),l.editorContainer.nodeType&&(l.editorContainer.id=l.editorContainer.id||t.id+"_parent"),l.iframeContainer.nodeType&&(l.iframeContainer.id=l.iframeContainer.id||t.id+"_iframecontainer"),o=l.iframeHeight||r.offsetHeight),t.editorContainer=l.editorContainer),n.content_css&&I(F(n.content_css),function(e){t.contentCSS.push(t.documentBaseURI.toAbsolute(e))}),n.content_style&&t.contentStyles.push(n.content_style),n.content_editable)return r=s=l=null,t.initContentBody();if(t.iframeHTML=n.doctype+"<html><head>",n.document_base_url!=t.documentBaseUrl&&(t.iframeHTML+='<base href="'+t.documentBaseURI.getURI()+'" />'),!w.caretAfter&&n.ie7_compat&&(t.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=7" />'),t.iframeHTML+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',!/#$/.test(document.location.href))for(h=0;h<t.contentCSS.length;h++){var g=t.contentCSS[h];t.iframeHTML+='<link type="text/css" rel="stylesheet" href="'+E._addCacheSuffix(g)+'" />',t.loadedCSS[g]=!0}d=n.body_id||"tinymce",d.indexOf("=")!=-1&&(d=t.getParam("body_id","","hash"),d=d[t.id]||d),f=n.body_class||"",f.indexOf("=")!=-1&&(f=t.getParam("body_class","","hash"),f=f[t.id]||""),n.content_security_policy&&(t.iframeHTML+='<meta http-equiv="Content-Security-Policy" content="'+n.content_security_policy+'" />'),t.iframeHTML+='</head><body id="'+d+'" class="mce-content-body '+f+'" data-id="'+t.id+'"><br></body></html>';var v='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+t.id+'");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';document.domain!=location.hostname&&w.ie&&w.ie<12&&(c=v);var y=M.create("iframe",{id:t.id+"_ifr",frameBorder:"0",allowTransparency:"true",title:t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),style:{width:"100%",height:o,display:"block"}});if(y.onload=function(){y.onload=null,t.fire("load")},M.setAttrib(y,"src",c||'javascript:""'),t.contentAreaContainer=l.iframeContainer,t.iframeElement=y,s=M.add(l.iframeContainer,y),q)try{t.getDoc()}catch(b){s.src=c=v}l.editorContainer&&(M.get(l.editorContainer).style.display=t.orgDisplay,t.hidden=M.isHidden(l.editorContainer)),t.getElement().style.display="none",M.setAttrib(t.id,"aria-hidden",!0),c||t.initContentBody(),r=s=l=null},initContentBody:function(t){var n=this,r=n.settings,s=n.getElement(),p=n.getDoc(),h,m;r.inline||(n.getElement().style.visibility=n.orgVisibility),t||r.content_editable||(p.open(),p.write(n.iframeHTML),p.close()),r.content_editable&&(n.on("remove",function(){var e=this.getBody();M.removeClass(e,"mce-content-body"),M.removeClass(e,"mce-edit-focus"),M.setAttrib(e,"contentEditable",null)}),M.addClass(s,"mce-content-body"),n.contentDocument=p=r.content_document||document,n.contentWindow=r.content_window||window,n.bodyElement=s,r.content_document=r.content_window=null,r.root_name=s.nodeName.toLowerCase()),h=n.getBody(),h.disabled=!0,n.readonly=r.readonly,n.readonly||(n.inline&&"static"==M.getStyle(h,"position",!0)&&(h.style.position="relative"),h.contentEditable=n.getParam("content_editable_state",!0)),h.disabled=!1,n.editorUpload=new T(n),n.schema=new b(r),n.dom=new e(p,{keep_values:!0,url_converter:n.convertURL,url_converter_scope:n,hex_colors:r.force_hex_style_colors,class_filter:r.class_filter,update_styles:!0,root_element:n.inline?n.getBody():null,collect:r.content_editable,schema:n.schema,onSetAttrib:function(e){n.fire("SetAttrib",e)}}),n.parser=new C(r,n.schema),n.parser.addAttributeFilter("src,href,style,tabindex",function(e,t){for(var r=e.length,i,o=n.dom,a,s;r--;)if(i=e[r],a=i.attr(t),s="data-mce-"+t,!i.attributes.map[s]){if(0===a.indexOf("data:")||0===a.indexOf("blob:"))continue;"style"===t?(a=o.serializeStyle(o.parseStyle(a),i.name),a.length||(a=null),i.attr(s,a),i.attr(t,a)):"tabindex"===t?(i.attr(s,a),i.attr(t,null)):i.attr(s,n.convertURL(a,t,i.name));
}}),n.parser.addNodeFilter("script",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("type")||"no/type",0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}),n.parser.addNodeFilter("#cdata",function(e){for(var t=e.length,n;t--;)n=e[t],n.type=8,n.name="#comment",n.value="[CDATA["+n.value+"]]"}),n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(e){for(var t=e.length,r,i=n.schema.getNonEmptyElements();t--;)r=e[t],r.isEmpty(i)&&0===r.getAll("br").length&&(r.append(new o("br",1)).shortEnded=!0)}),n.serializer=new a(r,n),n.selection=new l(n.dom,n.getWin(),n.serializer,n),n.formatter=new u(n),n.undoManager=new c(n),n.forceBlocks=new f(n),n.enterKey=new d(n),n._nodeChangeDispatcher=new i(n),n._selectionOverrides=new R(n),n.fire("PreInit"),r.browser_spellcheck||r.gecko_spellcheck||(p.body.spellcheck=!1,M.setAttrib(h,"spellcheck","false")),n.quirks=new x(n),n.fire("PostRender"),r.directionality&&(h.dir=r.directionality),r.nowrap&&(h.style.whiteSpace="nowrap"),r.protect&&n.on("BeforeSetContent",function(e){I(r.protect,function(t){e.content=e.content.replace(t,function(e){return"<!--mce:protected "+escape(e)+"-->"})})}),n.on("SetContent",function(){n.addVisual(n.getBody())}),r.padd_empty_editor&&n.on("PostProcess",function(e){e.content=e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|<br \/>|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,"")}),n.load({initial:!0,format:"html"}),n.startContent=n.getContent({format:"raw"}),n.initialized=!0,n.bindPendingEventDelegates(),n.fire("init"),n.focus(!0),n.nodeChanged({initial:!0}),n.execCallback("init_instance_callback",n),n.on("compositionstart compositionend",function(e){n.composing="compositionstart"===e.type}),n.contentStyles.length>0&&(m="",I(n.contentStyles,function(e){m+=e+"\r\n"}),n.dom.addStyle(m)),I(n.contentCSS,function(e){n.loadedCSS[e]||(n.dom.loadCSS(e),n.loadedCSS[e]=!0)}),r.auto_focus&&N.setEditorTimeout(n,function(){var e;e=r.auto_focus===!0?n:n.editorManager.get(r.auto_focus),e.destroyed||e.focus()},100),s=p=h=null},focus:function(e){function t(e){return n.dom.getParent(e,function(e){return"true"===n.dom.getContentEditable(e)})}var n=this,r=n.selection,i=n.settings.content_editable,o,a,s=n.getDoc(),l=n.getBody(),u;if(!e){if(o=r.getRng(),o.item&&(a=o.item(0)),n.quirks.refreshContentEditable(),u=t(r.getNode()),n.$.contains(l,u))return u.focus(),r.normalize(),void n.editorManager.setActive(n);if(i||(w.opera||n.getBody().focus(),n.getWin().focus()),$||i){if(l.setActive)try{l.setActive()}catch(c){l.focus()}else l.focus();i&&r.normalize()}a&&a.ownerDocument==s&&(o=s.body.createControlRange(),o.addElement(a),o.select())}n.editorManager.setActive(n)},execCallback:function(e){var t=this,n=t.settings[e],r;if(n)return t.callbackLookup&&(r=t.callbackLookup[e])&&(n=r.func,r=r.scope),"string"==typeof n&&(r=n.replace(/\.\w+$/,""),r=r?W(r):0,n=W(n),t.callbackLookup=t.callbackLookup||{},t.callbackLookup[e]={func:n,scope:r}),n.apply(r||t,Array.prototype.slice.call(arguments,1))},translate:function(e){var t=this.settings.language||"en",n=this.editorManager.i18n;return e?(e=n.data[t+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,r){return n.data[t+"."+r]||"{#"+r+"}"}),this.editorManager.translate(e)):""},getLang:function(e,n){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+e]||(n!==t?n:"{#"+e+"}")},getParam:function(e,t,n){var r=e in this.settings?this.settings[e]:t,i;return"hash"===n?(i={},"string"==typeof r?I(r.indexOf("=")>0?r.split(/[;,](?![^=;,]*(?:[;,]|$))/):r.split(","),function(e){e=e.split("="),e.length>1?i[U(e[0])]=U(e[1]):i[U(e[0])]=U(e)}):i=r,i):r},nodeChanged:function(e){this._nodeChangeDispatcher.nodeChanged(e)},addButton:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),t.text||t.icon||(t.icon=e),n.buttons=n.buttons||{},t.tooltip=t.tooltip||t.title,n.buttons[e]=t},addSidebar:function(e,t){return B.add(this,e,t)},addMenuItem:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),n.menuItems=n.menuItems||{},n.menuItems[e]=t},addContextToolbar:function(e,t){var n=this,r;n.contextToolbars=n.contextToolbars||[],"string"==typeof e&&(r=e,e=function(e){return n.dom.is(e,r)}),n.contextToolbars.push({id:A.uuid("mcet"),predicate:e,items:t})},addCommand:function(e,t,n){this.editorCommands.addCommand(e,t,n)},addQueryStateHandler:function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},addQueryValueHandler:function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},addShortcut:function(e,t,n,r){this.shortcuts.add(e,t,n,r)},execCommand:function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},queryCommandState:function(e){return this.editorCommands.queryCommandState(e)},queryCommandValue:function(e){return this.editorCommands.queryCommandValue(e)},queryCommandSupported:function(e){return this.editorCommands.queryCommandSupported(e)},show:function(){var e=this;e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable=!0:(M.show(e.getContainer()),M.hide(e.id)),e.load(),e.fire("show"))},hide:function(){var e=this,t=e.getDoc();e.hidden||(q&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable=!1,e==e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(M.hide(e.getContainer()),M.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},isHidden:function(){return!!this.hidden},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var n=this,r=n.getElement(),i;if(r)return e=e||{},e.load=!0,i=n.setContent(r.value!==t?r.value:r.innerHTML,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,i},save:function(e){var t=this,n=t.getElement(),r,i;if(n&&t.initialized)return e=e||{},e.save=!0,e.element=n,r=e.content=t.getContent(e),e.no_events||t.fire("SaveContent",e),"raw"==e.format&&t.fire("RawSaveContent",e),r=e.content,/TEXTAREA|INPUT/i.test(n.nodeName)?n.value=r:(t.inline||(n.innerHTML=r),(i=M.getParent(t.id,"form"))&&I(i.elements,function(e){if(e.name==t.id)return e.value=r,!1})),e.element=n=null,e.set_dirty!==!1&&t.setDirty(!1),r},setContent:function(e,t){var n=this,r=n.getBody(),i,o;return t=t||{},t.format=t.format||"html",t.set=!0,t.content=e,t.no_events||n.fire("BeforeSetContent",t),e=t.content,0===e.length||/^\s+$/.test(e)?(o=q&&q<11?"":'<br data-mce-bogus="1">',"TABLE"==r.nodeName?e="<tr><td>"+o+"</td></tr>":/^(UL|OL)$/.test(r.nodeName)&&(e="<li>"+o+"</li>"),i=n.settings.forced_root_block,i&&n.schema.isValidChild(r.nodeName.toLowerCase(),i.toLowerCase())?(e=o,e=n.dom.createHTML(i,n.settings.forced_root_block_attrs,e)):q||e||(e='<br data-mce-bogus="1">'),n.dom.setHTML(r,e),n.fire("SetContent",t)):("raw"!==t.format&&(e=new s({validate:n.validate},n.schema).serialize(n.parser.parse(e,{isRootContent:!0}))),t.content=U(e),n.dom.setHTML(r,t.content),t.no_events||n.fire("SetContent",t)),t.content},getContent:function(e){var t=this,n,r=t.getBody();return e=e||{},e.format=e.format||"html",e.get=!0,e.getInner=!0,e.no_events||t.fire("BeforeGetContent",e),n="raw"==e.format?E.trim(t.serializer.getTrimmedContent()):"text"==e.format?r.innerText||r.textContent:t.serializer.serialize(r,e),"text"!=e.format?e.content=U(n):e.content=n,e.no_events||t.fire("GetContent",e),e.content},insertContent:function(e,t){t&&(e=H({content:e},t)),this.execCommand("mceInsertContent",!1,e)},isDirty:function(){return!this.isNotDirty},setDirty:function(e){var t=!this.isNotDirty;this.isNotDirty=!e,e&&e!=t&&this.fire("dirty")},setMode:function(e){S.setMode(this,e)},getContainer:function(){var e=this;return e.container||(e.container=M.get(e.editorContainer||e.id+"_parent")),e.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return this.targetElm||(this.targetElm=M.get(this.id)),this.targetElm},getWin:function(){var e=this,t;return e.contentWindow||(t=e.iframeElement,t&&(e.contentWindow=t.contentWindow)),e.contentWindow},getDoc:function(){var e=this,t;return e.contentDocument||(t=e.getWin(),t&&(e.contentDocument=t.document)),e.contentDocument},getBody:function(){var e=this.getDoc();return this.bodyElement||(e?e.body:null)},convertURL:function(e,t,n){var r=this,i=r.settings;return i.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!i.convert_urls||n&&"LINK"==n.nodeName||0===e.indexOf("file:")||0===e.length?e:i.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,i.remove_script_host)},addVisual:function(e){var n=this,r=n.settings,i=n.dom,o;e=e||n.getBody(),n.hasVisual===t&&(n.hasVisual=r.visual),I(i.select("table,a",e),function(e){var t;switch(e.nodeName){case"TABLE":return o=r.visual_table_class||"mce-item-table",t=i.getAttrib(e,"border"),void(t&&"0"!=t||!n.hasVisual?i.removeClass(e,o):i.addClass(e,o));case"A":return void(i.getAttrib(e,"href",!1)||(t=i.getAttrib(e,"name")||e.id,o=r.visual_anchor_class||"mce-item-anchor",t&&n.hasVisual?i.addClass(e,o):i.removeClass(e,o)))}}),n.fire("VisualAid",{element:e,hasVisual:n.hasVisual})},remove:function(){var e=this;e.removed||(e.save(),e.removed=1,e.unbindAllNativeEvents(),e.hasHiddenInput&&M.remove(e.getElement().nextSibling),e.inline||(q&&q<10&&e.getDoc().execCommand("SelectAll",!1,null),M.setStyle(e.id,"display",e.orgDisplay),e.getBody().onload=null),e.fire("remove"),e.editorManager.remove(e),M.remove(e.getContainer()),e._selectionOverrides.destroy(),e.editorUpload.destroy(),e.destroy())},destroy:function(e){var t=this,n;if(!t.destroyed){if(!e&&!t.removed)return void t.remove();e||(t.editorManager.off("beforeunload",t._beforeUnload),t.theme&&t.theme.destroy&&t.theme.destroy(),t.selection.destroy(),t.dom.destroy()),n=t.formElement,n&&(n._mceOldSubmit&&(n.submit=n._mceOldSubmit,n._mceOldSubmit=null),M.unbind(n,"submit reset",t.formEventDelegate)),t.contentAreaContainer=t.formElement=t.container=t.editorContainer=null,t.bodyElement=t.contentDocument=t.contentWindow=null,t.iframeElement=t.targetElm=null,t.selection&&(t.selection=t.selection.win=t.selection.dom=t.selection.dom.doc=null),t.destroyed=1}},uploadImages:function(e){return this.editorUpload.uploadImages(e)},_scanForImages:function(){return this.editorUpload.scanForImages()}},H(L.prototype,_),L}),r(st,[m],function(e){var t={},n="en";return{setCode:function(e){e&&(n=e,this.rtl=!!this.data[e]&&"rtl"===this.data[e]._dir)},getCode:function(){return n},rtl:!1,add:function(e,n){var r=t[e];r||(t[e]=r={});for(var i in n)r[i]=n[i];this.setCode(e)},translate:function(r){function i(t){return e.is(t,"function")?Object.prototype.toString.call(t):o(t)?"":""+t}function o(t){return""===t||null===t||e.is(t,"undefined")}function a(t){return t=i(t),e.hasOwn(s,t)?i(s[t]):t}var s=t[n]||{};if(o(r))return"";if(e.is(r,"object")&&e.hasOwn(r,"raw"))return i(r.raw);if(e.is(r,"array")){var l=r.slice(1);r=a(r[0]).replace(/\{([0-9]+)\}/g,function(t,n){return e.hasOwn(l,n)?i(l[n]):t})}return a(r).replace(/{context:\w+}$/,"")},data:t}}),r(lt,[w,c,d],function(e,t,n){function r(e){function r(){try{return document.activeElement}catch(e){return document.body}}function u(e,t){if(t&&t.startContainer){if(!e.isChildOf(t.startContainer,e.getRoot())||!e.isChildOf(t.endContainer,e.getRoot()))return;return{startContainer:t.startContainer,startOffset:t.startOffset,endContainer:t.endContainer,endOffset:t.endOffset}}return t}function c(e,t){var n;return t.startContainer?(n=e.getDoc().createRange(),n.setStart(t.startContainer,t.startOffset),n.setEnd(t.endContainer,t.endOffset)):n=t,n}function d(d){var f=d.editor;f.on("init",function(){(f.inline||n.ie)&&("onbeforedeactivate"in document&&n.ie<9?f.dom.bind(f.getBody(),"beforedeactivate",function(e){if(e.target==f.getBody())try{f.lastRng=f.selection.getRng()}catch(t){}}):f.on("nodechange mouseup keyup",function(e){var t=r();"nodechange"==e.type&&e.selectionChange||(t&&t.id==f.id+"_ifr"&&(t=f.getBody()),f.dom.isChildOf(t,f.getBody())&&(f.lastRng=f.selection.getRng()))}),n.webkit&&!i&&(i=function(){var t=e.activeEditor;if(t&&t.selection){var n=t.selection.getRng();n&&!n.collapsed&&(f.lastRng=n)}},s.bind(document,"selectionchange",i)))}),f.on("setcontent",function(){f.lastRng=null}),f.on("mousedown",function(){f.selection.lastFocusBookmark=null}),f.on("focusin",function(){var t=e.focusedEditor,n;f.selection.lastFocusBookmark&&(n=c(f,f.selection.lastFocusBookmark),f.selection.lastFocusBookmark=null,f.selection.setRng(n)),t!=f&&(t&&t.fire("blur",{focusedEditor:f}),e.setActive(f),e.focusedEditor=f,f.fire("focus",{blurredEditor:t}),f.focus(!0)),f.lastRng=null}),f.on("focusout",function(){t.setEditorTimeout(f,function(){var t=e.focusedEditor;l(f,r())||t!=f||(f.fire("blur",{focusedEditor:null}),e.focusedEditor=null,f.selection&&(f.selection.lastFocusBookmark=null))})}),o||(o=function(t){var n=e.activeEditor,r;r=t.target,n&&r.ownerDocument==document&&(n.selection&&r!=n.getBody()&&(n.selection.lastFocusBookmark=u(n.dom,n.lastRng)),r==document.body||l(n,r)||e.focusedEditor!=n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))},s.bind(document,"focusin",o)),f.inline&&!a&&(a=function(t){var n=e.activeEditor,r=n.dom;if(n.inline&&r&&!r.isChildOf(t.target,n.getBody())){var i=n.selection.getRng();i.collapsed||(n.lastRng=i)}},s.bind(document,"mouseup",a))}function f(t){e.focusedEditor==t.editor&&(e.focusedEditor=null),e.activeEditor||(s.unbind(document,"selectionchange",i),s.unbind(document,"focusin",o),s.unbind(document,"mouseup",a),i=o=a=null)}e.on("AddEditor",d),e.on("RemoveEditor",f)}var i,o,a,s=e.DOM,l=function(e,t){var n=e?e.settings.custom_ui_selector:"",i=s.getParent(t,function(t){return r.isEditorUIElement(t)||!!n&&e.dom.is(t,n)});return null!==i};return r.isEditorUIElement=function(e){return e.className.toString().indexOf("mce-")!==-1},r._isUIElement=l,r}),r(ut,[at,g,w,ue,d,m,u,pe,st,lt,N],function(e,t,n,r,i,o,a,s,l,u,c){function d(e){v(x.editors,function(t){"scroll"===e.type?t.fire("ScrollWindow",e):t.fire("ResizeWindow",e)})}function f(e,n){n!==w&&(n?t(window).on("resize scroll",d):t(window).off("resize scroll",d),w=n)}function p(e){var t=x.editors,n;delete t[e.id];for(var r=0;r<t.length;r++)if(t[r]==e){t.splice(r,1),n=!0;break}return x.activeEditor==e&&(x.activeEditor=t[0]),x.focusedEditor==e&&(x.focusedEditor=null),n}function h(e){return e&&e.initialized&&!(e.getContainer()||e.getBody()).parentNode&&(p(e),e.unbindAllNativeEvents(),e.destroy(!0),e.removed=!0,e=null),e}var m=n.DOM,g=o.explode,v=o.each,y=o.extend,b=0,C,x,w=!1;return x={$:t,majorVersion:"4",minorVersion:"5.7",releaseDate:"2017-04-25",editors:[],i18n:l,activeEditor:null,setup:function(){var e=this,t,n,i="",o,a;if(n=r.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/")),o=window.tinymce||window.tinyMCEPreInit)t=o.base||o.baseURL,i=o.suffix;else{for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){a=s[l].src;var c=a.substring(a.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)){c.indexOf(".min")!=-1&&(i=".min"),t=a.substring(0,a.lastIndexOf("/"));break}}!t&&document.currentScript&&(a=document.currentScript.src,a.indexOf(".min")!=-1&&(i=".min"),t=a.substring(0,a.lastIndexOf("/")))}e.baseURL=new r(n).toAbsolute(t),e.documentBaseURL=n,e.baseURI=new r(e.baseURL),e.suffix=i,e.focusManager=new u(e)},overrideDefaults:function(e){var t,n;t=e.base_url,t&&(this.baseURL=new r(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,"")),this.baseURI=new r(this.baseURL)),n=e.suffix,e.suffix&&(this.suffix=n),this.defaultSettings=e;var i=e.plugin_base_urls;for(var o in i)c.PluginManager.urls[o]=i[o]},init:function(n){function r(e,t){return e.inline&&t.tagName.toLowerCase()in C}function i(e,t){window.console&&!window.test&&window.console.log(e,t)}function s(e){var t=e.id;return t||(t=e.name,t=t&&!m.get(t)?e.name:m.uniqueId(),e.setAttribute("id",t)),t}function l(e){var t=n[e];if(t)return t.apply(f,Array.prototype.slice.call(arguments,2))}function u(e,t){return t.constructor===RegExp?t.test(e.className):m.hasClass(e,t)}function c(e){var t,n=[];if(e.types)return v(e.types,function(e){n=n.concat(m.select(e.selector))}),n;if(e.selector)return m.select(e.selector);if(e.target)return[e.target];switch(e.mode){case"exact":t=e.elements||"",t.length>0&&v(g(t),function(e){var t;(t=m.get(e))?n.push(t):v(document.forms,function(t){v(t.elements,function(t){t.name===e&&(e="mce_editor_"+b++,m.setAttrib(t,"id",e),n.push(t))})})});break;case"textareas":case"specific_textareas":v(m.select("textarea"),function(t){e.editor_deselector&&u(t,e.editor_deselector)||e.editor_selector&&!u(t,e.editor_selector)||n.push(t)})}return n}function d(){function a(t,n,r){var i=new e(t,n,f);p.push(i),i.on("init",function(){++u===g.length&&x(p)}),i.targetElm=i.targetElm||r,i.render()}var u=0,p=[],g;return m.unbind(window,"ready",d),l("onpageload"),g=t.unique(c(n)),n.types?void v(n.types,function(e){o.each(g,function(t){return!m.is(t,e.selector)||(a(s(t),y({},n,e),t),!1)})}):(o.each(g,function(e){h(f.get(e.id))}),g=o.grep(g,function(e){return!f.get(e.id)}),void v(g,function(e){r(n,e)?i("Could not initialize inline editor on invalid inline target element",e):a(s(e),n,e)}))}var f=this,p,C;C=o.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu"," ");var x=function(e){p=e};return f.settings=n,m.bind(window,"ready",d),new a(function(e){p?e(p):x=function(t){e(t)}})},get:function(e){return arguments.length?e in this.editors?this.editors[e]:null:this.editors},add:function(e){var t=this,n=t.editors;return n[e.id]=e,n.push(e),f(n,!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),C||(C=function(){t.fire("BeforeUnload")},m.bind(window,"beforeunload",C)),e},createEditor:function(t,n){return this.add(new e(t,n,this))},remove:function(e){var t=this,n,r=t.editors,i;{if(e)return"string"==typeof e?(e=e.selector||e,void v(m.select(e),function(e){i=r[e.id],i&&t.remove(i)})):(i=e,r[i.id]?(p(i)&&t.fire("RemoveEditor",{editor:i}),r.length||m.unbind(window,"beforeunload",C),i.remove(),f(r,r.length>0),i):null);for(n=r.length-1;n>=0;n--)t.remove(r[n])}},execCommand:function(t,n,r){var i=this,o=i.get(r);switch(t){case"mceAddEditor":return i.get(r)||new e(r,i.settings,i).render(),!0;case"mceRemoveEditor":return o&&o.remove(),!0;case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(i.execCommand("mceAddEditor",0,r),!0)}return!!i.activeEditor&&i.activeEditor.execCommand(t,n,r)},triggerSave:function(){v(this.editors,function(e){e.save()})},addI18n:function(e,t){l.add(e,t)},translate:function(e){return l.translate(e)},setActive:function(e){var t=this.activeEditor;this.activeEditor!=e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e}},y(x,s),x.setup(),window.tinymce=window.tinyMCE=x,x}),r(ct,[ut,m],function(e,t){var n=t.each,r=t.explode;e.on("AddEditor",function(e){var t=e.editor;t.on("preInit",function(){function e(e,t){n(t,function(t,n){t&&s.setStyle(e,n,t)}),s.rename(e,"span")}function i(e){s=t.dom,l.convert_fonts_to_spans&&n(s.select("font,u,strike",e.node),function(e){o[e.nodeName.toLowerCase()](s,e)})}var o,a,s,l=t.settings;l.inline_styles&&(a=r(l.font_size_legacy_values),o={font:function(t,n){e(n,{backgroundColor:n.style.backgroundColor,color:n.color,fontFamily:n.face,fontSize:a[parseInt(n.size,10)-1]})},u:function(n,r){"html4"===t.settings.schema&&e(r,{textDecoration:"underline"})},strike:function(t,n){e(n,{textDecoration:"line-through"})}},t.on("PreProcess SetContent",i))})})}),r(dt,[pe,m],function(e,t){var n={send:function(e){function r(){!e.async||4==i.readyState||o++>1e4?(e.success&&o<1e4&&200==i.status?e.success.call(e.success_scope,""+i.responseText,i,e):e.error&&e.error.call(e.error_scope,o>1e4?"TIMED_OUT":"GENERAL",i,e),i=null):setTimeout(r,10)}var i,o=0;if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=e.async!==!1,e.data=e.data||"",n.fire("beforeInitialize",{settings:e}),i=new XMLHttpRequest){if(i.overrideMimeType&&i.overrideMimeType(e.content_type),i.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(i.withCredentials=!0),e.content_type&&i.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&t.each(e.requestheaders,function(e){i.setRequestHeader(e.key,e.value)}),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i=n.fire("beforeSend",{xhr:i,settings:e}).xhr,i.send(e.data),!e.async)return r();setTimeout(r,10)}}};return t.extend(n,e),n}),r(ft,[],function(){function e(t,n){var r,i,o,a;if(n=n||'"',null===t)return"null";if(o=typeof t,"string"==o)return i="\bb\tt\nn\ff\rr\"\"''\\\\",n+t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,t){return'"'===n&&"'"===e?e:(r=i.indexOf(t),r+1?"\\"+i.charAt(r+1):(e=t.charCodeAt().toString(16),"\\u"+"0000".substring(e.length)+e))})+n;if("object"==o){if(t.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(t)){for(r=0,i="[";r<t.length;r++)i+=(r>0?",":"")+e(t[r],n);return i+"]"}i="{";for(a in t)t.hasOwnProperty(a)&&(i+="function"!=typeof t[a]?(i.length>1?","+n:n)+a+n+":"+e(t[a],n):"");return i+"}"}return""+t}return{serialize:e,parse:function(e){try{return window[String.fromCharCode(101)+"val"]("("+e+")")}catch(t){}}}}),r(pt,[ft,dt,m],function(e,t,n){function r(e){this.settings=i({},e),this.count=0}var i=n.extend;return r.sendRPC=function(e){return(new r).send(e)},r.prototype={send:function(n){var r=n.error,o=n.success;n=i(this.settings,n),n.success=function(t,i){t=e.parse(t),"undefined"==typeof t&&(t={error:"JSON Parse error."}),t.error?r.call(n.error_scope||n.scope,t.error,i):o.call(n.success_scope||n.scope,t.result)},n.error=function(e,t){r&&r.call(n.error_scope||n.scope,e,t)},n.data=e.serialize({id:n.id||"c"+this.count++,method:n.method,params:n.params}),n.content_type="application/json",t.send(n)}},r}),r(ht,[w],function(e){return{callbacks:{},count:0,send:function(n){var r=this,i=e.DOM,o=n.count!==t?n.count:r.count,a="tinymce_jsonp_"+o;r.callbacks[o]=function(e){i.remove(a),delete r.callbacks[o],n.callback(e)},i.add(i.doc.body,"script",{id:a,src:n.url,type:"text/javascript"}),r.count++}}}),r(mt,[],function(){function e(){s=[];for(var e in a)s.push(e);i.length=s.length}function n(){function n(e){var n,r;return r=e!==t?c+e:i.indexOf(",",c),r===-1||r>i.length?null:(n=i.substring(c,r),c=r+1,n)}var r,i,s,c=0;if(a={},u){o.load(l),i=o.getAttribute(l)||"";do{var d=n();if(null===d)break;if(r=n(parseInt(d,32)||0),null!==r){if(d=n(),null===d)break;s=n(parseInt(d,32)||0),r&&(a[r]=s)}}while(null!==r);e()}}function r(){var t,n="";if(u){for(var r in a)t=a[r],n+=(n?",":"")+r.length.toString(32)+","+r+","+t.length.toString(32)+","+t;o.setAttribute(l,n);try{o.save(l)}catch(i){}e()}}var i,o,a,s,l,u;try{if(window.localStorage)return localStorage}catch(c){}return l="tinymce",o=document.documentElement,u=!!o.addBehavior,u&&o.addBehavior("#default#userData"),i={key:function(e){return s[e]},getItem:function(e){return e in a?a[e]:null},setItem:function(e,t){a[e]=""+t,r()},removeItem:function(e){delete a[e],r()},clear:function(){a={},r()}},n(),i}),r(gt,[w,f,E,N,m,d],function(e,t,n,r,i,o){var a=window.tinymce;return a.DOM=e.DOM,a.ScriptLoader=n.ScriptLoader,a.PluginManager=r.PluginManager,a.ThemeManager=r.ThemeManager,a.dom=a.dom||{},a.dom.Event=t.Event,i.each("trim isArray is toArray makeMap each map grep inArray extend create walk createNS resolve explode _addCacheSuffix".split(" "),function(e){a[e]=i[e]}),i.each("isOpera isWebKit isIE isGecko isMac".split(" "),function(e){a[e]=o[e.substr(2).toLowerCase()]}),{}}),r(vt,[ce,m],function(e,t){return e.extend({Defaults:{firstControlClass:"first",lastControlClass:"last"},init:function(e){this.settings=t.extend({},this.Defaults,e)},preRender:function(e){e.bodyClasses.add(this.settings.containerClass)},applyClasses:function(e){var t=this,n=t.settings,r,i,o,a;r=n.firstControlClass,i=n.lastControlClass,e.each(function(e){e.classes.remove(r).remove(i).add(n.controlClass),e.visible()&&(o||(o=e),a=e)}),o&&o.classes.add(r),a&&a.classes.add(i)},renderHtml:function(e){var t=this,n="";return t.applyClasses(e.items()),e.items().each(function(e){n+=e.renderHtml()}),n},recalc:function(){},postRender:function(){},isNative:function(){return!1}})}),r(yt,[vt],function(e){return e.extend({Defaults:{containerClass:"abs-layout",controlClass:"abs-layout-item"},recalc:function(e){e.items().filter(":visible").each(function(e){var t=e.settings;e.layoutRect({x:t.x,y:t.y,w:t.w,h:t.h}),e.recalc&&e.recalc()})},renderHtml:function(e){return'<div id="'+e._id+'-absend" class="'+e.classPrefix+'abs-end"></div>'+this._super(e)}})}),r(bt,[Pe],function(e){return e.extend({Defaults:{classes:"widget btn",role:"button"},init:function(e){var t=this,n;t._super(e),e=t.settings,n=t.settings.size,t.on("click mousedown",function(e){e.preventDefault()}),t.on("touchstart",function(e){t.fire("click",e),e.preventDefault()}),e.subtype&&t.classes.add(e.subtype),n&&t.classes.add("btn-"+n),e.icon&&t.icon(e.icon)},icon:function(e){return arguments.length?(this.state.set("icon",e),this):this.state.get("icon")},repaint:function(){var e=this.getEl().firstChild,t;e&&(t=e.style,t.width=t.height="100%"),this._super()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.state.get("icon"),i,o=e.state.get("text"),a="";return i=e.settings.image,i?(r="none","string"!=typeof i&&(i=window.getSelection?i[0]:i[1]),i=" style=\"background-image: url('"+i+"')\""):i="",o&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(o)+"</span>"),r=r?n+"ico "+n+"i-"+r:"",'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button role="presentation" type="button" tabindex="-1">'+(r?'<i class="'+r+'"'+i+"></i>":"")+a+"</button></div>"},bindStates:function(){function e(e){var i=n("span."+r,t.getEl());e?(i[0]||(n("button:first",t.getEl()).append('<span class="'+r+'"></span>'),i=n("span."+r,t.getEl())),i.html(t.encode(e))):i.remove(),t.classes.toggle("btn-has-text",!!e)}var t=this,n=t.$,r=t.classPrefix+"txt";return t.state.on("change:text",function(t){e(t.value)}),t.state.on("change:icon",function(n){var r=n.value,i=t.classPrefix;t.settings.icon=r,r=r?i+"ico "+i+"i-"+t.settings.icon:"";var o=t.getEl().firstChild,a=o.getElementsByTagName("i")[0];r?(a&&a==o.firstChild||(a=document.createElement("i"),o.insertBefore(a,o.firstChild)),a.className=r):a&&o.removeChild(a),e(t.state.get("text"))}),t._super()}})}),r(Ct,[Ne],function(e){return e.extend({Defaults:{defaultType:"button",role:"group"},renderHtml:function(){var e=this,t=e._layout;return e.classes.add("btn-group"),e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'"><div id="'+e._id+'-body">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})}),r(xt,[Pe],function(e){return e.extend({Defaults:{classes:"checkbox",role:"checkbox",checked:!1},init:function(e){var t=this;t._super(e),t.on("click mousedown",function(e){e.preventDefault()}),t.on("click",function(e){e.preventDefault(),t.disabled()||t.checked(!t.checked())}),t.checked(t.settings.checked)},checked:function(e){return arguments.length?(this.state.set("checked",e),this):this.state.get("checked")},value:function(e){return arguments.length?this.checked(e):this.checked()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes+'" unselectable="on" aria-labelledby="'+t+'-al" tabindex="-1"><i class="'+n+"ico "+n+'i-checkbox"></i><span id="'+t+'-al" class="'+n+'label">'+e.encode(e.state.get("text"))+"</span></div>"},bindStates:function(){function e(e){t.classes.toggle("checked",e),t.aria("checked",e)}var t=this;return t.state.on("change:text",function(e){t.getEl("al").firstChild.data=t.translate(e.value)}),t.state.on("change:checked change:value",function(n){t.fire("change"),e(n.value)}),t.state.on("change:icon",function(e){var n=e.value,r=t.classPrefix;if("undefined"==typeof n)return t.settings.icon;t.settings.icon=n,n=n?r+"ico "+r+"i-"+t.settings.icon:"";var i=t.getEl().firstChild,o=i.getElementsByTagName("i")[0];n?(o&&o==i.firstChild||(o=document.createElement("i"),i.insertBefore(o,i.firstChild)),o.className=n):o&&i.removeChild(o)}),t.state.get("checked")&&e(!0),t._super()}})}),r(wt,[Pe,we,ve,g,I,m],function(e,t,n,r,i,o){return e.extend({init:function(e){var t=this;t._super(e),e=t.settings,t.classes.add("combobox"),t.subinput=!0,t.ariaTarget="inp",e.menu=e.menu||e.values,e.menu&&(e.icon="caret"),t.on("click",function(n){var i=n.target,o=t.getEl();if(r.contains(o,i)||i==o)for(;i&&i!=o;)i.id&&i.id.indexOf("-open")!=-1&&(t.fire("action"),e.menu&&(t.showMenu(),n.aria&&t.menu.items()[0].focus())),i=i.parentNode}),t.on("keydown",function(e){var n;13==e.keyCode&&"INPUT"===e.target.nodeName&&(e.preventDefault(),t.parents().reverse().each(function(e){if(e.toJSON)return n=e,!1}),t.fire("submit",{data:n.toJSON()}))}),t.on("keyup",function(e){if("INPUT"==e.target.nodeName){var n=t.state.get("value"),r=e.target.value;r!==n&&(t.state.set("value",r),t.fire("autocomplete",e))}}),t.on("mouseover",function(e){var n=t.tooltip().moveTo(-65535);if(t.statusLevel()&&e.target.className.indexOf(t.classPrefix+"status")!==-1){var r=t.statusMessage()||"Ok",i=n.text(r).show().testMoveRel(e.target,["bc-tc","bc-tl","bc-tr"]);n.classes.toggle("tooltip-n","bc-tc"==i),n.classes.toggle("tooltip-nw","bc-tl"==i),n.classes.toggle("tooltip-ne","bc-tr"==i),n.moveRel(e.target,i)}})},statusLevel:function(e){return arguments.length>0&&this.state.set("statusLevel",e),this.state.get("statusLevel")},statusMessage:function(e){return arguments.length>0&&this.state.set("statusMessage",e),this.state.get("statusMessage")},showMenu:function(){var e=this,n=e.settings,r;e.menu||(r=n.menu||[],r.length?r={type:"menu",items:r}:r.type=r.type||"menu",e.menu=t.create(r).parent(e).renderTo(e.getContainerElm()),e.fire("createmenu"),e.menu.reflow(),e.menu.on("cancel",function(t){t.control===e.menu&&e.focus()}),e.menu.on("show hide",function(t){t.control.items().each(function(t){t.active(t.value()==e.value())})}).fire("show"),e.menu.on("select",function(t){e.value(t.control.value())}),e.on("focusin",function(t){"INPUT"==t.target.tagName.toUpperCase()&&e.menu.hide()}),e.aria("expanded",!0)),e.menu.show(),e.menu.layoutRect({w:e.layoutRect().w}),e.menu.moveRel(e.getEl(),e.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"])},focus:function(){this.getEl("inp").focus()},repaint:function(){var e=this,t=e.getEl(),i=e.getEl("open"),o=e.layoutRect(),a,s,l=0,u=t.firstChild;e.statusLevel()&&"none"!==e.statusLevel()&&(l=parseInt(n.getRuntimeStyle(u,"padding-right"),10)-parseInt(n.getRuntimeStyle(u,"padding-left"),10)),a=i?o.w-n.getSize(i).width-10:o.w-10;var c=document;return c.all&&(!c.documentMode||c.documentMode<=8)&&(s=e.layoutRect().h-2+"px"),r(u).css({width:a-l,lineHeight:s}),e._super(),e},postRender:function(){var e=this;return r(this.getEl("inp")).on("change",function(t){e.state.set("value",t.target.value),e.fire("change",t)}),e._super()},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.classPrefix,i=e.state.get("value")||"",o,a,s="",l="",u="";return"spellcheck"in n&&(l+=' spellcheck="'+n.spellcheck+'"'),n.maxLength&&(l+=' maxlength="'+n.maxLength+'"'),n.size&&(l+=' size="'+n.size+'"'),n.subtype&&(l+=' type="'+n.subtype+'"'),u='<i id="'+t+'-status" class="mce-status mce-ico" style="display: none"></i>',e.disabled()&&(l+=' disabled="disabled"'),o=n.icon,o&&"caret"!=o&&(o=r+"ico "+r+"i-"+n.icon),a=e.state.get("text"),(o||a)&&(s='<div id="'+t+'-open" class="'+r+"btn "+r+'open" tabIndex="-1" role="button"><button id="'+t+'-action" type="button" hidefocus="1" tabindex="-1">'+("caret"!=o?'<i class="'+o+'"></i>':'<i class="'+r+'caret"></i>')+(a?(o?" ":"")+a:"")+"</button></div>",e.classes.add("has-open")),'<div id="'+t+'" class="'+e.classes+'"><input id="'+t+'-inp" class="'+r+'textbox" value="'+e.encode(i,!1)+'" hidefocus="1"'+l+' placeholder="'+e.encode(n.placeholder)+'" />'+u+s+"</div>"},value:function(e){return arguments.length?(this.state.set("value",e),
this):(this.state.get("rendered")&&this.state.set("value",this.getEl("inp").value),this.state.get("value"))},showAutoComplete:function(e,n){var r=this;if(0===e.length)return void r.hideMenu();var i=function(e,t){return function(){r.fire("selectitem",{title:t,value:e})}};r.menu?r.menu.items().remove():r.menu=t.create({type:"menu",classes:"combobox-menu",layout:"flow"}).parent(r).renderTo(),o.each(e,function(e){r.menu.add({text:e.title,url:e.previewUrl,match:n,classes:"menu-item-ellipsis",onclick:i(e.value,e.title)})}),r.menu.renderNew(),r.hideMenu(),r.menu.on("cancel",function(e){e.control.parent()===r.menu&&(e.stopPropagation(),r.focus(),r.hideMenu())}),r.menu.on("select",function(){r.focus()});var a=r.layoutRect().w;r.menu.layoutRect({w:a,minW:0,maxW:a}),r.menu.reflow(),r.menu.show(),r.menu.moveRel(r.getEl(),r.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"])},hideMenu:function(){this.menu&&this.menu.hide()},bindStates:function(){var e=this;e.state.on("change:value",function(t){e.getEl("inp").value!=t.value&&(e.getEl("inp").value=t.value)}),e.state.on("change:disabled",function(t){e.getEl("inp").disabled=t.value}),e.state.on("change:statusLevel",function(t){var r=e.getEl("status"),i=e.classPrefix,o=t.value;n.css(r,"display","none"===o?"none":""),n.toggleClass(r,i+"i-checkmark","ok"===o),n.toggleClass(r,i+"i-warning","warn"===o),n.toggleClass(r,i+"i-error","error"===o),e.classes.toggle("has-status","none"!==o),e.repaint()}),n.on(e.getEl("status"),"mouseleave",function(){e.tooltip().hide()}),e.on("cancel",function(t){e.menu&&e.menu.visible()&&(t.stopPropagation(),e.hideMenu())});var t=function(e,t){t&&t.items().length>0&&t.items().eq(e)[0].focus()};return e.on("keydown",function(n){var r=n.keyCode;"INPUT"===n.target.nodeName&&(r===i.DOWN?(n.preventDefault(),e.fire("autocomplete"),t(0,e.menu)):r===i.UP&&(n.preventDefault(),t(-1,e.menu)))}),e._super()},remove:function(){r(this.getEl("inp")).off(),this.menu&&this.menu.remove(),this._super()}})}),r(Et,[wt],function(e){return e.extend({init:function(e){var t=this;e.spellcheck=!1,e.onaction&&(e.icon="none"),t._super(e),t.classes.add("colorbox"),t.on("change keyup postrender",function(){t.repaintColor(t.value())})},repaintColor:function(e){var t=this.getEl("open"),n=t?t.getElementsByTagName("i")[0]:null;if(n)try{n.style.background=e}catch(r){}},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.state.get("rendered")&&e.repaintColor(t.value)}),e._super()}})}),r(Nt,[bt,Ae],function(e,t){return e.extend({showPanel:function(){var e=this,n=e.settings;if(e.active(!0),e.panel)e.panel.show();else{var r=n.panel;r.type&&(r={layout:"grid",items:r}),r.role=r.role||"dialog",r.popover=!0,r.autohide=!0,r.ariaRoot=!0,e.panel=new t(r).on("hide",function(){e.active(!1)}).on("cancel",function(t){t.stopPropagation(),e.focus(),e.hidePanel()}).parent(e).renderTo(e.getContainerElm()),e.panel.fire("show"),e.panel.reflow()}e.panel.moveRel(e.getEl(),n.popoverAlign||(e.isRtl()?["bc-tr","bc-tc"]:["bc-tl","bc-tc"]))},hidePanel:function(){var e=this;e.panel&&e.panel.hide()},postRender:function(){var e=this;return e.aria("haspopup",!0),e.on("click",function(t){t.control===e&&(e.panel&&e.panel.visible()?e.hidePanel():(e.showPanel(),e.panel.focus(!!t.aria)))}),e._super()},remove:function(){return this.panel&&(this.panel.remove(),this.panel=null),this._super()}})}),r(_t,[Nt,w],function(e,t){var n=t.DOM;return e.extend({init:function(e){this._super(e),this.classes.add("colorbutton")},color:function(e){return e?(this._color=e,this.getEl("preview").style.backgroundColor=e,this):this._color},resetColor:function(){return this._color=null,this.getEl("preview").style.backgroundColor=null,this},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.state.get("text"),i=e.settings.icon?n+"ico "+n+"i-"+e.settings.icon:"",o=e.settings.image?" style=\"background-image: url('"+e.settings.image+"')\"":"",a="";return r&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(r)+"</span>"),'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">'+(i?'<i class="'+i+'"'+o+"></i>":"")+'<span id="'+t+'-preview" class="'+n+'preview"></span>'+a+'</button><button type="button" class="'+n+'open" hidefocus="1" tabindex="-1"> <i class="'+n+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(r){r.aria&&"down"==r.aria.key||r.control!=e||n.getParent(r.target,"."+e.classPrefix+"open")||(r.stopImmediatePropagation(),t.call(e,r))}),delete e.settings.onclick,e._super()}})}),r(St,[],function(){function e(e){function i(e,i,o){var a,s,l,u,c,d;return a=0,s=0,l=0,e/=255,i/=255,o/=255,c=t(e,t(i,o)),d=n(e,n(i,o)),c==d?(l=c,{h:0,s:0,v:100*l}):(u=e==c?i-o:o==c?e-i:o-e,a=e==c?3:o==c?1:5,a=60*(a-u/(d-c)),s=(d-c)/d,l=d,{h:r(a),s:r(100*s),v:r(100*l)})}function o(e,i,o){var a,s,l,u;if(e=(parseInt(e,10)||0)%360,i=parseInt(i,10)/100,o=parseInt(o,10)/100,i=n(0,t(i,1)),o=n(0,t(o,1)),0===i)return void(d=f=p=r(255*o));switch(a=e/60,s=o*i,l=s*(1-Math.abs(a%2-1)),u=o-s,Math.floor(a)){case 0:d=s,f=l,p=0;break;case 1:d=l,f=s,p=0;break;case 2:d=0,f=s,p=l;break;case 3:d=0,f=l,p=s;break;case 4:d=l,f=0,p=s;break;case 5:d=s,f=0,p=l;break;default:d=f=p=0}d=r(255*(d+u)),f=r(255*(f+u)),p=r(255*(p+u))}function a(){function e(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+e(d)+e(f)+e(p)}function s(){return{r:d,g:f,b:p}}function l(){return i(d,f,p)}function u(e){var t;return"object"==typeof e?"r"in e?(d=e.r,f=e.g,p=e.b):"v"in e&&o(e.h,e.s,e.v):(t=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(d=parseInt(t[1],10),f=parseInt(t[2],10),p=parseInt(t[3],10)):(t=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(d=parseInt(t[1],16),f=parseInt(t[2],16),p=parseInt(t[3],16)):(t=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(d=parseInt(t[1]+t[1],16),f=parseInt(t[2]+t[2],16),p=parseInt(t[3]+t[3],16)),d=d<0?0:d>255?255:d,f=f<0?0:f>255?255:f,p=p<0?0:p>255?255:p,c}var c=this,d=0,f=0,p=0;e&&u(e),c.toRgb=s,c.toHsv=l,c.toHex=a,c.parse=u}var t=Math.min,n=Math.max,r=Math.round;return e}),r(kt,[Pe,_e,ve,St],function(e,t,n,r){return e.extend({Defaults:{classes:"widget colorpicker"},init:function(e){this._super(e)},postRender:function(){function e(e,t){var r=n.getPos(e),i,o;return i=t.pageX-r.x,o=t.pageY-r.y,i=Math.max(0,Math.min(i/e.clientWidth,1)),o=Math.max(0,Math.min(o/e.clientHeight,1)),{x:i,y:o}}function i(e,t){var i=(360-e.h)/360;n.css(d,{top:100*i+"%"}),t||n.css(p,{left:e.s+"%",top:100-e.v+"%"}),f.style.background=new r({s:100,v:100,h:e.h}).toHex(),s.color().parse({s:e.s,v:e.v,h:e.h})}function o(t){var n;n=e(f,t),u.s=100*n.x,u.v=100*(1-n.y),i(u),s.fire("change")}function a(t){var n;n=e(c,t),u=l.toHsv(),u.h=360*(1-n.y),i(u,!0),s.fire("change")}var s=this,l=s.color(),u,c,d,f,p;c=s.getEl("h"),d=s.getEl("hp"),f=s.getEl("sv"),p=s.getEl("svp"),s._repaint=function(){u=l.toHsv(),i(u)},s._super(),s._svdraghelper=new t(s._id+"-sv",{start:o,drag:o}),s._hdraghelper=new t(s._id+"-h",{start:a,drag:a}),s._repaint()},rgb:function(){return this.color().toRgb()},value:function(e){var t=this;return arguments.length?(t.color().parse(e),void(t._rendered&&t._repaint())):t.color().toHex()},color:function(){return this._color||(this._color=new r),this._color},renderHtml:function(){function e(){var e,t,n="",i,a;for(i="filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=",a=o.split(","),e=0,t=a.length-1;e<t;e++)n+='<div class="'+r+'colorpicker-h-chunk" style="height:'+100/t+"%;"+i+a[e]+",endColorstr="+a[e+1]+");-ms-"+i+a[e]+",endColorstr="+a[e+1]+')"></div>';return n}var t=this,n=t._id,r=t.classPrefix,i,o="#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000",a="background: -ms-linear-gradient(top,"+o+");background: linear-gradient(to bottom,"+o+");";return i='<div id="'+n+'-h" class="'+r+'colorpicker-h" style="'+a+'">'+e()+'<div id="'+n+'-hp" class="'+r+'colorpicker-h-marker"></div></div>','<div id="'+n+'" class="'+t.classes+'"><div id="'+n+'-sv" class="'+r+'colorpicker-sv"><div class="'+r+'colorpicker-overlay1"><div class="'+r+'colorpicker-overlay2"><div id="'+n+'-svp" class="'+r+'colorpicker-selector1"><div class="'+r+'colorpicker-selector2"></div></div></div></div></div>'+i+"</div>"}})}),r(Tt,[Pe],function(e){return e.extend({init:function(e){var t=this;e.delimiter||(e.delimiter="\xbb"),t._super(e),t.classes.add("path"),t.canFocus=!0,t.on("click",function(e){var n,r=e.target;(n=r.getAttribute("data-index"))&&t.fire("select",{value:t.row()[n],index:n})}),t.row(t.settings.row)},focus:function(){var e=this;return e.getEl().firstChild.focus(),e},row:function(e){return arguments.length?(this.state.set("row",e),this):this.state.get("row")},renderHtml:function(){var e=this;return'<div id="'+e._id+'" class="'+e.classes+'">'+e._getDataPathHtml(e.state.get("row"))+"</div>"},bindStates:function(){var e=this;return e.state.on("change:row",function(t){e.innerHtml(e._getDataPathHtml(t.value))}),e._super()},_getDataPathHtml:function(e){var t=this,n=e||[],r,i,o="",a=t.classPrefix;for(r=0,i=n.length;r<i;r++)o+=(r>0?'<div class="'+a+'divider" aria-hidden="true"> '+t.settings.delimiter+" </div>":"")+'<div role="button" class="'+a+"path-item"+(r==i-1?" "+a+"last":"")+'" data-index="'+r+'" tabindex="-1" id="'+t._id+"-"+r+'" aria-level="'+(r+1)+'">'+n[r].name+"</div>";return o||(o='<div class="'+a+'path-item">\xa0</div>'),o}})}),r(Rt,[Tt],function(e){return e.extend({postRender:function(){function e(e){if(1===e.nodeType){if("BR"==e.nodeName||e.getAttribute("data-mce-bogus"))return!0;if("bookmark"===e.getAttribute("data-mce-type"))return!0}return!1}var t=this,n=t.settings.editor;return n.settings.elementpath!==!1&&(t.on("select",function(e){n.focus(),n.selection.select(this.row()[e.index].element),n.nodeChanged()}),n.on("nodeChange",function(r){for(var i=[],o=r.parents,a=o.length;a--;)if(1==o[a].nodeType&&!e(o[a])){var s=n.fire("ResolveName",{name:o[a].nodeName.toLowerCase(),target:o[a]});if(s.isDefaultPrevented()||i.push({name:s.name,element:o[a]}),s.isPropagationStopped())break}t.row(i)})),t._super()}})}),r(At,[Ne],function(e){return e.extend({Defaults:{layout:"flex",align:"center",defaults:{flex:1}},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.classes.add("formitem"),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<div id="'+e._id+'-title" class="'+n+'title">'+e.settings.title+"</div>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})}),r(Bt,[Ne,At,m],function(e,t,n){return e.extend({Defaults:{containerCls:"form",layout:"flex",direction:"column",align:"stretch",flex:1,padding:20,labelGap:30,spacing:10,callbacks:{submit:function(){this.submit()}}},preRender:function(){var e=this,r=e.items();e.settings.formItemDefaults||(e.settings.formItemDefaults={layout:"flex",autoResize:"overflow",defaults:{flex:1}}),r.each(function(r){var i,o=r.settings.label;o&&(i=new t(n.extend({items:{type:"label",id:r._id+"-l",text:o,flex:0,forId:r._id,disabled:r.disabled()}},e.settings.formItemDefaults)),i.type="formitem",r.aria("labelledby",r._id+"-l"),"undefined"==typeof r.settings.flex&&(r.settings.flex=1),e.replace(r,i),i.add(r))})},submit:function(){return this.fire("submit",{data:this.toJSON()})},postRender:function(){var e=this;e._super(),e.fromJSON(e.settings.data)},bindStates:function(){function e(){var e=0,n=[],r,i,o;if(t.settings.labelGapCalc!==!1)for(o="children"==t.settings.labelGapCalc?t.find("formitem"):t.items(),o.filter("formitem").each(function(t){var r=t.items()[0],i=r.getEl().clientWidth;e=i>e?i:e,n.push(r)}),i=t.settings.labelGap||0,r=n.length;r--;)n[r].settings.minWidth=e+i}var t=this;t._super(),t.on("show",e),e()}})}),r(Dt,[Bt],function(e){return e.extend({Defaults:{containerCls:"fieldset",layout:"flex",direction:"column",align:"stretch",flex:1,padding:"25 15 5 15",labelGap:30,spacing:10,border:1},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.preRender(),t.preRender(e),'<fieldset id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<legend id="'+e._id+'-title" class="'+n+'fieldset-title">'+e.settings.title+"</legend>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></fieldset>"}})}),r(Lt,[w,z,h,it,m,_],function(e,t,n,r,i,o){var a=i.trim,s=function(e,t,n,r,i){return{type:e,title:t,url:n,level:r,attach:i}},l=function(e){for(;e=e.parentNode;){var t=e.contentEditable;if(t&&"inherit"!==t)return o.isContentEditableTrue(e)}return!1},u=function(t,n){return e.DOM.select(t,n)},c=function(e){return e.innerText||e.textContent},d=function(e){return e.id?e.id:r.uuid("h")},f=function(e){return e&&"A"===e.nodeName&&(e.id||e.name)},p=function(e){return f(e)&&m(e)},h=function(e){return e&&/^(H[1-6])$/.test(e.nodeName)},m=function(e){return l(e)&&!o.isContentEditableFalse(e)},g=function(e){return h(e)&&m(e)},v=function(e){return h(e)?parseInt(e.nodeName.substr(1),10):0},y=function(e){var t=d(e),n=function(){e.id=t};return s("header",c(e),"#"+t,v(e),n)},b=function(e){var n=e.id||e.name,r=c(e);return s("anchor",r?r:"#"+n,"#"+n,0,t.noop)},C=function(e){return n.map(n.filter(e,g),y)},x=function(e){return n.map(n.filter(e,p),b)},w=function(e){var t=u("h1,h2,h3,h4,h5,h6,a:not([href])",e);return t},E=function(e){return a(e.title).length>0},N=function(e){var t=w(e);return n.filter(C(t).concat(x(t)),E)};return{find:N}}),r(Mt,[wt,m,h,z,I,Lt],function(e,t,n,r,i,o){var a={},s=5,l=function(e){return{title:e.title,value:{title:{raw:e.title},url:e.url,attach:e.attach}}},u=function(e){return t.map(e,l)},c=function(e,t){return{title:e,value:{title:e,url:t,attach:r.noop}}},d=function(e,t){var r=n.find(t,function(t){return t.url===e});return!r},f=function(e,t,n){var r=t in e?e[t]:n;return r===!1?null:r},p=function(e,i,o,s){var l={title:"-"},p=function(e){var a=n.filter(e[o],function(e){return d(e,i)});return t.map(a,function(e){return{title:e,value:{title:e,url:e,attach:r.noop}}})},h=function(e){var t=n.filter(i,function(t){return t.type==e});return u(t)},g=function(){var e=h("anchor"),t=f(s,"anchor_top","#top"),n=f(s,"anchor_bottom","#bottom");return null!==t&&e.unshift(c("<top>",t)),null!==n&&e.push(c("<bottom>",n)),e},v=function(e){return n.reduce(e,function(e,t){var n=0===e.length||0===t.length;return n?e.concat(t):e.concat(l,t)},[])};return s.typeahead_urls===!1?[]:"file"===o?v([m(e,p(a)),m(e,h("header")),m(e,g())]):m(e,p(a))},h=function(e,t){var r=a[t];/^https?/.test(e)&&(r?n.indexOf(r,e)===-1&&(a[t]=r.slice(0,s).concat(e)):a[t]=[e])},m=function(e,n){var r=e.toLowerCase(),i=t.grep(n,function(e){return e.title.toLowerCase().indexOf(r)!==-1});return 1===i.length&&i[0].title===e?[]:i},g=function(e){var t=e.title;return t.raw?t.raw:t},v=function(e,t,n,r){var i=function(i){var a=o.find(n),s=p(i,a,r,t);e.showAutoComplete(s,i)};e.on("autocomplete",function(){i(e.value())}),e.on("selectitem",function(t){var n=t.value;e.value(n.url);var i=g(n);"image"===r?e.fire("change",{meta:{alt:i,attach:n.attach}}):e.fire("change",{meta:{text:i,attach:n.attach}}),e.focus()}),e.on("click",function(t){0===e.value().length&&"INPUT"===t.target.nodeName&&i("")}),e.on("PostRender",function(){e.getRoot().on("submit",function(t){t.isDefaultPrevented()||h(e.value(),r)})})},y=function(e){var t=e.status,n=e.message;return"valid"===t?{status:"ok",message:n}:"unknown"===t?{status:"warn",message:n}:"invalid"===t?{status:"warn",message:n}:{status:"none",message:""}},b=function(e,t,n){var r=t.filepicker_validator_handler;if(r){var i=function(t){return 0===t.length?void e.statusLevel("none"):void r({url:t,type:n},function(t){var n=y(t);e.statusMessage(n.message),e.statusLevel(n.status)})};e.state.on("change:value",function(e){i(e.value)})}};return e.extend({init:function(e){var n=this,r=tinymce.activeEditor,i=r.settings,o,a,s,l=e.filetype;e.spellcheck=!1,s=i.file_picker_types||i.file_browser_callback_types,s&&(s=t.makeMap(s,/[, ]/)),s&&!s[l]||(a=i.file_picker_callback,!a||s&&!s[l]?(a=i.file_browser_callback,!a||s&&!s[l]||(o=function(){a(n.getEl("inp").id,n.value(),l,window)})):o=function(){var e=n.fire("beforecall").meta;e=t.extend({filetype:l},e),a.call(r,function(e,t){n.value(e).fire("change",{meta:t})},n.value(),e)}),o&&(e.icon="browse",e.onaction=o),n._super(e),v(n,i,r.getBody(),l),b(n,i,l)}})}),r(Pt,[yt],function(e){return e.extend({recalc:function(e){var t=e.layoutRect(),n=e.paddingBox;e.items().filter(":visible").each(function(e){e.layoutRect({x:n.left,y:n.top,w:t.innerW-n.right-n.left,h:t.innerH-n.top-n.bottom}),e.recalc&&e.recalc()})}})}),r(Ot,[yt],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,u,c,d,f,p,h,m,g,v=[],y,b,C,x,w,E,N,_,S,k,T,R,A,B,D,L,M,P,O,H,I,F,z=Math.max,U=Math.min;for(r=e.items().filter(":visible"),i=e.layoutRect(),o=e.paddingBox,a=e.settings,f=e.isRtl()?a.direction||"row-reversed":a.direction,s=a.align,l=e.isRtl()?a.pack||"end":a.pack,u=a.spacing||0,"row-reversed"!=f&&"column-reverse"!=f||(r=r.set(r.toArray().reverse()),f=f.split("-")[0]),"column"==f?(S="y",N="h",_="minH",k="maxH",R="innerH",T="top",A="deltaH",B="contentH",O="left",M="w",D="x",L="innerW",P="minW",H="right",I="deltaW",F="contentW"):(S="x",N="w",_="minW",k="maxW",R="innerW",T="left",A="deltaW",B="contentW",O="top",M="h",D="y",L="innerH",P="minH",H="bottom",I="deltaH",F="contentH"),d=i[R]-o[T]-o[T],E=c=0,t=0,n=r.length;t<n;t++)p=r[t],h=p.layoutRect(),m=p.settings,g=m.flex,d-=t<n-1?u:0,g>0&&(c+=g,h[k]&&v.push(p),h.flex=g),d-=h[_],y=o[O]+h[P]+o[H],y>E&&(E=y);if(x={},d<0?x[_]=i[_]-d+i[A]:x[_]=i[R]-d+i[A],x[P]=E+i[I],x[B]=i[R]-d,x[F]=E,x.minW=U(x.minW,i.maxW),x.minH=U(x.minH,i.maxH),x.minW=z(x.minW,i.startMinWidth),x.minH=z(x.minH,i.startMinHeight),!i.autoResize||x.minW==i.minW&&x.minH==i.minH){for(C=d/c,t=0,n=v.length;t<n;t++)p=v[t],h=p.layoutRect(),b=h[k],y=h[_]+h.flex*C,y>b?(d-=h[k]-h[_],c-=h.flex,h.flex=0,h.maxFlexSize=b):h.maxFlexSize=0;for(C=d/c,w=o[T],x={},0===c&&("end"==l?w=d+o[T]:"center"==l?(w=Math.round(i[R]/2-(i[R]-d)/2)+o[T],w<0&&(w=o[T])):"justify"==l&&(w=o[T],u=Math.floor(d/(r.length-1)))),x[D]=o[O],t=0,n=r.length;t<n;t++)p=r[t],h=p.layoutRect(),y=h.maxFlexSize||h[_],"center"===s?x[D]=Math.round(i[L]/2-h[M]/2):"stretch"===s?(x[M]=z(h[P]||0,i[L]-o[O]-o[H]),x[D]=o[O]):"end"===s&&(x[D]=i[L]-h[M]-o.top),h.flex>0&&(y+=h.flex*C),x[N]=y,x[S]=w,p.layoutRect(x),p.recalc&&p.recalc(),w+=y+u}else if(x.w=x.minW,x.h=x.minH,e.layoutRect(x),this.recalc(e),null===e._lastRect){var W=e.parent();W&&(W._lastRect=null,W.recalc())}}})}),r(Ht,[vt],function(e){return e.extend({Defaults:{containerClass:"flow-layout",controlClass:"flow-layout-item",endClass:"break"},recalc:function(e){e.items().filter(":visible").each(function(e){e.recalc&&e.recalc()})},isNative:function(){return!0}})}),r(It,[w],function(e){var n=function(e,t,n){for(;n!==t;){if(n.style[e])return n.style[e];n=n.parentNode}return""},r=function(e){return/[0-9.]+px$/.test(e)?Math.round(72*parseInt(e,10)/96)+"pt":e},i=function(e){return e.replace(/[\'\"]/g,"").replace(/,\s+/g,",")},o=function(t,n){return e.DOM.getStyle(n,t,!0)},a=function(e,t){var r=n("fontSize",e,t);return""!==r?r:o("fontSize",t)},s=function(e,r){var a=n("fontFamily",e,r),s=""!==a?a:o("fontFamily",r);return s!==t?i(s):""};return{getFontSize:a,getFontFamily:s,toPt:r}}),r(Ft,[xe,Pe,Ae,m,h,w,ut,d,It],function(e,t,n,r,i,o,a,s,l){function u(e){e.settings.ui_container&&(s.container=o.DOM.select(e.settings.ui_container)[0])}function c(t){t.on("ScriptsLoaded",function(){t.rtl&&(e.rtl=!0)})}function d(e){function t(t,n){return function(){var r=this;e.on("nodeChange",function(i){var o=e.formatter,a=null;f(i.parents,function(e){if(f(t,function(t){if(n?o.matchNode(e,n,{value:t.value})&&(a=t.value):o.matchNode(e,t.value)&&(a=t.value),a)return!1}),a)return!1}),r.value(a)})}}function i(t){return function(){var n=this,r=function(e){return e?e.split(",")[0]:""};e.on("nodeChange",function(i){var o,a=null;o=l.getFontFamily(e.getBody(),i.element),f(t,function(e){e.value.toLowerCase()===o.toLowerCase()&&(a=e.value)}),f(t,function(e){a||r(e.value).toLowerCase()!==r(o).toLowerCase()||(a=e.value)}),n.value(a),!a&&o&&n.text(r(o))})}}function o(t){return function(){var n=this;e.on("nodeChange",function(r){var i,o,a=null;i=l.getFontSize(e.getBody(),r.element),o=l.toPt(i),f(t,function(e){e.value===i?a=i:e.value===o&&(a=o)}),n.value(a),a||n.text(o)})}}function a(e){e=e.replace(/;$/,"").split(";");for(var t=e.length;t--;)e[t]=e[t].split("=");return e}function s(){function t(e){var n=[];if(e)return f(e,function(e){var o={text:e.title,icon:e.icon};if(e.items)o.menu=t(e.items);else{var a=e.format||"custom"+r++;e.format||(e.name=a,i.push(e)),o.format=a,o.cmd=e.cmd}n.push(o)}),n}function n(){var n;return n=t(e.settings.style_formats_merge?e.settings.style_formats?o.concat(e.settings.style_formats):o:e.settings.style_formats||o)}var r=0,i=[],o=[{title:"Headings",items:[{title:"Heading 1",format:"h1"},{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}]},{title:"Inline",items:[{title:"Bold",icon:"bold",format:"bold"},{title:"Italic",icon:"italic",format:"italic"},{title:"Underline",icon:"underline",format:"underline"},{title:"Strikethrough",icon:"strikethrough",format:"strikethrough"},{title:"Superscript",icon:"superscript",format:"superscript"},{title:"Subscript",icon:"subscript",format:"subscript"},{title:"Code",icon:"code",format:"code"}]},{title:"Blocks",items:[{title:"Paragraph",format:"p"},{title:"Blockquote",format:"blockquote"},{title:"Div",format:"div"},{title:"Pre",format:"pre"}]},{title:"Alignment",items:[{title:"Left",icon:"alignleft",format:"alignleft"},{title:"Center",icon:"aligncenter",format:"aligncenter"},{title:"Right",icon:"alignright",format:"alignright"},{title:"Justify",icon:"alignjustify",format:"alignjustify"}]}];return e.on("init",function(){f(i,function(t){e.formatter.register(t.name,t)})}),{type:"menu",items:n(),onPostRender:function(t){e.fire("renderFormatsMenu",{control:t.control})},itemDefaults:{preview:!0,textStyle:function(){if(this.settings.format)return e.formatter.getCssText(this.settings.format)},onPostRender:function(){var t=this;t.parent().on("show",function(){var n,r;n=t.settings.format,n&&(t.disabled(!e.formatter.canApply(n)),t.active(e.formatter.match(n))),r=t.settings.cmd,r&&t.active(e.queryCommandState(r))})},onclick:function(){this.settings.format&&h(this.settings.format),this.settings.cmd&&e.execCommand(this.settings.cmd)}}}}function u(t){return function(){var n=this;e.formatter?e.formatter.formatChanged(t,function(e){n.active(e)}):e.on("init",function(){e.formatter.formatChanged(t,function(e){n.active(e)})})}}function c(t){return function(){function n(){var n="redo"==t?"hasRedo":"hasUndo";return!!e.undoManager&&e.undoManager[n]()}var r=this;r.disabled(!n()),e.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode",function(){r.disabled(e.readonly||!n())})}}function d(){var t=this;e.on("VisualAid",function(e){t.active(e.hasVisual)}),t.active(e.hasVisual)}function h(t){t.control&&(t=t.control.value()),t&&e.execCommand("mceToggleFormat",!1,t)}function m(t){var n=t.length;return r.each(t,function(t){t.menu&&(t.hidden=0===m(t.menu));var r=t.format;r&&(t.hidden=!e.formatter.canApply(r)),t.hidden&&n--}),n}function g(t){var n=t.items().length;return t.items().each(function(t){t.menu&&t.visible(g(t.menu)>0),!t.menu&&t.settings.menu&&t.visible(m(t.settings.menu)>0);var r=t.settings.format;r&&t.visible(e.formatter.canApply(r)),t.visible()||n--}),n}var v;v=s(),f({bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript"},function(t,n){e.addButton(n,{tooltip:t,onPostRender:u(n),onclick:function(){h(n)}})}),f({outdent:["Decrease indent","Outdent"],indent:["Increase indent","Indent"],cut:["Cut","Cut"],copy:["Copy","Copy"],paste:["Paste","Paste"],help:["Help","mceHelp"],selectall:["Select all","SelectAll"],removeformat:["Clear formatting","RemoveFormat"],visualaid:["Visual aids","mceToggleVisualAid"],newdocument:["New document","mceNewDocument"]},function(t,n){e.addButton(n,{tooltip:t[0],cmd:t[1]})}),f({blockquote:["Blockquote","mceBlockQuote"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],alignleft:["Align left","JustifyLeft"],aligncenter:["Align center","JustifyCenter"],alignright:["Align right","JustifyRight"],alignjustify:["Justify","JustifyFull"],alignnone:["No alignment","JustifyNone"]},function(t,n){e.addButton(n,{tooltip:t[0],cmd:t[1],onPostRender:u(n)})});var y=function(e){var t=e;return t.length>0&&"-"===t[0].text&&(t=t.slice(1)),t.length>0&&"-"===t[t.length-1].text&&(t=t.slice(0,t.length-1)),t},b=function(t){var n,i;if("string"==typeof t)i=t.split(" ");else if(r.isArray(t))return p(r.map(t,b));return n=r.grep(i,function(t){return"|"===t||t in e.menuItems}),r.map(n,function(t){return"|"===t?{text:"-"}:e.menuItems[t]})},C=function(t){var n=[{text:"-"}],i=r.grep(e.menuItems,function(e){return e.context===t});return r.each(i,function(e){"before"==e.separator&&n.push({text:"|"}),e.prependToContext?n.unshift(e):n.push(e),"after"==e.separator&&n.push({text:"|"})}),n},x=function(e){return y(e.insert_button_items?b(e.insert_button_items):C("insert"))};e.addButton("undo",{tooltip:"Undo",onPostRender:c("undo"),cmd:"undo"}),e.addButton("redo",{tooltip:"Redo",onPostRender:c("redo"),cmd:"redo"}),e.addMenuItem("newdocument",{text:"New document",icon:"newdocument",cmd:"mceNewDocument"}),e.addMenuItem("undo",{text:"Undo",icon:"undo",shortcut:"Meta+Z",onPostRender:c("undo"),cmd:"undo"}),e.addMenuItem("redo",{text:"Redo",icon:"redo",shortcut:"Meta+Y",onPostRender:c("redo"),cmd:"redo"}),e.addMenuItem("visualaid",{text:"Visual aids",selectable:!0,onPostRender:d,cmd:"mceToggleVisualAid"}),e.addButton("remove",{tooltip:"Remove",icon:"remove",cmd:"Delete"}),e.addButton("insert",{type:"menubutton",icon:"insert",menu:[],oncreatemenu:function(){this.menu.add(x(e.settings)),this.menu.renderNew()}}),f({cut:["Cut","Cut","Meta+X"],copy:["Copy","Copy","Meta+C"],paste:["Paste","Paste","Meta+V"],selectall:["Select all","SelectAll","Meta+A"],bold:["Bold","Bold","Meta+B"],italic:["Italic","Italic","Meta+I"],underline:["Underline","Underline","Meta+U"],strikethrough:["Strikethrough","Strikethrough"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],removeformat:["Clear formatting","RemoveFormat"]},function(t,n){e.addMenuItem(n,{text:t[0],icon:n,shortcut:t[2],cmd:t[1]})}),e.on("mousedown",function(){n.hideAll()}),e.addButton("styleselect",{type:"menubutton",text:"Formats",menu:v,onShowMenu:function(){e.settings.style_formats_autohide&&g(this.menu)}}),e.addButton("formatselect",function(){var n=[],r=a(e.settings.block_formats||"Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre");return f(r,function(t){n.push({text:t[0],value:t[1],textStyle:function(){return e.formatter.getCssText(t[1])}})}),{type:"listbox",text:r[0][0],values:n,fixedWidth:!0,onselect:h,onPostRender:t(n)}}),e.addButton("fontselect",function(){var t="Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats",n=[],r=a(e.settings.font_formats||t);return f(r,function(e){n.push({text:{raw:e[0]},value:e[1],textStyle:e[1].indexOf("dings")==-1?"font-family:"+e[1]:""})}),{type:"listbox",text:"Font Family",tooltip:"Font Family",values:n,fixedWidth:!0,onPostRender:i(n),onselect:function(t){t.control.settings.value&&e.execCommand("FontName",!1,t.control.settings.value)}}}),e.addButton("fontsizeselect",function(){var t=[],n="8pt 10pt 12pt 14pt 18pt 24pt 36pt",r=e.settings.fontsize_formats||n;return f(r.split(" "),function(e){var n=e,r=e,i=e.split("=");i.length>1&&(n=i[0],r=i[1]),t.push({text:n,value:r})}),{type:"listbox",text:"Font Sizes",tooltip:"Font Sizes",values:t,fixedWidth:!0,onPostRender:o(t),onclick:function(t){t.control.settings.value&&e.execCommand("FontSize",!1,t.control.settings.value)}}}),e.addMenuItem("formats",{text:"Formats",menu:v})}var f=r.each,p=function(e){return i.reduce(e,function(e,t){return e.concat(t)},[])};a.on("AddEditor",function(e){var t=e.editor;c(t),d(t),u(t)}),e.translate=function(e){return a.translate(e)},t.tooltips=!s.iOS}),r(zt,[yt],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,u,c,d,f,p,h,m,g,v,y,b,C,x,w,E,N=[],_=[],S,k,T,R,A,B;t=e.settings,i=e.items().filter(":visible"),o=e.layoutRect(),r=t.columns||Math.ceil(Math.sqrt(i.length)),n=Math.ceil(i.length/r),y=t.spacingH||t.spacing||0,b=t.spacingV||t.spacing||0,C=t.alignH||t.align,x=t.alignV||t.align,g=e.paddingBox,A="reverseRows"in t?t.reverseRows:e.isRtl(),C&&"string"==typeof C&&(C=[C]),x&&"string"==typeof x&&(x=[x]);for(d=0;d<r;d++)N.push(0);for(f=0;f<n;f++)_.push(0);for(f=0;f<n;f++)for(d=0;d<r&&(c=i[f*r+d],c);d++)u=c.layoutRect(),S=u.minW,k=u.minH,N[d]=S>N[d]?S:N[d],_[f]=k>_[f]?k:_[f];for(T=o.innerW-g.left-g.right,w=0,d=0;d<r;d++)w+=N[d]+(d>0?y:0),T-=(d>0?y:0)+N[d];for(R=o.innerH-g.top-g.bottom,E=0,f=0;f<n;f++)E+=_[f]+(f>0?b:0),R-=(f>0?b:0)+_[f];if(w+=g.left+g.right,E+=g.top+g.bottom,l={},l.minW=w+(o.w-o.innerW),l.minH=E+(o.h-o.innerH),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH,l.minW=Math.min(l.minW,o.maxW),l.minH=Math.min(l.minH,o.maxH),l.minW=Math.max(l.minW,o.startMinWidth),l.minH=Math.max(l.minH,o.startMinHeight),!o.autoResize||l.minW==o.minW&&l.minH==o.minH){o.autoResize&&(l=e.layoutRect(l),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH);var D;D="start"==t.packV?0:R>0?Math.floor(R/n):0;var L=0,M=t.flexWidths;if(M)for(d=0;d<M.length;d++)L+=M[d];else L=r;var P=T/L;for(d=0;d<r;d++)N[d]+=M?M[d]*P:P;for(h=g.top,f=0;f<n;f++){for(p=g.left,s=_[f]+D,d=0;d<r&&(B=A?f*r+r-1-d:f*r+d,c=i[B],c);d++)m=c.settings,u=c.layoutRect(),a=Math.max(N[d],u.startMinWidth),u.x=p,u.y=h,v=m.alignH||(C?C[d]||C[0]:null),"center"==v?u.x=p+a/2-u.w/2:"right"==v?u.x=p+a-u.w:"stretch"==v&&(u.w=a),v=m.alignV||(x?x[d]||x[0]:null),"center"==v?u.y=h+s/2-u.h/2:"bottom"==v?u.y=h+s-u.h:"stretch"==v&&(u.h=s),c.layoutRect(u),p+=a+y,c.recalc&&c.recalc();h+=s+b}}else if(l.w=l.minW,l.h=l.minH,e.layoutRect(l),this.recalc(e),null===e._lastRect){var O=e.parent();O&&(O._lastRect=null,O.recalc())}}})}),r(Ut,[Pe,c],function(e,t){return e.extend({renderHtml:function(){var e=this;return e.classes.add("iframe"),e.canFocus=!1,'<iframe id="'+e._id+'" class="'+e.classes+'" tabindex="-1" src="'+(e.settings.url||"javascript:''")+'" frameborder="0"></iframe>'},src:function(e){this.getEl().src=e},html:function(e,n){var r=this,i=this.getEl().contentWindow.document.body;return i?(i.innerHTML=e,n&&n()):t.setTimeout(function(){r.html(e)}),this}})}),r(Wt,[Pe],function(e){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("widget").add("infobox"),t.canFocus=!1},severity:function(e){this.classes.remove("error"),this.classes.remove("warning"),this.classes.remove("success"),this.classes.add(e)},help:function(e){this.state.set("help",e)},renderHtml:function(){var e=this,t=e.classPrefix;return'<div id="'+e._id+'" class="'+e.classes+'"><div id="'+e._id+'-body">'+e.encode(e.state.get("text"))+'<button role="button" tabindex="-1"><i class="'+t+"ico "+t+'i-help"></i></button></div></div>'},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl("body").firstChild.data=e.encode(t.value),
e.state.get("rendered")&&e.updateLayoutRect()}),e.state.on("change:help",function(t){e.classes.toggle("has-help",t.value),e.state.get("rendered")&&e.updateLayoutRect()}),e._super()}})}),r(Vt,[Pe,ve],function(e,t){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("widget").add("label"),t.canFocus=!1,e.multiline&&t.classes.add("autoscroll"),e.strong&&t.classes.add("strong")},initLayoutRect:function(){var e=this,n=e._super();if(e.settings.multiline){var r=t.getSize(e.getEl());r.width>n.maxW&&(n.minW=n.maxW,e.classes.add("multiline")),e.getEl().style.width=n.minW+"px",n.startMinH=n.h=n.minH=Math.min(n.maxH,t.getSize(e.getEl()).height)}return n},repaint:function(){var e=this;return e.settings.multiline||(e.getEl().style.lineHeight=e.layoutRect().h+"px"),e._super()},severity:function(e){this.classes.remove("error"),this.classes.remove("warning"),this.classes.remove("success"),this.classes.add(e)},renderHtml:function(){var e=this,t,n,r=e.settings.forId;return!r&&(n=e.settings.forName)&&(t=e.getRoot().find("#"+n)[0],t&&(r=t._id)),r?'<label id="'+e._id+'" class="'+e.classes+'"'+(r?' for="'+r+'"':"")+">"+e.encode(e.state.get("text"))+"</label>":'<span id="'+e._id+'" class="'+e.classes+'">'+e.encode(e.state.get("text"))+"</span>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.innerHtml(e.encode(t.value)),e.state.get("rendered")&&e.updateLayoutRect()}),e._super()}})}),r($t,[Ne],function(e){return e.extend({Defaults:{role:"toolbar",layout:"flow"},init:function(e){var t=this;t._super(e),t.classes.add("toolbar")},postRender:function(){var e=this;return e.items().each(function(e){e.classes.add("toolbar-item")}),e._super()}})}),r(qt,[$t],function(e){return e.extend({Defaults:{role:"menubar",containerCls:"menubar",ariaRoot:!0,defaults:{type:"menubutton"}}})}),r(jt,[bt,we,qt],function(e,t,n){function r(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1}var i=e.extend({init:function(e){var t=this;t._renderOpen=!0,t._super(e),e=t.settings,t.classes.add("menubtn"),e.fixedWidth&&t.classes.add("fixed-width"),t.aria("haspopup",!0),t.state.set("menu",e.menu||t.render())},showMenu:function(e){var n=this,r;return n.menu&&n.menu.visible()&&e!==!1?n.hideMenu():(n.menu||(r=n.state.get("menu")||[],r.length?r={type:"menu",items:r}:r.type=r.type||"menu",r.renderTo?n.menu=r.parent(n).show().renderTo():n.menu=t.create(r).parent(n).renderTo(),n.fire("createmenu"),n.menu.reflow(),n.menu.on("cancel",function(e){e.control.parent()===n.menu&&(e.stopPropagation(),n.focus(),n.hideMenu())}),n.menu.on("select",function(){n.focus()}),n.menu.on("show hide",function(e){e.control==n.menu&&n.activeMenu("show"==e.type),n.aria("expanded","show"==e.type)}).fire("show")),n.menu.show(),n.menu.layoutRect({w:n.layoutRect().w}),n.menu.moveRel(n.getEl(),n.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"]),void n.fire("showmenu"))},hideMenu:function(){var e=this;e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide())},activeMenu:function(e){this.classes.toggle("active",e)},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix,i=e.settings.icon,o,a=e.state.get("text"),s="";return o=e.settings.image,o?(i="none","string"!=typeof o&&(o=window.getSelection?o[0]:o[1]),o=" style=\"background-image: url('"+o+"')\""):o="",a&&(e.classes.add("btn-has-text"),s='<span class="'+r+'txt">'+e.encode(a)+"</span>"),i=e.settings.icon?r+"ico "+r+"i-"+i:"",e.aria("role",e.parent()instanceof n?"menuitem":"button"),'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button id="'+t+'-open" role="presentation" type="button" tabindex="-1">'+(i?'<i class="'+i+'"'+o+"></i>":"")+s+' <i class="'+r+'caret"></i></button></div>'},postRender:function(){var e=this;return e.on("click",function(t){t.control===e&&r(t.target,e.getEl())&&(e.focus(),e.showMenu(!t.aria),t.aria&&e.menu.items().filter(":visible")[0].focus())}),e.on("mouseenter",function(t){var n=t.control,r=e.parent(),o;n&&r&&n instanceof i&&n.parent()==r&&(r.items().filter("MenuButton").each(function(e){e.hideMenu&&e!=n&&(e.menu&&e.menu.visible()&&(o=!0),e.hideMenu())}),o&&(n.focus(),n.showMenu()))}),e._super()},bindStates:function(){var e=this;return e.state.on("change:menu",function(){e.menu&&e.menu.remove(),e.menu=null}),e._super()},remove:function(){this._super(),this.menu&&this.menu.remove()}});return i}),r(Yt,[Pe,we,d,c],function(e,t,n,r){return e.extend({Defaults:{border:0,role:"menuitem"},init:function(e){var t=this,n;t._super(e),e=t.settings,t.classes.add("menu-item"),e.menu&&t.classes.add("menu-item-expand"),e.preview&&t.classes.add("menu-item-preview"),n=t.state.get("text"),"-"!==n&&"|"!==n||(t.classes.add("menu-item-sep"),t.aria("role","separator"),t.state.set("text","-")),e.selectable&&(t.aria("role","menuitemcheckbox"),t.classes.add("menu-item-checkbox"),e.icon="selected"),e.preview||e.selectable||t.classes.add("menu-item-normal"),t.on("mousedown",function(e){e.preventDefault()}),e.menu&&!e.ariaHideMenu&&t.aria("haspopup",!0)},hasMenus:function(){return!!this.settings.menu},showMenu:function(){var e=this,n=e.settings,r,i=e.parent();if(i.items().each(function(t){t!==e&&t.hideMenu()}),n.menu){r=e.menu,r?r.show():(r=n.menu,r.length?r={type:"menu",items:r}:r.type=r.type||"menu",i.settings.itemDefaults&&(r.itemDefaults=i.settings.itemDefaults),r=e.menu=t.create(r).parent(e).renderTo(),r.reflow(),r.on("cancel",function(t){t.stopPropagation(),e.focus(),r.hide()}),r.on("show hide",function(e){e.control.items&&e.control.items().each(function(e){e.active(e.settings.selected)})}).fire("show"),r.on("hide",function(t){t.control===r&&e.classes.remove("selected")}),r.submenu=!0),r._parentMenu=i,r.classes.add("menu-sub");var o=r.testMoveRel(e.getEl(),e.isRtl()?["tl-tr","bl-br","tr-tl","br-bl"]:["tr-tl","br-bl","tl-tr","bl-br"]);r.moveRel(e.getEl(),o),r.rel=o,o="menu-sub-"+o,r.classes.remove(r._lastRel).add(o),r._lastRel=o,e.classes.add("selected"),e.aria("expanded",!0)}},hideMenu:function(){var e=this;return e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide(),e.aria("expanded",!1)),e},renderHtml:function(){function e(e){var t,r,i={};for(i=n.mac?{alt:"&#x2325;",ctrl:"&#x2318;",shift:"&#x21E7;",meta:"&#x2318;"}:{meta:"Ctrl"},e=e.split("+"),t=0;t<e.length;t++)r=i[e[t].toLowerCase()],r&&(e[t]=r);return e.join("+")}function t(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(e){var n=s.match||"";return n?e.replace(new RegExp(t(n),"gi"),function(e){return"!mce~match["+e+"]mce~match!"}):e}function i(e){return e.replace(new RegExp(t("!mce~match["),"g"),"<b>").replace(new RegExp(t("]mce~match!"),"g"),"</b>")}var o=this,a=o._id,s=o.settings,l=o.classPrefix,u=o.state.get("text"),c=o.settings.icon,d="",f=s.shortcut,p=o.encode(s.url),h="";return c&&o.parent().classes.add("menu-has-icons"),s.image&&(d=" style=\"background-image: url('"+s.image+"')\""),f&&(f=e(f)),c=l+"ico "+l+"i-"+(o.settings.icon||"none"),h="-"!==u?'<i class="'+c+'"'+d+"></i>\xa0":"",u=i(o.encode(r(u))),p=i(o.encode(r(p))),'<div id="'+a+'" class="'+o.classes+'" tabindex="-1">'+h+("-"!==u?'<span id="'+a+'-text" class="'+l+'text">'+u+"</span>":"")+(f?'<div id="'+a+'-shortcut" class="'+l+'menu-shortcut">'+f+"</div>":"")+(s.menu?'<div class="'+l+'caret"></div>':"")+(p?'<div class="'+l+'menu-item-link">'+p+"</div>":"")+"</div>"},postRender:function(){var e=this,t=e.settings,n=t.textStyle;if("function"==typeof n&&(n=n.call(this)),n){var i=e.getEl("text");i&&i.setAttribute("style",n)}return e.on("mouseenter click",function(n){n.control===e&&(t.menu||"click"!==n.type?(e.showMenu(),n.aria&&e.menu.focus(!0)):(e.fire("select"),r.requestAnimationFrame(function(){e.parent().hideAll()})))}),e._super(),e},hover:function(){var e=this;return e.parent().items().each(function(e){e.classes.remove("selected")}),e.classes.toggle("selected",!0),e},active:function(e){return"undefined"!=typeof e&&this.aria("checked",e),this._super(e)},remove:function(){this._super(),this.menu&&this.menu.remove()}})}),r(Xt,[g,xe,c],function(e,t,n){return function(r,i){var o=this,a,s=t.classPrefix,l;o.show=function(t,u){function c(){a&&(e(r).append('<div class="'+s+"throbber"+(i?" "+s+"throbber-inline":"")+'"></div>'),u&&u())}return o.hide(),a=!0,t?l=n.setTimeout(c,t):c(),o},o.hide=function(){var e=r.lastChild;return n.clearTimeout(l),e&&e.className.indexOf("throbber")!=-1&&e.parentNode.removeChild(e),a=!1,o}}}),r(Kt,[Ae,Yt,Xt,m],function(e,t,n,r){return e.extend({Defaults:{defaultType:"menuitem",border:1,layout:"stack",role:"application",bodyRole:"menu",ariaRoot:!0},init:function(e){var t=this;if(e.autohide=!0,e.constrainToViewport=!0,"function"==typeof e.items&&(e.itemsFactory=e.items,e.items=[]),e.itemDefaults)for(var n=e.items,i=n.length;i--;)n[i]=r.extend({},e.itemDefaults,n[i]);t._super(e),t.classes.add("menu")},repaint:function(){return this.classes.toggle("menu-align",!0),this._super(),this.getEl().style.height="",this.getEl("body").style.height="",this},cancel:function(){var e=this;e.hideAll(),e.fire("select")},load:function(){function e(){t.throbber&&(t.throbber.hide(),t.throbber=null)}var t=this,r,i;i=t.settings.itemsFactory,i&&(t.throbber||(t.throbber=new n(t.getEl("body"),!0),0===t.items().length?(t.throbber.show(),t.fire("loading")):t.throbber.show(100,function(){t.items().remove(),t.fire("loading")}),t.on("hide close",e)),t.requestTime=r=(new Date).getTime(),t.settings.itemsFactory(function(n){return 0===n.length?void t.hide():void(t.requestTime===r&&(t.getEl().style.width="",t.getEl("body").style.width="",e(),t.items().remove(),t.getEl("body").innerHTML="",t.add(n),t.renderNew(),t.fire("loaded")))}))},hideAll:function(){var e=this;return this.find("menuitem").exec("hideMenu"),e._super()},preRender:function(){var e=this;return e.items().each(function(t){var n=t.settings;if(n.icon||n.image||n.selectable)return e._hasIcons=!0,!1}),e.settings.itemsFactory&&e.on("postrender",function(){e.settings.itemsFactory&&e.load()}),e._super()}})}),r(Gt,[jt,Kt],function(e,t){return e.extend({init:function(e){function t(r){for(var a=0;a<r.length;a++){if(i=r[a].selected||e.value===r[a].value)return o=o||r[a].text,n.state.set("value",r[a].value),!0;if(r[a].menu&&t(r[a].menu))return!0}}var n=this,r,i,o,a;n._super(e),e=n.settings,n._values=r=e.values,r&&("undefined"!=typeof e.value&&t(r),!i&&r.length>0&&(o=r[0].text,n.state.set("value",r[0].value)),n.state.set("menu",r)),n.state.set("text",e.text||o),n.classes.add("listbox"),n.on("select",function(t){var r=t.control;a&&(t.lastControl=a),e.multiple?r.active(!r.active()):n.value(t.control.value()),a=r})},bindStates:function(){function e(e,n){e instanceof t&&e.items().each(function(e){e.hasMenus()||e.active(e.value()===n)})}function n(e,t){var r;if(e)for(var i=0;i<e.length;i++){if(e[i].value===t)return e[i];if(e[i].menu&&(r=n(e[i].menu,t)))return r}}var r=this;return r.on("show",function(t){e(t.control,r.value())}),r.state.on("change:value",function(e){var t=n(r.state.get("menu"),e.value);t?r.text(t.text):r.text(r.settings.text)}),r._super()}})}),r(Jt,[xt],function(e){return e.extend({Defaults:{classes:"radio",role:"radio"}})}),r(Qt,[Pe,_e],function(e,t){return e.extend({renderHtml:function(){var e=this,t=e.classPrefix;return e.classes.add("resizehandle"),"both"==e.settings.direction&&e.classes.add("resizehandle-both"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes+'"><i class="'+t+"ico "+t+'i-resize"></i></div>'},postRender:function(){var e=this;e._super(),e.resizeDragHelper=new t(this._id,{start:function(){e.fire("ResizeStart")},drag:function(t){"both"!=e.settings.direction&&(t.deltaX=0),e.fire("Resize",t)},stop:function(){e.fire("ResizeEnd")}})},remove:function(){return this.resizeDragHelper&&this.resizeDragHelper.destroy(),this._super()}})}),r(Zt,[Pe],function(e){function t(e){var t="";if(e)for(var n=0;n<e.length;n++)t+='<option value="'+e[n]+'">'+e[n]+"</option>";return t}return e.extend({Defaults:{classes:"selectbox",role:"selectbox",options:[]},init:function(e){var t=this;t._super(e),t.settings.size&&(t.size=t.settings.size),t.settings.options&&(t._options=t.settings.options),t.on("keydown",function(e){var n;13==e.keyCode&&(e.preventDefault(),t.parents().reverse().each(function(e){if(e.toJSON)return n=e,!1}),t.fire("submit",{data:n.toJSON()}))})},options:function(e){return arguments.length?(this.state.set("options",e),this):this.state.get("options")},renderHtml:function(){var e=this,n,r="";return n=t(e._options),e.size&&(r=' size = "'+e.size+'"'),'<select id="'+e._id+'" class="'+e.classes+'"'+r+">"+n+"</select>"},bindStates:function(){var e=this;return e.state.on("change:options",function(n){e.getEl().innerHTML=t(n.value)}),e._super()}})}),r(en,[Pe,_e,ve],function(e,t,n){function r(e,t,n){return e<t&&(e=t),e>n&&(e=n),e}function i(e,t,n){e.setAttribute("aria-"+t,n)}function o(e,t){var r,o,a,s,l,u;"v"==e.settings.orientation?(s="top",a="height",o="h"):(s="left",a="width",o="w"),u=e.getEl("handle"),r=(e.layoutRect()[o]||100)-n.getSize(u)[a],l=r*((t-e._minValue)/(e._maxValue-e._minValue))+"px",u.style[s]=l,u.style.height=e.layoutRect().h+"px",i(u,"valuenow",t),i(u,"valuetext",""+e.settings.previewFilter(t)),i(u,"valuemin",e._minValue),i(u,"valuemax",e._maxValue)}return e.extend({init:function(e){var t=this;e.previewFilter||(e.previewFilter=function(e){return Math.round(100*e)/100}),t._super(e),t.classes.add("slider"),"v"==e.orientation&&t.classes.add("vertical"),t._minValue=e.minValue||0,t._maxValue=e.maxValue||100,t._initValue=t.state.get("value")},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes+'"><div id="'+t+'-handle" class="'+n+'slider-handle" role="slider" tabindex="-1"></div></div>'},reset:function(){this.value(this._initValue).repaint()},postRender:function(){function e(e,t,n){return(n+e)/(t-e)}function i(e,t,n){return n*(t-e)-e}function o(t,n){function o(o){var a;a=s.value(),a=i(t,n,e(t,n,a)+.05*o),a=r(a,t,n),s.value(a),s.fire("dragstart",{value:a}),s.fire("drag",{value:a}),s.fire("dragend",{value:a})}s.on("keydown",function(e){switch(e.keyCode){case 37:case 38:o(-1);break;case 39:case 40:o(1)}})}function a(e,i,o){var a,l,u,h,m;s._dragHelper=new t(s._id,{handle:s._id+"-handle",start:function(e){a=e[c],l=parseInt(s.getEl("handle").style[d],10),u=(s.layoutRect()[p]||100)-n.getSize(o)[f],s.fire("dragstart",{value:m})},drag:function(t){var n=t[c]-a;h=r(l+n,0,u),o.style[d]=h+"px",m=e+h/u*(i-e),s.value(m),s.tooltip().text(""+s.settings.previewFilter(m)).show().moveRel(o,"bc tc"),s.fire("drag",{value:m})},stop:function(){s.tooltip().hide(),s.fire("dragend",{value:m})}})}var s=this,l,u,c,d,f,p;l=s._minValue,u=s._maxValue,"v"==s.settings.orientation?(c="screenY",d="top",f="height",p="h"):(c="screenX",d="left",f="width",p="w"),s._super(),o(l,u,s.getEl("handle")),a(l,u,s.getEl("handle"))},repaint:function(){this._super(),o(this,this.value())},bindStates:function(){var e=this;return e.state.on("change:value",function(t){o(e,t.value)}),e._super()}})}),r(tn,[Pe],function(e){return e.extend({renderHtml:function(){var e=this;return e.classes.add("spacer"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes+'"></div>'}})}),r(nn,[jt,ve,g],function(e,t,n){return e.extend({Defaults:{classes:"widget btn splitbtn",role:"button"},repaint:function(){var e=this,r=e.getEl(),i=e.layoutRect(),o,a;return e._super(),o=r.firstChild,a=r.lastChild,n(o).css({width:i.w-t.getSize(a).width,height:i.h-2}),n(a).css({height:i.h-2}),e},activeMenu:function(e){var t=this;n(t.getEl().lastChild).toggleClass(t.classPrefix+"active",e)},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r,i=e.state.get("icon"),o=e.state.get("text"),a="";return r=e.settings.image,r?(i="none","string"!=typeof r&&(r=window.getSelection?r[0]:r[1]),r=" style=\"background-image: url('"+r+"')\""):r="",i=e.settings.icon?n+"ico "+n+"i-"+i:"",o&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(o)+"</span>"),'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">'+(i?'<i class="'+i+'"'+r+"></i>":"")+a+'</button><button type="button" class="'+n+'open" hidefocus="1" tabindex="-1">'+(e._menuBtnText?(i?"\xa0":"")+e._menuBtnText:"")+' <i class="'+n+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(e){var n=e.target;if(e.control==this)for(;n;){if(e.aria&&"down"!=e.aria.key||"BUTTON"==n.nodeName&&n.className.indexOf("open")==-1)return e.stopImmediatePropagation(),void(t&&t.call(this,e));n=n.parentNode}}),delete e.settings.onclick,e._super()}})}),r(rn,[Ht],function(e){return e.extend({Defaults:{containerClass:"stack-layout",controlClass:"stack-layout-item",endClass:"break"},isNative:function(){return!0}})}),r(on,[ke,g,ve],function(e,t,n){return e.extend({Defaults:{layout:"absolute",defaults:{type:"panel"}},activateTab:function(e){var n;this.activeTabId&&(n=this.getEl(this.activeTabId),t(n).removeClass(this.classPrefix+"active"),n.setAttribute("aria-selected","false")),this.activeTabId="t"+e,n=this.getEl("t"+e),n.setAttribute("aria-selected","true"),t(n).addClass(this.classPrefix+"active"),this.items()[e].show().fire("showtab"),this.reflow(),this.items().each(function(t,n){e!=n&&t.hide()})},renderHtml:function(){var e=this,t=e._layout,n="",r=e.classPrefix;return e.preRender(),t.preRender(e),e.items().each(function(t,i){var o=e._id+"-t"+i;t.aria("role","tabpanel"),t.aria("labelledby",o),n+='<div id="'+o+'" class="'+r+'tab" unselectable="on" role="tab" aria-controls="'+t._id+'" aria-selected="false" tabIndex="-1">'+e.encode(t.settings.title)+"</div>"}),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1"><div id="'+e._id+'-head" class="'+r+'tabs" role="tablist">'+n+'</div><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this;e._super(),e.settings.activeTab=e.settings.activeTab||0,e.activateTab(e.settings.activeTab),this.on("click",function(t){var n=t.target.parentNode;if(n&&n.id==e._id+"-head")for(var r=n.childNodes.length;r--;)n.childNodes[r]==t.target&&e.activateTab(r)})},initLayoutRect:function(){var e=this,t,r,i;r=n.getSize(e.getEl("head")).width,r=r<0?0:r,i=0,e.items().each(function(e){r=Math.max(r,e.layoutRect().minW),i=Math.max(i,e.layoutRect().minH)}),e.items().each(function(e){e.settings.x=0,e.settings.y=0,e.settings.w=r,e.settings.h=i,e.layoutRect({x:0,y:0,w:r,h:i})});var o=n.getSize(e.getEl("head")).height;return e.settings.minWidth=r,e.settings.minHeight=i+o,t=e._super(),t.deltaH+=o,t.innerH=t.h-t.deltaH,t}})}),r(an,[Pe,m,ve],function(e,t,n){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("textbox"),e.multiline?t.classes.add("multiline"):(t.on("keydown",function(e){var n;13==e.keyCode&&(e.preventDefault(),t.parents().reverse().each(function(e){if(e.toJSON)return n=e,!1}),t.fire("submit",{data:n.toJSON()}))}),t.on("keyup",function(e){t.state.set("value",e.target.value)}))},repaint:function(){var e=this,t,n,r,i,o=0,a;t=e.getEl().style,n=e._layoutRect,a=e._lastRepaintRect||{};var s=document;return!e.settings.multiline&&s.all&&(!s.documentMode||s.documentMode<=8)&&(t.lineHeight=n.h-o+"px"),r=e.borderBox,i=r.left+r.right+8,o=r.top+r.bottom+(e.settings.multiline?8:0),n.x!==a.x&&(t.left=n.x+"px",a.x=n.x),n.y!==a.y&&(t.top=n.y+"px",a.y=n.y),n.w!==a.w&&(t.width=n.w-i+"px",a.w=n.w),n.h!==a.h&&(t.height=n.h-o+"px",a.h=n.h),e._lastRepaintRect=a,e.fire("repaint",{},!1),e},renderHtml:function(){var e=this,r=e.settings,i,o;return i={id:e._id,hidefocus:"1"},t.each(["rows","spellcheck","maxLength","size","readonly","min","max","step","list","pattern","placeholder","required","multiple"],function(e){i[e]=r[e]}),e.disabled()&&(i.disabled="disabled"),r.subtype&&(i.type=r.subtype),o=n.create(r.multiline?"textarea":"input",i),o.value=e.state.get("value"),o.className=e.classes,o.outerHTML},value:function(e){return arguments.length?(this.state.set("value",e),this):(this.state.get("rendered")&&this.state.set("value",this.getEl().value),this.state.get("value"))},postRender:function(){var e=this;e.getEl().value=e.state.get("value"),e._super(),e.$el.on("change",function(t){e.state.set("value",t.target.value),e.fire("change",t)})},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.getEl().value!=t.value&&(e.getEl().value=t.value)}),e.state.on("change:disabled",function(t){e.getEl().disabled=t.value}),e._super()},remove:function(){this.$el.off(),this._super()}})}),r(sn,[],function(){var e=this||window,t=function(){return e.tinymce};return"function"==typeof e.define&&(e.define.amd||e.define("ephox/tinymce",[],t)),"object"==typeof module&&(module.exports=window.tinymce),{}}),a([l,u,c,d,f,p,m,g,v,y,C,w,E,N,T,A,B,D,L,M,P,O,I,F,j,Y,J,te,le,ue,ce,de,pe,me,ge,Ce,xe,we,Ee,Ne,_e,Se,ke,Te,Re,Ae,Be,De,Le,Me,Pe,Oe,He,Ie,Ue,Ve,at,st,lt,ut,dt,ft,pt,ht,mt,gt,vt,yt,bt,Ct,xt,wt,Et,Nt,_t,St,kt,Tt,Rt,At,Bt,Dt,Mt,Pt,Ot,Ht,Ft,zt,Ut,Wt,Vt,$t,qt,jt,Yt,Xt,Kt,Gt,Jt,Qt,Zt,en,tn,nn,rn,on,an])}(window);
;!function(){var e={},t=function(t){for(var n=e[t],i=n.deps,o=n.defn,a=i.length,s=new Array(a),l=0;l<a;++l)s[l]=r(i[l]);var c=o.apply(null,s);if(void 0===c)throw"module ["+t+"] returned undefined";n.instance=c},n=function(t,n,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;e[t]={deps:n,defn:r,instance:void 0}},r=function(n){var r=e[n];if(void 0===r)throw"module ["+n+"] was undefined";return void 0===r.instance&&t(n),r.instance},i=function(e,t){for(var n=e.length,i=new Array(n),o=0;o<n;++o)i.push(r(e[o]));t.apply(null,t)},o={};o.bolt={module:{api:{define:n,require:i,demand:r}}};var a=n,s=function(e,t){a(e,[],function(){return t})};s("1",tinymce.Env),s("2",tinymce.EditorManager),s("3",tinymce.ThemeManager),s("8",tinymce.util.Tools),s("9",tinymce.ui.Factory),s("a",tinymce.DOM),a("b",["8","9"],function(e,t){var n="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",r=function(n,r,i){var o,a=[];if(r)return e.each(r.split(/[ ,]/),function(e){var r,s=function(){var t=n.selection;e.settings.stateSelector&&t.selectorChanged(e.settings.stateSelector,function(t){e.active(t)},!0),e.settings.disabledStateSelector&&t.selectorChanged(e.settings.disabledStateSelector,function(t){e.disabled(t)})};"|"==e?o=null:t.has(e)?(e={type:e,size:i},a.push(e),o=null):(o||(o={type:"buttongroup",items:[]},a.push(o)),n.buttons[e]&&(r=e,e=n.buttons[r],"function"==typeof e&&(e=e()),e.type=e.type||"button",e.size=i,e=t.create(e),o.items.push(e),n.initialized?s():n.on("init",s)))}),{type:"toolbar",layout:"flow",items:a}},i=function(t,i){var o=[],a=t.settings,s=function(e){if(e)return o.push(r(t,e,i)),!0};if(e.isArray(a.toolbar)){if(0===a.toolbar.length)return;e.each(a.toolbar,function(e,t){a["toolbar"+(t+1)]=e}),delete a.toolbar}for(var l=1;l<10&&s(a["toolbar"+l]);l++);if(o.length||a.toolbar===!1||s(a.toolbar||n),o.length)return{type:"panel",layout:"stack",classes:"toolbar-grp",ariaRoot:!0,ariaRemember:!0,items:o}};return{createToolbar:r,createToolbars:i}}),a("c",["8"],function(e){var t={file:{title:"File",items:"newdocument"},edit:{title:"Edit",items:"undo redo | cut copy paste pastetext | selectall"},insert:{title:"Insert",items:"|"},view:{title:"View",items:"visualaid |"},format:{title:"Format",items:"bold italic underline strikethrough superscript subscript | formats | removeformat"},table:{title:"Table"},tools:{title:"Tools"}},n=function(e,t){var n;return"|"==t?{text:"|"}:n=e[t]},r=function(r,i,o){var a,s,l,c,u;if(u=e.makeMap((i.removed_menuitems||"").split(/[ ,]/)),i.menu?(s=i.menu[o],c=!0):s=t[o],s){a={text:s.title},l=[],e.each((s.items||"").split(/[ ,]/),function(e){var t=n(r,e);t&&!u[e]&&l.push(n(r,e))}),c||e.each(r,function(e){e.context==o&&("before"==e.separator&&l.push({text:"|"}),e.prependToContext?l.unshift(e):l.push(e),"after"==e.separator&&l.push({text:"|"}))});for(var d=0;d<l.length;d++)"|"==l[d].text&&(0!==d&&d!=l.length-1||l.splice(d,1));if(a.menu=l,!a.menu.length)return null}return a},i=function(e){var n,i=[],o=e.settings,a=[];if(o.menu)for(n in o.menu)a.push(n);else for(n in t)a.push(n);for(var s="string"==typeof o.menubar?o.menubar.split(/[ ,]/):a,l=0;l<s.length;l++){var c=s[l];c=r(e.menuItems,e.settings,c),c&&i.push(c)}return i};return{createMenuButtons:i}}),s("j",tinymce.util.Delay),s("k",tinymce.geom.Rect),a("d",["a","8","j","b","9","k"],function(e,t,n,r,i,o){var a=function(e){return{left:e.x,top:e.y,width:e.w,height:e.h,right:e.x+e.w,bottom:e.y+e.h}},s=function(e){t.each(e.contextToolbars,function(e){e.panel&&e.panel.hide()})},l=function(e,t){e.moveTo(t.left,t.top)},c=function(e,n,r){n=n?n.substr(0,2):"",t.each({t:"down",b:"up"},function(t,i){e.classes.toggle("arrow-"+t,r(i,n.substr(0,1)))}),t.each({l:"left",r:"right"},function(t,i){e.classes.toggle("arrow-"+t,r(i,n.substr(1,1)))})},u=function(e,t,n,r,i,o){return o=a({x:t,y:n,w:o.w,h:o.h}),e&&(o=e({elementRect:a(r),contentAreaRect:a(i),panelRect:o})),o},d=function(a){var d,f=a.settings,p=function(){return a.contextToolbars||[]},m=function(t){var n,r,i;return n=e.getPos(a.getContentAreaContainer()),r=a.dom.getRect(t),i=a.dom.getRoot(),"BODY"===i.nodeName&&(r.x-=i.ownerDocument.documentElement.scrollLeft||i.scrollLeft,r.y-=i.ownerDocument.documentElement.scrollTop||i.scrollTop),r.x+=n.x,r.y+=n.y,r},g=function(t,n){var r,i,d,p,g,h,v,b,y=f.inline_toolbar_position_handler;if(!a.removed){if(!t||!t.toolbar.panel)return void s(a);v=["bc-tc","tc-bc","tl-bl","bl-tl","tr-br","br-tr"],g=t.toolbar.panel,n&&g.show(),d=m(t.element),i=e.getRect(g.getEl()),p=e.getRect(a.getContentAreaContainer()||a.getBody()),b=25,"inline"!==e.getStyle(t.element,"display",!0)&&(d.w=t.element.clientWidth,d.h=t.element.clientHeight),a.inline||(p.w=a.getDoc().documentElement.offsetWidth),a.selection.controlSelection.isResizable(t.element)&&d.w<b&&(d=o.inflate(d,0,8)),r=o.findBestRelativePosition(i,d,p,v),d=o.clamp(d,p),r?(h=o.relativePosition(i,d,r),l(g,u(y,h.x,h.y,d,p,i))):(p.h+=i.h,d=o.intersect(p,d),d?(r=o.findBestRelativePosition(i,d,p,["bc-tc","bl-tl","br-tr"]),r?(h=o.relativePosition(i,d,r),l(g,u(y,h.x,h.y,d,p,i))):l(g,u(y,d.x,d.y,d,p,i))):g.hide()),c(g,r,function(e,t){return e===t})}},h=function(e){return function(){var t=function(){a.selection&&g(x(a.selection.getNode()),e)};n.requestAnimationFrame(t)}},v=function(){d||(d=a.selection.getScrollContainer()||a.getWin(),e.bind(d,"scroll",h(!0)),a.on("remove",function(){e.unbind(d,"scroll")}))},b=function(e){var t;return e.toolbar.panel?(e.toolbar.panel.show(),void g(e)):(v(),t=i.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:r.createToolbar(a,e.toolbar.items),oncancel:function(){a.focus()}}),e.toolbar.panel=t,t.renderTo(document.body).reflow(),void g(e))},y=function(){t.each(p(),function(e){e.panel&&e.panel.hide()})},x=function(e){var t,n,r,i=p();for(r=a.$(e).parents().add(e),t=r.length-1;t>=0;t--)for(n=i.length-1;n>=0;n--)if(i[n].predicate(r[t]))return{toolbar:i[n],element:r[t]};return null};a.on("click keyup setContent ObjectResized",function(e){("setcontent"!==e.type||e.selection)&&n.setEditorTimeout(a,function(){var e;e=x(a.selection.getNode()),e?(y(),b(e)):y()})}),a.on("blur hide contextmenu",y),a.on("ObjectResizeStart",function(){var e=x(a.selection.getNode());e&&e.toolbar.panel&&e.toolbar.panel.hide()}),a.on("ResizeEditor ResizeWindow",h(!0)),a.on("nodeChange",h(!1)),a.on("remove",function(){t.each(p(),function(e){e.panel&&e.panel.remove()}),a.contextToolbars={}}),a.shortcuts.add("ctrl+shift+e > ctrl+shift+p","",function(){var e=x(a.selection.getNode());e&&e.toolbar.panel&&e.toolbar.panel.items()[0].focus()})};return{addContextualToolbars:d}}),a("e",[],function(){var e=function(e,t){return function(){var n=e.find(t)[0];n&&n.focus(!0)}},t=function(t,n){t.shortcuts.add("Alt+F9","",e(n,"menubar")),t.shortcuts.add("Alt+F10,F10","",e(n,"toolbar")),t.shortcuts.add("Alt+F11","",e(n,"elementpath")),n.on("cancel",function(){t.focus()})};return{addKeys:t}}),a("f",["8","9","1"],function(e,t,n){var r=function(e){return{element:function(){return e}}},i=function(e,t,n){var i=e.settings[n];i&&i(r(t.getEl("body")))},o=function(t,n,r){e.each(r,function(e){var r=n.items().filter("#"+e.name)[0];r&&r.visible()&&e.name!==t&&(i(e,r,"onhide"),r.visible(!1))})},a=function(e){e.items().each(function(e){e.active(!1)})},s=function(t,n){return e.grep(t,function(e){return e.name===n})[0]},l=function(e,n,r){return function(l){var c=l.control,u=c.parents().filter("panel")[0],d=u.find("#"+n)[0],f=s(r,n);o(n,u,r),a(c.parent()),d&&d.visible()?(i(f,d,"onhide"),d.hide(),c.active(!1)):(d?(d.show(),i(f,d,"onshow")):(d=t.create({type:"container",name:n,layout:"stack",classes:"sidebar-panel",html:""}),u.prepend(d),i(f,d,"onrender"),i(f,d,"onshow")),c.active(!0)),e.fire("ResizeEditor")}},c=function(){return!n.ie||n.ie>=11},u=function(e){return!(!c()||!e.sidebars)&&e.sidebars.length>0},d=function(t){var n=e.map(t.sidebars,function(e){var n=e.settings;return{type:"button",icon:n.icon,image:n.image,tooltip:n.tooltip,onclick:l(t,e.name,t.sidebars)}});return{type:"panel",name:"sidebar",layout:"stack",classes:"sidebar",items:[{type:"toolbar",layout:"stack",classes:"sidebar-toolbar",items:n}]}};return{hasSidebar:u,createSidebar:d}}),a("g",[],function(){var e=function(e){var t=function(){e._skinLoaded=!0,e.fire("SkinLoaded")};return function(){e.initialized?t():e.on("init",t)}};return{fireSkinLoaded:e}}),a("6",["a"],function(e){var t=function(e){return{width:e.clientWidth,height:e.clientHeight}},n=function(n,r,i){var o,a,s,l,c=n.settings;o=n.getContainer(),a=n.getContentAreaContainer().firstChild,s=t(o),l=t(a),null!==r&&(r=Math.max(c.min_width||100,r),r=Math.min(c.max_width||65535,r),e.setStyle(o,"width",r+(s.width-l.width)),e.setStyle(a,"width",r)),i=Math.max(c.min_height||100,i),i=Math.min(c.max_height||65535,i),e.setStyle(a,"height",i),n.fire("ResizeEditor")},r=function(e,t,r){var i=e.getContentAreaContainer();n(e,i.clientWidth+t,i.clientHeight+r)};return{resizeTo:n,resizeBy:r}}),a("4",["8","9","a","b","c","d","e","f","g","6"],function(e,t,n,r,i,o,a,s,l,c){var u=function(e){return function(t){e.find("*").disabled("readonly"===t.mode)}},d=function(e){return{type:"panel",name:"iframe",layout:"stack",classes:"edit-area",border:e,html:""}},f=function(e){return{type:"panel",layout:"stack",classes:"edit-aria-container",border:"1 0 0 0",items:[d("0"),s.createSidebar(e)]}},p=function(e,p,m){var g,h,v,b=e.settings;return m.skinUiCss&&n.styleSheetLoader.load(m.skinUiCss,l.fireSkinLoaded(e)),g=p.panel=t.create({type:"panel",role:"application",classes:"tinymce",style:"visibility: hidden",layout:"stack",border:1,items:[b.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:i.createMenuButtons(e)},r.createToolbars(e,b.toolbar_items_size),s.hasSidebar(e)?f(e):d("1 0 0 0")]}),b.resize!==!1&&(h={type:"resizehandle",direction:b.resize,onResizeStart:function(){var t=e.getContentAreaContainer().firstChild;v={width:t.clientWidth,height:t.clientHeight}},onResize:function(t){"both"===b.resize?c.resizeTo(e,v.width+t.deltaX,v.height+t.deltaY):c.resizeTo(e,null,v.height+t.deltaY)}}),b.statusbar!==!1&&g.add({type:"panel",name:"statusbar",classes:"statusbar",layout:"flow",border:"1 0 0 0",ariaRoot:!0,items:[{type:"elementpath",editor:e},h]}),e.fire("BeforeRenderUI"),e.on("SwitchMode",u(g)),g.renderBefore(m.targetNode).reflow(),b.readonly&&e.setMode("readonly"),b.width&&n.setStyle(g.getEl(),"width",b.width),e.on("remove",function(){g.remove(),g=null}),a.addKeys(e,g),o.addContextualToolbars(e),{iframeContainer:g.find("#iframe")[0].getEl(),editorContainer:g.getEl()}};return{render:p}}),s("h",tinymce.ui.FloatPanel),a("5",["8","9","a","h","b","c","d","e","g"],function(e,t,n,r,i,o,a,s,l){var c=function(e,c,u){var d,f,p=e.settings;p.fixed_toolbar_container&&(f=n.select(p.fixed_toolbar_container)[0]);var m=function(){if(d&&d.moveRel&&d.visible()&&!d._fixed){var t=e.selection.getScrollContainer(),r=e.getBody(),i=0,o=0;if(t){var a=n.getPos(r),s=n.getPos(t);i=Math.max(0,s.x-a.x),o=Math.max(0,s.y-a.y)}d.fixed(!1).moveRel(r,e.rtl?["tr-br","br-tr"]:["tl-bl","bl-tl","tr-br"]).moveBy(i,o)}},g=function(){d&&(d.show(),m(),n.addClass(e.getBody(),"mce-edit-focus"))},h=function(){d&&(d.hide(),r.hideAll(),n.removeClass(e.getBody(),"mce-edit-focus"))},v=function(){return d?void(d.visible()||g()):(d=c.panel=t.create({type:f?"panel":"floatpanel",role:"application",classes:"tinymce tinymce-inline",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!!f,border:1,items:[p.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:o.createMenuButtons(e)},i.createToolbars(e,p.toolbar_items_size)]}),e.fire("BeforeRenderUI"),d.renderTo(f||document.body).reflow(),s.addKeys(e,d),g(),a.addContextualToolbars(e),e.on("nodeChange",m),e.on("activate",g),e.on("deactivate",h),void e.nodeChanged())};return p.content_editable=!0,e.on("focus",function(){u.skinUiCss?n.styleSheetLoader.load(u.skinUiCss,v,v):v()}),e.on("blur hide",h),e.on("remove",function(){d&&(d.remove(),d=null)}),u.skinUiCss&&n.styleSheetLoader.load(u.skinUiCss,l.fireSkinLoaded(e)),{}};return{render:c}}),s("i",tinymce.ui.Throbber),a("7",["i"],function(e){var t=function(t,n){var r;t.on("ProgressState",function(t){r=r||new e(n.panel.getEl("body")),t.state?r.show(t.time):r.hide()})};return{setup:t}}),a("0",["1","2","3","4","5","6","7"],function(e,t,n,r,i,o,a){var s=function(n,o,s){var l=n.settings,c=l.skin!==!1&&(l.skin||"lightgray");if(c){var u=l.skin_url;u=u?n.documentBaseURI.toAbsolute(u):t.baseURL+"/skins/"+c,e.documentMode<=7?s.skinUiCss=u+"/skin.ie7.min.css":s.skinUiCss=u+"/skin.min.css",n.contentCSS.push(u+"/content"+(n.inline?".inline":"")+".min.css")}return a.setup(n,o),l.inline?i.render(n,o,s):r.render(n,o,s)};return n.add("modern",function(e){return{renderUI:function(t){return s(e,this,t)},resizeTo:function(t,n){return o.resizeTo(e,t,n)},resizeBy:function(t,n){return o.resizeBy(e,t,n)}}}),function(){}}),r("0")()}();
;tinymce.PluginManager.add("link",function(e){function t(e){return e&&"A"===e.nodeName&&e.href}function n(e){return tinymce.util.Tools.grep(e,t).length>0}function r(t){return e.dom.getParent(t,"a[href]")}function i(){return r(e.selection.getStart())}function o(e){var t=e.getAttribute("data-mce-href");return t?t:e.getAttribute("href")}function a(){var t=e.plugins.contextmenu;return!!t&&t.isContextMenuVisible()}function s(n){var r,i,o;return!!(e.settings.link_context_toolbar&&!a()&&t(n)&&(r=e.selection,i=r.getRng(),o=i.startContainer,3==o.nodeType&&r.isCollapsed()&&i.startOffset>0&&i.startOffset<o.data.length))}function l(e,t){document.body.appendChild(e),e.dispatchEvent(t),document.body.removeChild(e)}function c(e){if(!tinymce.Env.ie||tinymce.Env.ie>10){var t=document.createElement("a");t.target="_blank",t.href=e,t.rel="noreferrer noopener";var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),l(t,n)}else{var r=window.open("","_blank");if(r){r.opener=null;var i=r.document;i.open(),i.write('<meta http-equiv="refresh" content="0; url='+tinymce.DOM.encode(e)+'">'),i.close()}}}function u(t){if(t){var n=o(t);if(/^#/.test(n)){var r=e.$(n);r.length&&e.selection.scrollIntoView(r[0],!0)}else c(t.href)}}function d(){u(i())}function f(){var t=this,r=function(e){n(e.parents)?t.show():t.hide()};n(e.dom.getParents(e.selection.getStart()))||t.hide(),e.on("nodechange",r),t.on("remove",function(){e.off("nodechange",r)})}function p(t){return function(){var n=e.settings.link_list;"string"==typeof n?tinymce.util.XHR.send({url:n,success:function(e){t(tinymce.util.JSON.parse(e))}}):"function"==typeof n?n(t):t(n)}}function m(e,t,n){function r(e,n){return n=n||[],tinymce.each(e,function(e){var i={text:e.text||e.title};e.menu?i.menu=r(e.menu):(i.value=e.value,t&&t(i)),n.push(i)}),n}return r(e,n||[])}function g(t){function n(e){var t=d.find("#text");(!t.value()||e.lastControl&&t.value()==e.lastControl.text())&&t.value(e.control.text()),d.find("#href").value(e.control.value())}function r(t){var r=[];if(tinymce.each(e.dom.select("a:not([href])"),function(e){var n=e.name||e.id;n&&r.push({text:n,value:"#"+n,selected:t.indexOf("#"+n)!=-1})}),r.length)return r.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:r,onselect:n}}function i(){!u&&0===w.text.length&&f&&this.parent().parent().find("#text")[0].value(this.value())}function o(t){var n=t.meta||{};g&&g.value(e.convertURL(this.value(),"href")),tinymce.each(t.meta,function(e,t){var n=d.find("#"+t);"text"===t?0===u.length&&(n.value(e),w.text=e):n.value(e)}),n.attach&&(h={href:this.value(),attach:n.attach}),n.text||i.call(this)}function a(e){var t=N.getContent();if(/</.test(t)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(t)||t.indexOf("href=")==-1))return!1;if(e){var n,r=e.childNodes;if(0===r.length)return!1;for(n=r.length-1;n>=0;n--)if(3!=r[n].nodeType)return!1}return!0}function s(e){e.meta=d.toJSON()}var l,c,u,d,f,p,g,v,b,y,x,C,w={},N=e.selection,k=e.dom;l=N.getNode(),c=k.getParent(l,"a[href]"),f=a(),w.text=u=c?c.innerText||c.textContent:N.getContent({format:"text"}),w.href=c?k.getAttrib(c,"href"):"",c?w.target=k.getAttrib(c,"target"):e.settings.default_link_target&&(w.target=e.settings.default_link_target),(C=k.getAttrib(c,"rel"))&&(w.rel=C),(C=k.getAttrib(c,"class"))&&(w["class"]=C),(C=k.getAttrib(c,"title"))&&(w.title=C),f&&(p={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){w.text=this.value()}}),t&&(g={type:"listbox",label:"Link list",values:m(t,function(t){t.value=e.convertURL(t.value||t.url,"href")},[{text:"None",value:""}]),onselect:n,value:e.convertURL(w.href,"href"),onPostRender:function(){g=this}}),e.settings.target_list!==!1&&(e.settings.target_list||(e.settings.target_list=[{text:"None",value:""},{text:"New window",value:"_blank"}]),b={name:"target",type:"listbox",label:"Target",values:m(e.settings.target_list)}),e.settings.rel_list&&(v={name:"rel",type:"listbox",label:"Rel",values:m(e.settings.rel_list)}),e.settings.link_class_list&&(y={name:"class",type:"listbox",label:"Class",values:m(e.settings.link_class_list,function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({inline:"a",classes:[t.value]})})})}),e.settings.link_title!==!1&&(x={name:"title",type:"textbox",label:"Title",value:w.title}),d=e.windowManager.open({title:"Insert link",data:w,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:o,onkeyup:i,onbeforecall:s},p,x,r(w.href),g,v,b,y],onSubmit:function(t){function n(t,n){var r=e.selection.getRng();tinymce.util.Delay.setEditorTimeout(e,function(){e.windowManager.confirm(t,function(t){e.selection.setRng(r),n(t)})})}function r(e,t){function n(e){return e=r(e),e?[e,i].join(" "):i}function r(e){var t=new RegExp("("+i.replace(" ","|")+")","g");return e&&(e=tinymce.trim(e.replace(t,""))),e?e:null}var i="noopener noreferrer";return t?n(e):r(e)}function i(){var t={href:a,target:w.target?w.target:null,rel:w.rel?w.rel:null,"class":w["class"]?w["class"]:null,title:w.title?w.title:null};e.settings.allow_unsafe_link_target||(t.rel=r(t.rel,"_blank"==t.target)),a===h.href&&(h.attach(),h={}),c?(e.focus(),f&&w.text!=u&&("innerText"in c?c.innerText=w.text:c.textContent=w.text),k.setAttribs(c,t),N.select(c),e.undoManager.add()):f?e.insertContent(k.createHTML("a",t,k.encode(w.text))):e.execCommand("mceInsertLink",!1,t)}function o(){e.undoManager.transact(i)}var a;return w=tinymce.extend(w,t.data),(a=w.href)?a.indexOf("@")>0&&a.indexOf("//")==-1&&a.indexOf("mailto:")==-1?void n("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(e){e&&(a="mailto:"+a),o()}):e.settings.link_assume_external_targets&&!/^\w+:/i.test(a)||!e.settings.link_assume_external_targets&&/^\s*www[\.|\d\.]/i.test(a)?void n("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(e){e&&(a="http://"+a),o()}):void o():void e.execCommand("unlink")}})}var h={},v=function(e){return e.altKey===!0&&e.shiftKey===!1&&e.ctrlKey===!1&&e.metaKey===!1};e.addButton("link",{icon:"link",tooltip:"Insert/edit link",shortcut:"Meta+K",onclick:p(g),stateSelector:"a[href]"}),e.addButton("unlink",{icon:"unlink",tooltip:"Remove link",cmd:"unlink",stateSelector:"a[href]"}),e.addContextToolbar&&(e.addButton("openlink",{icon:"newtab",tooltip:"Open link",onclick:d}),e.addContextToolbar(s,"openlink | link unlink")),e.addShortcut("Meta+K","",p(g)),e.addCommand("mceLink",p(g)),e.on("click",function(e){var t=r(e.target);t&&tinymce.util.VK.metaKeyPressed(e)&&(e.preventDefault(),u(t))}),e.on("keydown",function(e){var t=i();t&&13===e.keyCode&&v(e)&&(e.preventDefault(),u(t))}),this.showDialog=g,e.addMenuItem("openlink",{text:"Open link",icon:"newtab",onclick:d,onPostRender:f,prependToContext:!0}),e.addMenuItem("link",{icon:"link",text:"Link",shortcut:"Meta+K",onclick:p(g),stateSelector:"a[href]",context:"insert",prependToContext:!0})});
;!function(e,t){"use strict";function n(e,t){for(var n,r=[],o=0;o<e.length;++o){if(n=a[e[o]]||i(e[o]),!n)throw"module definition dependecy not found: "+e[o];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){a[e]=i.apply(null,arguments)})}function i(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function o(n){var r,i,o,s,l;for(r=0;r<n.length;r++){i=e,o=n[r],s=o.split(/[.\/]/);for(var c=0;c<s.length-1;++c)i[s[c]]===t&&(i[s[c]]={}),i=i[s[c]];i[s[s.length-1]]=a[o]}if(e.AMDLC_TESTS){l=e.privateModules||{};for(o in a)l[o]=a[o];for(r=0;r<n.length;r++)delete l[n[r]];e.privateModules=l}}var a={};r("tinymce/pasteplugin/Utils",["tinymce/util/Tools","tinymce/html/DomParser","tinymce/html/Schema"],function(e,t,n){function r(t,n){return e.each(n,function(e){t=e.constructor==RegExp?t.replace(e,""):t.replace(e[0],e[1])}),t}function i(i){function o(e){var t=e.name,n=e;if("br"===t)return void(l+="\n");if(c[t]&&(l+=" "),u[t])return void(l+=" ");if(3==e.type&&(l+=e.value),!e.shortEnded&&(e=e.firstChild))do o(e);while(e=e.next);d[t]&&n.next&&(l+="\n","p"==t&&(l+="\n"))}var a=new n,s=new t({},a),l="",c=a.getShortEndedElements(),u=e.makeMap("script noscript style textarea video audio iframe object"," "),d=a.getBlockElements();return i=r(i,[/<!\[[^\]]+\]>/g]),o(s.parse(i)),l}function o(e){function t(e,t,n){return t||n?"\xa0":" "}return e=r(s(e),[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,t],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function a(e){var t=0;return function(){return e+t++}}var s=function(e){var t="<!--StartFragment-->",n="<!--EndFragment-->",r=e.indexOf(t);if(r!==-1){var i=e.substr(r+t.length),o=i.indexOf(n);if(o!==-1&&/^<\/(p|h[1-6]|li)>/i.test(i.substr(o+n.length,5)))return i.substr(0,o)}return e};return{filter:r,innerText:i,trimHtml:o,createIdGenerator:a}}),r("tinymce/pasteplugin/SmartPaste",["tinymce/util/Tools"],function(e){var t=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)},n=function(e){return t(e)&&/.(gif|jpe?g|png)$/.test(e)},r=function(e,t,n){return e.undoManager.extra(function(){n(e,t)},function(){e.insertContent('<img src="'+t+'">')}),!0},i=function(e,t,n){return e.undoManager.extra(function(){n(e,t)},function(){e.execCommand("mceInsertLink",!1,t)}),!0},o=function(e,n,r){return!(e.selection.isCollapsed()!==!1||!t(n))&&i(e,n,r)},a=function(e,t,i){return!!n(t)&&r(e,t,i)},s=function(e,t){return e.insertContent(t,{merge:e.settings.paste_merge_formats!==!1,paste:!0}),!0},l=function(t,n){e.each([o,a,s],function(e){return e(t,n,s)!==!0})},c=function(e,t){e.settings.smart_paste===!1?s(e,t):l(e,t)};return{isImageUrl:n,isAbsoluteUrl:t,insertContent:c}}),r("tinymce/pasteplugin/Clipboard",["tinymce/Env","tinymce/dom/RangeUtils","tinymce/util/VK","tinymce/pasteplugin/Utils","tinymce/pasteplugin/SmartPaste","tinymce/util/Delay"],function(e,t,n,r,i,o){return function(a){function s(e){var t,n=a.dom;if(t=a.fire("BeforePastePreProcess",{content:e}),t=a.fire("PastePreProcess",t),e=t.content,!t.isDefaultPrevented()){if(a.hasEventListeners("PastePostProcess")&&!t.isDefaultPrevented()){var r=n.add(a.getBody(),"div",{style:"display:none"},e);t=a.fire("PastePostProcess",{node:r}),n.remove(r),e=t.node.innerHTML}t.isDefaultPrevented()||i.insertContent(a,e)}}function l(e){e=a.dom.encode(e).replace(/\r\n/g,"\n");var t,n=a.dom.getParent(a.selection.getStart(),a.dom.isBlock),i=a.settings.forced_root_block;i&&(t=a.dom.createHTML(i,a.settings.forced_root_block_attrs),t=t.substr(0,t.length-3)+">"),n&&/^(PRE|DIV)$/.test(n.nodeName)||!i?e=r.filter(e,[[/\n/g,"<br>"]]):(e=r.filter(e,[[/\n\n/g,"</p>"+t],[/^(.*<\/p>)(<p>)$/,t+"$1"],[/\n/g,"<br />"]]),e.indexOf("<p>")!=-1&&(e=t+e)),s(e)}function c(){function t(e){var t,n,i,o=e.startContainer;if(t=e.getClientRects(),t.length)return t[0];if(e.collapsed&&1==o.nodeType){for(i=o.childNodes[S.startOffset];i&&3==i.nodeType&&!i.data.length;)i=i.nextSibling;if(i)return"BR"==i.tagName&&(n=r.doc.createTextNode("\ufeff"),i.parentNode.insertBefore(n,i),e=r.createRng(),e.setStartBefore(n),e.setEndAfter(n),t=e.getClientRects(),r.remove(n)),t.length?t[0]:void 0}}var n,r=a.dom,i=a.getBody(),o=a.dom.getViewPort(a.getWin()),s=o.y,l=20;if(S=a.selection.getRng(),a.inline&&(n=a.selection.getScrollContainer(),n&&n.scrollTop>0&&(s=n.scrollTop)),S.getClientRects){var c=t(S);if(c)l=s+(c.top-r.getPos(i).y);else{l=s;var u=S.startContainer;u&&(3==u.nodeType&&u.parentNode!=i&&(u=u.parentNode),1==u.nodeType&&(l=r.getPos(u,n||i).y))}}k=r.add(a.getBody(),"div",{id:"mcepastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: absolute; top: "+l+"px;width: 10px; height: 10px; overflow: hidden; opacity: 0"},A),(e.ie||e.gecko)&&r.setStyle(k,"left","rtl"==r.getStyle(i,"direction",!0)?65535:-65535),r.bind(k,"beforedeactivate focusin focusout",function(e){e.stopPropagation()}),k.focus(),a.selection.select(k,!0)}function u(){if(k){for(var e;e=a.dom.get("mcepastebin");)a.dom.remove(e),a.dom.unbind(e);S&&a.selection.setRng(S)}k=S=null}function d(){var e,t,n,r,i="";for(e=a.dom.select("div[id=mcepastebin]"),t=0;t<e.length;t++)n=e[t],n.firstChild&&"mcepastebin"==n.firstChild.id&&(n=n.firstChild),r=n.innerHTML,i!=A&&(i+=r);return i}function f(e){var t={};if(e){if(e.getData){var n=e.getData("Text");n&&n.length>0&&n.indexOf(B)==-1&&(t["text/plain"]=n)}if(e.types)for(var r=0;r<e.types.length;r++){var i=e.types[r];t[i]=e.getData(i)}}return t}function p(e){return f(e.clipboardData||a.getDoc().dataTransfer)}function m(e){return C(e,"text/html")||C(e,"text/plain")}function g(e){var t;return t=e.indexOf(","),t!==-1?e.substr(t+1):null}function h(e,t){return!e.images_dataimg_filter||e.images_dataimg_filter(t)}function v(e,t,n){e&&(a.selection.setRng(e),e=null);var r=t.result,i=g(r),o=new Image;if(o.src=r,h(a.settings,o)){var l,c,u=a.editorUpload.blobCache;c=u.findFirst(function(e){return e.base64()===i}),c?l=c:(l=u.create(P(),n,i),u.add(l)),s('<img src="'+l.blobUri()+'">')}else s('<img src="'+r+'">')}function b(e,t){function n(n){var r,i,o,a=!1;if(n)for(r=0;r<n.length;r++)if(i=n[r],/^image\/(jpeg|png|gif|bmp)$/.test(i.type)){var s=i.getAsFile?i.getAsFile():i;o=new FileReader,o.onload=v.bind(null,t,o,s),o.readAsDataURL(s),e.preventDefault(),a=!0}return a}var r=e.clipboardData||e.dataTransfer;if(a.settings.paste_data_images&&r)return n(r.items)||n(r.files)}function y(e){var t=e.clipboardData;return navigator.userAgent.indexOf("Android")!=-1&&t&&t.items&&0===t.items.length}function x(e){return t.getCaretRangeFromPoint(e.clientX,e.clientY,a.getDoc())}function C(e,t){return t in e&&e[t].length>0}function w(e){return n.metaKeyPressed(e)&&86==e.keyCode||e.shiftKey&&45==e.keyCode}function N(){function t(e,t,n){var i;return C(e,"text/html")?i=e["text/html"]:(i=d(),i==A&&(n=!0)),i=r.trimHtml(i),k&&k.firstChild&&"mcepastebin"===k.firstChild.id&&(n=!0),u(),i.length||(n=!0),n&&(i=C(e,"text/plain")&&i.indexOf("</p>")==-1?e["text/plain"]:r.innerText(i)),i==A?void(t||a.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.")):void(n?l(i):s(i))}function n(e){var t=e["text/plain"];return!!t&&0===t.indexOf("file://")}a.on("keydown",function(t){function n(e){w(e)&&!e.isDefaultPrevented()&&u()}if(w(t)&&!t.isDefaultPrevented()){if(_=t.shiftKey&&86==t.keyCode,_&&e.webkit&&navigator.userAgent.indexOf("Version/")!=-1)return;if(t.stopImmediatePropagation(),T=(new Date).getTime(),e.ie&&_)return t.preventDefault(),void a.fire("paste",{ieFake:!0});u(),c(),a.once("keyup",n),a.once("paste",function(){a.off("keyup",n)})}});var i=function(){return S||a.selection.getRng()};a.on("paste",function(n){var r=(new Date).getTime(),s=p(n),l=(new Date).getTime()-r,f=(new Date).getTime()-T-l<1e3,g="text"==E.pasteFormat||_;return _=!1,n.isDefaultPrevented()||y(n)?void u():!m(s)&&b(n,i())?void u():(f||n.preventDefault(),!e.ie||f&&!n.ieFake||(c(),a.dom.bind(k,"paste",function(e){e.stopPropagation()}),a.getDoc().execCommand("Paste",!1,null),s["text/html"]=d()),void(C(s,"text/html")?(n.preventDefault(),t(s,f,g)):o.setEditorTimeout(a,function(){t(s,f,g)},0)))}),a.on("dragstart dragend",function(e){R="dragstart"==e.type}),a.on("drop",function(e){var t,i;if(i=x(e),!e.isDefaultPrevented()&&!R&&(t=f(e.dataTransfer),(m(t)&&!n(t)||!b(e,i))&&i&&a.settings.paste_filter_drop!==!1)){var c=t["mce-internal"]||t["text/html"]||t["text/plain"];c&&(e.preventDefault(),o.setEditorTimeout(a,function(){a.undoManager.transact(function(){t["mce-internal"]&&a.execCommand("Delete"),a.selection.setRng(i),c=r.trimHtml(c),t["text/html"]?s(c):l(c)})}))}}),a.on("dragover dragend",function(e){a.settings.paste_data_images&&e.preventDefault()})}var k,S,_,E=this,T=0,R=!1,A="%MCEPASTEBIN%",B="data:text/mce-internal,",P=r.createIdGenerator("mceclip");E.pasteHtml=s,E.pasteText=l,E.pasteImageData=b,a.on("preInit",function(){N(),a.parser.addNodeFilter("img",function(t,n,r){function i(e){return e.data&&e.data.paste===!0}function o(t){t.attr("data-mce-object")||u===e.transparentSrc||t.remove()}function s(e){return 0===e.indexOf("webkit-fake-url")}function l(e){return 0===e.indexOf("data:")}if(!a.settings.paste_data_images&&i(r))for(var c=t.length;c--;){var u=t[c].attributes.map.src;u&&(s(u)?o(t[c]):!a.settings.allow_html_data_urls&&l(u)&&o(t[c]))}})})}}),r("tinymce/pasteplugin/WordFilter",["tinymce/util/Tools","tinymce/html/DomParser","tinymce/html/Schema","tinymce/html/Serializer","tinymce/html/Node","tinymce/pasteplugin/Utils"],function(e,t,n,r,i,o){function a(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}function s(t){var n,r;return r=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],t=t.replace(/^[\u00a0 ]+/,""),e.each(r,function(e){if(e.test(t))return n=!0,!1}),n}function l(e){return/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(e)}function c(c){var u=c.settings;c.on("BeforePastePreProcess",function(d){function f(e){function t(e){var n="";if(3===e.type)return e.value;if(e=e.firstChild)do n+=t(e);while(e=e.next);return n}function n(e,t){if(3===e.type&&t.test(e.value))return e.value=e.value.replace(t,""),!1;if(e=e.firstChild)do if(!n(e,t))return!1;while(e=e.next);return!0}function r(e){if(e._listIgnore)return void e.remove();if(e=e.firstChild)do r(e);while(e=e.next)}function o(e,t,o){var s=e._listLevel||u;s!=u&&(s<u?a&&(a=a.parent.parent):(c=a,a=null)),a&&a.name==t?a.append(e):(c=c||a,a=new i(t,1),o>1&&a.attr("start",""+o),e.wrap(a)),e.name="li",s>u&&c&&c.lastChild.append(a),u=s,r(e),n(e,/^\u00a0+/),n(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),n(e,/^\u00a0+/)}for(var a,c,u=1,d=[],f=e.firstChild;"undefined"!=typeof f&&null!==f;)if(d.push(f),f=f.walk(),null!==f)for(;"undefined"!=typeof f&&f.parent!==e;)f=f.walk();for(var p=0;p<d.length;p++)if(e=d[p],"p"==e.name&&e.firstChild){var m=t(e);if(l(m)){o(e,"ul");continue}if(s(m)){var g=/([0-9]+)\./.exec(m),h=1;g&&(h=parseInt(g[1],10)),o(e,"ol",h);continue}if(e._listLevel){o(e,"ul",1);continue}a=null}else c=a,a=null}function p(t,n){var r,o={},a=c.dom.parseStyle(n);return e.each(a,function(e,i){switch(i){case"mso-list":r=/\w+ \w+([0-9]+)/i.exec(n),r&&(t._listLevel=parseInt(r[1],10)),/Ignore/i.test(e)&&t.firstChild&&(t._listIgnore=!0,t.firstChild._listIgnore=!0);break;case"horiz-align":i="text-align";break;case"vert-align":i="vertical-align";break;case"font-color":case"mso-foreground":i="color";break;case"mso-background":case"mso-highlight":i="background";break;case"font-weight":case"font-style":return void("normal"!=e&&(o[i]=e));case"mso-element":if(/^(comment|comment-list)$/i.test(e))return void t.remove()}return 0===i.indexOf("mso-comment")?void t.remove():void(0!==i.indexOf("mso-")&&("all"==m||g&&g[i])&&(o[i]=e))}),/(bold)/i.test(o["font-weight"])&&(delete o["font-weight"],t.wrap(new i("b",1))),/(italic)/i.test(o["font-style"])&&(delete o["font-style"],t.wrap(new i("i",1))),o=c.dom.serializeStyle(o,t.name),o?o:null}var m,g,h=d.content;if(h=h.replace(/<b[^>]+id="?docs-internal-[^>]*>/gi,""),h=h.replace(/<br class="?Apple-interchange-newline"?>/gi,""),m=u.paste_retain_style_properties,m&&(g=e.makeMap(m.split(/[, ]/))),u.paste_enable_default_filters!==!1&&a(d.content)){d.wordContent=!0,h=o.filter(h,[/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return t.length>0?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join("\xa0"):""}]]);var v=u.paste_word_valid_elements;v||(v="-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody");var b=new n({valid_elements:v,valid_children:"-li[p]"});e.each(b.elements,function(e){e.attributes["class"]||(e.attributes["class"]={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))});var y=new t({},b);y.addAttributeFilter("style",function(e){for(var t,n=e.length;n--;)t=e[n],t.attr("style",p(t,t.attr("style"))),"span"==t.name&&t.parent&&!t.attributes.length&&t.unwrap()}),y.addAttributeFilter("class",function(e){for(var t,n,r=e.length;r--;)t=e[r],n=t.attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)}),y.addNodeFilter("del",function(e){for(var t=e.length;t--;)e[t].remove()}),y.addNodeFilter("a",function(e){for(var t,n,r,i=e.length;i--;)if(t=e[i],n=t.attr("href"),r=t.attr("name"),n&&n.indexOf("#_msocom_")!=-1)t.remove();else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1],n&&(n="#"+n)),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){t.unwrap();continue}t.attr({href:n,name:r})}else t.unwrap()});var x=y.parse(h);u.paste_convert_word_fake_lists!==!1&&f(x),d.content=new r({validate:u.validate},b).serialize(x)}})}return c.isWordContent=a,c}),r("tinymce/pasteplugin/Quirks",["tinymce/Env","tinymce/util/Tools","tinymce/pasteplugin/WordFilter","tinymce/pasteplugin/Utils"],function(e,t,n,r){return function(i){function o(e){i.on("BeforePastePreProcess",function(t){t.content=e(t.content)})}function a(e){i.on("PastePostProcess",function(t){e(t.node)})}function s(e){if(!n.isWordContent(e))return e;var o=[];t.each(i.schema.getBlockElements(),function(e,t){o.push(t)});var a=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+o.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return e=r.filter(e,[[a,"$1"]]),e=r.filter(e,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function l(e){if(n.isWordContent(e))return e;var t=i.settings.paste_webkit_styles;if(i.settings.paste_remove_styles_if_webkit===!1||"all"==t)return e;if(t&&(t=t.split(/[, ]/)),t){var r=i.dom,o=i.selection.getNode();e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(e,n,i,a){var s=r.parseStyle(i,"span"),l={};if("none"===t)return n+a;for(var c=0;c<t.length;c++){var u=s[t[c]],d=r.getStyle(o,t[c],!0);/color/.test(t[c])&&(u=r.toHex(u),d=r.toHex(d)),d!=u&&(l[t[c]]=u)}return l=r.serializeStyle(l,"span"),l?n+' style="'+l+'"'+a:n+a})}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(e,t,n,r){return t+' style="'+n+'"'+r})}function c(e){i.$("a",e).find("font,u").each(function(e,t){i.dom.remove(t,!0)})}e.webkit&&o(l),e.ie&&(o(s),a(c))}}),r("tinymce/pasteplugin/Plugin",["tinymce/PluginManager","tinymce/pasteplugin/Clipboard","tinymce/pasteplugin/WordFilter","tinymce/pasteplugin/Quirks"],function(e,t,n,r){var i;e.add("paste",function(o){function a(){return i||o.settings.paste_plaintext_inform===!1}function s(){if("text"==c.pasteFormat)c.pasteFormat="html",o.fire("PastePlainTextToggle",{state:!1});else if(c.pasteFormat="text",o.fire("PastePlainTextToggle",{state:!0}),!a()){var e=o.translate("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.");o.notificationManager.open({text:e,type:"info"}),i=!0}o.focus()}function l(){var e=this;e.active("text"===c.pasteFormat),o.on("PastePlainTextToggle",function(t){e.active(t.state)})}var c,u=this,d=o.settings;return/(^|[ ,])powerpaste([, ]|$)/.test(d.plugins)&&e.get("powerpaste")?void("undefined"!=typeof console&&console.log&&console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option.")):(u.clipboard=c=new t(o),u.quirks=new r(o),u.wordFilter=new n(o),o.settings.paste_as_text&&(u.clipboard.pasteFormat="text"),d.paste_preprocess&&o.on("PastePreProcess",function(e){d.paste_preprocess.call(u,u,e)}),d.paste_postprocess&&o.on("PastePostProcess",function(e){d.paste_postprocess.call(u,u,e)}),o.addCommand("mceInsertClipboardContent",function(e,t){t.content&&u.clipboard.pasteHtml(t.content),t.text&&u.clipboard.pasteText(t.text)}),o.settings.paste_block_drop&&o.on("dragend dragover draggesture dragdrop drop drag",function(e){e.preventDefault(),e.stopPropagation()}),o.settings.paste_data_images||o.on("drop",function(e){var t=e.dataTransfer;t&&t.files&&t.files.length>0&&e.preventDefault()}),o.addCommand("mceTogglePlainTextPaste",s),o.addButton("pastetext",{icon:"pastetext",tooltip:"Paste as text",onclick:s,onPostRender:l}),void o.addMenuItem("pastetext",{text:"Paste as text",selectable:!0,active:c.pasteFormat,onclick:s,onPostRender:l}))})}),o(["tinymce/pasteplugin/Utils"])}(window);
;!function(e,t){"use strict";function n(e,t){for(var n,r=[],a=0;a<e.length;++a){if(n=o[e[a]]||i(e[a]),!n)throw"module definition dependecy not found: "+e[a];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){o[e]=i.apply(null,arguments)})}function i(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}var o={};r("tinymce/tableplugin/Utils",["tinymce/Env"],function(e){function t(t){(!e.ie||e.ie>9)&&(t.hasChildNodes()||(t.innerHTML='<br data-mce-bogus="1" />'))}var n=function(e){return function(t,n){t&&(n=parseInt(n,10),1===n||0===n?t.removeAttribute(e,1):t.setAttribute(e,n,1))}},r=function(e){return function(t){return parseInt(t.getAttribute(e)||1,10)}};return{setColSpan:n("colSpan"),setRowSpan:n("rowspan"),getColSpan:r("colSpan"),getRowSpan:r("rowSpan"),setSpanVal:function(e,t,r){n(t)(e,r)},getSpanVal:function(e,t){return r(t)(e)},paddCell:t}}),r("tinymce/tableplugin/SplitCols",["tinymce/util/Tools","tinymce/tableplugin/Utils"],function(e,t){var n=function(e,t,n){return e[n]?e[n][t]:null},r=function(e,t,r){var i=n(e,t,r);return i?i.elm:null},i=function(e,t,i,o){var a,s,l=0,c=r(e,t,i);for(a=i;(o>0?a<e.length:a>=0)&&(s=n(e,t,a),c===s.elm);a+=o)l++;return l},o=function(e,t,n){for(var r,i=e[n],o=t;o<i.length;o++)if(r=i[o],r.real)return r.elm;return null},a=function(e,n){for(var r,o=[],a=e[n],s=0;s<a.length;s++)r=a[s],o.push({elm:r.elm,above:i(e,s,n,-1)-1,below:i(e,s,n,1)-1}),s+=t.getColSpan(r.elm)-1;return o},s=function(e,n){var r=e.elm.ownerDocument,i=r.createElement("td");return t.setColSpan(i,t.getColSpan(e.elm)),t.setRowSpan(i,n),t.paddCell(i),i},l=function(e,t,n,r){var i=o(e,n+1,r);i?i.parentNode.insertBefore(t,i):(i=o(e,0,r),i.parentNode.appendChild(t))},c=function(e,n,r,i){if(0!==n.above){t.setRowSpan(n.elm,n.above);var o=s(n,n.below+1);return l(e,o,r,i),o}return null},u=function(e,n,r,i){if(0!==n.below){t.setRowSpan(n.elm,n.above+1);var o=s(n,n.below);return l(e,o,r,i+1),o}return null},d=function(t,n,i,o){var s=a(t,i),l=r(t,n,i).parentNode,d=[];return e.each(s,function(e,n){var r=o?c(t,e,n,i):u(t,e,n,i);null!==r&&d.push(d)}),{cells:d,row:l}};return{splitAt:d}}),r("tinymce/tableplugin/TableGrid",["tinymce/util/Tools","tinymce/Env","tinymce/tableplugin/Utils","tinymce/tableplugin/SplitCols"],function(e,n,r,i){var o=e.each,a=r.getSpanVal,s=r.setSpanVal;return function(l,c,u){function d(){l.$("td[data-mce-selected],th[data-mce-selected]").removeAttr("data-mce-selected")}function f(e){return e===l.getBody()}function p(t,n){return t?(n=e.map(n.split(","),function(e){return e.toLowerCase()}),e.grep(t.childNodes,function(t){return e.inArray(n,t.nodeName.toLowerCase())!==-1})):[]}function m(){var e=0;Z=[],Q=0,o(["thead","tbody","tfoot"],function(t){var n=p(c,t)[0],r=p(n,"tr");o(r,function(n,r){r+=e,o(p(n,"td,th"),function(e,n){var i,o,s,l;if(Z[r])for(;Z[r][n];)n++;for(s=a(e,"rowspan"),l=a(e,"colspan"),o=r;o<r+s;o++)for(Z[o]||(Z[o]=[]),i=n;i<n+l;i++)Z[o][i]={part:t,real:o==r&&i==n,elm:e,rowspan:s,colspan:l};Q=Math.max(Q,n+1)})}),e+=r.length})}function g(e){return l.fire("newrow",{node:e}),e}function h(e){return l.fire("newcell",{node:e}),e}function v(e,t){return e=e.cloneNode(t),e.removeAttribute("id"),e}function b(e,t){var n;if(n=Z[t])return n[e]}function y(e,t){return e[t]?e[t]:null}function x(e,t){for(var n=[],r=0;r<e.length;r++)n.push(b(t,r));return n}function C(e){return e&&(!!re.getAttrib(e.elm,"data-mce-selected")||e==u)}function w(){var e=[];return o(c.rows,function(t){o(t.cells,function(n){if(re.getAttrib(n,"data-mce-selected")||u&&n==u.elm)return e.push(t),!1})}),e}function N(){var e=0;return o(Z,function(t){if(o(t,function(t){C(t)&&e++}),e)return!1}),e}function k(){var e=re.createRng();f(c)||(e.setStartAfter(c),e.setEndAfter(c),ne.setRng(e),re.remove(c))}function S(t){var i,a={};return l.settings.table_clone_elements!==!1&&(a=e.makeMap((l.settings.table_clone_elements||"strong em b i span font h1 h2 h3 h4 h5 h6 p div").toUpperCase(),/[ ,]/)),e.walk(t,function(e){var r;if(3==e.nodeType)return o(re.getParents(e.parentNode,null,t).reverse(),function(e){a[e.nodeName]&&(e=v(e,!1),i?r&&r.appendChild(e):i=r=e,r=e)}),r&&(r.innerHTML=n.ie&&n.ie<10?"&nbsp;":'<br data-mce-bogus="1" />'),!1},"childNodes"),t=v(t,!1),h(t),s(t,"rowSpan",1),s(t,"colSpan",1),i?t.appendChild(i):r.paddCell(t),t}function _(){var e,t=re.createRng();return o(re.select("tr",c),function(e){0===e.cells.length&&re.remove(e)}),0===re.select("tr",c).length?(t.setStartBefore(c),t.setEndBefore(c),ne.setRng(t),void re.remove(c)):(o(re.select("thead,tbody,tfoot",c),function(e){0===e.rows.length&&re.remove(e)}),m(),void(ee&&(e=Z[Math.min(Z.length-1,ee.y)],e&&(ne.select(e[Math.min(e.length-1,ee.x)].elm,!0),ne.collapse(!0)))))}function E(e,t,n,r){var i,o,a,s,l;for(i=Z[t][e].elm.parentNode,a=1;a<=n;a++)if(i=re.getNext(i,"tr")){for(o=e;o>=0;o--)if(l=Z[t+a][o].elm,l.parentNode==i){for(s=1;s<=r;s++)re.insertAfter(S(l),l);break}if(o==-1)for(s=1;s<=r;s++)i.insertBefore(S(i.cells[0]),i.cells[0])}}function T(){o(Z,function(e,t){o(e,function(e,n){var r,i,o;if(C(e)&&(e=e.elm,r=a(e,"colspan"),i=a(e,"rowspan"),r>1||i>1)){for(s(e,"rowSpan",1),s(e,"colSpan",1),o=0;o<r-1;o++)re.insertAfter(S(e),e);E(n,t,i-1,r)}})})}function R(e,t,n){for(var r=[],i=0;i<e.length;i++)(i<t||i>n)&&r.push(e[i]);return r}function A(t){return e.grep(t,function(e){return e.real===!1})}function B(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].elm;t[t.length-1]!==r&&t.push(r)}return t}function P(t,n,i,o,a){var s=0;if(a-i<1)return 0;for(var l=i+1;l<=a;l++){var c=R(y(t,l),n,o),u=A(c);c.length===u.length&&(e.each(B(u),function(e){r.setRowSpan(e,r.getRowSpan(e)-1)}),s++)}return s}function D(t,n,i,o,a){var s=0;if(o-n<1)return 0;for(var l=n+1;l<=o;l++){var c=R(x(t,l),i,a),u=A(c);c.length===u.length&&(e.each(B(u),function(e){r.setColSpan(e,r.getColSpan(e)-1)}),s++)}return s}function M(t,n,r){var i,a,l,c,u,d,f,p,g,h,v,y,x;if(t?(i=q(t),a=i.x,l=i.y,c=a+(n-1),u=l+(r-1)):(ee=te=null,o(Z,function(e,t){o(e,function(e,n){C(e)&&(ee||(ee={x:n,y:t}),te={x:n,y:t})})}),ee&&(a=ee.x,l=ee.y,c=te.x,u=te.y)),p=b(a,l),g=b(c,u),p&&g&&p.part==g.part){T(),m(),y=P(Z,a,l,c,u),x=D(Z,a,l,c,u),p=b(a,l).elm;var w=c-a-x+1,N=u-l-y+1;for(w===Q&&N===Z.length&&(w=1,N=1),w===Q&&N>1&&(N=1),s(p,"colSpan",w),s(p,"rowSpan",N),f=l;f<=u;f++)for(d=a;d<=c;d++)Z[f]&&Z[f][d]&&(t=Z[f][d].elm,t!=p&&(h=e.grep(t.childNodes),o(h,function(e){p.appendChild(e)}),h.length&&(h=e.grep(p.childNodes),v=0,o(h,function(e){"BR"==e.nodeName&&v++<h.length-1&&p.removeChild(e)})),re.remove(t)));_()}}function L(e){var n,r,i,l,c,u,d,f,p,m;if(o(Z,function(r,i){if(o(r,function(t){if(C(t)&&(t=t.elm,c=t.parentNode,u=g(v(c,!1)),n=i,e))return!1}),e)return n===t}),n!==t){for(l=0,m=0;l<Z[0].length;l+=m)if(Z[n][l]&&(r=Z[n][l].elm,m=a(r,"colspan"),r!=i)){if(e){if(n>0&&Z[n-1][l]&&(f=Z[n-1][l].elm,p=a(f,"rowSpan"),p>1)){s(f,"rowSpan",p+1);continue}}else if(p=a(r,"rowspan"),p>1){s(r,"rowSpan",p+1);continue}d=S(r),s(d,"colSpan",r.colSpan),u.appendChild(d),i=r}u.hasChildNodes()&&(e?c.parentNode.insertBefore(u,c):re.insertAfter(u,c))}}function I(e,t){t=t||w().length||1;for(var n=0;n<t;n++)L(e)}function O(e){var n,r;o(Z,function(r){if(o(r,function(t,r){if(C(t)&&(n=r,e))return!1}),e)return n===t}),o(Z,function(t,i){var o,l,c;t[n]&&(o=t[n].elm,o!=r&&(c=a(o,"colspan"),l=a(o,"rowspan"),1==c?e?(o.parentNode.insertBefore(S(o),o),E(n,i,l-1,c)):(re.insertAfter(S(o),o),E(n,i,l-1,c)):s(o,"colSpan",o.colSpan+1),r=o))})}function H(e,t){t=t||N()||1;for(var n=0;n<t;n++)O(e)}function F(t){return e.grep(z(t),C)}function z(e){var t=[];return o(e,function(e){o(e,function(e){t.push(e)})}),t}function W(){var t=[];if(f(c)){if(1==Z[0].length)return;if(F(Z).length==z(Z).length)return}o(Z,function(n){o(n,function(n,r){C(n)&&e.inArray(t,r)===-1&&(o(Z,function(e){var t,n=e[r].elm;t=a(n,"colSpan"),t>1?s(n,"colSpan",t-1):re.remove(n)}),t.push(r))})}),_()}function U(){function e(e){var t,n;o(e.cells,function(e){var n=a(e,"rowSpan");n>1&&(s(e,"rowSpan",n-1),t=q(e),E(t.x,t.y,1,1))}),t=q(e.cells[0]),o(Z[t.y],function(e){var t;e=e.elm,e!=n&&(t=a(e,"rowSpan"),t<=1?re.remove(e):s(e,"rowSpan",t-1),n=e)})}var t;t=w(),f(c)&&t.length==c.rows.length||(o(t.reverse(),function(t){e(t)}),_())}function V(){var e=w();if(!f(c)||e.length!=c.rows.length)return re.remove(e),_(),e}function $(){var e=w();return o(e,function(t,n){e[n]=v(t,!0)}),e}function j(t,n){var r,a,l;t&&(r=i.splitAt(Z,ee.x,ee.y,n),a=r.row,e.each(r.cells,h),l=e.map(t,function(e){return e.cloneNode(!0)}),n||l.reverse(),o(l,function(e){var t,r,i=e.cells.length;for(g(e),t=0;t<i;t++)r=e.cells[t],h(r),s(r,"colSpan",1),s(r,"rowSpan",1);for(t=i;t<Q;t++)e.appendChild(h(S(e.cells[i-1])));for(t=Q;t<i;t++)re.remove(e.cells[t]);n?a.parentNode.insertBefore(e,a):re.insertAfter(e,a)}),d())}function q(e){var t;return o(Z,function(n,r){return o(n,function(n,i){if(n.elm==e)return t={x:i,y:r},!1}),!t}),t}function Y(e){ee=q(e)}function X(){var e,t;return e=t=0,o(Z,function(n,r){o(n,function(n,i){var o,a;C(n)&&(n=Z[r][i],i>e&&(e=i),r>t&&(t=r),n.real&&(o=n.colspan-1,a=n.rowspan-1,o&&i+o>e&&(e=i+o),a&&r+a>t&&(t=r+a)))})}),{x:e,y:t}}function K(e){var t,n,r,i,o,a,s,l,c,u;if(te=q(e),ee&&te){for(t=Math.min(ee.x,te.x),n=Math.min(ee.y,te.y),r=Math.max(ee.x,te.x),i=Math.max(ee.y,te.y),o=r,a=i,u=n;u<=i;u++)for(c=t;c<=r;c++)e=Z[u][c],e.real&&(s=e.colspan-1,l=e.rowspan-1,s&&c+s>o&&(o=c+s),l&&u+l>a&&(a=u+l));for(d(),u=n;u<=a;u++)for(c=t;c<=o;c++)Z[u][c]&&re.setAttrib(Z[u][c].elm,"data-mce-selected","1")}}function G(e,t){var n,r,i;n=q(e),r=n.y*Q+n.x;do{if(r+=t,i=b(r%Q,Math.floor(r/Q)),!i)break;if(i.elm!=e)return ne.select(i.elm,!0),re.isEmpty(i.elm)&&ne.collapse(!0),!0}while(i.elm==e);return!1}function J(t){if(ee){var n=i.splitAt(Z,ee.x,ee.y,t);e.each(n.cells,h)}}var Z,Q,ee,te,ne=l.selection,re=ne.dom;c=c||re.getParent(ne.getStart(!0),"table"),m(),u=u||re.getParent(ne.getStart(!0),"th,td"),u&&(ee=q(u),te=X(),u=b(ee.x,ee.y)),e.extend(this,{deleteTable:k,split:T,merge:M,insertRow:L,insertRows:I,insertCol:O,insertCols:H,splitCols:J,deleteCols:W,deleteRows:U,cutRows:V,copyRows:$,pasteRows:j,getPos:q,setStartCell:Y,setEndCell:K,moveRelIdx:G,refresh:m})}}),r("tinymce/tableplugin/Quirks",["tinymce/util/VK","tinymce/util/Delay","tinymce/Env","tinymce/util/Tools","tinymce/tableplugin/Utils"],function(e,t,n,r,i){var o=r.each,a=i.getSpanVal;return function(s){function l(){function n(n){function r(e,t){var r=e?"previousSibling":"nextSibling",o=s.dom.getParent(t,"tr"),a=o[r];if(a)return v(s,t,a,e),n.preventDefault(),!0;var l=s.dom.getParent(o,"table"),d=o.parentNode,f=d.nodeName.toLowerCase();if("tbody"===f||f===(e?"tfoot":"thead")){var p=i(e,l,d,"tbody");if(null!==p)return c(e,p,t)}return u(e,o,r,l)}function i(e,t,n,r){var i=s.dom.select(">"+r,t),o=i.indexOf(n);if(e&&0===o||!e&&o===i.length-1)return l(e,t);if(o===-1){var a="thead"===n.tagName.toLowerCase()?0:i.length-1;return i[a]}return i[o+(e?-1:1)]}function l(e,t){var n=e?"thead":"tfoot",r=s.dom.select(">"+n,t);return 0!==r.length?r[0]:null}function c(e,t,r){var i=d(t,e);return i&&v(s,r,i,e),n.preventDefault(),!0}function u(e,t,i,o){var a=o[i];if(a)return f(a),!0;var l=s.dom.getParent(o,"td,th");if(l)return r(e,l,n);var c=d(t,!e);return f(c),n.preventDefault(),!1}function d(e,t){var n=e&&e[t?"lastChild":"firstChild"];return n&&"BR"===n.nodeName?s.dom.getParent(n,"td,th"):n}function f(e){s.selection.setCursorLocation(e,0)}function p(){return x==e.UP||x==e.DOWN}function m(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"tr");return null!==n}function g(e){for(var t=0,n=e;n.previousSibling;)n=n.previousSibling,t+=a(n,"colspan");return t}function h(e,t){var n=0,r=0;return o(e.children,function(e,i){if(n+=a(e,"colspan"),r=i,n>t)return!1}),r}function v(e,t,n,r){var i=g(s.dom.getParent(t,"td,th")),o=h(n,i),a=n.childNodes[o],l=d(a,r);f(l||a)}function b(e){var t=s.selection.getNode(),n=s.dom.getParent(t,"td,th"),r=s.dom.getParent(e,"td,th");return n&&n!==r&&y(n,r)}function y(e,t){return s.dom.getParent(e,"TABLE")===s.dom.getParent(t,"TABLE")}var x=n.keyCode;if(p()&&m(s)){var C=s.selection.getNode();t.setEditorTimeout(s,function(){b(C)&&r(!n.shiftKey&&x===e.UP,C,n)},0)}}s.on("KeyDown",function(e){n(e)})}function c(){function e(e,t){var n,r=t.ownerDocument,i=r.createRange();return i.setStartBefore(t),i.setEnd(e.endContainer,e.endOffset),n=r.createElement("body"),n.appendChild(i.cloneContents()),0===n.innerHTML.replace(/<(br|img|object|embed|input|textarea)[^>]*>/gi,"-").replace(/<[^>]+>/g,"").length}s.on("KeyDown",function(t){var n,r,i=s.dom;37!=t.keyCode&&38!=t.keyCode||(n=s.selection.getRng(),r=i.getParent(n.startContainer,"table"),r&&s.getBody().firstChild==r&&e(n,r)&&(n=i.createRng(),n.setStartBefore(r),n.setEndBefore(r),s.selection.setRng(n),t.preventDefault()))})}function u(){s.on("KeyDown SetContent VisualAid",function(){var e;for(e=s.getBody().lastChild;e;e=e.previousSibling)if(3==e.nodeType){if(e.nodeValue.length>0)break}else if(1==e.nodeType&&("BR"==e.tagName||!e.getAttribute("data-mce-bogus")))break;e&&"TABLE"==e.nodeName&&(s.settings.forced_root_block?s.dom.add(s.getBody(),s.settings.forced_root_block,s.settings.forced_root_block_attrs,n.ie&&n.ie<10?"&nbsp;":'<br data-mce-bogus="1" />'):s.dom.add(s.getBody(),"br",{"data-mce-bogus":"1"}))}),s.on("PreProcess",function(e){var t=e.node.lastChild;t&&("BR"==t.nodeName||1==t.childNodes.length&&("BR"==t.firstChild.nodeName||"\xa0"==t.firstChild.nodeValue))&&t.previousSibling&&"TABLE"==t.previousSibling.nodeName&&s.dom.remove(t)})}function d(){function e(e,t,n,r){var i,o,a,s=3,l=e.dom.getParent(t.startContainer,"TABLE");return l&&(i=l.parentNode),o=t.startContainer.nodeType==s&&0===t.startOffset&&0===t.endOffset&&r&&("TR"==n.nodeName||n==i),a=("TD"==n.nodeName||"TH"==n.nodeName)&&!r,o||a}function t(){var t=s.selection.getRng(),n=s.selection.getNode(),r=s.dom.getParent(t.startContainer,"TD,TH");if(e(s,t,n,r)){r||(r=n);for(var i=r.lastChild;i.lastChild;)i=i.lastChild;3==i.nodeType&&(t.setEnd(i,i.data.length),s.selection.setRng(t))}}s.on("KeyDown",function(){t()}),s.on("MouseDown",function(e){2!=e.button&&t()})}function f(){function t(e){s.selection.select(e,!0),s.selection.collapse(!0)}function n(e){s.$(e).empty(),i.paddCell(e)}s.on("keydown",function(i){if((i.keyCode==e.DELETE||i.keyCode==e.BACKSPACE)&&!i.isDefaultPrevented()){var o,a,l,c;if(o=s.dom.getParent(s.selection.getStart(),"table")){if(a=s.dom.select("td,th",o),l=r.grep(a,function(e){return!!s.dom.getAttrib(e,"data-mce-selected")}),0===l.length)return c=s.dom.getParent(s.selection.getStart(),"td,th"),void(s.selection.isCollapsed()&&c&&s.dom.isEmpty(c)&&(i.preventDefault(),n(c),t(c)));i.preventDefault(),s.undoManager.transact(function(){a.length==l.length?s.execCommand("mceTableDelete"):(r.each(l,n),t(l[0]))})}}})}function p(){var t=function(e){return e&&"CAPTION"==e.nodeName&&"TABLE"==e.parentNode.nodeName},r=function(e,t){var n=s.selection.getRng(),r=e.ownerDocument.createTextNode("\xa0");n.startOffset?e.insertBefore(r,e.firstChild):e.appendChild(r),t&&(s.selection.select(r,!0),s.selection.collapse(!0))},i=function(t){return(t.keyCode==e.DELETE||t.keyCode==e.BACKSPACE)&&!t.isDefaultPrevented()},o=function(e){return e.firstChild===e.lastChild&&e.firstChild},a=function(e){return e&&3===e.nodeType},l=function(e){var t=o(e);return a(t)&&1===t.data.length?t.data:null},c=function(e){var t=o(e),n=l(e);return t&&!a(t)||n&&!d(n)},u=function(e){return s.dom.isEmpty(e)||d(l(e))},d=function(e){return"\xa0"===e};s.on("keydown",function(e){if(i(e)){var o=s.dom.getParent(s.selection.getStart(),"caption");t(o)&&(n.ie&&(s.selection.isCollapsed()?c(o)&&r(o):(s.undoManager.transact(function(){s.execCommand("Delete"),u(o)&&r(o,!0)}),e.preventDefault())),u(o)&&e.preventDefault())}})}f(),p(),n.webkit&&(l(),d()),n.gecko&&(c(),u()),n.ie>9&&(c(),u())}}),r("tinymce/tableplugin/CellSelection",["tinymce/tableplugin/TableGrid","tinymce/dom/TreeWalker","tinymce/util/Tools"],function(e,t,n){return function(r,i){function o(e){r.getBody().style.webkitUserSelect="",(e||g)&&(r.$("td[data-mce-selected],th[data-mce-selected]").removeAttr("data-mce-selected"),g=!1)}function a(e,t){return!(!e||!t)&&e===m.getParent(t,"table")}function s(t){var n,o,s=t.target;if(!f&&!p&&s!==d&&(d=s,u&&c)){if(o=m.getParent(s,"td,th"),a(u,o)||(o=m.getParent(u,"td,th")),c===o&&!g)return;if(i(!0),a(u,o)){t.preventDefault(),l||(l=new e(r,u,c),r.getBody().style.webkitUserSelect="none"),l.setEndCell(o),g=!0,n=r.selection.getSel();try{n.removeAllRanges?n.removeAllRanges():n.empty()}catch(e){}}}}var l,c,u,d,f,p,m=r.dom,g=!0,h=function(){c=l=u=d=null,i(!1)};return r.on("SelectionChange",function(e){g&&e.stopImmediatePropagation()},!0),r.on("MouseDown",function(e){2==e.button||f||p||(o(),c=m.getParent(e.target,"td,th"),u=m.getParent(c,"table"))}),r.on("mouseover",s),r.on("remove",function(){m.unbind(r.getDoc(),"mouseover",s),o()}),r.on("MouseUp",function(){function e(e,r){var o=new t(e,e);do{if(3==e.nodeType&&0!==n.trim(e.nodeValue).length)return void(r?i.setStart(e,0):i.setEnd(e,e.nodeValue.length));if("BR"==e.nodeName)return void(r?i.setStartBefore(e):i.setEndBefore(e))}while(e=r?o.next():o.prev())}var i,o,a,s,u,d=r.selection;if(c){if(l&&(r.getBody().style.webkitUserSelect=""),o=m.select("td[data-mce-selected],th[data-mce-selected]"),o.length>0){i=m.createRng(),s=o[0],i.setStartBefore(s),i.setEndAfter(s),e(s,1),a=new t(s,m.getParent(o[0],"table"));do if("TD"==s.nodeName||"TH"==s.nodeName){if(!m.getAttrib(s,"data-mce-selected"))break;u=s}while(s=a.next());e(u),d.setRng(i)}r.nodeChanged(),h()}}),r.on("KeyUp Drop SetContent",function(e){o("setcontent"==e.type),h(),f=!1}),r.on("ObjectResizeStart ObjectResized",function(e){f="objectresized"!=e.type}),r.on("dragstart",function(){p=!0}),r.on("drop dragend",function(){p=!1}),{clear:o}}}),r("tinymce/tableplugin/Dialogs",["tinymce/util/Tools","tinymce/Env"],function(e,t){var n=e.each;return function(r){function i(){var e=r.settings.color_picker_callback;if(e)return function(){var t=this;e.call(r,function(e){t.value(e).fire("change")},t.value())}}function o(e){return{title:"Advanced",type:"form",defaults:{onchange:function(){d(e,this.parents().reverse()[0],"style"==this.name())}},items:[{label:"Style",name:"style",type:"textbox"},{type:"form",padding:0,formItemDefaults:{layout:"grid",alignH:["start","right"]},defaults:{size:7},items:[{label:"Border color",type:"colorbox",name:"borderColor",onaction:i()},{label:"Background color",type:"colorbox",name:"backgroundColor",onaction:i()}]}]}}function a(e){return e?e.replace(/px$/,""):""}function s(e){return/^[0-9]+$/.test(e)&&(e+="px"),e}function l(e){n("left center right".split(" "),function(t){r.formatter.remove("align"+t,{},e)})}function c(e){n("top middle bottom".split(" "),function(t){r.formatter.remove("valign"+t,{},e)})}function u(t,n,r){function i(t,r){return r=r||[],e.each(t,function(e){var t={text:e.text||e.title};e.menu?t.menu=i(e.menu):(t.value=e.value,n&&n(t)),r.push(t)}),r}return i(t,r||[])}function d(e,t,n){var r=t.toJSON(),i=e.parseStyle(r.style);n?(t.find("#borderColor").value(i["border-color"]||"")[0].fire("change"),t.find("#backgroundColor").value(i["background-color"]||"")[0].fire("change")):(i["border-color"]=r.borderColor,i["background-color"]=r.backgroundColor),t.find("#style").value(e.serializeStyle(e.parseStyle(e.serializeStyle(i))))}function f(e,t,n){var r=e.parseStyle(e.getAttrib(n,"style"));r["border-color"]&&(t.borderColor=r["border-color"]),r["background-color"]&&(t.backgroundColor=r["background-color"]),t.style=e.serializeStyle(r)}function p(e,t,r){var i=e.parseStyle(e.getAttrib(t,"style"));n(r,function(e){i[e.name]=e.value}),e.setAttrib(t,"style",e.serializeStyle(e.parseStyle(e.serializeStyle(i))))}var m=this;m.tableProps=function(){m.table(!0)},m.table=function(i){function c(){function n(e,t,r){if("TD"===e.tagName||"TH"===e.tagName)C.setStyle(e,t,r);else if(e.children)for(var i=0;i<e.children.length;i++)n(e.children[i],t,r)}var i;d(C,this),w=e.extend(w,this.toJSON()),w["class"]===!1&&delete w["class"],r.undoManager.transact(function(){if(g||(g=r.plugins.table.insertTable(w.cols||1,w.rows||1)),r.dom.setAttribs(g,{style:w.style,"class":w["class"]}),r.settings.table_style_by_css){if(x=[],x.push({name:"border",value:w.border}),x.push({name:"border-spacing",value:s(w.cellspacing)}),p(C,g,x),C.setAttribs(g,{"data-mce-border-color":w.borderColor,"data-mce-cell-padding":w.cellpadding,"data-mce-border":w.border}),g.children)for(var e=0;e<g.children.length;e++)n(g.children[e],"border",w.border),n(g.children[e],"padding",s(w.cellpadding))}else r.dom.setAttribs(g,{border:w.border,cellpadding:w.cellpadding,cellspacing:w.cellspacing});C.getAttrib(g,"width")&&!r.settings.table_style_by_css?C.setAttrib(g,"width",a(w.width)):C.setStyle(g,"width",s(w.width)),C.setStyle(g,"height",s(w.height)),i=C.select("caption",g)[0],i&&!w.caption&&C.remove(i),!i&&w.caption&&(i=C.create("caption"),i.innerHTML=t.ie?"\xa0":'<br data-mce-bogus="1"/>',g.insertBefore(i,g.firstChild)),l(g),w.align&&r.formatter.apply("align"+w.align,{},g),r.focus(),r.addVisual()})}function m(e,t){function n(e,n){for(var r=0;r<n.length;r++){var i=C.getStyle(n[r],t);if("undefined"==typeof e&&(e=i),e!=i)return""}return e}var i,o=r.dom.select("td,th",e);return i=n(i,o)}var g,h,v,b,y,x,C=r.dom,w={};i===!0?(g=C.getParent(r.selection.getStart(),"table"),g&&(w={width:a(C.getStyle(g,"width")||C.getAttrib(g,"width")),height:a(C.getStyle(g,"height")||C.getAttrib(g,"height")),cellspacing:a(C.getStyle(g,"border-spacing")||C.getAttrib(g,"cellspacing")),cellpadding:C.getAttrib(g,"data-mce-cell-padding")||C.getAttrib(g,"cellpadding")||m(g,"padding"),border:C.getAttrib(g,"data-mce-border")||C.getAttrib(g,"border")||m(g,"border"),borderColor:C.getAttrib(g,"data-mce-border-color"),caption:!!C.select("caption",g)[0],"class":C.getAttrib(g,"class")},n("left center right".split(" "),function(e){r.formatter.matchNode(g,"align"+e)&&(w.align=e)}))):(h={label:"Cols",name:"cols"},v={label:"Rows",name:"rows"}),r.settings.table_class_list&&(w["class"]&&(w["class"]=w["class"].replace(/\s*mce\-item\-table\s*/g,"")),b={name:"class",type:"listbox",label:"Class",values:u(r.settings.table_class_list,function(e){e.value&&(e.textStyle=function(){return r.formatter.getCssText({block:"table",classes:[e.value]})})})}),y={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",labelGapCalc:!1,padding:0,layout:"grid",columns:2,defaults:{type:"textbox",maxWidth:50},items:r.settings.table_appearance_options!==!1?[h,v,{label:"Width",name:"width"},{label:"Height",name:"height"},{label:"Cell spacing",name:"cellspacing"},{label:"Cell padding",name:"cellpadding"},{label:"Border",name:"border"},{label:"Caption",name:"caption",type:"checkbox"}]:[h,v,{label:"Width",name:"width"},{label:"Height",name:"height"}]},{label:"Alignment",name:"align",type:"listbox",text:"None",values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},b]},r.settings.table_advtab!==!1?(f(C,w,g),r.windowManager.open({title:"Table properties",data:w,bodyType:"tabpanel",body:[{title:"General",type:"form",items:y},o(C)],onsubmit:c})):r.windowManager.open({title:"Table properties",data:w,body:y,onsubmit:c})},m.merge=function(e,t){r.windowManager.open({title:"Merge cells",body:[{label:"Cols",name:"cols",type:"textbox",value:"1",size:10},{label:"Rows",name:"rows",type:"textbox",value:"1",size:10}],onsubmit:function(){var n=this.toJSON();r.undoManager.transact(function(){e.merge(t,n.cols,n.rows)})}})},m.cell=function(){function t(e,t,n){(1===b.length||n)&&v.setAttrib(e,t,n)}function i(e,t,n){(1===b.length||n)&&v.setStyle(e,t,n)}function p(){d(v,this),g=e.extend(g,this.toJSON()),r.undoManager.transact(function(){n(b,function(e){t(e,"scope",g.scope),t(e,"style",g.style),t(e,"class",g["class"]),i(e,"width",s(g.width)),i(e,"height",s(g.height)),g.type&&e.nodeName.toLowerCase()!==g.type&&(e=v.rename(e,g.type)),1===b.length&&(l(e),c(e)),g.align&&r.formatter.apply("align"+g.align,{},e),g.valign&&r.formatter.apply("valign"+g.valign,{},e)}),r.focus()})}var m,g,h,v=r.dom,b=[];if(b=r.dom.select("td[data-mce-selected],th[data-mce-selected]"),m=r.dom.getParent(r.selection.getStart(),"td,th"),!b.length&&m&&b.push(m),m=m||b[0]){b.length>1?g={width:"",height:"",scope:"","class":"",align:"",style:"",type:m.nodeName.toLowerCase()}:(g={width:a(v.getStyle(m,"width")||v.getAttrib(m,"width")),height:a(v.getStyle(m,"height")||v.getAttrib(m,"height")),scope:v.getAttrib(m,"scope"),"class":v.getAttrib(m,"class")},g.type=m.nodeName.toLowerCase(),n("left center right".split(" "),function(e){r.formatter.matchNode(m,"align"+e)&&(g.align=e)}),n("top middle bottom".split(" "),function(e){r.formatter.matchNode(m,"valign"+e)&&(g.valign=e)}),f(v,g,m)),r.settings.table_cell_class_list&&(h={name:"class",type:"listbox",label:"Class",values:u(r.settings.table_cell_class_list,function(e){e.value&&(e.textStyle=function(){return r.formatter.getCssText({block:"td",classes:[e.value]})})})});var y={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",layout:"grid",columns:2,labelGapCalc:!1,padding:0,defaults:{type:"textbox",maxWidth:50},items:[{label:"Width",name:"width"},{label:"Height",name:"height"},{label:"Cell type",name:"type",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{label:"Scope",name:"scope",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{label:"H Align",name:"align",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"V Align",name:"valign",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}]},h]};r.settings.table_cell_advtab!==!1?r.windowManager.open({title:"Cell properties",bodyType:"tabpanel",data:g,body:[{title:"General",type:"form",items:y},o(v)],onsubmit:p}):r.windowManager.open({title:"Cell properties",data:g,body:y,onsubmit:p})}},m.row=function(){function t(e,t,n){(1===x.length||n)&&y.setAttrib(e,t,n)}function i(e,t,n){(1===x.length||n)&&y.setStyle(e,t,n)}function c(){var o,a,c;d(y,this),v=e.extend(v,this.toJSON()),r.undoManager.transact(function(){var e=v.type;n(x,function(n){t(n,"scope",v.scope),t(n,"style",v.style),t(n,"class",v["class"]),i(n,"height",s(v.height)),e!==n.parentNode.nodeName.toLowerCase()&&(o=y.getParent(n,"table"),a=n.parentNode,c=y.select(e,o)[0],c||(c=y.create(e),o.firstChild?o.insertBefore(c,o.firstChild):o.appendChild(c)),c.appendChild(n),a.hasChildNodes()||y.remove(a)),1===x.length&&l(n),v.align&&r.formatter.apply("align"+v.align,{},n)}),r.focus()})}var p,m,g,h,v,b,y=r.dom,x=[];p=r.dom.getParent(r.selection.getStart(),"table"),m=r.dom.getParent(r.selection.getStart(),"td,th"),n(p.rows,function(e){n(e.cells,function(t){if(y.getAttrib(t,"data-mce-selected")||t==m)return x.push(e),!1})}),g=x[0],g&&(x.length>1?v={height:"",scope:"","class":"",align:"",type:g.parentNode.nodeName.toLowerCase()}:(v={height:a(y.getStyle(g,"height")||y.getAttrib(g,"height")),scope:y.getAttrib(g,"scope"),"class":y.getAttrib(g,"class")},v.type=g.parentNode.nodeName.toLowerCase(),n("left center right".split(" "),function(e){r.formatter.matchNode(g,"align"+e)&&(v.align=e)}),f(y,v,g)),r.settings.table_row_class_list&&(h={name:"class",type:"listbox",label:"Class",values:u(r.settings.table_row_class_list,function(e){e.value&&(e.textStyle=function(){return r.formatter.getCssText({block:"tr",classes:[e.value]})})})}),b={type:"form",columns:2,padding:0,defaults:{type:"textbox"},items:[{type:"listbox",name:"type",label:"Row type",text:"Header",maxWidth:null,values:[{text:"Header",value:"thead"},{text:"Body",value:"tbody"},{text:"Footer",value:"tfoot"}]},{type:"listbox",name:"align",label:"Alignment",text:"None",maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height"},h]},r.settings.table_row_advtab!==!1?r.windowManager.open({title:"Row properties",data:v,bodyType:"tabpanel",body:[{title:"General",type:"form",items:b},o(y)],onsubmit:c}):r.windowManager.open({title:"Row properties",data:v,body:b,onsubmit:c}))}}}),r("tinymce/tableplugin/ResizeBars",["tinymce/util/Tools","tinymce/util/VK"],function(e,n){var r;return function(i){function o(e,t){return{index:e,y:i.dom.getPos(t).y}}function a(e,t){return{index:e,y:i.dom.getPos(t).y+t.offsetHeight}}function s(e,t){return{index:e,x:i.dom.getPos(t).x}}function l(e,t){return{index:e,x:i.dom.getPos(t).x+t.offsetWidth}}function c(){var e=i.getBody().dir;return"rtl"===e}function u(){return i.inline}function d(){return u?i.getBody().ownerDocument.body:i.getBody()}function f(e,t){return c()?l(e,t):s(e,t)}function p(e,t){return c()?s(e,t):l(e,t)}function m(e,t){return g(e,"width")/g(t,"width")*100}function g(e,t){var n=i.dom.getStyle(e,t,!0),r=parseInt(n,10);return r}function h(e){var t=g(e,"width"),n=g(e.parentElement,"width");return t/n*100}function v(e,t){var n=g(e,"width");return t/n*100}function b(e,t){var n=g(e.parentElement,"width");return t/n*100}function y(e,t,n){for(var r=[],i=1;i<n.length;i++){var o=n[i].element;r.push(e(i-1,o))}var a=n[n.length-1];return r.push(t(n.length-1,a.element)),r}function x(){var t=i.dom.select("."+fe,d());e.each(t,function(e){i.dom.remove(e)})}function C(e){x(),B(e)}function w(e,t,n,r,i,o,a,s){var l={"data-mce-bogus":"all","class":fe+" "+e,unselectable:"on","data-mce-resize":!1,style:"cursor: "+t+"; margin: 0; padding: 0; position: absolute; left: "+n+"px; top: "+r+"px; height: "+i+"px; width: "+o+"px; "};return l[a]=s,l}function N(t,n,r){e.each(t,function(e){var t=r.x,o=e.y-Ce/2,a=Ce,s=n;i.dom.add(d(),"div",w(pe,me,t,o,a,s,ge,e.index))})}function k(t,n,r){e.each(t,function(e){var t=e.x-Ce/2,o=r.y,a=n,s=Ce;i.dom.add(d(),"div",w(ve,be,t,o,a,s,ye,e.index))})}function S(t){return e.map(t.rows,function(t){var n=e.map(t.cells,function(e){var t=e.hasAttribute("rowspan")?parseInt(e.getAttribute("rowspan"),10):1,n=e.hasAttribute("colspan")?parseInt(e.getAttribute("colspan"),10):1;return{element:e,rowspan:t,colspan:n}});return{element:t,cells:n}})}function _(n){function r(e,t){return e+","+t}function i(e,t){return s[r(e,t)]}function o(){var t=[];return e.each(l,function(e){t=t.concat(e.cells)}),t}function a(){return l}var s={},l=[],c=0,u=0;return e.each(n,function(n,i){var o=[];e.each(n.cells,function(e){for(var n=0;s[r(i,n)]!==t;)n++;for(var a={element:e.element,colspan:e.colspan,rowspan:e.rowspan,rowIndex:i,colIndex:n},l=0;l<e.colspan;l++)for(var d=0;d<e.rowspan;d++){var f=i+d,p=n+l;s[r(f,p)]=a,c=Math.max(c,f+1),u=Math.max(u,p+1)}o.push(a)}),l.push({element:n.element,cells:o})}),{grid:{maxRows:c,maxCols:u},getAt:i,getAllCells:o,getAllRows:a}}function E(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n}function T(e,t,n){for(var r,i=e(),o=0;o<i.length;o++)t(i[o])&&(r=i[o]);return r?r:n()}function R(t){var n=E(0,t.grid.maxCols),r=E(0,t.grid.maxRows);return e.map(n,function(e){function n(){for(var n=[],i=0;i<r.length;i++){var o=t.getAt(i,e);o&&o.colIndex===e&&n.push(o)}return n}function i(e){return 1===e.colspan}function o(){for(var n,i=0;i<r.length;i++)if(n=t.getAt(i,e))return n;return null}return T(n,i,o)})}function A(t){var n=E(0,t.grid.maxCols),r=E(0,t.grid.maxRows);return e.map(r,function(e){function r(){for(var r=[],i=0;i<n.length;i++){var o=t.getAt(e,i);o&&o.rowIndex===e&&r.push(o)}return r}function i(e){return 1===e.rowspan}function o(){return t.getAt(e,0)}return T(r,i,o);
})}function B(e){var t=S(e),n=_(t),r=A(n),s=R(n),l=i.dom.getPos(e),c=r.length>0?y(o,a,r):[],u=s.length>0?y(f,p,s):[];N(c,e.offsetWidth,l),k(u,e.offsetHeight,l)}function P(e,t,n,r){if(t<0||t>=e.length-1)return"";var i=e[t];if(i)i={value:i,delta:0};else for(var o=e.slice(0,t).reverse(),a=0;a<o.length;a++)o[a]&&(i={value:o[a],delta:a+1});var s=e[t+1];if(s)s={value:s,delta:1};else for(var l=e.slice(t+1),c=0;c<l.length;c++)l[c]&&(s={value:l[c],delta:c+1});var u=s.delta-i.delta,d=Math.abs(s.value-i.value)/u;return n?d/g(r,"width")*100:d}function D(e,t){var n=i.dom.getStyle(e,t);return n||(n=i.dom.getAttrib(e,t)),n||(n=i.dom.getStyle(e,t,!0)),n}function M(e,t,n){var r=D(e,"width"),i=parseInt(r,10),o=t?m(e,n):g(e,"width");return(t&&!V(r)||!t&&!$(r))&&(i=0),!isNaN(i)&&i>0?i:o}function L(t,n,r){for(var i=R(t),o=e.map(i,function(e){return f(e.colIndex,e.element).x}),a=[],s=0;s<i.length;s++){var l=i[s].element.hasAttribute("colspan")?parseInt(i[s].element.getAttribute("colspan"),10):1,c=l>1?P(o,s):M(i[s].element,n,r);c=c?c:we,a.push(c)}return a}function I(e){var t=D(e,"height"),n=parseInt(t,10);return V(t)&&(n=0),!isNaN(n)&&n>0?n:g(e,"height")}function O(t){for(var n=A(t),r=e.map(n,function(e){return o(e.rowIndex,e.element).y}),i=[],a=0;a<n.length;a++){var s=n[a].element.hasAttribute("rowspan")?parseInt(n[a].element.getAttribute("rowspan"),10):1,l=s>1?P(r,a):I(n[a].element);l=l?l:Ne,i.push(l)}return i}function H(t,n,r,i,o){function a(t){return e.map(t,function(){return 0})}function s(){var e;if(o)e=[100-d[0]];else{var t=Math.max(i,d[0]+r);e=[t-d[0]]}return e}function l(e,t){var n,o=a(d.slice(0,e)),s=a(d.slice(t+1));if(r>=0){var l=Math.max(i,d[t]-r);n=o.concat([r,l-d[t]]).concat(s)}else{var c=Math.max(i,d[e]+r),u=d[e]-c;n=o.concat([c-d[e],u]).concat(s)}return n}function c(e,t){var n,o=a(d.slice(0,t));if(r>=0)n=o.concat([r]);else{var s=Math.max(i,d[t]+r);n=o.concat([s-d[t]])}return n}var u,d=t.slice(0);return u=0===t.length?[]:1===t.length?s():0===n?l(0,1):n>0&&n<t.length-1?l(n,n+1):n===t.length-1?c(n-1,n):[]}function F(e,t,n){for(var r=0,i=e;i<t;i++)r+=n[i];return r}function z(t,n){var r=t.getAllCells();return e.map(r,function(e){var t=F(e.colIndex,e.colIndex+e.colspan,n);return{element:e.element,width:t,colspan:e.colspan}})}function W(t,n){var r=t.getAllCells();return e.map(r,function(e){var t=F(e.rowIndex,e.rowIndex+e.rowspan,n);return{element:e.element,height:t,rowspan:e.rowspan}})}function U(t,n){var r=t.getAllRows();return e.map(r,function(e,t){return{element:e.element,height:n[t]}})}function V(e){return Se.test(e)}function $(e){return _e.test(e)}function j(t,n,r){function o(t,n){e.each(t,function(e){i.dom.setStyle(e.element,"width",e.width+n),i.dom.setAttrib(e.element,"width",null)})}function a(){return r<u.grid.maxCols-1?h(t):h(t)+b(t,n)}function s(){return r<u.grid.maxCols-1?g(t,"width"):g(t,"width")+n}function l(e,n,o){r!=u.grid.maxCols-1&&o||(i.dom.setStyle(t,"width",e+n),i.dom.setAttrib(t,"width",null))}for(var c=S(t),u=_(c),d=V(t.width)||V(t.style.width),f=L(u,d,t),p=d?v(t,n):n,m=H(f,r,p,we,d,t),y=[],x=0;x<m.length;x++)y.push(m[x]+f[x]);var C=z(u,y),w=d?"%":"px",N=d?a():s();i.undoManager.transact(function(){o(C,w),l(N,w,d)})}function q(t,n,r){for(var o=S(t),a=_(o),s=O(a),l=[],c=0,u=0;u<s.length;u++)l.push(u===r?n+s[u]:s[u]),c+=c[u];var d=W(a,l),f=U(a,l);i.undoManager.transact(function(){e.each(f,function(e){i.dom.setStyle(e.element,"height",e.height+"px"),i.dom.setAttrib(e.element,"height",null)}),e.each(d,function(e){i.dom.setStyle(e.element,"height",e.height+"px"),i.dom.setAttrib(e.element,"height",null)}),i.dom.setStyle(t,"height",c+"px"),i.dom.setAttrib(t,"height",null)})}function Y(){ae=setTimeout(function(){J()},200)}function X(){clearTimeout(ae)}function K(){var e=document.createElement("div");return e.setAttribute("style","margin: 0; padding: 0; position: fixed; left: 0px; top: 0px; height: 100%; width: 100%;"),e.setAttribute("data-mce-bogus","all"),e}function G(e,t){i.dom.bind(e,"mouseup",function(){J()}),i.dom.bind(e,"mousemove",function(e){X(),se&&t(e)}),i.dom.bind(e,"mouseout",function(){Y()})}function J(){if(i.dom.remove(le),se){i.dom.removeClass(ce,ke),se=!1;var e,t;if(Q(ce)){var n=parseInt(i.dom.getAttrib(ce,xe),10),o=i.dom.getPos(ce).x;e=parseInt(i.dom.getAttrib(ce,ye),10),t=c()?n-o:o-n,Math.abs(t)>=1&&j(r,t,e)}else if(ee(ce)){var a=parseInt(i.dom.getAttrib(ce,he),10),s=i.dom.getPos(ce).y;e=parseInt(i.dom.getAttrib(ce,ge),10),t=s-a,Math.abs(t)>=1&&q(r,t,e)}C(r),i.nodeChanged()}}function Z(e,t){le=le?le:K(),se=!0,i.dom.addClass(e,ke),ce=e,G(le,t),i.dom.add(d(),le)}function Q(e){return i.dom.hasClass(e,ve)}function ee(e){return i.dom.hasClass(e,pe)}function te(e){ue=ue!==t?ue:e.clientX;var n=e.clientX-ue;ue=e.clientX;var r=i.dom.getPos(ce).x;i.dom.setStyle(ce,"left",r+n+"px")}function ne(e){de=de!==t?de:e.clientY;var n=e.clientY-de;de=e.clientY;var r=i.dom.getPos(ce).y;i.dom.setStyle(ce,"top",r+n+"px")}function re(e){ue=t,Z(e,te)}function ie(e){de=t,Z(e,ne)}function oe(e){var t=e.target,n=i.getBody();if(i.$.contains(n,r)||r===n)if(Q(t)){e.preventDefault();var o=i.dom.getPos(t).x;i.dom.setAttrib(t,xe,o),re(t)}else if(ee(t)){e.preventDefault();var a=i.dom.getPos(t).y;i.dom.setAttrib(t,he,a),ie(t)}else x()}var ae,se,le,ce,ue,de,fe="mce-resize-bar",pe="mce-resize-bar-row",me="row-resize",ge="data-row",he="data-initial-top",ve="mce-resize-bar-col",be="col-resize",ye="data-col",xe="data-initial-left",Ce=4,we=10,Ne=10,ke="mce-resize-bar-dragging",Se=new RegExp(/(\d+(\.\d+)?%)/),_e=new RegExp(/px|em/);return i.on("init",function(){i.dom.bind(d(),"mousedown",oe)}),i.on("ObjectResized",function(t){var n=t.target;if("TABLE"===n.nodeName){var r=[];e.each(n.rows,function(t){e.each(t.cells,function(e){var t=i.dom.getStyle(e,"width",!0);r.push({cell:e,width:t})})}),e.each(r,function(e){i.dom.setStyle(e.cell,"width",e.width),i.dom.setAttrib(e.cell,"width",null)})}}),i.on("mouseover",function(e){if(!se){var t=i.dom.getParent(e.target,"table");("TABLE"===e.target.nodeName||t)&&(r=t,C(t))}}),i.on("keydown",function(e){switch(e.keyCode){case n.LEFT:case n.RIGHT:case n.UP:case n.DOWN:x()}}),i.on("remove",function(){x(),i.dom.unbind(d(),"mousedown",oe)}),{adjustWidth:j,adjustHeight:q,clearBars:x,drawBars:B,determineDeltas:H,getTableGrid:_,getTableDetails:S,getWidths:L,getPixelHeights:O,isPercentageBasedSize:V,isPixelBasedSize:$,recalculateWidths:z,recalculateCellHeights:W,recalculateRowHeights:U}}}),r("tinymce/tableplugin/Plugin",["tinymce/tableplugin/TableGrid","tinymce/tableplugin/Quirks","tinymce/tableplugin/CellSelection","tinymce/tableplugin/Dialogs","tinymce/tableplugin/ResizeBars","tinymce/util/Tools","tinymce/dom/TreeWalker","tinymce/Env","tinymce/PluginManager"],function(e,t,n,r,i,o,a,s,l){function c(o){function a(e){return function(){o.execCommand(e)}}function l(e,t){var n,r,i,a;for(i='<table id="__mce"><tbody>',n=0;n<t;n++){for(i+="<tr>",r=0;r<e;r++)i+="<td>"+(s.ie&&s.ie<10?"&nbsp;":"<br>")+"</td>";i+="</tr>"}return i+="</tbody></table>",o.undoManager.transact(function(){o.insertContent(i),a=o.dom.get("__mce"),o.dom.setAttrib(a,"id",null),o.$("tr",a).each(function(e,t){o.fire("newrow",{node:t}),o.$("th,td",t).each(function(e,t){o.fire("newcell",{node:t})})}),o.dom.setAttribs(a,o.settings.table_default_attributes||{}),o.dom.setStyles(a,o.settings.table_default_styles||{})}),a}function c(e,t,n){function r(){var r,i,a,s={},l=0;i=o.dom.select("td[data-mce-selected],th[data-mce-selected]"),r=i[0],r||(r=o.selection.getStart()),n&&i.length>0?(u(i,function(e){return s[e.parentNode.parentNode.nodeName]=1}),u(s,function(e){l+=e}),a=1!==l):a=!o.dom.getParent(r,t),e.disabled(a),o.selection.selectorChanged(t,function(t){e.disabled(!t)})}o.initialized?r():o.on("init",r)}function d(){c(this,"table")}function f(){c(this,"td,th")}function p(){c(this,"td,th",!0)}function m(){var e="";e='<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';for(var t=0;t<10;t++){e+="<tr>";for(var n=0;n<10;n++)e+='<td role="gridcell" tabindex="-1"><a id="mcegrid'+(10*t+n)+'" href="#" data-mce-x="'+n+'" data-mce-y="'+t+'"></a></td>';e+="</tr>"}return e+="</table>",e+='<div class="mce-text-center" role="presentation">1 x 1</div>'}function g(e,t,n){var r,i,a,s,l,c=n.getEl().getElementsByTagName("table")[0],u=n.isRtl()||"tl-tr"==n.parent().rel;for(c.nextSibling.innerHTML=e+1+" x "+(t+1),u&&(e=9-e),i=0;i<10;i++)for(r=0;r<10;r++)s=c.rows[i].childNodes[r].firstChild,l=(u?r>=e:r<=e)&&i<=t,o.dom.toggleClass(s,"mce-active",l),l&&(a=s);return a.parentNode}function h(){o.addButton("tableprops",{title:"Table properties",onclick:k.tableProps,icon:"table"}),o.addButton("tabledelete",{title:"Delete table",onclick:a("mceTableDelete")}),o.addButton("tablecellprops",{title:"Cell properties",onclick:a("mceTableCellProps")}),o.addButton("tablemergecells",{title:"Merge cells",onclick:a("mceTableMergeCells")}),o.addButton("tablesplitcells",{title:"Split cell",onclick:a("mceTableSplitCells")}),o.addButton("tableinsertrowbefore",{title:"Insert row before",onclick:a("mceTableInsertRowBefore")}),o.addButton("tableinsertrowafter",{title:"Insert row after",onclick:a("mceTableInsertRowAfter")}),o.addButton("tabledeleterow",{title:"Delete row",onclick:a("mceTableDeleteRow")}),o.addButton("tablerowprops",{title:"Row properties",onclick:a("mceTableRowProps")}),o.addButton("tablecutrow",{title:"Cut row",onclick:a("mceTableCutRow")}),o.addButton("tablecopyrow",{title:"Copy row",onclick:a("mceTableCopyRow")}),o.addButton("tablepasterowbefore",{title:"Paste row before",onclick:a("mceTablePasteRowBefore")}),o.addButton("tablepasterowafter",{title:"Paste row after",onclick:a("mceTablePasteRowAfter")}),o.addButton("tableinsertcolbefore",{title:"Insert column before",onclick:a("mceTableInsertColBefore")}),o.addButton("tableinsertcolafter",{title:"Insert column after",onclick:a("mceTableInsertColAfter")}),o.addButton("tabledeletecol",{title:"Delete column",onclick:a("mceTableDeleteCol")})}function v(e){var t=o.dom.is(e,"table")&&o.getBody().contains(e);return t}function b(){var e=o.settings.table_toolbar;""!==e&&e!==!1&&(e||(e="tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"),o.addContextToolbar(v,e))}function y(){return C}function x(e){C=e}var C,w,N=this,k=new r(o);!o.settings.object_resizing||o.settings.table_resize_bars===!1||o.settings.object_resizing!==!0&&"table"!==o.settings.object_resizing||(w=i(o)),o.settings.table_grid===!1?o.addMenuItem("inserttable",{text:"Table",icon:"table",context:"table",onclick:k.table}):o.addMenuItem("inserttable",{text:"Table",icon:"table",context:"table",ariaHideMenu:!0,onclick:function(e){e.aria&&(this.parent().hideAll(),e.stopImmediatePropagation(),k.table())},onshow:function(){g(0,0,this.menu.items()[0])},onhide:function(){var e=this.menu.items()[0].getEl().getElementsByTagName("a");o.dom.removeClass(e,"mce-active"),o.dom.addClass(e[0],"mce-active")},menu:[{type:"container",html:m(),onPostRender:function(){this.lastX=this.lastY=0},onmousemove:function(e){var t,n,r=e.target;"A"==r.tagName.toUpperCase()&&(t=parseInt(r.getAttribute("data-mce-x"),10),n=parseInt(r.getAttribute("data-mce-y"),10),(this.isRtl()||"tl-tr"==this.parent().rel)&&(t=9-t),t===this.lastX&&n===this.lastY||(g(t,n,e.control),this.lastX=t,this.lastY=n))},onclick:function(e){var t=this;"A"==e.target.tagName.toUpperCase()&&(e.preventDefault(),e.stopPropagation(),t.parent().cancel(),o.undoManager.transact(function(){l(t.lastX+1,t.lastY+1)}),o.addVisual())}}]}),o.addMenuItem("tableprops",{text:"Table properties",context:"table",onPostRender:d,onclick:k.tableProps}),o.addMenuItem("deletetable",{text:"Delete table",context:"table",onPostRender:d,cmd:"mceTableDelete"}),o.addMenuItem("cell",{separator:"before",text:"Cell",context:"table",menu:[{text:"Cell properties",onclick:a("mceTableCellProps"),onPostRender:f},{text:"Merge cells",onclick:a("mceTableMergeCells"),onPostRender:p},{text:"Split cell",onclick:a("mceTableSplitCells"),onPostRender:f}]}),o.addMenuItem("row",{text:"Row",context:"table",menu:[{text:"Insert row before",onclick:a("mceTableInsertRowBefore"),onPostRender:f},{text:"Insert row after",onclick:a("mceTableInsertRowAfter"),onPostRender:f},{text:"Delete row",onclick:a("mceTableDeleteRow"),onPostRender:f},{text:"Row properties",onclick:a("mceTableRowProps"),onPostRender:f},{text:"-"},{text:"Cut row",onclick:a("mceTableCutRow"),onPostRender:f},{text:"Copy row",onclick:a("mceTableCopyRow"),onPostRender:f},{text:"Paste row before",onclick:a("mceTablePasteRowBefore"),onPostRender:f},{text:"Paste row after",onclick:a("mceTablePasteRowAfter"),onPostRender:f}]}),o.addMenuItem("column",{text:"Column",context:"table",menu:[{text:"Insert column before",onclick:a("mceTableInsertColBefore"),onPostRender:f},{text:"Insert column after",onclick:a("mceTableInsertColAfter"),onPostRender:f},{text:"Delete column",onclick:a("mceTableDeleteCol"),onPostRender:f}]});var S=[];u("inserttable tableprops deletetable | cell row column".split(" "),function(e){"|"==e?S.push({text:"-"}):S.push(o.menuItems[e])}),o.addButton("table",{type:"menubutton",title:"Table",menu:S}),s.isIE||o.on("click",function(e){e=e.target,"TABLE"===e.nodeName&&(o.selection.select(e),o.nodeChanged())}),N.quirks=new t(o),o.on("Init",function(){N.cellSelection=new n(o,function(e){e&&w&&w.clearBars()}),N.resizeBars=w}),o.on("PreInit",function(){o.serializer.addAttributeFilter("data-mce-cell-padding,data-mce-border,data-mce-border-color",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})}),u({mceTableSplitCells:function(e){e.split()},mceTableMergeCells:function(e){var t;t=o.dom.getParent(o.selection.getStart(),"th,td"),o.dom.select("td[data-mce-selected],th[data-mce-selected]").length?e.merge():k.merge(e,t)},mceTableInsertRowBefore:function(e){e.insertRows(!0)},mceTableInsertRowAfter:function(e){e.insertRows()},mceTableInsertColBefore:function(e){e.insertCols(!0)},mceTableInsertColAfter:function(e){e.insertCols()},mceTableDeleteCol:function(e){e.deleteCols()},mceTableDeleteRow:function(e){e.deleteRows()},mceTableCutRow:function(e){C=e.cutRows()},mceTableCopyRow:function(e){C=e.copyRows()},mceTablePasteRowBefore:function(e){e.pasteRows(C,!0)},mceTablePasteRowAfter:function(e){e.pasteRows(C)},mceSplitColsBefore:function(e){e.splitCols(!0)},mceSplitColsAfter:function(e){e.splitCols(!1)},mceTableDelete:function(e){w&&w.clearBars(),e.deleteTable()}},function(t,n){o.addCommand(n,function(){var n=new e(o);n&&(t(n),o.execCommand("mceRepaint"),N.cellSelection.clear())})}),u({mceInsertTable:k.table,mceTableProps:function(){k.table(!0)},mceTableRowProps:k.row,mceTableCellProps:k.cell},function(e,t){o.addCommand(t,function(t,n){e(n)})}),h(),b(),o.settings.table_tab_navigation!==!1&&o.on("keydown",function(t){var n,r,i;9==t.keyCode&&(n=o.dom.getParent(o.selection.getStart(),"th,td"),n&&(t.preventDefault(),r=new e(o),i=t.shiftKey?-1:1,o.undoManager.transact(function(){!r.moveRelIdx(n,i)&&i>0&&(r.insertRow(),r.refresh(),r.moveRelIdx(n,i))})))}),N.insertTable=l,N.setClipboardRows=x,N.getClipboardRows=y}var u=o.each;l.add("table",c)})}(window);
;
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



;
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("echarts")):"function"==typeof define&&define.amd?define(["exports","echarts"],e):e(t.bmap={},t.echarts)}(this,function(t,e){"use strict";function o(t,e){this._bmap=t,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=e,this._projection=new BMap.MercatorProjection}function n(t,o){return o=o||[0,0],e.util.map([0,1],function(e){var n=o[e],i=t[e]/2,a=[],r=[];return a[e]=n-i,r[e]=n+i,a[1-e]=r[1-e]=o[1-e],Math.abs(this.dataToPoint(a)[e]-this.dataToPoint(r)[e])},this)}function i(){function t(t){this._root=t}return t.prototype=new BMap.Overlay,t.prototype.initialize=function(t){return t.getPanes().labelPane.appendChild(this._root),this._root},t.prototype.draw=function(){},t}function a(t,e){return t&&e&&t[0]===e[0]&&t[1]===e[1]}o.prototype.dimensions=["lng","lat"],o.prototype.setZoom=function(t){this._zoom=t},o.prototype.setCenter=function(t){this._center=this._projection.lngLatToPoint(new BMap.Point(t[0],t[1]))},o.prototype.setMapOffset=function(t){this._mapOffset=t},o.prototype.getBMap=function(){return this._bmap},o.prototype.dataToPoint=function(t){var e=new BMap.Point(t[0],t[1]),o=this._bmap.pointToOverlayPixel(e),n=this._mapOffset;return[o.x-n[0],o.y-n[1]]},o.prototype.pointToData=function(t){var e=this._mapOffset;return[(t=this._bmap.overlayPixelToPoint({x:t[0]+e[0],y:t[1]+e[1]})).lng,t.lat]},o.prototype.getViewRect=function(){var t=this._api;return new e.graphic.BoundingRect(0,0,t.getWidth(),t.getHeight())},o.prototype.getRoamTransform=function(){return e.matrix.create()},o.prototype.prepareCustoms=function(t){var o=this.getViewRect();return{coordSys:{type:"bmap",x:o.x,y:o.y,width:o.width,height:o.height},api:{coord:e.util.bind(this.dataToPoint,this),size:e.util.bind(n,this)}}};var r;o.dimensions=o.prototype.dimensions,o.create=function(t,e){var n,a=e.getDom();t.eachComponent("bmap",function(t){var p=e.getZr().painter,s=p.getViewportRoot();if("undefined"==typeof BMap)throw new Error("BMap api is not loaded");if(r=r||i(),n)throw new Error("Only one bmap component can exist");if(!t.__bmap){var m=a.querySelector(".ec-extension-bmap");m&&(s.style.left="0px",s.style.top="0px",a.removeChild(m)),(m=document.createElement("div")).style.cssText="width:100%;height:100%",m.classList.add("ec-extension-bmap"),a.appendChild(m);var c=t.__bmap=new BMap.Map(m),d=new r(s);c.addOverlay(d),p.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}var c=t.__bmap,f=t.get("center"),l=t.get("zoom");if(f&&l){var h=new BMap.Point(f[0],f[1]);c.centerAndZoom(h,l)}(n=new o(c,e)).setMapOffset(t.__mapOffset||[0,0]),n.setZoom(l),n.setCenter(f),t.coordinateSystem=n}),t.eachSeries(function(t){"bmap"===t.get("coordinateSystem")&&(t.coordinateSystem=n)})},e.extendComponentModel({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(t,e){this.option.center=t,this.option.zoom=e},centerOrZoomChanged:function(t,e){var o=this.option;return!(a(t,o.center)&&e===o.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},roam:!1}}),e.extendComponentView({type:"bmap",render:function(t,e,o){function n(){i||o.dispatchAction({type:"bmapRoam"})}var i=!0,a=t.getBMap(),r=o.getZr().painter.getViewportRoot(),p=t.coordinateSystem,s=function(e,n){if(!i){var a=r.parentNode.parentNode.parentNode,s=[-parseInt(a.style.left,10)||0,-parseInt(a.style.top,10)||0];r.style.left=s[0]+"px",r.style.top=s[1]+"px",p.setMapOffset(s),t.__mapOffset=s,o.dispatchAction({type:"bmapRoam"})}};a.removeEventListener("moving",this._oldMoveHandler),a.removeEventListener("zoomend",this._oldZoomEndHandler),a.addEventListener("moving",s),a.addEventListener("zoomend",n),this._oldMoveHandler=s,this._oldZoomEndHandler=n;var m=t.get("roam");m&&"scale"!==m?a.enableDragging():a.disableDragging(),m&&"move"!==m?(a.enableScrollWheelZoom(),a.enableDoubleClickZoom(),a.enablePinchToZoom()):(a.disableScrollWheelZoom(),a.disableDoubleClickZoom(),a.disablePinchToZoom());var c=t.__mapStyle,d=t.get("mapStyle")||{},f=JSON.stringify(d);JSON.stringify(c)!==f&&(Object.keys(d).length&&a.setMapStyle(d),t.__mapStyle=JSON.parse(f)),i=!1}}),e.registerCoordinateSystem("bmap",o),e.registerAction({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},function(t,e){e.eachComponent("bmap",function(t){var e=t.getBMap(),o=e.getCenter();t.setCenterAndZoom([o.lng,o.lat],e.getZoom())})});t.version="1.0.0"});

;/*!
 * Chart.js v2.9.2
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */

;
//# sourceMappingURL=scripts.js.map