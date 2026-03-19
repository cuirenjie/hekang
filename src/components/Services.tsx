import React from 'react';
import { motion } from 'motion/react';
import { Heart, Microscope, Bus, Languages, Activity, Brain, Eye, UserCheck, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: '影像科',
      desc: '配备顶尖 MRI、CT 等影像设备，提供高精度医学影像检查。',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      title: '体检科',
      desc: '全方位深度健康体检，专业评估各项身体健康指标。',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      title: '免费专车接送',
      desc: '提供口岸至医院的定时免费穿梭巴士，交通零烦恼。',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      title: '双语导医服务',
      desc: '专业陪诊人员提供粤语/英语服务，沟通无障碍。',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      title: '牙科',
      desc: '提供数字化种植、牙齿矫正及全方位口腔健康护理。',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      title: '眼科',
      desc: '专业视力检查、眼底筛查及各类眼科疾病诊疗。',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      title: '中医科',
      desc: '传统中医调理、针灸推拿，结合现代科技进行体质辨识。',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=400&h=300',
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">全面医疗服务与支援</h2>
            <p className="section-subtitle">
              提供从预约、接送到就诊的一站式服务，让您的跨境就医无忧。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm overflow-hidden rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all group relative"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=300';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  了解更多 <ArrowRight size={12} />
                </div>
              </div>
              {/* Tech corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-[2.5rem] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
