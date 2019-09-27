import React from 'react';
import logo from './logo.svg';
import './App.css';
import Servicecard from './ServiceCard'
import FeatureCard from './featurecard'
import Officescard from './offices'
const exampleProps ={
  Category:'For Patients',
  title:'Find a doctor, book a visit and <br/>solve any Health-related doubt ',
  background:'#5dc60',
  image:'https://www.docplanner.com/img/screen-marketplace@2x.png'
}

const exampleFeatureCardProps={
icon:'https://www.docplanner.com/img/patients.png',
title:'20 million unique patients',
description:'visit us every month'
}


const CountryOptions=()=>(
<select className="service-card-options">
  <option>CHOOSE COUNTRY</option>
  <option> Argentina</option>
  <option> Australia</option>
  <option> Tunisia</option>
  <option>Italy</option>
  <option>France</option>
  <option>Spain</option>
  <option>Portugal</option>
</select>
)


const App=()=> 
  <div>
    <div className="features">
      <div>
      <h1 className='titre'> The World's biggest health care plateform</h1>
      <p>We work from 6 offices all over the world, bringing Docplanne<br/> 
      Group to life in almost 20 countries</p>
      </div>
      <FeatureCard
      title={<span> Leader in 8 countries</span>}
      icon='https://www.docplanner.com/img/flag.png'
      description="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina"/>
      <FeatureCard
      title="600000 appointements"
      icon='https://www.docplanner.com/img/visits.png' 
      description="books last month"/>
      <FeatureCard
      title='30 million unique patients'
      icon='https://www.docplanner.com/img/patients.png'
      description="visit us every month"/>
      <FeatureCard
      title='2 million active doctors'
      icon='https://www.docplanner.com/img/doctors.png'
      description="trust in our solutions"/>
    </div>
    <div className='classServiceCard'>
    <Servicecard
    innerJAX={<CountryOptions/>}
    service={exampleProps}/>
    <Servicecard
    service={{
      title:'Save time managing visits and cut no-shows by half',
      Category:'For Doctors',
      background:'#4293db',
      image:'https://www.docplanner.com/img/screen-saas@2x.png'
    }}/>
</div>

<div className='classeOffices'>
  <div className='warsaw'>

  <Officescard
  image='https://www.docplanner.com/images/warsaw.png'
  description='Warsaw'
  bouton='SEE OPENING'
  />
</div>
<div>
<Officescard
  image='https://www.docplanner.com/images/barcelona.png'
  description='Barcelona'
  bouton='SEE OPENING'
  />
</div>
<div>
<Officescard
  image='https://www.docplanner.com/images/istanbul.png'
  description='Istanbul'
  bouton='SEE OPENING'
  />
</div>
<div>

<Officescard
  image='https://www.docplanner.com/images/rome.png'
  description='Rome'
  bouton='SEE OPENING'/>

</div>
</div>

</div>
  
  
export default App;
