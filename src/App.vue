<template>
  <div id="app" class="app">
    <div class="header">
        <h1>Hospital En Casa </h1>
        <nav>
            <button v-if="!is_auth" v-on:click="loadLogIn"> Iniciar Sesión </button>
            <button v-if="!is_auth" v-on:click="loadConsultas"> Consultas </button>
            <button v-if="!is_auth" v-on:click="loadUsuario"> Usuario</button>
            <button v-if="!is_auth" v-on:click="loadPaciente"> Paciente </button> 
            <button v-if="!is_auth" v-on:click="loadFamiliar"> Familiar </button>
            <button v-if="!is_auth" v-on:click="loadPersonalSalud"> Personal Salud </button>
            
        </nav>
    </div>
  </div>
  <div class="main-component">
    <router-view 
      v-on:completedLogIn= "completedLogIn"
      v-on:completedConsultas= "completedConsultas"
      v-on:completedUsuario= "completedUsuario"
      v-on:completedPaciente= "completedPaciente"
      v-on:completedFamiliar= "completedFamiliar"
      v-on:completedPersonalSalud= "completedPersonalSalud"
      ></router-view>
  </div>
  <div class="footer">
      <h2>Comprometidos con tu Bienestar </h2>
  </div>    
</template>

<script>
export default({

  data: function(){
      return{
        is_auth: false
      }
  },

  methods:{
    veryAuth: function(){
      if(this.is_auth== false)
        this.$router.push({name:"logIn"})
    },  
    loadLogIn: function(){
        this.$router.push({name:"logIn"})
    },
    loadConsultas: function(){
        this.$router.push({name:"consultas"})
    },

    loadUsuario: function () {
      this.$router.push({ name: "usuario" })
    },

    loadPaciente: function () {
      this.$router.push({ name: "paciente" })
    },

    loadFamiliar: function () {
      this.$router.push({ name: "familiar" })
    },

    loadPersonalSalud: function () {
      this.$router.push({ name: "personalSalud" })
    },

    completeLogIn: function(data){

    },

    completeConsultas: function(data){

    },

    completeUsuario: function (data) {

    },

    completePaciente: function (data) {

    },

    completeFamiliar: function (data) {

    },

    completePersonalSalud: function (data) {

    }

  },

  created:function(){
    this.veryAuth();
  }
})
</script>


<style>
body{
  margin: 0 0 0 0; 
}

.header{
  margin: 0;
  padding: 0;
  width:100%;
  height: 10vh;
  min-height: 100px;
  background-color: #29c06d;
  color: #0d0d0e;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1{
  width: 50%;
  text-align: center;
}

.header nav button
{
  color: #E5E7E9;
  background: #297022;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
}

.header nav button:hover
{
  color: #248354;
  background: #E5E7E9;
  border: 1px solid #E5E7E9;
}

.main-component
{
  height: 65vh;
  margin: 0%;
  padding: 0%;
  background-image: url();
}

.footer
{
  margin:0;
  padding:0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #0db963;
  color: #080808;
}

.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
