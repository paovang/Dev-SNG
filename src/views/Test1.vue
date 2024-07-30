<template>
    <div>
        Show: {{ data.name }}<br/>
        Show Age: {{ data.age }}<br/>
        Show1: {{ data1.name }}<br/>
        Show Msg: {{ data1.msg }}<br/>
        <button @click="showData('hello world')">Show Data</button>
        <br/>
        Show Computed: {{ publishedBooksMessage }}<br/><br/>

       <!-- <p v-if="status === 'open'" style="color: green"> Open</p>
       <p v-if="status === 'closed'" style="color: red" > Closed</p> -->

       <!-- <p :class="status === 'open' ? 'status-open' : 'status-closed'">{{ status === 'open' ? 'Open' : 'Closed' }}</p> -->

       <p v-if="status === 'open'" class="status-open">Open</p>
       <p v-else-if="status === 'pending'" class="status-open">Pending</p>
       <p v-else class="status-closed">Closed</p>

       <br/><br/>
       <input v-model="form.name" placeholder="please enter name..."><br/>
       <input v-model="form.surname" placeholder="please enter surname..."><br/>
        <button @click="submitData">Submit Data</button>
       

    </div>
</template>

<script lang="ts" setup>
    import { computed, reactive, ref } from 'vue';

    const status = ref<string>('open')
    const form = reactive<any>({});

    const submitData = () => {
        console.log(form);
    }

    const data = ref<any>({});
    const data1 = reactive<any>({});

    const showData = (message: string) => {
        data.value.name = 'PAO 1';
        data.value.age = [20, 19];

        data1.name = 'PAO 1';
        data1.age = [20, 10];
        data1.age = [20, 10];
        data1.msg = message;
    }

    const author = reactive({
        name: 'John Doe',
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })

    const publishedBooksMessage = computed(() => {
        return author.books.length > 0 ? 'Have' : 'Not'
    })

</script>

<style>
    .status-closed {
        color: red
    }
    .status-open {
        color: green
    }
</style>