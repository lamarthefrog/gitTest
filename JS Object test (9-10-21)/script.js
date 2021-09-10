const drinkName = document.getElementById("drinkName");
const ingredient1 = document.getElementById("ingredient1");
const ingredient2 = document.getElementById("ingredient2");
const ingredient3 = document.getElementById("ingredient3");

const oldFashioned = {
    drinkName: "Old Fashioned",
    ingredient1: "1 shot bourbon",
    ingredient2: "1 sugar cube",
    ingredient3: "2 dashes bitters"
}

const whiteRussian = {
    drinkName: "White Russian",
    ingredient1: "1 shot vodka",
    ingredient2: "1/2 shot khalua",
    ingredient3: "heavy cream to the top"
}

const moscowMule = {
    drinkName: "Moscow Mule",
    ingredient1: "1 shot vodka",
    ingredient2: "1/2 shot lime juice",
    ingredient3: "ginger beer to the top"
}

const sidecar = {
    drinkName: "Sidecar",
    ingredient1: "1 shot cognac",
    ingredient2: "1 shot triple sec",
    ingredient3: "1 shot lemon juice"
}

const margarita = {
    drinkName: "Margarita",
    ingredient1: "1 shot tequila",
    ingredient2: "1/2 shot triple sec",
    ingredient3: "1/2 shot lime juice",
}

const drinkArr = [oldFashioned, whiteRussian, moscowMule, sidecar, margarita];

// gets a random drink object from the drink array, then outputs ingredients to DOM
function getDrink() {
    var yourDrink = drinkArr[Math.floor(Math.random() * 5)];

    drinkName.innerHTML = yourDrink.drinkName;
    ingredient1.innerHTML = yourDrink.ingredient1;
    ingredient2.innerHTML = yourDrink.ingredient2;
    ingredient3.innerHTML = yourDrink.ingredient3;
}

