<template>
  <flickity class="scrolling-wrapper" :options="flickityOptions">
    <slot>
      <div
        v-for="(item, index) in filteredItems"
        :key="index"
        :item="item"
        class="item"
      />
    </slot>
  </flickity>
</template>

<script>
import Flickity from "vue-flickity"

export default {
  name: "SwipeSlider",

  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        freeScroll: true,
        cellAlign: "left",
        contain: true,
        accessibility: false,
        resize: true,
        percentPosition: true,
        groupCells: "80%",
        // any options from Flickity can be used
      },
    }
  },
  props: {
    paddingSides: {
      type: Number,
      required: false,
    },
  },
  components: {
    Flickity,
  },
}
</script>

<style lang="scss" scoped>
.item {
  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: 0;
  height: 250px;
  padding-right: $space-xs;
  width: 247px;

  &:first-child {
    padding-left: 50px;
  }

  &:last-child {
    padding-right: 50px;
  }
}
</style>


<docs>
  ```jsx
  <div>
    <SwipeSlider>
        <MiniProjectCard
          image="https://i.redd.it/x12pys0090q11.jpg"
          title="Fountain of Salmacis: Album"
          category="Musica"
          authorImage="http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg"
          date="6 de Junio"
          :contributorsImages="[
            'https://romalive.files.wordpress.com/2016/07/0.jpg?w=720',
            'https://secure.i.telegraph.co.uk/multimedia/archive/02668/Gabriel_2668021b.jpg'
          ]"
          :contributorsExtras="12"
        />
        <MiniProjectCard
          image="https://66.media.tumblr.com/f9255859f94a22d656ed4221ce1f7ea3/tumblr_peee0iEtV51wopx9lo1_1280.png"
          title="Fountain of Salmacis: Album"
          category="Musica"
          authorImage="http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg"
          date="6 de Junio"
          :contributorsImages="[
            'https://romalive.files.wordpress.com/2016/07/0.jpg?w=720',
            'https://secure.i.telegraph.co.uk/multimedia/archive/02668/Gabriel_2668021b.jpg'
          ]"
          :contributorsExtras="12"
        />
        <MiniProjectCard
          image="https://i.redd.it/x12pys0090q11.jpg"
          title="Fountain of Salmacis: Album"
          category="Musica"
          authorImage="http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg"
          date="6 de Junio"
          :contributorsImages="[
            'https://romalive.files.wordpress.com/2016/07/0.jpg?w=720',
            'https://secure.i.telegraph.co.uk/multimedia/archive/02668/Gabriel_2668021b.jpg'
          ]"
          :contributorsExtras="12"
        />
        <MiniProjectCard
          image="https://66.media.tumblr.com/f9255859f94a22d656ed4221ce1f7ea3/tumblr_peee0iEtV51wopx9lo1_1280.png"
          title="Fountain of Salmacis: Album"
          category="Musica"
          authorImage="http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg"
          date="6 de Junio"
          :contributorsImages="[
            'https://romalive.files.wordpress.com/2016/07/0.jpg?w=720',
            'https://secure.i.telegraph.co.uk/multimedia/archive/02668/Gabriel_2668021b.jpg'
          ]"
          :contributorsExtras="12"
        />
        <MiniProjectCard
          image="https://i.redd.it/x12pys0090q11.jpg"
          title="Fountain of Salmacis: Album"
          category="Musica"
          authorImage="http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg"
          date="6 de Junio"
          :contributorsImages="[
            'https://romalive.files.wordpress.com/2016/07/0.jpg?w=720',
            'https://secure.i.telegraph.co.uk/multimedia/archive/02668/Gabriel_2668021b.jpg'
          ]"
          :contributorsExtras="12"
        />
    </SwipeSlider>
  </div>
  ```
</docs>
