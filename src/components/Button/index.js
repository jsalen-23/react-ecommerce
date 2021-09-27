import { Btn } from './styles';

const Button = ({ children, size }) => {
  return <Btn size={size}>{children}</Btn>;
};

export default Button;
