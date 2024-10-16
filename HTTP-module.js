const http=require('http')

const server=http.createServer((req,res) => {
// console.log(req)
if(req.url==='/')
{
    res.write('Welcome to our homepage')
    res.end()
}
if(req.url==='/about')
{
    res.end('myself prajyot')
}
res.end(`<h1>ERROR 404</h1>
    `)
})
server.listen(5000)