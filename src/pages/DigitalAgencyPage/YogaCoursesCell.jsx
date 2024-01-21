import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const YogaCoursesCell = ({ number }) => {
  return (
    <Box
      py={'16px'}
      px={'24px'}
      shadow={'md'}
      border={'1px'}
      _hover={{
        '.number': { color: 'teal.400', opacity: '1' },
      }}
    >
      <Text
        fontSize={'2xl'}
        as={'b'}
        opacity={0.3}
        className="number"
        transition="color 0.2s ease-in-out, opacity 0.3s ease-in-out"
      >
        {number}
      </Text>
      <Text fontSize={'3xl'}>Register With Us</Text>
      <Text opacity={0.5}>
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth.
      </Text>
    </Box>
  );
};

export default YogaCoursesCell;
