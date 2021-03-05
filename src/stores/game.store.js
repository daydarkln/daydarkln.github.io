import { makeAutoObservable } from 'mobx';

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
  };

  constructor() {
    makeAutoObservable(this);
  }

  setGameOptions(gameOptions) {
    this.options = gameOptions;
  }
}

export default GameStore;
