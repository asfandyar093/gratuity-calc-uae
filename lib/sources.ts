// Official sources cited across the site. Every URL here was opened and checked
// on the review date below. Keep this list as the single place to update links.
export const LAST_REVIEWED = '2026-10-04'
export const LAST_REVIEWED_LABEL = '4 October 2026'
export const LAST_REVIEWED_LABEL_AR = '4 أكتوبر 2026'

export const MOHRE_DOMESTIC_DUES_URL =
  'https://mohre.gov.ae/en/services/%D8%A7%D8%AD%D8%AA%D8%B3%D8%A7%D8%A8-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%82%D8%A7%D8%AA-%D9%84%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9'

export type Source = { label: string; labelAr?: string; href: string }

export const SOURCES = {
  labourLaw: {
    label: 'Federal Decree-Law No. 33 of 2021 (UAE Labour Law), Articles 29, 43, 51, 53 and 54 — UAE Legislation portal',
    labelAr: 'المرسوم بقانون اتحادي رقم 33 لسنة 2021 بشأن تنظيم علاقات العمل — منصة التشريعات الإماراتية',
    href: 'https://uaelegislation.gov.ae/en/legislations/1541',
  },
  uaeEosb: {
    label: 'u.ae — End of service benefits for workers in the private sector',
    labelAr: 'البوابة الرسمية u.ae — مكافأة نهاية الخدمة في القطاع الخاص',
    href: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector',
  },
  domesticLaw: {
    label: 'Federal Decree-Law No. 9 of 2022 on Domestic Workers (Article 22, End-of-Service Gratuity; Article 31, repeal of Law No. 10 of 2017) — UAE Legislation portal',
    labelAr: 'المرسوم بقانون اتحادي رقم 9 لسنة 2022 بشأن العمالة المساعدة (المادة 22 مكافأة نهاية الخدمة، والمادة 31 الإلغاء) — منصة التشريعات الإماراتية',
    href: 'https://uaelegislation.gov.ae/en/legislations/1593',
  },
  domesticRegs: {
    label: 'Cabinet Resolution No. 106 of 2022 — Executive Regulations of the Domestic Workers Decree-Law',
    labelAr: 'قرار مجلس الوزراء رقم 106 لسنة 2022 بشأن اللائحة التنفيذية لمرسوم العمالة المساعدة',
    href: 'https://uaelegislation.gov.ae/en/legislations/1620',
  },
  uaeDomestic: {
    label: 'u.ae — Domestic workers (rights and entitlements)',
    labelAr: 'البوابة الرسمية u.ae — العمالة المساعدة',
    href: 'https://u.ae/en/information-and-services/jobs/Workplace-regulations/domestic-helpers',
  },
  mohreServices: {
    label: 'MOHRE — Domestic Workers Dues Calculator service (helpline 600590000)',
    labelAr: 'وزارة الموارد البشرية والتوطين — خدمة احتساب المستحقات للعمالة المساعدة (600590000)',
    href: MOHRE_DOMESTIC_DUES_URL,
  },
  adgmFaq: {
    label: 'ADGM Employment Affairs Office — FAQs on the ADGM Employment Regulations 2024 (section 61)',
    href: 'https://assets.adgm.com/download/assets/ADGM+EAO+-+FAQs+-+ER+2024+(Feb+2025).pdf/eed10768edbe11ef9eaee2d468ad6a26',
  },
  adgmGuidance: {
    label: 'ADGM Employment Affairs Office — Guidance on the ADGM Employment Regulations 2024',
    href: 'https://assets.adgm.com/download/assets/ADGM+EAO+-+Guidance+-+ER+2024+%28Feb+2025%29.pdf/ee708fc8edbe11efbfef7630b32848cb',
  },
  dmccEosb: {
    label: 'DMCC — End of Service Benefit (EOSB) Calculation guide, Version 3 (12 December 2022)',
    href: 'https://dmcc.ae/hubfs/6%20End_of_Service_Benefit_EOSB_Calculation-English-V3.pdf',
  },
  dewsGuide: {
    label: 'DIFC — DEWS Employer Executive Guide (minimum contributions 5.83% / 8.33% of basic salary)',
    href: 'https://edge.sitecorecloud.io/dubaiintern0078-difcexperie96c5-production-3253/media/project/difcexperiences/difc/difcwebsite/documents/business-section-documents/dews-guide.pdf',
  },
  dewsLaunch: {
    label: 'Dubai Media Office — DIFC unveils the Employee Workplace Savings Plan (January 2020)',
    href: 'https://mediaoffice.ae/en/news/2020/jan/21-01/difc-unveils-new-progressive-employee-workplace-savings-plan',
  },
} satisfies Record<string, Source>
