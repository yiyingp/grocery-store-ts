// reference: No BS TS #20 - Typescript/React - Setup and Properties 
// https://www.youtube.com/watch?v=gChqkchbn9o&list=PLNqp92_EXZBJ4CBroxVBJEpAXoz1g-naZ&index=39

type Product = {
    id: number;
    category: string;
    price: string;
    stocked: boolean;
    name?: string | null;
}

interface ProductListProps {
    selectedItem?: Product;
    filteredProduct: Product[];
    onEditClick: (itemId: number) => void;
    onDeleteClick: (itemId: number) => void;
}

const ProductList = ({ selectedItem, filteredProduct, onEditClick, onDeleteClick }: ProductListProps) => {
    return (
        <ul>
            {filteredProduct.map((product) => (
                <li key={product.name} className={`p-2 ${selectedItem === product ? 'w-80 my-2 bg-blue-200' : ''}`}>
                    <div>Name: {product.name}</div>
                    <div>Category: {product.category}</div>
                    <div>Price: {product.price}</div>
                    <div>
                        <button type="button" onClick={() => onEditClick(product.id)}>
                            Edit
                        </button>
                    </div>
                    <div>
                        <button type="button" onClick={() => onDeleteClick(product.id)}>
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;

// // method 2:
// const ProductList: React.FunctionComponent<{
//     selectedItem?: Product;
//     filteredProduct: Product[];
//     onSelectedItemChange: (itemId: number) => void;
// }> = ({ selectedItem, filteredProduct, onSelectedItemChange }) => {
//     return (
//         <ul>
//             {filteredProduct.map((product) => (
//                 <li key={product.name} className={`p-2 ${selectedItem === product ? 'w-80 my-2 bg-blue-200' : ''}`}>
//                     <div>Name: {product.name}</div>
//                     <div>Category: {product.category}</div>
//                     <div>Price: {product.price}</div>
//                     <button onClick={() => onSelectedItemChange(product.id)}>
//                         Select
//                     </button>
//                 </li>
//             ))}
//         </ul>
//     );
// };


//  & method 1:

// type ColorProduct = Product & {
//     color: string;
// }

// method 1 === method 2

//  & method 2:
// interface ColorProduct extends Product {color: string}


// type ButtonState = 'active' | 'inactive';
// const x: ButtonState = 'x';

// const x = undefined; // true
// const y = x == null; // true