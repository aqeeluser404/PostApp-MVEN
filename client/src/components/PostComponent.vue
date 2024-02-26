<template>
  <div class="container">
    <h1>Latest Posts</h1>

    <!-- create a post -->
    <div class="create-post">
      <label for="create-post">Say Something...</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post">
      <button v-on:click="createPost">Post!</button>
    </div>
    
    <hr>
    
    <!-- error message -->
    <p class="error" v-if="error">{{ error }}</p>
    
    <!-- Posts -->
    <!-- v-on:dblclick double click to delete  -->
    <div class="posts-container">

      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >

        <!-- date formating -->
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}

        <!-- display posts -->
        <p class="text">{{ post.text }}</p>

      </div>

    </div>
  </div>
<!-- <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li> -->
</template>

<script>
import PostService from '@/PostService';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  // life cycle method that runs automatically when component is created or initialized
  async created() {
    try {
      this.posts = await PostService.getPost();
    }
    catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPost();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPost();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.container {
    max-width: 800px;
    margin: 0 auto;
  }
  p.error {
    border: 1px solid #ff5b5f;
    background-color: #ffc5c1;
    padding: 10px;
    margin-bottom: 15px;
  }
  div.post {
    position: relative;
    border: 1px solid #5bd658;
    background-color: #bcffb8;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
  }
  div.created-at {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 15px 5px 15px;
    background-color: darkgreen;
    color: white;
    font-size: 13px;
  }
  p.text {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
  }
</style>
