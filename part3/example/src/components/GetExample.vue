<template>
  <div>
    <button @click="loadData">load</button>
    <ul>
      <li v-for="(name, idx) in names" :key="idx">{{name}}</li>
    </ul>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import axios from 'axios'

export default {
  setup() {
    async function loadData() {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
      console.log(result.data);
      names.value = result.data.map(item => item.name);
    }
    onMounted(loadData); // 비동기 함수를 넘겨주게 된다. 버튼을 누르지 않아도 페이지 로드되면 실행이 된다.
    const names = ref([]); //onMounted() 덕분에 ref(['John', 'Jane', 'Joe']); 가 필요없다.
    return {names, loadData}
  }
}
</script>
