import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({product : {image, name, slug, price}}) => {
  return (
    <>
    <div>
      <Link href = {`/product/${slug.current}`}><a></a></Link>
      <div className="product-card">
        <img src={urlFor(image && image[0])} width={250} height={250} alt="product_image" className='product-image'/>
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
    </>
  )
}

export default Product