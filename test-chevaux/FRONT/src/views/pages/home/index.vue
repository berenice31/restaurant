<template>
  <div>
    <podium />
    <router-link 
      :to="{ 
        name: 'horse' 
      }"
    >
      <button type="button" class="btn btn-outline-primary"> Votez pour votre race préférée</button>
    </router-link>
  </div>
</template>

<script>
import podium from '../../components/Podium/index';
export default {
  components: {
    podium
  }

}
</script>