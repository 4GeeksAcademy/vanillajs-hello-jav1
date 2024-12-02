/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronum = ["the", "our", "a"];
  let adjective = ["great", "big", "wonderful", "cray"];
  let noun = ["jogger", "racoon", "cat", "pig"];
  let ext = [".com", ".net", "es", "outlook", "dev", "uy"];

  for (let i = 0; i < pronum.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let h = 0; h < ext.length; h++) {
          console.log(pronum[i] + adjective[j] + noun[k] + ext[h]);
        }
      }
    }
  }
};
