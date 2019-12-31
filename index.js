// add solution here



function theBeatlesPlay(musicians, instruments) {
let musicianPlusInstrument = [];
for (let i =0; i<(musicians.length);i++) {
 
  musicianPlusInstrument.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicianPlusInstrument
}

function johnLennonFacts(facts) {
  let arraycounter = 0
  let factsEx = []
  while (facts.length > arraycounter) {
  factsEx.push(` ${facts[arraycounter]}!!!`)
  arraycounter += 1
  return factsEx
  
}
}

