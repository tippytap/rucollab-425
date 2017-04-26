<template>
  <div>
  </div>
</template>

<script>
let userId = document.getElementById("userId").value
let groups = []
module.exports = {
  components: {
  },
  data: function(){
    return {
      userId: userId
    }
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
