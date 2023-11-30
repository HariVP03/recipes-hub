import App from "../App";
import { RecipeCard } from "../components/cards/recipe";
import { Navbar } from "../components/navbar";

export function Home() {
  return (
    <>
      <RecipeCard
        title="123"
        description="321"
        image="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
      />
    </>
  );
}

export default App;
