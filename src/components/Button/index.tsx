import { ButtonProps } from "../../utils/interfaces/components";
import { ButtonStyle } from "./styles";



/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const propsButton = { primary, size, backgroundColor, label, ...props }
  return (
    <ButtonStyle
      type="button"
      style={{ backgroundColor }}
      {...propsButton}
    >
      {label}
    </ButtonStyle>
  );
};
