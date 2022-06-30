import React, { useState, useEffect } from 'react';
import './TesGayaBelajar.css';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function TesGayaBelajar(){

  const questionsGayaBelajar = [
    {
        questionNumber: 1,
        questionText: 'Ketika saya mempelajari bagaimana menggunakan komputer, saya akan membaca terlebih dahulu guide book-nya',
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
        questionText: 'Saat mencari jalan ke tempat yang baru, saya merasa lebih mudah untuk mempunyai seseorang untuk mengatakan cara kesana',
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
        questionText: 'Untuk mengingat nomor telepon, saya mengingat nomornya dari pola angka ketika ditekan pada keypad',
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
        questionText: 'Dalam bersantai, saya suka membaca buku atau majalah',
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
        questionText: 'Sebelum mengikuti tes, saya biasanya membaca dan mengatakan pikiran/informasi dengan lantang ataupun tenang',
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
        questionText: 'Lebih mudah untuk mengingat kejadian',
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
        questionText: 'Dikelas, hal yang paling penting adalah mempunyai catatan yang penuh dengan gambar, grafik, dan diagram',
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
        questionText: 'Ketika saya kehilangan arah, saya akan menelpon atau bertanya pada orang',
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
        questionText: 'Ketika memasak saya memasukkan semua bahan dan biasanya hasilnya baik',
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
        questionText: 'Dalam merangkai mainan saya biasanya baca instruksi dahulu',
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
        questionNumber: 11,
        questionText: 'Saat memecahkan masalah, lebih baik mencoba untuk memecahkannya sendiri',
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
        questionNumber: 12,
        questionText: 'Ketika libur, saya lebih suka melakukan',
        answerOptions: [
            {
                answerText: 'Aktivitas atletik/kegiatan di luar',
                type: 'Kinesthetic',
                isCorrect: true
            },
            {
                answerText: 'Menonton film',
                type: 'Visual',
                isCorrect: true
            },
            {
                answerText: 'Ke konser',
                type: 'Auditory',
                isCorrect: true
            },
        ],
    },
    {
        questionNumber: 13,
        questionText: 'Ketika saya bertemu seseorang, saya biasanya mengingat...',
        answerOptions: [
            {
                answerText: 'Bagaimana penampilannya',
                type: 'Visual',
                isCorrect: true
            },
            {
                answerText: 'Apa yang dia bicarakan',
                type: 'Auditory',
                isCorrect: true
            },
            {
                answerText: 'Apa yang dia lakukan',
                type: 'Kinesthetic',
                isCorrect: true
            },
        ],
    },
    {
        questionNumber: 14,
        questionText: 'Ketika saya mencoba berkonsentrasi, saya bisa terdistraksi dengan orang atau benda disekitar saya',
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
        questionNumber: 15,
        questionText: 'Saya lebih menyukai',
        answerOptions: [
            {
                answerText: 'Seni',
                type: 'Visual',
                isCorrect: true
            },
            {
                answerText: 'Musik',
                type: 'Auditory',
                isCorrect: true
            },
            {
                answerText: 'Tarian',
                type: 'Kinesthetic',
                isCorrect: true
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
            hasilGayaBelajar: [
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