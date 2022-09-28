<template>
    <div class="Consultas_user">
        <div class="container_Consultas_user">
            <form v-on:submit.prevent="processSignUp">
                             
                <label id="user_familiar"> 
                    <input type="number" v-model="user.familiar" placeholder="id de Familiar" required>
                </label>
                
                <button type="submit">Consultar paciente</button>
            </form>    
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default { 
    data:function(){
        return{
            user:{
                paciente: "",
                familiar: "",
                personalSalud: {
                    lastChangeDate: (new Date()).toJSON().toString(),
                    balance: "",
                    isActive: true
                }  
            }
        }
    },

    methods:{
        processSignUp:function(){
            axios.post("https://hospital-bd-sprint1-nes.herokuapp.com/user/", this.user,{headers:{}})
            .then((result)=>{
                alert("Registro Exitoso");
                let dataSignUp={
                    username: this.user.username,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh
                }
                this.$emit('completeConsultas',dataConsultas)
            }).catch((error)=>{
                console.log(error)
                alert("Error: fallo el registro");

            })
        }
    }
}
</script>

<style>
.Consultas_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_Consultas_user {

    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.Consultas_user h2
{
    color: #283747;
}
.Consultas_user form
{
    width: 70%;
}
.Consultas_user input
{
height: 40px;
width: 100%;
box-sizing: border-box;
padding: 10px 20px;
margin: 5px0;
border: 1px solid #283747;
}
.Consultas_user button
{
width: 100%;
height: 40px;
color: #E5E7E9;
background: #3db962;
border: 1px solid #E5E7E9;
border-radius: 5px;
padding: 10px 25px;
margin: 5px0 25px0;

}
.Consultas_user button:hover
{
color: #147721;
background: rgb(231, 238, 235);
border: 1px solid #283747;
}
</style>