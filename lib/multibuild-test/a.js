export default {
  firstName: "Arthur",
  lastName: "Fonzarelli",
  fullName: function(){
    return [this.fistName, this.lastName].join(" ");
  }
};