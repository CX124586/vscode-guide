import type { MDXComponents } from 'mdx/types'
import VideoEmbed from './components/VideoEmbed'
import type { ReactNode } from 'react'

const components: MDXComponents = {
  VideoEmbed: VideoEmbed as unknown as (props: Record<string, unknown>) => ReactNode,
}

export function useMDXComponents(): MDXComponents {
  return components
}
