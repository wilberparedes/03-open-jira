import { ChangeEvent, useContext, useState } from 'react'

import { Box, Button, TextField } from '@mui/material'

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import { EntriesContext, UIContext } from '@/context'

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext)
  const { isAddingEntry, toogleAddingEntry } = useContext(UIContext)

  const [inputValue, setInputValue] = useState<string>('')
  const [touched, setTouched] = useState<boolean>(false)

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSave = () => {
    if (!inputValue.length) {
      return
    }

    addNewEntry(inputValue)
    setTouched(false)
    setInputValue('')
    toogleAddingEntry()
  }

  const onCancel = () => {
    toogleAddingEntry()
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            error={isAddingEntry && !inputValue.length && touched}
            helperText={!inputValue.length && touched && 'Ingrese un valor'}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />
          <Box display={'flex'} justifyContent='space-between'>
            <Button variant='text' onClick={onCancel}>
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
          onClick={toogleAddingEntry}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  )
}
