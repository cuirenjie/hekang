import React from 'react';
import { motion } from 'motion/react';

export default function Environment() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600',
      title: '宽敞舒适大堂',
      desc: '五星级酒店式接待环境'
    },
    {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600',
      title: '私密就诊空间',
      desc: '确保患者隐私与舒适度'
    },
    {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=600',
      title: '国际先进设备',
      desc: '同步全球顶尖医疗技术'
    }
  ];

  return (
    <section id="environment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">医院环境</h2>
            <p className="section-subtitle">
              为您提供舒适、专业、现代化的就诊体验。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 bg-white text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{img.title}</h3>
                <p className="text-slate-500 text-sm">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
