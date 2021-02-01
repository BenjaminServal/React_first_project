import React from 'react'

const Phone = (props) =>(
  <a className="btn btn-danger"  href={`callto:${props.phone}`}>Appeller</a>
);


export default Phone;