let prompt1 = +prompt("X value:");
let prompt2 = +prompt("Y value:");
let prompt3 = prompt("Sign:");
if (/^\d+$/.test(prompt1) === false) {
    prompt1 = +prompt("Wrong symbol, X value:");
  }
  if (/^\d+$/.test(prompt2) === false) {
    prompt2 = +prompt("Wrong symbol, Y value:");
  }
  if (/^[a-zA-Z]+$/.test(prompt3) || /^[?!,.а-яА-ЯёЁ0-9\s]+$/.test(prompt3)) {
    prompt3 = prompt("Wrong symbol, Sign:");
  }
let object = { x: prompt1, y: prompt2, sign: prompt3 };
console.log(object);
class SuperMath {
 

  checkObj(obj) {
    switch (obj.sign) {
      case "+":
        return obj.x + obj.y;
      case "-":
        return obj.x - obj.y;
      case "/":
        return obj.x / obj.y;
      case "*":
        return obj.x * obj.y;
      case "%":
        return obj.x % obj.y;
    }
  }

  input() {
    let confirming = confirm("Everything is OK?");
    if (confirming) {
      alert(answer.checkObj(object));
    } else {
      prompt1 = +prompt("X value:");
      prompt2 = +prompt("Y value:");
      prompt3 = prompt("Sign:");
      object = { x: prompt1, y: prompt2, sign: prompt3 };
      confirming = confirm("Everything is OK?");
      alert(answer.checkObj(object));
    }
  }
}

const answer = new SuperMath({
    
});
answer.checkObj(object)
answer.input()