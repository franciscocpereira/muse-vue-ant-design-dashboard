<!-- 
	This is the default layout, used in sign-in and sign-up pages.
 -->

<template>
	<div>
        <a-layout>

            <homeHeader></homeHeader>

            <a-layout-content>
				<router-view />
			</a-layout-content>

            <homeFooter></homeFooter>

        </a-layout>
	
			
	</div> 
</template>

<script>

	export default ({
		components: {
			
		},
		data() {
			return {
			}
		},
		computed: {
			// Sets layout's element's class based on route's meta data.
			layoutClass() {
				return this.$route.meta.layoutClass ;
			}
		},
	})

</script>