<template>
  <div class="logo_container">
    <a href="/">
      <div class="logo_text"><sc-text tag="div" :field="fields.LogoText" :encode="false" /></div>
    </a>
  </div>
</template>

<script>
import { Text } from '@sitecore-jss/sitecore-jss-vue';

export default {
  name: 'Logo',
  components: {
    ScText: Text,
  },
  props: {
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
