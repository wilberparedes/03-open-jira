import { ChangeEvent, useState } from 'react'

import { Box, Button, TextField } from '@mui/material'

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [touched, setTouched] = useState<boolean>(false)

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSave = () => {
    if (!inputValue.length) {
      return
    }
    console.log('inputValue', inputValue)
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            error={!inputValue.length && touched}
            helperText={!inputValue.length && touched && 'Ingrese un valor'}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />
          <Box display={'flex'} justifyContent='space-between'>
            <Button variant='text' onClick={() => setIsAdding(false)}>
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant='outlined'
          onClick={() => setIsAdding(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  )
}
