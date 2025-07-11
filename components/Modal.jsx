export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 bg-black/50 h-screen z-50">
      <article className="max-w-4xl mx-auto h-screen px-4 pb-8 bg-white text-black rounded-md shadow-lg relative z-50 mt-8 overflow-scroll">
        {children}
      </article>
    </div>
  );
}
