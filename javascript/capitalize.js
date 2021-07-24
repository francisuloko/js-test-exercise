function capitalize(string) {
    let str = string;
    if(str !== ''){
      return str[0].toUpperCase() + str.slice(1);
    } else {
      return 'String can\'t be empty';
    }
}

module.exports = capitalize
