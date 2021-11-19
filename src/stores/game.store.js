import { makeAutoObservable } from "mobx";

class GameStore {
  options = {
    id: 1,
    playersCont: 4,
    spyesCount: 1,
    isTimerNeeded: true,
    timer: 5,
    isFirstMemberChoiseNeeded: false,
    isRolesNeeded: false,
    categories: [],
    isHelpQuestionsNeeded: false,
    winner: "",
  };

  location = "";

  constructor() {
    makeAutoObservable(this);
  }

  setLocation(location) {
    console.log(location);
    this.location = location;
  }

  setWinner(winner) {
    console.log(winner);
    this.options = {
      ...this.options,
      winner,
    };
  }

  setGameOptions(gameOptions) {
    this.options = {
      ...gameOptions,
      description: {
        location:
          "Вы мирный житель. Ваша цель - вычислить шпиона и убрать его путем голосования",
        spy: "Ваша цель - угадать локацию или не дать понять другим участникам, что вы ее не знаете",
      },
    };
  }
}

export default GameStore;
