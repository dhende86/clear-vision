import React, { useRef } from 'react'
import { frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {


    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">


        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              In many Latino communities, about {' '}
              <span className="text-white">
                1 in 3 adults</span> who need vision correction
              aren’t getting it.
            </p>

            <p className="hiw-text g_fadeIn">
              Our {' '}
              <span className="text-white">
                Clear Vision Initiative</span> connects
              families to affordable exams, updated prescriptions, and bilingual,
              culturally relevant care so no one is left with blurry vision.
            </p>
          </div>


          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">What we address</p>
            <p className="hiw-bigtext">Cost • Language • Access</p>
            <p className="hiw-text">    Low-cost screenings · Spanish/English support · Mobile & community clinics
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
