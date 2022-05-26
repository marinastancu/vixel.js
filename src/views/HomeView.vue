<template>
  <div class="home">
    <CanvasItem />
  </div>
</template>

<script>
// @ is an alias to /src
import CanvasItem from "@/components/CanvasItem.vue";

export default {
  name: "HomeView",
  components: {
    CanvasItem,
  },
};
</script>
