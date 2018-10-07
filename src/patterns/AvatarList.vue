<template>
  <component
    :is="type">
    <Avatar 
      icon
      image="https://instagram.fntr3-1.fna.fbcdn.net/vp/45a0e2ca198d91b96076d37f8805ab1d/5C45615D/t51.2885-15/e35/41784399_2426890347336146_1249994690766315933_n.jpg"/>

    <Avatar
      icon
      image="https://instagram.fntr3-1.fna.fbcdn.net/vp/433d763b711ab7bc09c2843bd2b35001/5BC429AF/t51.2885-15/e35/27894011_542593912800477_5623809282366504960_n.jpg"/>

    <Avatar
      icon
      :number="+12"/>
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
    img: {
      type: String,
      required: false,
      default: "",
    },
    number: {
      type: String,
      required: false,
      default: "",
    },
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
    <AvatarList/>
  </div>
  ```
</docs>
