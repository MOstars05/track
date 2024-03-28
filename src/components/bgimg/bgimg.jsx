import { Box, Image, Text, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { bgImg2 } from '../../assets'

const Bgimg = () => {
  return (
    <Box mt={'70px'}>
        {/* <Box className='bgImg'>
            <Box bg={'white'} display={'flex'} flexDirection={'column'} gap={'10px'} >
              <Text fontWeight={'bold'} fontSize={'30px'}>Остались <br /> вопросы?</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nunc odio in et, lectus sit lorem id integer.</Text>
              <Input placeholder={'Имя'} variant={'filled'} color={'#979797'} width={'350px'} />
              <Input placeholder={'Номер телефона'} variant={'filled'} color={'#979797'} width={'350px'} />
              <Box>
                <Button bgColor={'#4762FF'} color={'white'}>Отправить</Button>
              </Box>
            </Box>
        </Box> */}
        <Box>
          <Image src={bgImg2} />
        </Box>
    </Box>
  )
}

export default Bgimg