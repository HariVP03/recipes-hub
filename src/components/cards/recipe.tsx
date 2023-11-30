import { Flex, Box, chakra, Link } from "@chakra-ui/react";
import { Post } from "../../services/aws/dynamo";

export function RecipeCard({ description, files: { images }, title }: Post) {
  return (
    <Box
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      mx={{
        lg: 8,
      }}
      display={{
        lg: "flex",
      }}
      w="500px"
      shadow={{
        lg: "lg",
      }}
      border="1px solid"
      borderColor="gray.200"
      p={1}
      rounded="lg"
    >
      <Box
        w={{
          lg: "50%",
        }}
      >
        <Box
          h={{
            base: 64,
            lg: "full",
          }}
          rounded={{
            lg: "lg",
          }}
          bgSize="cover"
          style={{
            backgroundImage: `url("${images[0]}")`,
          }}
        ></Box>
      </Box>

      <Box
        py={12}
        px={6}
        maxW={{
          base: "xl",
          lg: "5xl",
        }}
        w={{
          lg: "50%",
        }}
      >
        <chakra.h2
          fontSize={{
            base: "2xl",
            md: "3xl",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          noOfLines={1}
        >
          {title}
        </chakra.h2>
        <chakra.p
          mt={4}
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
          noOfLines={1}
        >
          {description}
        </chakra.p>

        <Box mt={8}>
          <Link
            bg="gray.900"
            color="gray.100"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{
              bg: "gray.800",
            }}
          >
            View
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
