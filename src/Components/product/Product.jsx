import React from 'react'
import './product.scss'
import Single from '../single/Single'
import { singleProduct } from '../../data'

const Product = () => {
    return (
        <div className='product'>
            <Single {...singleProduct} />
            <Single {...singleProduct} />
        </div>
    )
}

export default Product