<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="brand">Brand</div>
        <nav>
          <router-link to="/">
            <span>home</span>
          </router-link>
          <router-link to="/about">
            <span>about</span>
          </router-link>
        </nav>
        <nav>
          <select v-model="locale">
            <option v-for="lang in support_langs" :key="lang">{{lang}}</option>
          </select>
          <button>로그인</button>
          <button>회원가입</button>
        </nav>
      </div>
    </header>
    <router-view class="container"/>
    <footer>
      <div class='container'>
        footer
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      support_langs: ["ko", "en", "ja", "zh"]
    };
  },
  computed: {
    locale: {
      set(value) {
        this.$store.commit("setLocale", value);
      },
      get() {
        return this.$store.state.locale;
      }
    }
  }
};
</script>