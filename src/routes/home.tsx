import { useEffect, useState } from "react";
import App from "../App";
import { RecipeCard } from "../components/cards/recipe";
import { Post, getPosts } from "../services/aws/dynamo";
import { Loader } from "../components/loader";
import { Flex } from "@chakra-ui/react";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res) => {
      setRecipes(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Flex mt="80px" p="2" gap="2" bg="#edf3f8" flexWrap="wrap">
      {recipes?.map((e, i) => (
        <RecipeCard {...e} key={i} />
      ))}
    </Flex>
  );
}

export default App;
