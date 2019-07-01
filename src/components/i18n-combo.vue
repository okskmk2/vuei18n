<template>
          <select v-model="i18n.locale">
            <option v-for="lang in support_langs" :key="lang">{{lang}}</option>
          </select>
</template>

<script>
import i18n from '../i18n'

export default {
  data() {
    return {
      i18n,
      support_langs: ["ko", "en", "ja", "zh"]
    };
  },
}
</script>
