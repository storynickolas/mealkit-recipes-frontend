import '../App.css';
import React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Navbar({ handlePage, addItem }) {

  const shortest = () => {
    handlePage('/quick')
  }

  const longest = () => {
    handlePage('/by_time')
  }

  const chicken = () => {
    handlePage('/chicken')
  }

  const veggie = () => {
    handlePage('/veggie')
  }

  return (

    <ButtonGroup size="large" aria-label="large button group" style={{backgroundColor: "white"}}>
            <Button onClick={() => shortest()}>Shortest</Button>
            <Button onClick={() => longest()}>Longest</Button>
            <Button onClick={() => chicken()}>Chicken</Button>
            <Button onClick={() => veggie()}>Veggie</Button>
            <Button onClick={() => addItem()}>Add a Item</Button>
    </ButtonGroup>

  );
}

export default Navbar;