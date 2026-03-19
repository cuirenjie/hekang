import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Calendar, Phone, User, ClipboardList, ArrowRight, Loader2 } from 'lucide-react';
import { BookingData, ServiceType } from '../types';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    phonePrefix: '+852',
    date: '',
    service: '影像科',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Booking submitted:', formData);
      setIsSuccess(true);
    } catch (err) {
      setError('提交失败，请稍后再试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-2xl mx-auto border border-emerald-100"
      >
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">预约申请已提交！</h3>
        <p className="text-slate-600 mb-8">
          感谢您的信任。我们的医疗客服专员将在 24 小时内通过电话与您联络，确认具体时间及安排。
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="btn-primary"
        >
          返回修改
        </button>
      </motion.div>
    );
  }

  return (
    <section id="booking" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">准备好预约您的健康检查了吗？</h2>
          <p className="text-blue-100 mb-12 text-lg max-w-2xl mx-auto">
            填写简单资料，我们的医疗客服专员将为您安排最适合的体检计划。
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-left max-w-3xl mx-auto border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <User size={16} className="text-primary" />
                姓名 <span className="text-red-500">*</span>
              </label>
              <input 
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="请输入您的姓名" 
                type="text" 
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Phone size={16} className="text-primary" />
                联络电话 <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select 
                  name="phonePrefix"
                  value={formData.phonePrefix}
                  onChange={handleChange}
                  className="w-28 px-3 py-3 rounded-xl border-slate-200 bg-slate-50 font-medium focus:ring-2 focus:ring-primary"
                >
                  <option value="+852">+852</option>
                  <option value="+86">+86</option>
                  <option value="+853">+853</option>
                </select>
                <input 
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-xl border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  placeholder="电话号码" 
                  type="tel" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Calendar size={16} className="text-primary" />
                期望预约日期
              </label>
              <input 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                type="date" 
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <ClipboardList size={16} className="text-primary" />
                关注项目/专科
              </label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="影像科">影像科</option>
                <option value="体检科">体检科</option>
                <option value="牙科">牙科</option>
                <option value="眼科">眼科</option>
                <option value="中医科">中医科</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm font-semibold text-slate-700">备注 (可选)</label>
            <textarea 
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="如有特殊需求或病史请注明"
            ></textarea>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <button 
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold py-4 px-6 rounded-xl transition-all flex justify-center items-center gap-3 shadow-xl shadow-primary/20 group"
            type="submit"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                正在提交...
              </>
            ) : (
              <>
                提交预约申请
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="mt-4 text-center text-xs text-slate-400">
            提交即表示您同意我们的《私隐政策》及《服务条款》。
          </p>
        </motion.form>
      </div>
    </section>
  );
}
