import React from 'react';

const CategoryButton = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(name)}
      style={{
        margin: '5px',
        padding: '10px',
        backgroundColor: isActive ? 'dodgerblue' : 'lightgray',
        color: isActive ? 'white' : 'black',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
