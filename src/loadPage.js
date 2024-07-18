import rest from './rest.jpeg';

function loadPage(){
    const content = document.querySelector('.content')

    const heading = document.createElement('div')
    heading.textContent = 'Welcome to our restraunt'

    // const image = document.createElement('img')
    const myImage = new Image()
    myImage.src = rest 
    // image.appendChild(myImage)
    
    const description = document.createElement('p')
    description.textContent = 'Come and dine with us'

    content.appendChild(heading)
    content.append(myImage)
    content.appendChild(description)
}

export default loadPage;