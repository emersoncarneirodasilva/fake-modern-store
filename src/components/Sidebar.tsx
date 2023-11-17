import { useCart } from "@/context/CartContext";
import {
  CloseButton,
  SectionBuyTitle,
  SectionPrice,
  SidebarContainer,
  FinalizePurchase,
  TotalPrice,
  MainSidebar,
  MiniCardProduct,
  RemoveButton,
  ProductName,
  QuantityContainer,
  Qtd,
  QuantityButtons,
  DecrementButtons,
  Quantity,
  IncrementButtons,
  MiniImageProduct,
  ProductPrice,
  EmptyCartText,
  QuantityAndPriceContainer,
} from "./Sidebar.styles";
import Image from "next/image";

interface SidebarProps {
  active: any;
}

const Sidebar = ({ active }: SidebarProps) => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  const calculateTotalPrice = (): number => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  const closeSidebar = () => {
    active(false);
  };

  return (
    <SidebarContainer active={active}>
      <SectionBuyTitle>
        <p>Carrinho de compras</p>
        <CloseButton onClick={closeSidebar}>x</CloseButton>
      </SectionBuyTitle>

      <MainSidebar>
        {cart.map((item) => (
          <MiniCardProduct key={item.id}>
            <MiniImageProduct>
              <Image src={item.image} alt={item.title} width={55} height={65} />
            </MiniImageProduct>

            <ProductName>{item.title}</ProductName>

            <QuantityAndPriceContainer>
              <QuantityContainer>
                <Qtd>Qtd:</Qtd>

                <QuantityButtons>
                  <DecrementButtons
                    onClick={() =>
                      item.quantity > 1
                        ? decrementQuantity(item.id)
                        : removeFromCart(item.id)
                    }
                  >
                    -
                  </DecrementButtons>

                  <Quantity>{item.quantity}</Quantity>

                  <IncrementButtons onClick={() => incrementQuantity(item.id)}>
                    +
                  </IncrementButtons>
                </QuantityButtons>
              </QuantityContainer>

              <ProductPrice>
                R${(Number(item.price) * item.quantity).toFixed(0)}
              </ProductPrice>
            </QuantityAndPriceContainer>

            <RemoveButton onClick={() => removeFromCart(item.id)}>
              X
            </RemoveButton>
          </MiniCardProduct>
        ))}

        {cart.length < 1 && (
          <EmptyCartText>Seu carrinho está vazio!</EmptyCartText>
        )}
      </MainSidebar>

      <SectionPrice>
        <TotalPrice>
          <p>Total:</p>
          <span> R${calculateTotalPrice().toFixed(0)}</span>
        </TotalPrice>

        <FinalizePurchase>Finalizar Compra</FinalizePurchase>
      </SectionPrice>
    </SidebarContainer>
  );
};

export default Sidebar;
