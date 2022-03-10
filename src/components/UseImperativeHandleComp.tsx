import { useRef } from 'react'
import { forwardRef, useImperativeHandle } from 'react'

import video1 from '../assets/videos/video1.mp4'

// forwardRef sẽ trả ref làm đối số thứ 2
const Video = forwardRef((props, ref: any) => {
  const videoRef = useRef<any>()

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    }
  }))

  return (
    <video
      // ref={ref} // Warning(*)
      ref={videoRef}
      src={video1}
      width={280}
    />
  )
})

export const UseImperativeHandleComp = () => {
  const videoRef = useRef<any>()

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div className="p-3">
      {/* ref này là props của forwardRef, không phải props của Video */}
      {/* Warning(*): videoRef là ref từ Video, nếu không dùng useImperativeHandle bên trong Video thì bên ngoài sẽ chọt vô được hết các thuộc tính của Video */}
      <Video ref={videoRef} />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  )
}
