function capitalize(string) {
    let str = string;
    if(typeof(str) === 'string' && typeof(+str[0] !== 'number')){
      if(str !== ''){
        return str[0].toUpperCase() + str.slice(1);
      } else {
        return 'String can\'t be empty';
      }
    } else {
      return 'Input must be a string'
    }
}

module.exports = capitalize
