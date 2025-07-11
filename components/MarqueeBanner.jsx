
export default function MarqueeBanner({dictionary}) {
  return (
    <div className="bg-black text-white py-3 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        <span className="text-sm">
          {dictionary?.banner}
        </span>
      </div>
    </div>
  );
}
