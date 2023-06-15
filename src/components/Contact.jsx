import { Field, Form, Formik, ErrorMessage, useFormik } from 'formik';

import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  Spacer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { BiPhoneCall, BiMailSend } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { BsSend } from 'react-icons/bs';
import * as Yup from 'yup';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useState } from 'react';
import '@/styles/form.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'To small')
    .max(50, 'Too long')
    .required('Nam is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [msg, setMsg] = useState('');

  const handleOnSubmit = async (values, actions) => {
    values.access_key = 'c69bb7a3-e228-49dd-9b47-8bc74eb88d2a';

    const data = { ...values };
    console.log(data);
    const res = axios.post('https://api.web3forms.com/submit', values);
    console.log(res);
    res
      .then(() => {
        setMsg(
          'Thank you for reach out me! Your infomation has sent successfully, I will response as soon as posible'
        );
        onOpen();
        actions.resetForm();
      })
      .catch((err) => {
        setMsg('Oh! Something went wrong, could you try again');
        onOpen();
      });
  };

  return (
    <Flex w='full' justifyContent='center'>
      <Flex
        bg='primary.200'
        w={{ base: '95%', md: '90%' }}
        p={{ base: '1em', md: '3em' }}
        rounded='2xl'
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <VStack color='white' alignItems='flex-start' gap={5} mb={'5'}>
          <Heading as='h4' fontSize='24px' mb={3}>
            Let's get in touch
          </Heading>
          <Flex gap='3' alignItems='center'>
            <Box
              color='primary.200'
              w='40px'
              h='40px'
              rounded='full'
              bg='white'
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <BiPhoneCall style={{ fontSize: '34px' }} />
            </Box>
            <Flex direction='column' alignItems='flex-start' gap='2'>
              <Text fontWeight='bold' fontSize='1xl'>
                Phone
              </Text>
              <Text>+84 938 102461</Text>
            </Flex>
          </Flex>
          <Divider />
          <Flex gap='3' alignItems='center'>
            <Box
              color='primary.200'
              w='40px'
              h='40px'
              rounded='full'
              bg='white'
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <BiMailSend style={{ fontSize: '34px' }} />
            </Box>
            <Flex direction='column' alignItems='flex-start' gap='2'>
              <Text fontWeight='bold' fontSize='1xl'>
                Address
              </Text>
              <Text>hienphan@digitalcad.edu.vn</Text>
            </Flex>
          </Flex>
          <Divider />
          <Flex gap='3' alignItems='center'>
            <Box
              color='primary.200'
              w='40px'
              h='40px'
              rounded='full'
              bg='white'
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <CiLocationOn style={{ fontSize: '34px' }} />
            </Box>
            <Flex direction='column' alignItems='flex-start' gap='2'>
              <Text fontWeight='bold' fontSize='1xl'>
                Address
              </Text>
              <Text>14 Phuoc Ly 18, Da Nang, Viet Nam</Text>
            </Flex>
          </Flex>
        </VStack>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={contactSchema}
          onSubmit={handleOnSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Box w="100%" m={{ base: '1em 0 0 0', md: '0 -9em 0 7em' }}>
              <Form
                style={{
                  color: 'white',
                  width: '100%',
                  backgroundColor: 'white',
                  borderRadius: '1em',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '1em',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  padding: '2em 2em 1em',
                }}
              >
                <Field name='name'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input {...field} placeholder='Your Name' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email' type='email'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input {...field} placeholder='Your Email' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field as='textarea' name='message'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Textarea
                        {...field}
                        placeholder='Leave your message'
                        color='blackAlpha.700'
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  type='submit'
                  w='full'
                  py='2'
                  color='blackAlpha.700'
                  border='1px'
                  rightIcon={<ArrowForwardIcon />}
                  _hover={{ bg: 'primary.200', color: 'white' }}
                >
                  Send
                </Button>
                <Modal
                  isCentered
                  onClose={onClose}
                  isOpen={isOpen}
                  motionPreset='slideInBottom'
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Contact alert!</ModalHeader>
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody mt='3'>
                      <Text>{msg}</Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant='outline' mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Form>
            </Box>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default Contact;
