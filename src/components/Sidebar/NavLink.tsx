import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps
} from '@chakra-ui/react';

import { ElementType } from 'toasted-notes/node_modules/@types/react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium" >{children}</Text>
      </ChakraLink>
    </ActiveLink >
  );
}