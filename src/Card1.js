import React from 'react';
import { Card, Col, Text } from '@nextui-org/react';

export const Card1 = ({ title, description, imageSrc }) => (
  <Card css={{ w: '100%', 
  marginTop: '5rem', 
   transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }, 
  }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={16} weight="bold" transform="uppercase" color="#ffffffAA">
          {title}
        </Text>
        <Text h4 color="white">
          {description}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={imageSrc}
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);
