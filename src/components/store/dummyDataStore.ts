import { makeObservable,observable,action } from 'mobx';
import axios from 'axios';

class DummyDataStore {
  data = [];
  loading = false;
  error = null;

  constructor() {
    makeObservable(this, {
        data: observable,
        loading: observable,
        error: observable,
        fetchData: action
    })
  }

  fetchData = async () => {
    this.loading = true;
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      this.data = response.data;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  };
}

const dummyDataStore = new DummyDataStore();
export default dummyDataStore;
