export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white text-neutral-900">
      <div className="relative flex flex-col items-center">
        <div className="mt-3 h-10 w-10 rounded-full border-4 border-neutral-200 border-t-brand-500 animate-spin" />
  <div className="mt-4 text-2xl font-bold tracking-tight text-brand-500">Across Network</div>
        <p className="mt-3 text-sm text-neutral-500">Loading Bricks & Pixels...Hang tight!</p>
      </div>
    </div>
  );
}
