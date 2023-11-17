import Image from "next/image";
import {
  AddBuyButton,
  Description,
  DivCard,
  ProductImage,
  ProductNameAndPrice,
  RemoveBuyButton,
} from "./ProductCard.styles";
import { LuShoppingBag } from "react-icons/lu";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  products: {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    quantity: number;
  }[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const isProductInCart = (productId: number): boolean => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <>
      {products.map((product) => (
        <DivCard key={product.id}>
          <ProductImage>
            <Image
              src={product.image}
              alt={product.title}
              width={115}
              height={118.21}
            />
          </ProductImage>

          <ProductNameAndPrice>
            {product.title.length > 22 ? (
              <p>{product.title.slice(0, 22)}...</p>
            ) : (
              <p>{product.title}</p>
            )}

            <span>R${Number(product.price).toFixed(0)}</span>
          </ProductNameAndPrice>

          {product.description.length > 90 ? (
            <Description>{product.description.slice(0, 90)}...</Description>
          ) : (
            <Description>{product.description}</Description>
          )}

          {isProductInCart(product.id) ? (
            <RemoveBuyButton onClick={() => removeFromCart(product.id)}>
              <i>
                <LuShoppingBag />
              </i>
              <p>REMOVER</p>
            </RemoveBuyButton>
          ) : (
            <AddBuyButton onClick={() => addToCart(product)}>
              <i>
                <LuShoppingBag />
              </i>
              <p>COMPRAR</p>
            </AddBuyButton>
          )}
        </DivCard>
      ))}
    </>
  );
};

export default ProductCard;
