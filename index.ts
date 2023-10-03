import figlet from 'figlet'

const server = Bun.serve({
    port: 3000,
    fetch(req){
        const body = figlet.textSync("video")
        return new Response(body)
    }
})

console.log(`Listening on PORT http://localhost:${server.port}`)