<template>
  <nav class="main-nav">
    <router-link to="/">
      <span>{{ $t('home') }}</span>
    </router-link>
    <router-link to="/about">
      <span>{{ $t('about') }}</span>
    </router-link>
  </nav>
</template>
<i18n>
  en: 
    home: Home
    about: About
  ko: 
    home: 홈
    about: 소개
</i18n>