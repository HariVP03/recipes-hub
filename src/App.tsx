import { Button } from "@chakra-ui/react";
import { useAWS } from "./services/aws/init";

function App() {
  useAWS();

  return (
    <>
      <div>
        123
        <Button>123</Button>
      </div>
    </>
  );
}

export default App;
