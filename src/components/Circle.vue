<template>
  <div class="container">
    <component
      :is="component"
      :id="'circle' + positioned"
      :style="circleStyle"
    >
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  name: "CircleList",
  props: {
    component: { type: [Object, String], default: "div" },
    totalCircle: { type: [Number] },
    items: { type: [Array] },
    positioned: { type: [String], default: "positioned" },
    radius: { type: [Number, String], default: 1200 },
    color: { type: [String] },
    circleName: { type: [String], default: null }
  },
  data() {
    return {
      tag: null,
      circleRadius: null,
      circleStyle: {
        position: "absolute",
        padding: 0,
        "z-index": this.$vnode.key,
        border: `3px #8b0cd5 solid`,
        "border-radius": "50%",
        "list-style": "none",
        "background-color": this.color,
        width: "100px",
        height: "100px"

        // "-webkit-transition": "transform 1s ease 1s",
        // "-moz-transition": "transform 1s ease 1s",
        // "-o-transition": "transform 1s ease 1s",
        // transition: "transform 1s ease 1s",
        // background:this.color
      },
      angle: 360 / this.items.length,
      rot: 0,
      circleNarrow: 0,
      rotateInterval: null
    };
  },

  computed: {
    SetCircleStyle: {
      get: () => {
        return this.circleStyle;
      },
      set: (val) => {
        console.log("circle", val);
      }
    }
  },
  created() {
    console.log(this.totalCircle);
    this.circleNarrow = this.radius / this.totalCircle;
    this.circleRadius = this.radius - this.circleNarrow * this.$vnode.key;
    this.circleStyle = {
      ...this.circleStyle,
      ...{
        width: `${this.circleRadius}px`,
        height: `${this.circleRadius}px`
      }
    };
    this.tag = "CircleListElement";
  },
  mounted() {
    this.$vnode.child.$vnode.componentOptions.tag += " " + this.positioned;
    this.$vnode.child.$children.map((item, index) => {
      item.$el.id = this.positioned + "-" + index;
    });
    this.$slots.default
      ? this.$slots.default.map((slot) => {
          if (slot.tag) {
            //       slot.elm.style = `
            //   position: absolute;
            //   display:block;
            //   pointer-events: visible;
            //   top: 45%;
            //   left: 45%;
            //   width: ${this.circleRadius / 10}px;
            //   height: ${this.circleRadius / 10}px;
            //   text-align:center;
            //   z-index 3;
            //  transform: rotate(${this.rot}deg)
            //  translate(${this.circleRadius / 2}px, 0px)
            //  rotate(${this.rot * -1}deg)  `;
            //       this.rot = this.rot + this.angle;
          }
        })
      : null;
    this.testBtn();
    if (!this.rotateInterval) {
      this.rotateInterval = setInterval(this.testBtn, 500);
    }
  },
  methods: {
    divideRadius() {
      this.circleRadius = this.circleRadius / 2;
    },
    testBtn() {
      // if (this.rot > 10000) this.rot = 360;
      this.$slots.default
        ? this.$slots.default.map((slot) => {
            slot.elm.__vue__.$data.positionValue = {
              "--rot": this.rot,
              "--circleRadius": this.circleRadius
            };
            // if(this.rot > 720) this.rot = 360
               this.rot = this.rot + this.angle;
            // slot.elm.style = `top: 45%;
            // position: absolute;
            // pointer-events: visible;
            // border:1px solid gray;
            // left: 45%;
            // z-index 3;
            // text-align:center;
            // width: ${this.circleRadius / 8}px;
            // height: ${this.circleRadius / 8}px;
            // -webkit-transition: -webkit-transform ${this.rot / 60}s;
            // -moz-transition: -moz-transform ${this.rot / 60}s ;
            // -o-transition: -o-transform ${this.rot / 60}s ;
            //  transition: transform ${this.rot / 60}s;
            //  `;
            // this.rotateChild(slot, this.rot);
          
          })
        : null;
      // .forEach((event) =>
      //   event.addEventListener("mouseenter", (element) =>
      //     console.log(element)
      //   )
      // );
    },

    rotateChild(item, rotation) {
      item.elm.style.transform = `
       rotate(${rotation}deg)
            translate(${this.circleRadius / 2}px, 0px)
            rotate(${rotation * -1}deg) `;
      this.rot = this.rot + this.angle;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  pointer-events: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
}

.circle-information-container {
  z-index: 6;
  display: grid;
  pointer-events: visible;
  justify-items: center;
  align-content: center;
  position: relative;
  left: 40%;
}
.circle-title-container {
  position: relative;
  top: 150%;
  left: -40%;

  .circle-title {
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
