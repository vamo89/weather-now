<template>
  <section class="detail">
    <span class="name">{{ name }}</span>
    <span class="value">{{ Math.round(value) }}</span><span class="unit">{{ unit }}</span>
  </section>
</template>

<script>
export default {
  props: ['name', 'value', 'unit']
}
</script>

<style scoped  lang="scss">
@import '../../../assets/css/colors.scss';

section.detail {
  font-size: 12px;
  color: $secondary-color;
  line-height: 1.2;
}

span.name {
  text-transform: uppercase;
  display: block;
}

span.value {
  font-size: 15px;
  color: $primary-color;
}

span.unit {
  vertical-align: baseline;
  color: $primary-color;
}
</style>
