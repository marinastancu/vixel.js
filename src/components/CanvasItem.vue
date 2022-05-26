<template>
  <div class="canvas-item">
    <canvas
      @mousedown="startDrawing"
      @mouseup="finishedDrawing"
      @mousemove="draw"
      id="canvas"
      image-rendering="pixelated"
    >
      Your browser doesn't support this functionality!
    </canvas>
  </div>
</template>

<script>
export default {
  name: "CanvasItem",

  mounted() {
    //  Value to calculate the offset caused by other elements such as nav, fixes distance between cursor and line drawn
    this.offset = document.getElementById("nav").clientHeight;

    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  },
  data() {
    return {
      drawing: false,
      canvas: null,
      context: null,
      offset: null,
    };
  },
  methods: {
    startDrawing() {
      this.drawing = true;
      this.draw(event);
    },
    finishedDrawing() {
      this.drawing = false;
      this.context.beginPath();
    },
    draw(event) {
      if (!this.drawing) return;

      this.context.lineTo(event.pageX, event.pageY - this.offset);
      this.context.stroke();
      this.context.beginPath();
      this.context.moveTo(event.pageX, event.pageY - this.offset);
      console.log(this.offset);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas {
  border: 3px solid black;
}
</style>
