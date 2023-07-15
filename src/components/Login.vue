<template>
   <h3>Log in to your account</h3>
   <div class="error" v-if="error">{{ error }}</div>
      <form @submit.prevent="Login" >
         <input type="email" placeholder="email" v-model="email">
         <input type="password" placeholder="password" v-model=" password">
         <button>Confirm</button>
      </form>

</template>

<script>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/config";
import {useRouter } from "vue-router"


export default {
   setup() {
      let email = ref("");
      let password = ref("");
      let error = ref(null);
      let router = useRouter();

      let Login = async() => {
         try {
            let res = await signInWithEmailAndPassword(auth, email.value, password.value);
            if (!res) {
               throw new Error("Something went wrong, Please try again.")
            }
            // redirect to chatroom page
                  router.push("/chatroom");

            // Instead of using useRouter, i want to use emit function( to know how to use $emit in setup function)
               // context.emit("enterChatroom")
         } catch (err) {
            error.value = "Your password is incorrect!"
            password.value = "";

         }
      }

      return {email, password, error, Login}
   }
   
   
}
</script>

<style>
   .welcome{
      text-align: center;
      padding:20px 0;
   }

   .welcome form{
      max-width:300px;
      margin:20px auto;
   }
   .welcome input{
      display:block;
      width:100%;
      margin:20px auto;
      padding:10px 0;
      border:none;
      border-bottom:1px solid #aaa;
      outline:none;
     
   }
   .welcome span{
      color:#1fce6e;
      text-decoration: underline;
      cursor:pointer;
   }
</style>