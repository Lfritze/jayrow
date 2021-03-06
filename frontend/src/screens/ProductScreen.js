import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {

  const [qty, setQty] = useState(1)
  const productDetails = useSelector(state => state.productDetails);
  const {product, loading, error} = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  },[])

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

  return (    
    <div>
      <div className="back-to-results">
        <Link to="/">Return Home</Link>
      </div>
      {loading ? <div>Loading...</div>:
      error ? <div>{error}</div>:
      (
        <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
      <div className="details-info">
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>
            Condition:
            <div>
            {product.rating} 
            </div>
          </li>
          <li>
            <b>${product.price}</b>
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
            <b>Price: ${product.price}</b>
          </li>
          <li>
            <b>Status: {product.countInStock > 0 ? "In Stock": "Unavailable"}</b>
          </li>
          <li>
            {/* The value selected will be put in the qty variable */}
            <b>Qty:</b> <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
              {[...Array(product.countInStock).keys()].map(x => 
                <option key={x + 1} value={x+1}>{x + 1}</option>
                )}
            </select>
          </li>
          <li>
            {product.countInStock > 0 &&
              <button onClick={handleAddToCart} className="button">Add to Cart</button>
            }
          </li>
        </ul>
      </div>
    </div>
      )
      }
      
  </div>
  )
}

export default ProductScreen;