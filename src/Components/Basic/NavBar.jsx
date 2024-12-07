import { useState } from "react";

const Navbar = () => {
  // Estados para mostrar/ocultar los menús
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu=()=> setIsMenuOpen(false);
  

  return (
    <nav className="fixed top-8 flex left-0 w-full h-14 justify-between px-2 py-3 bg-transparent text-white z-50">
      {/* Menú hamburguesa */}
      <button
        className="text-orange-500"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          width="57"
          height="55"
          viewBox="0 0 57 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3999 16H38.3454"
            stroke="url(#paint0_linear_2617_3467)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M11.3999 27H38.3454"
            stroke="url(#paint1_linear_2617_3467)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M11.3999 39H38.3454"
            stroke="url(#paint2_linear_2617_3467)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2617_3467"
              x1="3.03428"
              y1="15.9469"
              x2="3.05341"
              y2="17.6209"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5722" />
              <stop offset="0.666667" stopColor="#F97316" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2617_3467"
              x1="3.03428"
              y1="26.9469"
              x2="3.05341"
              y2="28.6209"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5722" />
              <stop offset="0.666667" stopColor="#F97316" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2617_3467"
              x1="3.03428"
              y1="38.9469"
              x2="3.05341"
              y2="40.6209"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5722" />
              <stop offset="0.666667" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
      </button>

       {/* Fondo opaco cuando el menú está abierto */}
       {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0" 
          onClick={closeMenu}
        ></div>
      )}

      {/* Menú desplegable */}
      {isMenuOpen && (
  <div className="fixed inset-0 bg-gradient-to-b from-[#FF5722] to-[#F97316] text-white p-4 shadow-md sm:inset-x-0 sm:inset-y-0 sm:w-[50%] sm:right-0 lg:w-[25%] flex flex-col  items-center">
    <button 
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      onClick={() => setIsMenuOpen(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>  

    <ul className="mt-4 w-full">
      <li className="text-center">
        <div className="cursor-pointer flex justify-center mb-2">
          <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" alt="user" className="w-10 h-10 rounded-full"/>
        </div>
        <p className="text-sm text-white">user@email.com</p>
      </li>
      <li className="w-full">
        <a className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2 text-sm font-medium text-center" href="/home">
          Sign In
        </a>
      </li>
      <li className="w-full">
        <a className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2 text-sm font-medium text-center" href="/home">
          Sign Up
        </a>
      </li>
      <li className="w-full">
        <a className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2 text-sm font-medium text-center" href="/home">
          Help
        </a>
      </li>
    </ul>
  </div>
)}


      <svg width="169" height="54" viewBox="0 0 169 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.052 14.98V40H24.948V22.864L17.316 40H14.472L6.804 22.864V40H2.7V14.98H7.128L15.912 34.6L24.66 14.98H29.052ZM38.3341 17.536C37.5901 17.536 36.9661 17.284 36.4621 16.78C35.9581 16.276 35.7061 15.652 35.7061 14.908C35.7061 14.164 35.9581 13.54 36.4621 13.036C36.9661 12.532 37.5901 12.28 38.3341 12.28C39.0541 12.28 39.6661 12.532 40.1701 13.036C40.6741 13.54 40.9261 14.164 40.9261 14.908C40.9261 15.652 40.6741 16.276 40.1701 16.78C39.6661 17.284 39.0541 17.536 38.3341 17.536ZM40.3501 20.164V40H36.2461V20.164H40.3501ZM57.5463 19.84C59.1063 19.84 60.4983 20.164 61.7223 20.812C62.9703 21.46 63.9423 22.42 64.6383 23.692C65.3343 24.964 65.6823 26.5 65.6823 28.3V40H61.6143V28.912C61.6143 27.136 61.1703 25.78 60.2823 24.844C59.3943 23.884 58.1823 23.404 56.6463 23.404C55.1103 23.404 53.8863 23.884 52.9743 24.844C52.0863 25.78 51.6423 27.136 51.6423 28.912V40H47.5383V20.164H51.6423V22.432C52.3143 21.616 53.1663 20.98 54.1983 20.524C55.2543 20.068 56.3703 19.84 57.5463 19.84ZM80.7092 19.84C82.2452 19.84 83.6012 20.152 84.7772 20.776C85.9772 21.376 86.9132 22.132 87.5852 23.044V20.164H91.7252V40.324C91.7252 42.148 91.3412 43.768 90.5732 45.184C89.8052 46.624 88.6892 47.752 87.2252 48.568C85.7852 49.384 84.0572 49.792 82.0412 49.792C79.3532 49.792 77.1212 49.156 75.3452 47.884C73.5692 46.636 72.5612 44.932 72.3212 42.772H76.3892C76.7012 43.804 77.3612 44.632 78.3692 45.256C79.4012 45.904 80.6252 46.228 82.0412 46.228C83.6972 46.228 85.0292 45.724 86.0372 44.716C87.0692 43.708 87.5852 42.244 87.5852 40.324V37.012C86.8892 37.948 85.9412 38.74 84.7412 39.388C83.5652 40.012 82.2212 40.324 80.7092 40.324C78.9812 40.324 77.3972 39.892 75.9572 39.028C74.5412 38.14 73.4132 36.916 72.5732 35.356C71.7572 33.772 71.3492 31.984 71.3492 29.992C71.3492 28 71.7572 26.236 72.5732 24.7C73.4132 23.164 74.5412 21.976 75.9572 21.136C77.3972 20.272 78.9812 19.84 80.7092 19.84ZM87.5852 30.064C87.5852 28.696 87.2972 27.508 86.7212 26.5C86.1692 25.492 85.4372 24.724 84.5252 24.196C83.6132 23.668 82.6292 23.404 81.5732 23.404C80.5172 23.404 79.5332 23.668 78.6212 24.196C77.7092 24.7 76.9652 25.456 76.3892 26.464C75.8372 27.448 75.5612 28.624 75.5612 29.992C75.5612 31.36 75.8372 32.56 76.3892 33.592C76.9652 34.624 77.7092 35.416 78.6212 35.968C79.5572 36.496 80.5412 36.76 81.5732 36.76C82.6292 36.76 83.6132 36.496 84.5252 35.968C85.4372 35.44 86.1692 34.672 86.7212 33.664C87.2972 32.632 87.5852 31.432 87.5852 30.064ZM97.5476 29.992C97.5476 28 97.9556 26.236 98.7716 24.7C99.6116 23.164 100.74 21.976 102.156 21.136C103.596 20.272 105.18 19.84 106.908 19.84C108.468 19.84 109.824 20.152 110.976 20.776C112.152 21.376 113.088 22.132 113.784 23.044V20.164H117.924V40H113.784V37.048C113.088 37.984 112.14 38.764 110.94 39.388C109.74 40.012 108.372 40.324 106.836 40.324C105.132 40.324 103.572 39.892 102.156 39.028C100.74 38.14 99.6116 36.916 98.7716 35.356C97.9556 33.772 97.5476 31.984 97.5476 29.992ZM113.784 30.064C113.784 28.696 113.496 27.508 112.92 26.5C112.368 25.492 111.636 24.724 110.724 24.196C109.812 23.668 108.828 23.404 107.772 23.404C106.716 23.404 105.732 23.668 104.82 24.196C103.908 24.7 103.164 25.456 102.588 26.464C102.036 27.448 101.76 28.624 101.76 29.992C101.76 31.36 102.036 32.56 102.588 33.592C103.164 34.624 103.908 35.416 104.82 35.968C105.756 36.496 106.74 36.76 107.772 36.76C108.828 36.76 109.812 36.496 110.724 35.968C111.636 35.44 112.368 34.672 112.92 33.664C113.496 32.632 113.784 31.432 113.784 30.064Z" fill="#F97316"/>
<mask id="path-2-outside-1_2597_5124" maskUnits="userSpaceOnUse" x="127" y="8" width="38" height="39" fill="black">
<rect fill="white" x="127" y="8" width="38" height="39"/>
<path d="M131.08 9.36V13.12H160.76V9.36H131.08ZM133.92 19.96V23.08H142.24V19.96H133.92ZM133.04 24.56V27.68H142.28V24.56H133.04ZM149.48 24.56V27.68H158.84V24.56H149.48ZM149.48 19.96V23.08H157.88V19.96H149.48ZM132.92 35V38.6H156.88V35H132.92ZM131.44 40.6V44.44H157.2V40.6H131.44ZM143.52 10.8V28.12H148.2V10.8H143.52ZM132 29.32V33.08H154.88V45.72H159.64V29.32H132ZM128.36 14.76V23.92H132.6V18.44H159.24V23.92H163.68V14.76H128.36Z"/>
</mask>
<path d="M131.08 9.36V13.12H160.76V9.36H131.08ZM133.92 19.96V23.08H142.24V19.96H133.92ZM133.04 24.56V27.68H142.28V24.56H133.04ZM149.48 24.56V27.68H158.84V24.56H149.48ZM149.48 19.96V23.08H157.88V19.96H149.48ZM132.92 35V38.6H156.88V35H132.92ZM131.44 40.6V44.44H157.2V40.6H131.44ZM143.52 10.8V28.12H148.2V10.8H143.52ZM132 29.32V33.08H154.88V45.72H159.64V29.32H132ZM128.36 14.76V23.92H132.6V18.44H159.24V23.92H163.68V14.76H128.36Z" fill="#FAFCFC"/>
<path d="M131.08 9.36V8.36H130.08V9.36H131.08ZM131.08 13.12H130.08V14.12H131.08V13.12ZM160.76 13.12V14.12H161.76V13.12H160.76ZM160.76 9.36H161.76V8.36H160.76V9.36ZM133.92 19.96V18.96H132.92V19.96H133.92ZM133.92 23.08H132.92V24.08H133.92V23.08ZM142.24 23.08V24.08H143.24V23.08H142.24ZM142.24 19.96H143.24V18.96H142.24V19.96ZM133.04 24.56V23.56H132.04V24.56H133.04ZM133.04 27.68H132.04V28.68H133.04V27.68ZM142.28 27.68V28.68H143.28V27.68H142.28ZM142.28 24.56H143.28V23.56H142.28V24.56ZM149.48 24.56V23.56H148.48V24.56H149.48ZM149.48 27.68H148.48V28.68H149.48V27.68ZM158.84 27.68V28.68H159.84V27.68H158.84ZM158.84 24.56H159.84V23.56H158.84V24.56ZM149.48 19.96V18.96H148.48V19.96H149.48ZM149.48 23.08H148.48V24.08H149.48V23.08ZM157.88 23.08V24.08H158.88V23.08H157.88ZM157.88 19.96H158.88V18.96H157.88V19.96ZM132.92 35V34H131.92V35H132.92ZM132.92 38.6H131.92V39.6H132.92V38.6ZM156.88 38.6V39.6H157.88V38.6H156.88ZM156.88 35H157.88V34H156.88V35ZM131.44 40.6V39.6H130.44V40.6H131.44ZM131.44 44.44H130.44V45.44H131.44V44.44ZM157.2 44.44V45.44H158.2V44.44H157.2ZM157.2 40.6H158.2V39.6H157.2V40.6ZM143.52 10.8V9.8H142.52V10.8H143.52ZM143.52 28.12H142.52V29.12H143.52V28.12ZM148.2 28.12V29.12H149.2V28.12H148.2ZM148.2 10.8H149.2V9.8H148.2V10.8ZM132 29.32V28.32H131V29.32H132ZM132 33.08H131V34.08H132V33.08ZM154.88 33.08H155.88V32.08H154.88V33.08ZM154.88 45.72H153.88V46.72H154.88V45.72ZM159.64 45.72V46.72H160.64V45.72H159.64ZM159.64 29.32H160.64V28.32H159.64V29.32ZM128.36 14.76V13.76H127.36V14.76H128.36ZM128.36 23.92H127.36V24.92H128.36V23.92ZM132.6 23.92V24.92H133.6V23.92H132.6ZM132.6 18.44V17.44H131.6V18.44H132.6ZM159.24 18.44H160.24V17.44H159.24V18.44ZM159.24 23.92H158.24V24.92H159.24V23.92ZM163.68 23.92V24.92H164.68V23.92H163.68ZM163.68 14.76H164.68V13.76H163.68V14.76ZM130.08 9.36V13.12H132.08V9.36H130.08ZM131.08 14.12H160.76V12.12H131.08V14.12ZM161.76 13.12V9.36H159.76V13.12H161.76ZM160.76 8.36H131.08V10.36H160.76V8.36ZM132.92 19.96V23.08H134.92V19.96H132.92ZM133.92 24.08H142.24V22.08H133.92V24.08ZM143.24 23.08V19.96H141.24V23.08H143.24ZM142.24 18.96H133.92V20.96H142.24V18.96ZM132.04 24.56V27.68H134.04V24.56H132.04ZM133.04 28.68H142.28V26.68H133.04V28.68ZM143.28 27.68V24.56H141.28V27.68H143.28ZM142.28 23.56H133.04V25.56H142.28V23.56ZM148.48 24.56V27.68H150.48V24.56H148.48ZM149.48 28.68H158.84V26.68H149.48V28.68ZM159.84 27.68V24.56H157.84V27.68H159.84ZM158.84 23.56H149.48V25.56H158.84V23.56ZM148.48 19.96V23.08H150.48V19.96H148.48ZM149.48 24.08H157.88V22.08H149.48V24.08ZM158.88 23.08V19.96H156.88V23.08H158.88ZM157.88 18.96H149.48V20.96H157.88V18.96ZM131.92 35V38.6H133.92V35H131.92ZM132.92 39.6H156.88V37.6H132.92V39.6ZM157.88 38.6V35H155.88V38.6H157.88ZM156.88 34H132.92V36H156.88V34ZM130.44 40.6V44.44H132.44V40.6H130.44ZM131.44 45.44H157.2V43.44H131.44V45.44ZM158.2 44.44V40.6H156.2V44.44H158.2ZM157.2 39.6H131.44V41.6H157.2V39.6ZM142.52 10.8V28.12H144.52V10.8H142.52ZM143.52 29.12H148.2V27.12H143.52V29.12ZM149.2 28.12V10.8H147.2V28.12H149.2ZM148.2 9.8H143.52V11.8H148.2V9.8ZM131 29.32V33.08H133V29.32H131ZM132 34.08H154.88V32.08H132V34.08ZM153.88 33.08V45.72H155.88V33.08H153.88ZM154.88 46.72H159.64V44.72H154.88V46.72ZM160.64 45.72V29.32H158.64V45.72H160.64ZM159.64 28.32H132V30.32H159.64V28.32ZM127.36 14.76V23.92H129.36V14.76H127.36ZM128.36 24.92H132.6V22.92H128.36V24.92ZM133.6 23.92V18.44H131.6V23.92H133.6ZM132.6 19.44H159.24V17.44H132.6V19.44ZM158.24 18.44V23.92H160.24V18.44H158.24ZM159.24 24.92H163.68V22.92H159.24V24.92ZM164.68 23.92V14.76H162.68V23.92H164.68ZM163.68 13.76H128.36V15.76H163.68V13.76Z" fill="#1F1F1F" mask="url(#path-2-outside-1_2597_5124)"/>
<path d="M131.08 9.36V8.36H130.08V9.36H131.08ZM131.08 13.12H130.08V14.12H131.08V13.12ZM160.76 13.12V14.12H161.76V13.12H160.76ZM160.76 9.36H161.76V8.36H160.76V9.36ZM133.92 19.96V18.96H132.92V19.96H133.92ZM133.92 23.08H132.92V24.08H133.92V23.08ZM142.24 23.08V24.08H143.24V23.08H142.24ZM142.24 19.96H143.24V18.96H142.24V19.96ZM133.04 24.56V23.56H132.04V24.56H133.04ZM133.04 27.68H132.04V28.68H133.04V27.68ZM142.28 27.68V28.68H143.28V27.68H142.28ZM142.28 24.56H143.28V23.56H142.28V24.56ZM149.48 24.56V23.56H148.48V24.56H149.48ZM149.48 27.68H148.48V28.68H149.48V27.68ZM158.84 27.68V28.68H159.84V27.68H158.84ZM158.84 24.56H159.84V23.56H158.84V24.56ZM149.48 19.96V18.96H148.48V19.96H149.48ZM149.48 23.08H148.48V24.08H149.48V23.08ZM157.88 23.08V24.08H158.88V23.08H157.88ZM157.88 19.96H158.88V18.96H157.88V19.96ZM132.92 35V34H131.92V35H132.92ZM132.92 38.6H131.92V39.6H132.92V38.6ZM156.88 38.6V39.6H157.88V38.6H156.88ZM156.88 35H157.88V34H156.88V35ZM131.44 40.6V39.6H130.44V40.6H131.44ZM131.44 44.44H130.44V45.44H131.44V44.44ZM157.2 44.44V45.44H158.2V44.44H157.2ZM157.2 40.6H158.2V39.6H157.2V40.6ZM143.52 10.8V9.8H142.52V10.8H143.52ZM143.52 28.12H142.52V29.12H143.52V28.12ZM148.2 28.12V29.12H149.2V28.12H148.2ZM148.2 10.8H149.2V9.8H148.2V10.8ZM132 29.32V28.32H131V29.32H132ZM132 33.08H131V34.08H132V33.08ZM154.88 33.08H155.88V32.08H154.88V33.08ZM154.88 45.72H153.88V46.72H154.88V45.72ZM159.64 45.72V46.72H160.64V45.72H159.64ZM159.64 29.32H160.64V28.32H159.64V29.32ZM128.36 14.76V13.76H127.36V14.76H128.36ZM128.36 23.92H127.36V24.92H128.36V23.92ZM132.6 23.92V24.92H133.6V23.92H132.6ZM132.6 18.44V17.44H131.6V18.44H132.6ZM159.24 18.44H160.24V17.44H159.24V18.44ZM159.24 23.92H158.24V24.92H159.24V23.92ZM163.68 23.92V24.92H164.68V23.92H163.68ZM163.68 14.76H164.68V13.76H163.68V14.76ZM130.08 9.36V13.12H132.08V9.36H130.08ZM131.08 14.12H160.76V12.12H131.08V14.12ZM161.76 13.12V9.36H159.76V13.12H161.76ZM160.76 8.36H131.08V10.36H160.76V8.36ZM132.92 19.96V23.08H134.92V19.96H132.92ZM133.92 24.08H142.24V22.08H133.92V24.08ZM143.24 23.08V19.96H141.24V23.08H143.24ZM142.24 18.96H133.92V20.96H142.24V18.96ZM132.04 24.56V27.68H134.04V24.56H132.04ZM133.04 28.68H142.28V26.68H133.04V28.68ZM143.28 27.68V24.56H141.28V27.68H143.28ZM142.28 23.56H133.04V25.56H142.28V23.56ZM148.48 24.56V27.68H150.48V24.56H148.48ZM149.48 28.68H158.84V26.68H149.48V28.68ZM159.84 27.68V24.56H157.84V27.68H159.84ZM158.84 23.56H149.48V25.56H158.84V23.56ZM148.48 19.96V23.08H150.48V19.96H148.48ZM149.48 24.08H157.88V22.08H149.48V24.08ZM158.88 23.08V19.96H156.88V23.08H158.88ZM157.88 18.96H149.48V20.96H157.88V18.96ZM131.92 35V38.6H133.92V35H131.92ZM132.92 39.6H156.88V37.6H132.92V39.6ZM157.88 38.6V35H155.88V38.6H157.88ZM156.88 34H132.92V36H156.88V34ZM130.44 40.6V44.44H132.44V40.6H130.44ZM131.44 45.44H157.2V43.44H131.44V45.44ZM158.2 44.44V40.6H156.2V44.44H158.2ZM157.2 39.6H131.44V41.6H157.2V39.6ZM142.52 10.8V28.12H144.52V10.8H142.52ZM143.52 29.12H148.2V27.12H143.52V29.12ZM149.2 28.12V10.8H147.2V28.12H149.2ZM148.2 9.8H143.52V11.8H148.2V9.8ZM131 29.32V33.08H133V29.32H131ZM132 34.08H154.88V32.08H132V34.08ZM153.88 33.08V45.72H155.88V33.08H153.88ZM154.88 46.72H159.64V44.72H154.88V46.72ZM160.64 45.72V29.32H158.64V45.72H160.64ZM159.64 28.32H132V30.32H159.64V28.32ZM127.36 14.76V23.92H129.36V14.76H127.36ZM128.36 24.92H132.6V22.92H128.36V24.92ZM133.6 23.92V18.44H131.6V23.92H133.6ZM132.6 19.44H159.24V17.44H132.6V19.44ZM158.24 18.44V23.92H160.24V18.44H158.24ZM159.24 24.92H163.68V22.92H159.24V24.92ZM164.68 23.92V14.76H162.68V23.92H164.68ZM163.68 13.76H128.36V15.76H163.68V13.76Z" fill="black" fill-opacity="0.2" mask="url(#path-2-outside-1_2597_5124)"/>
      </svg>

      
  


     
    </nav>
  );
};

export default Navbar;
