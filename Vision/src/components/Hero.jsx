import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { glassnewvid, glassesvideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? glassesvideo : glassnewvid)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(glassesvideo)
    } else {
      setVideoSrc(glassnewvid)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">Clear Vision Initiative</p>

	  
          <div className="w-full max-w-4xl mx-auto flex justify-center">
	      <div className="relative w-full aspect-video overflow-hidden rounded-1g shadow-xl">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
	  </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Donate</a>
        <p className="font-normal text-xl">"Join us in bringing the world into focus"</p>
      </div>
    </section>
  )
}

export default Hero






// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { glassnewvid, glassesvideo } from '../utils';
// import { useEffect, useState } from 'react';

// const Hero = () => {
//   const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? glassesvideo : glassnewvid)

//   const handleVideoSrcSet = () => {
//     if(window.innerWidth < 760) {
//       setVideoSrc(glassesvideo)
//     } else {
//       setVideoSrc(glassnewvid)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleVideoSrcSet);

//     return () => {
//       window.removeEventListener('resize', handleVideoSrcSet)
//     }
//   }, [])

//   useGSAP(() => {
//     gsap.to('#hero', { opacity: 1, delay: 2 })
//     gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
//   }, [])

//   return (
//     <section className="w-full nav-height bg-black relative">
//       <div className="h-5/6 w-full flex-center flex-col">
//           <p id="hero" className="hero-title">Clear Vision Initiative</p>

	  
//         <div className="md:w-10/12 w-9/12">
//           <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
//             <source src={videoSrc} type="video/mp4" />
//           </video>
//         </div>
//       </div>

//       <div
//         id="cta"
//         className="flex flex-col items-center opacity-0 translate-y-20"
//       >
//         <a href="#highlights" className="btn">Donate</a>
//         <p className="font-normal text-xl">"Join us in bringing the world into focus"</p>
//       </div>
//     </section>
//   )
// }

// export default Hero
