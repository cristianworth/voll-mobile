import { Button, ITextProps } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends ITextProps {
  children: ReactNode;
}

export function Botao({ children, ...rest }: BotaoProps) {
  return (
    <Button
      w={100}
      bg={"blue.800"}
      marginTop={10}
      borderRadius={"lg"}
      {...rest}
    >
      {children}
    </Button>
  );
}
