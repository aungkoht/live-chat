<template>
   <h3>Sign up </h3>
      <form >
         <input type="text" placeholder="displayName">
         <input type="email" placeholder="email">
         <input type="password" placeholder="password">
         <button>Create</button>
      </form>

</template>

<script>
export default {

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