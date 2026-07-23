import { notFound } from 'next/navigation'
import { findDocBySlug, docCategories } from '@/lib/docs'
import DocLayout from './DocLayout'

interface Props {
  params: Promise<{ slug?: string[] }>
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  const docSlug = slug?.[0]
  if (!docSlug) notFound()

  const info = findDocBySlug(docSlug)
  if (!info) notFound()

  return <DocLayout slug={docSlug} meta={info.meta} />
}

/** 预生成所有已知文档的路由 */
export function generateStaticParams() {
  return docCategories
    .flatMap((cat) => cat.docs)
    .map((doc) => ({
      slug: [doc.slug],
    }))
}

export const dynamicParams = false
