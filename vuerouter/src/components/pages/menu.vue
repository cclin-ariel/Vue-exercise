<template>
  <div class="hello my-3">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/page/">card 1</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/child2">card 2</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/child3">card 3</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="updatePath">LINK</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="beforePath">Back to...</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    updatePath () {
      this.$router.push('/page/child2')
    },
    beforePath () {
      this.$router.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
