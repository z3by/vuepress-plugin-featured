<template>
  <div v-if="featuredPosts" class="featured-posts">
    <h2 align="center">{{title}}</h2>
    <carousel :autoplay="true" :items="items">
      <div v-for="post in featuredPosts" :key="post.key" class="featured-posts__card">
        <router-link :to="post.path">
          <img :src="post.frontmatter.headerImage" :alt="post.title" />
          <h4>{{post.title}}</h4>
        </router-link>
      </div>
    </carousel>
  </div>
</template>

<script>
export default {
  props: ["title", "items"],
  data() {
    return {
      imagesLoaded: {}
    };
  },
  computed: {
    featuredPosts() {
      if (!this.$pagination) {
        return null;
      }
      const pages = this.$pagination.pages;
      const posts = pages.filter(p => {
        return p.frontmatter.featured;
      });
      if (posts.length > this.items - 1) {
        return posts;
      } else {
        return null;
      }
    }
  }
};
</script>

<style>
.featured-posts {
  margin: 3rem 0;
}
.featured-posts a {
  text-decoration: none;
  text-align: center;
  text-transform: capitalize;
}

.featured-posts__card {
  margin: 0.3rem;
  padding: 0.5rem;
  box-sizing: border-box;
  min-height: 10rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>