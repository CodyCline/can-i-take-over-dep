require("dotenv").config()
function log() {
    //An actual malicious package would bootstrap malware here
    //For proof of concepts you just need to 'phone home' with the process env
    console.log("Reading the current node process environment")
    console.log(process.env)
}
log()