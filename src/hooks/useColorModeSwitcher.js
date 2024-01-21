import { useState, useEffect, useCallback } from 'react';
import { useColorMode } from '@chakra-ui/react';

const useColorModeSwitcher = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [mode, setMode] = useState(colorMode);

  const systemPreferenceQuery = window.matchMedia(
    '(prefers-color-scheme: dark)'
  );

  const setModeAndColor = useCallback(
    newMode => {
      setMode(newMode);
      if (newMode === 'system') {
        setColorMode(systemPreferenceQuery.matches ? 'dark' : 'light');
      } else {
        setColorMode(newMode);
      }
    },
    [setColorMode, systemPreferenceQuery.matches]
  );

  useEffect(() => {
    const handleSystemPreferenceChange = e => {
      if (mode === 'system') {
        setColorMode(e.matches ? 'dark' : 'light');
      }
    };

    systemPreferenceQuery.addEventListener(
      'change',
      handleSystemPreferenceChange
    );
    return () =>
      systemPreferenceQuery.removeEventListener(
        'change',
        handleSystemPreferenceChange
      );
  }, [mode, setColorMode, systemPreferenceQuery]);

  return { mode, setModeAndColor };
};

export default useColorModeSwitcher;
