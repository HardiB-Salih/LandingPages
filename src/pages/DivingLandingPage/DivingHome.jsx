import React from 'react';
import Header from './Header';
import HeroSecion from './HeroSecion';
import {
  Container,
  Heading,
  Spacer,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import OutputCell from './OutputCell';
import Subscribe from './Subscribe';
import Footer from './Footer';
import AdvancedSEO from '../../AdvancedSEO';

const DivingHome = () => {
  const bgColor = useColorModeValue('#ffffff', '#1A202C');

  return (
    <>
      <AdvancedSEO themeColor={bgColor} />
      <Header />
      <HeroSecion
        imageUrl={
          'https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NzF8fERpdmluZ3xlbnwwfDB8MHx8fDA%3D'
        }
        title={
          <>
            Best Diving <br />
            Experiences With <br />
            Affordable Price!
          </>
        }
        caption={
          <>
            Are you looking for amazing diving community? <br />
            Don’t worry! We got it for you!
          </>
        }
        buttonTitle={'Learn More'}
      />
      <Container py={'100px'} maxW={'5xl'}>
        <Heading textAlign={'center'} mb={6}>
          High Quality Output, <br />
          Awesome Community
        </Heading>
        <Wrap justify={'center'} align={'center'} w={'100%'}>
          <OutputCell />
          <OutputCell />
          <OutputCell />
        </Wrap>
      </Container>
      <Subscribe />
      <Spacer h={50} />
      <Footer />
    </>
  );
};

export default DivingHome;
