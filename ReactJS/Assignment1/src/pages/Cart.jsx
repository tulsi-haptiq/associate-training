// import { useSelector } from "react-redux";

// export default function Cart() {
//   const { cartItems, totalPrice } = useSelector((state) => state.cart);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map(item => (
//               <li key={item.id} className="mb-2">
//                 {item.name} x {item.quantity} - ₹{item.price * item.quantity}
//               </li>
//             ))}
//           </ul>
//           <h3 className="text-lg font-bold mt-4">Total: ₹{totalPrice}</h3>
//         </div>
//       )}
//     </div>
//   );
// }
