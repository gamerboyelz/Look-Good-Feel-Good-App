//Components → App.js → index.js → index.html
import NavBar from "./routes/nav-bar/navbar.component.jsx"
import Home from "./routes/home/home.component";
import Signin from "./routes/sign-in/sign-in.component.jsx";
import { Routes, Route} from "react-router-dom";

//const App= ()=>
function App() {
const Shop = ()=>{
  return(
<div>
    Shop page
  </div>
  ) 
}

const Testpage = ()=>{
  return(
    <div>
      Test page
    </div>
  )
}
const Testpage2 = ()=>{
  return(
    <div>
     TestPage 2
    </div>
  )
}

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="testpage" element={<Testpage/>} />
        <Route path="sign-in" element={<Signin/>}></Route>
        <Route path="testpage2" element={<Testpage2/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

/*
function App() { 
  return (
    <div className="categories-container">
        <div className="category-container">
         <div className="background-image"/>
          <div className="category-body-container">
            <h2>Hats</h2>
            <p>Shop now</p>
          </div>
        </div>
        <div className="category-container">
         <div className="background-image"/>
          <div className="category-body-container">
            <h2>Jackets</h2>
            <p>Shop now</p>
          </div>
        </div>
        <div className="category-container">
         <div className="background-image"/>
          <div className="category-body-container">
            <h2>Sneakers</h2>
            <p>Shop now</p>
          </div>
        </div>
        <div className="category-container">
         <div className="background-image"/>
          <div className="category-body-container">
            <h2>Women</h2>
            <p>Shop now</p>
          </div>
        </div>
        <div className="category-container">
         <div className="background-image"/>
          <div className="category-body-container">
            <h2>Men</h2>
            <p>Shop now</p>
          </div>
        </div>
    </div>
  );
}

export default App;
 */
