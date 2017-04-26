<template>
  <div>
    <form id="formy" name="formy" v-bind:action="getPath">
      <input type="hidden" name="_csrf" :value="csrf" />
    </form>
    <button @click="testy">cliky me!!</button>
  </div>
</template>

<script>
let userId = document.getElementById("userId").value
let groups = []
let csrf = document.getElementsByName('_csrf')[0].value
module.exports = {
  components: {
  },
  computed: {
    getPath(){
      return "/groups/test"
    },
  },
  data: function(){
    return {
      userId: userId,
      csrf: csrf
    }
  },
  methods: {
    testy: function(){
      document.getElementById('formy').submit()
    },
  },
  beforeRouteEnter(to, from, next){
    let route = "/groups/allGroups/" + userId
    fetch(route).then(function(resp){
      return resp.text()
    }).then(function(data){
      console.log(data)
      groups = data
      next()
    })
  }
}
</script>
