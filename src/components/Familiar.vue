<template>
    <div class="Familiar_user">
        <div class="container_Familiar_user">
            <form v-on:submit.prevent="processSignUp">
                <label id="user_Parentexco"> 
                    <input type="text" v-model="user.Parentesco" placeholder="Parentesco" required>
                </label>
                <label id="user_email"> 
                    <input type="email" v-model="user.email" placeholder="E-mail" required>
                </label>
                <button type="submit">Registrar Familiar</button>
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
                Parentesco: "",
                email: ""
                
            }
        }
    },

    methods: {
        processSignUp: function () {
            axios.post("https://hospital-bd-sprint1-nes.herokuapp.com/user/familiar/", this.user, { headers: {} })
                .then((result) => {
                    alert("Registro Exitoso");
                    let dataP = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh
                    }
                    this.$emit('completeFamiliar', dataFamiliar)
                }).catch((error) => {
                    console.log(error)
                    alert("Error: fallo el registro");

                })
        }
    }
}
</script>

<style>
.Familiar_user {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_Familiar_user {

    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Familiar_user h2 {
    color: #283747;
}

.Familiar_user form {
    width: 70%;
}

.Familiar_user input {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px0;
    border: 1px solid #283747;
}

.Familiar_user button {
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #3db962;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px0 25px0;

}

.Familiar_user button:hover {
    color: #147721;
    background: rgb(231,238,235);
    border: 1px solid #283747;
}
</style>