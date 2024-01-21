import { useCallback, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateMode } from '../redux/slices/app';

const useColorModeSwitcherRedux = () => {
  const dispatch = useDispatch();
  const { setColorMode } = useColorMode();
  const mode = useSelector(state => state.app.mode); // Adjust the path according to your Redux store

  const setModeAndColor = useCallback(
    newMode => {
      dispatch(UpdateMode(newMode));
      if (newMode === 'system') {
        const systemPreferenceQuery = window.matchMedia(
          '(prefers-color-scheme: dark)'
        );
        setColorMode(systemPreferenceQuery.matches ? 'dark' : 'light');
      } else {
        setColorMode(newMode);
      }
    },
    [dispatch, setColorMode]
  );

  // Sync Chakra UI's color mode with Redux state
  useEffect(() => {
    if (mode === 'system') {
      const systemPreferenceQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      setColorMode(systemPreferenceQuery.matches ? 'dark' : 'light');
    } else {
      setColorMode(mode);
    }
  }, [mode, setColorMode]);

  return { mode, setModeAndColor };
};

export default useColorModeSwitcherRedux;
