import React from 'react';
import {Grid} from "@nextui-org/react";
import { Card1 } from '../Card1';
import CardComponents from '../CardComponents';

const HomePage = () => {
  return (
    <div className="page">
      <h1 className="title-home">Home Page</h1>
      <p className="paragraph">
        Welcome to our tree-centric website, a digital haven crafted
        for nature enthusiasts like me. Embark on a captivating
        journey through the realm of trees, where we celebrate
        the majestic beauty and profound significance of these gentle giants.
      </p>
      
      <p className="paragraph highlight"> 
        Discover fascinating insights, immerse yourself in awe-inspiring
        imagery, and deepen your connection with nature's ancient sentinels. 
        Together, let's delve into the enchanting world of trees and uncover 
        the secrets they hold!
      </p>

      <CardComponents/>
    </div>
  );
};

export default HomePage;