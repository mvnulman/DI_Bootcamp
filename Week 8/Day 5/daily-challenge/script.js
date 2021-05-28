//-----------------
// Instructions :
//-----------------
// Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

// The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second.


// If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.

var dateDiv = document.getElementById('divDate');

Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
    value: function() {
        function pad2(n) { 
            return (n < 10 ? '0' : '') + n;
        }

        return this.getFullYear() +
               pad2(this.getMonth() + 1) + 
               pad2(this.getDate()) +
               pad2(this.getHours()) +
               pad2(this.getMinutes()) +
               pad2(this.getSeconds());
    }
});

alert(new Date().YYYYMMDDHHMMSS()); 