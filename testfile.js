const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]

  
  // --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

  const sentencemaker = (array) => {
    return array.map((letter) => letter.name)
    .split(" ")
    .charAt(0).toUpperCase().slice(1)
    .join("")
    console.log(sentencemaker(people))
  }
    

  