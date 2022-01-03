<template>
  <div class="dt-wrapper">
    <div v-for="(item, index) in items" :key="index">
      <dt-card :type="item.type">
        <template v-slot:title>
          <h3>Title Slot</h3>
        </template>
        <template v-slot:img>
          <img src="@/assets/man.jpg" alt="usercard" />
        </template>
        <template v-slot:text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template v-slot:interactions>
          <span class="span"> 54 </span>
        </template>
      </dt-card>
    </div>
  </div>
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
    ],
  }),
};
</script>
