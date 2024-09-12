<template>
  <div ref="container" class="container">
    <el-row type="flex" justify="center" align="middle" class="full-height">
      <el-col :span="17" class="text-center">
        <h1 class="title" style="color: #BBBDF6">{{t('contact.title')}}</h1>
        <p class="subtitle">{{ t('contact.description') }}</p>
        <div class="icons">
          <a href="https://github.com/DraCaligari" target="_blank" aria-label="GitHub">
            <el-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path :d="mdiGithub" /></svg></el-icon>
          </a>
          <a href="https://www.linkedin.com/in/tgarciag/" target="_blank" aria-label="LinkedIn">
            <el-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path :d="mdiLinkedin" /></svg></el-icon>
          </a>
          <a href="mailto:tatianagarcia0695@hotmail.com" target="_blank" aria-label="Email">
            <el-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path :d="mdiEmail" /></svg></el-icon>
          </a>
          <a href="https://wa.me/+528123729703" target="_blank" aria-label="WhatsApp">
            <el-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path :d="mdiWhatsapp" /></svg></el-icon>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mdiGithub, mdiLinkedin, mdiEmail, mdiWhatsapp } from '@mdi/js';
import { useI18n } from 'vue-i18n'

const container = ref(null);
const { t, tm, rt, locale } = useI18n();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  if (container.value) {
    observer.observe(container.value);
  }

  onUnmounted(() => {
    if (container.value) {
      observer.unobserve(container.value);
    }
  });
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.container.animate {
  opacity: 1;
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: color 0.5s ease-in-out;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  transition: color 0.5s ease-in-out;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.icons a {
  font-size: 2rem;
  color: inherit;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.icons a:hover {
  transform: scale(1.1);
  color: #A5D991;
  background-color: rgba(146, 255, 99, 0.29);
}
</style>