"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SearchBar_tsx_1 = require("./SearchBar.tsx");
var ReadOnlyProduct_tsx_1 = require("./ReadOnlyProduct.tsx");
var productList = [
    { id: 0, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { id: 1, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { id: 2, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
];
function App() {
    var _a = (0, react_1.useState)(''), filterText = _a[0], setFilterText = _a[1];
    var _b = (0, react_1.useState)(null), selectedItemId = _b[0], setSelectedItemID = _b[1];
    var seletedItem = productList.find(function (p) { return p.id === selectedItemId; });
    var filteredProduct = productList.filter(function (p) { return p.name.toLowerCase().includes(filterText.toLowerCase()); });
    return (<div>
      <h1>Grocery Store</h1>

      <SearchBar_tsx_1.default filterText={filterText} onFilterTextChange={setFilterText}/>

      <ReadOnlyProduct_tsx_1.default selectedItem={seletedItem} filteredProduct={filteredProduct} onSelectedItemChange={setSelectedItemID}/>
    </div>);
}
exports.default = App;
// import { useState } from 'react';
// import SearchBar from './SearchBar';
// import ProductList from './ReadOnlyProduct';
// import ProductForm from './EditableProduct';
// const productList = [
//   {id: 0, category: "Fruits", price: "$1", stocked: true, name: "Apple"},
//   {id: 1, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//   {id: 2, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
// ];
// function App() {
//   const [filterText, setFilterText] = useState('');
//   const [psList, setPsList] = useState(productList);
//   const [isEditing, setIsEditing] = useState(false); // for show/hide editing
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [editingSessionId, setEditingSessionId] = useState(0);
//   const selectedItem = psList.find(p => p.id === selectedItemId);
//   const filteredProduct = psList.filter((product) => (
//     product.name.toLowerCase().includes(filterText.toLowerCase())
//   ));
//   function handleSaveClick(editedProduct) {
//     const updatedProducts = psList.map((product) => {
//       if (product.id === selectedItemId) {
//         const trimmedName = editedProduct.name.trim(); 
//         const trimmedPrice = editedProduct.price.trim();
//         const capitalizedCategory = editedProduct.category.trim().charAt(0).toUpperCase() + editedProduct.category.trim().slice(1) 
//         return {
//           ...editedProduct,
//           name: trimmedName,
//           price: trimmedPrice,
//           category: capitalizedCategory}
//       }
//       return product;
//     });
//     setEditingSessionId((i) => i + 1);
//     setPsList(updatedProducts);
//     setIsEditing(false);
//     setSelectedItemId(null);
//   }
//   function handleEditClick(itemId) {
//     setIsEditing(true);
//     setSelectedItemId(itemId);
//   }
//   function handleCancelClick() {
//     setIsEditing(false);
//     setSelectedItemId(null);
//   }
//   function handleDeleteClick(itemId) {
//     setPsList(
//       psList.filter(p => p.id !== itemId)
//     );
//   }
//   return (
//     <div>
//       <h1>Grecery Store</h1>
//       <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
//       {/* {!isEditing && (
//         <ProductList 
//           selectedItem={selectedItem} 
//           filteredProduct={filteredProduct} 
//           onEditClick={handleEditClick} 
//         />
//       )} */}
//       <ProductList 
//         selectedItem={selectedItem} 
//         filteredProduct={filteredProduct} 
//         onEditClick={handleEditClick} 
//         onDeleteClick={handleDeleteClick}
//       />
//       <div className="grid justify-items-center items-center">
//         {isEditing && selectedItem && (
//           <ProductForm
//             key={`${selectedItemId} - ${editingSessionId}`} 
//             {...selectedItem} 
//             onSaveClick={handleSaveClick} 
//             onCancelClick={handleCancelClick} 
//           />
//         )}
//       </div>
//     </div>
//   );
// }
// export default App;
