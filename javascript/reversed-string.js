function reversedString(str){
    let temp = str;
    if(str !== ''){
      return temp.split("").reverse("").join("");
    } {
        return 'String can\'t be blank'
    }
}

module.exports = reversedString
