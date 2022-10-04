import fs from 'fs'
import matter from 'gray-matter'
import type { Post, PostMeta } from 'modules/post/types'
import path from 'path'

type GetAllPostsOptions = {
  sortByDate?: 'asc' | 'desc'
}

export function getAllPosts(
  postsDirectory: string,
  options: GetAllPostsOptions = {}
): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPosts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(fullPath)
    const { data: meta, content } = matter(fileContent)

    return {
      id,
      meta: meta as PostMeta,
      content,
    }
  })

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