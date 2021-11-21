import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Box, TextField } from '@mui/material';
import Messages from './Messages';

let socket;

export default function Chat() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search);
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
            
        });

        return () => {
            socket.off();
        }
    }, [ENDPOINT, window.location.search]);

    useEffect(() => {
     socket.on('message', (message) => {
        setMessages([...messages, message])
     });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (inputMessage) {
            socket.emit('sendMessage', inputMessage, () => setInputMessage(''));
        }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <Messages messages={messages} />

            <Box
            >
                <TextField 
                    variant="filled"
                    value={inputMessage}
                    onChange={(event) => setInputMessage(event.target.value)}
                    onKeyPress={event => event.key==='Enter' ? sendMessage(event) : null} 
                />
            </Box>
        </div>
    );
}
