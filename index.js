function superbowlWin(array){
  let record = array.find((season)=>{
    return (season.result === "W")
  })
  if (record){
    return record.year
  }
}