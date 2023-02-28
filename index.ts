import {createTimeOfInterest} from 'astronomy-bundle/time';
import {createSun} from 'astronomy-bundle/sun';
import {createMoon} from 'astronomy-bundle/moon';
import tithijson from "./tithimap.json"


const getTithi= async(year:number=2023,month:number=1,day:number=1,hour:number=1,min:number=0,sec:number=0)=>{
    const toi = createTimeOfInterest.fromTime(year, month, day, hour, min, sec);
    const sun = createSun(toi);
    const moon = createMoon(toi);
    let sunlong= await sun.getGeocentricEclipticSphericalDateCoordinates();
    let sunlon:number = sunlong.lon;
    let moonlong= await moon.getGeocentricEclipticSphericalDateCoordinates();
    let moonlon:number = moonlong.lon;
    let lonDiff = moonlon-sunlon;
    lonDiff<0?lonDiff=360-Math.abs(lonDiff):lonDiff=lonDiff;
    let tithiNumber:number = lonDiff / 12;
    let tithihashkey:any = Math.ceil(tithiNumber);
    let key = `${tithihashkey}`;
    let tithiName:unknown = tithijson[key];
    return tithiName;

}

export {getTithi};
