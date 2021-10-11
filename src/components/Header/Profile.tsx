import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && <Box mr="4" textAlign="right">
        <Text>Daniel Menezes</Text>
        <Text color="gray.300" fontSize="small">
          daniel.menezes.md@gmail.com
        </Text>
      </Box>}

      <Avatar
        size="md"
        name="Danie Menezes"
      //src="http://github.com/danielmenezes.png"
      />
    </Flex>
  );
}