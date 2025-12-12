import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { eye01, eye02, eye03 } from '../utils';
import gsap from 'gsap';

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })

        // Faster animations - changed scrub from 5.5 to 3.5
        animateWithGsap('#features_title', { y: 0, opacity: 1 })
        animateWithGsap(
            '.g_grow',
            { scale: 1, opacity: 1, ease: 'power1' },
            { scrub: 3.5 } // Faster animation speed
        );
        animateWithGsap(
            '.g_text',
            { y: 0, opacity: 1, ease: 'power2.inOut', duration: 0.8 } // Faster duration
        )
    }, []);

    return (
        <section className="h-full common-padding bg-zinc relative overflow-hidden">
            <div className="screen-max-wdith">
                <div className="mb-12 w-full">
                    <h1 id="features_title" className="section-heading">Explore the full story.</h1>
                </div>

                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">Clear Vision.</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">For Every Community.</h2>
                    </div>

                    <div className="flex-center flex-col sm:px-10 w-full">
                        {/* MAIN VIDEO - CENTERED WITH GLOW AND ROUNDED CORNERS */}
                        <div className="relative w-full flex justify-center mb-8"> {/* Added margin-bottom */}
                            <div className="rounded-[2rem] p-[0.5rem] bg-white/10 backdrop-blur-sm shadow-lg shadow-white/30 w-full max-w-xl"> {/* Constrained width */}
                                <video
                                    playsInline
                                    id="exploreVideo"
                                    className="w-full h-full rounded-[1.8rem] object-contain"
                                    preload="none"
                                    muted
                                    autoPlay
                                    loop
                                    ref={videoRef}
                                >
                                    <source src={eye01} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* DUAL IMAGE CONTAINER - PREVENT OVERLAP WITH FLEX WRAP */}
                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container flex flex-wrap justify-center gap-4"> {/* Added gap and flex-wrap */}
                                {/* FIRST IMAGE */}
                                <div className="flex-1 min-w-[300px] max-w-[40%] h-[40vh] p-2"> {/* Added min/max width */}
                                    <div className="rounded-[2rem] p-[0.4rem] bg-white/10 backdrop-blur-sm shadow-lg shadow-white/20 h-full">
                                        <img
                                            src={eye02}
                                            alt="titanium"
                                            className="feature-video g_grow w-full h-full rounded-[1.8rem] object-contain"
                                        />
                                    </div>
                                </div>

                                {/* SECOND IMAGE */}
                                <div className="flex-1 min-w-[300px] max-w-[40%] h-[40vh] p-2"> {/* Added min/max width */}
                                    <div className="rounded-[2rem] p-[0.4rem] bg-white/10 backdrop-blur-sm shadow-lg shadow-white/20 h-full">
                                        <img
                                            src={eye03}
                                            alt="titanium 2"
                                            className="feature-video g_grow w-full h-full rounded-[1.8rem] object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* TEXT CONTAINER - UNCHANGED */}
                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        Our glasses feature {' '}
                                        <span className="text-white">
                                            lightweight, durable frames designed for everyday comfort
                                        </span>,
                                        ensuring long-lasting wear for everyone.
                                    </p>
                                </div>

                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        Experience the perfect balance of style and function. {' '}
                                        <span className="text-white">
                                            You'll notice the difference
                                        </span>
                                        the moment you put them on.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
