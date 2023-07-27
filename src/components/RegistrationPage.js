import React from 'react';
import { Container, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const RegistrationFormPage = () => {
  return (
    <Container>
      <Grid container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh', width:'100vw'}}>
        <Grid item style={{ width: '100%', maxWidth: '640px' }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeYJ1o2_zQTu0PLOO_obA8TQFZD3wQjEAu3IpARmCWYwGPDDw/viewform?embedded=true"
            width="100%" 
            height="800" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0">
            Loading…
          </iframe>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="/" style={{ marginTop: '20px' }}>
            Return to Main Page
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrationFormPage;



