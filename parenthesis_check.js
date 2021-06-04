function isParenthesesValid(parentheses){
    //ここから書きましょう
    parentheses_list = [];
    for(i=0; i<parentheses.length; i++) {
        if(parentheses[i] == '(') {
            parentheses_list.push('(');
        } else if(parentheses[i] == '[') {
            parentheses_list.push('[');
        } else if(parentheses[i] == '{') {
            parentheses_list.push('{');
        } else if(parentheses[i] == ')' || parentheses[i] == ']' || parentheses[i] == '}') {
            if(parentheses_list[parentheses_list.length-1] == '(') {
                parentheses_reverse = ')';
            } else if(parentheses_list[parentheses_list.length-1] == '[') {
                parentheses_reverse = ']';
            } else if(parentheses_list[parentheses_list.length-1] == '{') {
                parentheses_reverse = '}'
            } else if(parentheses_list.length == 0) {
                return false;
            }
            if(parentheses[i] != parentheses_reverse) {
                return false;
            }
            parentheses_list.pop();
        }
    }
    if(parentheses_list.length == 0) {
        return true;
    }
    return false;
}
