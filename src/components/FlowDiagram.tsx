import React from 'react';
import { ArrowRight, Circle } from 'lucide-react';

interface Step {
  label: string;
  sublabel?: string;
  type?: 'start' | 'process' | 'decision' | 'end';
}

interface FlowDiagramProps {
  steps: Step[];
  title?: string;
}

export const FlowDiagram: React.FC<FlowDiagramProps> = ({ steps, title }) => {
  return (
    <div className="my-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      {title && <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">{title}</h4>}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`
              flex flex-col items-center justify-center p-4 min-w-[140px] text-center
              ${step.type === 'decision' ? 'bg-amber-50 border-amber-200 text-amber-800 rounded-full' : 
                step.type === 'start' ? 'bg-emerald-50 border-emerald-200 text-emerald-800 rounded-xl' :
                step.type === 'end' ? 'bg-slate-100 border-slate-300 text-slate-800 rounded-xl' :
                'bg-blue-50 border-blue-200 text-blue-800 rounded-xl'}
              border-2 font-medium text-sm transition-all hover:scale-105
            `}>
              <span>{step.label}</span>
              {step.sublabel && <span className="text-[10px] opacity-70 mt-1 uppercase">{step.sublabel}</span>}
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center justify-center text-slate-300">
                <ArrowRight className="hidden md:block w-5 h-5" />
                <Circle className="md:hidden w-2 h-2 fill-current" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
