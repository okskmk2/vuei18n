<template>
  <div id="app">
    <div class="wrap" ref="wrap">
      <div class="modal" v-show="modalOpen">
        <div>
          <button @click="closeModal()">닫기</button>
        </div>
        <div>회원가입</div>
      </div>
    </div>
    <header>
      <div class="container">
        <div class="brand">Brand</div>
        <nav class="main-nav">
          <router-link to="/">
            <span>home</span>
          </router-link>
          <router-link to="/about">
            <span>about</span>
          </router-link>
        </nav>
        <nav class="user-nav">
          <select v-model="locale">
            <option v-for="lang in support_langs" :key="lang">{{lang}}</option>
          </select>
          <button @click="openModal('login')">로그인</button>
          <button @click="openModal('join')">회원가입</button>
        </nav>
      </div>
    </header>
    <router-view class="container"/>
    <footer>
      <div class="container">footer</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      support_langs: ["ko", "en", "ja", "zh"],
      modalOpen: false
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
  },
  methods: {
    openModal(name) {
      this.modalOpen = true;
      this.$refs.wrap.classList.add("bg");
    },
    closeModal() {
      this.modalOpen = false;
      this.$refs.wrap.classList.remove("bg");
    }
  }
};
</script>