<template>
  <div class="work-item" ref="workItem">
    hello{{ id }}
    <i
      class="iconfont icon-shanchu close"
      :class="{ isOver: current === id }"
    ></i>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, inject } from "vue";
import globalThis from '../../utils/window.js'

const Component = defineComponent({
  props: {
    id: {
      type: Number,
      default: 1,
    },
    current: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    const interact = inject("interact");
    const isActive = ref(false);
    // expose to template
    return {
      interact,
      isActive,
    };
  },
  mounted() {
    this.interact(".work-item")
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            var target = event.target;
            var x = parseFloat(target.getAttribute("data-x")) || 0;
            var y = parseFloat(target.getAttribute("data-y")) || 0;

            // update the element's style
            target.style.width = event.rect.width + "px";
            target.style.height = event.rect.height + "px";

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.transform = "translate(" + x + "px," + y + "px)";

            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);
          },
        },
        modifiers: [
          // keep the edges inside the parent
          this.interact.modifiers.restrictEdges({
            outer: "parent",
          }),

          // minimum size
          this.interact.modifiers.restrictSize({
            min: { width: 100, height: 50 },
          }),
        ],

        inertia: true,
      })
      .draggable({
        listeners: { move: globalThis.dragMoveListener },
        inertia: true,
        modifiers: [
          this.interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
      });
  },
  methods: {
    mouseover() {
      this.isActive = true;
    },
  },
});
export default Component;
</script>

<style lang="scss" scoped>
.work-item {
  width: 4rem;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: #29e;
  color: white;
  font-size: 0.5rem;
  font-family: sans-serif;
  touch-action: none;

  /* This makes things *much* easier */
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  .close {
    color: red;
    font-size: 0.8rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    display: none;
    &.isOver {
      display: block;
    }
    cursor: pointer;
  }
}
</style>