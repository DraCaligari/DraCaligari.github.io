<template>
    <el-page-header style="padding-top: 1rem" :icon="null">
      <template #content>
        <div class="flex items-center">
          <el-image
              style="width: 120px; height: 72px;"
              src="https://i.imgur.com/7y3n8Hp.png"
          />
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <template v-for="content  in tm('home.buttons')">
            <el-button link>{{ rt(content.title) }}</el-button>
          </template>
          <el-switch
              v-model="language"
              style="--el-switch-on-color: #BBBDF6; --el-switch-off-color: #A5D991; margin-left: 1rem;"
              width="50"
              inline-prompt
              active-text="ES"
              inactive-text="EN"
              @change="handleChange"
          />
        </div>
      </template>
    </el-page-header>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import {ref, watch} from "vue";

const { rt, locale, tm } = useI18n();


const language = ref(locale.value === 'en');

const handleChange = () => {
  locale.value = language.value ? 'en' : 'es';
};
</script>
<style>
.el-page-header__back {
  display: none!important;
}

.el-page-header__left .el-divider--vertical {
  display: none!important;
}

.el-page-header__left {
  margin-right: 20px!important;
}

.el-switch__action{
 background-color: #181818!important;
}
.is-text{
  color: rgb(96, 98, 102)!important;
}
</style>
