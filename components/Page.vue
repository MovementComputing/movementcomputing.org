<template>
  <section class="container">
    <div>
      <section id="main" class="main" role="main">
        <div id="loop-container" class="loop-container">
          <div class="post-12 page type-page status-publish hentry entry">
            <article>
              <div class="post-header">
                <h1 class="post-title">{{meta.title}}</h1>
                <div v-if="meta.type === 'post'" class="post-meta">
                  <p>Published {{formatDate(meta.date)}} by {{meta.author}}</p>
                </div>
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
  props: ['meta', 'content'],
  methods: {
    formatDate(dateStr) {
      const date = dateStr.split('T')[0].split('-');
      const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][Number(date[1] - 1)];
      return `${month} ${date[2]}, ${date[0]}`;
    },
  },
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
