<template>
    <div class="text-center">
        <div class="grid">
            Show Data: {{ data.name }}<br/>
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
        <hr/>
        <button @click="setLocale('la')">LA</button><br/>
        <button @click="setLocale('en')">EN</button>
       <hr/>
       Show User: {{ user }}
       Show Role: {{ role }}<br/>
       Show Language: {{ $t('message.hello')}}
        </div>

    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, reactive, ref } from 'vue';
    import { userStore } from '../store/user.store';

    const { getUser, user, role, form, addUser } = userStore()

    const status = ref<string>('open')

    const submitData = async () => {
        await addUser();
    }

    const setLocale = async (value: string) => {
        localStorage.setItem('locale', value);
        window.location.reload();
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

    const fetchData = async () => {
        console.log('data...');
    }

    const fetchData1 = async () => {
        console.log('data1...');
    }

    

    onMounted(async () => {
        await fetchData();
        await fetchData1();
        await getUser();
    })

</script>

<style>
    .status-closed {
        color: red
    }
    .status-open {
        color: green
    }
    .text-center {
        padding: 20px 0px 0px 0px;
        display: grid;
        place-items: center;
    }
</style>