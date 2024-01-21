import {
  Box,
  Center,
  Container,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Box borderTop={'1px'} borderTopColor={'gray.500'}>
      <Container maxW={'6xl'} rounded={'md'} py={12}>
        <Stack
          direction={isLargerThan800 ? 'row' : 'column'}
          justifyContent={'space-between'}
          spacing={12}
        >
          <VStack
            align={isLargerThan800 ? 'start' : 'center'}
            spacing={6}
            maxW={'100%'}
          >
            <HStack>
              <Center w={12} h={12} bg={'gray.900'} rounded={'full'}>
                <Text as={'b'} color={'white'}>
                  V
                </Text>
              </Center>
              <Text as={'b'}>
                Vinama <br />
                Diving
              </Text>
            </HStack>
            <Text
              maxW={'300px'}
              textAlign={isLargerThan800 ? 'start' : 'center'}
            >
              2021 Award winning Diving and Lorem ipsum dolor sit amet
            </Text>
            <HStack spacing={4}>
              <IconButton
                icon={<FaTwitter size={22} />}
                rounded={'full'}
                colorScheme="blue"
                _hover={{
                  transform: 'translateY(-3px) scale(1.1)',
                }}
                transition="transform 0.1s ease-in-out"
              />
              <IconButton
                icon={<FaFacebook size={22} />}
                rounded={'full'}
                colorScheme="blue"
                _hover={{
                  transform: 'translateY(-3px) scale(1.1)',
                }}
                transition="transform 0.1s ease-in-out"
              />
              <IconButton
                icon={<FaInstagram size={22} />}
                rounded={'full'}
                colorScheme="blue"
                _hover={{
                  transform: 'translateY(-3px) scale(1.1)',
                }}
                transition="transform 0.1s ease-in-out"
              />
            </HStack>
          </VStack>
          <HStack spacing={20} justify={!isLargerThan800 && 'space-between'}>
            <VStack align={'start'}>
              <Text as={'b'} mb={2}>
                Location
              </Text>
              <Text>America</Text>
              <Text>Asia</Text>
              <Text>Europe</Text>
              <Text>Africa</Text>
            </VStack>
            <VStack align={'start'}>
              <Text as={'b'} mb={2}>
                Contact
              </Text>
              <Text>About Me</Text>
              <Text>Teams</Text>
              <Text>Profile</Text>
              <Text>FAQ</Text>
            </VStack>
            <VStack align={'start'}>
              <Text as={'b'} mb={2}>
                Legals
              </Text>
              <Text>Privacy</Text>
              <Text>Disclaimer</Text>
              <Text>Terms</Text>
              <Text>Company</Text>
            </VStack>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
