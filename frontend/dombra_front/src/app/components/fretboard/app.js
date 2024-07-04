const fretboard = document.querySelector('.fretboard');
const numberOfFrets = 20;
const numberOfStrings = 2;

const fretMarkPositions = [2, 5, 7, 10, 12, 14]

const noteFlat = ["C", 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
const noteSharp = ["C", 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

let accidentals = 'flats'

const dombyraTuning = [2, 7]


const app = {
    init(){
        this.setupFretboard();
        this.setupEventListeners();
    },
    setupFretboard(){
        //create strings
        for(let i = 0; i < numberOfStrings; i++){
            let string = tools.createElement('div');
            string.classList.add('string');
            fretboard.appendChild(string)
            

            for(let fret = 0; fret <= numberOfFrets; fret++){
                let noteFret = tools.createElement("div");
                noteFret.classList.add('note-fret');
                string.appendChild(noteFret)

                let noteName = this.generateNoteNames((fret + dombyraTuning[i]),accidentals )
                noteFret.setAttribute('data-note', noteName);

                if(i === 0 && fretMarkPositions.indexOf(fret) !== -1){
                    noteFret.classList.add('fretmark')
                }
            }
        }
        //сreate frets
        
    },
    generateNoteNames(noteIndex, accidentals){
    noteIndex = noteIndex%12;
    let noteName;
    if(accidentals === 'flats'){
        noteName = noteFlat[noteIndex];
    }
    else if(accidentals === 'sharps'){
        noteName = noteFlat[noteIndex];
    }
    return noteName
},

    setupEventListeners(){
        fretboard.addEventListener('mouseover', (event) => {
            if(event.target.classList.contains('note-fret')){
                event.target.style.setProperty('--noteDotOpacity', 1)
            }
        })
        fretboard.addEventListener('mouseout', (event) => {
            event.target.style.setProperty('--noteDotOpacity', 0)
        })
    }

}


const tools = {
    createElement(element, content){
        element = document.createElement(element);
        if(arguments.length > 1) {
            element.innerHTML = content;
        }
        return element
    }
}

app.init()

