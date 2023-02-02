//Components → App.js → index.js → index.html
import NavBar from "./routes/nav-bar/navbar.component.jsx"
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import { Routes, Route} from "react-router-dom";

//const App= ()=>
function App() {

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
        <Route path="auth" element={<Authentication/>}></Route>
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
