<template>
  <div class="canvas-item">
    <canvas
      @mousedown="startDrawing"
      @mouseup="finishedDrawing"
      @mousemove="draw"
      id="canvas"
      width="32"
      height="32"
    >
      Your browser doesn't support this functionality!
    </canvas>
  </div>
</template>

<script>
export default {
  name: "CanvasItem",

  mounted() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
  },
  data() {
    return {
      drawing: false,
      canvas: null,
      context: null,
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

      var position = this.getMousePosition(this.canvas, event);
      var positionX = position.x;
      var positionY = position.y;

      this.context.lineTo(positionX, positionY);
      this.context.stroke();
      this.context.beginPath();
      this.context.moveTo(positionX, positionY);
    },

    getMousePosition: function (canvas, e) {
      var rectangle = canvas.getBoundingClientRect();
      return {
        x:
          ((e.clientX - rectangle.left) / (rectangle.right - rectangle.left)) *
          canvas.width,
        y:
          ((e.clientY - rectangle.top) / (rectangle.bottom - rectangle.top)) *
          canvas.height,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas {
  border: 3px solid black;
  width: 50%;
  height: 50%;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
</style>
