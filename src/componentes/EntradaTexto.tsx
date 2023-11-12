import { FormControl, Input, ITextProps } from "native-base";

interface EntradaTextoProps extends ITextProps {
  label?: string;
  placeholder: string;
}

export function EntradaTexto({
  label,
  placeholder,
  ...rest
}: EntradaTextoProps) {
  return (
    <FormControl marginTop={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        size={"lg"}
        w={"100%"}
        borderRadius={"lg"}
        bgColor={"gray.100"}
        shadow={3}
        {...rest}
      ></Input>
    </FormControl>
  );
}
