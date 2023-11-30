import { useAWS } from "../services/aws/init";
import { Navbar } from "./navbar";
import { chakra } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export function Wrapper({ children }: Props) {
  useAWS();

  return (
    <chakra.div bg="#edf3f8" h="100vh" maxH="100vh">
      <Navbar />
      <chakra.div>{children}</chakra.div>
    </chakra.div>
  );
}
