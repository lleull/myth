import React from 'react';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import './directory.styles.scss';

import selectSections from '../../redux/directory/directory.selector';


const Directory = ({sections}) => {

    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
      
    </div>
}

const mapToDispatchProps = createStructuredSelector({
  sections: selectSections
})

 
export default connect( mapToDispatchProps) (Directory);
