<template>
    <form name="importForm">
        <label for="fileinput"> Select file: </label>
        <input id="fileinput" type="file" name="csvfile"/>
        <div>
            <button type="button" @click="submitForm">Import</button>
        </div>
    </form>
</template>

<script setup>
import { ref, defineComponent, onMounted } from "vue";

const importForm = ref();

async function submitForm() {
    const formData = new FormData(document.forms.importForm);
    
    try {
        const response = await fetch("/api/journal/import", {
            method: "POST",
            body: formData
        });

        console.log(response);

        if(response.ok) {
            alert("Upload successful");
        } else {
            alert("Failed to upload");
        }
    } catch(e) {
        console.error(e);
    }
}

</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        padding: 1em;
    }
</style>
