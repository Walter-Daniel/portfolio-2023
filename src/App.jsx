import { Box, Container } from '@mui/material';
import { About, Contact, Hero, Portfolio, Skills } from './page';
import { AppTheme } from './theme/AppTheme';
import { NavbarComponent } from './components/Navbar';
import { Education } from './page/Education';


function App() {
  return (

    <AppTheme>
      <Box sx={{ backgroundColor: '#000000', color: '#ffffff' }}>
          <NavbarComponent />
        <Container className='container-mayor'>
          
          <Hero />
          <About />
          <Education />
          <Skills />
          <Portfolio />
          <Contact />
        </Container>
      </Box>
    </AppTheme>
    
  )
}

export default App
