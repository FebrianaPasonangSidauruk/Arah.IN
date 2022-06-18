import React, { useState, useEffect } from 'react'
import './Tes.css';
import { Link } from 'react-router-dom';
import Hasil from '../Hasil/Hasil';
import DataHasil from '../DataHasil';
import ModalBatal from './ModalBatal';
import axios from "axios";

export default function Tes() {

    const questions = [
        {
            questionNumber: 1,
            questionText: 'Saya suka bekerja menggunakan kendaraan',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'R',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectI: false,
                    // isCorrectA: false,
                    // isCorrectS: false,
                    // isCorrectE: false,
                    // isCorrectC: false
                },
            ],
        },
        {
            questionNumber: 2,
            questionText: 'Saya suka bermain puzzle/teka-teki',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'I',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectR: false,
                    // isCorrectA: false,
                    // isCorrectS: false,
                    // isCorrectE: false,
                    // isCorrectC: false
                },
            ],
        },
        {
            questionNumber: 3,
            questionText: 'Saya ahli dalam bekerja secara mandiri',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'A',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectR: false,
                    // isCorrectI: false,
                    // isCorrectS: false,
                    // isCorrectE: false,
                    // isCorrectC: false
                },
            ],
        },
        {
            questionNumber: 4,
            questionText: 'Saya suka bekerja dalam tim',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'S',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectR: false,
                    // isCorrectI: false,
                    // isCorrectA: false,
                    // isCorrectE: false,
                    // isCorrectC: false
                },
            ],
        },
        {
            questionNumber: 5,
            questionText: 'Saya adalah orang yang ambisius, saya akan mengatur segala tujuan saya',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'E',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectR: false,
                    // isCorrectI: false,
                    // isCorrectA: false,
                    // isCorrectS: false,
                    // isCorrectC: false
                },
            ],
        },
        {
            questionNumber: 6,
            questionText: 'Saya suka untuk mengatur berbagai hal seperti file, meja kerja',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'C',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectR: false,
                    // isCorrectI: false,
                    // isCorrectA: false,
                    // isCorrectS: false,
                    // isCorrectE: false
                },
            ],
        },
        {
            questionNumber: 7,
            questionText: 'Saya suka untuk membangun sesuatu',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'R',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectE: false,
                    // isCorrectI: false,
                    // isCorrectA: false,
                    // isCorrectS: false,
                    // isCorrectC: false
                },
            ],
        },
        {
            questionNumber: 8,
            questionText: 'Saya suka membaca berbagai hal tentang seni dan musik',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'A',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectE: false,
                    // isCorrectI: false,
                    // isCorrectR: false,
                    // isCorrectS: false,
                    // isCorrectC: false
                },
            ],
        },
        {
            questionNumber: 9,
            questionText: 'Saya suka mengikuti instruksi yang jelas',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'C',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectE: false,
                    // isCorrectI: false,
                    // isCorrectA: false,
                    // isCorrectS: false,
                    // isCorrectR: false
                },
            ],
        },
        {
            questionNumber: 10,
            questionText: 'Saya suka untuk mencoba meng-influence orang-orang',
            answerOptions: [
                {
                    answerText: 'Setuju',
                    type: 'E',
                    isCorrect: true
                },
                {
                    answerText: 'Tidak Setuju',
                    type: '',
                    isCorrect: false
                    // isCorrectR: false,
                    // isCorrectI: false,
                    // isCorrectA: false,
                    // isCorrectS: false,
                    // isCorrectC: false
                },
            ],
        },
    ];

    const [openBatal, setOpenBatal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [scores, setScore] = useState({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 });
    var scoreText = "text";
    // scoreR, scoreI, scoreA, scoreS, scoreE, scoreC,

    const handleAnswerOptionClick = (isCorrect, type) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        if (isCorrect) {
            let score_temp = Object.keys(scores)
            let index = score_temp.findIndex((a) => a == type)
            let values = Object.values(scores);
            let specific_value = values[index] + 10;
            setScore({ ...scores, [type]: specific_value })
        }
        if (nextQuestion == questions.length) {

            // if (scoreR > (scoreI && scoreA && scoreS && scoreE && scoreC)) {
            //     scoreText = "you are realistic type";
            // } else if (scoreI > (scoreR && scoreA && scoreS && scoreE && scoreC)) {
            //     scoreText = "you are investigative type";
            // } else if (scoreA > (scoreR && scoreI && scoreS && scoreE && scoreC)) {
            //     scoreText = "you are artistic type";
            // } else if (scoreS > (scoreR && scoreA && scoreI && scoreE && scoreC)) {
            //     scoreText = "you are social type";
            // } else if (scoreE > (scoreR && scoreA && scoreS && scoreI && scoreC)) {
            //     scoreText = "you are enterprising type";
            // } else if (scoreC > (scoreR && scoreA && scoreS && scoreE && scoreI)) {
            //     scoreText = "you are conventional type";
            // } else {
            //     scoreText = "testest"
            // }

            axios.post("http://localhost:4000/api/updateRiasec", {
                hasilRiasec: [
                    {
                        id: '1',
                        percentage: scores.R + "%",
                    },
                    {
                        id: '2',
                        percentage: scores.I + "%",
                    },
                    {
                        id: '3',
                        percentage: scores.A + "%",
                    },
                    {
                        id: '4',
                        percentage: scores.S + "%",
                    },
                    {
                        id: '5',
                        percentage: scores.E + "%",
                    },
                    {
                        id: '6',
                        percentage: scores.C + "%",
                    },
                ]
              }, { withCredentials: true });
            setShowScore(true);
        }
        // console.log(scores)
    };

    useEffect(() => {
        //console.log(Object.keys(scores), Object.values(scores));
        console.log(scores)
    }, [scores])

    // const handleAnswerOptionClick = (type) => {
    // 	if (type ==='R') {
    // 		setScoreR(scoreR + 1);
    // 	}

    // 	const nextQuestion = currentQuestion + 1;
    // 	if (nextQuestion < questions.length) {
    // 		setCurrentQuestion(nextQuestion);
    // 	} else {
    // 		setShowScore(true);
    // 	}
    // };

    // const handleAnswerOptionClick = (isCorrect) => {
    // 	if (isCorrect) {
    // 		setScore(score + 1);
    // 	}

    // 	const nextQuestion = currentQuestion + 1;
    // 	if (nextQuestion < questions.length) {
    // 		setCurrentQuestion(nextQuestion);
    // 	} else {
    // 		setShowScore(true);
    // 	}
    // };
    return (
        <div className='testing'>
            <div className='button-Bataltes'>
                <Link to="/PilihanTes">
                    <button className="tombol-batal"> Batal </button>
                </Link>
                {/* <button className="tombol-batal" onClick={() =>{
                                setOpenBatal(true);
                            }}> Batal </button>
                        {openBatal && <ModalBatal closeModalBatal ={setOpenBatal}/>} */}
            </div>
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        <Link to="/hasil">
                            <button className="tombolHasil"> Cek Hasil! </button>
                        </Link>
                        
                            {/* <button className="tombolHasil" onClick={() =>{
                                setOpenHasil(true);
                            }}> Cek Hasil! </button>
                        {openHasil && <DataHasil operHasil ={setOpenHasil}/>} */}
                        {/* {scoreText} */}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Pertanyaan {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className='button-quiz' onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.type)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}