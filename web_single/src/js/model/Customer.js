import axios from "axios";

export default class Customer {
  constructor(id) {
    this.id = id;
  }

  async getCustomer() {
    try {
      let result = await axios("http://localhost:8080/api/customer/" + this.id);
      //this.id = result.data.id;
      this.name = result.data.name;
      this.email = result.data.email;
      this.phone = result.data.phone;
      this.address = result.data.address;
      this.cityRegion = result.data.cityRegion;
      this.ccNumber = result.data.ccNumber;
      //console.log(`${this.name} fdsafdsaf`);
      //  return this.result;
    } catch (error) {
      console.log("Асуудал гарлаа : " + error);
    }
  }
}
