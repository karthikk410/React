import React from 'react'
import './Project.scss'
import mainimg from './images/mainimg.png'
import logo from './images/Logo.png'

function Project() {
  return (
    <div className='body'>
      <div className='img1'>
        <img src={mainimg} alt='main'/>     
      </div>
      <div>
        <h1 className='h1'>Light, Fast & Powerful</h1>
        <p className='p1'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          <br></br>
          <br></br>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>
      <div className='logo1'>
        <div className='img2'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='h2'>
          <h3>Title Goes Here</h3>
        </div>
        <div className='para2'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
      </div>
      <div className='logo2'>
        <div className='img3'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='h3'>
          <h3>Title Goes Here</h3>
        </div>
        <div className='para3'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
      </div>
      <div className='logo3'>
        <div className='img4'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='h4'>
          <h3>Title Goes Here</h3>
        </div>
        <div className='para4'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
      </div>
      <div className='logo4'>
        <div className='img5'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='h5'>
          <h3>Title Goes Here</h3>
        </div>
        <div className='para5'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
      </div>
    </div>
  );
};

export default Project;