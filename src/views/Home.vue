
<template>
	<div>
        <homeHeader></homeHeader>
        <homeFooter></homeFooter>


	</div>
</template>

<script>

    import HomeHeader from '../components/Headers/HomeHeader' ;
	import HomeFooter from '../components/Footers/HomeFooter' ;

	export default ({
        components: {
			HomeHeader,
			HomeFooter,
		},
		data() {
			return {
			}
		},
		computed: {
			
		},
	})

</script>