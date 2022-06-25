import React, { useState, useEffect } from 'react';
import './TesGayaBelajar.css';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function TesGayaBelajar(){

  const questionsGayaBelajar = [
    {
        questionNumber: 1,
        questionText: 'Saya suka bekerja menggunakan kendaraan',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Visual',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 2,
        questionText: 'Saya suka bermain puzzle/teka-teki',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Auditory',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 3,
        questionText: 'Saya ahli dalam bekerja secara mandiri',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Kinesthetic',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 4,
        questionText: 'Saya suka bekerja dalam tim',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Visual',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 5,
        questionText: 'Saya adalah orang yang ambisius, saya akan mengatur segala tujuan saya',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Auditory',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 6,
        questionText: 'Saya suka untuk mengatur berbagai hal seperti file, meja kerja',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Kinesthetic',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 7,
        questionText: 'Saya suka untuk membangun sesuatu',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Visual',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 8,
        questionText: 'Saya suka membaca berbagai hal tentang seni dan musik',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Auditory',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 9,
        questionText: 'Saya suka mengikuti instruksi yang jelas',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Kinesthetic',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
    {
        questionNumber: 10,
        questionText: 'Saya suka untuk mencoba meng-influence orang-orang',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Visual',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: false
            },
        ],
    },
];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [scores, setScore] = useState({ Visual: 0, Auditory: 0, Kinesthetic: 0});

const handleAnswerOptionClick = (isCorrect, type) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsGayaBelajar.length) {
        setCurrentQuestion(nextQuestion);
    }
    if (isCorrect) {
        let score_temp = Object.keys(scores)
        let index = score_temp.findIndex((a) => a == type)
        let values = Object.values(scores);
        let specific_value = values[index] + 10;
        setScore({ ...scores, [type]: specific_value })
    }
    if (nextQuestion == questionsGayaBelajar.length) {
        // const idHasill = idhasil + 1;
        // setIdHasil(idHasill);

        const response = axios.post(`http://localhost:4000/api/updateGayaBelajar/${localStorage.getItem("id")}`, {
            hasilRiasec: [
                {
                    id: '1',
                    skill: 'Visual',
                    percentage: scores.Visual + "%",
                },
                {
                    id: '2',
                    skill: 'Auditory',
                    percentage: scores.Auditory + "%",
                },
                {
                    id: '3',
                    skill: 'Kinesthetic',
                    percentage: scores.Kinesthetic + "%",
                },
            ]
        }, { withCredentials: true });
        setShowScore(true);
        return response
    }
};

useEffect(() => {
    console.log(scores)
}, [scores])

return (
    <div className='tesGayaBelajar'>
        <div className='button-BataltesGB'>
            <Link to="/PilihanTes">
                <button className="tombol-batal-GB"> Batal </button>
            </Link>
        </div>
        <div className='app-GB'>
            {showScore ? (
                <div className='score-section-GB'>
                    <Link to="/hasilGayaBelajar">
                        <button className="tombol-hasil-GB"> Cek Hasil! </button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className='question-section-GB'>
                        <div className='question-count-GB'>
                            <span>Pertanyaan {currentQuestion + 1}</span>/{questionsGayaBelajar.length}
                        </div>
                        <div className='question-text-GB'>{questionsGayaBelajar[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section-GB'>
                        {questionsGayaBelajar[currentQuestion].answerOptions.map((answerOption) => (
                            <button className='button-quiz-GB' onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.type)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    </div>
);
}