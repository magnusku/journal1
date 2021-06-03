import {computed, ref} from "vue";

export function useFilter(list) {

    const textFilter = ref("");

    const filteredList = computed(() => {
      return list.value.filter(record => {
        if (textFilter.value.length > 0) {
          return Object.values(record).some(valueToFilter => { 
              return valueToFilter.toLowerCase().indexOf(textFilter.value.toLowerCase()) > -1; 
            }); 
        }
        return true;
      });
    });

    return {
        textFilter,
        filteredList
    }
}