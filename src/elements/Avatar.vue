<template>
  <component
    :is="type"
    :style="{ 'background-image': 'url(' + image + ')', 'border-color': this.borderColor }"
    :class="getSize"
    class="avatar">
    <span 
      v-if="number">
    +{{ number }}
    </span>
  </component>
</template>

<script>
export default {
  name: "Avatar",
  status: "prototype",
  release: "1.0.0",
  props: {
    type: {
      type: String,
      default: "div",
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
    number: {
      type: Number,
      required: false,
      default: null,
    },
    borderColor: {
      type: String,
      required: false,
      default: "#FFFFFF",
    },
    /**
     * Size of the icon
     */
    size: {
      type: String,
      required: false,
      default: "icon",
      validator: value => {
        return value.match(/(large|icon|mini)/)
      },
    },
  },
  computed: {
    getSize() {
      if (this.size == "large") return "is-large"
      else if (this.size == "icon") return "is-icon"
      else if (this.size == "mini") return "is-mini"
    },
  },
}
</script>

<style lang="scss" scoped>
.is-mini {
  width: 20px !important;
  height: 20px !important;

  font-size: 12px !important;
}

.is-icon {
  width: 40px !important;
  height: 40px !important;
}

.is-large {
  width: 200px !important;
  height: 200px !important;

  border-width: 5px;
  border-style: solid;
}

.medium {
}

.small {
}

.avatar {
  background: #d3d7dd;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  font-family: $font-text;

  color: #7e92af;
  font-weight: bold;
  vertical-align: middle;

  display: inline-grid;
  justify-items: center;
  align-items: center;

  border-radius: 100%;

  border-width: 3px;
  border-style: solid;

  width: 40px;
  height: 40px;
}
</style>


<docs>
  ```jsx
  <div>
    <Avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpw3brtf2P7LKukd8m9tLyoDi2SNr7yp_HsFTmzniyfmQCn65"
        :icon="true"
    />
  </div>
  ```
</docs>
