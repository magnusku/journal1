<template>

  <header>
    <h1>Journal1</h1>
  </header>

  <main>

  <section class="action-panel">
    <FileImport @upload-success="getList" @upload-failed=""/>
  </section>


    <div class="table-container" v-if="register.length > 0">
       
      <form>
      <label>
          <span>Filter:</span>
          <input type="text" 
                v-model="textFilter"/>
        </label>
      </form>
      
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
      </div>
  </main>

</template>

<script setup>
  import { defineComponent, onBeforeMount, ref } from "vue";
  import { useFilter } from "../composition/useFilter.js";
  import FileImport from "./FileImport.vue";
   
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
  margin: 1em auto;
}

h1 {
  margin: 1em;
  color: white;
}

.action-panel {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ddd;
  border-radius: .3em;
  padding: 2em;
  margin: 1em 0;
}

.table-container {
  height: 80vh;
  overflow-x: auto;
}

table {
  width: 100%;
}

tbody tr:nth-child(odd) {
  background: #ddd;
}
</style>
