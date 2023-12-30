import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <div className="w-full mx-auto max-w-2xl text-center">
        <h1 className="text-6xl mb-4">My Journal app</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href="/journal"></Link>
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
            Get started
          </button>
        </div>
      </div>
    </div>
  )
}
