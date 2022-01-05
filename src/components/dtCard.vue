<template>
  <dt-card type="1">
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #img>
      <slot name="img"></slot>
    </template>
    <template #text>
      <slot name="text"></slot>
    </template>
    <template #interactions>
      <span>
        <slot name="interactions"></slot>
      </span>
    </template>
  </dt-card>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    items: [
      {
        id: 1,
        type: 1,
      },
      {
        id: 2,
        type: 2,
      },
      {
        id: 3,
        type: 3,
      },
      {
        id: 4,
        type: 4,
      },
      {
        id: 5,
        type: 5,
      },
      {
        id: 6,
        type: 1,
      },
      {
        id: 7,
        type: 3,
      },
      {
        id: 8,
        type: 4,
      },
      {
        id: 9,
        type: 2,
      },
    ],
  }),
};
</script>
