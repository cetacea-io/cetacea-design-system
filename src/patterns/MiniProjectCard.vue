<template>
  <component 
    v-bind="thingsProps"
    :is="type"
    class="card">
    <!-- @mouseover="mouseOver"> -->
    <div class="card-wrapper">
      <div
        :style="{ 'background-image': 'url(' + image + ')' }"
        class="image">

        <!-- <div class="image-hover"/> -->
        <div
          v-if="location"
          class="location">
          <i class="fas fa-map-marker-alt"/> {{ location }}
        </div>
      </div>

      <div class="content">
        <div class="meta">
          <i class="fas fa-theater-masks"/>{{ category }}
        </div>
        <div class="title">
          {{ title }}
        </div>
        <div class="extra">
          <div class="author-wrapper">
            <Avatar :image="authorImage" borderColor="#101a25" size="mini"/>
            <div class="author-meta">
              <div class="author-date">
                {{ date }}
              </div>
            </div>
          </div>
          <div
            v-if="contributorsImages || contributorsExtras"
            class="cetaceans">
            <AvatarList 
              :images="contributorsImages"
              :number="contributorsExtras"
              size="mini"
            />
          </div>
        </div>
      </div>
    </div>

  </component>
</template>

<script>
/**
 * Used as project card in project navigation
 */
export default {
  name: "MiniProjectCard",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the project card.
     */
    type: {
      type: String,
      default: "nuxt-link",
      required: false,
      validator: value => {
        return value.match(/(nuxt-link|a)/)
      },
    },
    /**
     * Sets dark mode to true
     */
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * I don't know what to write here
     */
    id: {
      type: Number,
      required: false,
    },
    /**
     * I don't know what to write here
     */
    route: {
      type: String,
      required: false,
      default: null,
    },
    /**
     * Image to be displayed in the Card
     */
    image: {
      type: String,
      required: true,
    },
    /**
     * Title of the project
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * Preferable location of the project
     */
    location: {
      type: String,
      required: false,
      default: "",
    },
    /**
     * Category of the project
     */
    category: {
      type: String,
      required: true,
    },
    /**
     * Image of the author
     */
    authorImage: {
      type: String,
      required: false,
    },
    /**
     * Name of the author
     */
    authorTitle: {
      type: String,
      required: false,
    },
    /**
     * Date of the projects
     */
    date: {
      type: String,
      required: false,
    },
    /**
     * Array of profile pictures of contributors
     */
    contributorsImages: {
      type: Array,
      required: false,
      default: null,
    },
    /**
     * Number of extras in the contributors
     */
    contributorsExtras: {
      type: Array,
      required: false,
      default: null,
    },
  },
  computed: {
    thingsProps() {
      if (this.type == "nuxt-link") return { to: this.route }
      else if (this.type == "a") return { href: this.route }
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-nav-link: $color-neon-blue;
$color-nav-link-active: $color-neon-blue;

.nav {
  @include stack-space($space-m);
  font-family: $font-text;
  font-size: $size-s;
  line-height: $line-height-m;
  color: $color-white;
  text-align: center;
  width: 100%;
  @media #{$media-query-l} {
    // This is how you’d use design tokens with media queries
  }
  a {
    color: $color-nav-link;
    padding: $space-xs 0;
    margin: 0 $space-xs;
    text-decoration: none;
    display: inline-block;
    &:hover {
      color: $color-nav-link-active;
    }
    &.active {
      border-bottom: 2px solid $color-nav-link;
      font-weight: $weight-bold;
      color: $color-nav-link;
    }
  }
}
</style>

<style lang="scss" scoped>
.image-hover {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease;
  border-top-left-radius: $radius-default;
  border-top-right-radius: $radius-default;
}

.location {
  color: #fff;
  bottom: 0;
  position: absolute;
  padding: 15px;

  text-shadow: 0px 0px 7px #000;
  & i {
    font-size: 20px;
  }
}

.card {
  position: relative;
  display: inline-block;
  font-family: $font-text;
  text-decoration: none;

  &:hover {
    & .image-hover {
      visibility: visible;
      opacity: 1;
    }
  }
}

.share {
  position: absolute;
  background-color: black;
  width: auto;
  padding: $space-xs $space-s;
  top: $space-xs;
  left: $space-xs;
  border-radius: 50px;
  z-index: 1;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  & .no-of-shares {
    margin-left: 10px;
  }
}

.like {
  position: absolute;
  background-color: black;
  width: auto;
  padding: $space-xs $space-s;
  top: $space-xs;
  right: $space-xs;
  border-radius: 50px;
  z-index: 1;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ff0072;

  & .no-of-likes {
    margin-left: 10px;
  }
}

.card-wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr;

  color: #000;

  width: 100%;
  /* min-width: 450px; */

  & .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 140px;

    position: relative;

    border-top-left-radius: $radius-default;
    border-top-right-radius: $radius-default;
  }

  & .content {
    display: grid;
    grid-template-rows: auto 1fr auto;

    padding: $space-xs $space-s;

    border-radius: 0 0 $radius-default $radius-default;

    background-color: #101a25;
    color: #ffffff;

    & .title {
      font-size: 1em;
      font-weight: $weight-semi-bold;
    }
    & .meta {
      font-size: 0.87em;
      & i {
        margin-right: 10px;
      }
    }
    & .description {
      // color: rgb(106, 106, 106);
      color: hsl(0, 0%, 92%);
      margin-bottom: $space-s;
      position: relative;

      & .curtain {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(255, 255, 255, 0), rgb(16, 26, 37));
        bottom: 0;
      }
    }
    & .extra {
      display: flex;
      align-self: end;
      justify-content: space-between;

      & .author-wrapper {
        display: flex;
        align-items: center;

        & .author-meta {
          margin-left: $space-xs;

          & .author-date {
            color: #8e9baf;
            font-size: 0.85em;
          }
        }
      }
    }
  }
}
</style>


<docs>
  ```jsx
  //https://66.media.tumblr.com/f9255859f94a22d656ed4221ce1f7ea3/tumblr_peee0iEtV51wopx9lo1_1280.png
  <MiniProjectCard
    image="https://i.redd.it/x12pys0090q11.jpg"
    title="Fountain of Salmacis: Album"
    category="Musica"
    authorImage="http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg"
    date="6 de Junio"
    route="https://google.com"
    type="a"
  />
  ```
</docs>
