import express from "express"
import http from "http";
import cors from "cors"
import { Server } from "socket.io";

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

let users = [],
    currentColor = '#000000',
    messages = {}

io.on('connection', socket => {
    console.log('bir kullanıcı bağlandı', socket.id)
    io.emit('color_changed', currentColor)

    socket.on('login', (user, cb) => {
        users.push({
            socket_id: socket.id,
            ...user
        })
        cb(socket.id)
        io.emit('userList', users)
    })

    socket.on('join_channel', channel => {
        socket.join(channel)
        users = users.map(user => {
            if (user.socket_id === socket.id) {
                user.channels = [...socket.rooms].slice(1)
            }
            return user
        })
        socket.emit('channels', [...socket.rooms].slice(1))
        io.emit('userList', users)
    })

    socket.on('leave_channel', channel => {
        socket.leave(channel)
        users = users.map(user => {
            if (user.socket_id === socket.id) {
                user.channels = [...socket.rooms].slice(1)
            }
            return user
        })
        socket.emit('channels', [...socket.rooms].slice(1))
        io.emit('userList', users)
    })

    socket.on('message', message => {
        console.log(message)
    })

    socket.on('disconnect', () => {
        users = users.filter(user => user.socket_id !== socket.id)
        io.emit('userList', users)
    })
})

server.listen(3005, () => {
    console.log('server 3005 portundan dinleniyor')
})

