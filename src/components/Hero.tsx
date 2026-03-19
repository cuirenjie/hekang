import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-white tech-grid flex items-center">
      {/* Decorative Tech Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-sm font-bold mb-8 shadow-sm backdrop-blur-sm"
              >
                <ShieldCheck size={16} className="animate-bounce" />
                香港居民专属医疗绿色通道
              </motion.span>
              
              <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                香港标准 <br />
                <span className="text-primary glow-text">深圳效率</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                无需漫长等待，享受国际标准的医疗设备与专家团队。专为香港居民打造的便捷、优质、高性价比健康检查方案。
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-8 py-5 rounded-2xl shadow-sm border border-slate-100 glow-border"
                >
                  <div className="bg-emerald-100 text-emerald-600 p-2 rounded-xl">
                    <Zap size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-slate-900 font-bold text-lg">无需轮候</div>
                    <div className="text-slate-500 text-sm">即约即检，无需等待</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-8 py-5 rounded-2xl shadow-sm border border-slate-100 glow-border"
                >
                  <div className="bg-blue-100 text-primary p-2 rounded-xl">
                    <CheckCircle size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-slate-900 font-bold text-lg">节省 50%</div>
                    <div className="text-slate-500 text-sm">深港同质，价格更优</div>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#booking" 
                  className="btn-primary flex items-center gap-3 text-lg px-12 py-5"
                >
                  立即开始预约
                  <ArrowRight size={24} />
                </motion.a>
                <motion.a 
                  whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }}
                  href="#comparison" 
                  className="bg-white/50 backdrop-blur-sm text-slate-800 border border-slate-200 px-12 py-5 rounded-full font-bold text-lg transition-all shadow-sm"
                >
                  了解优势对比
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
