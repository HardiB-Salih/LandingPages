import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { FaMoon, FaSun, FaRegSun } from 'react-icons/fa';
import useColorModeSwitcherRedux from '../../hooks/useColorModeSwitcherRedux';

export const ColorModeSwitcher = props => {
  // const { mode, setModeAndColor } = useColorModeSwitcher();
  const { mode, setModeAndColor } = useColorModeSwitcherRedux();

  let SwitchIcon;
  let text;
  switch (mode) {
    case 'light':
      SwitchIcon = FaSun;
      text = 'Light';
      break;
    case 'dark':
      SwitchIcon = FaMoon;
      text = 'Dark';

      break;
    default:
      SwitchIcon = FaRegSun;
      text = 'System';
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Options"
        rightIcon={<SwitchIcon />}
        variant="outline"
        {...props}
      >
        {text}
      </MenuButton>
      <MenuList p={2}>
        <MenuItem rounded={'md'} onClick={() => setModeAndColor('light')}>
          Light
        </MenuItem>
        <MenuItem rounded={'md'} onClick={() => setModeAndColor('dark')}>
          Dark
        </MenuItem>
        <MenuItem rounded={'md'} onClick={() => setModeAndColor('system')}>
          System
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
