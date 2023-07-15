<template>
   <h3>Sign up </h3>
   <div v-if="error" class="error">{{ error }}</div>
      <form @submit.prevent="SignUp" >
         <input type="text" placeholder="displayName" v-model="displayName">
         <input type="email" placeholder="email" v-model="email">
         <input type="password" placeholder="password" v-model="password">
         <button>Create</button>
      </form>

</template>

<script>
import { ref } from 'vue'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'vue-router';
export default {
   setup(props, context) {
      let displayName = ref("");
      let email = ref("");
      let password = ref("");
      let error = ref(null);
      //Router
      let router = useRouter();

      let SignUp = async () => {
         try {
            let res = await createUserWithEmailAndPassword(auth, email.value, password.value);
            if (res) {
               updateProfile(res.user, { displayName: displayName.value });
               // redirect after user is signed up and created account
               // router.push('/chatroom')
               context.emit("enterChatroom")
            }
         } catch (err) {
            error.value = err.message
         }
      }
      return { displayName, email, password, error, SignUp}
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