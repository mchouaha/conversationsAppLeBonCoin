import * as React from 'react'
import { FC } from 'react'

import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'


interface ButtonsProps {
  onClick: Function
}

const CustomButton:FC<ButtonsProps> = ({onClick}) => {

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={() => onClick()} variant="contained" endIcon={<SendIcon/>}>
        Send
      </Button>
    </Stack>
  );
}

export default CustomButton 