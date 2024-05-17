require("@babel/polyfill");
import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async doSearch() {
    try {
      let result = await axios(
        `http://localhost:8080/api/customers/${this.query}`
      );
      this.result = result.data;

      return this.result;
    } catch (error) {
      console.log("Асуудал гарлаа : " + error);
    }
  }
}
