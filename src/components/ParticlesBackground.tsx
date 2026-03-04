import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "transparent"
        },

        particles: {
          number: {
            value: 20,
            density: {
              enable: true
            }
          },

          color: {
            value: "#ffffff"
          },

          shape: {
            type: "circle"
          },

          opacity: {
            value: 0.8,
            animation: {
              enable: false,
              speed: 1,
              sync: false
            }
          },

          size: {
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },

          links: {
            enable: false,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },

          move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: false,
            straight: true,
            outModes: {
              default: "out"
            },
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200
              }
            }
          }
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            onClick: {
              enable: false,
              mode: "push"
            }
          },

          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1
              }
            },

            bubble: {
              distance: 400,
              size: 2,
              duration: 5,
              opacity: 0.8,
              speed: 3
            },

            repulse: {
              distance: 200,
              duration: 0.4
            },

            push: {
              quantity: 4
            },

            remove: {
              quantity: 2
            }
          }
        },

        detectRetina: true
      }}
      className="fixed inset-0 z-0"
    />
  );
}
