import React from 'react'


const Officescard=({image,description, bouton})=>
<div className="officescard">
<img src={image}/>
<h2 >{description}</h2>
<button>{bouton}</button>
</div>
export default Officescard