import React, { useState } from 'react';
import logo from './Image/history2.jpg';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ReplyIcon from "@mui/icons-material/Reply";
import { Button } from '@mui/material';
import MughalEmpire from './MughalEmpire';
import MughalEmpire_MCQ from './MughalEmpire_MCQ';
import { Link } from 'react-router-dom';
import FamilyTreeME from './FamilyTreeME';
import HeaderPanel from '../HeaderPanel/HeaderPanel';
import Translate from './Translate';
const SecondPage=()=> {
  const [showMughalEmpire, setShowMughalEmpire]= useState(true);
  const [showMcq, setShowMcq]= useState(true);

  const handleTestYourSelf=()=>{
    setShowMughalEmpire(false);
    setShowMcq(true);
  }
  const backToSecondPage=()=>{
    setShowMughalEmpire(true);
  }
  const handleGame=()=>{
     setShowMughalEmpire(false);
     setShowMcq(false);
  }
  return (
    <div className='secondpage' style={{backgroundColor:'black'}}>
      <HeaderPanel/>
      <div className="history-bg-image" style={{ position: 'relative', overflow: 'hidden' }}>
            <img src = {logo} style={{height:'88.8vh',width:'100vw', filter:'blur(2px)'}} alt='history2'/>
            <div style={{ position: 'absolute', top: '3px', left: '15vw', height: '100%', width: '100%'}}>
            <React.Fragment>
            <CssBaseline />
              <Box sx={{ bgcolor: 'white', height: '100vh', width: '70%', opacity: 0.8, overflow:'auto'}}>
                
              { showMughalEmpire ?
              <div>
                <Button variant="text" color="secondary" startIcon={<ReplyIcon/>}>
                  <Link to='/history'>
                    Back to Section
                  </Link>
                </Button>
                <MughalEmpire/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',margin: '8vw auto' }}>
  <Button variant="contained" color="primary"  onClick={handleTestYourSelf}>Test Yourself</Button>
  <Button variant="contained" color="primary" style={{marginLeft:"20px"}} onClick={handleGame}>Have some fun!</Button>
</div>


              </div>
              :
               (showMcq?
                  <div>
                    <Button onClick={backToSecondPage} variant="text" color="secondary" startIcon={<ReplyIcon/>}>
                      Back to Section
                    </Button>
                  <MughalEmpire_MCQ/>
                  </div>
                :
                <div>
                  <Button onClick={backToSecondPage} variant="text" color="secondary" startIcon={<ReplyIcon/>}>
                      Back to Section
                    </Button>
                    <Translate/>
                </div>
               )
              }
              
            </Box>
          </React.Fragment>
        </div>
        </div>
    </div>
  )
}

export default SecondPage