import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Link } from '@chakra-ui/react';

export default function Nav() {
  return (
    <Menu isLazy>
      <MenuButton>Open menu</MenuButton>
      <MenuList>
        {/* MenuItems are not rendered unless Menu is open */}
        <MenuItem>
          <Link href="/">
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about">
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/profile">
            profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/pizza">
            Pizza
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
