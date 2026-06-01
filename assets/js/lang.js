/* ============================================================
   RD Medcare – Bilingual (TH / EN)
   ============================================================ */
const translations = {
  en: {
    /* Nav */
    nav_home:'Home', nav_products:'Products', nav_solutions:'Solutions',
    nav_about:'About', nav_contact:'Contact', nav_cta:'Contact Specialist',

    /* Hero */
    hero_pill:    'ISO 13485 Certified Medical Equipment',
    hero_title1:  'Advancing Patient Care',
    hero_title2:  'Through Medical Technology',
    hero_desc:    'RD Medcare provides certified medical equipment and healthcare technology solutions for hospitals, clinics, and healthcare organisations across Thailand.',
    hero_cta1:    'Contact Specialist',
    hero_cta2:    'Product Information',
    hero_m1_num:  '500+', hero_m1_lbl: 'Hospitals Served',
    hero_m2_num:  '10K+', hero_m2_lbl: 'Devices in Service',
    hero_m3_num:  '15+',  hero_m3_lbl: 'Years Experience',
    hero_c1_lbl:  'Certified Devices', hero_c1_val: 'ISO 13485',
    hero_c2_lbl:  'Response Time',     hero_c2_val: '< 4 Hours',
    hero_c3_lbl:  'Uptime Rate',       hero_c3_val: '98%',

    /* Ticker */
    ticker_label: 'Trusted by Leading Healthcare Institutions Across Thailand',

    /* Solutions */
    sol_eyebrow:'Medical Solutions',
    sol_title:  'Comprehensive Healthcare Technology',
    sol_lead:   'From patient monitoring to hospital infrastructure, we provide end-to-end medical equipment solutions for every care environment.',
    sol1_title:'Patient Monitoring',      sol1_desc:'Multi-parameter monitors, SpO₂, NIBP, ECG bedside systems.',
    sol2_title:'Respiratory Care',        sol2_desc:'High-flow humidifiers, ventilators, oxygen delivery systems.',
    sol3_title:'Critical Care Equipment', sol3_desc:'ICU monitors, infusion pumps, defibrillators, life support.',
    sol4_title:'Medical Consumables',     sol4_desc:'Disposables, consumables and accessories for all specialties.',
    sol5_title:'Healthcare IT Solutions', sol5_desc:'EMR integration, central monitoring stations, data analytics.',
    sol6_title:'Hospital Infrastructure', sol6_desc:'Medical gas systems, nurse call, OR and ICU setup.',

    /* Products */
    prod_eyebrow:   'Featured Products',
    prod_title:     'Medical Equipment Highlights',
    prod_lead:      'Precision-engineered devices selected for clinical reliability and ease of use.',
    prod_view_all:  'View All Products',
    prod_learn:     'Learn More',
    prod1_cat:'Respiratory Care',   prod1_name:'High Flow Humidifier',     prod1_desc:'Advanced HFNC therapy with precise temperature & FiO₂ control.',
    prod1_f1:'Flow 2–60 L/min', prod1_f2:'FiO₂ 21–100%', prod1_f3:'Temp 31–37°C',
    prod2_cat:'Patient Monitoring', prod2_name:'SpO₂ Monitor',             prod2_desc:'Continuous pulse oximetry with waveform display and smart alarms.',
    prod2_f1:'±2% accuracy',    prod2_f2:'Waveform trend',  prod2_f3:'Configurable alarms',
    prod3_cat:'Critical Care',      prod3_name:'Bedside Patient Monitor',  prod3_desc:'Multi-parameter ICU/ward monitor with central station connectivity.',
    prod3_f1:'ECG, SpO₂, NIBP', prod3_f2:'EtCO₂ optional', prod3_f3:'Wireless network',
    prod4_cat:'Cardiology',         prod4_name:'12-Lead ECG System',       prod4_desc:'Diagnostic ECG with auto-interpretation and EMR/HIS integration.',
    prod4_f1:'Simultaneous 12L', prod4_f2:'Auto analysis',  prod4_f3:'EMR integration',
    prod5_cat:'Surgical',           prod5_name:'Pneumatic Tourniquet',     prod5_desc:'Dual-port tourniquet with auto calibration and safety monitoring.',
    prod5_f1:'50–500 mmHg',     prod5_f2:'Dual-limb',      prod5_f3:'Safety lock',
    prod6_cat:'Infusion',           prod6_name:'Volumetric Infusion Pump', prod6_desc:'Precision infusion with drug library and dose error reduction.',
    prod6_f1:'0.1–1200 mL/hr',  prod6_f2:'Drug library',   prod6_f3:'Wi-Fi enabled',

    /* Why Choose */
    why_eyebrow:'Why RD Medcare',
    why_title:  'Your Trusted Medical Equipment Partner',
    why_lead:   'We combine clinical expertise, certified products, and nationwide support to ensure every healthcare facility has the tools to deliver exceptional patient care.',
    why1_title:'Experienced Medical Team',         why1_desc:'Our team includes biomedical engineers and clinical specialists with deep healthcare industry knowledge.',
    why2_title:'Certified Medical Equipment',      why2_desc:'All products carry ISO 13485, CE, FDA, and Thai FDA certifications for guaranteed safety and efficacy.',
    why3_title:'Hospital & Clinic Support',        why3_desc:'Dedicated account managers and service teams for hospitals, clinics, and outpatient facilities nationwide.',
    why4_title:'Maintenance & Calibration',        why4_desc:'Scheduled preventive maintenance and calibration services to ensure consistent device performance.',
    why5_title:'Fast Technical Support',           why5_desc:'24/7 technical helpdesk and on-site response within 4 hours for critical equipment failures.',

    /* Partners */
    partners_eyebrow:'Healthcare Network',
    partners_title:  'Trusted by Thailand\'s Leading Hospitals',
    partners_lead:   'From university medical centres to private hospitals, our equipment is in service across Thailand\'s healthcare system.',

    /* Services */
    svc_eyebrow:'Service & Support',
    svc_title:  'Complete Lifecycle Support',
    svc_lead:   'From installation to end-of-life, we provide comprehensive after-sales services ensuring maximum uptime for your medical equipment.',
    svc1_title:'Installation Services',   svc1_desc:'Professional installation, commissioning and handover with full documentation.',
    svc2_title:'Preventive Maintenance',  svc2_desc:'Scheduled PM programmes to maintain device accuracy and regulatory compliance.',
    svc3_title:'Product Training',        svc3_desc:'On-site and remote clinical training for nursing and medical staff.',
    svc4_title:'Technical Support',       svc4_desc:'24/7 helpline with rapid on-site response for critical equipment issues.',
    svc5_title:'Warranty Services',       svc5_desc:'Comprehensive warranty coverage with genuine OEM parts and full traceability.',

    /* Contact */
    contact_eyebrow:  'Get in Touch',
    contact_title:    'Speak with a Medical Specialist',
    contact_lead:     'Tell us about your facility\'s needs and our team will recommend the most suitable solutions.',
    form_title:       'Enquiry Form',
    form_name:        'Full Name',
    form_org:         'Hospital / Organisation',
    form_phone:       'Phone Number',
    form_email:       'Email Address',
    form_interest:    'Product Interest',
    form_msg:         'Message (optional)',
    form_submit:      'Send Enquiry',
    info_title:       'Contact Us',
    info_desc:        'Our medical specialists respond within one business day.',

    /* CTA Banner */
    cta_title:'Ready to Improve Patient Outcomes?',
    cta_desc: 'Connect with our specialist team to find the right medical equipment solutions for your facility.',
    cta_btn1: 'Book a Demo',
    cta_btn2: 'Download Catalogue',

    /* Footer */
    footer_tagline: 'Advancing healthcare through certified medical equipment and technology solutions. Trusted by hospitals across Thailand.',
    ft_products:'Products', ft_company:'Company', ft_support:'Support', ft_contact:'Contact',
    footer_copy:'© 2024 RD Medcare. All rights reserved.',
    footer_privacy:'Privacy Policy', footer_terms:'Terms of Use',

    /* About */
    ab_hero_title:'About RD Medcare',
    ab_hero_desc: 'A trusted medical equipment distributor committed to improving healthcare outcomes across Thailand.',
    ab_mission_ey:'Our Mission',
    ab_mission_h: 'Improving Healthcare Through Technology',
    ab_mission_p: 'RD Medcare was founded to bridge the gap between world-class medical technology and healthcare providers across Thailand — making certified, reliable equipment accessible to every hospital and clinic, regardless of location or size.',
    ab_vision_h:  'Our Vision',
    ab_vision_p:  'To be the most trusted medical equipment partner in Southeast Asia, enabling better patient outcomes through reliable technology, expert support, and unwavering commitment to quality.',
    ab_team_ey:   'Leadership',
    ab_team_h:    'Our Medical Team',
    ab_hist_ey:   'Company History',
    ab_hist_h:    'Milestones & Achievements',
    ab_cert_ey:   'Certifications',
    ab_cert_h:    'Quality & Compliance',

    /* Products page */
    pp_title: 'Medical Products',
    pp_desc:  'Precision medical devices for modern healthcare facilities.',
    filt_all: 'All', filt_mon:'Monitoring', filt_resp:'Respiratory',
    filt_card:'Cardiology', filt_surg:'Surgical', filt_inf:'Infusion',

    /* Solutions page */
    sp_title:'Healthcare Solutions',
    sp_desc: 'Integrated solutions for every clinical environment.',
  },

  th: {
    /* Nav */
    nav_home:'หน้าหลัก', nav_products:'ผลิตภัณฑ์', nav_solutions:'โซลูชัน',
    nav_about:'เกี่ยวกับเรา', nav_contact:'ติดต่อ', nav_cta:'ปรึกษาผู้เชี่ยวชาญ',

    /* Hero */
    hero_pill:    'อุปกรณ์การแพทย์รับรองมาตรฐาน ISO 13485',
    hero_title1:  'ยกระดับการดูแลผู้ป่วย',
    hero_title2:  'ด้วยเทคโนโลยีการแพทย์',
    hero_desc:    'RD Medcare จัดจำหน่ายอุปกรณ์การแพทย์ที่ได้รับการรับรองและโซลูชันเทคโนโลยีด้านสุขภาพสำหรับโรงพยาบาล คลินิก และสถานพยาบาลทั่วประเทศไทย',
    hero_cta1:    'ปรึกษาผู้เชี่ยวชาญ',
    hero_cta2:    'ข้อมูลผลิตภัณฑ์',
    hero_m1_num:  '500+', hero_m1_lbl: 'โรงพยาบาลที่ให้บริการ',
    hero_m2_num:  '1 หมื่น+', hero_m2_lbl: 'อุปกรณ์ในการใช้งาน',
    hero_m3_num:  '15+',  hero_m3_lbl: 'ปีแห่งประสบการณ์',
    hero_c1_lbl:  'อุปกรณ์ที่ได้รับการรับรอง', hero_c1_val: 'ISO 13485',
    hero_c2_lbl:  'เวลาตอบสนอง',              hero_c2_val: '< 4 ชั่วโมง',
    hero_c3_lbl:  'อัตราการทำงาน',            hero_c3_val: '98%',

    /* Ticker */
    ticker_label: 'ได้รับความไว้วางใจจากสถาบันสุขภาพชั้นนำทั่วประเทศไทย',

    /* Solutions */
    sol_eyebrow:'โซลูชันทางการแพทย์',
    sol_title:  'เทคโนโลยีด้านสุขภาพที่ครอบคลุม',
    sol_lead:   'ตั้งแต่การติดตามผู้ป่วยไปจนถึงโครงสร้างพื้นฐานโรงพยาบาล เราให้บริการโซลูชันอุปกรณ์การแพทย์ครบวงจร',
    sol1_title:'ติดตามผู้ป่วย',             sol1_desc:'เครื่องติดตามหลายพารามิเตอร์ SpO₂ NIBP ระบบ ECG ข้างเตียง',
    sol2_title:'การดูแลระบบหายใจ',          sol2_desc:'เครื่องให้ความชื้น High-flow เครื่องช่วยหายใจ ระบบจ่ายออกซิเจน',
    sol3_title:'อุปกรณ์ผู้ป่วยวิกฤต',       sol3_desc:'จอ ICU ปั๊มน้ำเกลือ เครื่องช็อตไฟฟ้าหัวใจ ระบบช่วยชีวิต',
    sol4_title:'วัสดุสิ้นเปลือง',           sol4_desc:'สิ่งสิ้นเปลือง วัสดุใช้แล้วทิ้ง และอุปกรณ์เสริมสำหรับทุกสาขา',
    sol5_title:'โซลูชัน IT สุขภาพ',         sol5_desc:'การรวม EMR สถานีติดตามส่วนกลาง การวิเคราะห์ข้อมูลทางการแพทย์',
    sol6_title:'โครงสร้างพื้นฐานโรงพยาบาล', sol6_desc:'ระบบก๊าซทางการแพทย์ ระบบ Nurse call การติดตั้ง OR และ ICU',

    /* Products */
    prod_eyebrow:  'ผลิตภัณฑ์แนะนำ',
    prod_title:    'อุปกรณ์การแพทย์ที่โดดเด่น',
    prod_lead:     'อุปกรณ์ที่ออกแบบมาอย่างแม่นยำ คัดเลือกจากความน่าเชื่อถือทางคลินิกและความสะดวกในการใช้งาน',
    prod_view_all: 'ดูผลิตภัณฑ์ทั้งหมด',
    prod_learn:    'ดูเพิ่มเติม',
    prod1_cat:'การดูแลระบบหายใจ', prod1_name:'เครื่องให้ความชื้น High Flow',         prod1_desc:'การบำบัดด้วย HFNC ขั้นสูงพร้อมควบคุมอุณหภูมิและ FiO₂ อย่างแม่นยำ',
    prod1_f1:'Flow 2–60 L/min', prod1_f2:'FiO₂ 21–100%', prod1_f3:'Temp 31–37°C',
    prod2_cat:'ติดตามผู้ป่วย',    prod2_name:'เครื่องวัด SpO₂',                      prod2_desc:'การวัดออกซิเจนในเลือดแบบต่อเนื่องพร้อมแสดงคลื่นและสัญญาณเตือนอัจฉริยะ',
    prod2_f1:'ความแม่นยำ ±2%', prod2_f2:'แสดงคลื่น', prod2_f3:'สัญญาณเตือนตั้งค่าได้',
    prod3_cat:'การดูแลวิกฤต',    prod3_name:'Patient Monitor ข้างเตียง',             prod3_desc:'เครื่องติดตาม ICU/หอผู้ป่วยหลายพารามิเตอร์พร้อมเชื่อมต่อสถานีส่วนกลาง',
    prod3_f1:'ECG, SpO₂, NIBP', prod3_f2:'EtCO₂ เพิ่มเติม', prod3_f3:'เครือข่ายไร้สาย',
    prod4_cat:'อายุรกรรมหัวใจ',  prod4_name:'ระบบ ECG 12 ลีด',                      prod4_desc:'ECG วินิจฉัยพร้อมการวิเคราะห์อัตโนมัติและรวมระบบ EMR/HIS',
    prod4_f1:'12 ลีดพร้อมกัน',  prod4_f2:'วิเคราะห์อัตโนมัติ', prod4_f3:'รวม EMR',
    prod5_cat:'ผ่าตัด',          prod5_name:'Tourniquet ระบบนิวเมติก',               prod5_desc:'Tourniquet Dual-port พร้อมสอบเทียบอัตโนมัติและตรวจสอบความปลอดภัย',
    prod5_f1:'50–500 mmHg',    prod5_f2:'Dual-limb',           prod5_f3:'ระบบล็อคปลอดภัย',
    prod6_cat:'การให้น้ำเกลือ',  prod6_name:'ปั๊มน้ำเกลือแบบ Volumetric',            prod6_desc:'การให้น้ำเกลือที่แม่นยำพร้อมคลังยาและระบบลดข้อผิดพลาด',
    prod6_f1:'0.1–1200 mL/hr',  prod6_f2:'คลังยา',             prod6_f3:'Wi-Fi',

    /* Why Choose */
    why_eyebrow:'ทำไมต้อง RD Medcare',
    why_title:  'พันธมิตรอุปกรณ์การแพทย์ที่คุณไว้วางใจ',
    why_lead:   'เราผสมผสานความเชี่ยวชาญทางคลินิก ผลิตภัณฑ์ที่ได้รับการรับรอง และการสนับสนุนทั่วประเทศ เพื่อให้สถานพยาบาลทุกแห่งมีเครื่องมือสำหรับการดูแลผู้ป่วยอย่างยอดเยี่ยม',
    why1_title:'ทีมแพทย์ผู้มีประสบการณ์',          why1_desc:'ทีมของเรามีวิศวกรชีวการแพทย์และผู้เชี่ยวชาญทางคลินิกที่มีความรู้ลึกด้านอุตสาหกรรมการดูแลสุขภาพ',
    why2_title:'อุปกรณ์การแพทย์ที่ได้รับการรับรอง', why2_desc:'ผลิตภัณฑ์ทุกชิ้นมี ISO 13485, CE, FDA และ อย. ไทย เพื่อรับประกันความปลอดภัยและประสิทธิผล',
    why3_title:'การสนับสนุนโรงพยาบาลและคลินิก',    why3_desc:'ผู้จัดการบัญชีและทีมบริการเฉพาะสำหรับโรงพยาบาล คลินิก และสถานพยาบาลผู้ป่วยนอกทั่วประเทศ',
    why4_title:'การบำรุงรักษาและสอบเทียบ',          why4_desc:'บริการ PM และสอบเทียบตามกำหนดการเพื่อให้มั่นใจในประสิทธิภาพของอุปกรณ์อย่างสม่ำเสมอ',
    why5_title:'ฝ่ายเทคนิคตอบสนองรวดเร็ว',         why5_desc:'ศูนย์ช่วยเหลือ 24/7 และตอบสนอง On-site ภายใน 4 ชั่วโมงสำหรับอุปกรณ์วิกฤต',

    /* Partners */
    partners_eyebrow:'เครือข่ายสุขภาพ',
    partners_title:  'ได้รับความไว้วางใจจากโรงพยาบาลชั้นนำของไทย',
    partners_lead:   'ตั้งแต่ศูนย์การแพทย์มหาวิทยาลัยไปจนถึงโรงพยาบาลเอกชน อุปกรณ์ของเราให้บริการทั่วระบบสาธารณสุขไทย',

    /* Services */
    svc_eyebrow:'การบริการและสนับสนุน',
    svc_title:  'การสนับสนุนตลอดวงจรอุปกรณ์',
    svc_lead:   'ตั้งแต่การติดตั้งจนถึงสิ้นอายุการใช้งาน เราให้บริการหลังการขายครบวงจรเพื่อให้อุปกรณ์ทางการแพทย์ทำงานได้สูงสุด',
    svc1_title:'บริการติดตั้ง',      svc1_desc:'การติดตั้งและส่งมอบแบบมืออาชีพพร้อมเอกสารครบถ้วน',
    svc2_title:'การบำรุงรักษาเชิงป้องกัน', svc2_desc:'โปรแกรม PM ตามกำหนดเพื่อรักษาความแม่นยำและการปฏิบัติตามกฎระเบียบ',
    svc3_title:'การฝึกอบรมผลิตภัณฑ์', svc3_desc:'การฝึกอบรมทางคลินิก On-site และทางไกลสำหรับเจ้าหน้าที่การพยาบาลและแพทย์',
    svc4_title:'ฝ่ายเทคนิค',         svc4_desc:'สายด่วน 24/7 พร้อมตอบสนองรวดเร็ว On-site สำหรับปัญหาอุปกรณ์วิกฤต',
    svc5_title:'บริการรับประกัน',    svc5_desc:'การรับประกันครอบคลุมพร้อมอะไหล่ OEM แท้และการตรวจสอบย้อนกลับ',

    /* Contact */
    contact_eyebrow:  'ติดต่อเรา',
    contact_title:    'พูดคุยกับผู้เชี่ยวชาญทางการแพทย์',
    contact_lead:     'บอกเราเกี่ยวกับความต้องการของสถานพยาบาลคุณ และทีมของเราจะแนะนำโซลูชันที่เหมาะสมที่สุด',
    form_title:       'แบบฟอร์มสอบถาม',
    form_name:        'ชื่อ-นามสกุล',
    form_org:         'โรงพยาบาล / องค์กร',
    form_phone:       'หมายเลขโทรศัพท์',
    form_email:       'อีเมล',
    form_interest:    'ผลิตภัณฑ์ที่สนใจ',
    form_msg:         'ข้อความ (ไม่บังคับ)',
    form_submit:      'ส่งข้อความ',
    info_title:       'ข้อมูลติดต่อ',
    info_desc:        'ผู้เชี่ยวชาญของเราตอบกลับภายใน 1 วันทำการ',

    /* CTA */
    cta_title:'พร้อมปรับปรุงผลลัพธ์ผู้ป่วย?',
    cta_desc: 'เชื่อมต่อกับทีมผู้เชี่ยวชาญของเราเพื่อหาโซลูชันอุปกรณ์การแพทย์ที่เหมาะสมสำหรับสถานพยาบาลของคุณ',
    cta_btn1: 'นัดสาธิต',
    cta_btn2: 'ดาวน์โหลดแคตตาล็อก',

    /* Footer */
    footer_tagline: 'พัฒนาการดูแลสุขภาพผ่านอุปกรณ์การแพทย์ที่ได้รับการรับรองและโซลูชันเทคโนโลยี ได้รับความไว้วางใจจากโรงพยาบาลทั่วไทย',
    ft_products:'ผลิตภัณฑ์', ft_company:'บริษัท', ft_support:'บริการ', ft_contact:'ติดต่อ',
    footer_copy:'© 2024 RD Medcare สงวนลิขสิทธิ์',
    footer_privacy:'นโยบายความเป็นส่วนตัว', footer_terms:'ข้อกำหนดการใช้งาน',

    /* About */
    ab_hero_title:'เกี่ยวกับ RD Medcare',
    ab_hero_desc: 'ผู้จัดจำหน่ายอุปกรณ์การแพทย์ที่เชื่อถือได้ มุ่งมั่นพัฒนาผลลัพธ์ด้านสุขภาพทั่วประเทศไทย',
    ab_mission_ey:'พันธกิจ',
    ab_mission_h: 'ปรับปรุงการดูแลสุขภาพผ่านเทคโนโลยี',
    ab_mission_p: 'RD Medcare ก่อตั้งขึ้นเพื่อเชื่อมช่องว่างระหว่างเทคโนโลยีการแพทย์ระดับโลกกับผู้ให้บริการสุขภาพทั่วไทย — ทำให้อุปกรณ์ที่เชื่อถือได้เข้าถึงได้ในทุกโรงพยาบาลและคลินิก',
    ab_vision_h:  'วิสัยทัศน์',
    ab_vision_p:  'เป็นพันธมิตรอุปกรณ์การแพทย์ที่น่าเชื่อถือที่สุดในเอเชียตะวันออกเฉียงใต้ เพื่อผลลัพธ์ผู้ป่วยที่ดีขึ้นผ่านเทคโนโลยีที่เชื่อถือได้',
    ab_team_ey:   'ทีมผู้บริหาร',
    ab_team_h:    'ทีมผู้เชี่ยวชาญทางการแพทย์',
    ab_hist_ey:   'ประวัติบริษัท',
    ab_hist_h:    'เหตุการณ์สำคัญและความสำเร็จ',
    ab_cert_ey:   'การรับรอง',
    ab_cert_h:    'คุณภาพและการปฏิบัติตามมาตรฐาน',

    /* Products page */
    pp_title:'ผลิตภัณฑ์การแพทย์',
    pp_desc: 'อุปกรณ์การแพทย์ที่แม่นยำสำหรับสถานพยาบาลยุคใหม่',
    filt_all:'ทั้งหมด', filt_mon:'ติดตามผู้ป่วย', filt_resp:'ระบบหายใจ',
    filt_card:'หัวใจ', filt_surg:'ผ่าตัด', filt_inf:'น้ำเกลือ',

    /* Solutions page */
    sp_title:'โซลูชันด้านสุขภาพ',
    sp_desc: 'โซลูชันแบบบูรณาการสำหรับทุกสภาพแวดล้อมทางคลินิก',
  }
};

let currentLang = localStorage.getItem('rdm_lang') || 'th';

function t(key) {
  return (translations[currentLang]?.[key]) ?? (translations.en[key] ?? key);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    attr ? el.setAttribute(attr, t(key)) : (el.textContent = t(key));
  });
  document.documentElement.lang = currentLang === 'th' ? 'th' : 'en';
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('rdm_lang', lang);
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
    b.addEventListener('click', () => switchLang(b.dataset.lang));
  });
});
