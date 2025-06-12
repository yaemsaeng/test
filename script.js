let form = document.querySelector('form')
let result = document.getElementById('result')


form.addEventListener('submit', (event) =>{
    event.preventDefault()
    let el = event.target
    let x = el.querySelector('[Name="x"]').valueAsNumber
    let y = el.querySelector('[Name="x"]').valueAsNumber
    let output
    //console.dir() จะทำให้เราดูข้างในได้ว่าเราใช้อะไรได้บ้าง
    // console.dir(x)
    // console.dir(y)
    let operator = el.querySelector('[Name="operater"]').value
    console.log(x, y, operator)
    switch (operator) {
        case 'plus':
            output = (x + y)
            break;
    
        case 'minus':
            output = (x - y)
            break;
    
        case 'mutiply':
            output = (x * y)
            break;
    
        case 'divine':
            output = (x / y)
            break;
    }
    result.innerText = output

})

