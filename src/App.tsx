import React, { useState } from 'react';
import { Button } from '@mui/material';
import './index.css';

interface ButtonProps {
  buttonStyle: string,
  type: string,
  onClick: () => void
}

function App({type, onClick, buttonStyle}: ButtonProps) {
  const [flag, setFlag] = useState(false);
  
  const handleOnSubmitClick = () => {
    setFlag(!flag);
    onClick();
  };

  return (
    <div className={buttonStyle}>
      <Button
        color={flag ? 'warning' : 'primary'}
        variant='contained'
        onClick={handleOnSubmitClick} 
      >
        {type}
      </Button>
    </div>
  );
}

export default App;
