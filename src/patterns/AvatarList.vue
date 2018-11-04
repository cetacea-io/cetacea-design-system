<template>
  <component
    :is="type">
    <Avatar
      v-if="images"
      borderColor="#101a25"
      :size="this.size"
      :image="images[0]"/>

    <Avatar
      v-if="images"
      borderColor="#101a25"
      :size="this.size"
      :image="images[1]"/>

    <Avatar
      v-if="number"
      borderColor="#101a25"
      :size="this.size"
      :number="number"/>
  </component>
</template>

<script>
export default {
  name: "AvatarList",
  status: "prototype",
  release: "1.0.0",
  props: {
    type: {
      type: String,
      default: "div",
    },
    images: {
      type: Array,
      required: true,
      default: null,
    },
    number: {
      type: Number,
      required: false,
      default: "",
    },
    borderColor: {
      type: String,
      required: false,
    },
    /**
     * Size of the icons
     */
    size: {
      type: String,
      required: false,
      default: "icon",
      validator: value => {
        return value.match(/(|icon|mini)/)
      },
    },
  },
  mounted() {
    console.log(this.images)
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  &:not(:last-child) {
    margin-right: -15px;
  }
}
</style>


<docs>
  ```jsx
  <div>
    <AvatarList
      :images="[
        'https://romalive.files.wordpress.com/2016/07/0.jpg?w=720',
        'https://secure.i.telegraph.co.uk/multimedia/archive/02668/Gabriel_2668021b.jpg'
      ]"
      :number="12"
      />
  </div>
  ```
</docs>
