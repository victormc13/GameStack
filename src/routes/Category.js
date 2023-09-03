import React from 'react'
import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <div>
      <h2>Category</h2>
      <ul>
        <li>
          <NavLink to='/category1'>Category1</NavLink>
        </li>
        <li>
          <NavLink to='/category2'>Category2</NavLink>
        </li>
        <li>
          <NavLink to='/category3'>Category3</NavLink>
        </li>
        <li>
          <NavLink to='/category4'>Category4</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Category