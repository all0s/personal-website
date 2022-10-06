export type PostContentHtmlProps = {
  html: string
}

function PostContentHtml({ html }: PostContentHtmlProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContentHtml
