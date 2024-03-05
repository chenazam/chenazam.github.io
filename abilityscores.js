const queryString = window.location.search;
const abilityScores = new URLSearchParams(queryString);

abilityScores.forEach((key, value) => {
    const score = key;
    const abilityname = value + "score";
    const modifier = Math.floor((key - 10) / 2);
    const modifiername = value + "mod";
    key = [abilityname, score, modifiername, modifier];
    console.log(key);

    if (modifier < 0) {
        document.getElementById(modifiername).innerHTML = modifier;
    } else {
        document.getElementById(modifiername).innerHTML = "+" + modifier;
    }
    document.getElementById(abilityname).innerHTML = score;
});