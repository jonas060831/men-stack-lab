

const dateFormatter = (date, withTime) => {

    if(withTime) return date.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' })
    //return a string version of the local date MMM DD, YYYY
    return date.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric' })
}

const randomNumberGenerator = (min, max) => {
    //i want to get a random number including min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
    dateFormatter,
    randomNumberGenerator
}