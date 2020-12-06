import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const Congrats = () => {
  //should add something here to reset the state of the newUser state
  return (
    <Paper>
      <Typography>
      Congratulations! You are now a Pantry Pal user! 
      </Typography>
       <Link to={{
         pathname:'/'
       }}>Log in Here</Link>
    </Paper>
  )
}

export default Congrats