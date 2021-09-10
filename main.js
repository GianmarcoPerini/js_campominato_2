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
};

const checkBomb = () => {
    const check = document.querySelectorAll('.grid div');
    let count = 0
    for(let i=0;i<100;i++){
        const currentCheck = check[i]
        currentCheck.addEventListener('click', function(){
            if(this.classList == 'explode'){
                currentCheck.classList.add('bomb')
                setTimeout(()=>{
                    window.location.reload(true)
                },500)
            }else{
                currentCheck.classList.add('green')
                count++
                document.getElementById('result').innerHTML = count
                if(count == 10){
                document.getElementById('result').innerHTML = 'VITTORIA'
                setTimeout(()=>{
                    window.location.reload(true)
                },500)
                }
            }
        })
    }
}

fieldGeneretor()
checkBomb()