let startgame = document.querySelector('.startgame');
let startbtn = document.querySelector('.startbtn');
let playagain = document.querySelector('.playagain');
let great = document.querySelector('.great');
let eh = document.querySelector('.eh');
let box = document.querySelector('.box');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let easy = document.querySelector('.easy');
let hard = document.querySelector('.hard');
let colorname = document.querySelector('.colorname');
let text = document.querySelector('.text');

startbtn.addEventListener('click', () => {
    great.style.display = "block";
    startgame.style.display = "none";
    eh.style.display = "block";
    document.querySelector('body').style.backgroundColor = "grey";
});


playagain.addEventListener('click', () => {
    text.style.display = "none";
    eh.style.display = "block";
    playagain.style.display = "none";
    document.querySelector('body').style.backgroundColor = "grey";
});

for (let i = 1; i <= 6; i++) {
    document.getElementById(`b${i}`).style.display = "none";
}
  
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

  
  const hide = function () {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`b${i}`).style.display = "block";
    }
};
  
const hidden = function () {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`b${i}`).style.display = "block";
    }
  };
   
let index, r, g, b;

r = Math.trunc(Math.random() * 256);
g = Math.trunc(Math.random() * 256);
b = Math.trunc(Math.random() * 256);
let hello = function () {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`b${i}`).style.display = "none";
    }
    document.querySelector('body').style.backgroundColor = rgbToHex(r,g,b);
    text.style.display = "block";
    playagain.style.display = "block";
}
  
    easy.addEventListener('click', () => {
        eh.style.display = "none";
        hide();
        let arr = [1, 2, 3];
        index = Math.trunc(Math.random() * 3) + 1;

        colorname.innerHTML = "RGB(" + r + ',' + g + ',' + b + ')';
        arr.splice(index, 1);
        document.getElementById(`b${index}`).style.backgroundColor = rgbToHex(r, g, b);
    
        let r1 = Math.trunc(Math.random() * 256);
        let g1 = Math.trunc(Math.random() * 256);
        let b1 = Math.trunc(Math.random() * 256);
        document.getElementById(`b${arr[0]}`).style.backgroundColor = rgbToHex(r1, g1, b1);
   
        let r2 = Math.trunc(Math.random() * 256);
        let g2 = Math.trunc(Math.random() * 256);
        let b2 = Math.trunc(Math.random() * 256);
        document.getElementById(`b${arr[1]}`).style.backgroundColor = rgbToHex(r2, g2, b2);
 
    });


    hard.addEventListener('click', () => {
        eh.style.display = "none";
        hidden();
        let arr = [1, 2, 3, 4, 5, 6];
        index = Math.trunc(Math.random() * 6) + 1;

        colorname.innerHTML = "RGB(" + r + ',' + g + ',' + b + ')';
        arr.splice(index, 1);
        document.getElementById(`b${index}`).style.backgroundColor = rgbToHex(r, g, b);
    
        let r1 = Math.trunc(Math.random() * 256);
        let g1 = Math.trunc(Math.random() * 256);
        let b1 = Math.trunc(Math.random() * 256);
        document.getElementById(`b${arr[0]}`).style.backgroundColor = rgbToHex(r1, g1, b1);
   
        let r2 = Math.trunc(Math.random() * 256);
        let g2 = Math.trunc(Math.random() * 256);
        let b2 = Math.trunc(Math.random() * 256);
        document.getElementById(`b${arr[1]}`).style.backgroundColor = rgbToHex(r2, g2, b2);

        let r3 = Math.trunc(Math.random() * 256);
        let g3 = Math.trunc(Math.random() * 256);
        let b3 = Math.trunc(Math.random() * 256);
        document.getElementById(`b${arr[2]}`).style.backgroundColor = rgbToHex(r3, g3, b3);

        let r4 = Math.trunc(Math.random() * 256);
        let g4 = Math.trunc(Math.random() * 256);
        let b4 = Math.trunc(Math.random() * 256);
        document.getElementById(`b${arr[3]}`).style.backgroundColor = rgbToHex(r4, g4, b4);

        let r5 = Math.trunc(Math.random() * 256);
        let g5 = Math.trunc(Math.random() * 256);
        let b5 = Math.trunc(Math.random() * 256);
        document.getElementById(`b${arr[4]}`).style.backgroundColor = rgbToHex(r5, g5, b5);

    });

    document.getElementById("b1").addEventListener("click", function () {
        if (`b${index}` === "b1") {
            hello();
        } else {
            document.getElementById("b1").style.display = "none";
        }
    });
    document.getElementById("b2").addEventListener("click", function () {
        if (`b${index}` === "b2") {
            hello();
        } else {
            document.getElementById("b2").style.display = "none";
        }
    });
    document.getElementById("b3").addEventListener("click", function () {
        if (`b${index}` === "b3") {
            hello();
        } else {
            document.getElementById("b3").style.display = "none";
        }
    });
    document.getElementById("b4").addEventListener("click", function () {
        if (`b${index}` === "b4") {
            hello();
        } else {
            document.getElementById("b4").style.display = "none";
        }
    });
    document.getElementById("b5").addEventListener("click", function () {
        if (`b${index}` === "b5") {
            hello();
        } else {
            document.getElementById("b5").style.display = "none";
        }
    });
    document.getElementById("b6").addEventListener("click", function () {
        if (`b${index}` === "b6") {
            hello();
        } else {
            document.getElementById("b6").style.display = "none";
        }
    });