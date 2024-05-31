/* eslint-disable no-unused-vars */

// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const defaultTheme = createTheme();

export default function NewPassword() {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        // Prepare login data
        const loginData = {
            email,
            password,
        };
        console.log(loginData)

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <Typography component="h1" variant="h5">
                    Reset your password
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="New Password"
                            name="newPassword"
                            // autoComplete="email"
                            autoFocus
                            sx={{
                                '& input': {

                                },
                                '& .MuiInputLabel-root': {
                                    color: '#757575',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'black',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {

                                    border: "1px solid #757575"
                                },
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="retypePassword"
                            label="Retype Password"
                            type="password"
                            id="retypePassword"
                            // autoComplete="current-password"
                            sx={{
                                '& input': {

                                },
                                '& .MuiInputLabel-root': {
                                    color: '#757575',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'black',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {

                                    border: "1px solid #757575"
                                },
                            }}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                '&:hover': {
                                    backgroundColor: "black",
                                },
                                backgroundColor: "black",
                            }}
                        >
                           Submit
                        </Button>

                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}