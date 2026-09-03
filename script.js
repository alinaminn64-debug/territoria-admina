// =====================================================
// ТЕРРИТОРИЯ АДМИНА
// SCRIPT.JS
// =====================================================


// =====================================================
// НАСТРОЙКИ ВХОДА
// =====================================================

const correctLogin = "admin";
const correctPassword = "1234";


// =====================================================
// ВХОД
// =====================================================

function enterAdmin() {

    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");

    const loginPage = document.getElementById("loginPage");
    const mainPage = document.getElementById("mainPage");

    if (!loginInput || !passwordInput) {
        console.error("Не найдены поля логина или пароля");
        return;
    }

    const loginValue = loginInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    let error = document.getElementById("loginError");

    if (!error) {

        error = document.createElement("p");

        error.id = "loginError";
        error.className = "login-error";

        passwordInput.parentNode.appendChild(error);
    }

    if (
        loginValue === correctLogin &&
        passwordValue === correctPassword
    ) {

        if (loginPage) {
            loginPage.style.display = "none";
        }

        if (mainPage) {
            mainPage.style.display = "block";
        }

        error.textContent = "";

    } else {

        error.textContent = "Неверный логин или пароль";
    }
}


// =====================================================
// ВЫХОД
// =====================================================

function logout() {

    const loginPage = document.getElementById("loginPage");
    const mainPage = document.getElementById("mainPage");

    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");

    if (mainPage) {
        mainPage.style.display = "none";
    }

    if (loginPage) {
        loginPage.style.display = "block";
    }

    if (loginInput) {
        loginInput.value = "";
    }

    if (passwordInput) {
        passwordInput.value = "";
    }
}


// =====================================================
// ГЛАВНАЯ
// =====================================================

function goHome() {

    hideAllSections();

    const mainMenu = document.getElementById("mainMenu");

    if (mainMenu) {
        mainMenu.style.display = "grid";
    }
}


// =====================================================
// ОТКРЫТИЕ РАЗДЕЛА
// =====================================================

function openSection(sectionId) {

    hideAllSections();

    const section = document.getElementById(sectionId);

    if (section) {
        section.style.display = "block";
    }
}


// =====================================================
// НАЗАД К ОБУЧЕНИЮ
// =====================================================

function backToEducation() {

    hideAllSections();

    const education = document.getElementById("education");

    if (education) {
        education.style.display = "block";
    }
}


// =====================================================
// СКРЫТЬ ВСЕ РАЗДЕЛЫ
// =====================================================

function hideAllSections() {

    const mainMenu = document.getElementById("mainMenu");

    if (mainMenu) {
        mainMenu.style.display = "none";
    }

    const sections =
        document.querySelectorAll(".content-section");

    sections.forEach(function(section) {

        section.style.display = "none";

    });

    const lessonPage =
        document.getElementById("lessonPage");

    if (lessonPage) {
        lessonPage.style.display = "none";
    }
}


// =====================================================
// УРОКИ
// =====================================================

