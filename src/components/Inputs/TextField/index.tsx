import * as React from 'react'
import { ChangeEvent, FC, useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type TextFieldProps = {
  onChange: Function
  value?: string
}

const CustomTextField: FC<TextFieldProps> = ({onChange, value}) => {

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <Box sx={{ width: '79%'}}>
      <TextField value={value} fullWidth id="fullWidth" onChange={handleOnChange} placeholder={'type a message...'}/>
    </Box>
  )
}

export default CustomTextField