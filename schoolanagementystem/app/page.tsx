import Header from '../app/components/Header';


export default function Home() {
  return (
    <div>
      <Header />
      <div className="min-h-screen p-8">
        <main className="max-w-4xl mx-auto mt-8">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome to Our School</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Latest News</h2>
              <p>Stay updated with the latest school events and announcements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
              <p>Check out our calendar for upcoming activities and programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Academic Programs</h2>
              <p>Discover our comprehensive curriculum and learning approach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Student Life</h2>
              <p>Explore the vibrant extracurricular activities at our school.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}