const lessons = {

    admin: `
        <div class="lesson-text">

            <h1>👩‍💼 Кто такой администратор?</h1>

            <p>
Администратор — это человек,
                который помогает пациенту,
                врачу и клинике взаимодействовать между собой.
            </p>

            <div class="info-box">

                <strong>Главная задача администратора:</strong>

                <p>
                    Сделать так, чтобы пациент понял,
                    куда он пришёл, что ему предлагают
                    и какие дальнейшие шаги необходимы.
                </p>

            </div>

            <h2>Что делает администратор?</h2>

            <ul>

                <li>Встречает пациентов.</li>

                <li>Записывает пациентов к врачам.</li>

                <li>Переносит и отменяет приёмы.</li>

                <li>Напоминает о визитах.</li>

                <li>Работает с расписанием врачей.</li>

                <li>Оформляет документы.</li>

                <li>Принимает оплату.</li>

                <li>Консультирует по услугам клиники.</li>

                <li>Объясняет пациенту дальнейшие шаги.</li>

                <li>Взаимодействует с врачами и ассистентами.</li>

            </ul>

            <div class="success-box">

                <strong>Важно:</strong>

                <p>
                    Администратор не ставит диагноз
                    и не назначает лечение.
                    Это делает врач.
                </p>

            </div>

        </div>
    `,


    dentistry: `
        <div class="lesson-text">

            <h1>🦷 Что такое стоматология?</h1>

            <p>
                Стоматология занимается профилактикой,
                диагностикой и лечением заболеваний
                зубов, дёсен и полости рта.
            </p>

            <h2>Основные направления</h2>

            <h3>🩺 Терапия</h3>

            <p>
                Лечение кариеса, пломбирование зубов,
                лечение корневых каналов.
            </p>

            <h3>🔪 Хирургия</h3>

            <p>
                Удаление зубов и хирургические операции.
            </p>

            <h3>🔩 Имплантация</h3>

            <p>
                Восстановление отсутствующих зубов
                с помощью имплантов.
            </p>

            <h3>👑 Ортопедия</h3>

            <p>
                Коронки, виниры, вкладки,
                протезирование и конструкции
                на имплантах.
            </p>

            <h3>😁 Ортодонтия</h3>

            <p>
                Исправление положения зубов
                и прикуса.
            </p>

            <h3>🧸 Детская стоматология</h3>

            <p>
                Лечение и профилактика стоматологических
                заболеваний у детей.
            </p>

            <h3>✨ Гигиена</h3>

            <p>
                Профессиональная чистка,
                удаление зубного налёта и отложений.
            </p>

        </div>
    `,


    therapy: `
        <div class="lesson-text">

            <h1>🩺 Терапевтическая стоматология</h1>

            <p>
                Терапевтическая стоматология направлена
                на лечение и сохранение собственных зубов.
            </p>

            <h2>Кариес</h2>

            <p>
                Кариес — разрушение твёрдых тканей зуба.
            </p>

            <h2>Пломба</h2>

            <p>
                Пломба восстанавливает форму
                и функцию зуба.
            </p>

            <h2>Корневые каналы</h2>

            <p>
                При определённых заболеваниях
                врач проводит эндодонтическое лечение.
            </p>

            <div class="info-box">

                <strong>Простыми словами:</strong>

                <p>
                    Врач очищает каналы зуба,
                    обрабатывает их и герметично заполняет.
                </p>

            </div>

        </div>
    `,


    surgery: `
        <div class="lesson-text">

            <h1>🔪 Хирургическая стоматология</h1>

            <p>
                Хирургическая стоматология занимается
                удалением зубов и хирургическими процедурами.
</p>

            <h2>Что может выполнять хирург?</h2>

            <ul>

                <li>Удаление зубов.</li>

                <li>Удаление зубов мудрости.</li>

                <li>Удаление ретинированных зубов.</li>

                <li>Пластика мягких тканей.</li>

                <li>Костная пластика.</li>

                <li>Синус-лифтинг.</li>

            </ul>

            <div class="warning-box">

                <strong>Важно:</strong>

                <p>
                    Администратор не определяет,
                    какая операция необходима пациенту.
                    Это решает врач после диагностики.
                </p>

            </div>

        </div>
    `,


    implantation: `
        <div class="lesson-text">

            <h1>🔩 Имплантация зубов</h1>

            <p>
                Имплантация позволяет восстановить
                отсутствующий зуб с помощью импланта.
            </p>

            <div class="info-box">

                <strong>Запомни очень просто:</strong>

                <p>
                    Имплант = искусственный корень.
                </p>

                <p>
                    Коронка = видимая часть зуба.
                </p>

            </div>

            <h2>Основные этапы</h2>

            <ol>

                <li>Консультация врача.</li>

                <li>Диагностика и КТ.</li>

                <li>Планирование лечения.</li>

                <li>При необходимости костная пластика.</li>

                <li>Установка импланта.</li>

                <li>Период приживления.</li>

                <li>Формирование десны.</li>

                <li>Ортопедический этап.</li>

                <li>Установка коронки.</li>

            </ol>

            <h2>Формирователь десны</h2>

            <p>
                Помогает сформировать контур мягких тканей
                вокруг будущей коронки.
            </p>

            <h2>Синус-лифтинг</h2>

            <p>
                Процедура, которая может потребоваться
                при недостаточном объёме костной ткани
                в области верхней челюсти.
            </p>

            <h2>Импланты в нашей клинике</h2>

            <div class="implant-grid">

                <div class="implant-card">

                    <h3>🇮🇱 Alpha-Bio</h3>

                    <p>
                        Система имплантации,
                        представленная в нашей клинике.
                    </p>

                </div>

                <div class="implant-card">

                    <h3>🇩🇪 Medentika</h3>

                    <p>
                        Система имплантации,
                        представленная в нашей клинике.
                    </p>

                </div>

                <div class="implant-card">

                    <h3>🇨🇭 Straumann</h3>

                    <p>
                        Премиальная система имплантации,
                        представленная в нашей клинике.
                    </p>

                </div>

            </div>

            <div class="warning-box">

                <strong>Администратору:</strong>

                <p>
                    Стоимость имплантации не обязательно
                    равна стоимости всего лечения.
                </p>

                <p>
                    В лечение могут входить разные этапы:
                    диагностика, хирургия, имплант,
                    формирователь, абатмент, коронка и другие.
                </p>

            </div>

        </div>
    `,


    orthopedics: `
        <div class="lesson-text">

            <h1>👑 Ортопедическая стоматология</h1>

            <p>
                Ортопед восстанавливает форму,
                функцию и эстетику зубов.
            </p>

            <h2>Коронка</h2>

            <p>
                Конструкция, которая восстанавливает
                форму и функцию зуба.
            </p>

            <h2>Винир</h2>

            <p>
                Тонкая конструкция,
                устанавливаемая на переднюю поверхность зуба.
</p>

            <h2>Вкладка</h2>

            <p>
                Используется для восстановления
                значительно разрушенного зуба
                в определённых клинических ситуациях.
            </p>

            <div class="info-box">

                <strong>Запомни:</strong>

                <p>
                    Имплант восстанавливает корень,
                    а ортопедическая конструкция —
                    видимую часть зуба.
                </p>

            </div>

        </div>
    `,


    orthodontics: `
        <div class="lesson-text">

            <h1>😁 Ортодонтия</h1>

            <p>
                Ортодонтия занимается исправлением
                положения зубов и прикуса.
            </p>

            <h2>Брекеты</h2>

            <p>
                Брекет-система постепенно перемещает
                зубы в нужное положение.
            </p>

            <h2>Когда пациенту нужен ортодонт?</h2>

            <ul>

                <li>Неровные зубы.</li>

                <li>Скученность.</li>

                <li>Промежутки между зубами.</li>

                <li>Нарушения прикуса.</li>

            </ul>

            <div class="warning-box">

                <strong>Важно:</strong>

                <p>
                    Администратор не определяет,
                    какая система подходит пациенту.
                    Это делает ортодонт.
                </p>

            </div>

        </div>
    `,


    children: `
        <div class="lesson-text">

            <h1>🧸 Детская стоматология</h1>

            <p>
                Детская стоматология учитывает
                возраст и особенности ребёнка.
            </p>

            <h2>Что уточнить при записи?</h2>

            <ul>

                <li>Возраст ребёнка.</li>

                <li>Причину обращения.</li>

                <li>Есть ли боль.</li>

                <li>Были ли ранее посещения стоматолога.</li>

            </ul>

            <div class="success-box">

                <strong>Главное:</strong>

                <p>
                    Для ребёнка очень важно первое
                    впечатление от клиники.
                </p>

            </div>

        </div>
    `,


    hygiene: `
        <div class="lesson-text">

            <h1>✨ Профессиональная гигиена</h1>

            <p>
                Профессиональная гигиена помогает удалить
                налёт и зубные отложения,
                которые сложно полностью убрать дома.
            </p>

            <h2>Что может входить?</h2>

            <ul>

                <li>Удаление зубных отложений.</li>

                <li>Air Flow.</li>

                <li>Полировка.</li>

                <li>Профилактические процедуры.</li>

            </ul>

            <div class="info-box">

                <strong>Запомни:</strong>

                <p>
                    Гигиена — это не только эстетика,
                    но и профилактика стоматологических проблем.
                </p>

            </div>

        </div>
    `
};


