import React from 'react'
import Productcard from './Productcard';

const Productlist = ({ list}) => {
    // console.log(list)
    return (
      <div>
        {list.map((el,i) => (
          <Productcard item={el} key={i} />
        ))}
      </div>
    );
  };

export default Productlist