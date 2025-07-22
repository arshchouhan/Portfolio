import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Arsh Chauhan - Portfolio</title>
        <meta name="description" content="Personal portfolio of Arsh Chauhan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-800">Arsh Chauhan</h1>
          <h2 className="text-2xl text-gray-600 mt-4">Developer | Learner</h2>
        </section>

        {/* About Section */}
        <section className="max-w-2xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I'm a passionate developer focused on creating elegant, efficient solutions to complex problems. 
            With expertise in modern web technologies, I enjoy building applications that make a positive impact.
            When I'm not coding, you can find me learning new technologies, exploring nature, or reading about the latest tech trends.
          </p>
        </section>

        {/* Contact Button */}
        <section className="text-center py-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            Contact Me
          </button>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-200">
        <p className="text-gray-600">© {new Date().getFullYear()} Arsh Chauhan. All rights reserved.</p>
      </footer>
    </div>
  );
}
