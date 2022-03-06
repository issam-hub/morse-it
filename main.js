let morseObj = {
    a: "._",
    b: "_...",
    c: "_._.",
    d: "_..",
    e: ".",
    f: ".._.",
    g: "__.",
    h: "....",
    i: "..",
    j: ".___",
    k: "_._",
    l: "._..",
    m: "__",
    n: "_.",
    o: "___",
    p: ".__.",
    q: "__._",
    r: "._.",
    s: "...",
    t: "_",
    u: ".._",
    v: "..._",
    w: "_.._",
    x: "_.__",
    y: "__..",
    z: ".____",
    1: "..___",
    2: "...__",
    3: "...._",
    4: ".....",
    5: "_....",
    6: "__...",
    7: "___..",
    8: "____.",
    9: "_____",
    0: "..__..",
    "?": "_._.__",
    "!": "._._._",
    ".": "__..__",
    ",": "_._._.",
    ";": "___...",
    ":": "._._.",
    "+": "_...._",
    "-": "_.._.",
    "/": "_..._",
    " ": "   ",
};

let inp = document.querySelector("input");
let textArea = document.querySelector(".content textarea");
let translate = document.querySelector(".content i");
// get all the keys from our object
let keys = Object.keys(morseObj);
let result = [];
translate.onclick = function () {
    // ! make sure always empty result
    result = [];
    // in case of empty input throw alert
    if (inp.value == "") {
        alert("input is empty");
    } else {
        // append all the letters of the input inside result
        result = [...inp.value];
        // replace all letters with morse code if they included in our object key, else just return them
        result = result.map((e) => {
            if (keys.includes(e)) {
                return morseObj[`${e}`];
            } else {
                return e;
            }
        });
        // append the code to text area and seperate it with / for clearity
        textArea.textContent = result.join("/");
    }
};
