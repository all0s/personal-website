import fs from 'fs'
import matter from 'gray-matter'
import { POSTS_DIRECTORY } from 'modules/post/constants'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

import type { Post, PostMeta } from 'modules/post/types'

function getAllPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)

  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    return {
      params: {
        id,
      },
    }
  })
}

type GetAllPostsOptions = {
  sortByDate?: 'asc' | 'desc'
}

async function getAllPosts(options: GetAllPostsOptions = {}): Promise<Post[]> {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)

  const allPosts = await Promise.all(fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(POSTS_DIRECTORY, fileName)
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const { data: meta, content } = matter(fileContent)

    const processedContent = await remark()
      .use(html)
      .process(content)

    const contentHtml = processedContent.toString()

    return {
      id,
      meta: meta as PostMeta,
      contentHtml,
    }
  }))

  if (!options.sortByDate) {
    return allPosts
  }

  return allPosts.sort(({ meta: { date: a } }, { meta: { date: b } }) => {
    if (a === b) {
      return 0
    }

    if (options.sortByDate === 'asc') {
      return a < b ? -1 : 1
    } else {
      return a < b ? 1 : -1
    }
  })
}

async function getPostById(id: any): Promise<Post | null> {
  if (typeof id !== 'string') {
    return null
  }

  const fullPath = path.join(POSTS_DIRECTORY, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data: meta, content } = matter(fileContent)

  const processedContent = await remark()
    .use(html)
    .process(content)

  const contentHtml = processedContent.toString()

  return {
    id,
    meta: meta as PostMeta,
    contentHtml,
  }
}

export { getAllPostIds, getAllPosts, getPostById }
