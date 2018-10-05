<template>
  <component 
    :is="type"
    class="card"
    @mouseover="mouseOver">

      <div class="share">
        <Icon name="share" size="small" fill="rgb(255,255,255)" /><span class="no-of-shares">{{ shares }}</span>
      </div>

      <div class="like">
        <Icon name="heart" size="small" fill="rgb(255,255,255)" /><span class="no-of-likes">{{ likes }}</span>
      </div>

      <nuxt-link :to="route">

        <div class="card-wrapper">
          <div
            :style="{ 'background-image': 'url(' + image + ')' }"
            class="image">

            <div class="image-hover"/>
            <div
              v-if="location"
              class="location">
              <i class="fas fa-map-marker-alt"/> {{ location }}
            </div>
          </div>

          <div class="content">
            <div class="title">
              {{ title }}
            </div>
            <div class="meta">
              <i class="fas fa-film"/>{{ category }}
              <!-- <p>Por {{ author }}</p> -->
            </div>
            <div class="description">
              <div 
                style="
                position: absolute;
                width: 100%;
                height: 60%;
                background: linear-gradient(rgba(255, 255, 255, 0), #ffffff);
                bottom: 0;
              "/>
              {{ shortDescription }}
            </div>
            <div class="extra">
              <div class="cetaceans">
                <AppAvatarList />
              </div>
            </div>
          </div>
        </div>

      </nuxt-link>

  </component>
</template>

<script>
/**
 * Used as project card in project navigation
 */
export default {
  name: "ProjectCard",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the project card.
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
    /**
     * I don't know what to write here
     */
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
     * Author of the project
     */
    author: {
      type: String,
      required: true,
    },
    /**
     * Short description of the project
     */
    description: {
      type: String,
      required: true,
    },
    /**
     * Number of likes the project has
     */
    likes: {
      type: Number,
      required: true,
    },
    /**
     * Number of shares the project has
     */
    shares: {
      type: Number,
      required: true,
    },
  },
  computed: {
    shortDescription() {
      if (this.description.length > 250) return this.description.substring(0, 250) + "[...]"
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
  padding: 0 19px;
  height: 40px;
  top: 10px;
  right: 10px;
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
  background: #fff;

  width: 100%;
  /* min-width: 450px; */

  border-radius: $radius-default;

  & .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 250px;

    position: relative;

    border-top-left-radius: $radius-default;
    border-top-right-radius: $radius-default;
  }

  & .content {
    display: grid;
    grid-template-rows: auto auto 1fr auto;

    padding: $space-s;

    & .title {
      font-size: 1.5em;
      font-weight: $weight-semi-bold;
    }
    & .meta {
      padding: 5px 0;
      & i {
        margin-right: 10px;
      }
    }
    & .description {
      color: rgb(106, 106, 106);

      position: relative;
    }
    & .extra {
      align-self: center;
      justify-self: end;
    }
  }
}
</style>


<docs>
  ```jsx
  //https://66.media.tumblr.com/f9255859f94a22d656ed4221ce1f7ea3/tumblr_peee0iEtV51wopx9lo1_1280.png
  <ProjectCard
    image="https://i.redd.it/x12pys0090q11.jpg"
    title="Fountain of Salmacis: Album"
    :likes="45"
    :shares="24"
    category="Musica"
    description="Album conceptual de Rock Progresivo, inspirado en sonidos de los 80's.
      La trama relata la historia de dos astronautas perdidos en el espacio, entre el silencio
      del espacio profundo, de pronto se escucha que tocan la puerta de la nave espacial"
  />
  ```
</docs>
