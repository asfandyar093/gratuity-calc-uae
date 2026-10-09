import Image from 'next/image'

interface BlogHeroImageProps {
  src: string
  alt: string
  caption: string
  title: string
}

export default function BlogHeroImage({ src, alt, caption, title }: BlogHeroImageProps) {
  return (
    <figure className="article-hero-image">
      <Image src={src} alt={alt} title={title} width={1200} height={630} sizes="(max-width: 768px) calc(100vw - 2rem), 1200px" quality={70} priority fetchPriority="high" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
