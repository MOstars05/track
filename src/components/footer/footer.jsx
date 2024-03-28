import { Box, Image, Text } from '@chakra-ui/react'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {logo2 } from '../../assets'

const Footer = () => {
  return (
    <Box bg={'#1A1A1A'} color={'white'}>
        <Box className='wrapper' pt={'70px'} pb={'30px'}pl={'10px'} >
            <Box display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'}>
                <Box pt={'30px'} display={'flex'} justifyContent={'space-between'} gap={'100px'} flexWrap={'wrap'}> 
                    <Box>
                        <Image src={logo2} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                        <Text fontSize={'20px'}>Главная</Text>
                        <Text>Это мы</Text>
                        <Text>Кто мы</Text>
                        <Text>Почему мы?</Text>
                        <Text>Остались вопросы</Text>
                        <Text>Контакты</Text>
                    </Box>
                </Box>
                <Box pt={'30px'} display={'flex'} justifyContent={'space-between'} gap={'100px'} flexWrap={'wrap'}>
                    <Box display={'flex'} flexDirection={'column'} gap={'15px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                            <Text fontSize={'20px'}>Контакты</Text>
                            <Text>+7 (708) 802 88 88</Text>
                            <Text>+7 (708) 803 88 88</Text>
                            <Text>+7 (708) 51 51 518</Text>
                            <Text>+7 (700) 51 51 518</Text>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <FontAwesomeIcon icon={faWhatsapp} fontSize={'20px'} />
                            <Text>+7 (708) 802 88 88</Text>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <FontAwesomeIcon icon={faLocation} fontSize={'20px'} />
                            <Text>г. Бишкек, ул. Ляляля 69</Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'15px'}>
                        <Box>
                            <Text fontSize={'20px'}>Следите за нами</Text>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <FontAwesomeIcon icon={faFacebook} fontSize={'23px'} />
                            <Text>truck_service_ofFicIaL</Text>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <FontAwesomeIcon icon={faInstagram} fontSize={'23px'} />
                            <Text>truck_service_ofFicIaL</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box pt={'50px'}>
                <Box border={'1px'} color={'#474747'}></Box>
                <Box pt={'20px'}>
                    <Text>Copyright © Truck Services 2022. All rights reserved.</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer