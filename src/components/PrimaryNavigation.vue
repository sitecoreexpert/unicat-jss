<template>
  <nav class="main_nav_container ml-auto" v-if="this.fields.data.datasource">
    <ul class="main_nav">
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        v-bind:class="[isActive(item.link.jss.value.href.toLowerCase()) ? activeClass : '']"
      >
        <a :href="item.link.jss.value.href.toLowerCase()">{{ item.shortTitle.jss.value }}</a>
      </li>
    </ul>
  </nav>
  <div class="main_nav_container ml-auto" v-else>Please set the data source.</div>
</template>

<script>
// import { Text, Link } from '@sitecore-jss/sitecore-jss-vue';

export default {
  name: 'PrimaryNavigation',
  components: {
    // ScText: Text,
    // ScLink: Link,
  },
  props: {
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    navigationItems() {
      return this.fields.data.datasource.children;
    },
    activeClass() {
      return 'active';
    }
  },
  methods: {
    isActive(url) {
      return this.$router.currentRoute.fullPath.toLowerCase() == url;
    },
  },
};
</script>
