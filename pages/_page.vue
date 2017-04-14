<template>
  <page :title="title" :content="content" />
</template>

<script>
import axios from 'axios';
import Page from '../components/Page.vue';

export default {
  async asyncData({ isServer, params }) {
    let data = {};
    if (isServer) {
      // eslint-disable-next-line
      data = require(`../static/content/${params.page}.json`);
    } else {
      const res = await axios.get(`/content/${params.page}.json`);
      data = res.data;
    }
    return {
      title: data.attributes.title,
      content: data.body,
    };
  },
  components: { Page },
};
</script>
