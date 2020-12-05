export function makeStringPath(str) {
    str = str.replace(/-+/g, " ")
    return str.charAt(0).toUpperCase() + str.slice(1)
   
}
export function makeUrlPath(str) {
   return str.replace(/\s+/g, '-').toLowerCase();
}


  export function splitTypeArray(arr) {
    return arr.join(" and ");
  }
  