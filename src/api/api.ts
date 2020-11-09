import Data from './data.json';

export default class MockApi {
  static getData() {
    return Promise.resolve(Data);
  }
}

export type MockApiData = typeof Data;
