// TO DO: simplify
// TO DO: cover by tests
export function applyTimezone(date: Date) {
    return function (timezone: number) {
       // create Date object for current location
        var d = date;

        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (3600000 * timezone));

        // return time as a string
        return nd;
    }
}