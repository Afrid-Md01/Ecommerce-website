import Products1 from './Products1';
import Products2 from './Products2';
import {Button} from 'react-bootstrap';
import React from 'react';

function Products(props){
    return (
        <div className='text-center'>
          <Products1 showToast={props.showToast}/>
          <Products2 showToast={props.showToast}/>
          <Button  className="btn btn-secondary btn-lg" onClick={props.onOpen}>See Cart</Button>
        </div>
      );
}

export default Products;