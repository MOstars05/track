import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { fotki } from '../../assets'

const Fotki = () => {
  return (
    <Box className='wrapper' mt={'70px'}>
        <Box display={'flex'} flexDirection={'column'} gap={'30px'} alignItems={'center'}>
            <Text fontSize={{base: '25px', sm:'40px'}} fontWeight={'bold'}>Фоточки</Text>
            <Image src={fotki} width={'full'} />
        </Box>
    </Box>
  )
}

export default Fotki