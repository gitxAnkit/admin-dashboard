import React from 'react'
import './user.scss'
import Single from '../single/Single'
import { singleUser } from '../../data'

const User = () => {
    return (
        <div className='user'>
            Users
            <Single {...singleUser} />
        </div>
    )
}

export default User