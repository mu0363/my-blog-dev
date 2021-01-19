import { Box, HStack, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
  const date = new Date().getFullYear();

  const FooterLink = ({ href, name }) => {
    return (
      <NextLink href={href} passHref>
        <Button color='gray.500' variant='unstyled'>
          {name}
        </Button>
      </NextLink>
    );
  };

  return (
    <HStack justify='space-between'>
      <Text color='gray.500'>&copy;{date} OSAMU ARAYA</Text>
      <HStack>
        <FooterLink href='/page1' name='Disclaimer' />
        <FooterLink href='/page1' name='Privacy' />
      </HStack>
    </HStack>
  );
};

export default Footer;
