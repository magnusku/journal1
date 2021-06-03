<template>

  <header>
    <h1>Journal1</h1>
  </header>

  <main>
    <FileImport @upload-success="getList"/>

    <label>
      <span>Filter:</span>
      <input type="text" 
            v-model="textFilter"/>
    </label>
      <table>
      <thead>
        <tr>
          <th>Personal Number</th>
          <th>First Name</th>
          <th>Last name</th>
          <th>Birthday</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in filteredList" 
            :key="record.personalnumber">
          <td>{{ record.personalnumber }}</td>
          <td>{{ record.firstname }}</td>
          <td>{{ record.lastname }}</td>
          <td>{{ record.birthday }}</td>
          <td>{{ record.address }}</td>
        </tr>
      </tbody>
      </table>
  </main>

</template>

<script>
  import { defineComponent, onBeforeMount, ref } from "vue";
  import { useFilter } from "../composition/useFilter.js";
  import FileImport from "./FileImport.vue";

  export default defineComponent({
    components: {
      FileImport
    },
    setup() {      
      const register = ref([]);

      async function getList() {
        const response = await fetch("/api/journal");
        const jsondata = await response.json();
        register.value = jsondata;
      }

      onBeforeMount(() => {
        getList();
      });

      const {textFilter, filteredList} = useFilter(register);

      return {
        textFilter,
        filteredList
      };
    }
  });


</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: green;
}

main {
  width: 60vw;
  margin: 0 auto;
}

h1 {
  margin: 1em;
  color: white;
}
</style>
