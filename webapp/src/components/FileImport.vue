<template>
    <form name="importForm">
        <label for="fileinput"> Select file: </label>
        <input id="fileinput" type="file" name="csvfile"/>
        <div>
            <button type="button" @click="submitForm">Import</button>
        </div>
    </form>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "FileImport",
    setup(props, context) {
        const importForm = ref();

        async function submitForm() {
            const formData = new FormData(document.forms.importForm);
            

            if (true) {
                try {
                    const response = await fetch("/api/journal/import", {
                        method: "POST",
                        body: formData
                    });

                    if(response.ok) {
                        alert("Upload successful");
                    } else {
                        alert("Failed to upload");
                    }
                } catch(e) {
                    console.error(e);
                }
            } else {
                console.log("No file was selected");
            }
        }

        return {
            importForm,
            submitForm
        }
    }
});


</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        padding: 1em;
    }
</style>
