import { io } from 'socket.io-client';

const URL = 'http://3.111.218.103:8080';

export const socket = io(URL, {
    autoConnect: false,
    query: {
        _id: localStorage.getItem('_id'),
        name: localStorage.getItem('name'),
        role: localStorage.getItem('role'),
    }
});
