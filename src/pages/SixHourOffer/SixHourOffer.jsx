import { FaCamera, FaFile, FaVideo } from "react-icons/fa";
import "./SixHourOffer.css";

function SixHourOffer() {
  return (
    <div className="SixHourOffer" id="six_hour">
      <div className="section_header">
        <h1 className="title_header">باقة 6 ساعات</h1>
        <h3 className="sub_title">توثيق زفتين</h3>
      </div>
      <div className="photography">
        <div className="camera_icon">
          <div className="left_line"></div>
          <FaCamera />
          <div className="right_line"></div>
        </div>
        <div className="photography_list">
          <h3>تصوير فوتوغرافي ل :</h3>
          <ul className="choices_list">
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
          </ul>
          <p className="no_limit_text">(عدد لا محدود من الصور )</p>
        </div>
      </div>


      <div className="cinema">
        <div className="camera_icon">
          <div className="left_line"></div>
          <FaVideo />
          <div className="right_line"></div>
        </div>
        <div className="photography_list">
          <h3>تصوير فيديو سينمائي مع مونتاج لـ:</h3>
          <ul className="choices_list">
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
          </ul>
          
        </div>
      </div>


      <div className="photography">
        <div className="camera_icon">
          <div className="left_line"></div>
          <FaFile />
          <div className="right_line"></div>
        </div>
        <div className="photography_list">
          <h3>يتضمن :</h3>
          <ul className="choices_list">
            <li>تسليم 6 فيديوهات بمونتاج خاص لكل فيديو</li>
            <li>ألبوم حراري كبير يحتوي على 70 صورة معالجة.</li>
            <li>ألبوم حراري صغير يحتوي على 35 صورة معالجة.</li>
            <li>لوحة حائط خشبية مقاس 30×40.</li>
            <li>لوحة حائط خشبية مقاس 30×40.</li>
          </ul>

          <p className="Price">سعر الباقة: 19,900 ريال</p>
        </div>
      </div>
    </div>
  );
}

export default SixHourOffer;
