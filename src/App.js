import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { Container} from 'react-bootstrap';
import Header from './components/Header';
import Category from './components/Category';
import Cards from './components/Cards';
import {items} from './items'
function Button(props) {
  // 👇️ expects single child element
  return React.Children.only(props.children);
}
function App() {
  const [itemsData , setItemsData] = useState(items)
  const allcategory =['All',...new Set(items.map((i)=>i.category))]
  const filterbyCategory = (cat) => {
    if (cat === "All") {
      setItemsData(items)
    } 
    else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
    }
  }


  return (
    <div className="font color-body">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header/>
        <Category filterbyCategory={filterbyCategory} allcategory={allcategory}/>
        <Cards props={itemsData}/>
      </Container>
    </div>
    
  )
}

export default App;
