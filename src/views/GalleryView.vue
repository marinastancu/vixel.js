<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <h3>Vote your favorite artworks of the week!</h3>
    <div v-for="item in gallery" :key="item.id">
      <GalleryItem />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: null,
    };
  },
};
</script>

<style scoped></style>
