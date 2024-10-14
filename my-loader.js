export default function myLoader({ src }) {
  return `${process.env.DEPLOYED_GITHUB_PATH || ''}${src}`
}