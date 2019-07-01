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
        <GlobalMenu></GlobalMenu>
        <nav class="user-nav">
          <I18nComobo></I18nComobo>
          <button @click="openModal('login')">{{$t('login')}}</button>
          <button @click="openModal('join')">{{$t('join')}}</button>
        </nav>
      </div>
    </header>
    <router-view class="container" />
    <footer>
      <div class="container">footer</div>
    </footer>
  </div>
</template>
<i18n>
  en: 
    login: Login
    join: Join
  ko: 
    login: 로그인
    join: 회원가입
</i18n>
<script>
import I18nComobo from "../components/i18n-combo";
import GlobalMenu from "../components/GlobalMenu";

export default {
  name: "app",
  data() {
    return {
      modalOpen: false
    };
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
  },
  components: {
    I18nComobo,
    GlobalMenu
  }
};
</script>