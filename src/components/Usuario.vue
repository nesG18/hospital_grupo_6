<template>
    <div class="Usuario_user">
        <div class="container_Usuario_user">
            <form v-on:submit.prevent="processSignUp">
                <label id="user_username"> 
                    <input type="text" v-model="user.username" placeholder="Username" required>
                </label>
                <label id="user_password">
                    <input type="password" v-model="user.password" placeholder="Password" required>
                </label>
                <label id="user_perfil"> 
                    <input type="text" v-model="user.perfil" placeholder="Perfil" required>
                </label>
                <label id="user_nombres">
                    <input type="text" v-model="user.nombres" placeholder="Nombres" required>
                </label>
                <label id="user_apellidos"> 
                    <input type="text" v-model="user.apellidos" placeholder="Apellidos" required>
                </label>
                <label id="user_telefono"> 
                    <input type="text" v-model="user.telefono" placeholder="Telefono" required>
                </label>
                <label id="user_genero"> 
                    <input type="text" v-model="user.genero" placeholder="Genero" required>
                </label>
                <button type="submit">Registrar Usuario</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: function () {
        return {
            user: {
                username: "",
                password: "",
                perfil: "",
                nombres: "",
                apellidos: "",
                telefono: "",
                genero: ""
            }
        }
    },

    methods: {
        processSignUp: function () {
            axios.post("https://hospital-bd-sprint1-nes.herokuapp.com/user/", this.user, { headers: {} })
                .then((result) => {
                    alert("Registro Exitoso");
                    let dataU = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh
                    }
                    this.$emit('completeUsuario', dataUsuario)
                }).catch((error) => {
                    console.log(error)
                    alert("Error: fallo el registro");

                })
        }
    }
}
</script>

<style>
.Usuario_user {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_Usuario_user {

    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Usuario_user h2 {
    color: #283747;
}

.Usuario_user form {
    width: 70%;
}

.Usuario_user input {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px0;
    border: 1px solid #283747;
}

.Usuario_user button {
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #3db962;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px0 25px0;

}

.Usuario_user button:hover {
    color: #147721;
    background: rgb(231,238,235);
    border: 1px solid #283747;
}
</style>