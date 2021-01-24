import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import MobileNavigation from '../components/MobileNavigation';

const Home = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Main />
        <MobileNavigation />
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
