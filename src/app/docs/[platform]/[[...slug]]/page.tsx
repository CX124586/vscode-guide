import { notFound, redirect } from 'next/navigation'
import { isValidPlatform, getDocBySlug, platforms } from '@/lib/docs'
import DocLayout from './DocLayout'
import type { Platform } from '@/lib/docs'

interface Props {
  params: Promise<{ platform: string; slug?: string[] }>
}

export default async function DocPage({ params }: Props) {
  const { platform, slug } = await params

  if (!isValidPlatform(platform)) {
    notFound()
  }

  // If no slug, redirect to first doc of that platform
  if (!slug?.[0]) {
    const firstDoc = platforms[platform].categories[0]?.docs[0]
    if (firstDoc) redirect(`/docs/${platform}/${firstDoc.slug}`)
    notFound()
  }

  const docSlug = slug[0]
  const info = getDocBySlug(platform, docSlug)
  if (!info) notFound()

  return <DocLayout platform={platform} slug={docSlug} meta={info.meta} />
}

export function generateStaticParams() {
  const params: { platform: string; slug?: string[] }[] = []
  for (const [platform, config] of Object.entries(platforms)) {
    for (const category of config.categories) {
      for (const doc of category.docs) {
        params.push({ platform, slug: [doc.slug] })
      }
    }
  }
  return params
}

export const dynamicParams = false
