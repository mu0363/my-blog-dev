import { Text, Button, Link, VStack } from '@chakra-ui/react';
import PageTransition from '@/components/PageTransition';

const Main = () => {
  return (
    <PageTransition>
      <VStack spacing={2} align={['start', 'center']}>
        <Text fontSize='3xl'>Hey, I'm Osamu 🥺 </Text>
        <Text
          fontSize={['sm', 'md', 'lg', '3xl']}
          textAlign={{ base: 'left', md: 'center' }}
        >
          I'm a video creator, developer and maker of things. Born in Japan and
          now living in Tokyo.
        </Text>
        <Link href='http://ai-relations.jp/' isExternal>
          <Button colorScheme='blue'>Company</Button>
        </Link>
      </VStack>
    </PageTransition>
  );
};

export default Main;
