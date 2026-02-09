import fs from 'fs'
import path from 'path'

export function getStaticHTML(filename) {
  const filePath = path.join(process.cwd(), 'static-html', filename)
  const htmlContent = fs.readFileSync(filePath, 'utf8')
  
  // Extract the body content (between <body> and </body>)
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent
  
  // Extract title
  const titleMatch = htmlContent.match(/<title[^>]*>(.*?)<\/title>/i)
  const title = titleMatch ? titleMatch[1] : 'Creative Studio'
  
  return { bodyContent, title, fullHTML: htmlContent }
}
