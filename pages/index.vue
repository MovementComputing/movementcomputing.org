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
                  <a :href="post.attributes.slug">{{post.attributes.title}}</a>
                </h2>
                <div class="post-meta">
                  <p>Published {{post.attributes.date}} by Jules Françoise</p>
                </div>
              </div>
              <div class="post-content">
                <div v-html="post.body + '...'"></div>
                <p>
                  <a class="more-link" href="/call-for-hosting-moco-in-2018-2019/">Continue reading <span class="screen-reader-text">Call for Hosting MOCO in 2018 &amp; 2019</span></a>
                </p>
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

</style>
