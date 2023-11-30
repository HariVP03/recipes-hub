import { Button } from "@chakra-ui/react";
import { useAWS } from "./services/aws/init";
import { RecipeCard } from "./components/cards/recipe";

function App() {
  useAWS();

  return (
    <>
      <div>
        123
        <RecipeCard
          title="123"
          description="321"
          image="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
        />
      </div>
    </>
  );
}

export default App;
