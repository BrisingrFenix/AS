class CartItem {
    constructor(name, price, authorFormat, description, id) {
        this.name = name;
        this.price = price;
        this.authorFormat = authorFormat;
        this.description = description;
        this.id = id
    }
}

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
                               4.95,
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
                            4.75,
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


