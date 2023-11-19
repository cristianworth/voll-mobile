import { Button, ITextProps } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends ITextProps {
  children: ReactNode;
  autoSize?: boolean
}

export function Botao({ children, autoSize = false, ...rest }: BotaoProps) {
  return (
    <Button
      w={autoSize ? "auto" : "100%"}
      bg={"blue.800"}
      marginTop={3}
      borderRadius={"lg"}
      {...rest}
    >
      {children}
    </Button>
  );
}
