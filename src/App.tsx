import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Services from './components/Services';
import Environment from './components/Environment';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { MessageCircle, Building2, Eye, HeartPulse, ShieldCheck, X, QrCode, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <Header />
      
      <main>
        <Hero />
        
        {/* Trust Banner */}
        <div className="bg-white py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-3">
                <Building2 className="text-blue-600" size={32} />
                <span className="font-bold text-slate-800 text-xl tracking-tight">港大深圳医院</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="text-red-600" size={32} />
                <span className="font-bold text-slate-800 text-xl tracking-tight">希华医疗</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartPulse className="text-teal-600" size={32} />
                <span className="font-bold text-slate-800 text-xl tracking-tight">和睦家医疗</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-800" size={32} />
                <span className="font-bold text-slate-800 text-xl tracking-tight">AIA 友邦</span>
              </div>
            </div>
          </div>
        </div>

        <Comparison />
        <Services />
        <Environment />
        <BookingForm />
      </main>

      <Footer />

      {/* Floating Contact Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 z-40 flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-100">
          联系咨询
        </span>
      </button>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                >
                  <X size={24} />
                </button>

                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">联系我们的医疗顾问</h3>
                  <p className="text-slate-500">扫描下方二维码，获取一对一专业咨询服务</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* WhatsApp Card */}
                  <div className="bg-slate-50 rounded-3xl p-6 text-center border border-slate-100">
                    <div className="flex items-center justify-center gap-2 mb-4 text-[#25D366]">
                      <MessageCircle size={20} />
                      <span className="font-bold">WhatsApp</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4">
                      <img 
                        src="https://ais-dev-zjpihtlbwl2wd7neit7an3-151734707571.asia-northeast1.run.app/whatsapp-qr.png" 
                        alt="WhatsApp QR Code"
                        className="w-48 h-48 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/85298306058';
                        }}
                      />
                    </div>
                    <p className="text-xs text-slate-400">使用 WhatsApp 扫描或点击添加</p>
                    <a 
                      href="https://wa.me/85298306058" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-[#25D366] font-bold hover:underline"
                    >
                      直接对话 <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* WeChat Card */}
                  <div className="bg-slate-50 rounded-3xl p-6 text-center border border-slate-100">
                    <div className="flex items-center justify-center gap-2 mb-4 text-[#07C160]">
                      <QrCode size={20} />
                      <span className="font-bold">WeChat 微信</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4">
                      <img 
                        src="https://ais-dev-zjpihtlbwl2wd7neit7an3-151734707571.asia-northeast1.run.app/wechat-qr.png" 
                        alt="WeChat QR Code"
                        className="w-48 h-48 object-contain"
                        onError={(e) => {
                          // Placeholder for WeChat QR if not found
                          (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatID:woo_hong';
                        }}
                      />
                    </div>
                    <p className="text-xs text-slate-400">使用微信扫描二维码添加好友</p>
                    <p className="mt-4 text-sm font-medium text-slate-600">微信号: woo_hong</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
                <p className="text-sm text-slate-500">服务时间：周一至周日 09:00 - 21:00</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
