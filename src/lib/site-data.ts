import { Activity, Bone, HeartPulse, ShieldCheck, Stethoscope, Trophy } from "lucide-react";

export const navItems = [
  ["Home", "/"], ["About", "/about"], ["Expertise", "/expertise"],
  ["Services", "/services"], ["Health Tips", "/health-tips"],
  ["Success Stories", "/success-stories"], ["Locations", "/locations"], ["Contact", "/contact"],
] as const;

export const expertise = [
  { title: "Joint Replacement", text: "Specialized care for damaged or painful joints and joint replacement procedures.", icon: Bone },
  { title: "Rheumatology & Arthritis", text: "Evaluation and management of arthritis and inflammatory joint conditions.", icon: HeartPulse },
  { title: "Trauma & Fracture Care", text: "Comprehensive treatment for fractures, trauma and complex orthopedic injuries.", icon: ShieldCheck },
  { title: "Sports Injury Management", text: "Assessment and treatment of sports-related orthopedic injuries.", icon: Trophy },
  { title: "Complex Trauma", text: "Specialized orthopedic care for complex traumatic injuries.", icon: Activity },
];

export const services = [
  ["01", "Joint Replacement Surgery", "Treatment and surgical care for damaged joints requiring replacement."],
  ["02", "Fracture Treatment", "Diagnosis and treatment of bone fractures and orthopedic trauma."],
  ["03", "Arthroscopy & Spine Care", "Specialized orthopedic care involving minimally invasive procedures and spine-related conditions."],
  ["04", "Sports Injury Management", "Evaluation and treatment of injuries related to sports and physical activity."],
  ["05", "Conservative Management", "Non-surgical approaches for suitable orthopedic conditions."],
  ["06", "Paediatric Trauma Care", "Orthopedic trauma and fracture care for children."],
] as const;

export const articles = [
  { slug: "implant-awareness", category: "Joint Care", title: "Implant Awareness", summary: "A practical overview of orthopedic implants and the questions to discuss with your surgeon.", date: "September 5, 2026" },
  { slug: "implant-removal", category: "Recovery", title: "Implant Removal", summary: "When implant removal may be discussed and why every decision needs an individual assessment.", date: "September 5, 2026" },
  { slug: "myths-and-facts", category: "Patient Education", title: "Myths & Facts", summary: "Clear, careful context for common beliefs about orthopedic treatment and recovery.", date: "September 5, 2026" },
  { slug: "fracture-management", category: "Trauma Care", title: "Fracture Management", summary: "What assessment, stabilization, treatment planning and follow-up can involve.", date: "September 5, 2026" },
  { slug: "healing", category: "Recovery", title: "Healing", summary: "General factors that support recovery after an orthopedic injury or procedure.", date: "September 5, 2026" },
  { slug: "nutrition", category: "Wellbeing", title: "Nutrition", summary: "A balanced approach to nutrition while supporting bone, muscle and overall recovery.", date: "September 5, 2026" },
] as const;

export const articleCopy: Record<string, { intro: string; sections: Array<[string, string]> }> = {
  "implant-awareness": { intro: "Orthopedic implants may be used to support, stabilize or replace damaged bone and joints. The type of implant and whether one is appropriate depends on the condition, overall health and treatment goals.", sections: [["Understanding your options", "Ask why an implant is being considered, what alternatives may be suitable, and what recovery usually involves. Implant materials and designs vary, so recommendations should be individualized."], ["Before treatment", "Share your medical history, medicines, allergies and previous procedures. Follow the specific preparation advice given by your treating team."], ["After treatment", "Attend planned reviews and seek medical advice if you notice unexpected pain, swelling, fever, wound changes or reduced function."]] },
  "implant-removal": { intro: "Many orthopedic implants are designed to remain in place. Removal is not routine for everyone and should only be considered after clinical assessment.", sections: [["Why removal may be discussed", "Persistent symptoms, infection, implant-related irritation or other clinical concerns may prompt a discussion. Symptoms do not automatically mean removal is needed."], ["The decision", "Your surgeon may consider imaging, bone healing, implant position, age, activity and the risks of another procedure."], ["Recovery planning", "Recovery after removal varies. Follow instructions about wound care, activity, medicines and review appointments."]] },
  "myths-and-facts": { intro: "Orthopedic concerns often come with assumptions about scans, surgery and recovery. A clinical evaluation is the safest way to understand what applies to you.", sections: [["Pain does not always identify the cause", "Similar symptoms can arise from different conditions. Examination and appropriate investigations help guide diagnosis."], ["Surgery is not always the first step", "Suitable conditions may respond to activity modification, medicines, guided exercise or other conservative care."], ["Recovery is individual", "Timelines depend on the condition, treatment and overall health. Compare progress with your own care plan rather than someone else's experience."]] },
  "fracture-management": { intro: "Fractures range from simple, stable injuries to complex trauma. Early assessment helps determine the location, pattern and safest treatment approach.", sections: [["Assessment", "Evaluation may include examination and imaging. Emergency symptoms or significant injury require prompt medical attention."], ["Treatment", "Depending on the fracture, care may involve support, casting, reduction, surgery or a combination of approaches."], ["Follow-up", "Repeat assessment can monitor alignment and healing. Rehabilitation may be recommended to restore movement and strength."]] },
  healing: { intro: "Healing after an orthopedic injury or procedure is a gradual process influenced by the condition, treatment, general health and adherence to the care plan.", sections: [["Protect the healing area", "Follow guidance about weight-bearing, supports and activity. Doing too much too soon can interfere with recovery."], ["Rebuild progressively", "When advised, gradual movement and strengthening can support mobility and function."], ["Know when to seek advice", "Unexpected worsening pain, swelling, fever, wound changes, numbness or loss of function should be discussed promptly with a clinician."]] },
  nutrition: { intro: "Balanced nutrition supports general health during recovery. It complements—rather than replaces—medical treatment and rehabilitation.", sections: [["A varied plate", "Include adequate protein and a range of vegetables, fruit, whole grains and other foods suited to your health needs."], ["Bone health", "Calcium and vitamin D are important, but supplements are not appropriate for everyone. Discuss them with a clinician before starting."], ["Individual needs", "Medical conditions, medicines and dietary restrictions can change nutritional needs. Seek personalized advice where needed."]] },
};

export const locations = [
  { name: "Dr. Devender Reddy Super Speciality Hospital", city: "Nirmal, Telangana", label: "Consultation Location", map: "https://google.com/maps/search/?api=1&query=Dr+Devender+Reddy+Hospital&query_place_id=ChIJoa4hrN-NzTsRvdqApS9CZmY" },
  { name: "S.S Children's Hospital", city: "Khanapur, Telangana", label: "Visiting Consultant", map: "https://www.google.com/maps/search/?api=1&query=SS+children+hospital&query_place_id=ChIJR3i-ZQCDzTsRTMXHtV-at7Q" },
] as const;

export const serviceIcon = Stethoscope;