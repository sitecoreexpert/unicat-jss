<template>
  <div class="top_bar">
    <div class="top_bar_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
              <ul class="top_bar_contact_list">
                <li><div class="question">Have any questions?</div></li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <template v-if="fields.data.contextItem.parent.parent.orgPhone.jss.editable">
                    <div v-html="fields.data.contextItem.parent.parent.orgPhone.jss.editable"></div>
                  </template>
                  <div v-else>{{ fields.data.contextItem.parent.parent.orgPhone.jss.value }}</div>
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <template v-if="fields.data.contextItem.parent.parent.orgEmail.jss.editable">
                    <div v-html="fields.data.contextItem.parent.parent.orgEmail.jss.editable"></div>
                  </template>
                  <div v-else>
                    {{ fields.data.contextItem.parent.parent.orgEmail.jss.value.text }}
                  </div>
                </li>
              </ul>
              <div class="top_bar_login ml-auto">
                <div class="login_button"><a href="#">Register or Login</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Text } from '@sitecore-jss/sitecore-jss-vue';

export default {
  name: 'ContactInformation',
  components: {
    // ScText: Text,
  },
  props: {
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    console.log(this.fields.data);
  },
};
</script>
