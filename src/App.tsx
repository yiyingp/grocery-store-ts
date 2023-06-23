import { useState } from 'react';
import SearchBar from './SearchBar.tsx';
import ProductList from './ReadOnlyProduct.tsx';
import ProductForm from './EditableProduct.tsx'

interface Product {
  id: number;
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

const productList: Product[] = [
  {id: 0, category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {id: 1, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {id: 2, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
];

function App() {
  const [filterText, setFilterText] = useState<string>('');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [psList, setPsList] = useState<Product[]>(productList);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingSessionId, setEditingSessionId] = useState<number>(0);

  const selectedItem = psList.find(p => p.id === selectedItemId);

  const filteredProduct = psList.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()));

  function handleSaveClick(updatedProduct: Product) {
    const updatedProducts = psList.map((product) => {
      if (product.id === selectedItemId) {
        const trimmedName = updatedProduct.name.trim(); 
        const trimmedPrice = updatedProduct.price.trim();
        const capitalizedCategory = updatedProduct.category.trim().charAt(0).toUpperCase() + updatedProduct.category.trim().slice(1) 
        
        return {
          ...updatedProduct,
          name: trimmedName,
          price: trimmedPrice,
          category: capitalizedCategory
        }
      }

      return product;
    });

    setEditingSessionId((i) => i + 1);
    setPsList(updatedProducts);
    setIsEditing(false);
    setSelectedItemId(null);
  }

  function handleEditClick(itemId: number) {
    setIsEditing(true);
    setSelectedItemId(itemId);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setSelectedItemId(null);
  }

  function handleDeleteClick(itemId: number){
    setPsList(psList.filter((p) => p.id != itemId));
  }

  return (
    <div>
      <h1>Grocery Store</h1>

      <SearchBar 
        filterText={filterText} 
        onFilterTextChange={setFilterText}
      />

      <ProductList 
        selectedItem={selectedItem}
        filteredProduct={filteredProduct}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />

      <div>
        {isEditing && selectedItem && (
          <ProductForm 
            key={`${selectedItemId} - ${editingSessionId}`}
            {...selectedItem}
            onSaveClick={handleSaveClick}
            onCancelClick={handleCancelClick}
          />
        )}
      </div>
    </div>
  )
}

export default App;