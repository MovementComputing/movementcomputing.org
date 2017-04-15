<template>
  <section class="container">
    <div>
      <div class="about">
        <p>MOCO is the international symposium on movement and computing. MOCO aims to gather academics and practitioners interested in the computational study, modelling, representation, segmentation, recognition, classification, or generation of movement information. MOCO is positioned within emerging interdisciplinary domains between art & science.</p>
      </div>
      <section id="main" class="main" role="main">
        <h1 class="screen-reader-text">Movement &amp; Computing Posts</h1>
        <div id="loop-container" class="loop-container">
          <div v-for="post in posts" class="post type-post status-publish format-standard hentry category-uncategorized entry">
            <article>
              <div class="post-header">
                <h2 class="post-title">
                  <nuxt-link :to="post.attributes.slug">{{post.attributes.title}}</nuxt-link>
                </h2>
                <div class="post-meta">
                  <p>Published {{formatDate(post.attributes.date)}} by {{post.attributes.author}}</p>
                </div>
              </div>
              <div class="post-content">
                <p>{{post.body}}</p>
                <center>
                  <nuxt-link class="more-link" :to="post.attributes.slug">Continue reading <span class="screen-reader-text">Call for Hosting MOCO in 2018 &amp; 2019</span></nuxt-link>
                </center>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import posts from '../static/content/postlist.json';

export default {
  asyncData() {
    return {
      posts,
    };
  },
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
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 20px;
}
.post-meta p {
  margin-bottom: 0;
}
</style>
