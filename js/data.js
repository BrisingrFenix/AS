class Professor {
    constructor(name, avgRatings, subjects, since, status, noStudents, phone, academicLevel, availability, lessonType, pricePerHour, image, bio, id){
        this.name = name
        this.avgRatings = avgRatings
        this.subjects = subjects
        this.since = since
        this.status = status
        this.noStudents = noStudents
        this.phone = phone
        this.academicLevel = academicLevel
        this.availability = availability
        this.lessonType = lessonType
        this.pricePerHour = pricePerHour
        this.image = image
        this.bio = bio
        this.id = id
    }
}

class CartItem {
    constructor(avgRatings, id, authorId, name, authorFormat, description, price){
        this.avgRatings = avgRatings
        this.id = id
        this.authorId = authorId
        this.name = name
        this.authorFormat = authorFormat
        this.description = description
        this.price = price
    }
}

class Class {
    constructor(id, startTime, endTime, studentID, professorID, subject, lessonType){
        this.id = id
        this.startTime = startTime
        this.endTime = endTime
        this.studentID = studentID
        this.professorID = professorID
        this.subject = subject
        this.lessonType = lessonType
    }
}

let itemJoao1 = new CartItem(
    3.5,
    "1",
    "0",
    "Solução exame matemática A 20/21",
    "Text (PDF) - By: Professor João Pedro",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dapibus justo, sit amet iaculis leo. Sed et sem faucibus, volutpat ex v...",
    "15"
)
let itemJoao2 = new CartItem(
    4.6,
    "2",
    "0",
    "Solução exame matemática A 22/23",
    "Text (PDF) - By: Professor João Pedro",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dapibus justo, sit amet iaculis leo. Sed et sem faucibus, volutpat ex v...",
    "20"
)
let itemJoao3 = new CartItem(
    4.95,
    "3",
    "0",
    "Ficha ex. Inequações (solução)",
    "Text (PDF) - By: Professor João Pedro",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dapibus justo, sit amet iaculis leo. Sed et sem faucibus, volutpat ex v...",
    "7"
)
let itemMaria1 = new CartItem(
    4.0,
    "4",
    "1",
    "Ficha ex. Limites (solução)",
    "Text (PDF) - By: Professora Maria Helena",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dapibus justo, sit amet iaculis leo. Sed et sem faucibus, volutpat ex v...",
    "10"
)
let itemSusana1 = new CartItem(
    4.2,
    "5",
    "2",
    "Video-aula sobre funções",
    "Video (MP4) - By: Professora Susana Silva",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dapibus justo, sit amet iaculis leo. Sed et sem faucibus, volutpat ex v...",
    "5.50"
)

var materiais = [itemJoao1, itemJoao2, itemJoao3, itemMaria1, itemSusana1]
localStorage.setItem('materiais', JSON.stringify(materiais));
if (localStorage.getItem('materiais') !== null) {
    materiais = JSON.parse(localStorage.getItem('materiais'));
}
console.log(materiais);

const Status = {
    SUBMITTED: 'Submitted',
    IN_REVIEW: 'In Review',
    APPROVED: 'Approved',
    REJECTED: 'Rejected'
};

const LessonType = {
    ONLINE: 'Online',
    PRESENCIAL: 'Presencial'
};

let profJoaoPedro = new Professor( "João Pedro",
                               4.7,
                               ["Matemática A", "Física"],
                               "12/03/2020",
                               Status.APPROVED,
                               23,
                               "932476987",
                               "Licenciatura em Matemática",
                               null,
                               [LessonType.ONLINE],
                               20,
                               "joaoPedroFOTO",
                               "Olá, sou o Professor João Pedro e estou aqui para ajudá-lo a dominar esse fascinante mundo dos números, equações e geometria.",
                               "0"
                            )

let profMariaHelena = new Professor( "Maria Helena",
                            4.95,
                            ["Matemática A"],
                            "21/03/2010",
                            Status.APPROVED,
                            23,
                            "932476987",
                            "Doutorado em Matemática",
                            null,
                            [LessonType.ONLINE, LessonType.PRESENCIAL],
                            17,
                            "mariaHelenaFOTO",
                            "Professora há mais de 20 anos, acumulo +50 alunos na plataforma com muita excelência",
                            "1"
                         )

let profSusanaSilva = new Professor( "Susana Silva",
                         4.8,
                         ["Matemática A"],
                         "18/07/2015",
                         Status.APPROVED,
                         17,
                         "932476987",
                         "Mestrado em Matemática",
                         null,
                         [LessonType.PRESENCIAL],
                         14,
                         "susanaSilvaFOTO",
                         "Experiência no ensino com qualidade e empatia, focada em melhorar as tuas notas",
                         "2"
                      )

var professores = [profJoaoPedro, profMariaHelena, profSusanaSilva]
localStorage.setItem('professores', JSON.stringify(professores));
if (localStorage.getItem('professores') !== null) {
    professores = JSON.parse(localStorage.getItem('professores'));
}

function getProfById(id){
    for (profIdx in professores){
        if (professores[profIdx].id == id){
            return professores[profIdx]
        }
    }
}

var selectedProf = ""
if (localStorage.getItem('selectedProf') !== null) {
    selectedProf = JSON.parse(localStorage.getItem('selectedProf'));
}

var searchText = ""
if (localStorage.getItem('searchText') !== null) {
    searchText = JSON.parse(localStorage.getItem('searchText'));
}
console.log(searchText);

let cart = [];
  if (localStorage.getItem('cart') !== null) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  document.getElementById("nItems").innerHTML = cart.length;
  console.log(cart);

let classes = [];
if (localStorage.getItem('classes') !== null) {
    classes = JSON.parse(localStorage.getItem('classes'));
}
console.log(classes);
