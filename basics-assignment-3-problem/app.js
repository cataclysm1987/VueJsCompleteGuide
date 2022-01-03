const app = Vue.createApp({
    data: () => {
      return {
        result: 0
      };
    },
    methods: {
      addFive(){
          this.result += 5;
      },
      addOne() {
          this.result += 1;
      }
    },
    computed: {
        getResultString(){
            if (this.result < 37){
                return "Not there yet";
            } else if (this.result > 37){
                return "Too much!";
            } else {
                return this.result.toString();
            }
        }
    },
    watch: {
        result:function(value){
            setTimeout(() => this.result = 0, 5000);
        }
    }
  }).mount("#assignment");