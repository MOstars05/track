import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { logo } from '../../assets'

const Navbar = () => {
  return (
    <Box className='wrapper'>
        <Box mt={'20px'} display={'flex'}  justifyContent={'space-between'} alignItems={'center'} >
            <Box>
                <Image src={logo} />
            </Box>
            <Box display={{base: 'none' , lg:'flex'}} gap={'50px'}>
                <Text>Это мы</Text>
                <Text>Почему мы?</Text>
                <Text>А вот поэтому</Text>
                <Text>Контакты</Text>
            </Box>
            <Box>
                <Button bgColor={'#4762FF'} color={'white'}>Заказать звонок</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar