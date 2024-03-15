import getCats from "../actions/getCats"

export const dynamic = 'force-dynamic'

export default async function Home(): Promise<React.ReactElement> {
  const catFact = await getCats()

  return (
    <div>
      <h1>Playwright MSW Issue</h1>
      <p>Here's a random cat fact: {catFact.fact}</p>
    </div>
  )
}
