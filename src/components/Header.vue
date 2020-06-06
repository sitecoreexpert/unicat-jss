<template>
  <header class="header">
    <sc-placeholder :rendering="rendering" name="unicat-header-top-placeholder" />
    <div class="header_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <sc-placeholder
              class="header_content d-flex flex-row align-items-center justify-content-start"
              name="unicat-header-placeholder"
              :rendering="rendering"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Placeholder } from '@sitecore-jss/sitecore-jss-vue';

export default {
  name: 'Header',
  components: {
    ScPlaceholder: Placeholder,
  },
  props: {
    rendering: {
      type: Object,
    },
  },
};
</script>
