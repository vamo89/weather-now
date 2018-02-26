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
$primary-color: #737B84;
$secondary-color: #B4B4B4;

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
