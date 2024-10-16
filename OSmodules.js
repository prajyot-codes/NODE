// OS MODULE

const os=require('os')

//info about the current user
const user=os.userInfo()
console.log(user)

//returns the uptime of system in seconds
console.log(`The System Uptime ${os.uptime()}`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)
