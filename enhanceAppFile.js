import FeaturedPosts from "./FeaturedPosts.vue";
import carousel from "vue-owl-carousel";

export default ({ Vue }) => {
  Vue.component("featured-posts", FeaturedPosts);
  Vue.component("carousel", carousel);
};
