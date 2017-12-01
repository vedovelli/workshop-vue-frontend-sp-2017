
<script>
  export default {}
</script>

<template>
  <div>
    <h3>Minha maravilhosa single page app!</h3>
    <ul>
      <li>
        <router-link :to="{ name: 'index' }">Categorias</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'products.index' }">Produtos</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style lang="sass" src="./assets/sass/app.scss"></style>
