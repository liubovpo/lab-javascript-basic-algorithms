// Iteration 1: Names and Input
let hacker1 = "Liubov"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Alice"
console.log(`The navigator's name is  ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
  
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  } else{
    console.log("Something went wrong")
  }

// Iteration 3: Loops

//1

let nameWithSpaces = ""

for (let i = 0; i < hacker1.length; i++){
  
  if (i < hacker1.length - 1) {
    nameWithSpaces += hacker1[i] + " ";
  } else {
    nameWithSpaces += hacker1[i];
  }
  
}

console.log(nameWithSpaces.toUpperCase())

//2

let nameReverse = ""

for (let i = hacker2.length-1; i >= 0; i-- ){
  
  nameReverse += hacker2[i]
}
console.log(nameReverse)

//3

if (hacker1<hacker2){
    console.log("The driver's name goes first.")
  }
  else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first, definitely.")  
  } 
  else if (hacker1===hacker2) {
    console.log("What?! You both have the same name?") 
  }
  else{
    console.log("Smth went wrong")
  }

// BONUS 1
  let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas dolor at enim ornare ornare. Aenean nulla libero, commodo ut pellentesque at, pellentesque a arcu. Nulla dignissim cursus erat at blandit. Suspendisse consequat vitae tellus ac iaculis. Etiam convallis risus id sapien dictum dapibus in a velit. Phasellus ante augue, congue sit amet egestas vitae, pretium venenatis est. Ut at tempor metus, ut sollicitudin erat. Nullam venenatis convallis augue ultrices lacinia. Integer facilisis ultrices magna ut aliquam. Donec neque mi, bibendum in massa a, semper laoreet eros. Duis porta lacus at ex sodales, a rhoncus quam accumsan. Vivamus et augue ipsum. Fusce vestibulum enim eget faucibus tempus. Phasellus placerat ligula eget lobortis sagittis. Vivamus elementum, erat vel vehicula porta, nisi eros sollicitudin turpis, ut finibus diam justo vitae arcu.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse accumsan sodales ex, in molestie purus venenatis ac. Aliquam interdum, dui sed molestie varius, ex augue vulputate enim, et lobortis nunc eros vitae est. Nullam tellus ex, semper nec purus quis, hendrerit cursus ipsum. Maecenas pulvinar molestie ligula, ac condimentum lectus ornare sed. Morbi gravida molestie tempus. Fusce sed massa at enim condimentum dapibus venenatis in sem. Pellentesque diam justo, viverra sit amet molestie non, placerat et velit.

Maecenas gravida, odio a dignissim semper, nisi quam eleifend erat, sed ultricies elit mauris ac massa. Etiam quis eleifend justo, a venenatis turpis. Etiam ac lacus mauris. Donec at libero quis arcu imperdiet hendrerit. Vivamus a sapien non neque auctor dictum commodo nec lacus. Etiam a magna non ipsum ultrices volutpat. Duis placerat nibh ipsum. Nam congue risus dignissim maximus rhoncus. Praesent egestas odio vitae augue fermentum lobortis. Curabitur vel enim sollicitudin nulla fringilla dignissim. Nullam ut egestas quam. Quisque sed eleifend nunc. Duis nec eros a turpis ultrices ornare id a neque.`

    function countingWords(string) {
        let totalWords = 1; // 1 for the last word
        for (let i = 0; i < string.length; i++)
          if (string[i] === " " ) { 
            totalWords += 1; 
        }
        return totalWords
      }
      
    console.log(countingWords(longText)); // doesn't count breaks 

      

  let count = 0

  for (let i = 0; i < longText.length; i++){
    
    let chars = longText[i] + longText[i+1] + longText[i+2] + longText[i+3]
    if(chars === ` et `){
      count ++
    }
  }
  
  console.log(count)

// BONUS 2

let phraseToCheck = "No 'x' in Nixon?!"
let phraseToCheckLowerCase = phraseToCheck.toLowerCase()
let phraseNoSymbols = ""
for (let i = 0; i < phraseToCheckLowerCase.length; i++){
  if (phraseToCheckLowerCase[i] === ' ' || 
      phraseToCheckLowerCase[i] === '.' || 
      phraseToCheckLowerCase[i] === ',' || 
      phraseToCheckLowerCase[i] === '!' || 
      phraseToCheckLowerCase[i] === '?' || 
      phraseToCheckLowerCase[i] === ':' || 
      phraseToCheckLowerCase[i] === ';' || 
      phraseToCheckLowerCase[i] === `'` || 
      phraseToCheckLowerCase[i] === '-' || 
      phraseToCheckLowerCase[i] === '—' || 
      phraseToCheckLowerCase[i] === '"' ){
    continue
  } else {
    phraseNoSymbols += phraseToCheckLowerCase[i]
  }
}

let phraseReverse = ""

for (let i = phraseNoSymbols.length-1; i >= 0; i-- ){
  
  phraseReverse += phraseNoSymbols[i]
}


if (phraseNoSymbols === phraseReverse){
  console.log("It's a Palindrome")
} else {
  console.log("Not a Palindrome")
}
