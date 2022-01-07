<template>
    <q-infinite-scroll @load="fetchData">
        <div class="row">        
            <div v-for="(item, index) in nasaData" :key="index" class="col-md-3 col-sm-2 q-mb-xl">
                <feed-card :data="item"/>
            </div> 
        </div>
    </q-infinite-scroll>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import axios from 'axios';

import { ApiResponse, NasaData } from 'src/models/nasa';
import API_URLS from 'src/utils/API_URLS';
import FeedCard  from 'src/components/feed/FeedCard.vue';

export default defineComponent({
    name:'FeedList',
    components:{ FeedCard },
    setup () {
        
        const nasaData = ref<NasaData[]>([]);   
        
        const getDate = (index: number) =>{
            const date = new Date();
            date.setDate(date.getDate() - index - 1);
            return date.toISOString().split('T')[0];
        };

        const fetchData = (index: number, done: () => void) =>{
            axios.get(API_URLS.NASA, {params:{thumbs: true, date: getDate(index)}})
            .then((response: ApiResponse) =>{
                nasaData.value.push(response.data);
            })
            .catch((err)=>{
                console.log(err); // TODO: Make error explicit to user via popup/red text
            })
            done();
        }

        return { nasaData, fetchData }
    }
})
</script>

<style scoped>

</style>