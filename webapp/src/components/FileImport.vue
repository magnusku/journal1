<template>
    <form name="importForm">
        <label for="fileinput"> Select file: </label>
        <input id="fileinput" type="file" name="csvfile"/>
        <button type="button" @click="submitForm">Import</button>
    </form>
</template>

<script setup>
import { ref, defineComponent, onMounted, defineEmit } from "vue";

const importForm = ref();

const emit = defineEmit(["upload-success", "upload-fail"])

async function submitForm() {
    const formData = new FormData(document.forms.importForm);
    
    try {
        const response = await fetch("/api/journal/import", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            emit("upload-success");
        } else {
            emit("upload-fail");
        }
    } catch(e) {
        console.error(e);
    }
}

</script>

<style scoped>

</style>
