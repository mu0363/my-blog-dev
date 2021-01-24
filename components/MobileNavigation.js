import { Box, HStack, useColorMode, VStack, Text } from '@chakra-ui/react';
import MobileMenuDrawer from './MobileMenuDrawer';
import MobileMenuButton from './MobileMenuButton';
import ThemeToggle from './ThemeToggle';

const MobileNavigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      position='fixed'
      bottom='0'
      right='0'
      left='0'
      display={{ base: 'block', md: 'none' }}
    >
      <HStack
        justify='space-around'
        py={2}
        borderTopWidth='2px'
        shadow='0 -2px 10px 0 rgba(0,0,0, 0.035);'
      >
        <MobileMenuDrawer />
        <MobileMenuDrawer />
        <VStack>
          <ThemeToggle />
          <Text fontSize='xs' fontWeight='500'>
            {colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MobileNavigation;
