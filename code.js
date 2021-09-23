let gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
let lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];
let bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

  // Write a function that returns an array with the cities in 'gotCitiesCSV'.
function kata1() {
    // Your Code Here
    let kataOne = document.createElement("h3")
    kataOne.innerHTML = "Kata 1"
    document.body.append(kataOne)
    // Render to the DOM.
  let divOne = document.createElement("div")
  divOne.innerHTML = JSON.stringify(gotCitiesCSV.split(","))
  kataOne.append(divOne)
    return []; // Return your result.
  }
  kata1(); // Remember to execute your function!
  
  // Write a function that returns an array of words from the sentence in 'bestThing'.
  function kata2() {
    // Your Code Here
    let kataTwo = document.createElement("h3")
    kataTwo.innerHTML = "Kata 2"
    document.body.append(kataTwo)
  
    divTwo = document.createElement("div")
    divTwo.innerHTML = JSON.stringify(bestThing.split(" "))
    kataTwo.append(divTwo)
  }
  kata2()
  
  
  // Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'.
  function kata3() {
    // Your Code Here
    let kataThree = document.createElement("h3")
    kataThree.innerHTML = "Kata 3"
    document.body.append(kataThree)
  
    let divThree = document.createElement("div")
    divThree.innerHTML = JSON.stringify(gotCitiesCSV.split(",").join("; "))
    kataThree.append(divThree)
  }
  kata3()
  
  // Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'.
  function kata4() {
    // Your Code Here
    let kataFour = document.createElement("h3")
    kataFour.innerHTML = "Kata 4"
    document.body.append(kataFour)
  
    let divFour = document.createElement("div")
    divFour.innerHTML = JSON.stringify(lotrCitiesArray.join(", "))
    kataFour.append(divFour)
  }
  kata4()
  // Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'.
  function kata5() {
    // Your Code Here
    let kataFive = document.createElement("h3")
    kataFive.innerHTML = "Kata 5"
    document.body.append(kataFive)
  
    let divFive = document.createElement("div")
    divFive.innerHTML = JSON.stringify(lotrCitiesArray.slice(0,5))
    kataFive.append(divFive)
  }
  kata5()
  // Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'.
  function kata6() {
    // Your Code Here
    let kataSix = document.createElement("h3")
    kataSix.innerHTML = "Kata 6"
    document.body.append(kataSix)
  
    let divSix = document.createElement("div")
    divSix.innerHTML = JSON.stringify(lotrCitiesArray.slice(3))
    kataSix.append(divSix)
  }
  kata6()
  // Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'.
  function kata7() {
    // Your Code Here
    let kataSeven = document.createElement("h3")
    kataSeven.innerHTML = "Kata 7"
    document.body.append(kataSeven)
  
    let divSeven = document.createElement("div")
    divSeven.innerHTML = JSON.stringify(lotrCitiesArray.slice(2, lotrCitiesArray.length-3))
    kataSeven.append(divSeven)
  }
  kata7()
  // Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
  function kata8() {
    // Your Code Here
    let kataEight = document.createElement("h3")
    kataEight.innerHTML = "Kata 8"
    document.body.append(kataEight)
  
    let divEight = document.createElement("div")
    JSON.stringify(lotrCitiesArray.splice(2,1))
    divEight.innerHTML = JSON.stringify(lotrCitiesArray)
    kataEight.append(divEight)
  }
  kata8()
  // Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
  function kata9() {
    // Your Code Here
    let kataNine = document.createElement("h3")
    kataNine.innerHTML = "Kata 9"
    document.body.append(kataNine)
  
    let divNine = document.createElement("div")
    JSON.stringify(lotrCitiesArray.splice(5))
    divNine.innerHTML = JSON.stringify(lotrCitiesArray)
    kataNine.append(divNine)
  }
  kata9()
  // Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the modified 'lotrCitiesArray'.
  function kata10() {
    // Your Code Here
    let kataTen = document.createElement("h3")
    kataTen.innerHTML = "Kata 10"
    document.body.append(kataTen)
  
    let divTen = document.createElement("div")
    JSON.stringify(lotrCitiesArray.splice(2, 0, "Rohan"))
    divTen.innerHTML = JSON.stringify(lotrCitiesArray)
    kataTen.append(divTen)
  }
  kata10()
  // Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
  function kata11() {
    // Your Code Here
    let kataEleven = document.createElement("h3")
    kataEleven.innerHTML = "Kata 11"
    document.body.append(kataEleven)
  
    let divEleven = document.createElement("div")
    JSON.stringify(lotrCitiesArray.splice(5, 1, "Deadest Marshes"))
    divEleven.innerHTML = JSON.stringify(lotrCitiesArray)
    kataEleven.append(divEleven)
  }
  kata11()
  
  // Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'.
  function kata12() {
    // Your Code Here
    let kataTwelve = document.createElement("h3")
    kataTwelve.innerHTML = "Kata 12"
    document.body.append(kataTwelve)
  
    let divTwelve = document.createElement("div")
    divTwelve.innerHTML = JSON.stringify(bestThing.slice(0, bestThing.length - 67))
    kataTwelve.append(divTwelve)
  }
  kata12()
  // Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'.
  function kata13() {
    // Your Code Here
    let kataThirteen = document.createElement("h3")
    kataThirteen.innerHTML = "Kata 13"
    document.body.append(kataThirteen)
  
    let divThirteen = document.createElement("div")
    divThirteen.innerHTML = JSON.stringify(bestThing.slice(69))
    kataThirteen.append(divThirteen)
  }
  kata13()
  // Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even').
  function kata14() {
    // Your Code Here
    let kataFourteen = document.createElement("h3")
    kataFourteen.innerHTML = "Kata 14"
    document.body.append(kataFourteen)
  
    let divFourteen = document.createElement("div")
    divFourteen.innerHTML = JSON.stringify(bestThing.slice(23, bestThing.length - 43))
    kataFourteen.append(divFourteen)
  }
  kata14()
  // Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'.
  function kata15() {
    // Your Code Here
    let kataFifteen= document.createElement("h3")
    kataFifteen.innerHTML = "Kata 15"
    document.body.append(kataFifteen)
  
    let divFifteen = document.createElement("div")
    divFifteen.innerHTML = JSON.stringify(bestThing.substring(69))
    kataFifteen.append(divFifteen)
  }
  kata15()
  // Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'.
  function kata16() {
    // Your Code Here
    let kataSixteen = document.createElement("h3")
    kataSixteen.innerHTML = "Kata 16"
    document.body.append(kataSixteen)
  
    let divSixteen = document.createElement("div")
    divSixteen.innerHTML = JSON.stringify(bestThing.substring(23, bestThing.length - 43))
    kataSixteen.append(divSixteen)
  }
  kata16()
  // Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the modified array.
  function kata17() {
    // Your Code Here
    let kataSeventeen = document.createElement("h3")
    kataSeventeen.innerHTML = "Kata 17"
    document.body.append(kataSeventeen)
  
    let divSeventeen = document.createElement("div")
    JSON.stringify(lotrCitiesArray.pop())
    divSeventeen.innerHTML = JSON.stringify(lotrCitiesArray)
    kataSeventeen.append(divSeventeen)
  }
  kata17()
  
  // Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the modified array.
  function kata18() {
    // Your Code Here
    let kataEighteen = document.createElement("h3")
    kataEighteen.innerHTML = "Kata 18"
    document.body.append(kataEighteen)
  
    let divEighteen = document.createElement("div")
    JSON.stringify(lotrCitiesArray.push("Deadest Marshes"))
    divEighteen.innerHTML = JSON.stringify(lotrCitiesArray)
    kataEighteen.append(divEighteen)
  }
  kata18()
  // Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the modified array.
  function kata19() {
    // Your Code Here
    let kataNineteen = document.createElement("h3")
    kataNineteen.innerHTML = "Kata 19"
    document.body.append(kataNineteen)
  
    let divNineteen = document.createElement("div")
    JSON.stringify(lotrCitiesArray.shift())
    divNineteen.innerHTML = JSON.stringify(lotrCitiesArray)
    kataNineteen.append(divNineteen)
  }
  kata19()
  // Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the modified array.
  function kata20() {
    // Your Code Here
    let kataTwenty = document.createElement("h3")
    kataTwenty.innerHTML = "Kata 20"
    document.body.append(kataTwenty)
  
    let divTwenty = document.createElement("div")
    JSON.stringify(lotrCitiesArray.unshift("Mordor"))
    divTwenty.innerHTML = JSON.stringify(lotrCitiesArray)
    kataTwenty.append(divTwenty)
  }
  kata20()