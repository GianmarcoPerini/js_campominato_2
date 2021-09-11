const fieldGeneretor = () => {
    const grid = document.querySelector('.grid');
    const valid = Array(80).fill('valid')
    const bomb = Array(20).fill('explode')
    const arrConcat = valid.concat(bomb)
    const sorted = arrConcat.sort(() => Math.random() - 0.5)
    for(let i=0;i<100;i++){
        const square = document.createElement('div');
        square.setAttribute('id', i)
        square.classList.add(sorted[i])
        grid.appendChild(square)
    }
}
fieldGeneretor()
const checkBomb = () => {
    const check = document.querySelectorAll('.grid div');
    let count = 00
        for(let i=0;i<100;i++){
            const currentCheck = check[i]
            currentCheck.addEventListener('click', function(){
                if(this.classList == 'explode'){
                    currentCheck.classList.add('bomb')
                    document.querySelector('#face').innerHTML = `<i class="fs-1 text-warning far fa-frown"></i>`
                    setTimeout(()=>{
                        window.location.reload(true)
                    },500)
                }else{
                    currentCheck.classList.add('green')
                    count++
                    document.getElementById('c1').innerHTML = round(count)
                    if(count == 10){
                        document.querySelector('#face').innerHTML = `<i class="fs-1 text-warning far fa-star"></i>`
                        setTimeout(()=>{
                            window.location.reload(true)
                        },500)
                    }
                }
            })
        }
    }
    checkBomb()

    
function round(n){
    return n > 9 ? "" + n: "0" + n;
}

