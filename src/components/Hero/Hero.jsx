import { FaLink } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div className="logo">
        آسيا البركاتي
      </div>
      <div className="hero_text">
      لمصورات السعوديات مدى وميعاد الشمري تخصصنا في مجال تصوير الأعراس لنكون جزءاً مهماً في ليلة عمر العروسين
      التي لن تتكرر ونوثق أصغر التفاصيل بكل مافيها من مشاعر بخدمة التصوير الفوتوغرافي والفيديو السينمائي
      </div>
      <div className="linksicon">
        <FaLink/>
      </div>
    </div>
  )
}

export default Hero