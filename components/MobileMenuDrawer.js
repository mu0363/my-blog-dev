import { useState } from 'react';
import {
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
} from '@chakra-ui/react';
import { Menu } from 'heroicons-react';
import MobileMenuButton from './MobileMenuButton';

const MobileMenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <MobileMenuButton onClick={onOpen} icon={<Menu />} label='Menu' />
      <Drawer placement='bottom' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileMenuDrawer;
