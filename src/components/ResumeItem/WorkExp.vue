<template>
  <div
    class="work-item"
    :class="{ isOver: isCurrent }"
    :ref="'workItem' + item.id"
    @mousedown="workItemDown"
  >
    <div class="item-tool">
      <div class="line-1 line"></div>
      <div class="line-2 line"></div>
      <div class="line-3 line"></div>
      <div class="line-4 line"></div>
      <i class="iconfont icon-shanchu close" @click="del"></i>
    </div>
    <div class="item-content">hello{{ item.id }}</div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, inject } from "vue";

const Component = defineComponent({
  props: {
    item: {
      type: Object,
      default: {},
    },
    isCurrent: {
      type: Boolean,
      default: false,
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
  inject: ["ids"],
  mounted() {},
  methods: {
    del() {
      let index = this.ids.findIndex((item) => item.id === this.item.id);
      this.ids.splice(index, 1);
    },
    workItemDown(e) {
      this.item.target = this.$refs[`workItem${this.item.id}`];
      this.setInteract();
      this.$emit("current", this.item);
    },
    setInteract() {
      let that = this;
      this.interact(".menu-wrap").dropzone({
        listeners: {
          drop: globalThis.dropListener.bind(that, that.ids),
        },
      });
      this.interact(".work-item")
        .resizable({
          // resize from all edges and corners
          edges: {
            left: ".line-4",
            right: ".line-2",
            bottom: ".line-3",
            top: ".line-1",
          },
          listeners: {
            move: globalThis.resizeMoveListener.bind(that.item),
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
          listeners: {
            start: globalThis.dragStartListener.bind(that.item),
            move: globalThis.dragMoveListener.bind(that.item),
          },
          inertia: true,
          modifiers: [
            this.interact.modifiers.restrictRect({
              restriction: "parent",
              endOnly: true,
            }),
          ],
        });
    },
  },
});
export default Component;
</script>

<style lang="scss" scoped>
.work-item {
  width: 100px;
  height: 50px;
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
  &.isOver {
    .item-tool {
      display: block;
    }
  }
  .item-tool {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;

    .line {
      position: absolute;
      &.line-1 {
        border-top: 2px dashed rgb(131, 224, 10);
        width: 100%;
        height: 3px;
        top: -3px;
        left: 0;
      }
      &.line-2 {
        border-right: 2px dashed rgb(131, 224, 10);
        width: 3px;
        height: 100%;
        top: 0%;
        right: -3px;
      }
      &.line-3 {
        border-bottom: 2px dashed rgb(131, 224, 10);
        width: 100%;
        height: 3px;
        bottom: -3px;
        left: 0;
      }
      &.line-4 {
        border-left: 2px dashed rgb(131, 224, 10);
        width: 3px;
        height: 100%;
        top: 0%;
        left: -3px;
      }
    }
    .close {
      position: absolute;
      top: 50%;
      right: -5px;
      transform: translate(100%, -50%);
      color: red;
      font-size: 0.8rem;
      cursor: pointer;
      z-index: 99;
    }
  }
  .item-content {
  }
}
</style>