<i18n>
  en: 
    hello: hello world!
  ko: 
    hello: 안녕 세계야!
  ja: 
    hello: こんにちは、世界！
  zh: 
    hello: 你好、世界！
</i18n>

<template>
  <div>
    <h1>message: {{ $t('hello') }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "about",
  computed: {
    ...mapState(["locale"])
  },
  watch: {
    locale: function(newLocale) {
      this.$i18n.locale = newLocale;
    }
  },
  mounted() {
    this.$i18n.locale = this.locale;
  }
};
</script>
