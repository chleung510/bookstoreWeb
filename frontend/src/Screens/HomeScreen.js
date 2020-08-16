import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/carousel';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props){

    /** 
    //useState returns 2 values, products and setProduct(allows you to update products)
    //a classless hook for rendering with initial of empty array
    //Since no products were imported  at the beginning.
    const [products, setProduct] = useState([]); 
    */

    // useSelector is to get the data(state.productList) from Redux store.
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList; 
    const dispatch =  useDispatch(); // To be able to dispatch an action as an arguement.


    // useEffect lets you perform side effects in function components
    // Data fetching, setting up a subscription, and manually changing the DOM 
    // in React components are all examples of side effects.
    useEffect(() => { //for fetching data from server.

       dispatch(listProducts()); // dispatch message(and data)??? in productAction.js.

       return () => {
        //
        }; 

    }, [])

    

    
return(
    loading ? <div>Loading...</div>:
    error ? <div>{error}</div>:
    
    <div>
 <Carousel className="slider">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/img-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/img-2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/img-3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

{/* <!----------------------------featured-categories------------------------------------------------------> */}
<section className="featured-categories">
<div className="container">
<div className="row">
    <div className="col-md-4">
        <img src="/images/feat_product1.jpg" alt="feature product 1"/>
    </div>
    <div className="col-md-4">
        <img src="/images/feat_product2.jpg" alt="feature product 2"/>
    </div>
    <div className="col-md-4">
        <img src="/images/feat_product3.jpg" alt="feature product 3"/>
    </div>
</div>
</div>
</section>

{/* <!-------------------On Sale product--------------------------> */}
<section className="on-sale">
    <div className="container">
        <div className="title-box">
            <h3>On Sale</h3>
        </div>

        <ul className="products">
        {
            products.map(product =>      
                    <div className="product">
                        <div className="overlay-right1">
                            <button type="button" className="btn btn-secondary" title="Quick Shop">
                            <i className="fa fa-eye"></i>         
                            </button>
                            <button type="button" className="btn btn-secondary" title="Add to Wishlist">
                                <i className="fa fa-heart-o"></i>
                            </button>
                            <button type="button" className="btn btn-secondary" title="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                            </button>
                        </div> 
                        <Link to={'/product/' + product._id}>
                            <img className="product-image" src={product.image} alt="product"/>
                        </Link> 
                        <div className="product-bottom text-center">
                            <div className="product-name">
                                <Link to={'/product/' + product._id}><h3>{product.name}</h3></Link>
                            </div>
                            <div className="product-price"><h5>{product.price}</h5></div>
                            <div className="product-rating"><h5>{product.rating}</h5></div>  
                        </div> 
                    </div>
                    
            )
        }   
        </ul>
    </div>
</section>


 {/* <!-------------------New-Products--------------------------> */}
 <section className="new-products">
        <div className="container">
            <div className="title-box">
                <h3>New Arrival</h3>
            </div>
<ul className="products">
{
     products.map(product =>      
            <div className="product">
                <div className="overlay-right1">
                    <button type="button" className="btn btn-secondary" title="Quick Shop">
                    <i className="fa fa-eye"></i>         
                    </button>
                    <button type="button" className="btn btn-secondary" title="Add to Wishlist">
                        <i className="fa fa-heart-o"></i>
                    </button>
                    <button type="button" className="btn btn-secondary" title="Add to Cart">
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                 </div> 
                <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product"/>
                </Link> 
                <div className="product-bottom text-center">
                    <div className="product-name">
                        <Link to={'/product/' + product._id}><h3>{product.name}</h3></Link>
                    </div>
                    <div className="product-price"><h5>{product.price}</h5></div>
                    <div className="product-rating"><h5>{product.rating}</h5></div>  
                </div> 
            </div>
            
    )
}   
</ul>
</div>
    </section>
</div>
)
}

export default HomeScreen;