import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {state} from 'react'

function Search(){
    const searchBox = {marginLeft: "50%"};
    return(
    <form>
    <label>
        Name:
        <input style={searchBox} type="text" name="name" />
    </label>
  <input type="submit" value="Submit" onClick={console.log("inpundhitt")}/>
</form>
    )
    
}

export default Search;