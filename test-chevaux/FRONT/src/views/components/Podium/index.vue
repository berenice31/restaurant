<template>
<div>
  <h1 class="title"> Voici les 3 races les plus appréciées </h1>
  <div class="container">
    <div class="card">
      <img class="card-img-top" :src=" require ('./images/sf.jpg')" alt="selle francais"/>
      <div class="card-body">
        <p class="card-title"> Le Selle Français</p>
        <p class="card-text"> France </p>
        <p class="card-text"> 55% </p>
      </div>
    </div>

    <div class="card">
      <img class="card-img-top" :src=" require ('./images/connemara.jpg')" alt="connemara"/>
      <div class="card-body">
        <p class="card-title"> Le Connemara</p>
        <p class="card-text"> Irlande </p>
        <p class="card-text"> 45% </p>
      </div>
    </div>

    <div class="card">
      <img class="card-img-top" :src=" require ('./images/paintt.jpg')" alt="paint horse"/>
      <div class="card-body">
        <p class="card-title"> Le Paint Horse</p>
        <p class="card-text"> Etats-Unis </p>
        <p class="card-text"> 39% </p>
      </div>
    </div>
  </div>
  
  
</div>
 
</template>

<script>
export default {
  
}
</script>

<style scoped src="./podium.css" />

