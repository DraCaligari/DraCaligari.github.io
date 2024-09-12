<script setup lang="ts">
import {useI18n} from "vue-i18n";
const { t } = useI18n();
const particlesLoaded = async (container:any) => {
  console.log("Particles container loaded", container);
};
</script>

<template>
  <div class="particles-container">
  <vue-particles class="particulas" id="tsparticles" @particles-loaded="particlesLoaded" url="http://foo.bar/particles.json" />

  <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="{
                    background: {
                        color: {
                            value: '#181818'
                        }
                    },
                    fullScreen: {
                      enable: false,
                      zIndex: -1,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
  />
    <div class="subtitle-section">
      <div class="principal-subtitle">
        <div>
          {{ t('home.basics.principal_message1') }}
        </div>
        <div class="primary-color">
          {{ t('home.basics.principal_message2') }}
        </div>
        <div class="second-color">
          {{ t('home.basics.principal_message3') }}
        </div>
      </div>
      <div>
        {{ t('home.basics.second_message') }}
      </div>
    </div>
  </div>


</template>

<style scoped>
.particles-container {
  height: 700px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

.particulas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.subtitle-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start; /* Alinea los elementos a la izquierda */
  padding: 2rem;
  position: relative; /* Ajusta según tu diseño */
  z-index: 2; /* Asegúrate de que esté encima de las partículas */
  height: 100%; /* Ajusta según tus necesidades */
}

.principal-subtitle {
  font-size: xxx-large;
}

@media (max-width: 600px) {
  .principal-subtitle {
    font-size: x-large;
  }
}
</style>