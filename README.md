# vuepress-plugin-blog-featured

Feature your Vuepress blog posts

[![NPM version](https://badgen.net/npm/v/vuepress-plugin-blog-featured)](https://npmjs.com/package/vuepress-plugin-blog-featured) [![NPM downloads](https://badgen.net/npm/dm/vuepress-plugin-blog-featured)](https://npmjs.com/package/vuepress-plugin-blog-featured)

## Install

```bash
yarn add vuepress-plugin-blog-featured -D
# OR npm install vuepress-plugin-blog-featured -D
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: ['blog-featured']
}
```

Add `featured: true` to your post

```yml
# ex: _posts/<any post>.md
---
featured: true
---
```

now you have a `<featured-posts />` as a global component :tada:
