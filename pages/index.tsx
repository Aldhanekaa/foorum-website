import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581934932994-e4ac37c0c882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'rgba(0,0,0, .5)',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', mt: 25 }}>
            <Image
              src={Logo}
              alt="Picture of the author"
              width={145}
              height={145}
            />
            <Typography
              sx={{
                display: 'inline-block',
                fontSize: '130px',
                fontWeight: 'bold',
                color: '#EDF2F4',
                marginLeft: '10px',
              }}
            >
              oorum
            </Typography>
          </Box>
          <Typography
            sx={{
              display: 'inline-block',
              fontSize: '25px',
              fontWeight: 'medium',
              color: '#EDF2F4',
              marginLeft: '10px',
            }}
          >
            Free Open Source Forum App
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Button
              sx={{ borderRadius: '50px', padding: '10px 50px' }}
              variant="outlined"
            >
              Demo
            </Button>
            <Typography
              sx={{
                display: 'inline-block',
                fontSize: '20px',
                fontWeight: 'regular',
                color: '#EDF2F4',
                marginLeft: '10px',
              }}
            >
              Source Code
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
