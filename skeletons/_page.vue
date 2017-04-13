<template>
  <page :title="title" :content="content" />
</template>

<script>
import data from '{{MARKDOWNFILE}}';
import Page from '../components/Page.vue';

export default {
  async asyncData() {
    return {
      title: data.attributes.title,
      content: data.body,
    };
  },
  components: { Page },
};
</script>
