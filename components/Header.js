import NextLink from 'next/link';
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Text,
  Avatar,
  Box,
} from '@chakra-ui/react';
import {
  BookOpenOutline,
  BookmarkAltOutline,
  ChevronDown,
  CogOutline,
} from 'heroicons-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const NavLink = ({ href, name }) => {
    return (
      <NextLink href={href} passHref>
        <Button variant='ghost'>{name}</Button>
      </NextLink>
    );
  };

  return (
    <Box borderBottomWidth='2px' shadow='0 0 10px 0 rgba(0,0,0, 0.035);'>
      <HStack justify='space-between' px={8} py={4} maxW='4xl' mx='auto'>
        <Avatar size='sm' />
        <HStack>
          <NavLink href='/about' name='About' />
          <NavLink href='/blog' name='Blog' />
          {/* index.js?1235:110 Popper: CSS "margin" styles cannot be used to apply padding between the popper and its reference element or boundary. */}
          <Menu>
            <MenuButton variant='ghost' as={Button} rightIcon={<ChevronDown />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Icon as={BookOpenOutline}></Icon>
                <Text>Books</Text>
              </MenuItem>
              <MenuItem>
                <Icon as={BookmarkAltOutline}></Icon>
                <Text>Bookmark</Text>
              </MenuItem>
              <MenuItem>
                <Icon as={CogOutline} />
                <Text>Tools</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <ThemeToggle />
      </HStack>
    </Box>
  );
};

export default Header;
