import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SuiteSavvy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light`}
      >
        {/*INI HEADER*/}

        <header className="bg-white text-black shadow p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <a href="#" style={{ textDecoration: "none", color: "black"}}> <h1 className="fw-bold"> SuiteSavvy</h1>
              </a>
            <nav>
              <ul className="list-unstyled d-flex gap-3 mb-0">
                <li><button>Home</button></li>
                <li><button>About Us</button></li>
                <li><button>Services</button></li>
                <li><button>Destinations</button></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* INI NAVBAR */}

        <nav className="navbar bg-body-white py-4">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <button type="button" className="btn btn-outline-dark">
                Login
              </button>
              <button className="btn btn-dark">Register</button>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
          </div>
        </nav>

        {/* INI MAIN */}
        
        <main className="container my-5">
          <div className="text-center">
            <h2 className="text-white fw-bold display-4">Book Perfect Stay For Your Vacation</h2>
            <p className="text-white">
              Your passport to unforgettable suites and luxurious experiences.
            </p>
            <button type="button" className="btn btn-outline-dark">Book Your Stay</button>

          </div>
          
          {/* INI CARD BOOKINGNYA */}

          <div className="card mt-5 mx-auto" style={{ maxWidth: "500px" }}>
            <div className="card-body">
              <h5 className="card-title">Booking is Confirmed!</h5>
              <ul className="list-unstyled">
                <li>
                  <strong>Check In:</strong> 03.11.2024
                </li>
                <li>
                  <strong>Check Out:</strong> 24.11.2024
                </li>
                <li>
                  <strong>Guests:</strong> 4 people
                </li>
              </ul>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-secondary">Add to Calendar</button>
                <button type="button" className="btn btn-outline-success">Confirmed</button>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-white text-black py-4 text-center">
          <small className="">2024 SuiteSavvy. All rights reserved.</small>
        </footer>
        
        {children}
      </body>
    </html>
  );
}
