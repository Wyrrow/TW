import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from "./components/AddToList"

export interface IState{
  items:{
    name:string,
    author:string,
    url:string,
    description?:string
  }[]
}

function App() {

  const [items, setItems] = useState<IState["items"]>([
    {
      name:"Lagom",
      author:"Niki Brantmark",
      url:"https://www.madrasshoppe.com/83895-home_default/lagom-the-swedish-art-of-living-a-balanced-happy-life-niki-brantmark.jpg",
      description:"The Swedish concept of Lagom (pronounced 'lah-gom) roughly translates to 'not too little, not too much, just right."
    }
  ])


  return (
    <div className="App">
      <h1>Books what I want to read!</h1>
      <List items={items}/>
      <AddToList items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
