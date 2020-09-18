<template>
<div>
  <h2> hello</h2>
  <ul>
    <li v-for="cheval in chevaux" :key="cheval._id" :cheval="cheval">
      {{cheval.race}}
    </li>
  </ul>
</div>
  

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {

    }
  },

  methods: {

  },

  computed: {
    ...mapGetters('horse', {
  chevaux: 'chevaux',
})

  },
}
</script>

<style scoped>

</style>