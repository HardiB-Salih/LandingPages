import { Text, VStack, WrapItem, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { CheckIcon } from '../../assets/svgs/Icons';

const OutputCell = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <WrapItem maxW={isLargerThan800 ? '320px' : '100%'}>
      <VStack
        bg={'blackAlpha.300'}
        p={4}
        rounded={'md'}
        align={isLargerThan800 ? 'center' : 'start'}
        _hover={{
          shadow: 'xl', // larger shadow on hover
          transform: 'translateY(-5px)', // move up by 10px on hover
          '.checkIcon': {
            transform: 'scale(1.2)',
            shadow: 'xl',
          },
        }}
        transition="transform 0.5s ease-in-out, box-shadow 0.2s ease-in-out"
      >
        <CheckIcon
          className="checkIcon"
          boxSize={12}
          bg={'blue.500'}
          p={2}
          rounded={'full'}
          shadow={'md'}
          transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
        />
        <Text as={'b'} fontSize={'xl'}>
          Affordable
        </Text>
        <Text lineHeight={'tall'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </VStack>
    </WrapItem>
  );
};

export default OutputCell;
