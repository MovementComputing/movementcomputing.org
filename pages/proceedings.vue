<template>
  <section class="container">
    <div>
      <section id="main" class="main" role="main">
        <div id="loop-container" class="loop-container">
          <div class="post-12 page type-page status-publish hentry entry">
            <article>
              <div class="post-header">
                <h1 class="post-title">Proceedings</h1>
              </div>
              <div class="post-content">
                <p>The proceedings of the MOCO symposium are published on the ACM Digital library under the International Conference Proceedings Series.</p>
                <p>
                  <a href="http://dl.acm.org/citation.cfm?id=3077981" target="_blank">MOCO'17 Online Proceedings</a><br>
                  <a href="http://dl.acm.org/citation.cfm?id=2948910" target="_blank">MOCO'16 Online Proceedings</a><br>
                  <a href="http://dl.acm.org/citation.cfm?id=2790994" target="_blank">MOCO'15 Online Proceedings</a><br>
                  <a href="http://dl.acm.org/citation.cfm?id=2617995" target="_blank">MOCO'14 Online Proceedings</a>
                </p>
                <h1>MOCO Publications</h1>
                <h3>MOCO'17</h3>
                <div class="bibliography">
                  <ul v-for="entry in bib.moco17">
                    <li>
                      <bib-entry :entry="entry" />
                      <div v-if="false" v-html="entry.bibstring" class="bibstring"></div>
                    </li>
                  </ul>
                </div>
                <h3>MOCO'15</h3>
                <h3>MOCO'16</h3>
                <div class="bibliography">
                  <ul v-for="entry in bib.moco16">
                    <li>
                      <bib-entry :entry="entry" />
                      <div v-if="false" v-html="entry.bibstring" class="bibstring"></div>
                    </li>
                  </ul>
                </div>
                <h3>MOCO'15</h3>
                <div class="bibliography">
                  <ul v-for="entry in bib.moco15">
                    <li>
                      <bib-entry :entry="entry" />
                      <div v-if="false" v-html="entry.bibstring" class="bibstring"></div>
                    </li>
                  </ul>
                </div>
                <h3>MOCO'14</h3>
                <div class="bibliography">
                  <ul v-for="entry in bib.moco14">
                    <li><bib-entry :entry="entry" /></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Page from '../components/Page.vue';
import BibEntry from '../components/BibEntry.vue';
import moco14 from '../static/documents/moco14.bib';
import moco15 from '../static/documents/moco15.bib';
import moco16 from '../static/documents/moco16.bib';
import moco17 from '../static/documents/moco17.bib';

export default {
  async asyncData() {
    return {
      bib: {
        moco14,
        moco15,
        moco16,
        moco17,
      },
    };
  },
  components: { Page, BibEntry },
  head() {
    return {
      title: 'Proceedings of Past MOCO Conferences',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Proceedings of Past MOCO Conferences',
      }],
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
  width: 600px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
