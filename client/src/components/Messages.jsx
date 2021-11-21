import React from 'react';
import { List } from '@mui/material';
import ListMessage from './ListMessage';

export default function Messages({ messages }) {
  return (
    <List sx={{ 
        width: '100%', 
        maxWidth: 700, 
        mx: 'auto', 
        bgcolor: 'background.paper',
        maxHeight: 1000,
        overflow: 'auto'
    }}>
        { messages.map((message) => <ListMessage message={message} key={messages.indexOf(message)}/>)}
    </List>
  );
}
