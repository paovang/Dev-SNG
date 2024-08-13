<template>
    <div>
        Price: {{ price }}<br/>
        Total: {{ total }}<br/>
        <input type="text" v-model="amount" placeholder="please enter amount..."><br/><br/>
        Show Emit: {{ showEmit }}
        <hr/>
        <TestComponent :is-apple1="apple" @success-event="callback"/>
        <hr/>
        <TestComponent1/>


        <hr/>
        <TestComponent2>
            <template v-slot:header>
                <div style="color:red">
                    This is Test2
                </div>
            </template>
        </TestComponent2>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import TestComponent from './components/Test.component.vue'
import TestComponent1 from './components/Test1.component.vue'
import TestComponent2 from './components/Test2.component.vue'

    const amount = ref(1);
    const price = ref(10000);
    const total = ref(10000);
    const apple = ref('apple');
    const showEmit = ref('pending...');

    const callback = (msg: string) => {
        showEmit.value = msg;
    }

    watch(amount, (count) => {
        total.value = count * price.value;
    })

    // watch(amount, (newValue, oldValue) => {
    //     console.log('old: ', oldValue);
    //     console.log('new: ', newValue);
    // })

</script>