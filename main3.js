
const items = [
    {
       width: 50,
       height: 40 
    },
    {
        width: 60,
       height: 40 
    },
    {
        width: 50,
       height: 20 
    },
];



const root = document.getElementById('wrapper')


function objToHtml(itemObj) {

const boxEl = document.createElement('div')

boxEl.classList.add('box')

boxEl.style.width = `${itemObj.width}px`
boxEl.style.height = `${itemObj.height}px`

/*const width = document.createElement('div')
id.innerHTML = `width = ${itemObj.width}px`
const height = document.createElement('div')
id.innerHTML = `heiht = ${itemObj.height}px` */

boxEl.appendChild(width)
boxEl.appendChild(height)

return boxEl
}


for (let i = 0; i < items.length; i++) {
    const currentUserObj = items[i]
    const currentUserHTML = objToHtml(cuurentUserObj);

    root.appendChild(currentUserHTML)
}