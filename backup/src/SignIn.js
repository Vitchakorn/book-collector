// import React, { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// export default function SignIn() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(inputs)

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//       "email": inputs.email,
//       "password": inputs.password,
//       "expiresIn": 60000
//     });

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };

//     fetch("https://www.melivecode.com/api/login", requestOptions)
//       .then(response => response.json())
//       .then(result => {console.log(result)})
//       .catch(error => console.log('error', error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your email:
//       <input 
//         type="text" 
//         name="email" 
//         value={inputs.email} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your password:
//         <input 
//           type="password" 
//           name="password" 
//           value={inputs.password} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   );
// }



// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import swal from 'sweetalert';


// async function loginUser(credentials) {
//   return fetch('http://localhost:5001/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       credentials
//     }),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data); // Log the access token
//     });
// };

// const defaultTheme = createTheme();

// export default function Signin() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const response = await loginUser({
//       email,
//       password
//     });
//     if ('accessToken' in response) {
//       swal("Success", response.message, "success", {
//         buttons: false,
//         timer: 2000,
//       })
//       .then((value) => {
//         localStorage.setItem('accessToken', response['accessToken']);
//         localStorage.setItem('username', JSON.stringify(response['username']));
//         window.location.href = "/";
//       });
//     } else {
//       swal("Failed", response.message, "error");
//     }
//   }

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               onChange={e => setEmail(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={e => setPassword(e.target.value)}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>

//       </Container>
//     </ThemeProvider>
//   );
// }


// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(email)
//     console.log(password)
//     axios.post('http://localhost:5001/api/users/login', {email, password})
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.error(error);
//       });
      
//       // if (response.ok) {
//       //   const data = await response.json();
//       //   console.log(data.accessToken);
//       // } else {
//       //   throw new Error('Login failed');
//       // }

//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginUrl } from './components/api/api';

const defaultTheme = createTheme();

async function loginUser(credentials) {
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
 }

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    if ('accessToken' in response) {
      
      localStorage.setItem('accessToken', response['accessToken']);
      console.log(JSON.stringify(response['user']))
      localStorage.setItem('user', JSON.stringify(response['user']));
      window.location.href = "/home";
      }
  }


  return (
    <div className="signin-container">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                autoFocus
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
  );
}



//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };