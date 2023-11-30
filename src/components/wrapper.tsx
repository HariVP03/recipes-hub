import { useAWS } from "../services/aws/init";

interface Props {
  children: React.ReactNode;
}

export function Wrapper({ children }: Props) {
  useAWS();

  return <>{children}</>;
}
