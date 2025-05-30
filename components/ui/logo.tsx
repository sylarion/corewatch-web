import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-white font-semibold text-xl md:text-2xl transition">
      <svg
        className="h-6 w-6 fill-current text-indigo-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 0L1 6v12l11 6 11-6V6L12 0zM4 17.25V8.77L12 4.1l8 4.67v8.48L12 21.9 4 17.25z" />
      </svg>
      CoreWatch
    </Link>
  );
}
