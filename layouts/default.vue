<template>
  <div id="overflow-container" class="overflow-container">
    <a class="skip-content" href="#main">Skip to content →</a>
    <div id="max-width" class="max-width">
      <my-header/>
      <nuxt/>
      <footer id="site-footer" class="site-footer" role="contentinfo">
        <span>
          Copyright © MOCO, 2015.<br>
          Static website built with <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>. Style based on <a href="https://www.competethemes.com/founder/" target="_blank">Founder WordPress Theme</a>.
        </span>
      </footer>
    </div>
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
