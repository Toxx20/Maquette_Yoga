const tpl= document.getElementById("template")

const addTpl = tpl.content.cloneNode(true)

document.body.append(addTpl)

const menu = document.querySelector('.menu-list')

const svg = document.querySelector('.menu-list svg')


// div qui contient tous les liens plus tard
const divMenu = document.createElement('div')
divMenu.setAttribute('class','flex flex-col text-(--white) hover:underline')

/**
 * 
 * @param {HTMLElement} balise 
 * @param {string} text 
 * @returns {HTMLElement}
 */
function createMenu(balise,text){
    const createElement= document.createElement(balise)
    createElement.setAttribute('href','#')
    createElement.innerText = text
    return createElement
    
}

// Ajout des élémens
const accueil = createMenu('a','accueil')

divMenu.append(accueil)

const cours = createMenu('a','cours')

divMenu.append(cours)

const studio = createMenu('a','studio')

divMenu.append(studio)

const contact = createMenu('a','contact')

divMenu.append(contact)


// eventListener sur le svg en cliquant
let toggleMenu = false
svg.addEventListener('click',()=>{
    if(toggleMenu){
        divMenu.remove()
        toggleMenu = false
    }
    else{
        // ajout avec le svg
        menu.append(divMenu)
        toggleMenu = true
    }
} )