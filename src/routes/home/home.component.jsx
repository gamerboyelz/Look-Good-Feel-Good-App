import { Outlet } from 'react-router-dom';
import CategoryItemMainContainer from '../../components/category-item-main-container.component/category-item-main-container.component';

  //create an array of objects that create divs based on the number of title properties
  //const Home = ()=>
  function Home() { 
    const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  //outlet renders the child element of the home route under or above based on where the outlet component is places
  return (
   <div>
     <CategoryItemMainContainer categories={ categories } />
     <Outlet/>
   </div>
  );
}

export default Home;

