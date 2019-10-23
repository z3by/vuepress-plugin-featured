<template>
  <div
    v-if="featuredPosts"
    class="featured-posts"
  >
    <h2
      align="center"
      v-if="title"
    >{{title}}</h2>
    <carousel
      :items="Number(items) || 3"
      :dots="dots || false"
      :autoplay="autoplay || true"
      :nav="nav || false"
    >
      <div
        v-for="post in featuredPosts"
        :key="post.key"
        class="featured-posts__card"
      >
        <router-link :to="post.path">
          <img
            v-if="post.frontmatter.image"
            :src="post.frontmatter.image"
            :alt="post.title"
          />
          <h4>{{post.title}}</h4>
          <p v-if="post.summary">{{post.summary}}</p>
        </router-link>
      </div>
    </carousel>
  </div>
</template>

<script>
export default {
  props: ["title", "items", "dots", "autoplay", "nav"],
  data () {
    return {
      imagesLoaded: {}
    };
  },
  computed: {
    featuredPosts () {
      if (!this.$pagination) {
        return null;
      }
      const pages = this.$pagination.pages;
      const posts = pages.filter(p => {
        return p.frontmatter.featured;
      });
      return posts
    }
  }
};
</script>

<style>
.featured-posts {
  margin: 3rem;
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