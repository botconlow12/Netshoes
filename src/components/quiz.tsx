import { useState } from 'react'
import Question from './question'

interface Question {
  question: string
  options: string[]
  answer: string
  hint: string
}

const questions = [
  {
    question: 'Qual é o esporte mais popular no Brasil?',
    options: ['Futebol', 'Vôlei', 'Basquete'],
    answer: 'Futebol',
    hint: 'É o esporte mais amado e praticado no Brasil.',
  },
  {
    question: 'Em qual cidade estão sendo realizadas as Olimpíadas de 2024?',
    options: ['Paris', 'Los Angeles', 'Tóquio'],
    answer: 'Paris',
    hint: 'É a capital da França.',
  },
  {
    question:
      'Quantas medalhas de ouro o Brasil ganhou até agora nas Olimpíadas de 2024?',
    options: ['2', '5', '7'],
    answer: '2',
    hint: 'A resposta é a soma de 1+1',
  },
  {
    question: 'Qual esporte estreou nas Olimpíadas de 2024?',
    options: ['Skateboarding', 'Surfing', 'Breakdancing'],
    answer: 'Breakdancing',
    hint: 'É uma forma de dança de rua que se tornou popular na década de 1980.',
  },
]

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean
    selectedOption: string | null
  }>({ isCorrect: false, selectedOption: null })
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [completionSoundPlayed, setCompletionSoundPlayed] = useState(false)

  const handleAnswer = (selectedOption: string) => {
    const isCorrect = questions[currentQuestion].answer === selectedOption
    setFeedback({ isCorrect, selectedOption })

    setTimeout(() => {
      if (isCorrect) {
        if (currentQuestion === questions.length - 1) {
          // Reproduzir o som de conclusão do quiz somente se ainda não tiver sido tocado
          if (!completionSoundPlayed) {
            const completionSound = new Audio('/completion.mp3')
            completionSound.play()
            setCompletionSoundPlayed(true)
          }
          setQuizCompleted(true)
        } else {
          // Reproduzir o som de resposta correta
          const correctSound = new Audio('/correct.mp3')
          correctSound.play()
          setCurrentQuestion(currentQuestion + 1)
        }
        setShowErrorModal(false)
      } else {
        const failSound = new Audio('/fail.mp3')
        failSound.play()
        setShowErrorModal(true)
      }
      setFeedback({ isCorrect: false, selectedOption: null })
    }, 1000)
  }

  const handleCloseErrorModal = () => {
    setShowErrorModal(false)
  }

  return (
    <div className="w-[95%] flex flex-col justify-center items-center text-center p-8 bg-white rounded-lg shadow-lg relative">
      <h1 className="text-3xl font-bold text-[#30006b] mb-6 underline">
        Desafio Netshoes
      </h1>
      {!quizCompleted && (
        <>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
            feedback={feedback}
          />
          {showErrorModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="w-[90%] flex flex-col items-center gap-4 max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-3xl font-bold underline text-red-500">
                  VOCÊ ERROU!
                </h2>
                <p className="text-lg text-black">
                  <u>
                    <b>Dica:</b>
                  </u>{' '}
                  {questions[currentQuestion].hint}
                </p>
                <button
                  onClick={handleCloseErrorModal}
                  className="px-6 py-3 bg-[#30006b] text-white text-xl font-semibold rounded hover:bg-[#200048] transition-colors"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {quizCompleted && (
        <div className="w-full flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold text-[#30006b]">PARABÉNS!</h2>
          <p className="text-lg text-black">
            Você <u>completou o desafio</u> com sucesso e ganhou{' '}
            <b>acesso a descontos exclusivos!</b>
          </p>
          <p className="font-bold">Aproveite!</p>
          <a
            href="/descontos-exclusivos"
            className="w-full px-6 py-3 bg-[#30006b] text-xl text-white text-center font-semibold rounded hover:bg-[#200048] transition-colors"
          >
            Ir para a Compra
          </a>
        </div>
      )}
    </div>
  )
}

export default Quiz
