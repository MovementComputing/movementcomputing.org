<template>
  <div class="outward_container">
    <img src="/images/moco_header.png" alt="MOCO - banner">
    <my-header/>
    <nuxt/>
    <footer id="site-footer" class="site-footer" role="contentinfo">
      <span>
        Copyright © MOCO, 2015.<br>
        Static website built with <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>. Style based on <a href="https://www.competethemes.com/founder/" target="_blank">Founder WordPress Theme</a>.
      </span>
    </footer>
  </div>
</template>

<script>
import MyHeader from '../components/Header.vue';

export default {
  components: { MyHeader },
};
</script>

<style>
.outward_container {
  max-width: 1400px;
  & > img {
    width: 100%;
  }
}
</style>
