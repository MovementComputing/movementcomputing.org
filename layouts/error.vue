<template>
  <main>
    <article class="error">
        <h1>Error 404: Sorry, this page does not exist</h1>
        <p>If you think this is a bug, please send an email to the steering committee</p>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: '404 - Page not found!',
    };
  },
};
</script>

<style scoped>
.error {
  margin: 5%;
  text-align: center;
}
</style>
