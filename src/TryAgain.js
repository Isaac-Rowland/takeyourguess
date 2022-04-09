function TryAgain({resetGuesses, todaysSong}) {

  
  return (
    <div>
      <h2>Nice try</h2>
      <h3>The correct theme was {todaysSong}</h3>
      <button onClick={resetGuesses}>Try again with a new theme</button>
    </div>
  )
}

export default TryAgain