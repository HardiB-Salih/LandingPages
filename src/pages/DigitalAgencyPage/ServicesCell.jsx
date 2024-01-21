import {
  AspectRatio,
  Heading,
  Image,
  Text,
  VStack,
  WrapItem,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

const ServicesCell = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <WrapItem maxW={isLargerThan800 ? '380px' : '100%'}>
      <VStack
        p={5}
        border={'1px'}
        borderColor={'teal.600'}
        spacing={4}
        _hover={{
          shadow: 'xl', // larger shadow on hover
          transform: 'translateY(-5px)', // move up by 10px on hover
        }}
        transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      >
        <Heading as={'b'} size={'md'}>
          Live Streaming Sessions
        </Heading>
        <AspectRatio ratio={21 / 6} w={'100%'}>
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rounded={'full'}
            shadow={'2xl'}
          />
        </AspectRatio>
        <Text>
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular.
        </Text>
      </VStack>
    </WrapItem>
  );
};

export default ServicesCell;
