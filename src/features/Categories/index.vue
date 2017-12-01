
<script>
  import axios from 'axios'
  export default {
    name: 'Categorias',
    data () {
      return {
        categories: [],
        details: []
      }
    },
    async mounted () {
      const url = '/categorias.json'
      this.categories = (await axios.get(url)).data.categories
    },
    methods: {
      toggle (category) {
        if (!category.products.length) return
        const index = this.details.indexOf(category.id)
        if (index > -1) {
          this.details.splice(index, 1)
        } else {
          this.details.push(category.id)
        }
      },
      toggleAll () {
        if (this.details.length) {
          this.details = []
        } else {
          this.details = this.categories
            .map(category => {
              if (!category.products.length) {
                return null
              }
              return category.id
            })
          .filter(id => id != null)
        }
      },
      shouldDisplay (category) {
        const index = this.details.indexOf(category.id)
        return index > -1
      }
    }
  }
</script>

<template>
  <div>
    [<a href="#" @click.prevent="toggleAll">todos</a>]
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th class="text-center" width="1%" nowrap>ID</th>
          <th>Categoria</th>
          <th width="1%" nowrap>Produtos</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody v-for="(category, index) in categories" :key="index">
        <tr class="green" :class="{ clickable: category.products.length }" @click="toggle(category)">
          <td class="text-center">{{ category.id }}</td>
          <td>{{ category.category }}</td>
          <td class="text-center">{{ category.products.length }}</td>
          <td width="1%" nowrap>
            [<a href="#" class="text-primary">editar</a>]
            [<a href="#" class="text-danger">excluir</a>]
          </td>
        </tr>
        <tr v-show="shouldDisplay(category)">
          <td colspan="4">
            <div
              v-for="(product, index) in category.products"
              :key="index">
                {{ product }}
              </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .clickable {
    cursor: pointer;
  }
</style>
