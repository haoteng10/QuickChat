import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';

export default function Home() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Join Chat</h1>
                <Box component="form"
                 sx = {{
                    '& .MuiTextField-root': { my: 2, mx:'auto', width: '80ch' }
                 }}
                >
                    <div>
                        <TextField id="name" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div>
                        <TextField id="room" label="Room" variant="outlined" onChange={(event) => setRoom(event.target.value)} />
                    </div>

                    <div>
                        <Link style={{textDecoration: "none"}} onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <Button variant="contained">Join</Button>
                        </Link>
                    </div>
                </Box>
        </div>
    );
}
