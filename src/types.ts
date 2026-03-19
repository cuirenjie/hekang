export interface BookingData {
  name: string;
  phone: string;
  phonePrefix: string;
  date: string;
  service: string;
  notes?: string;
}

export type ServiceType = '影像科' | '体检科' | '牙科' | '眼科' | '中医科';
