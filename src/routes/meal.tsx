import { useEffect, useState } from "react";
import App from "../App";
import { RecipeCard } from "../components/cards/recipe";
import { Post, clearCart, getCart, getPost } from "../services/aws/dynamo";
import { Loader } from "../components/loader";
import { Button, Flex, chakra } from "@chakra-ui/react";

export function Meal() {
  const [loading, setLoading] = useState(true);
  const [clearing, setClearing] = useState(false);
  const [recipes, setRecipes] = useState<Post[]>([]);

  useEffect(() => {
    if (recipes.length > 0) return;

    getCart("hari")
      .then((res) => {
        console.log(res);
        res.meals.forEach((e) => {
          getPost(e).then((res) => {
            console.log(res);
            setRecipes((prev) => [...prev, res]);
            setLoading(false);
          });
        });
      })
      .catch((e) => {
        console.log(e);
        window.location.href = "/";
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Flex
        mt="80px"
        p="2"
        bg="#edf3f8"
        pl="24px"
        justify={"center"}
        flexDir="column"
      >
        <chakra.h1 fontSize="5xl" mb="4">
          Your meal (
          {`${recipes.reduce((a, b) => a + (b?.calories ?? 0), 0)} kcal`})
        </chakra.h1>
        <Button
          mb="12"
          colorScheme="red"
          maxW="200px"
          isLoading={clearing}
          onClick={() => {
            setClearing(true);
            clearCart("hari").then(() => {
              setClearing(false);
              window.location.reload();
            });
          }}
        >
          Clear your cart
        </Button>
        <Flex gap="2" bg="#edf3f8" flexWrap="wrap">
          {recipes?.map((e, i) => (
            <RecipeCard {...e} key={i} />
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default App;
