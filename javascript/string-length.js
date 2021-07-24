function stringLength(string){
    const len = string.trim().length;
    const str = string;

    if(len > 1 && len <= 10){
       return str.length;
    } else if(str === '') {
        return 'String can\'t be blank';
    } else {
        return 'String is too long';
    }
}

module.exports = stringLength;
