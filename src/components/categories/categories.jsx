import { Stack } from "@mui/material"
import { categories } from '../../constant'

const Category = ({selectedCategoryHandler, selectedCategory}) => {
  return <Stack direction={'row'} className="category">
      {categories.map(item => (
        <button key={item.name} className={`category-btn ${selectedCategory === item.name && 'selected'}`} onClick={() => selectedCategoryHandler(item.name)}>
            <span>{item.icon}</span>
            <span>{item.name}</span>
        </button>      
      ))}
    </Stack>
}

export default Category