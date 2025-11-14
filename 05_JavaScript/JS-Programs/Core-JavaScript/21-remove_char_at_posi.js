const remove_character = (str, char_pos) => {
    const part1 = str.substring(0,char_pos);
    const part2 = str.substring(char_pos + 1, str.length);
    return part1 + part2;
};

//log the result
console.log(remove_character("Python", 0));
console.log(remove_character("Python", 3));
console.log(remove_character("Python", 5));