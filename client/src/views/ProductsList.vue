<template>
  <div style="border: 2px solid red">
	<h2 class="test"	>1C КУРС </h2>
	<div>
		<small> {{products}}</small>
	</div>
  
  </div>
</template>

<script>
export default {
  computed: {
	products() {
		return this.$store.getters['products/all']
	}
  }
}
</script>


