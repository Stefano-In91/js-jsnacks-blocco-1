"use strict";

const gatsbyInvited = ["Marco", "Stefano", "Samuela", "Jhanna", "Fruzzo", "Oscar", "NonBinary"];
const invitedNumber = gatsbyInvited.length;

let invited;

const guestName = prompt("Come si chiama Milord/Milady/It ?")

for (let i = 0; i < invitedNumber; i++) {
   if (guestName === gatsbyInvited[i]) {
      invited = true;
   }
}

if (invited) {
   alert("Può entrare Milord/Milady/It");
} else {
   alert("Prego si allontani dalla lochescion");
}