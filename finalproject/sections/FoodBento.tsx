// "use client";
// import React, { useState } from "react";
// import { useRef } from "react";
// import Image from "next/image";
// import { FOOD_ITEMS } from "@/data/constants";
// import { Heart } from "lucide-react";

// const FoodBento: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [favorites, setFavorites] = useState<string[]>([]);

//   const dessert = FOOD_ITEMS.find((i) => i.category === "dessert");
//   const vegetable = FOOD_ITEMS.find((i) => i.category === "vegetable");
//   const soup = FOOD_ITEMS.find((i) => i.category === "soup");
//   const fruit = FOOD_ITEMS.find((i) => i.category === "fruit");
//   const egg = FOOD_ITEMS.find((i) => i.category === "egg");
//   const fish = FOOD_ITEMS.find((i) => i.category === "fish");
//   const rice = FOOD_ITEMS.find((i) => i.category === "rice");
//   const noodles = FOOD_ITEMS.find((i) => i.category === "noodles");

//   const FoodCard = ({ item, gridArea }: { item: any; gridArea: string }) => {
//     const isFav = favorites.includes(item.title);
//     return (
//       <div
//         style={{ gridArea }}
//         className="relative w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border"
//       >
//         <Image
//           src={item.image}
//           alt={item.title}
//           width={500}
//           height={300}
//           priority
//           className="object-cover w-full h-full"
//         />
//         <Heart
//           onClick={(e) => {
//             e.stopPropagation();
//             setFavorites((pre) =>
//               isFav ? pre.filter((t) => t !== item.title) : [...pre, item.title]
//             );
//           }}
//           className={`absolute top-2 z-10 right-2 w-6 h-6 cursor-pointer transition ${
//             isFav
//               ? "fill-red-500 text-red-500"
//               : "text-white hover:text-red-400"
//           }`}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition">
//           <div className="absolute bottom-2 left-2 text-white">
//             <h3 className="font-bold">{item.title}</h3>
//             <p className="text-xs">{item.category}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen py-20 px-4"
//       style={{
//         background:
//           "linear-gradient(135deg, #ec8b2f, #ef7031, #ee5a30, #ca5d35)",
//       }}
//     >
//       <div className="text-center mb-12">
//         <h2 className="text-7xl font-extrabold bg-gradient-to-r from-orange-100 via-yellow-100 to-white bg-clip-text text-transparent mb-4">
//           Món ngon mỗi ngày
//         </h2>
//         <p className="text-2xl text-gray-700">
//           Khám phá thực đơn đầy màu sắc và bổ dưỡng cho bé
//         </p>
//       </div>

//       <div className="relative max-w-full mx-auto">
//         <div className="food-grid p-8 bg-gray-100 rounded-3xl shadow-2xl w-full">
//           {noodles && <FoodCard item={noodles} gridArea="noodles" />}
//           {dessert && <FoodCard item={dessert} gridArea="dessert" />}
//           {vegetable && <FoodCard item={vegetable} gridArea="vegetable" />}
//           {soup && <FoodCard item={soup} gridArea="soup" />}
//           {fruit && <FoodCard item={fruit} gridArea="fruit" />}
//           {egg && <FoodCard item={egg} gridArea="egg" />}
//           {fish && <FoodCard item={fish} gridArea="fish" />}
//           {rice && <FoodCard item={rice} gridArea="rice" />}
//         </div>
//       </div>

//       <style jsx>{`
//         .food-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           grid-template-rows: repeat(4, 200px);
//           gap: 16px;
//           grid-template-areas:
//             "dessert vegetable vegetable soup"
//             "dessert rice      rice      soup"
//             "fruit   rice      rice      noodles"
//             "fruit   fish      egg      egg";
//         }

//         @media (max-width: 1024px) {
//           .food-grid {
//             grid-template-rows: repeat(4, 120px);
//             gap: 12px;
//           }
//         }

//         @media (max-width: 768px) {
//           .food-grid {
//             grid-template-columns: repeat(2, 1fr);
//             grid-template-rows: repeat(6, 160px);
//             gap: 10px;
//             grid-template-areas:
//               "rice    rice"
//               "rice    rice"
//               "dessert fruit"
//               "vegetable soup"
//               "egg     fish"
//               "egg     fish";
//           }
//         }

//         @media (max-width: 480px) {
//           .food-grid {
//             grid-template-columns: 1fr;
//             grid-template-rows: repeat(7, 200px);
//             grid-template-areas:
//               "rice"
//               "dessert"
//               "fruit"
//               "vegetable"
//               "soup"
//               "egg"
//               "fish";
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FoodBento;
