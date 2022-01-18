import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { userLogin as userLoginAction } from 'react-admin';

import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
//import { withStyles } from "tss-react/mui";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// const styles = ({ spacing }: Theme) =>
//     createStyles({
//         button: {
//             width: '100%',
//         },
//         icon: {
//             marginRight: spacing.unit,
//         },
//     });

const useStyles = makeStyles((theme: Theme) =>createStyles({
    button: {
        width: '100%',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));

const LoginForm = ({ userLogin }: any) => {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const username = "placeholder";

    useEffect(() => {
        const { searchParams } = new URL(window.location.href);
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        

        // If code is present, we came back from the provider
        if (code && state) {
            setLoading(true);
            //userLogin({ code, state });
            userLogin({username});
        }
    }, [userLogin]);

    const handleLogin = () => {
        setLoading(true);
        userLogin({username}); // Do not provide code, just trigger the redirection
    };

    return (
        <Card 
            raised={true}
            sx={{
                height: '20%',
                width: '20%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 3
            }}
        >
            <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <CardActions>
                <Button
                    className={classes.button}
                    variant="contained"
                    type="submit"
                    color="primary"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading && (
                        <CircularProgress
                            className={classes.icon}
                            size={18}
                            thickness={2}
                        />
                    )}
                    Login With Google
                </Button>
            </CardActions>
        </Card>
    );
}

const mapDispatchToProps = {
    userLogin: userLoginAction,
}

export default connect(undefined, mapDispatchToProps)(
    //withStyles(styles)(LoginForm)
    LoginForm
    );