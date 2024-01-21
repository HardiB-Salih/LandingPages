import {
  AspectRatio,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

const HeroSecion = props => {
  const { imageUrl, title, caption, buttonTitle } = props;
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Container
      maxW={'5xl'}
      bgImage={!isLargerThan800 && imageUrl}
      bgPos={'center'}
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      bgBlendMode={'overlay'}
      bgColor={!isLargerThan800 && 'green.700'}
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
          <Heading lineHeight={'short'}>{title}</Heading>
          <Text>{caption}</Text>
          <Button colorScheme="twitter">{buttonTitle}</Button>
        </VStack>
        {isLargerThan800 && (
          <AspectRatio ratio={1} w={'400px'}>
            <Image src={imageUrl} rounded={'md'} shadow={'xl'} />
          </AspectRatio>
        )}
      </Stack>
    </Container>
  );
};

export default HeroSecion;
