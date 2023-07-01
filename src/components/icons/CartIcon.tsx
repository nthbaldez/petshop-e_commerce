import { AiOutlineShoppingCart } from 'react-icons/ai';

interface CartIconProps {
  color: string;
}


export default function CartIcon({ color }: CartIconProps) {
  return (
    <AiOutlineShoppingCart size={30} color={color}/>
  )
};