// =====================================================
// ОТКРЫТЬ УРОК
// =====================================================

function showLesson(lessonName) {

    hideAllSections();

    const lessonPage =
        document.getElementById("lessonPage");

    const lessonContent =
        document.getElementById("lessonContent");

    if (!lessonPage || !lessonContent) {
        return;
    }

    lessonPage.style.display = "block";

    if (lessons[lessonName]) {

        lessonContent.innerHTML =
            lessons[lessonName];

    } else {

        lessonContent.innerHTML =
            "<p>Урок пока не найден.</p>";
    }
}


// =====================================================
// ТЕСТ
// =====================================================

const questions = [

    {
        question: "Кто лечит кариес?",

        answers: [
            "Ортодонт",
            "Терапевт",
            "Ортопед"
        ],

        correct: 1
    },

    {
        question: "Что такое имплант?",
answers: [
            "Искусственный корень зуба",
            "Пломба",
            "Винир"
        ],

        correct: 0
    },

    {
        question: "Кто занимается коронками?",

        answers: [
            "Ортопед",
            "Гигиенист",
            "Ортодонт"
        ],

        correct: 0
    },

    {
        question: "Что такое синус-лифтинг?",

        answers: [
            "Отбеливание",
            "Процедура увеличения объёма костной ткани",
            "Установка брекетов"
        ],

        correct: 1
    },

    {
        question: "Кто исправляет прикус?",

        answers: [
            "Хирург",
            "Терапевт",
            "Ортодонт"
        ],

        correct: 2
    }

];


