//snake water gun game 
//s w g
let user = prompt("Input s(snake) w(water) or g(gun)");
let kapil = Math.floor(Math.random() * 3);
console.log(kapil);
let arr = ["s", "w", "g"][kapil]; //s for snake w for water and g for gun
const match = (kapil, arr) => {
    if (user === arr) {
        return "nobody"
    }
    else if (user == "s" && arr == "w") {
        return "kapil";

    }
    else if (user == "g" && arr == "w") {
        return "arr";

    }
    else if (user == "s" && arr == "g") {
        return "arr";

    }
    else if (user == "g" && arr == "s") {
        return "kapil";

    }
    else if (user == "w" && arr == "s") {
        return "arr";

    }

    else if (user == "w" && arr == "g") {
        return "kapil";

    }



}
let result = match(user, arr);
document.write(`User  =  ${user.toUpperCase()} <br> Arr = ${arr.toUpperCase()} <br>The winner is ${result.toUpperCase()}`);
//  
//w = kapil