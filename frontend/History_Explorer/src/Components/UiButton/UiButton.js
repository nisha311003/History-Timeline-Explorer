import React from 'react'
import Button from '@mui/material/Button';
const UiButton=({borderColor, hoverColor, ...props })=> {
  return (
    <Button variant="contained"
      sx={{
        backgroundColor:"orangered",
        fontWeight:'bolder',
        color:'black',
        position: 'relative',
        border: `2px solid ${borderColor}`,
        '&:hover': {
            backgroundColor: hoverColor, // Using hoverColor prop for hover background color
            border: `2px solid ${borderColor}`,
        },
    }}{...props}
    >
    </Button>
  )
}

export default UiButton
