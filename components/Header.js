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
  Link,
  VStack,
} from '@chakra-ui/react';
import {
  EmojiHappy,
  BookOpenOutline,
  BookmarkAltOutline,
  ChevronDown,
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
    <Box
      borderBottomWidth='2px'
      shadow='0 0 10px 0 rgba(0,0,0, 0.035);'
      display={{ base: 'none', md: 'block' }}
    >
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
              <Link href='/books'>
                <MenuItem>
                  <HStack>
                    <Icon as={BookOpenOutline}></Icon>
                    <Text>Books</Text>
                  </HStack>
                </MenuItem>
              </Link>
              <Link href='/bookmark'>
                <MenuItem>
                  <HStack>
                    <Icon as={BookmarkAltOutline}></Icon>
                    <Text>Bookmark</Text>
                  </HStack>
                </MenuItem>
              </Link>
              <NextLink href='/pleading'>
                <MenuItem>
                  <HStack>
                    <Icon as={EmojiHappy} />
                    <Text>PleadingFace</Text>
                  </HStack>
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </HStack>
        <ThemeToggle />
      </HStack>
    </Box>
  );
};

export default Header;
