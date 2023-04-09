import './App.css';
import Card from "./components/card";
import Result from "./components/result";
import {useState} from "react";

const questions = [
    {
        title: 'Кто сыграл Нео в "Матрице"?',
        vars: ['Бред Питт', 'Том Круз', 'Киану Ривз'],
        correct: 2
    },
    {
        title: 'Какая африканская страна раньше называлась Абиссинией?',
        vars: ['ЮАР', 'Эфиопия', 'Зимбабве'],
        correct: 1
    }, {
        title: 'На каком инструменте Джон Леннон играл в "Битлз"?',
        vars: ['Клавиши', 'Барабаны', 'Гитара'],
        correct: 2
    }, {
        title: 'Какая компания владеет Bugatti, Bentley, Lamborghini, Audi и Porsche?',
        vars: ['FIAT', 'Mercedes', 'Volkswagen'],
        correct: 2
    }, {
        title: 'Как называется тонкая, но длинная страна, занимающая более половины западного побережья Южной Америки?',
        vars: ['Чили', 'Мексика', 'Перу'],
        correct: 0
    }, {
        title: 'Как называется еврейский Новый год?',
        vars: ['Бебра', 'Рош ха-Шана', 'Мала ша-Рох'],
        correct: 1
    }, {
        title: 'Назовите самый большой остров в мире.',
        vars: ['Мадагаскар', 'Борнео', 'Гренландия'],
        correct: 2
    }, {
        title: 'Единорог - национальное животное какой страны?',
        vars: ['Франция', 'Ирландия', 'Шотландия'],
        correct: 2
    }, {
        title: 'Какое самое громкое животное на Земле?',
        vars: ['Кашалот', 'Синий кит', 'Цикада'],
        correct: 1
    }, {
        title: 'Кто был первой женщиной, получившей Нобелевскую премию (в 1903 году)?',
        vars: ['Мария Кюри', 'Розалинд Франклин', 'Фрэнсис Арнольд'],
        correct: 0
    }, {
        title: 'Что такое "кинофобия"?',
        vars: ['Боязнь кинотеатров', 'Боязнь собак', 'Боязнь снимать себя на камеру '],
        correct: 1
    }, {
        title: 'К какой стране принадлежат города Перт, Аделаида и Брисбен?',
        vars: ['США', 'Канада', 'Новая Зеландия'],
        correct: 1
    }, {
        title: 'Что сжигают в романе Рэя Брэдбери "451 градус по Фаренгейту"?',
        vars: ['книги', 'деньги', 'одежду'],
        correct: 0
    }, {
        title: 'Как мы ещё называем бикарбонат натрия?',
        vars: ['соль', 'пищевая сода', 'уксус'],
        correct: 1
    }, {
        title: 'Сколько часовых поясов в мире?',
        vars: ['24', '23', '9'],
        correct: 0
    }, {
        title: 'Сколько ребер в теле человека?',
        vars: ['24', '16', '18'],
        correct: 0
    }, {
        title: 'В какой стране находится Прага?',
        vars: ['Чешская Республика', 'Хорватия', 'Сербия'],
        correct: 0
    }, {
        title: 'При какой температуре по Фаренгейту замерзает вода?',
        vars: ['0 градусов', '32 градуса', '40 градусов'],
        correct: 1
    }
]

function App() {
    const [step, setStep] = useState(0)
    const [corr, setCorr] = useState(0)
    const quest = questions[step];
    const chooseVar = (index) => {
        setStep(step + 1)
        if (index === questions[step].correct) {
            setCorr(corr + 1)
        }
    }
    return (
        <div className="App">
            {
                step !== questions.length ?
                    <Card step={step} quest={quest} chooseVar={chooseVar} questArr={questions}/> :
                    <Result corr={corr} questArr={questions}/>
            }
        </div>
    );
}

export default App;