// =====================================================
// ЗАГРУЗИТЬ ТЕСТ
// =====================================================

function loadTest() {

    const quiz =
        document.getElementById("quiz");

    if (!quiz) {
        return;
    }

    quiz.innerHTML = "";

    questions.forEach(function(q, index) {

        const question =
            document.createElement("div");

        question.className = "question";

        let html =
            "<h3>" +
            (index + 1) +
            ". " +
            q.question +
            "</h3>";

        q.answers.forEach(function(answer, answerIndex) {

            html +=
                '<label>' +
                '<input type="radio" ' +
                'name="question' + index + '" ' +
                'value="' + answerIndex + '">' +
                answer +
                '</label>';

        });

        question.innerHTML = html;

        quiz.appendChild(question);

    });
}


// =====================================================
// ПРОВЕРКА ТЕСТА
// =====================================================

function checkTest() {

    let score = 0;

    questions.forEach(function(q, index) {

        const selected =
            document.querySelector(
                'input[name="question' +
                index +
                '"]:checked'
            );

        if (
            selected &&
            Number(selected.value) === q.correct
        ) {

            score++;
        }

    });

    const result =
        document.getElementById("testResult");

    if (!result) {
        return;
    }

    result.innerHTML =
        "Результат: " +
        score +
        " из " +
        questions.length +
        " 🦷";

    if (score === questions.length) {

        result.innerHTML +=
            "<br>Отличный результат! 🔥";

    } else if (score >= 3) {

        result.innerHTML +=
            "<br>Хорошо! Некоторые темы стоит повторить.";

    } else {

        result.innerHTML +=
            "<br>Ничего страшного — возвращайся к обучению ❤️";
    }
}


// =====================================================
// ЗАПУСК
// =====================================================

document.addEventListener("DOMContentLoaded", function() {

    loadTest();

});
