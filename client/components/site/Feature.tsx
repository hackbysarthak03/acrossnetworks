type Props = { title: string; subtitle: string };
export default function Feature({ title, subtitle }: Props) {
  return (
    <div className="p-4 rounded-lg border border-neutral-200 bg-white shadow-sm" data-aos="fade-up">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="text-xs text-neutral-600 mt-1">{subtitle}</div>
    </div>
  );
}
