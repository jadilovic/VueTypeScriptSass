<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{projectDetail}}</h1>
  <Counter />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
// import HelloWorld from './components/HelloWorld.vue';

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class App extends Vue {}
import {defineComponent} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import ProjectMixin from "./mixins/ProjectMixin"
import store from "./store";

export default defineComponent({
  components: {
    Counter,
    HelloWorld,
    ProjectMixin
  },
  mixins: [ProjectMixin],
  data() {
    return {
      title: "Counter App",
      list: [
        {
          name: "aki",
          age: "44"
        },
         {
          name: "cuni",
          age: "34"
        },
         {
          name: "ali",
          age: "24"
        },
         {
          name: "adi",
          age: "14"
        },
      ],
      count: 0
    }
  },
  props: {
    name: {
      readonly: true,
      default: "John Doe",
      type: String
    },
    job: {
      required: false,
      type: String,
      default: "Developer"
    },
    age: {
      required: true,
      type: Number,
      default: 5
    }
  },
  setup(props) {
    props.name,
    props.job,
    props.age
  },
  computed: {
    // fullName(): String {
    //   return this.title + " full name"
    // }
    fullName: {
      // get
      get(): string {
        return this.title + " full name"
      },
      set(value: string) {
        const names = value.split(" ");
        this.title = names[0] + " full name";
      }
    },
    stateTitle: {
      get(): string {
        return store.state.stateTitle;
      },
      set(value: string) {
        store.state.stateTitle = value;
        console.log(store.state.stateTitle);
      }
    },
    projectDetail() {
      return this.stateTitle + " Preetish HS";
    }
  },
  methods: {
    clickMe() {
      console.log("clicked");
      this.addNumbers(5, 7);
    },
    addNumbers(num1: number, num2: number): number {
      return num1 + num2;
    }
  },
  watch: {
    someObject: {
      handler(newValue, oldValue) {
        // do something
      },
      deep: true,
      immediate: true
    }
  },
  // emits: ["increment"],
  // setup(props, {emit}) {
  //   const addToCount(n: number) => {
  //     this.count += n;
  //   }
  // },
  mounted() {
    // do something
  },
  beforeMount() {
    // do something
  },
  beforeUpdate() {
    // do something
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
