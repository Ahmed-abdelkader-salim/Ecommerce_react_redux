import { Link} from 'react-router-dom'
import { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { ImSpinner6 } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeFromCart, updateQuantity } from '../store/cartSlicer'; 
import Banner from '../common/Banner'
const Cart = () => {
    const dispatch = useDispatch();

    const {
        data: cartProducts,
        totalAmount,
        deliveryCharge,
    } = useSelector((state) => state.cart);
    
    useEffect(() => {
      dispatch(getCartTotal()); // Make sure to call the action creator
    }, [dispatch,cartProducts]);


    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const increaseQty = (cartProductId, currentQty) =>{
        const newQty = currentQty + 1;
        dispatch(updateQuantity({id:cartProductId, quantity:newQty}));
    }
    const descQty = (cartProductId, currentQty) =>{
        const newQty = Math.max(currentQty - 1);
        dispatch(updateQuantity({id:cartProductId, quantity:newQty}));
    }
    return (
        <>

        <Banner title={'Cart'} link={'Cart'}/>

        <div className="shopping-cart py-20">
    
                {cartProducts.length === 0 ? (
                    <>
                    <div className="flex flex-col justify-center align-center">
                        <h3 className='text-4xl text-center mb-4'>Your cart is empty</h3>
                        <div className='text-center mt-4'>

                        <Link to='/shop' className='bg-green-700 hover:bg-green-800  text-white p-3 px-3 text-center'>Keep shopping</Link>
                        </div>
                    </div>
                    </>

                ) : (
                <>
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-full">
                            <div className="shoppingCart-table mb-8 overflow-x-auto">
                                <table className='min-w-full text-center table-auto'>
                                    <thead>
                                        <tr className='border-b border-[#ebebeb]'>
                                            <th className='text-left'>Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                    {cartProducts.map((product) => (
                                    <tr key={product.id}>
                                        <td className='cart-item'>
                                            <img src={product.img} alt="img" className='w-14 h-14' />
                                            <h5 className='text-xl inline-block'>{product.title}</h5>
                                        </td>
                                        <td className='font-bold price'>
                                            {product.price}
                                        </td>
                                        <td className='text-center'>
                                            <div className="quantity">
                                                <div className="pro-qty ">
                                                    <span className='dec qty' onClick={()=> descQty(product.id, product.quantity)}>-</span>
                                                    <input type="text" value={product.quantity || 1}/>
                                                    <span className='inc qty '  onClick={()=> increaseQty(product.id, product.quantity)}  >+</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='Total font-semibold'>
                                            {product.totalPrice}
                                        </td>
                                        <td className='delete'>
                                            <span onClick={() => handleRemoveFromCart(product.id)} className='font-bold text-red-600 cursor-pointer'>
                                                <FaTrashAlt/>
                                            </span>
                                        </td>
                                    </tr>

                                    ))}
                                
                            </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="shopping-cart-btns mb-4 flex justify-between items-center ">
                            <Link to="" className='text-gray-500 font-bold text-sm bg-gray-100 px-3 py-3'>
                            CONTINUE SHOPPING
                            </Link>
                            <Link to="" className='text-gray-500 font-bold text-sm bg-gray-100 px-3 py-3'>
                            <span className='loading inline-block px-2' ><ImSpinner6 /></span>
                            Upadate Cart
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="discount-code mt-4">
                            <h5 className='text-2xl mb-6 font-bold'>Discount Codes</h5>
                            <form>
                                <input type="text" className='border text-center p-2 mr-2 outline-none border-gray-300 rounded' placeholder='Enter your coupon code' />
                                <button type='submit' className='text-white bg-gray-600 p-2 px-2 mr-2 text-center'>Apply coupon</button>
                            </form>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="checkout mt-6 p-8 pt-5 bg-gray-100">
                            <h5 className='mb-5 text-xl font-bold text-black'>Cart Total</h5>
                            <ul>
                                <li className='border-b font-bold border-[#ebebeb] text-black pb-4 mb-4'>
                                    Shopping Charge
                                    <span className='float-right text-red-600 font-bold'>${deliveryCharge}</span>
                                </li>
                                <li className='border-b font-bold border-[#ebebeb] text-black pb-4 mb-4'>
                                    Subtotal
                                    <span className='float-right text-red-600 font-bold'>${totalAmount}</span>
                                </li>
                                <li className='font-bold text-black pb-4 mb-4'>
                                total Amount
                                    <span className='float-right text-red-600 font-bold'>${totalAmount + deliveryCharge}</span>
                                </li>
                            </ul>
                            <Link to='' className='bg-green-600 text-white font-bold px-3 py-3 text-center block w-full'> PROCEED TO CHECKOUT </Link>
                        </div>
                    </div>
                
                    </div>
                                
                </div>
                </>

                )}
        </div>
        
    </>
    )
}

export default Cart