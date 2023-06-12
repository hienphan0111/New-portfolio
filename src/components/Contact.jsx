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
} from '@chakra-ui/react';
import { BiPhoneCall, BiMailSend } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { BsSend } from 'react-icons/bs';
import * as Yup from 'yup';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'To small')
    .max(50, 'Too long')
    .required('Nam is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {},
  });
  return (
    <Flex w='full'>
      <Flex bg='primary.200' w='90%' p='3em' rounded='2xl'>
        <VStack color='white' alignItems='flex-start' gap={5}>
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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
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
                margin: '0 -9em 0 7em',
                boxShadow: 'rgba(0, 0, 0, 0.24)0px 3px 8px',
                padding: '2em 2em 1em'
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
                    <Textarea {...field} placeholder='Leave your message' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                isLoading={isSubmitting}
                type='submit'
                w="full"
                py="2"
                size="md"
                colorScheme="teal"
                variant="solid"
                rightIcon={<ArrowForwardIcon />}
              >
                Send
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default Contact;
