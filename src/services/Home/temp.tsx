// {
//   /* <div className="info">
//               <div className="card_title">{item.name}</div>
//               <div className="card_location">
//                 <GrLocation />
//                 <span>{item.location}</span>
//               </div>
//             </div> */
// }

// /* .info {
//     padding: 1rem 0.5em;
//     .card_title {
//       font-size: 1.2rem;
//       font-weight: 500;
//     }
//     .card_location {
//       display: flex;
//       align-items: center;
//       svg {
//         font-size: 0.9rem;
//       }
//       span {
//         padding-left: 0ch;
//       }
//     }
//   } */

// const trendingData = [
//   {
//     name: "Breeze Through Bangkok & Pattaya",
//     offerPrice: "₹21,059",
//     price: "₹26,324",
//     location: "South Asia",
//     imgUrl:
//       "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "/",
//     tags: ["Transfers", "Stay", "2 Activities"],
//   },
//   {
//     name: "Breeze Through Bangkok & Pattaya",
//     offerPrice: "₹21,059",
//     price: "₹26,324",
//     location: "South Asia",
//     imgUrl:
//       "https://images.unsplash.com/photo-1555710619-5d5968f90af2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "/",
//     tags: ["Transfers", "Stay", "2 Activities"],
//   },
//   {
//     name: "Breeze Through Bangkok & Pattaya",
//     offerPrice: "₹21,059",
//     price: "₹26,324",
//     location: "South Asia",
//     imgUrl:
//       "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=3304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "/",
//     tags: ["Transfers", "Stay", "2 Activities"],
//   },
//   {
//     name: "Breeze Through Bangkok & Pattaya",
//     offerPrice: "₹21,059",
//     price: "₹26,324",
//     location: "South Asia",
//     imgUrl:
//       "https://images.unsplash.com/photo-1555710619-5d5968f90af2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "/",
//     tags: ["Transfers", "Stay", "2 Activities"],
//   },
// ];

// <div className="info">
//   <div className="card_title">{item.name}</div>
//   <div className="price_info">
//     <div className="price">
//       <span className="offer_price">{item.offerPrice}</span>
//       <span className="old_price">{item.price}</span>
//     </div>
//     <a href={item.url} className="view_btn">
//       VIEW
//     </a>
//   </div>
//   <div className="tags_wrapper">
//     {item.tags.map((tag, i) => (
//       <p className="tag" key={i}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 20 20"
//           fill="none"
//         >
//           <path
//             d="M6.45835 9.99996L8.81669 12.3583L13.5417 7.64163M10 18.3333C14.5834 18.3333 18.3334 14.5833 18.3334 9.99996C18.3334 5.41663 14.5834 1.66663 10 1.66663C5.41669 1.66663 1.66669 5.41663 1.66669 9.99996C1.66669 14.5833 5.41669 18.3333 10 18.3333Z"
//             stroke="#86CA71"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span>{tag}</span>
//       </p>
//     ))}
//   </div>
// </div>;

// <div className="fav_iocn">
//   <FaHeart />
// </div>;

// .info {
//   padding: 1.5rem 1rem;
//   .card_title {
//     font-size: 1.1rem;
//     font-weight: 500;
//     line-height: 1.3;
//   }
//   .price_info {
//     display: flex;
//     border-bottom: 1px solid #e6e8ec;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0.6rem 0;
//     padding-bottom: 1rem;
//     .price {
//       .offer_price {
//         font-size: 1.3rem;
//         font-weight: 500;
//         padding-right: 0.3rem;
//       }
//       .old_price {
//         text-decoration: line-through;
//         opacity: 0.4;
//       }
//     }
//     .view_btn {
//       background-color: #000;
//       padding: 0.5rem 1.2rem;
//       color: #fff;
//       border-radius: 0.2rem;
//       font-size: 0.9rem;
//     }
//   }
//   .tags_wrapper {
//     padding-top: 1rem;
//     display: flex;
//     align-items: center;
//     gap: 0.7rem;
//     .tag {
//       display: flex;
//       align-items: center;
//       gap: 0.2rem;
//     }
//   }
// }

// position: relative;
// .fav_iocn {
//   position: absolute;
//   right: 5%;
//   top: 5%;
//   background-color: #ffffff;
//   width: 35px;
//   height: 35px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   svg {
//     fill: #fd7fe9;
//   }
// }

// .info {
//   padding: 1.5rem 1rem;
//   .card_title {
//     font-size: 1.1rem;
//     font-weight: 500;
//     line-height: 1.3;
//   }
//   .price_info {
//     font-size: 0.9rem;
//     color: #3f3f3f;
//     padding-top: 0.4rem;
//   }
//   .card_footer {
//     border-top: 1px solid #3f3f3f3c;
//     margin-top: 1rem;
//     padding-top: 1rem;
//     display: flex;
//     justify-content: space-between;
//     .date {
//       font-size: 0.9rem;
//       opacity: 0.5;
//     }
//   }
// }

{
  /* <div className="info">
<div className="card_title">{item.title}</div>
<div className="price_info">
  <span>Under {item.price}</span>
</div>
<div className="card_footer">
  <div className="date">{item.date}</div>
  <div className="ratings">{item.rating}</div>
</div>
</div> */
}
