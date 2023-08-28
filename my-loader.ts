export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number,
  quality?: number
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://res.cloudinary.com/dmamczw3g/image/upload/${params.join(
    ','
  )}/v1691649432/${src}`
}