import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from "react-hook-form";
import {loginAsync} from "../services/UserServices";
import {useHistory} from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const {register, handleSubmit} = useForm();
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState('password');
  const history = useHistory()


  const login = async (data) => {
    try {
      const response = await loginAsync({password: data.password, email: data.email});
      localStorage.setItem('authToken', response.data.token);
      history.push('/my-routine')

    } catch (err) {
      console.log('my error catch', err)
      setPasswordError('Invalid credentials')
    }
  }
  const changePasswordVisibility = () => {
    if (passwordVisibility === 'password') {
      setPasswordVisibility('text')
    } else {
      setPasswordVisibility('password')
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit((data) => login(data))}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus inputRef={register}
            helperText={passwordError}
            error={Boolean(passwordError)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={passwordVisibility}
            id="password"
            autoComplete="current-password" inputRef={register}
            helperText={passwordError}
            error={Boolean(passwordError)}
            InputProps={{
              endAdornment: <InputAdornment position="end"><VisibilityOffIcon
                onClick={changePasswordVisibility}/></InputAdornment>
            }}
          >
          </TextField>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright/>
      </Box>
    </Container>
  );
}
