import { useEffect, useState } from 'react'
import { toast, Slide } from 'react-toastify'

const lessons = [
  {
    id: 1,
    name: 'ReactJS & Typescript tutorial'
  },
  {
    id: 2,
    name: 'VueJs tutorial'
  },
  {
    id: 3,
    name: 'Router v6'
  }
]

export function FakeChat() {
  const [lessonId, setLessonId] = useState(1)

  useEffect(() => {}, [])
  // Timer
  useEffect(() => {
    const div: any = document.getElementById('fakeChat')
    function emitComment(id: number) {
      setInterval(() => {
        div.dispatchEvent(
          new CustomEvent(`lesson-${id}`, {
            detail: `Nội dung comment của lesson ${id}`
          })
        )
      }, 5000)
    }

    emitComment(1)
    emitComment(2)
    emitComment(3)
  }, [])
  useEffect(() => {
    const div: any = document.getElementById('fakeChat')
    const handleComment = ({ detail }: CustomEvent<string>) => {
      toast(detail, {
        position: 'bottom-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: true,
        transition: Slide
      })
    }
    div.addEventListener(`lesson-${lessonId}`, handleComment)

    return () => {
      div.removeEventListener(`lesson-${lessonId}`, handleComment)
    }
  }, [lessonId])
  return (
    <div id="fakeChat">
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? 'red' : '#333'
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
