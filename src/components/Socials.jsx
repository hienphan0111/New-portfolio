import { HStack, Box, Link } from '@chakra-ui/react';
import {
  FaFacebook,
  FaLinkedin,
  FaSquareWhatsapp,
  FaSlack,
  FaWhatsapp,
  FaDiscord,
} from 'react-icons/fa';
import { AiOutlineMail, AiOutlineCopyrightCircle } from 'react-icons/ai';

const Socials = () => {
  return (
    <HStack gap='4'>
      <Box
        w='44px'
        h='44px'
        rounded='full'
        border='1px'
        color='primary.200'
        borderColor='primary.200'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Link href='https://www.facebook.com/hien.phanngoc.1?mibextid=LQQJ4d'>
          <FaFacebook style={{ fontSize: '34px', padding: '2px' }} />
        </Link>
      </Box>
      <Box
        w='44px'
        h='44px'
        rounded='full'
        border='1px'
        color='primary.200'
        borderColor='primary.200'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Link href='https://www.linkedin.com/in/mr-hienphan/'>
          <FaLinkedin style={{ fontSize: '34px', padding: '2px' }} />
        </Link>
      </Box>
      <Box
        w='44px'
        h='44px'
        rounded='full'
        border='1px'
        color='primary.200'
        borderColor='primary.200'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Link href='hienphan@digitalcad.edu.vn'>
          <AiOutlineMail style={{ fontSize: '34px', padding: '2px' }} />
        </Link>
      </Box>
      <Box
        w='44px'
        h='44px'
        rounded='full'
        border='1px'
        color='primary.200'
        borderColor='primary.200'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Link href='https://wa.me/84938102461'>
          <FaWhatsapp style={{ fontSize: '34px', padding: '2px' }} />
        </Link>
      </Box>
      <Box
        w='44px'
        h='44px'
        rounded='full'
        border='1px'
        color='primary.200'
        borderColor='primary.200'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Link href='https://join.slack.com/t/slack-i292902/shared_invite/zt-1xbz460n7-Hw~0oPMI9gfhz~juo3f6zw'>
          <FaSlack style={{ fontSize: '34px', padding: '2px' }} />
        </Link>
      </Box>
      <Box
        w='44px'
        h='44px'
        rounded='full'
        border='1px'
        color='primary.200'
        borderColor='primary.200'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Link href='https://discord.com/channels/423464391791476747/434851518890508288'>
          <FaDiscord style={{ fontSize: '34px', padding: '2px' }} />
        </Link>
      </Box>
    </HStack>
  )
}

export default Socials
