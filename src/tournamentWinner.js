function tournamentWinner(competitions, results) {
  // Write your code here.
  let teams = {
    HTML: 0,
    Python: 0,
    "C#": 0
  };
  let win = {
    "0": 1,
    "1": 0
  };
  let winner = "";
  let score = 0;

  results.forEach(function (num, ind) {
    if (!teams[competitions[ind][win[num]]])
      teams[competitions[ind][win[num]]] = 0;
    teams[competitions[ind][win[num]]] += 3;
  });

  for (let [key, value] of Object.entries(teams)) {
    if (value >= score) {
      score = value;
      winner = key;
    }
  }

  return winner;
}
