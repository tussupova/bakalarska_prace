import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Gender from "./Gender";
import NewBDay from "./NewBDay";
import {useForm} from 'react-hook-form';
import Radio from "@material-ui/core/Radio";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import {loginAsync, signUp, signUpAsync} from "../services/UserServices";
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  rootGender: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  test: {
    /*backgroundColor: theme.palette.secondary.main,*/
    backgroundColor: 'white',
    padding: theme.spacing(3)
  },

}));

function StyledRadio(props) {
  const classes = useStyles();
  return (
    <Radio
      className={classes.rootGender}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
      icon={<span className={classes.icon}/>}
      {...props}
    />
  );
}

export default function SignUp() {
  const classes = useStyles();
  const {register, handleSubmit} = useForm();
  // const [passwordError, setPasswordError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError]= useState('');
  const [emailError, setEmailError]= useState('');

  const history = useHistory()

  const signUp = async (data) => {
    if (data.password.length < 5) {
      setPasswordError('Password is too short')
    }
    else if (data.password.length>25){
      setPasswordError('Password is too long')
    }
    else if (data.name.length===0){
      setNameError('Please, fill the name')
    }
    else if (data.email.length===0){
      setEmailError('Please, fill the email')
    }

    else
    {
      try {
        const response = await signUpAsync({
          password: data.password,
          email: data.email,
          name: data.name,
          birthday: data.birthday,
          gender: data.gender
        });
        history.push('/my-routine')
      } catch (err) {
        console.log('my error catch', err)

        //setPasswordError('Invalid credentials')
      }
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={`${classes.paper} ${classes.test}`}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit((data) => signUp(data))}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                helperText={nameError}
                error={Boolean(nameError)}
                autoFocus inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email" inputRef={register}
                helperText={emailError}
                error={Boolean(emailError)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText={passwordError}
                error={Boolean(passwordError)}
                autoComplete="current-password" inputRef={register}
              />
            </Grid>
            <Grid item xs={12} container justify="space-around">
              <FormControl inputRef={register} component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup defaultValue="false" aria-label="gender" name="gender" value={"gender"} inputRef={register}>
                  <div>
                    <FormControlLabel value="female" control={<StyledRadio inputRef={register}/>} label="Female"/>
                    <FormControlLabel value="male" control={<StyledRadio inputRef={register}/>} label="Male"/>
                    <FormControlLabel value="other" control={<StyledRadio nputRef={register}/>} label="Other"/>
                  </div>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <NewBDay/>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}
