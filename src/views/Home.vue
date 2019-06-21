<template>
  <div class="home">
    <h1>{{$t('welcome')}}</h1>
  </div>
</template>

<i18n>
ko:
  welcome: 안녕하세요
en:
  welcome: Welcome
zh:
  welcome: 你好
ja:
  welcome: こんにちは
</i18n>

<script>
import { mapState } from "vuex";

export default {
  name: "home",
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
