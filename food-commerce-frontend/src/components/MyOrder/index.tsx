import { useCart } from '../../hooks/useCart'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { Container } from './styles'

export function MyOrder() {
  const { cart } = useCart()

  return (//padStart = acrscenta zeros na frente enquanto o numero ao lado vai aumentando
    <Container to={'cart'}>
      <span>Meu Pedido</span>
      <CartIcon />
      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
    </Container>
  )
}
