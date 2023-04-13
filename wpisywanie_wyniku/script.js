const countries = ["Argentina", "Brazil", "England", "France", "Spain", "Belgium", "Portugal", "Germany", "Netherlands", "Uruguay", "Croatia", "Denmark", "Mexico", "the United States", "Senegal", "Wales", "Poland", "Australia", "Japan", "Morocco", "Switzerland", "Ghana", "Korea Republic", "Cameroon", "Serbia", "Canada", "Costa Rica", "Tunisia", "Saudi Arabia", "Iran", "Ecuador", "Qatar"]

options()
function options() {
    for (let i = 0; i < countries.length; i++) {
        const list = document.getElementsByClassName("select-list")
        for (let j = 0; j < list.length; j++) {
            const option = document.createElement("option")
            option.classList.add("option")
            list[j].appendChild(option)
            option.innerHTML = countries[i]
        }
    }
}

async function send() {
    const result1 = document.getElementsByClassName("input")[0].value
    const result2 = document.getElementsByClassName("input")[1].value
    const country1 = document.getElementsByClassName("select-list")[0].value
    const country2 = document.getElementsByClassName("select-list")[1].value
    console.log(result1)
    console.log(result2)
    console.log(country1)
    console.log(country2)
    const response = await fetch("http://localhost:1880/wpis", {
        method: "POST",
        body: `{"res1": ${result1}, "res2": ${result2}, "coun1": "${country1}", "coun2": "${country2}"}`
    })
}
