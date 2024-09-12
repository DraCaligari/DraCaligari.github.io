<script setup lang="ts">
import { ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import Card3D from '@/components/Card3D.vue';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

const { t, tm, rt, locale } = useI18n();

interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
}

const handleClick = () => {
  ElMessage({
    message: 'Card clicked!',
    type: 'success',
  });
};

const projects = ref<Project[]>(tm('projects.projects') as Project[]);

watch(locale, () => {
  projects.value = tm('projects.projects') as Project[];
});

const scrollLeft = () => {
  const container = document.querySelector('.container-card');
  container?.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollRight = () => {
  const container = document.querySelector('.container-card');
  container?.scrollBy({ left: 300, behavior: 'smooth' });
};
</script>

<template>
  <div class="container">
    <h1 style="font-size: 2rem; margin-bottom: 1rem; color: #A5D991">{{t('projects.title')}}</h1>
    <div class="scroll-wrapper">
      <el-scrollbar class="scrollbar">
        <div class="container-card">
          <Card3D v-for="item in projects" :key="item.title" :data-url="item.url" :data-tags="item.tags" :data-image="item.image">
            <template #header>
              <h1>{{ rt(item.title) }}</h1>
            </template>
            <template #content>
              <p>{{ rt(item.description) }}</p>
            </template>
          </Card3D>
        </div>
      </el-scrollbar>
      <div class="arrow left-arrow" @click="scrollLeft">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path :d="mdiChevronLeft" fill="white" />
        </svg>
      </div>
      <div class="arrow right-arrow" @click="scrollRight">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path :d="mdiChevronRight" fill="white" />
        </svg>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  padding: 20px;
  margin-top: 1rem;
}

.scroll-wrapper {
  position: relative;
  max-width: 100%;
  overflow-x: auto;
}

.scrollbar {
  max-width: 100%;
}

.container-card {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px; /* Espacio entre tarjetas */
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-arrow {
  left: 0;
}

.right-arrow {
  right: 0;
}
</style>