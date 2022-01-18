import React, {useState} from 'react';
import { Login, useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import LoginForm from './loginForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Container} from '@mui/material';

// const LoginPage = (props:any) => {
//     return <Login {...props} loginForm={<LoginForm/>}
//                 backgroundImage="https://source.unsplash.com/random/1600x900/?crypto" 
//                 />
// };

const LoginPage = ({ theme }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <ThemeProvider theme={createTheme(defaultTheme)}>
            <Box 
                sx={{
                    'padding-top': '3em',
                    'width': '100vw', 'height': '100vh', 
                    'backgroundImage': `url(https://source.unsplash.com/random/1600x900/?crypto)`, 
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',
                    'background-position': '50% 50%',

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}>
                <LoginForm/>
                <Notification />
            </Box>
        </ThemeProvider>
    );
};

export default LoginPage;