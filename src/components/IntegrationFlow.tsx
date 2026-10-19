import { ArrowDown, ArrowRight, MonitorSmartphone, Sparkles, UserCheck } from 'lucide-react';
import { Fragment } from 'react';

const NODES = [
  { icon: <MonitorSmartphone />, title: 'Your exam system', note: 'LMS, portal or app' },
  { icon: <Sparkles />, title: 'Scholametrix AI', note: 'Marks per criterion' },
  { icon: <UserCheck />, title: 'Your teachers', note: 'Approve or adjust' },
];

/** Your system → Scholametrix → your teachers. */
export function IntegrationFlow() {
  return (
    <div className="mt-7 flex flex-col items-stretch gap-2 rounded-2xl border border-line bg-surface/70 p-4 sm:flex-row sm:items-center" aria-label="How the integration works">
      {NODES.map((n, i) => (
        <Fragment key={n.title}>
          <div className={`flex flex-1 items-center gap-3 rounded-xl p-3 ${i === 1 ? 'bg-brand-gradient text-white shadow-glow' : 'bg-white ring-1 ring-line'}`}>
            <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg [&_svg]:size-4.5 ${i === 1 ? 'bg-white/20' : 'bg-brand-50 text-brand-600'}`}>{n.icon}</span>
            <span>
              <span className={`block text-[13.5px] font-semibold ${i === 1 ? 'text-white' : 'text-ink'}`}>{n.title}</span>
              <span className={`block text-xs ${i === 1 ? 'text-white/80' : 'text-muted'}`}>{n.note}</span>
            </span>
          </div>
          {i < NODES.length - 1 && (
            <span className="flex justify-center text-brand-600" aria-hidden>
              <ArrowRight className="hidden size-4 sm:block" />
              <ArrowDown className="size-4 sm:hidden" />
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
