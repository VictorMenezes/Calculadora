<template>
	<div id="calc">
		<h1 class="calc-h1">Calculadora</h1>
		<input class="input-calc" type="number" v-model="visor">
		<br>
		<section class="butao">
			<button v-on:click="preencher('1')">1</button>
			<button v-on:click="preencher('2')">2</button>
			<button v-on:click="preencher('3')">3</button>
			<button v-on:click="preencher('4')">4</button>
			<button v-on:click="preencher('5')">5</button>
			<button v-on:click="preencher('6')">6</button>
			<button v-on:click="preencher('7')">7</button>
			<button v-on:click="preencher('8')">8</button>
			<button v-on:click="preencher('9')">9</button>
		</section>
			<section class="butao2">
				<button v-on:click="setOperador('somar')">+</button>
				<button v-on:click="setOperador('subtrair')">-</button>
				<button v-on:click="setOperador('multiplicar')">*</button>
				<button v-on:click="setOperador('dividir')">/</button>
				<button v-on:click="calc()">=</button>
				<button v-on:click="zerar()">C</button>
			</section>
	</div>
</template>

<script>
	export default{
		name:'Calculadora2',
		data(){
			return{
				v1:'',
				v2:'',
				resultado:'',
				operador:null,
				visor:''
			}
		},
		methods:{
			preencher(value){
				if (this.operador === null){
					this.v1 = this.v1 + value
					this.visor = this.v1
				} else{
					this.v2 = this.v2 + value
					this.visor = this.v2
				}
			},
			setOperador(operador){
				this.operador = operador
			},
			calc(){
				if(this.operador === 'somar'){
					this.resultado = parseInt(this.v1) + parseInt(this.v2)
				}else if(this.operador==='subtrair'){
					this.resultado=parseInt(this.v1)-parseInt(this.v2)
				}else if (this.operador==='multiplicar'){
					this.resultado=parseInt(this.v1)*parseInt(this.v2)
				}else if(this.operador==='dividir'){
					this.resultado=parseInt(this.v1)/parseInt(this.v2)
				}
				this.visor = parseInt(this.resultado) 
			}
		}
			
}

</script>

<style scoped>
	#calc{
		display:block;
		margin:0 auto;
		padding: 20px;
		background-color:#f0f;
		width:300px;
		height:70vh;
		border-radius:15px;
	}
	.calc-h1{
		font-family: verdana;
		font-size:20px;
		text-align:center;
		color:#f00;
		padding-top:80px;
	}
	.butao{
		display:flex;
		flex-direction:column;
		padding-top:40px;

	}
</style>