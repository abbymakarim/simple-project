<template>
  <div class="home">
  <div class="row mt-5">
    <div class="col" style='padding: 0px 100px'>
      <h2>Monthly Revenue</h2>
      <line-chart :data="chart" label="Revenue"></line-chart>
    </div>
  </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Home',
  methods: {
    getRevenues(){
      store.dispatch('getRevenue')
    }
  },
  created(){
    this.getRevenues()
  },
  computed: {
    chart() {
      return store.state.chartData
    }
  } 
}
</script>
