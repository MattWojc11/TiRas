interface ContactInfoProps {
  className?: string;
}

export default function ContactInfo({ className = '' }: ContactInfoProps) {
  const textColorClass = className.includes('text-white') ? 'text-white' : 'text-gray-600';
  const headingColorClass = className.includes('text-white') ? 'text-white' : 'text-gray-900';
  
  return (
    <div className={`${className}`}>
      <div className="space-y-8">
        <div className="flex items-start gap-6 group">
          <div className="flex-shrink-0 w-10 h-10 bg-[#E6F9FF] rounded-full flex items-center justify-center group-hover:bg-[#00CAFF] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00CAFF] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className={`font-bold mb-1 ${headingColorClass}`}>Telefon</h3>
            <p className={`${textColorClass} hover:text-[#00CAFF] transition-colors duration-300`}>+48 123 456 789</p>
          </div>
        </div>
        
        <div className="flex items-start gap-6 group">
          <div className="flex-shrink-0 w-10 h-10 bg-[#E6F9FF] rounded-full flex items-center justify-center group-hover:bg-[#00CAFF] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00CAFF] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className={`font-bold mb-1 ${headingColorClass}`}>Email</h3>
            <a href="mailto:kontakt@konstrukcjedrewniane.pl" className={`${textColorClass} hover:text-[#00CAFF] transition-colors duration-300`}>
              kontakt@konstrukcjedrewniane.pl
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-6 group">
          <div className="flex-shrink-0 w-10 h-10 bg-[#E6F9FF] rounded-full flex items-center justify-center group-hover:bg-[#00CAFF] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00CAFF] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className={`font-bold mb-1 ${headingColorClass}`}>Adres</h3>
            <p className={textColorClass}>
              Müllerstrasse 38<br />
              8810 Horgen, Szwajcaria
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-6 group">
          <div className="flex-shrink-0 w-10 h-10 bg-[#E6F9FF] rounded-full flex items-center justify-center group-hover:bg-[#00CAFF] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00CAFF] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className={`font-bold mb-1 ${headingColorClass}`}>Godziny pracy</h3>
            <p className={textColorClass}>
              Poniedziałek - Piątek: 8:00 - 16:00<br />
              Sobota: 9:00 - 13:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 