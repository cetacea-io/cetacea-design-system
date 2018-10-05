<template>
  <component 
    :is="type"
    class="card"
    @mouseover="mouseOver">

      <div 
        :style="{ 'background-image': 'url(' + image + ')' }"
        class="image"
      />

      <div class="card-wrapper">

        <div/>

        <div class="content">
          <div class="title">
            {{ title }}
          </div>
          <div class="description">
            {{ shortDescription }}
          </div>
          <div 
              style="
              position: absolute;
              width: 100%;
              height: 60%;
              background: linear-gradient(rgba(255, 255, 255, 0), #000);
              bottom: 0;
              z-index: 1;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
            "/>
        </div>

      </div>

  </component>
</template>

<script>
/**
 * Used as project card in project navigation
 */
export default {
  name: "NewsSlider",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the news slider.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * I don't know what to write here
     */
    id: {
      type: Number,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    /**
     * Image to be displayed in the Card
     */
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    shares: {
      type: Number,
      required: true,
    },
  },
  computed: {
    shortDescription() {
      if (this.description.length > 100) return this.description.substring(0, 100) + "[...]"
      return this.description
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
  border-radius: $radius-default;

  &:hover {
    & .image-hover {
      visibility: visible;
      opacity: 1;
    }
  }
}

.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;

  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: $radius-default;
}

.card-wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr;

  color: $color-white;
  background: transparent;

  width: 100%;
  height: 100%;

  & .content {
    display: grid;
    grid-template-rows: auto auto 1fr auto;

    padding: $space-s;

    z-index: 5;

    & .title {
      font-size: 1.5em;
      font-weight: $weight-semi-bold;
      z-index: 2;
    }
    & .description {
      color: $color-white;

      position: relative;
      z-index: 2;
    }
  }
}
</style>


<docs>
  ```jsx
  <NewsSlider
    image="https://dcjazzfest.org/sites/default/files/Cory-Henry_1.png"
    title="Jizz N Jazz"
    :likes="45"
    :shares="24"
    category="Musica"
    description="Concierto de Rock Progresivo para todos los camaradas de america latina y el caribe"
  />
  ```
</docs>
