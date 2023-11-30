import { Flex, Spinner } from "@chakra-ui/react";

export function Loader() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Spinner />
    </Flex>
  );
}
