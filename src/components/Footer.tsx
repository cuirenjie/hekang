import React from 'react';
import { Hospital, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary p-2.5 rounded-2xl text-white shadow-lg shadow-primary/20">
                <Hospital size={28} />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">和康医疗<span className="text-primary">服务</span></h2>
            </div>
            <p className="text-base text-slate-400 leading-relaxed mb-10">
              致力于为香港居民提供便捷、专业、高性价比的跨境医疗与体检服务，连接深圳顶尖医疗资源。
            </p>
            <div className="flex gap-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-black text-lg mb-8 tracking-tight uppercase text-sm">快捷链接</h3>
            <ul className="space-y-5 text-base">
              {['服务介绍', '优势对比', '医院环境', '立即预约'].map((item, i) => (
                <li key={i}>
                  <a href={`#${['services', 'comparison', 'environment', 'booking'][i]}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-lg mb-8 tracking-tight uppercase text-sm">服务中心</h3>
            <ul className="space-y-5 text-base">
              {['常见问题', '服务流程', '合作伙伴', '私隐政策'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-lg mb-8 tracking-tight uppercase text-sm">联络我们</h3>
            <ul className="space-y-6 text-base">
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary mt-0.5">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">HK: +852 98306058</div>
                  <div className="text-slate-500 text-sm font-medium">周一至周日 09:00 - 21:00</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary mt-0.5">
                  <Mail size={20} />
                </div>
                <div className="text-white font-bold text-lg break-all">grace358@126.com</div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary mt-0.5">
                  <MapPin size={20} />
                </div>
                <div className="text-white font-bold text-lg">香港旺角亚皆老街8号朗豪坊办公大楼48楼</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <p>© 2024 和康医疗服务 HeKang Medical Services. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">条款及细则</a>
            <a href="#" className="hover:text-white transition-colors">免责声明</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
