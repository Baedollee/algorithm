// 올바른 괄호 (Vaild parenthese)
// - 괄호가 올바르게 paired 되었다는 것은 "(", "{", "[", 등의 괄호가 열렸으면 
// 반듯이 짝지어서 닫혀야 한다는 말

// 예제
// '()()' or '(())()' 올바른 괄호
// '{}{}{' or '{{}' 틀린 괄호

const validParentheses = (input) =>{
    const stack = []
    for(const char of input){
        if(char === '{' || char === '[' || char === '('){
            stack.push(char)
        }else{
            const lastChar = stack.pop()
            if{char ===  }
        }
    }
}