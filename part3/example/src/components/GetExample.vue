<template>
  <div>
    <ul>
      <li>
        <button @click="get">get</button>
      </li>
    </ul>
    <code id="result"></code>
  </div>
</template>
<script>
import axios from "axios";
export default {
  setup() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    function showResult(json) {
      document.getElementById("result").innerHTML = JSON.stringify(json);
    }

    function get() {
      console.log("get");
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
        method: "GET",
        headers,
      })
        .then(function (response) {
          return response.json();
        })
        .then((json) => {
          showResult(json);
        });
    }

    return { get };
  },
};
</script>
