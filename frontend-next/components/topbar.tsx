import React from 'react'
import { Box, InputBase, IconButton } from '@mui/material'
import Router from 'next/router'
import DownloadingIcon from '@mui/icons-material/Downloading'
import { textAlign } from '@mui/system'


const Topbar = () => {

  const [idInput, setIdInput] = React.useState<number>(0)

  return (
    <Box sx={{
      height: '4rem',
      backgroundColor: '#7aae5d',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <Box
        onClick={() => {
          Router.replace('/')
        }}
        sx={{
          cursor: 'pointer',
          display: 'flex',
          height: '100%',
          width: '10rem',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 15px',
        }}>
        <Box sx={{
          color: 'white'
        }}>
          PDF PADDER
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 15px',
        color: 'white',
      }}>
        <Box sx={{
          padding: '0 5px',
          textAlign: 'right',
        }}>
          Type ID to Download: 
        </Box>
        <Box sx={{
          padding: '0 5px',
          position: 'relative',
        }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            width: 'calc(100% - 10px)',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '4px',
            '& > div': {
              height: '1.3375em',
            }
          }}>
            <Box sx={{ flex: 1, color: 'black', textAlign: 'center' }}>{String(idInput).slice(0, 3) == '0' ? '' : String(idInput).slice(0, 3)}</Box>
            <Box sx={{padding: '0 4px', color: 'rgb(100, 100, 100)'}}>-</Box>
            <Box sx={{ flex: 1, color: 'black', textAlign: 'center' }}>{String(idInput).slice(3, 6)}</Box>
            <Box sx={{padding: '0 4px', color: 'rgb(100, 100, 100)'}}>-</Box>
            <Box sx={{ flex: 1, color: 'black', textAlign: 'center' }}>{String(idInput).slice(6, 9)}</Box>
          </Box>
          <InputBase
            value={idInput == 0 ? '' : String(idInput)}
            onChange={v => {
              if (v.target.value.length < 10) {
                setIdInput(parseInt(v.target.value == '' ? '0' : v.target.value))
              }
            }}
            sx={{
              backgroundColor: 'white',
              //borderRadius: '4px',
              //color: 'black',
              opacity: '0',
              textAlign: 'center',
            }}
          />
        </Box>
        <IconButton sx={{color: 'white'}} aria-label="upload picture" component="label" onClick={
          () => {
            if (idInput >= 100000000 && idInput < 1000000000) {
              Router.push(`/download/${idInput}`)
            }
          }
        }>
          <DownloadingIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar