import { FormControl, Input, ITextProps } from "native-base";

interface EntradaTextoProps extends ITextProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export function EntradaTexto({
  label,
  placeholder,
  secureTextEntry = false,
  ...rest
}: EntradaTextoProps) {
  return (
    <FormControl marginTop={3}>
      { label != null && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        size={"lg"}
        w={"100%"}
        borderRadius={"lg"}
        bgColor={"gray.100"}
        shadow={3}
        secureTextEntry={secureTextEntry}
        {...rest}
      ></Input>
    </FormControl>
  );
}
