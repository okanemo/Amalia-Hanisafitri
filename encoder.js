function Encode() { 
    var str = "abcdefg";
    var letters = str.split("");
    var result = "";
    let n1 = 1, n2 = 1, nextTerm;
    for (let i = 0; i < 8; i++) {
        if(i > 0){
            var letter = letters[i-1];
            var join = String(n1).concat(letter)
            var result = result.concat(join);
        }
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    console.log(result)
}

Encode();
