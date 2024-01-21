import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  Highlight,
  Image,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import Blob from '../../assets/svgs/Blob';
import Yoga1 from '../../assets/images/yoga1.png';
import { CgArrowRight } from 'react-icons/cg';

const HeroSecion = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1589691962030-8d2b7f2a1ffe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Container
      maxW={'5xl'}
      bgImage={!isLargerThan800 && imageUrl}
      bgPos={'center'}
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      bgBlendMode={'overlay'}
      bgColor={!isLargerThan800 && 'red.900'}
      color={!isLargerThan800 && 'white'}
    >
      <Stack
        direction={isLargerThan800 ? 'row' : 'column'}
        align={'center'}
        justify={'space-between'}
        py={'40px'}
        spacing={2}
      >
        <VStack
          spacing={'24px'}
          maxW={'100%'}
          align={isLargerThan800 ? 'start' : 'center'}
          textAlign={isLargerThan800 ? 'start' : 'center'}
        >
          <Heading size="4xl" lineHeight="short">
            Join our Online
            <br />
            <Highlight query="Yoga Courses!" styles={{ color: 'teal.300' }}>
              Yoga Courses!
            </Highlight>
          </Heading>
          <Text maxW={'500px'}>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </Text>
          <Button colorScheme="teal" rightIcon={<CgArrowRight />}>
            Join Courses Now
          </Button>
        </VStack>
        {isLargerThan800 && (
          <AspectRatio ratio={1} w={'400px'}>
            <Box width={'400px'} h={'400px'} position={'relative'}>
              <Blob
                width="400"
                height="300"
                sx={{
                  position: 'absolute',
                  bottom: '0px',
                  left: '0px',
                }}
              />
              <Image
                src={Yoga1}
                position={'absolute'}
                top={0}
                left={-50}
                transform={'rotateY(0deg) rotate(-25deg) scale(1.2)'}
              />
            </Box>
          </AspectRatio>
        )}
      </Stack>
    </Container>
  );
};

export default HeroSecion;
