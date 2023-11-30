import { Box, chakra, Button, Link } from "@chakra-ui/react";
import { Post, persistCart } from "../../services/aws/dynamo";
import { useState } from "react";

export function RecipeCard({
  description,
  files: { images },
  title,
  id,
}: Post) {
  const [loading, setLoading] = useState(false);

  function onAddToCart() {
    setLoading(true);
    persistCart("hari", id).then((res) => {
      console.log(res);
      setLoading(false);
    });
  }

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
        <Link
          fontSize={{
            base: "2xl",
            md: "3xl",
          }}
          href={`/post/${id}`}
          cursor="pointer"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          noOfLines={1}
        >
          {title}
        </Link>
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
          <Button
            isLoading={loading}
            loadingText="Adding to cart"
            colorScheme="linkedin"
            px={5}
            onClick={onAddToCart}
            py={3}
            fontWeight="semibold"
            rounded="lg"
          >
            Add meal
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
