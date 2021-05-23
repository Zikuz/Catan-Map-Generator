const mapNormal = [...document.querySelectorAll('.img-normal')]
const mapExpansion = [...document.querySelectorAll('.img-expansion')]

const btnNormal = document.querySelector('.btn-normal')
const btnExpansion = document.querySelector('.btn-expansion')

const desertNormal = document.querySelector('.desert-normal')
const desertExpansion = [...document.querySelectorAll('.desert-expansion')]

const randomMap = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
}

const clearMapNormal = () => {
    mapNormal.forEach(image => {
        image.src = "";      
    });

    desertNormal.src = "";
}

const clearMapExpansion = () => {
    mapExpansion.forEach(image => {
        image.src = "";      
    });

    desertExpansion.forEach(image => {
        image.src = "";      
    });
}

const generateMapNormal = () => {
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
    
    randomMap(images);
    let index = 0;
    
    mapNormal.forEach(image => {
        image.src = images[index];   
        index += 1;
    });

    desertNormal.src = 'images/desert.png';
}

const generateMapExpansion = () => {

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

    randomMap(images);

    let index = 0;

    mapExpansion.forEach(image => {
        image.src = images[index];      
        index += 1;
    });

    desertExpansion.forEach(image => {
        image.src = 'images/desert.png';      
    });
}

btnExpansion.addEventListener('mousemove', () => {
    clearMapNormal()
    generateMapExpansion();
})

btnNormal.addEventListener('mousemove', () => {
    clearMapExpansion()
    generateMapNormal();
})


const generateStartMap = () => {
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
    
    randomMap(images);
    let index = 0;

    
    mapNormal.forEach(image => {
        image.src = images[index];   
        index += 1;
    });

    desertNormal.src = 'images/desert.png';
}

window.addEventListener('load', () => {
    generateStartMap();
});


