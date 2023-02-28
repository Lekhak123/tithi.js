"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTithi = void 0;
var time_1 = require("astronomy-bundle/time");
var sun_1 = require("astronomy-bundle/sun");
var moon_1 = require("astronomy-bundle/moon");
var tithimap_json_1 = __importDefault(require("./tithimap.json"));
var getTithi = function (year, month, day, hour, min, sec) {
    if (year === void 0) { year = 2023; }
    if (month === void 0) { month = 1; }
    if (day === void 0) { day = 1; }
    if (hour === void 0) { hour = 1; }
    if (min === void 0) { min = 0; }
    if (sec === void 0) { sec = 0; }
    return __awaiter(void 0, void 0, void 0, function () {
        var toi, sun, moon, sunlong, sunlon, moonlong, moonlon, lonDiff, tithiNumber, tithihashkey, key, tithiName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    toi = time_1.createTimeOfInterest.fromTime(year, month, day, hour, min, sec);
                    sun = (0, sun_1.createSun)(toi);
                    moon = (0, moon_1.createMoon)(toi);
                    return [4 /*yield*/, sun.getGeocentricEclipticSphericalDateCoordinates()];
                case 1:
                    sunlong = _a.sent();
                    sunlon = sunlong.lon;
                    return [4 /*yield*/, moon.getGeocentricEclipticSphericalDateCoordinates()];
                case 2:
                    moonlong = _a.sent();
                    moonlon = moonlong.lon;
                    lonDiff = moonlon - sunlon;
                    lonDiff < 0 ? lonDiff = 360 - Math.abs(lonDiff) : lonDiff = lonDiff;
                    tithiNumber = lonDiff / 12;
                    tithihashkey = Math.ceil(tithiNumber);
                    key = "".concat(tithihashkey);
                    tithiName = tithimap_json_1.default[key];
                    return [2 /*return*/, tithiName];
            }
        });
    });
};
exports.getTithi = getTithi;
