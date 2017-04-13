<template>
  <section class="container">
    <div>
      <section id="main" class="main" role="main">
        <div id="loop-container" class="loop-container">
          <div class="post-12 page type-page status-publish hentry entry">
            <article>
              <div class="post-header">
                <h1 class="post-title">{{title}}</h1>
              </div>
              <div v-html="content" class="post-content">
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'content'],
};
</script>

<style scoped>
.about {
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 20px;
}
.about > p {
  font-size: 0.9em;
  width: 600px;
  margin: 0 auto;
  padding-bottom: 20px;
}

</style>
