import { Box, Button, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { service } from '../../assets'

const Service = () => {
  return (
    <Box className='wrapper' mt={'70px'} ml={'10px'} >
        <Box  display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Text color={'#333333'} fontSize={{base: '30px', sm: '50px'}} fontWeight={'bold'}>Affordable truck <br /> service</Text>
                <Text color={'#333333'} fontSize={{base: '14px', sm: '18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nunc odio in et, lectus sit lorem id integer.</Text>
                <Box>
                    <Button bgColor={'#4762FF'} color={'white'}>Чета сделать</Button>
                </Box>
            </Box>
            <Box>
                <Image src={service} />
            </Box>
        </Box>
    </Box>
  )
}

export default Service