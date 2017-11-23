<template>
	<div>
		<h1>Calculadora</h1>
		<input type="number" v-model.number="resultado">
		<br>
		<section>
			<button v-on:click="number('1')">1</button>
			<button v-on:click="number('2')">2</button>
			<button v-on:click="number('3')">3</button>
			<button v-on:click="number('4')">4</button>
			<button v-on:click="number('5')">5</button>
			<button v-on:click="number('6')">6</button>
			<button v-on:click="number('7')">7</button>
			<button v-on:click="number('8')">8</button>
			<button v-on:click="number('9')">9</button>
		</section>
			<section>
				<button v-on:click="calc('somar')">+</button>
				<button v-on:click="calc('subtrair')">-</button>
				<button v-on:click="calc('multiplicar')">*</button>
				<button v-on:click="calc('dividir')">/</button>
				<button v-on:click="calc('igual')">=</button>
				<button v-on:click="zerar()">C</button>
			</section>
	</div>
</template>

<script>
	export default{
		name:'Calculadora2',
		data(){
			return{
				v1:0,
				v2:0,
				resultado:null
			}
		},
		methods:{
			number(operador){
				if(operador === '1'){
					this.resultado = 1
				} else if(operador === '2'){
					this.resultado = 2
				}else if(operador === '3'){
					this.resultado = 3
				}else if(operador === '4'){
					this.resultado = 4
				}else if(operador === '5'){
					this.resultado = 5
				}else if(operador === '6'){
					this.resultado = 6
				}else if(operador === '7'){
					this.resultado = 7
				}else if(operador === '8'){
					this.resultado = 8
				}else if(operador === '9'){
					this.resultado = 9
				}
			},
			calc(operador){
				if(operador === 'somar'){
					this.resultado = this.v1 + this.v2
				}else if(operador === 'subtrair'){
					this.resultado = this.v1 - this.v2
				}else if (operador === 'multiplicar'){
					this.resultado = this.v1 * this.v2
				}else if(operador === 'dividir'){
					this.resultado = this.v1 / this.v2
				}else if(operador === 'igual'){
					this.resultado =this.v1 = v2
				} 

			},
			zera(){
				this.v1 = 0
				this.v2 = 0
				this.resultado = null
			}

		}
				
	}
</script>

<style scoped>
	
</style>