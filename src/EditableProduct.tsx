import { useState } from 'react';

interface Product {
    id: number;
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  }

type ProductFormProps = Product & {
    onSaveClick: (editedProduct: Product) => void;
    onCancelClick: () => void;
}

const ProductFrom = ({ id, name, category, price, stocked, onSaveClick, onCancelClick }: ProductFormProps) => {
    const [editedProduct, setEditedProduct] = useState<Product>({ id, name, category, price, stocked });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        }));
    }
    
    return (
        <div className='w-80 bg-red-100'>
            <form className='font-bold' key={id}>
                <h2 className='text-lg text-red-500 px-2 py-1 mx-1 my-1'>{editedProduct.name}</h2>
                <div className='m-2 block'>Id: {editedProduct.id}</div>
                <div className='m-2 block'>
                    Category: 
                    <input 
                        name='category' 
                        type='text' 
                        value={editedProduct.category} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className='m-2 block'>
                    Price: 
                    <input 
                        name='price' 
                        type='text' 
                        value={editedProduct.price} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className='m-2 block'>
                    Stocked: 
                    <input 
                        name='stocked' 
                        type='checkbox' 
                        checked={editedProduct.stocked} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div>
                    <button type="button" onClick={() => onSaveClick(editedProduct)}>
                        Save
                    </button>
                </div>
                <div>
                    <button type="button" onClick={onCancelClick}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductFrom;