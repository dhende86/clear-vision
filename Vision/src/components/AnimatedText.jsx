import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const AnimatedText = ({ text, className = "", as: Tag = "div" }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state: random positions and hidden
            // mimicking: yPercent: "random([-50,50])", xPercent: "random([-20,20])"
            gsap.set(".char", {
                opacity: 0,
                yPercent: gsap.utils.random(-50, 50, true),
                xPercent: gsap.utils.random(-20, 20, true)
            });

            // Animate to final state
            // mimicking: duration: .001, stagger: { each: 0.001, from: "random" }
            gsap.to(".char", {
                opacity: 1,
                yPercent: 0,
                xPercent: 0,
                duration: 0.05, // slightly longer than .001 to be visible but still "instant" per char
                stagger: {
                    each: 0.02, // tuned for readability while keeping the effect
                    from: "random"
                },
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, [text]);

    return (
        <Tag ref={containerRef} className={className}>
            {text.split("").map((char, index) => (
                <span key={index} className="char inline-block" style={{ minWidth: char === " " ? "0.2em" : "0" }}>
                    {char}
                </span>
            ))}
        </Tag>
    );
};

export default AnimatedText;
