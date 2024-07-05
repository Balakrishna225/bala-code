import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
        <div className='d-flex bg-warning text-white justify-content-around align-items-center'>
        <div>
      <h1> <Link to ='./'> E-comm website</Link></h1>
    </div>
    <div>
        <ul className='d-flex list-unstyled align-items-center'>
            <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to='./products'>products</Link></li>
            <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to='./signup'>signup</Link></li>
            <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to ='./login'>login</Link></li>
        </ul>
  
    </div>
    </div>
  )

}

export default Header
