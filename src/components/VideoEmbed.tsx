'use client'

import { useState } from 'react'

interface Props {
  title: string
  duration?: string
  platform?: 'bilibili' | 'youtube'
  videoId?: string
}

export default function VideoEmbed({ title, duration, platform, videoId }: Props) {
  const [show, setShow] = useState(false)

  if (videoId && show) {
    const src = platform === 'bilibili'
      ? `//player.bilibili.com/player.html?bvid=${videoId}`
      : `//www.youtube.com/embed/${videoId}`

    return (
      <div className="my-6 rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
        <iframe
          src={src}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="my-6 rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/50 p-8 text-center group hover:border-[#007acc]/50 transition-colors cursor-pointer"
      onClick={() => videoId && setShow(true)}
    >
      <div className="text-4xl mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
        <svg className="w-12 h-12 mx-auto text-[#007acc]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
      <h4 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-1">{title}</h4>
      {duration && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          时长：{duration}
        </p>
      )}
      <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
        {videoId ? '点击加载视频' : '视频教程正在录制中...'}
      </p>
    </div>
  )
}
