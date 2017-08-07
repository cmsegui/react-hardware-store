import React, {Component} from 'react';
 
 class Product extends Component {
   _delete = () => {
    this.props.deleteProductFromList(this.props.index);
   };

   render() {
     const productName = this.props.productName;
     const description = this.props.description;
     const price = this.props.price;
    
     return (
         <div>
           <h3>{productName}</h3>
           <div>{description}</div>
           <div>{price}</div>
           <div><button onClick={this.delete}>Delete</button></div>
         </div>
     );
 
   }
 }
 
 export default Product;