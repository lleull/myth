import React from 'react';

import { useNavigate } from 'react-router';
import './menu-item.styles.scss';

export const withRouter = (Component) =>{
  const Wrapper = (props) =>{
      const history = useNavigate();
      return <Component history={history} {...props}/>
  } 
  return Wrapper;
}


const MenuItem = ({ title, imageUrl, size, history, linkUrl,match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  
  </div>

);

export default withRouter(MenuItem)




