import React from 'react'
import TechPost from '../../components/tech/TechPost'
import '../style.css'
export default function Tech() {
  return (
    <div className='page'>
        <div className="wrapper">
            <TechPost />
            <TechPost />
            <TechPost />
            <TechPost />
        </div>
    </div>
  )
}
