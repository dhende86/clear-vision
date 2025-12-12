

import React from 'react';
import { NavLink } from 'react-router-dom';  // ***CHANGED*** swapped Link for NavLink
import { glasseslogo, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';        // page labels
import navRoutes from '../utils/navRoutes';     // label-to-path mapping

const Navbar = () => {
  console.log('Navbar data:', navLists, navRoutes); // debug import correctness

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      {/* Logo linking back to homepage */}
      <NavLink to="/">{/* ***CHANGED*** use NavLink for active styling */}
        <img src={glasseslogo} alt="Logo" width={100} height={104} />
      </NavLink>

      {/* Center navigation links */}
      <nav className="flex flex-1 justify-center max-sm:hidden">
        {navLists.map((label) => {
          const path = navRoutes[label];
          if (!path) {
            console.error(`No route for: ${label}`);
            return null;
          }
          return (
            <NavLink
              key={label}                      // unique key
              to={path}                        // route path
              className="px-5 text-sm text-white transition-all"

            >
              {label}
            </NavLink>
          );
        })}
      </nav>

      {/* Right-side icons */}
      <div className="flex items-baseline gap-6 max-sm:justify-end max-sm:flex-1">
        <img src={searchImg} alt="Search icon" width={18} height={18} />
        <img src={bagImg}    alt="Bag icon"    width={18} height={18} />
      </div>
    </header>
  );
};

export default Navbar;















// import { Link } from 'react-router-dom';
// import { glasseslogo, bagImg, searchImg } from '../utils';
// import { navLists } from '../constants';
// import { navRoutes } from '../utils/navRoutes';

// const Navbar = () => {

    
//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
//       <nav className="flex w-full screen-max-width">

// 	  <Link to="/">
// <img src={glasseslogo} alt="glasses" width={100} height={104} />	      
// 	  </Link>

//         <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//               <Link  key={nav} to={navRoutes[nav]} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
//               {nav}
//             </Link>
//           ))}
//         </div>

//         <div className="flex items-baseline gap-10 max-sm:justify-end max-sm:flex-1">
//           <img src={searchImg} alt="search" width={18} height={18} />
//           <img src={bagImg} alt="bag" width={18} height={18} />
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar
