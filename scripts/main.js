const mapNormal = [...document.querySelectorAll('.img-normal')]
const mapExpansion = [...document.querySelectorAll('.img-expansion')]

const btnNormal = document.querySelector('.btn-normal')
const btnExpansion = document.querySelector('.btn-expansion')
const desertNormal = document.querySelector('.desert-normal')
const desertExpansion = document.querySelector('.desert-expansion')
const desertExpansion2 = document.querySelector('.desert-expansion2')

btnExpansion.addEventListener('click', () => {

    mapNormal.forEach(image => {
        image.src = "";      
    });

    desertNormal.src = "";


    let images = [
        'images/clay.png', 
        'images/clay.png', 
        'images/clay.png', 
        'images/clay.png', 
        'images/clay.png', 
        'images/wool.png',
        'images/wool.png',
        'images/wool.png',
        'images/wool.png',
        'images/wool.png',
        'images/wool.png',
        'images/wood.png',
        'images/wood.png',
        'images/wood.png',
        'images/wood.png',
        'images/wood.png',
        'images/wood.png',
        'images/stone.png',
        'images/stone.png',
        'images/stone.png',
        'images/stone.png',
        'images/stone.png',
        'images/grain.png',
        'images/grain.png',
        'images/grain.png',
        'images/grain.png',
        'images/grain.png',
        'images/grain.png'
    ] 

    function randomMap(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    randomMap(images);
    let index = 0;

    mapExpansion.forEach(image => {
        image.src = images[index];      
        index+=1;
    });
    desertExpansion.src = 'images/desert.png';
    desertExpansion2.src = 'images/desert.png';

})


btnNormal.addEventListener('click', () => {

    mapExpansion.forEach(image => {
        image.src = "";      
    });
    
    desertExpansion.src = "";
    desertExpansion2.src = "";

    let images = [
        'images/clay.png', 
        'images/clay.png', 
        'images/clay.png', 
        'images/wool.png',
        'images/wool.png',
        'images/wool.png',
        'images/wool.png',
        'images/wood.png',
        'images/wood.png',
        'images/wood.png',
        'images/wood.png',
        'images/stone.png',
        'images/stone.png',
        'images/stone.png',
        'images/grain.png',
        'images/grain.png',
        'images/grain.png',
        'images/grain.png'
    ] 

    function randomMap(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    randomMap(images);
    let index = 0;

    mapNormal.forEach(image => {
        image.src = images[index];      
        index+=1;
    });
    desertNormal.src = 'images/desert.png';
})