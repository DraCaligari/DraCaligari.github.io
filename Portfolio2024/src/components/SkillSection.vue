<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {onMounted} from "vue";
const { t, tm, rt } = useI18n();

onMounted(() => {
  const keywords = document.querySelectorAll('.keyword');
  keywords.forEach(keyword => {
    const randomClass = Math.random() > 0.5 ? 'hover-color1' : 'hover-color2';
    keyword.classList.add(randomClass);
  });
});


</script>

<template>
  <div class="container" style="display: flex; flex-wrap: wrap; margin-top: 1rem;">
    <div class="title-container item">
      <h1 style="color: #BBBDF6">{{t('skills[0].title')}}</h1>
    </div>
    <div class="keywords-container item">
      <div v-for="content  in tm('skills[0].keywords')" class="keyword">
        {{rt(content)}}
      </div>
    </div>
  </div>

</template>

<style scoped>
.keywords-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 500px;
  justify-content: center;
  align-items: center;
}

.title-container{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding: 0 5rem!important;
  text-align: center;
}

.keyword {
  padding: 3px 5px;
  font-size: 17px;
  transition: transform 0.3s ease-in-out;
}

.keyword:hover {
  transform: scale(1.4);
}

.keyword.hover-color1:hover {
  color: #A5D991;
}

.keyword.hover-color2:hover {
  color: #BBBDF6;
}

.item{
  flex: 1;
  padding: 10px;
}
@media (max-width: 600px) {
  .item {
    flex: 100%;
  }
}
</style>