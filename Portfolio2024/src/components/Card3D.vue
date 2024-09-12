<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  dataImage: {
    type: String,
    required: true
  },
  dataUrl: {
    type: String,
    required: true
  },
  dataTags: {
    type: Array,
    required: true
  }
});

const card = ref<HTMLElement | null>(null);
const width = ref(0);
const height = ref(0);
const mouseX = ref(0);
const mouseY = ref(0);

const mousePX = computed(() => mouseX.value / width.value);
const mousePY = computed(() => mouseY.value / height.value);

const cardStyle = computed(() => {
  const rX = (mousePX.value - 0.5) * 60; // Adjusted to center the rotation
  const rY = (mousePY.value - 0.5) * -60; // Adjusted to center the rotation
  return {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
    transition: 'transform 0.5s ease-out'
  };
});

const cardBgTransform = computed(() => {
  const tX = (mousePX.value - 0.5) * -80; // Adjusted to center the translation
  const tY = (mousePY.value - 0.5) * -80; // Adjusted to center the translation
  return {
    transform: `translateX(${tX}px) translateY(${tY}px)`,
    transition: 'transform 0.5s ease-out'
  };
});

const cardBgImage = computed(() => {
  return {
    backgroundImage: `url(${props.dataImage})`
  };
});

const handleMouseMove = (e: MouseEvent) => {
  if (card.value) {
    const rect = card.value.getBoundingClientRect();
    mouseX.value = e.clientX - rect.left;
    mouseY.value = e.clientY - rect.top;
  }
};

const handleMouseEnter = () => {
  // No need to clear any timeout
};

const handleMouseLeave = () => {
  mouseX.value = width.value / 2;
  mouseY.value = height.value / 2;
};

onMounted(() => {
  if (card.value) {
    width.value = card.value.offsetWidth;
    height.value = card.value.offsetHeight;
    // Set initial position to center
    mouseX.value = width.value / 2;
    mouseY.value = height.value / 2;
  }
});

function openUrlInNewTab(url: string): void {
  window.open(url, '_blank');
}
</script>

<template>
  <div class="card-wrap"
       @click="openUrlInNewTab(dataUrl)"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card">
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <slot name="header"></slot>
        <div class="content">
          <slot name="content"></slot>
        </div>
        <div class="flex gap-1" style="padding-top: 6px">
            <el-tag style="margin-left: 1px; color: #BBBDF6" v-for="tag in dataTags" :key="tag">{{tag}}</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-wrap {
  margin: 10px;
  transform: perspective(400px);
  transform-style: preserve-3d;
  cursor: pointer;
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 400px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgb(24, 24, 24) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: transform 0.5s ease-out;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
}

.card-info .content {
  transform: translateY(0);
  opacity: 1;
  transition: transform 1s ease-out, opacity 1s ease-out;
}

.card:hover .card-info .content {
  transform: translateY(0);
  opacity: 1;
}

.card-info p {
  opacity: 1;
  text-shadow: rgb(24, 24, 24) 0 2px 3px;
  transition: opacity 0.5s ease-out;
}

.card:hover .card-info p {
  opacity: 1;
}

.card-info * {
  position: relative;
  z-index: 1;
}

.card-info::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 0%, rgb(24, 24, 24) 100%);
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.card:hover .card-info::after {
  opacity: 1;
  transform: translateY(0);
}

.card-info h1 {
  font-size: 24px;
  font-weight: 700;
  text-shadow: rgb(24, 24, 24) 0 10px 10px;
}
</style>