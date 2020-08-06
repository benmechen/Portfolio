export default {
  background: {
    color: {
      value: '#fff'
    },
    image: '',
    position: '',
    repeat: '',
    size: '',
    opacity: 1
  },
  backgroundMask: {
    cover: {
      color: {
        value: '#fff'
      },
      opacity: 1
    },
    enable: false
  },
  detectRetina: true,
  fpsLimit: 60,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: []
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onDiv: {
        ids: 'repulse-div',
        enable: false,
        mode: 'repulse',
        type: 'circle'
      },
      onHover: {
        enable: true,
        mode: 'connect',
        parallax: {
          enable: true,
          force: 200,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1
      },
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        links: {
          opacity: 0
        }
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1
      },
      slow: {
        factor: 3,
        radius: 200
      },
      trail: {
        delay: 1,
        quantity: 1
      }
    }
  },
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 1603.4120608655228
      }
    },
    color: {
      value: '#000000'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#000000',
      opacity: 0.12025590456491421,
      width: 0.4810236182596568
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  pauseOnBlur: true
}