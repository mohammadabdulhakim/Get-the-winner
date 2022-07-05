let input =document.querySelector('.input input')
let addbtn =document.querySelector('.input button')
let shownnames =document.querySelector('.container .name')
let clearbtn =document.querySelector('.container .clear')
let randombtn =document.querySelector('.container .random')
let head =document.querySelector('.container .head')




let namesarray;

// notice (using null is better than using  ('')  ) 
if(localStorage.names != null){
    namesarray = JSON.parse(localStorage.names);
}else{
    namesarray = [];
}

refreshData()


function refreshData(){
    shownnames.innerHTML=``
    for(i=0 ; i<namesarray.length;i++){
        shownnames.innerHTML +=` 
        <h4 id="${i}" onclick="deleteName(this.id)">${namesarray[i]}<h4>
        `
    }
}








addbtn.onclick =function(){
    if(input.value != ''){
        namesarray.push(input.value)
        input.value=''
    }else{
        alert('Enter the name first')
    }
    localStorage.names = JSON.stringify(namesarray)
    refreshData()
}


clearbtn.onclick = ()=>{
    localStorage.clear()
    namesarray =[];
    localStorage.names = JSON.stringify(namesarray)
    shownnames.innerHTML=``
}



let names = document.querySelectorAll('.container .name h4') 
let shownnamesarray =Array.from(names)




// shownnamesarray.forEach((ele)=>{
//     let i =ele.id
//     ele.addEventListener('click' , (e)=>{
//         namesarray.splice(i,1)
//         localStorage.names = JSON.stringify(namesarray)
//         refreshData()
//     })
// })

function deleteName(i){
    namesarray.splice(i,1)
    localStorage.names = JSON.stringify(namesarray)
    refreshData()
}




//      random


let colors = ['red' ,'green' , 'blue' , 'yellow' , 'aqua' , 'violet','pink','#666','olivedrab','orange','orangered']


randombtn.onclick =function(){
    let i = 0;
    let luck = setInterval(() => {
        head.style.color=colors[Math.floor(Math.random() * colors.length)]
        i++
        let winner = namesarray[Math.floor(Math.random() * namesarray.length)]
        head.innerHTML= winner
        if(i == 10){
            clearInterval(luck)
            head.style.color='green'
        }
    }, 200);
    
}



document.onkeyup = function (e){
    if(e.key === "Enter"){
        if(input.value != ''){
            namesarray.push(input.value)
            input.value=''
        }else{
            alert('Enter the name first')
        }
        localStorage.names = JSON.stringify(namesarray)
        refreshData()
    }
}