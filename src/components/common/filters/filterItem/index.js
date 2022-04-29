import React from 'react';
import './filteritems.css'
const FilterItem = ({filter}) => {
    return (
        <div className='filter-item'>
        {filter.icon && filter.icon}
            <div className='filter-name'>{filter.title}</div>
        </div>
    );
}

export default FilterItem;
