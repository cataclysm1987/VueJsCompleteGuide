const app = Vue.createApp({
  data: () => {
    return {
      courseGoalA: "Hey yo",
      courseGoalB: "You stink",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputCourseGoal: function () {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
    showCourseGoal: function () {
      this.$refs.goals.innerText = this.outputCourseGoal();
    },
  },
}).mount("#user-goal");
