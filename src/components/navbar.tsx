import React from "react";
import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export function Navbar() {
  return (
    <chakra.header
      position="fixed"
      h="80px"
      maxH="80px"
      top={0}
      bg="white"
      zIndex={5}
      w="full"
      px={{
        base: 2,
        sm: 4,
      }}
      py={4}
      shadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.h1 as="a" href="/" fontSize="xl" fontWeight="medium" ml="2">
            Choc
          </chakra.h1>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Button variant="ghost" as="a" href="/upload">
              Upload
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
