import React from 'react';
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-white via-slate-50 to-gray-100">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-40"></div>
                <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
            </div>

            {/* Giant 404 Watermark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <h1 className="text-[180px] md:text-[320px] font-black text-gray-100 select-none">
                    404
                </h1>
            </div>

            <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
                <div className="max-w-4xl text-center">
                    {/* Breaking News Badge */}
                    <div className="mb-8 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2">
                        <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
                        <span className="text-sm font-semibold tracking-wide text-red-600">
                            BREAKING NEWS
                        </span>
                    </div>

                    {/* Newspaper Card */}
                    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl md:p-12">
                        {/* Top Newspaper Line */}
                        <div className="mb-8 border-b border-dashed border-gray-300 pb-4">
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                                Dragon News Daily
                            </p>
                        </div>

                        <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl">
                            Article Not Found
                        </h2>

                        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
                            The story you are looking for seems to have vanished from our
                            newsroom archives. It may have been moved, removed, or never
                            existed in the first place.
                        </p>

                        {/* Fake News Columns */}
                        <div className="mb-10 hidden gap-4 md:grid md:grid-cols-3">
                            <div className="space-y-2">
                                <div className="h-3 rounded bg-gray-200"></div>
                                <div className="h-3 rounded bg-gray-200"></div>
                                <div className="h-3 w-3/4 rounded bg-gray-200"></div>
                            </div>

                            <div className="space-y-2">
                                <div className="h-3 rounded bg-gray-200"></div>
                                <div className="h-3 rounded bg-gray-200"></div>
                                <div className="h-3 w-2/3 rounded bg-gray-200"></div>
                            </div>

                            <div className="space-y-2">
                                <div className="h-3 rounded bg-gray-200"></div>
                                <div className="h-3 rounded bg-gray-200"></div>
                                <div className="h-3 w-4/5 rounded bg-gray-200"></div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/"
                                className="rounded-xl bg-red-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
                            >
                                Return Home
                            </Link>

                            <Link
                                href="/news"
                                className="rounded-xl border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
                            >
                                Browse News
                            </Link>
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <div className="pointer-events-none">
                        <div className="absolute left-10 top-32 hidden -rotate-12 rounded-xl border bg-white p-4 shadow-lg lg:block">
                            <p className="text-xs font-bold text-red-500">NEWS</p>
                            <p className="text-sm font-semibold">
                                Todays headline is missing...
                            </p>
                        </div>

                        <div className="absolute right-10 bottom-32 hidden rotate-12 rounded-xl border bg-white p-4 shadow-lg lg:block">
                            <p className="text-xs font-bold text-blue-500">ARCHIVE</p>
                            <p className="text-sm font-semibold">
                                Searching newsroom records...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NotFoundPage;