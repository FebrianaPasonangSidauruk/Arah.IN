import React, { useState, useEffect } from 'react'
import './Tes.css';
import { Link } from 'react-router-dom';
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
                },
            ],
        },
        {
            questionNumber: 11,
            questionText: 'Saya suka untuk bereksperimen',
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
                },
            ],
        },
        {
            questionNumber: 12,
            questionText: 'Saya suka mengajar ataupun melatih orang lain',
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
                },
            ],
        },
        {
            questionNumber: 13,
            questionText: 'Saya gemar mencoba untuk membantu orang lain dalam memecahkan masalahnya',
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
                },
            ],
        },
        {
            questionNumber: 14,
            questionText: 'Saya suka merawat hewan',
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
                },
            ],
        },
        {
            questionNumber: 15,
            questionText: 'Saya tidak masalah untuk bekerja selama 8 jam perhari di kantor',
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
                },
            ],
        },
        {
            questionNumber: 16,
            questionText: 'Saya suka menjual sesuatu',
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
                },
            ],
        },
        {
            questionNumber: 17,
            questionText: 'Saya suka menulis kreatif',
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
                },
            ],
        },
        {
            questionNumber: 18,
            questionText: 'Saya menikmati pelajaran sains',
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
                },
            ],
        },
        {
            questionNumber: 19,
            questionText: 'Saya cepat dalam mengambil tanggung jawab yang baru',
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
                },
            ],
        },
        {
            questionNumber: 20,
            questionText: 'Saya tertarik dalam menyembuhkan orang lain',
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
                },
            ],
        },
        {
            questionNumber: 21,
            questionText: 'Saya tertarik untuk mencari tahu bagaimana suatu hal dapat bekerja',
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
                },
            ],
        },
        {
            questionNumber: 22,
            questionText: 'Saya suka meletakkan barang-barang pada satu tempat atau menyatukannya',
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
                },
            ],
        },
        {
            questionNumber: 23,
            questionText: 'Saya adalah orang yang kreatif',
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
                },
            ],
        },
        {
            questionNumber: 24,
            questionText: 'Saya memperhatikan detail',
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
                },
            ],
        },
        {
            questionNumber: 25,
            questionText: 'Saya suka mengetik',
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
                },
            ],
        },
        {
            questionNumber: 26,
            questionText: 'Saya gemar menganalisa suatu masalah atau situasi',
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
                },
            ],
        },
        {
            questionNumber: 27,
            questionText: 'Saya suka memainkan instrumen musik atau bernyanyi',
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
                },
            ],
        },
        {
            questionNumber: 28,
            questionText: 'Saya menikmati pelajaran kultur budaya orang lain',
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
                },
            ],
        },
        {
            questionNumber: 29,
            questionText: 'Saya ingin memulai bisnis saya sendiri',
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
                },
            ],
        },
        {
            questionNumber: 30,
            questionText: 'Saya gemar memasak',
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
                },
            ],
        },
        {
            questionNumber: 31,
            questionText: 'Saya suka berakting dalam drama',
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
                },
            ],
        },
        {
            questionNumber: 32,
            questionText: 'Saya adalah seorang yang praktis',
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
                },
            ],
        },
        {
            questionNumber: 33,
            questionText: 'Saya suka bekerja dengan angka atau diagram',
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
                },
            ],
        },
        {
            questionNumber: 34,
            questionText: 'Saya suka berdiskusi mengenai isu-isu yang ada',
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
                },
            ],
        },
        {
            questionNumber: 35,
            questionText: 'Saya baik dalam menyimpan catatan dari pekerjaan saya',
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
                },
            ],
        },
        {
            questionNumber: 36,
            questionText: 'Saya suka untuk memimpin',
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
                },
            ],
        },
        {
            questionNumber: 37,
            questionText: 'Saya suka bekerja di luar ruangan',
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
                },
            ],
        },
        {
            questionNumber: 38,
            questionText: 'Saya lebih suka untuk bekerja dalam sebuah kantor',
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
                },
            ],
        },
        {
            questionNumber: 39,
            questionText: 'Saya pandai dalam matematika',
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
                },
            ],
        },
        {
            questionNumber: 40,
            questionText: 'Saya suka menolong orang lain',
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
                },
            ],
        },
        {
            questionNumber: 41,
            questionText: 'Saya suka menggambar',
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
                },
            ],
        },
        {
            questionNumber: 42,
            questionText: 'Saya suka memberikan pidato',
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
                },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [scores, setScore] = useState({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 });

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
            // const idHasill = idhasil + 1;
            // setIdHasil(idHasill);

            const response = axios.post(`http://localhost:4000/api/updateRiasec/${localStorage.getItem("id")}`, {
                hasilRiasec: [
                    {
                        id: '1',
                        skill: 'Realistic',
                        percentage: scores.R + "%",
                    },
                    {
                        id: '2',
                        skill: 'Investigative',
                        percentage: scores.I + "%",
                    },
                    {
                        id: '3',
                        skill: 'Artistic',
                        percentage: scores.A + "%",
                    },
                    {
                        id: '4',
                        skill: 'Social',
                        percentage: scores.S + "%",
                    },
                    {
                        id: '5',
                        skill: 'Enterprising',
                        percentage: scores.E + "%",
                    },
                    {
                        id: '6',
                        skill: 'Conventional',
                        percentage: scores.C + "%",
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
        <div className='testing'>
            <div className='button-Bataltes'>
                <Link to="/PilihanTes">
                    <button className="tombol-batal"> Batal </button>
                </Link>
            </div>
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        <Link to="/hasilKuliah">
                            <button className="tombolHasil"> Cek Hasil! </button>
                        </Link>
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