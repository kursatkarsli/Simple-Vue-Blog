<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center" >
      <div class="card m-1" v-for="post in data">
        <img class="card-img-top" :src="post.thumbnail" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">{{post.content}}</p>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import customAxios from '../customAxios'
export default {
data(){
 return{ data:[]
}},


  created(){
    
    customAxios.get("/posts.json").then(res=>{
      this.data = [...Object.values(res.data)]
    console.log('This Data', this.data)
    
    }).catch(e=> console.log(e))
  }
}
</script>
<style>
  .card {
    width: 300px;
  }
</style>
