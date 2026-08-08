'use client';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-wo-bg text-wo-text">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-4">Something went wrong.</h1>
        <p className="text-wo-text-muted">{error.message}</p>
      </div>
    </div>
  );
}
