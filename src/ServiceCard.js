import React from 'react'

const Servicecard=({ innerJAX, service:{ background , Category, title,  image }})=>


<div className='service-card' style={{background:background}}>
<p className='category'>{Category}</p>
<h1 className='title'>{title} </h1>
{ innerJAX}
<img className='screen' src={image}/>
</div>

export default Servicecard
