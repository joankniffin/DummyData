const nombres = {
    1: ["Александр", "Михаил", "Иван", "Дмитрий", "Андрей", "Сергей", "Максим", "Артем", "Николай", "Алексей", "Денис", "Евгений", "Владимир", "Илья", "Павел", "Кирилл", "Александр", "Роман", "Егор", "Тимофей", "Даниил", "Олег", "Владислав", "Игорь", "Станислав", "Глеб", "Арсений", "Антон", "Виктор", "Федор", "Виталий", "Марк", "Василий", "Георгий", "Матвей", "Данила", "Вадим", "Семен", "Тимур", "Богдан", "Давид", "Макар", "Леонид", "Руслан", "Марат", "Михаил", "Ярослав", "Валентин", "Савелий", "Дмитрий", "Святослав", "Евгений", "Вячеслав", "Илья", "Валентин", "Алексей", "Михаил", "Никита", "Сергей", "Дмитрий", "Андрей", "Семен", "Артем", "Степан", "Денис", "Павел", "Григорий", "Роман", "Тимур", "Владислав", "Игорь", "Владимир", "Кирилл", "Дмитрий", "Николай", "Анатолий", "Филипп", "Сергей", "Артем", "Виталий", "Олег", "Михаил", "Александр", "Даниил", "Егор", "Иван", "Владимир", "Андрей", "Илья", "Валентин", "Константин", "Семен", "Петр", "Максим", "Давид", "Тимофей", "Станислав", "Алексей", "Борис"],
    2: ["Sofía", "Lucía", "Martina", "María", "Paula", "Julia", "Emma", "Valeria", "Daniela", "Alba", "Carla", "Sara", "Claudia", "Valentina", "Alma", "Ana", "Inés", "Carmen", "Laia", "Elena", "Luna", "Emma", "Adriana", "Aitana", "Vega", "Olivia", "Ainhoa", "Victoria", "Isabella", "Eva", "Marta", "Nora", "Ariadna", "Noa", "Leire", "Celia", "Julia", "Natalia", "Rocio", "Amaia", "Aina", "Irene", "Jimena", "Alicia", "Lola", "Carolina", "Iris", "Mireia", "Marina", "Laura", "Valeria", "Candela", "Ana", "Clara", "Celia", "Júlia", "Gala", "Iria", "Abril", "Leyre", "Naiara", "Elsa", "Blanca", "Irati", "Maia", "Zoe", "Lía", "Naia", "Elena", "Manuela", "Ayla", "Noelia", "Aroa", "Carla", "Gabriela", "Zaira", "Laia", "Lucía", "Ariadna", "Sara", "Yara", "Marta", "Diana", "Lara", "Mía", "Inés", "Ane", "Nerea", "Vera", "Olga"],
    3: ["Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Wu", "Zhao", "Zhou", "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo", "He", "Gao", "Lin", "Luo", "Zheng", "Liang", "Xie", "Song", "Tang", "Xu", "Han", "Feng", "Deng", "Cao", "Peng", "Zeng", "Xiao", "Tian", "Dong", "Yuan", "Pan", "Yu", "Jiang", "Cai", "Yu", "Du", "Ye", "Cheng", "Su", "Wei", "Lu", "Ding", "Ren", "Shen", "Yao", "Lu", "Jiang", "Cui", "Zhong", "Tan", "Lu", "Wang", "Fan", "Jin", "Shi", "Liao", "Jia", "Xia", "Wei", "Fu", "Fang", "Bai", "Zou", "Meng", "Xiong", "Qin", "Qiu", "Jiang", "Yin", "Xue", "Yan", "Duan", "Lei", "Li", "Shi", "Long", "Tao", "He", "Gu", "Mao", "Hao", "Gong", "Shao", "Wan"],
    4: ["Léa", "Manon", "Chloé", "Emma", "Inès", "Jade", "Camille", "Sarah", "Louise", "Clara", "Lucas", "Louis", "Enzo", "Gabriel", "Arthur", "Raphaël", "Adam", "Hugo", "Jules", "Maël", "Léo", "Nathan", "Tom", "Noah", "Mathis", "Liam", "Ethan", "Sacha", "Paul", "Timéo", "Anaïs", "Alice", "Lina", "Eva", "Manon", "Julie", "Lisa", "Léna", "Zoé", "Lola", "Laura", "Charlotte", "Juliette", "Romane", "Mélissa", "Elise", "Éléna", "Éva", "Océane", "Louna", "Antoine", "Théo", "Lucas", "Tom", "Louis", "Mathis", "Hugo", "Nathan", "Raphaël", "Noah", "Ethan", "Léo", "Sacha", "Enzo", "Adam", "Maël", "Paul", "Jules", "Gabriel", "Liam", "Léa", "Chloé", "Manon", "Emma", "Inès", "Jade", "Louise", "Sarah", "Camille", "Clara", "Lucas", "Louis", "Gabriel", "Enzo", "Arthur", "Raphaël", "Tom", "Léo", "Hugo", "Jules", "Adam", "Maël", "Nathan", "Liam", "Sacha", "Paul", "Noah", "Théo", "Mathis", "Timéo"]
};

