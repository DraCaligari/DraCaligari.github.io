<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

.common-layout, .el-container, .el-main {
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box; /* Incluye el padding y el borde en el ancho total */
}

</style>
