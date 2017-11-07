<template>
	<div id="cal">
		<section>
			<input type="number" name="" v-model.number="v1">
			<input type="number" name="" v-model.number="v2">
			<input type="number" name="" v-model.number="resultado">
		</section>

	<section>
		<button v-on:click="calc('somar')">+</button>
		<button v-on:click="calc('subtrair')">-</button>
		<button v-on:click="calc('multiplicar')">*</button>
		<button v-on:click="calc('dividir')">/</button>
		<button v-on:click="zerar()">C</button>
	</section>
	</div>

</template>

<script>
	export default{
		name:'Calculadora',
		data () {
			return {
				v1:0,
				v2:0,
				resultado:null
			}
		},
	
	methods:{
		calc(operador){
			if(operador === 'somar'){
				this.resultado = this.v1 + this.v2
			}else if(operador==='subtrair'){
				this.resultado=this.v1-this.v2
			}else if (operador==='multiplicar'){
				this.resultado=this.v1*this.v2
			}else if(operador==='dividir'){
				this.resultado=this.v1/this.v2
			}
		
		},
		zerar(){
			this.v1 = 0
			this.v2 = 0
			this.resultado = null
		}
	}
}

</script>

<style scoped>
	#cal{

		display:block;
		margin:0 auto;
		padding: 20px;
		background-color:#00f;
		width:300px;
		height: 500px;
	}
</<style>