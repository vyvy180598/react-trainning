// Side effects

// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// Call API

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// ----------
// 1. Callback luôn được gọi sau khi component mouted
// 2. Cleanup function luôn gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

import React, { useEffect, useState } from 'react'
import { FakeChat } from './FakeChat'

const tabs = ['posts', 'comments', 'albums']

export function UseEffectComp() {
  // Countdown
  const [countdown, setCountdown] = useState(180)

  // Post
  const [posts, setPosts] = useState<Array<any>>([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowToTop] = useState(false)

  // Image
  const [avatar, setAvatar] = useState<any>()

  const handlePreviewAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = (event.target.files as FileList)[0]
    if (!file) return
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }

  // Timer
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    // Cleanup function
    return () => clearInterval(timerId)
  }, [])

  // Call API
  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts)
        })
    }

    // Cleanup function
    return () => {
      unmounted = true
    }
  }, [type])

  // DOM event
  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Image
  useEffect(
    () =>
      // Cleanup
      () =>
        avatar && URL.revokeObjectURL(avatar.preview),
    [avatar]
  )

  return (
    <>
      <div className="p-3">
        <h2>
          Count down:
          {countdown}
        </h2>
      </div>
      <FakeChat />
      <div className="d-flex">
        <div className="p-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              style={
                type === tab
                  ? {
                      color: '#fff',
                      backgroundColor: '#333'
                    }
                  : {}
              }
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))}
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title || post.name}</li>
            ))}
          </ul>
          {showGoToTop && (
            <button
              style={{
                position: 'fixed',
                right: 20,
                bottom: 20
              }}
            >
              Go to Top
            </button>
          )}
        </div>

        <div className="p-3">
          <input type="file" onChange={handlePreviewAvatar} />
          {avatar && <img src={avatar.preview} alt="" width="80%" />}
        </div>
      </div>
    </>
  )
}
