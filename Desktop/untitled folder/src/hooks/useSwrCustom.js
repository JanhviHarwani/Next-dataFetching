import React from "react";

// function useSwrCustom(url) {
//   return new Promise((resolve,reject) => {

//     fetch(url).then(() => {resolve();});
//   });
// }
function useSwrCustom(url) {
  return new Promise((resolve) => {
    resolve(url);
  });
}

export default useSwrCustom;
