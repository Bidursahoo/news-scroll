"use client";
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div id="error">
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}
