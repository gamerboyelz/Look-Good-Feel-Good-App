import './category-item-main-container.component.scss'
import CategoryItem from '../category-items/category-item.component.jsx'

const CategoryItemMainContainer = ({categories}) => {
  return (
    <div className="category-item-main-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryItemMainContainer;
