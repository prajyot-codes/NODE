// const EventEmitter=require('events')

// const customEmitter= new EventEmitter()

// customEmitter.on('response',() => {
//     console.log(`data recieved `)
// })

// customEmitter.emit('response')

const http=require('http')

const server=http.createServer()

server.on('request' ,(req,res) => {
    res.end('<h3>welcome</h3>');
})
server.listen('5000')