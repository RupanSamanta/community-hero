import Header from "./Header";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className="flex flex-col items-center justify-center pt-20 p-6">
          <div className="md:p-12 w-full max-w-4xl flex flex-col items-center text-center">
            <div className="w-full h-80 rounded-2xl bg-emerald-100/50 mb-10 flex flex-col items-center justify-center p-6 border border-emerald-200">
              {/* Replace this with an actual SVG or Image path for the badger illustration */}
              <h1 className="text-9xl font-extrabold text-emerald-700 mb-2">404</h1>
              <p className="text-2xl font-semibold mb-6">Oops! We couldn't find that trail.</p>
            </div>
            <div className="max-w-2xl mb-12">
              <p className="text-md text-emerald-800 leading-relaxed">
                Looks like the page you were looking for has grown over or vanished into the digital woods. Perhaps the URL was mistyped, or the page took root somewhere else.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFoundPage;