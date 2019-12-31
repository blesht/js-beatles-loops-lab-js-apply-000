// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments) {
let musicianPlusInstrument = [];
for (let i =0; i<(musicians.length);i++) {
  musicianPlusInstrument = []
  musicianPlusInstrument.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(musicianPlusInstrument)
}

function johnLennonFacts(facts) {
  let arraycounter = 0
  let factsEx = []
  while (facts.length > arraycounter) {
  factsEx.push(`${facts[arraycounter]} +!!!`)
  arraycounter += 1
  console.log(factsEx)
  
}
}

