import React, {Fragment} from 'react';
import './App.css';

import InputProducts from './components/InputProducts';
import ListProducts from './components/ListProducts';

function App() {
  return (
   <Fragment>
     <div>
       <InputProducts />
       <ListProducts />
     </div>
   </Fragment>
  );
}

export default App;
