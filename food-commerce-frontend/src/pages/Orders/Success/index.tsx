import { useParams } from 'react-router-dom'

import { Head } from '../../../components/Head'

import { Button, Container, Inner, SubTitle, Title } from './styled'

export default function OrderSuccessPage() {
  const { orderId } = useParams()

  return (
    <Container>
      <Head title='Compra Realizada com Sucesso!' />

      <Inner>
        <Title>Compra Realizada com Sucesso</Title>

        <p>
          Número de Pedido <code>#{orderId}</code>
        </p>

        <SubTitle>Endereço</SubTitle>

        <ul>
          <li>Av Sete de Setembro, 56</li>
          <li>CEP: 99010-120</li>
        </ul>

        <SubTitle>Contatos</SubTitle>

        <ul>
          <li>Whatsapp: 54 9 9912-4578</li>
          <li>Instagram: @food_commerce</li>
          <li>e-mail: food_commerce@gmail.com</li>
        </ul>

        <SubTitle>Seu pedido chega em no máximo 50min</SubTitle>

        <Button>
            <a href='/'>Página inicial</a>
        </Button>

        

      </Inner>
    </Container>
  )
}
