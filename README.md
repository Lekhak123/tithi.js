# tithi.js

* Note: The time should be in UTC

 ```js

import {getTithi} from "tithi.js"

async function tithi() {
    let year = 2021
    let month = 1
    let hour = 1
    let min = 1
    let sec = 0
    let result = await getTithi(year,month,hour,min,sec)
    console.log(result)
}


tithi()
// Shukla Dvitiya
 
 
 ```
