<template>
  <div class="container welcome">
      <div v-if="showForm">
         <SignUp></SignUp>
         <p>Do you have an account? <span @click = "showForm =! showForm">Log in </span></p>
      </div>
      <div v-else>
         <Login></Login>
         <p>Are you new user? <span @click=" showForm =! showForm">Create account</span></p>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default {
  components: {
      Login, SignUp
   },

   setup() {
     let  showForm = ref(true)

      return{showForm}
   }
   
}
</script>

<style>

</style>