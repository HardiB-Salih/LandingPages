import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Highlight,
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
import Agency2Box from '../../assets/svgs/Agency2Box';
import { CgMenuRight } from 'react-icons/cg';

const Header = () => {
  console.log(theme);
  const bgColor = useColorModeValue('white', 'gray.800');
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Box
      w={'100%'}
      position="sticky"
      top={0}
      zIndex={100}
      px={9}
      py={4}
      shadow={'md'}
      bg={bgColor}
    >
      <Flex align={'center'}>
        <Heading size={'md'}>
          <Highlight query="Yoga" styles={{ color: 'teal.400' }}>
            Zen Yoga
          </Highlight>
        </Heading>

        <Spacer />
        {isLargerThan800 && (
          <HStack spacing={6}>
            <Text>Service</Text>
            <Text>About</Text>
            <Text>Teams</Text>
            <Text>Contact Us</Text>
            <ColorModeSwitcher />
          </HStack>
        )}

        {!isLargerThan800 && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<CgMenuRight size={23} />}
              variant="outline"
            />
            <MenuList p={2}>
              <MenuItem rounded={'md'}>Service</MenuItem>
              <MenuItem rounded={'md'}>About</MenuItem>
              <MenuItem rounded={'md'}>Teams</MenuItem>
              <MenuItem rounded={'md'}>Contact Us</MenuItem>
              <ColorModeSwitcher w={'100%'} mt={2} />
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
