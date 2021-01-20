const App = {
  data() {
    return {
      randomNumber: Math.floor(Math.random() * 99),
      usersNumber: "",
      guesses: "",
      remaining: 10,
      winOrLost: "",
      lowOrHi: "",
      badgeStyle: false,
      badgeResult: false,
      disabled: false,
    };
  },

  methods: {
    checkNumber(e) {
      if (!this.usersNumber || this.usersNumber === " ") {
        this.lowOrHi = "Please, enter a number";
      } else if (this.usersNumber == this.randomNumber) {
        this.lowOrHi = "";
        this.badgeStyle = false;
        this.badgeResult = true;
        this.winOrLost = "YOU WIN!!";
        this.disabled = true;
      } else {
        this.guesses += `${this.usersNumber}, `;
        this.remaining--;
        this.checklowOrHi();
        this.usersNumber = "";
      }
    },
    checklowOrHi() {
      this.badgeStyle = true;
      this.randomNumber > this.usersNumber
        ? (this.lowOrHi = "too low!")
        : (this.lowOrHi = "too high!");
      console.log(typeof this.usersNumber, typeof this.randomNumber);
    },
  },
  watch: {
    remaining(value) {
      if (value == 0) {
        this.lowOrHi = "";
        this.badgeStyle = false;
        this.badgeResult = true;
        this.disabled = true;
        this.winOrLost = "YOU LOST!!";
        this.disabled = true;
      }
    },
  },
};

Vue.createApp(App).mount("#wrapper");
