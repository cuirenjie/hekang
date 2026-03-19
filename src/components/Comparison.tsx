import React from 'react';
import { motion } from 'motion/react';
import { Clock, DollarSign, Cpu, Check, X } from 'lucide-react';

export default function Comparison() {
  const features = [
    { 
      name: '轮候时间', 
      hk: '8个月以上', 
      sz: '约 1 星期', 
      icon: <Clock size={20} />,
      szBetter: true 
    },
    { 
      name: '全面体检费用', 
      hk: 'HKD 8,000+', 
      sz: '约 HKD 4,000', 
      icon: <DollarSign size={20} />,
      szBetter: true 
    },
    { 
      name: '设备水平', 
      hk: '国际先进', 
      sz: '国际先进同步', 
      icon: <Cpu size={20} />,
      szBetter: false 
    },
    { 
      name: '报告出具', 
      hk: '2-4 星期', 
      sz: '24-48 小时', 
      icon: <Check size={20} />,
      szBetter: true 
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">为什么选择深圳体检？</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12">
              以更合理的价格，获得更快捷、更全面的医疗服务体验。
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
        >
          <div className="grid grid-cols-3 text-center border-b border-slate-200 bg-slate-50/50">
            <div className="p-8"></div>
            <div className="p-8 font-bold text-base text-slate-800 border-l border-slate-200">香港私立医院</div>
            <div className="p-8 font-bold text-base text-primary border-l border-slate-200 bg-blue-50/50">深圳合作三甲医院</div>
          </div>

          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-3 text-center border-b border-slate-100 last:border-0 hover:bg-primary/5 transition-colors group"
            >
              <div className="p-8 text-left font-semibold text-slate-700 flex items-center gap-4">
                <div className="text-primary/60 group-hover:scale-110 transition-transform">{feature.icon}</div>
                {feature.name}
              </div>
              <div className="p-8 text-slate-500 border-l border-slate-100 flex items-center justify-center">
                {feature.hk}
              </div>
              <div className={`p-8 font-bold border-l border-slate-100 bg-blue-50/10 flex items-center justify-center ${feature.szBetter ? 'text-secondary' : 'text-slate-800'}`}>
                {feature.sz}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-emerald-50/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-emerald-100 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left shadow-lg shadow-emerald-500/5"
        >
          <div className="bg-emerald-100 text-emerald-600 p-5 rounded-2xl animate-pulse">
            <Check size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">香港医生广泛认可的体检报告</h3>
            <p className="text-slate-600 text-base">我们的合作医院采用与香港同步的国际医疗标准，确保您的检查结果在深港两地互认。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
