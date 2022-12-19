<template>
	<div class="wrapper">
		<ThisHeader class="wrapper__header"></ThisHeader>
		<main class="wrapper__main">
      <div class="wrapper__main-layout">
        <router-view></router-view>
      </div>
		</main>
		<ThisFooter class="wrapper__footer"></ThisFooter>
	</div>
</template>

<script lang="js">

import { defineComponent} from "vue";
import ThisHeader from './components/ThisHeader.vue';
import ThisFooter from './components/ThisFooter.vue';

export default defineComponent({
  name: "App",
  components: {
    ThisHeader, ThisFooter
  },
  setup() {
    return {}
  }
})
</script>
