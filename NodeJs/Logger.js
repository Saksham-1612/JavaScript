var url="http://mylogger.io/log";
function log(message) {
    // send http request
    console.log(message);
}
// exporting methods and variables to use in other modules
module.exports.log=log;
module.exports.endPoint=url;