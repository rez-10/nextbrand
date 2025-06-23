import React from 'react';

const Footer = () => {
  const text = "nextbrand ".repeat(10);
  return (
    <>
      <style>
        {`
          @keyframes gradientSlide {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          @keyframes textScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling-container {
            display: flex;
            white-space: nowrap;
            animation: textScroll 20s linear infinite;
          }
          .gradient-text {
            background: linear-gradient(to right, lightblue , blue , lightblue , orange, lightsalmon);
            background-size: 200% 100%;
            animation: gradientSlide 9s linear infinite;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
          }
            .flinkbox > p{
             color:#ffffff70;
             margin-top:1px;
             cursor:pointer;
             transition:.3s;
            }
            .flinkbox > p:hover{
             color:lightblue;
             transition:.3s;
            }
        `}
      </style>
      <div
        className=" text-white h-[113vh] sm:h-fit"
        style={{
          backgroundColor: '#000',
          color: '#fff',
          background: 'linear-gradient(357deg,rgba(5, 75, 161, 1) 0%, rgba(5, 54, 117, 1) 14%, rgba(6, 7, 23, 1) 50%, rgba(6, 0, 10, 1) 100%)',
        }}
      >
        <div
          className="translate-y-10 p-2 h-fit overflow-hidden"
          style={{
            // transform: 'translateY(5rem)',
          }}
        >
          <div className="scrolling-container mt-20">
            <span className=" text gradient-text text-9xl font-bold" style={{ fontFamily: '"Orbitron", sans-serif' }}>{text}</span>
            <span className=" text gradient-text text-9xl font-bold" style={{ fontFamily: '"Orbitron", sans-serif' }}>{text}</span>
          </div>
        </div>
        <div className=' h-[74vh] flex flex-col'>
          <div className='flex  lg:justify-around px-5 flex-wrap lg:w-[80%] mt-20 lg:mt-35 m-auto'>
            <div className='flinkbox min-w-70 w-fit mt-2 font-medium'>
              <strong>Company</strong>
              <p>Home</p>
              <p>about</p>
              <p>services</p>
              <p>testimonials</p>
            </div>
            <div className='flinkbox min-w-70 w-fit mt-2 font-medium'>
              <strong>services</strong>
              <p>Web developement</p>
              <p>Social media merketing</p>
              <p>Search Engine Optimization (SEO)</p>
              <p>UI/UX designing</p>
              <p>Graphics Desinging</p>
              <p>Database</p>
            </div>
            <div className='flinkbox min-w-70 w-fit mt-2 font-medium'>
              <strong>Adress</strong>
              <p className='w-70'>B/xyz, PC colony Kanakarbagh, Patna-800020, Bihar, India</p>
            </div>
            <div className='flinkbox min-w-70 w-fit mt-2 font-medium'>
              <strong>Social</strong>
              <p>X (twitter)</p>
              <p>Linkedin</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className='h-fit flex-wrap  flex items-center px-5 sm:items-end justify-between text-white/50 font-medium border-red-500'>
            <p className='hover:text-amber-500 underline cursor-pointer transition-all hover:transition-all'>terms and condition</p>
            <p>2025 nextbrand.com all rights reserved</p>
            <p>Developed by <span className='font-medium text-green-300'>greenroom</span> <span className='font-bold text-white'>Studios</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;