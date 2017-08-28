import { observable } from 'mobx';

class ObservableSearchStore {
  @observable search = {
    area: '',
    people: 1,
    startDate: null,
    endDate: null,
    results: [],
  };

  updateSearch(search) {
    this.search = search;
  }
}

const observableSearchStore = new ObservableSearchStore();
export default observableSearchStore;
