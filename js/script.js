function valueInput() {

    document.getElementById('timeAzul').value = 0
    document.getElementById('timeVermelho').value = 0
    
}

function addPoint(idInput) {

    let input = document.getElementById(`${idInput}`)

    input.value = Number(input.value) + 1
    
}

function removePoint(idInput) {

    let input = document.getElementById(`${idInput}`)

    input.value = Number(input.value) - 1
    
    if (input.value < 0) {
        
        input.value = 0
        
    }
    
}
