<template>
  <div class="container welcome">
      <div v-if="showForm">
         <SignUp @enterChatroom="enterChatroom"></SignUp>
         <p>Do you have an account? <span @click = "showForm =! showForm">Log in </span></p>
      </div>
      <div v-else>
         <Login @enterChatroom="enterChatroom"></Login>
         <p>Are you new user? <span @click=" showForm =! showForm">Create account</span></p>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useRouter} from "vue-router"

export default {
  components: {
      Login, SignUp
   },

   setup() {
      let router = useRouter();
      let showForm = ref(true)
      let enterChatroom = () => {
         router.push("/chatroom")
      }
      return{showForm, enterChatroom}
   }
   
}
</script>

<style>

</style>