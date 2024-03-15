'use server'

export default async function getCats (): Promise<{ fact: string }> {
  return await fetch('https://catfact.ninja/fact', {
    cache: 'no-store'
  })
  .then((res) => res.json())
  .catch((err) => {
    console.error(err)
    return { fact: 'No cat facts today' }
  })
}