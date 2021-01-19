import { Box } from '@chakra-ui/react';

const Container = (props) => {
  return (
    <Box w='full' maxW='4xl' mx='auto' px={{ base: '6', md: '8' }} {...props} />
  );
};

export default Container;
