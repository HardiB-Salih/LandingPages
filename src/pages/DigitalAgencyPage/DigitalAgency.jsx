import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSecion from './HeroSecion';
import {
  Box,
  Container,
  Heading,
  Highlight,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  useMediaQuery,
} from '@chakra-ui/react';
import ServicesCell from './ServicesCell';
import YogaCoursesCell from './YogaCoursesCell';
import Blob from '../../assets/svgs/Blob';
import Yoga2 from '../../assets/images/yoga2.png';

const DigitalAgency = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <>
      <Header />
      <HeroSecion />
      <Container py={'120px'} maxW={'3xl'}>
        <VStack textAlign={'center'} spacing={10}>
          <Heading size={'2xl'} lineHeight="shorter">
            <Highlight query={['Services']} styles={{ color: 'teal.400' }}>
              The Services We
            </Highlight>
            <br />
            Provide for You
          </Heading>
          <Text>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </Text>
        </VStack>
      </Container>
      <Container py={'120px'} maxW={'full'}>
        <Wrap justify={'center'} align={'center'} w={'100%'}>
          <ServicesCell />
          <ServicesCell />
          <ServicesCell />
        </Wrap>
      </Container>
      <Container py={'120px'} maxW={'6xl'}>
        <Stack direction={'row'} align={'center'} justify={'space-between'}>
          {isLargerThan800 && (
            <Box width={'400px'} h={'400px'} position={'relative'}>
              <Blob
                width="400"
                height="400"
                sx={{
                  position: 'absolute',
                  bottom: '0px',
                  left: '0px',
                  transform: 'rotate(25deg)',
                  zIndex: '0',
                }}
              />
              <Image
                src={Yoga2}
                position={'absolute'}
                bottom={0}
                left={50}
                transform={'rotateY(0deg) rotate(-25deg) scale(1.2)'}
                zIndex={3}
              />
            </Box>
          )}
          <VStack
            align={isLargerThan800 ? 'start' : 'center'}
            spacing={4}
            zIndex={2}
            w={isLargerThan800 ? '500px' : '100%'}
          >
            <Text
              mb={6}
              fontSize={'4xl'}
              lineHeight={'shorter'}
              textAlign={!isLargerThan800 && 'center'}
            >
              How it Work Join <br />
              Yoga Courses
            </Text>
            {[1, 2, 3].map((_, index) => (
              <YogaCoursesCell key={index} number={`0${index + 1}`} />
            ))}
          </VStack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default DigitalAgency;
