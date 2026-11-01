const iconHide = document.getElementById('hide')
const app = document.getElementById('app')

iconHide.addEventListener('click', () => {
    app.classList.toggle('app_navbar-hidden')
})

const days = [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб'
]
const notes = [
    {
    title:'Список покупок',
    description:'Помидоры,лук,кетчуп,попугай,ириски',
    date: '2026-10-24'
    },
    {
    title:'Подарки на новый год',
    description:'Never gonna give you up Never gonna let you down',
    date: '2025-12-20'
    },
    {
    title:'Домофон подруг',
    description:'33,18,76',
    date: '2024-11-04'
    },
    {
    title:'Анапа 2009',
    description:'было классно и жарко, мы все обгорели',
    date: '2009-06-18'
    }
]
let currentNote = notes[1]

function getNoteHTML(note) {
    const rootElement = document.createElement('div')
    rootElement.classList.add('navbar__month-note')

    const dateObj =new Date(note.date)

    const dateElement = document.createElement('div')
    dateElement.classList.add('navbar__month-note-date')

    const num = document.createElement('div')
    num.classList.add('navbar__month-note-num')
    num.innerHTML = dateObj.getDate()

    const day = document.createElement('div')
    day.classList.add('navbar__month-note-day')
    day.innerHTML = days[dateObj.getDay()]

    const fullDate = document.createElement('div')
    fullDate.classList.add('navbar__month-note-day')
    fullDate.innerHTML = note.date


    dateElement.appendChild(num)
    dateElement.appendChild(day)
    dateElement.appendChild(fullDate)

    const descElement = document.createElement('div')
    descElement.classList.add('navbar__month-note-description')

    const title = document.createElement('div')
    title.innerHTML = `<b>${note.title}...</b>`

    const description = document.createElement('div')
    description.innerHTML = `${note.description.slice(0, 50)}...`

    descElement.appendChild(title)
    descElement.appendChild(description)

    rootElement.appendChild(dateElement)
    rootElement.appendChild(descElement)

    return rootElement
}

const navbarElement = document.getElementById('navbar')

function renderEditor() {
    document.getElementById('editor-date').innerHTML = currentNote.date
    document.getElementById('editor-title').innerHTML = currentNote.title
    document.getElementById('editor-text').innerHTML = currentNote.description
}

function renderNavbar() {
    navbarElement.innerHTML = ''
    for (let note of notes) {
        const noteHTML = getNoteHTML(note)
        if (note === currentNote) {
            noteHTML.classList.add('navbar__month-note_active')
        }
        noteHTML.addEventListener('click', () => {
            currentNote = note
            renderNavbar()
            console.log(currentNote);
        })
        navbarElement.appendChild(noteHTML)
    }
    renderEditor()
}

renderNavbar()