import React from 'react';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoMdMail } from 'react-icons/io';

const Subscribe = () => {
  return (
    <Container maxW={'3xl'}>
      <VStack
        p={6}
        align={'center'}
        textAlign={'center'}
        spacing={4}
        bg={'blue.400'}
        rounded={'md'}
      >
        <Heading textAlign={'center'} mb={6}>
          Subscribe to Our Newsletter
          <br />
          For Weekly Article Update.
        </Heading>
        <Text>
          We have diving-related blog so we can share our thought and rutinity
          in our blog that updated weekly. We will not spam you, we promise.
        </Text>
        <HStack>
          <InputGroup size="md">
            <InputLeftElement>
              <IoMdMail size={30} />
            </InputLeftElement>
            <Input
              pr="4.5rem"
              type={'email'}
              placeholder="Enter your e-mail address"
            />
          </InputGroup>
          <Button variant="solid" colorScheme="gray">
            Subscribe
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Subscribe;
