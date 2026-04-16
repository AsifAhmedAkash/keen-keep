import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="text-center bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-white max-w-md w-full">

                <h1 className="text-8xl font-extrabold tracking-widest">404</h1>

                <p className="text-xl mt-4 font-semibold">
                    Page Not Found
                </p>

                <p className="mt-2 text-sm opacity-80">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    href="/home"
                    className="inline-block mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
                >
                    Go Home
                </Link>

            </div>
        </div>
    );
}