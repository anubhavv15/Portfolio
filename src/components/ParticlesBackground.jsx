import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: "transparent" },
    },
    fullScreen: {
      enable: false,  // IMPORTANT: disables full-screen mode
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "repulse" },
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        repulse: { distance: 50 },
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 250,
        enable: true,
        opacity: 0.5,
        width: 2,
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" }, // Less structured than bounce
        random: true,
        speed: 8, // Increased from 2
        straight: false,
        path: {
          enable: true,
          delay: {
            value: 0,
          },
        },
      },
      
      number: {
        density: { enable: true, area: 1200 },
        value: 180,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 3, max: 5 } },
    },
    detectRetina: true,
  }), []);

  return engineReady ? (
    <Particles id="tsparticles" options={options} />
  ) : null;
};

export default ParticlesBackground;
