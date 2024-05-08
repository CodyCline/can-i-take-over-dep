require("dotenv").config()
function log() {
    //Here you would inject data
    console.log("Reading the current node process environment")
    console.log(process.env)
}
log()