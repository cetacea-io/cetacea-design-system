<template>
  <component 
    :is="type"
    class="position-wrapper">
    <div class="title">{{ title }}</div>
    <div class="time">
        <Icon class="clock-icon" name="clock" size="small"/>
        <span>{{ time }}</span>
    </div>
    <div class="block">
      <div class="subtitle"> Descripcion de puesto </div>
      <div>{{ description }}</div>
    </div>
    <div class="block">
      <div class="subtitle">Requisitos</div>
      <div>{{ requirements }}</div>
    </div>
    <div class="block">
      <AvatarList/>
    </div>
    <Button class="position-button">Postularme</Button>
  </component>
</template>

<script>
/**
 * Buttons are generally used for interface actions. Suitable for all-purpose use.
 * Defaults to appearance that has white background with grey border. Primary style should be used only once per view for main call-to-action.
 */
export default {
  name: "PositionCard",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The html element used for the card.
     * `div`
     */
    title: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      default: "Card",
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    requirements: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.position-wrapper {
  .position-button {
    width: 100%;
  }

  .block {
    margin-bottom: $space-m;
  }

  .title {
    font-size: $size-l;
    font-weight: $weight-semi-bold;
    margin-bottom: $space-m;
  }

  .subtitle {
    font-size: $size-m;
    font-weight: $weight-bold;
    margin-bottom: $space-xs;
  }

  .time {
    margin-bottom: $space-xs;

    .clock-icon {
      vertical-align: middle;
      margin-right: $space-xs;
    }
  }
}
</style>


<docs>
  ```jsx
  <div>
    <PositionCard
      :id="3"
      title="Programador"
      time="2 horas a la semana"
      description="Programador en C# que sepa Unity para unirse al equipo de desarrollo"
      requirements="Haber concluido por lo menos dos proyectos de cetacea"
    />
  </div>
  ```
</docs>
