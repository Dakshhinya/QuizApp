// function Navbar({title,subtitle}) {
//   return (
//     <div className="flex justify-center border-2">
//       <div className="flex flex-col border-2">
//         <p className="font-bold text-3xl mt-2">{title}</p>
//         <p className="flex justify-center font-grey mt-2">
//           {subtitle}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React from 'react'

export default function Navbar() {
  return (
    <div className="w-screen h-20 absolute shadow-2xs">
      <p className="mt-5 px-8 font-black text-3xl text-black ">
        QuizUp
      </p>
    </div>
  )
}
