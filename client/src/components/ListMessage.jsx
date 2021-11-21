import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';

export default function ListMessage({ message }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <SmsIcon />
                </Avatar>
            </ListItemAvatar>

            <ListItemText primary={message["user"]} secondary={message["text"]} />
        </ListItem>
    );
}
