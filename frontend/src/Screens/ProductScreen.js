import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';



function ProductScreen(props){

  // A classless hook "useState" updates qty(state) and setQty is the function that updates the state.
  // qty is equivalent to this.state.qty, setQty is equivalent to this.setState  
  const [qty, setQty] = useState(1); // passes default value of 1 to setQty which sets qty to 1.

  // Get the product detail(state.productDetails)
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } =  productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(detailsProduct(props.match.params.id))
      return () => {
          //
      }
  }, [])

  // Redirect users to an url???
  //Add the product(props...id) to cart for a num of times???
  const handleAddToCart = () => {
      props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        {loading ? <div>Loading...</div>:
         error ? <div>{error}</div>:
            (
                <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars
                        </li>
                        <li>
                            <b>{product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                             Price: {product.price}
                         </li>
                          <li>
                              {/*Ternary Operator "?" checks whether product greater than 0.*/ }
                              {/* True : False */}
                              Status: {product.numOfStock > 0? "In Stock" : "Out Of Stock"}
                         </li>
                         <li>
                             {/* pass quantity value that user selects to qty.*/}
                             Quantity: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                {/* 1. Array(number) was created array with size of the number*/}
                                {/* 2. Spread operator spreads the empty elements within the array*/}
                                {/* 3. Keys method returns enumerable properties of an array like object
                                        which is index of each element in this case. */}
                                {/* 4. Map method traverses array of indexes creates list of quantity. */}
                                {[...Array(product.numOfStock).keys()].map(x =>
                                    <option key={x + 1} value= {x + 1}>{x + 1}</option>
                                    )}
                                        </select>
                        </li>
                        <li>
                            {/* Button will not be shown if stock is smaller than equal 0.*/}
                            {product.numOfStock > 0 && <button onClick={handleAddToCart} className="button primary">Add To Cart</button>}   
                        </li>
                    </ul>
                </div>    
            </div>
            )  
        }  
    </div>
}

export default ProductScreen;
