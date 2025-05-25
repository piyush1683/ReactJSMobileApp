import React, { useState, useEffect } from 'react';

export default function Button() {
  return (
    <button onClick={() => handleClick()}>
        Get All trade information
    </button>
  );
}

function handleClick() {
    alert('Fetching trade information...');
    console.log('Fetching trade information...');
      try{
        fetch('http://localhost:8080/trade').then(resp => resp.json())
        .then(data => {alert(JSON.stringify(data))});
        }catch (error) {
            console.error('Error fetching trade information:', error);
            alert('Error fetching trade information');
        }; 
}