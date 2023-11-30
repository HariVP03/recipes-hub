import { useEffect, useState } from "react";
import App from "../App";
import { RecipeCard } from "../components/cards/recipe";
import { Post, getCart, getPost } from "../services/aws/dynamo";
import { Loader } from "../components/loader";
import { Flex, chakra } from "@chakra-ui/react";

export function Meal() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState<Post[]>([]);

  useEffect(() => {
    getCart("hari").then((res) => {
      console.log(res);
      res.meals.forEach((e) => {
        getPost(e).then((res) => {
          console.log(res);
          setRecipes((prev) => [...prev, res]);
          setLoading(false);
        });
      });
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Flex mt="80px" p="2" bg="#edf3f8" pl="24px" flexDir="column">
        <chakra.h1 fontSize="5xl" mb="12">
          Your meal (
          {`${recipes.reduce((a, b) => a + (b?.calories ?? 0), 0)} kcal`})
        </chakra.h1>
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
