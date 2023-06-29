import React from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
function PageNotfound() {
  return (
    <div>

            <h1>     
    <Typography variant="h1" gutterBottom sx={{color:'red'}}>
       404
      </Typography>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link href='/'>Login</Link>
     
    </div>
  )
}

export default PageNotfound