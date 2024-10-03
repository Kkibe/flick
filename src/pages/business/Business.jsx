import React from 'react';
import '../style.css';
import BusinessPost from '../../components/business/BusinessPost';

export default function Business() {
  return (
    <div className='page'>
        <div className="wrapper">
            <BusinessPost />
            <BusinessPost />
            <BusinessPost />
            <BusinessPost />
            <BusinessPost />
            <BusinessPost />
            <BusinessPost />
            <BusinessPost />
        </div>
    </div>
  )
}
