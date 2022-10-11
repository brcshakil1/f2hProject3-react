import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';
import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title= 'Menu that fits you palatte' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_tea flex__center">
        <p className='app__specialMenu-menu_heading'> Tea</p>
        <div className="app__specialMenu-menu_items">
          {data.tea.map((tea, index) => (
            <MenuItem key={tea.title+index} title={tea.title} price={tea.price} tags={tea.tags}/>
            ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img ">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_coffee flex__center">
        <p className='app__specialMenu-menu_heading'>Coffee</p>
        <div className="app__specialMenu-menu_items">
          {data.coffees.map((coffees, index) => (
            <MenuItem key={coffees.title+index} title={coffees.title} price={coffees.price} tags={coffees.tags}/>
            ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:"15px"}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
