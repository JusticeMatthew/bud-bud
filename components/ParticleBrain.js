import Particles from 'react-particles-js';

if (process.browser) {
  require('pathseg');
}

export default function ParticleBrain() {
  return (
    <Particles
      params={{
        fps_limit: 30,
        particles: {
          collisions: {
            enable: false,
          },
          number: {
            value: 200,
            density: {
              enable: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 30,
            opacity: 0.4,
          },
          move: {
            speed: 1,
          },
          opacity: {
            anim: {
              enable: true,
              opacity_min: 0.05,
              speed: 2,
              sync: false,
            },
            value: 0.8,
          },
        },
        polygon: {
          enable: true,
          scale: 0.7,
          type: 'inline',
          move: {
            radius: 5,
          },
          url:
            'https://gist.githubusercontent.com/JusticeMatthew/31cc4c1fb58ac7e9eb86ed68ea8d5c0a/raw/8c7201559406137d1d5732ffb49eba998ad43f9a/testing.svg',
          inline: {
            arrangement: 'equidistant',
          },
          draw: {
            enable: true,
            stroke: {
              color: 'rgba(255, 255, 255, .4)',
            },
          },
        },
        retina_detect: false,
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            bubble: {
              size: 10,
              distance: 40,
              color: '#15DB95',
            },
          },
        },
      }}
    />
  );
}
