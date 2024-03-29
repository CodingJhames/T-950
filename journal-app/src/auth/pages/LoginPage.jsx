
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';

  const formData = {
    email: 'james@google.com',
    password: '123456'
  }


export const LoginPage = () => {

  const { status, errorMessage  } = useSelector( state => state.auth  );

  const dispatch  = useDispatch();

  const {email, password, onInputChange  } = useForm(formData);

  const isAuthenticated = useMemo( () => status === 'checking', [ status ]  );



  const onSubmit = ( event ) => {
    event.preventDefault();
    // console.log( { email, password }  );
    // dispatch( chekingAuthentication( email, password ) );
    dispatch( startLoginWithEmailPassword( { email, password } )  );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    // dispatch( chekingAuthentication( email, password  )  );
    dispatch( startGoogleSignIn() );

  }



  return (
    
    // <Grid 
    // container
    // spacing={0}
    // direction='column'
    // alignItems='center'
    // justifyContent='center'
    // sx={{ minHeight: '100vh', backgroundColor:'primary.main', padding: 4 }}
    // >

    // <Grid item
    //   className='box-shadow'
    //   xs={ 3 }
    //   sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

    //     <Typography variant='h5' sx={{ mb: 1 }} >Login</Typography>

  <AuthLayout title='Login'>

<form onSubmit={ onSubmit } >

<Grid container>

  <Grid item xs={12} sx={{ mt: 2 }} >
    
    <TextField 
    label='Correo' 
    type='email' 
    placeholder='correo@google.com'
    fullWidth
    name={'email'}
    value={email}
    onChange={ onInputChange }
    />

  </Grid>

  <Grid item xs={12} sx={{ mt: 2, mt: 1 }}>
    
    <TextField 
    label='Contraseña' 
    type='password' 
    placeholder='Contraseña'
    fullWidth
    name={'password'}
    value={ password }
    onChange={ onInputChange }
    />

  </Grid>

  <Grid 
  container
  display={ !!errorMessage ? '' : 'none'}
  sx={{ mt:1}  }>
    <Grid
    item
    xs={12}
    >
      <Alert severity='error'>{errorMessage}</Alert>
    </Grid>
  </Grid>

  <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} >
    <Grid item xs={12} sm={6}>

      <Button 
      disabled={ isAuthenticated }
      type='submit' 
      variant='contained' 
      fullWidth 
      >Login</Button>

    </Grid>

    <Grid item xs={12} sm={6}>

      <Button
      disabled={ isAuthenticated } 
      variant='contained' 
      fullWidth 
      onClick={onGoogleSignIn}>   
      
        <Google/> 
        <Typography sx={{ ml: 1}} > Google </Typography>

      </Button>

    </Grid>

  </Grid>

  <Grid container direction='row' justifyContent='end'>
      
      <Link component={ RouterLink }  color='inherit' to='/auth/register' >
        Crear una cuenta
      </Link>
      
      
  </Grid>

</Grid>



</form>

        
      </AuthLayout>

        
  )
}
