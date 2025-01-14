
const mainClass = document.querySelector('.mainClass');
const centerDiv = document.querySelector('.centerDiv');

const mousePos = {
    startY: '',
    endY: ''
}

let flag=1; //second div is bigger initially
let zValue = 4;

let moveDirection; //top or bottom

//initial scrolled down 
mainClass.scrollBy({
    top:100
})

const childDiv = Array.from(mainClass.children)
console.log(childDiv)



const handleSize = (flag)=>{
    console.log(flag)
    childDiv.forEach((e,index)=>{

        
       
        if(index==flag){

            e.animate(
                [
                    {transform: `scale(1) translateY(0px)`},
                    {transform: `scale(1.25) translateY(-20px)`},
                    {transform: `scale(1.20) translateY(0px)`}

                ],{
                    duration: 800
                }
            )

            e.style.transform = `scale(1.20) translateY(${0}px)`
        

        }else{

            e.animate(
                [
                    {transform: `scale(1) translateY(0px)`},
                    {transform: `scale(0.96) translateY(-20px)`},
                    {transform: `scale(0.98) translateY(-10px)`},

                ],{
                    duration: 800
                }
            )

            e.style.transform = `scale(0.98) translateY(${-10}px)`;
           



        }
       


    })
}


handleSize(flag); //inital cae where the bigger div is the second one


//get mouse position
mainClass.addEventListener("mousedown",(e)=>{
    mousePos.startY = e.clientY;
})

mainClass.addEventListener("mouseup",(e)=>{
  
    mousePos.endY = e.clientY;

    //find if mouse move up or down. 
    //if startY > endY, it move up 
    //if startY < endY, it move  down
    //if startY = endY, dont move

    if(mousePos.startY > mousePos.endY){
        moveDirection = "bottom"; //
      
        //add a new div as the child
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        
        <div class="first-div z-${zValue}"> 
              
                <div class="second-div"></div>

                <section class="first-section">

                    <div class="circle-div"></div>

                    <section class="second-section">
                        <div class="first-line-div"></div>
                        <div class="second-line-div"></div>
                    </section>

                </section>


            </div>
        `;
        mainClass.appendChild(newDiv);
        
        //push this new element into childDiv array for manupulation
        childDiv.push(newDiv)

        //move them 
        mainClass.scrollBy({
            top: 200,
            behavior: "smooth"
        })

        // make the next element big other small
        flag++;
        zValue++; //for next element
        handleSize(flag);

    }

    if(mousePos.startY < mousePos.endY){
        moveDirection = "top";
        mainClass.scrollBy({
            top: -100,
            behavior: "smooth"
        })
    }

    console.log(`move: ${moveDirection}`)

})

