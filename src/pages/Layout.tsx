import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { UnstyledTabsCustomized as NavigationTabBar } from '../components/common/NavigationTab';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/common/Footer';

export default function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <br />
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <NavigationTabBar/>
          <Outlet/>
          <Footer autor="Eliot Ivan Palacios Hernandez"/>
        </Box>
      </Container>
    </React.Fragment>
  );
}
