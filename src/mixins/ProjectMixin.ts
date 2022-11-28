import { defineComponent } from "vue";


export default defineComponent({
    data() {
        return {
            projectName: "Vue.js and TypeScript: A complete tutorial with examples",
        }
    },
    projectName: "My project",
    projectDetail1: {
        
        set value(value : string) {
            this.projectName = value;
        },
        
        get value() : string {
            return this.projectName;
        }
        
        
    }
})