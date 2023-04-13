async function GetData() {
    const data = await fetch("http://localhost:1880/odczyt")
    const json = await data.json()
    function wyniki() {
        const everything = document.getElementsByClassName("everything")[0]
        let link = "https://countryflagsapi.com/png/"
        for (let i = 0; i < json.length; i++) {
            const maindiv = document.createElement("div")
            maindiv.classList.add("main-div")
            everything.appendChild(maindiv)

            const flagcountryone = document.createElement("img")
            flagcountryone.classList.add("flag-country-one")
            maindiv.appendChild(flagcountryone)
            link += json[i].countryo
            document.getElementsByClassName("flag-country-one")[i].setAttribute("src", link)
            document.getElementsByClassName("flag-country-one")[i].setAttribute("crossorigin", "anonymous")
            link = "https://countryflagsapi.com/png/"

            const divcountryone = document.createElement("div")
            divcountryone.classList.add("div-country-one")
            maindiv.appendChild(divcountryone)
            document.getElementsByClassName("div-country-one")[i].innerHTML = json[i].countryo

            const divresultone = document.createElement("div")
            divresultone.classList.add("div-result-one")
            maindiv.appendChild(divresultone)
            document.getElementsByClassName("div-result-one")[i].innerHTML = json[i].reso

            const dash = document.createElement("div")
            dash.classList.add("dash")
            maindiv.append(dash)
            document.getElementsByClassName("dash")[i].innerHTML = "-"

            const divresulttwo = document.createElement("div")
            divresulttwo.classList.add("div-result-two")
            maindiv.appendChild(divresulttwo)
            document.getElementsByClassName("div-result-two")[i].innerHTML = json[i].rest

            const divcountrytwo = document.createElement("div")
            divcountrytwo.classList.add("div-country-two")
            maindiv.appendChild(divcountrytwo)
            document.getElementsByClassName("div-country-two")[i].innerHTML = json[i].countryt

            const flagcountrytwo = document.createElement("img")
            flagcountrytwo.classList.add("flag-country-two")
            maindiv.appendChild(flagcountrytwo)
            link += json[i].countryt
            document.getElementsByClassName("flag-country-two")[i].setAttribute("src", link)
            document.getElementsByClassName("flag-country-two")[i].setAttribute("crossorigin", "anonymous")
            link = "https://countryflagsapi.com/png/"
            
        }
    }
    wyniki()
}
GetData()