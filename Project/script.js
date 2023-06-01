const infoBtn = document.getElementById("info-btn");
const infoDisp = document.getElementById("info-disp");
let isDisp = false;
async function displayInfo(){
    if(isDisp == false){
        infoDisp.style.display = "grid";
        infoBtn.style.top = 73 + "vh";
        infoDisp.style.height = 20 + "%";
        infoDisp.style.opacity = 100 + "%";
        infoDisp.style.bottom = 0;
    }else{
        infoBtn.style.top = 87 + "vh";
        infoDisp.style.height = 0;
        infoDisp.style.opacity = 0;
        infoDisp.style.bottom = (-20) + "%";
    }
    isDisp = !isDisp;
}

const foodContainer = document.getElementsByClassName("food-container")

function generateCard(){
    console.log("asdasdasda");
    for(let i = 0; i < myFood.food.length; i++){
        const createFood = document.createElement("div");
        createFood.className = "food";
        foodContainer[0].appendChild(createFood);
        const foodInfo = document.createElement("div");
        foodInfo.className = "food-info";
        createFood.appendChild(foodInfo);
        const foodTitle = document.createElement("h2");
        foodTitle.className = "food-title";
        foodTitle.textContent = myFood.food[i].name;
        foodInfo.appendChild(foodTitle);
        const foodDesc = document.createElement("div");
        foodDesc.className = "food-desc";
        foodDesc.textContent = myFood.food[i].desc[0];
        foodInfo.appendChild(foodDesc);
        createFood.addEventListener("click",function(){openLink(i);})
        createFood.style.backgroundImage = "url(img/food" + i + ".jpg";
    }
}

function openLink(foodNumber){
    localStorage.setItem("FoodNumber", foodNumber);
    window.location.href = "info.html";
}

const dishInfo = document.getElementsByClassName("dish-info");
function getNumber(){
    foodOrder = localStorage.getItem("FoodNumber");
    loadInfo();
    localStorage.setItem("FoodOrder", undefined);
}

function loadInfo(){
        const dishTitle = document.createElement("h1");
        dishTitle.className = "dish-title";
        dishTitle.textContent = myFood.food[foodOrder].name;
        const image = document.getElementById("image");
        image.setAttribute('src', "img/food" + (foodOrder) + ".jpg");
        dishInfo[0].insertBefore(dishTitle, image);
        for(let i in myFood.food[foodOrder].desc){
            const dishDesc = document.createElement("p");
            dishDesc.className = "desc";
            dishDesc.textContent = myFood.food[foodOrder].desc[i];
            dishInfo[0].appendChild(dishDesc);
        }
        for(let i in myFood.food[foodOrder].hist){
            const dishHist = document.createElement("div");
            dishHist.className = "hist";
            dishHist.textContent = myFood.food[foodOrder].hist[i];
            dishInfo[0].appendChild(dishHist);
        }
        
        for(let i = 0; i < 7; i++){
            const lineSpacing = document.createElement("br");
            dishInfo[0].appendChild(lineSpacing);
        }
        

        const dishRef = document.createElement("div");
        dishRef.className = "ref";
        dishRef.textContent = "Reference: " + myFood.food[foodOrder].reference;
        dishInfo[0].appendChild(dishRef);
}

const slctDesc = document.getElementById("select-desc");
const slctHist = document.getElementById("select-hist");
let clr;

function changeDesc(clr){    
    const activeDesc = document.getElementsByClassName("desc");
    const activeHist = document.getElementsByClassName("hist");
    switch(clr){
        case 1:
            document.body.style.backgroundColor = "rgb(247, 255, 177)";

            for(let i = 0; i < activeHist.length; i++){
                activeHist[i].style.display = "none";
            } 
            
            for(let i = 0; i < activeDesc.length; i++){
                activeDesc[i].style.display = "block";
            } 
            
            break;

        case 2:
            document.body.style.backgroundColor = "rgb(212, 255, 177)";
            
            for(let i = 0; i < activeHist.length; i++){
                activeHist[i].style.display = "block";
            } 
            
            for(let i = 0; i < activeDesc.length; i++){
                activeDesc[i].style.display = "none";
            } 
            
            break;
    }
}    
