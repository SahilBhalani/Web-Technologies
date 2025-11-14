//* Replace Each Character with Next Alphabet Letter

const LetterChanges = (text) => {
    let s = text.split('');

    for (let i = 0; i < s.length; i++) {
        //caesar cipher
        switch(s[i]){
            case '':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] = 'A';
                break;
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        //upper-case Vowels
        switch (s[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                s[i] = s[i].toUpperCase();
        }
    }

    return s.join('');
}

//log the result
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));
console.log(LetterChanges("Sahil Bhalani"));