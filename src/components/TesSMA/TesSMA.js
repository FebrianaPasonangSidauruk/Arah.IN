import React, { useState, useEffect } from 'react';
import './TesSMA.css';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function TesSMA(){

  const questionsSMA = [
    {
        questionNumber: 1,
        questionText: 'Saya adalah orang yang menyukai mempelajari tentang sifat, perilaku, dan perkembangan masyarakat',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Sosiologi',
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
        questionText: 'Saya berkeinginan mencari tahu sifat dan gejala-gejala suatu benda yang terjadi di alam semesta',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Fisika',
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
        questionText: 'Saya ingin mempelajari komposisi, struktur, sifat zat atau materi',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Kimia',
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
        questionText: 'Saya suka mempelajari tentang segala hal yang berkaitan dengan kehidupan di permukaan bumi',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Biologi',
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
        questionText: 'Saya tertarik dengan fenomena alam serta interaksi didalamnya seperti materi, energi, dan perubahan zat',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Fisika',
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
        questionText: 'Saya berkeinginan mengkaji sifat zat, dan secara khusus mempelajari reaksi yang mentransformasi satu zat menjadi zat lain',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Kimia',
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
        questionText: 'Saya tertarik melakukan penelitian, percobaan, pengukuran, penyajian secara matematis terhadap berbagai hal di alam semesta',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Fisika',
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
        questionText: 'Saya tertarik dalam perbaikan produk pertanian, pengendalian penyebaran penyakit, peningkatan produksi energi, dan penurunan pencemaran lingkungan',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Kimia',
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
        questionText: 'Saya tertarik dengan jurusan kuliah seperti Pendidikan Dokter, Ilmu Kelautan, Ilmu Peternakan',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Biologi',
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
        questionText: 'Saya tertarik dengan jurusan kuliah seperti Teknik Elektro, Teknik Sipil, Arsitektur',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Fisika',
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
        questionText: 'Saya tertarik dengan jurusan kuliah seperti Farmasi, Ilmu Gizi, Teknologi Pangan, Hortikultura',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Kimia',
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
        questionText: 'Praktikum yang saya sukai adalah...',
        answerOptions: [
            {
                answerText: 'Mempelajari sifat serta gejala yang terjadi pada benda',
                type: 'Fisika',
                isCorrect: true
            },
            {
                answerText: 'Mengamati pertumbuhan dan perkembangan tumbuhan',
                type: 'Biologi',
                isCorrect: true
            },
            {
                answerText: 'Mengamati tentang perubahan wujud suatu zat',
                type: 'Kimia',
                isCorrect: true
            },
        ],
    },
    {
        questionNumber: 13,
        questionText: 'Saya suka mempelajari tentang makhluk hidup',
        answerOptions: [
          {
            answerText: 'Setuju',
            type: 'Biologi',
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
        questionText: 'Saya tertarik dengan penelitian secara ilmiah terhadap interaksi sosial',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Sosiologi',
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
        questionText: 'Saya ingin menghasilkan karya teknologi sederhana yang berkaitan dengan kebutuhan manusia',
        answerOptions: [
            {
                answerText: 'Setuju',
                type: 'Biologi',
                isCorrect: true
            },
            {
                answerText: 'Tidak Setuju',
                type: '',
                isCorrect: true
            },
        ],
    },
    {
      questionNumber: 16,
      questionText: 'Saya tertarik Memahami sejarah pembentukan bumi',
      answerOptions: [
          {
              answerText: 'Setuju',
              type: 'Geografi',
              isCorrect: true
          },
          {
              answerText: 'Tidak Setuju',
              type: '',
              isCorrect: true
          },
      ],
  },
  {
    questionNumber: 17,
    questionText: 'Saya tertarik mempelajari tentang hubungan, persamaan, dan perbedaan antar ruang di Bumi',
    answerOptions: [
        {
            answerText: 'Setuju',
            type: 'Geografi',
            isCorrect: true
        },
        {
            answerText: 'Tidak Setuju',
            type: '',
            isCorrect: true
        },
    ],
},
{
  questionNumber: 18,
  questionText: 'Saya tertarik belajar pengembangan sumber daya yang ada melalui kegiatan produksi, konsumsi, distribusi',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Ekonomi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 19,
  questionText: 'Saya tertarik dengan pekerjaan perencanaan dan pengembangan wilayah, pengelolaan lingkungan hidup, kehutanan',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Geografi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 20,
  questionText: 'Saya ingin tahu lebih dalam mengenai macam-macam lembaga keuangan dan jenis pemasaran yang ada',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Ekonomi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 21,
  questionText: 'Saya tertarik dengan pekerjaan Human Resource, Analisa Pasar, Media, Public Relation',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Sosiologi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 22,
  questionText: 'Saya tertarik dengan jurusan Akuntansi, Ilmu Aktuaria, Manajemen, Administrasi Fiskal',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Ekonomi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 23,
  questionText: 'Saya tertarik melakukan praktik keterampilan dasar peta dan pemetaan',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Geografi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 24,
  questionText: 'Saya tertarik dengan pelajaran Memahami pengelolaan koperasi dan kewirausahaan',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Ekonomi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 25,
  questionText: 'Saya tertarik dengan Hubungan antara individu dengan kelompoknya',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Sosiologi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 26,
  questionText: 'Saya ingin belajar menganalisis wilayah dan pewilayahan negara maju dan berkembang',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Geografi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 27,
  questionText: 'Saya tertarik dengan mengidentifikasi kebutuhan manusia',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Ekonomi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
{
  questionNumber: 28,
  questionText: 'Saya tertarik dengan penelitian sosial yang sederhana untuk mengenali ragam gejala sosial dan hubungan sosial di masyarakat',
  answerOptions: [
      {
          answerText: 'Setuju',
          type: 'Sosiologi',
          isCorrect: true
      },
      {
          answerText: 'Tidak Setuju',
          type: '',
          isCorrect: true
      },
  ],
},
    
];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [scores, setScore] = useState({ Fisika: 0, Kimia: 0, Biologi: 0, Geografi: 0, Ekonomi: 0, Sosiologi: 0});

const handleAnswerOptionClick = (isCorrect, type) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsSMA.length) {
        setCurrentQuestion(nextQuestion);
    }
    if (isCorrect) {
        let score_temp = Object.keys(scores)
        let index = score_temp.findIndex((a) => a == type)
        let values = Object.values(scores);
        let specific_value = values[index] + 20;
        setScore({ ...scores, [type]: specific_value })
    }
    if (nextQuestion == questionsSMA.length) {
        // const idHasill = idhasil + 1;
        // setIdHasil(idHasill);

        const response = axios.post(`https://arahin1.herokuapp.com/api/updateSMA/${localStorage.getItem("id")}`, {
            hasilPeminatan: [
                {
                    id: '1',
                    skill: 'Fisika',
                    percentage: scores.Fisika + "%",
                },
                {
                    id: '2',
                    skill: 'Kimia',
                    percentage: scores.Kimia + "%",
                },
                {
                    id: '3',
                    skill: 'Biologi',
                    percentage: scores.Biologi + "%",
                },
                {
                    id: '4',
                    skill: 'Geografi',
                    percentage: scores.Geografi+ "%",
                },
                {
                  id: '5',
                  skill: 'Ekonomi',
                  percentage: scores.Ekonomi + "%",
                },
                {
                  id: '6',
                  skill: 'Sosiologi',
                  percentage: scores.Sosiologi + "%",
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
    <div className='tesSMA'>
        <div className='button-BataltesSMA'>
            <Link to="/PilihanTes">
                <button className="tombol-batal-SMA"> Batal </button>
            </Link>
        </div>
        <div className='app-SMA'>
            {showScore ? (
                <div className='score-section-SMA'>
                    <Link to="/hasilSMA">
                        <button className="tombol-hasil-SMA"> Cek Hasil! </button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className='question-section-SMA'>
                        <div className='question-count-SMA'>
                            <span>Pertanyaan {currentQuestion + 1}</span>/{questionsSMA.length}
                        </div>
                        <div className='question-text-SMA'>{questionsSMA[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section-SMA'>
                        {questionsSMA[currentQuestion].answerOptions.map((answerOption) => (
                            <button className='button-quiz-SMA' onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.type)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    </div>
);
}