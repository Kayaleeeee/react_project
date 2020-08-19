import React from "react";
import ItemListContainer from "./container/ItemListContainer";
import LoginContainer from "./container/LoginContainer";

import MainImageContainer from "./container/MainImageContainer";
import ItemAllMain from "./view/menu/ItemAllMain";


import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



import Selected_item_Container from "./container/Selected_item_Container";
import Footer from "./view/menu/Footer";
import MiddleContentView from "./view/MiddleContentView";

function App() {
  return (
    <div>
      <LoginContainer />
      <MainImageContainer />
      <ItemListContainer />
      <ItemAllMain />
      <Footer />
      <MiddleContentView />
    </div>
  );
}

export default App;