const apellidos = {
    1: ["Смирнов", "Іванов", "Кузнєцов", "Попов", "Васильєв", "Петров", "Соколов", "Михайлов", "Новиков", "Федоров", "Морозов", "Волков", "Алексєєв", "Лєбєдь", "Семєнов", "Егоров", "Павлов", "Козлов", "Стєпанов", "Ніколаєв", "Орлов", "Андрєєв", "Макаров", "Нікітін", "Захаров", "Зайцев", "Соловйов", "Бєлов", "Медведєв", "Яковлєв", "Галкін", "Романов", "Воробйов", "Кошелєв", "Сєргєєв", "Павлюченко", "Сорокін", "Дмитрієв", "Григорьєв", "Ткач", "Костюк", "Королєв", "Гусєв", "Титов", "Кузьмін", "Кудрявцєв", "Баранов", "Кулик", "Артемов", "Щербак", "Панов", "Беляєв", "Комаров", "Денисов", "Казаков", "Фролов", "Жуков", "Горбачов", "Фомін", "Дорофєєв", "Бєліков", "Бєлоусов", "Потапов", "Лихачов", "Тимофєєв", "Федосєєв", "Шишкін", "Шевченко", "Родін", "Єрмаков", "Дмитрієв", "Данилов", "Козак", "Михайлов", "Герасимов", "Мартинов", "Єршов", "Горшков", "Сидоров", "Рязанов", "Ємельянов", "Рябов", "Анісімов", "Кузьмін", "Корнєєв", "Ефімов", "Дьячков", "Кулаков", "Лаптєв", "Шилов", "Бородін", "Закіров", "Давидов", "Голубєв", "Антонов", "Тарасов", "Бєров", "Полєв", "Марков", "Ісаєв", "Потьомкін", "Самсонов", "Князєв", "Бєсєдін"],
    2: ["García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Martín", "Jiménez", "Ruiz", "Hernández", "Díaz", "Moreno", "Muñoz", "Alonso", "Gutiérrez", "Romero", "Navarro", "Torres", "Domínguez", "Vargas", "Gil", "Ramos", "Serrano", "Blanco", "Molina", "Morales", "Suárez", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marín", "Sanz", "Iglesias", "Medina", "Garrido", "Cortés", "Castillo", "Santos", "Lozano", "Guerrero", "Cano", "Prieto", "Méndez", "Cruz", "Gallego", "Vidal", "León", "Herrera", "Peña", "Flores", "Cabrera", "Campos", "Vega", "Fuentes", "Carrasco", "Diez", "Caballero", "Reyes", "Nieto", "Aguilar", "Pascual", "Santana", "Herrero", "Lorenzo", "Montero", "Hidalgo", "Giménez", "Ibáñez", "Ferrer", "Duran", "Santiago", "Vicente", "Benítez", "Mora", "Arias", "Vargas", "Carmona", "Crespo", "Román", "Pastor", "Soto", "Sáez", "Velasco", "Moya", "Soler", "Parra", "Esteban", "Bravo", "Gallardo", "Rojas"],
    3: ["Li", "Wang", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo", "He", "Lin", "Gao", "Luo", "Zheng", "Song", "Han", "Tang", "Feng", "Yu", "Dong", "Xiao", "Cheng", "Cao", "Yuan", "Deng", "Wei", "Jiang", "Fu", "Bian", "Xie", "Shen", "Ye", "Xu", "Zeng", "Cai", "Peng", "Chang", "Pan", "Qi", "Lu", "Xiang", "Cui", "Wang", "Pei", "Fan", "Hong", "Zou", "Li", "He", "Liu", "Wei", "Jing", "Jian", "Hui", "Shi", "Yan", "Jia", "Tian", "Jiang", "Qi", "Shao", "Yi", "Xuan", "Du", "Bao", "Min", "Lou", "Kuang", "Piao", "Lei", "Geng", "Lu", "Ci", "Bai", "Chen", "Qian", "Yue", "Yin", "Ning", "Kan", "Lan", "Lin", "Yan", "Xiong", "Za", "Shi", "Ru", "Gong", "Meng", "Ao", "Pi", "Xie", "Zha"],
    4: ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau", "Simon", "Laurent", "Lefebvre", "Michel", "Garcia", "David", "Bertrand", "Roux", "Vincent", "Fournier", "Morel", "Girard", "Andre", "Lefevre", "Mercier", "Dupont", "Lambert", "Bonnet", "Francois", "Martinez", "Legrand", "Garnier", "Faure", "Rousseau", "Blanc", "Guerin", "Muller", "Henry", "Roussel", "Nicolas", "Perrin", "Morin", "Mathieu", "Clement", "Gauthier", "Dumont", "Lopez", "Fontaine", "Chevalier", "Robin", "Masson", "Sanchez", "Gerard", "Nguyen", "Boyer", "Denis", "Lemaire", "Duval", "Joly", "Gautier", "Roger", "Roche", "Roy", "Noel", "Meyer", "Lucas", "Meunier", "Jean", "Pierre", "Colin", "Hubert", "Renard", "Marchand", "Rey", "Perez", "Leclerc", "Guillaume", "Lacroix", "Brun", "Picard", "Poirier", "Gaillard", "Barbier", "Rolland", "Benoit", "Schmitt", "Vidal", "Leclercq", "Paris", "Maillard", "Jacquet", "Vasseur", "Legros", "Barreau", "Chapuis", "Berger"]
};

function generar() {
    const ap1 = parseInt(document.getElementById("ap1").value);
    const ap2 = parseInt(document.getElementById("ap2").value);
    const name = parseInt(document.getElementById("name").value);

    if (ap1 === 0 || ap2 === 0 || name === 0) {
        return;
    }

    const noRegistros = parseInt(document.getElementById("noRegistros").value);

    let alumnos = '';
    for (let i = 0; i < noRegistros; i++) {
        const apellido = apellidos[ap1][Math.floor(Math.random() * apellidos[ap1].length)];
        const apellido2 = apellidos[ap2][Math.floor(Math.random() * apellidos[ap2].length)];
        const nombre = nombres[name][Math.floor(Math.random() * nombres[name].length)];
        const expediente = 222220000 + i;

        alumnos += `${expediente}, ${apellido}, ${apellido2}, ${nombre}, `;
        alumnos += `a${expediente}@correo.com, `;
        
        const fechaNacimiento = new Date(1980 + Math.floor(Math.random() * 40), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        alumnos += `${fechaNacimiento.toISOString().slice(0, 10)}<br>`; // Generate random birthdate between 1980 and 2020

    }

    document.getElementById('btnGenerarFormato').disabled = false;
    document.getElementById("mostrarAlumnos").innerHTML = alumnos;
}
