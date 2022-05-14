import React from 'react'
import { Container,Header,HeaderImg,OrderImg,OrderInfo,Price,Description,Specification,
  Content,Size,Quantity,ProductTurnary,Owner,OwnerImgContainer,OwnerImg,OwnerDescription,Button } from './style';
import avatar from '../../../Images/avatar.png'

const OrderedProduct = (orderedProduct) => {

  const product=orderedProduct.orderedProduct.product[0];
  const productOwner=product.farmer[0]

  return (
    <Container>              
    <Header>
        <HeaderImg>
            <OrderImg src={product.img} alt='itemImg' />
        </HeaderImg>
        <OrderInfo>
                <h1>{product.title}</h1>
                <Description>{product.description.split(' ').splice(0, 15).join(' ')}...</Description>
                <Size>
                  <Price>Rwf {product.price}</Price>
                  <Quantity>Quantity:{product.quantity}</Quantity>
                </Size>
                <Specification className=" flex flex-row justify-between text-neutral-600 text-sm">
                    <Content>
                        <h3>Content:</h3>
                        <ProductTurnary color={product.content} />    
                    </Content>
                    <Content>
                        <h3>Size:</h3>
                        <p>
                        {product.size}
                        </p>
                    </Content>
                 </Specification>
                 <Button>Dispatch Order To</Button>
                <Owner>
                  <OwnerImgContainer> 
                    <OwnerImg src={avatar || productOwner.img} alt='owner image' />
                  </OwnerImgContainer>
                  <OwnerDescription>
                    <p>{productOwner.company}</p>
                    <p>{productOwner.title}</p>
                  </OwnerDescription>
                  <OwnerDescription>
                    <p>{productOwner.username}</p>
                    <p>{productOwner.telephone}</p>
                  </OwnerDescription>
                </Owner>
        </OrderInfo>
    </Header>
</Container>
  )
}

export default OrderedProduct