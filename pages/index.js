import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

const Home = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Main />
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
