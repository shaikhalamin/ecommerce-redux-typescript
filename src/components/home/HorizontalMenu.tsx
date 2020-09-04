import React from "react";

import { Container, Row, Col } from "react-bootstrap";


const HorizontalMenu: React.FC<{}> = () => {

  const categoryData = [
    {
      id: 1,
      name: 'Presh Produce',
      slug: '/category/fresh-produce',
      productImage: 'https://s3-ap-southeast-1.amazonaws.com/com.meenaclick.v2.inst.01/banner/images/3e59144d-321c-4a9b-b919-a7661fe69bfb.jpg'
    },
    {
      id: 2,
      name: 'Coocking Oil',
      slug: '/category/cooking-oil-ghee',
      productImage: 'https://s3-ap-southeast-1.amazonaws.com/com.meenaclick.v2.inst.01/banner/images/57e9571f-83d7-4603-8a11-24d94fb950a2.jpg'
    }
    ,
    {
      id: 3,
      name: 'Baby Care',
      slug: '/category/baby-care',
      productImage: 'https://s3-ap-southeast-1.amazonaws.com/com.meenaclick.v2.inst.01/banner/images/eec8871d-a18a-4ef3-85ac-fbb04e705c08.jpg'
    },
    {
      id: 4,
      name: 'House Hold Cleaning',
      slug: '/category/household-cleaning"',
      productImage: 'https://s3-ap-southeast-1.amazonaws.com/com.meenaclick.v2.inst.01/banner/images/5d15f509-6669-4a23-9cac-e9c62622b8e9.jpg'
    },
    {
      id: 5,
      name: 'Bakery Snaks',
      slug: '/category/bakery-snacks',
      productImage: 'https://s3-ap-southeast-1.amazonaws.com/com.meenaclick.v2.inst.01/banner/images/95cc2fd2-2d5a-4eb7-b04c-ee80eec7e7c9.jpg'
    },
    {
      id: 6,
      name: 'Personal Care',
      slug: '/category/beauty-hygiene',
      productImage: 'https://s3-ap-southeast-1.amazonaws.com/com.meenaclick.v2.inst.01/banner/images/9ca47efe-123a-4e8c-9dc8-2f1fcd90b804.jpg'
    }
  ]

  return (

    <Container>
      <Row className="text-center">
        {
          categoryData &&
          categoryData.map((item, i) => {
            return (
              <Col xs={6} md={2} key={item.id} className="mt-2">
                <img className="img-fluid" src={item.productImage} alt={item.name} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  );

}




export default HorizontalMenu;