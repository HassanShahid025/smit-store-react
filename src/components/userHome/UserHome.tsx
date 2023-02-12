import {FaShoppingCart, FaPlus} from 'react-icons/fa'
import {useEffect} from 'react'
import Groceryusehome from '../../images/Groceryusehome.png'
import category1 from '../../images/Rectangle 1.png'
import category2 from '../../images/Rectangle 16.png'
import category3 from '../../images/Rectangle 7.png'
import category4 from '../../images/Rectangle 6.png'
import products from '../../product'

export const UserHome = () => {

    useEffect(()=>{
        
    },[])

    return(
        <div className="userHome-container">
            <header>
                <h3>SAYALANI WELFARE</h3>
                <button className='cart-icon'>
                    <FaShoppingCart/>
                </button>
            </header>
            <img src={Groceryusehome} alt="" />
            <div className="categrories">
                <h3>Shop By Category</h3>
                <div className="categories">
                    <div className="category">
                        <button>
                        <img src="data:image/jpeg;base64,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" alt="" />
                        </button>
                        <p>Grocery</p>
                    </div>
                    <div className="category">
                    <button>
                        <img src={category2} alt="" />
                        </button>
                        <p>vegetable</p>
                    </div>
                    <div className="category">
                    <button>
                        <img src={category3} alt="" />
                        </button>
                        <p>Fruits</p>
                    </div>
                    <div className="category">
                    <button>
                        <img src={category4} alt="" />
                        </button>
                        <p>Masala</p>
                    </div>
                </div>
            </div>
            <div className="products">
                {products.map((product)=> {
                    return(
                        <div className="product">
                            <div className='product-img'>
                                <img src="data:image/jpeg;base64,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" alt="" />
                            </div>

                            <div className="product-info">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                            </div>
                            <div className="product-price">
                                <h4>{`Rs.${product.price} - per ${product.quantityUnit}`}</h4>
                                <button>
                                    <FaPlus/>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}