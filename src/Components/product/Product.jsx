import React from 'react'
import './product.scss'
import Single from '../single/Single'
import { singleProduct } from '../../data.js'

const Product = () => {
    return (
        <div className='product'>
            <Single {...singleProduct} />
        </div>
    )
}

export default Product