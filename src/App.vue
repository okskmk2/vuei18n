<template>
  <div id="app">
    <header>
      <div>
        <label>locale</label>
        <select v-model="$i18n.locale">
          <option v-for="lang in support_langs" :key="lang">{{lang}}</option>
        </select>
      </div>
      <nav>
        <router-link to="/">
          <span>home</span>
        </router-link>
        <router-link to="/about">
          <span>about</span>
        </router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      support_langs: ["ko", "en", 'ja', 'zh']
    };
  }
};
</script>