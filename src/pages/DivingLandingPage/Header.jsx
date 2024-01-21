import React from 'react';
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  theme,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../components/header/ColorModeSwitcher';
import { FaHamburger } from 'react-icons/fa';

const Header = () => {
  console.log(theme);
  const bgColor = useColorModeValue('white', 'gray.800');
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Box
      w={'100%'}
      position="sticky"
      top={0}
      zIndex={1}
      px={9}
      py={4}
      shadow={'md'}
      bg={bgColor}
    >
      <Flex>
        <HStack>
          <Center w={9} h={9} bg={'blue.400'} rounded={'full'}>
            <Text as={'b'} color={'white'}>
              V
            </Text>
          </Center>
          <Text as={'b'}>Vinama Diving</Text>
        </HStack>

        <Spacer />
        {isLargerThan800 && (
          <HStack spacing={6}>
            <Text>Location</Text>
            <Text>Blogs</Text>
            <Text>Testimonials</Text>
            <Text>Contact </Text>
            <ColorModeSwitcher />
          </HStack>
        )}

        {!isLargerThan800 && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaHamburger />}
              variant="outline"
            />
            <MenuList p={2}>
              <MenuItem rounded={'md'}>New Window</MenuItem>
              <MenuItem rounded={'md'}>New Window</MenuItem>
              <MenuItem rounded={'md'}>New Window</MenuItem>
              <ColorModeSwitcher mt={2} />
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
