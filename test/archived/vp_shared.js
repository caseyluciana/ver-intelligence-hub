// ══════════════════════════════════════════════════════════════════
// VER VENDOR PLATFORM — SHARED DATA ENGINE
// Google Sheets published CSV URLs — replace with your actual URLs
// ══════════════════════════════════════════════════════════════════

const VP = {

  // ── CONFIGURATION ──────────────────────────────────────────────
  // Replace these with your published Google Sheet CSV URLs
  // File → Share → Publish to web → Select tab → CSV → Copy link
  // ── DATA FILE PATHS ────────────────────────────────────────────
  // CSV files live in the /data folder of your GitHub repo.
  // To update data: edit your Google Sheet → download as CSV →
  // drop into the /data folder → commit to GitHub.
  // Paths are relative — work automatically on GitHub Pages.
  // Raw GitHub URL pattern (if needed externally):
  //   https://raw.githubusercontent.com/caseyluciana/ver-intelligence-hub/main/data/vendors.csv
  SHEETS: {
    vendors:     './data/vendors.csv',
    engagements: './data/engagements.csv',
    risk:        './data/risk_scores.csv',
    rate_cards:  './data/rate_cards.csv',
    intake:      './data/intake.csv',
  },

  SAVE_KEY: 'verVendorPlatform_v1',

  // ── CATEGORY DEFINITIONS ───────────────────────────────────────
  CATEGORIES: [
    'Software / SaaS',
    'Contingent Workforce',
    'Hardware & Infrastructure',
    'Professional Services',
    'Cloud & Managed Services',
  ],

  // ── TIER DEFINITIONS ───────────────────────────────────────────
  TIERS: {
    1: { label: 'Tier 1 — Strategic',   color: '#0F1E3C', bg: '#EFF6FF', desc: 'High spend, high dependency, executive relationship required' },
    2: { label: 'Tier 2 — Established', color: '#0D9488', bg: '#F0FDF9', desc: 'Active managed engagement, recurring spend' },
    3: { label: 'Tier 3 — Specialized', color: '#D97706', bg: '#FFFBEB', desc: 'Project-based, niche, or lower spend engagement' },
  },

  // ── RISK BAND DEFINITIONS ──────────────────────────────────────
  RISK: {
    low:    { min: 0,  max: 33, label: 'Low Risk',    color: '#059669', bg: '#D1FAE5' },
    medium: { min: 34, max: 66, label: 'Medium Risk', color: '#D97706', bg: '#FEF3C7' },
    high:   { min: 67, max: 100,label: 'High Risk',   color: '#DC2626', bg: '#FEE2E2' },
  },

  // ── CAPABILITY TAGS ────────────────────────────────────────────
  CAPABILITY_TAGS: [
    'Application Development', 'Application Maintenance', 'Cloud Infrastructure',
    'Data Engineering', 'AI / ML', 'Security', 'Staff Augmentation',
    'ERP / Workday', 'Service Desk', 'Hardware Supply', 'Consulting / Advisory',
    'QA & Testing', 'DevOps', 'Platform Engineering', 'Analytics & BI',
    'Managed Services', 'Network & AV', 'Identity & Access',
  ],

  // ── SAMPLE DATA (used when Google Sheets not yet configured) ───
  SAMPLE_VENDORS: [
  { id:'V001', name:'NTT Data', category:'Professional Services', tier:1, status:'Active', region:'AMER|APAC|EMEA', annual_spend:'$22.8M', renewal_date:'2028-09-01', primary_contact:'VER Team', supplier_address:'Suite 600, 7950 Jones Branch Drive, McLean, VA 22102', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Large-scale AMS and Application Development engagement across DET pillars. Strategic partner with 180-day notice period.', sla_score:97, concentration_risk:85, financial_risk:15, delivery_risk:20, compliance_risk:10, risk_score:40, capabilities:['Application Development','Application Maintenance','Staff Augmentation','DevOps','Platform Engineering'], domain:'nttdata.com', notes:'AMS decentralization underway. AD restructure complete Apr 2026. ~140 resources across 24 POs.' },
  { id:'V002', name:'Cognizant', category:'Professional Services', tier:1, status:'Active', region:'AMER|APAC|EMEA', annual_spend:'$9.5M', renewal_date:'2027-02-14', primary_contact:'VER Team', supplier_address:'300 Frank W. Burr Blvd, Teaneck, NJ 07666', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Workday ADAMS Enterprise Systems and Financials AMS engagements. Yr3 ES and Yr2 FINS.', sla_score:99, concentration_risk:60, financial_risk:20, delivery_risk:15, compliance_risk:12, risk_score:31, capabilities:['ERP / Workday','Application Maintenance','Staff Augmentation','Analytics & BI'], domain:'cognizant.com', notes:'ES Yr3 final year. FINS Yr2. Both meeting/exceeding SLA. Renewal decision Q1 FY28.' },
  { id:'V004', name:'Workday', category:'Software / SaaS', tier:1, status:'Active', region:'Global', annual_spend:'$23.7M', renewal_date:'2026-11-30', primary_contact:'VER Team', supplier_address:'6110 Stoneridge Mall Road, Pleasanton, CA 94588', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Core HCM, Financials, and enterprise platform license. Highest spend vendor in portfolio.', sla_score:98, concentration_risk:90, financial_risk:10, delivery_risk:10, compliance_risk:8, risk_score:38, capabilities:['ERP / Workday','Analytics & BI','Identity & Access'], domain:'workday.com', notes:'Renewal due Nov 2026. High concentration risk — mission-critical. Negotiations due Q3 FY27.' },
  { id:'V005', name:'AWS', category:'Cloud & Managed Services', tier:1, status:'Active', region:'Global', annual_spend:'$17.2M', renewal_date:'2027-03-01', primary_contact:'VER Team', supplier_address:'410 Terry Avenue North, Seattle, WA 98109', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Cloud infrastructure and managed services via Enterprise Discount Program across all DET engineering.', sla_score:99, concentration_risk:80, financial_risk:8, delivery_risk:10, compliance_risk:12, risk_score:34, capabilities:['Cloud Infrastructure','DevOps','Security','Managed Services','AI / ML'], domain:'aws.amazon.com', notes:'EDP renewal tracking. Usage within committed spend envelope.' },
  { id:'V013', name:'Microsoft', category:'Software / SaaS', tier:1, status:'Active', region:'Global', annual_spend:'$1.4M', renewal_date:'2026-06-30', primary_contact:'VER Team', supplier_address:'One Microsoft Way, Redmond, WA 98052', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Microsoft 365, Azure dev tooling, and enterprise licensing.', sla_score:98, concentration_risk:50, financial_risk:10, delivery_risk:8, compliance_risk:10, risk_score:23, capabilities:['Cloud Infrastructure','DevOps','Platform Engineering','Analytics & BI'], domain:'microsoft.com', notes:'M365 and Azure dev. Renewal Jun 2026.' },
  { id:'V033', name:'McKinsey & Company', category:'Professional Services', tier:1, status:'Active', region:'Global', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'55 East 52nd Street, New York, NY 10055', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Strategic management consulting. Director-managed executive relationship.', sla_score:93, concentration_risk:25, financial_risk:20, delivery_risk:20, compliance_risk:15, risk_score:21, capabilities:['Consulting / Advisory'], domain:'mckinsey.com', notes:'Director-managed. Executive-level strategy engagements only.' },
  { id:'V003', name:'Tech Mahindra', category:'Professional Services', tier:2, status:'Active', region:'Global', annual_spend:'$6.5M', renewal_date:'2027-04-30', primary_contact:'VER Team', supplier_address:'2 Tower Center Blvd, Suite 2200, East Brunswick, NJ 08816', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Techforce Service Desk and On-Site Services. 3 SLA metrics currently below target.', sla_score:82, concentration_risk:50, financial_risk:30, delivery_risk:68, compliance_risk:55, risk_score:52, capabilities:['Service Desk','Managed Services','Staff Augmentation','Network & AV'], domain:'techmahindra.com', notes:'DOWNGRADED T1→T2. 3 SLA metrics below target: L2 Escalation, Misroutes, Basecamp Closure Rate. Active performance remediation plan in place.' },
  { id:'V006', name:'IBM', category:'Professional Services', tier:2, status:'Active', region:'AMER|EMEA', annual_spend:'$14.3M', renewal_date:'2026-08-01', primary_contact:'VER Team', supplier_address:'1 New Orchard Road, Armonk, NY 10504', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Enterprise application and data services. Also provides video streaming platform.', sla_score:91, concentration_risk:55, financial_risk:35, delivery_risk:40, compliance_risk:30, risk_score:43, capabilities:['Application Development','Data Engineering','Security','Analytics & BI','Managed Services'], domain:'ibm.com', notes:'Renewal Aug 2026 — active review with Procurement.' },
  { id:'V008', name:'Deloitte', category:'Professional Services', tier:2, status:'Active', region:'AMER|EMEA', annual_spend:'$9.1M', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'30 Rockefeller Plaza, New York, NY 10112', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Advisory and implementation services across DET programs. Active SOW supplier in Fieldglass.', sla_score:94, concentration_risk:40, financial_risk:25, delivery_risk:30, compliance_risk:20, risk_score:31, capabilities:['Consulting / Advisory','Application Development','Data Engineering','QA & Testing'], domain:'deloitte.com', notes:'Renewal Dec 2026. Performing to scope.' },
  { id:'V009', name:'BCG', category:'Professional Services', tier:2, status:'Active', region:'AMER', annual_spend:'$6.0M', renewal_date:'2026-06-30', primary_contact:'VER Team', supplier_address:'200 Pier 4 Blvd, Boston, MA 02210', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Strategic consulting engagement — active escalation in progress.', sla_score:78, concentration_risk:30, financial_risk:40, delivery_risk:70, compliance_risk:50, risk_score:47, capabilities:['Consulting / Advisory'], domain:'bcg.com', notes:'Active escalation. VER Director engaged with business owner. Renewal risk.' },
  { id:'V007', name:'Google Cloud', category:'Cloud & Managed Services', tier:2, status:'Active', region:'Global', annual_spend:'$14.0M', renewal_date:'2027-01-15', primary_contact:'VER Team', supplier_address:'1600 Amphitheatre Parkway, Mountain View, CA 94043', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Google Cloud Platform, Workspace, and AI/Gemini services across DET engineering.', sla_score:99, concentration_risk:65, financial_risk:10, delivery_risk:12, compliance_risk:10, risk_score:30, capabilities:['Cloud Infrastructure','Analytics & BI','AI / ML','Platform Engineering'], domain:'cloud.google.com', notes:'GCP and Workspace nominal. Gemini AI usage growing.' },
  { id:'V066', name:'Microsoft Azure', category:'Cloud & Managed Services', tier:2, status:'Active', region:'Global', annual_spend:'$0', renewal_date:'2026-09-30', primary_contact:'VER Team', supplier_address:'One Microsoft Way, Redmond, WA 98052', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Azure cloud computing, AI, and managed services. Alongside M365.', sla_score:97, concentration_risk:55, financial_risk:10, delivery_risk:10, compliance_risk:10, risk_score:26, capabilities:['Cloud Infrastructure','AI / ML','DevOps','Security','Managed Services'], domain:'azure.microsoft.com', notes:'Azure dev and AI workloads. Often paired with M365.' },
  { id:'V068', name:'Verizon Business', category:'Cloud & Managed Services', tier:2, status:'Active', region:'AMER|EMEA', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'1095 Avenue of the Americas, New York, NY 10036', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Network, security, and managed communication services.', sla_score:88, concentration_risk:40, financial_risk:20, delivery_risk:22, compliance_risk:18, risk_score:27, capabilities:['Network & AV','Security','Managed Services','Cloud Infrastructure'], domain:'verizonbusiness.com', notes:'Enterprise network and connectivity services.' },
  { id:'V014', name:'ServiceNow', category:'Software / SaaS', tier:2, status:'Active', region:'Global', annual_spend:'$0.9M', renewal_date:'2026-12-01', primary_contact:'VER Team', supplier_address:'2225 Lawson Lane, Santa Clara, CA 95054', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'ITSM and workflow automation platform supporting DET operations.', sla_score:96, concentration_risk:35, financial_risk:18, delivery_risk:15, compliance_risk:12, risk_score:22, capabilities:['Platform Engineering','Managed Services'], domain:'servicenow.com', notes:'ITSM for DET operations workflows.' },
  { id:'V015', name:'Splunk', category:'Software / SaaS', tier:2, status:'Active', region:'AMER', annual_spend:'$0.7M', renewal_date:'2027-03-15', primary_contact:'VER Team', supplier_address:'270 Brannan Street, San Francisco, CA 94107', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Security information and event management (SIEM) platform. Active SOW supplier.', sla_score:95, concentration_risk:30, financial_risk:18, delivery_risk:12, compliance_risk:8, risk_score:19, capabilities:['Security','Analytics & BI','DevOps'], domain:'splunk.com', notes:'SIEM and log analytics. Cisco acquisition — monitor terms.' },
  { id:'V016', name:'Tableau', category:'Software / SaaS', tier:2, status:'Active', region:'Global', annual_spend:'$0.5M', renewal_date:'2026-09-01', primary_contact:'VER Team', supplier_address:'837 N 34th Street, Seattle, WA 98103', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Business intelligence and data visualization platform (Salesforce-owned).', sla_score:97, concentration_risk:25, financial_risk:12, delivery_risk:10, compliance_risk:8, risk_score:15, capabilities:['Analytics & BI','Data Engineering'], domain:'tableau.com', notes:'Enterprise BI platform for DET reporting.' },
  { id:'V017', name:'Okta', category:'Software / SaaS', tier:2, status:'Active', region:'Global', annual_spend:'$0.8M', renewal_date:'2026-11-30', primary_contact:'VER Team', supplier_address:'100 First Street, Suite 600, San Francisco, CA 94105', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Identity and access management platform. Active SOW and Professional Services.', sla_score:98, concentration_risk:40, financial_risk:15, delivery_risk:10, compliance_risk:10, risk_score:22, capabilities:['Identity & Access','Security'], domain:'okta.com', notes:'SSO and MFA for DET workforce. FY27 renewal approved $1.27M.' },
  { id:'V044', name:'Insight Global', category:'Contingent Workforce', tier:2, status:'Active', region:'AMER', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'4170 Ashford Dunwoody Road NE, Suite 250, Atlanta, GA 30319', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'IT staffing and managed services. AMER Elite Partner with approved rate card. WBE certified.', sla_score:87, concentration_risk:35, financial_risk:22, delivery_risk:28, compliance_risk:18, risk_score:28, capabilities:['Staff Augmentation','Application Development','DevOps','QA & Testing','Data Engineering'], domain:'insightglobal.com', notes:'AMER Elite Partner with negotiated rate card. WBE certified. Poland benchmark published.' },
  { id:'V045', name:'TEKsystems', category:'Contingent Workforce', tier:2, status:'Active', region:'AMER', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'7437 Race Road, Hanover, MD 21076', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'IT staffing and managed services. AMER Elite Partner. MBE (LGBTQ+) certified.', sla_score:87, concentration_risk:35, financial_risk:22, delivery_risk:28, compliance_risk:18, risk_score:28, capabilities:['Staff Augmentation','Application Development','DevOps','QA & Testing'], domain:'teksystems.com', notes:'AMER Elite Partner. MBE (LGBTQ+) certified.' },
  { id:'V046', name:'Adecco', category:'Contingent Workforce', tier:2, status:'Active', region:'AMER', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'10151 Deerwood Park Blvd, Jacksonville, FL 32256', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'General staffing and workforce solutions. AMER Elite Partner.', sla_score:83, concentration_risk:32, financial_risk:22, delivery_risk:26, compliance_risk:18, risk_score:26, capabilities:['Staff Augmentation'], domain:'adecco.com', notes:'AMER Elite Partner. General staffing.' },
  { id:'V047', name:'BCForward', category:'Contingent Workforce', tier:2, status:'Active', region:'AMER', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'8888 Keystone Crossing, Suite 1300, Indianapolis, IN 46240', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'IT staffing firm. AMER Elite Partner. MBE certified.', sla_score:84, concentration_risk:30, financial_risk:22, delivery_risk:26, compliance_risk:18, risk_score:25, capabilities:['Staff Augmentation','Application Development'], domain:'bcforward.com', notes:'AMER Elite Partner. MBE certified.' },
  { id:'V069', name:'Dell Technologies', category:'Hardware & Infrastructure', tier:2, status:'Active', region:'Global', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'One Dell Way, Round Rock, TX 78682', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Enterprise hardware, servers, storage. Active Coupa spend confirmed (Dell + Dell Financial Services).', sla_score:92, concentration_risk:40, financial_risk:15, delivery_risk:18, compliance_risk:12, risk_score:24, capabilities:['Hardware Supply','Network & AV','Managed Services'], domain:'dell.com', notes:'Coupa spend confirmed. Finance lease + direct purchase. Preferred hardware vendor.' },
  { id:'V070', name:'HP Inc.', category:'Hardware & Infrastructure', tier:2, status:'Active', region:'Global', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'1501 Page Mill Road, Palo Alto, CA 94304', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Workstations, laptops, and enterprise hardware. Active Coupa spend confirmed.', sla_score:90, concentration_risk:35, financial_risk:15, delivery_risk:18, compliance_risk:12, risk_score:22, capabilities:['Hardware Supply'], domain:'hp.com', notes:'Standard laptop supplier. Coupa spend confirmed (HP ZBook).' },
  { id:'V071', name:'Insight Direct', category:'Hardware & Infrastructure', tier:2, status:'Active', region:'AMER|EMEA', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'6820 S Harl Avenue, Tempe, AZ 85283', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'IT products and hardware. Highest hardware spend in Coupa. Laptops, mobiles, peripherals.', sla_score:88, concentration_risk:30, financial_risk:15, delivery_risk:18, compliance_risk:12, risk_score:21, capabilities:['Hardware Supply','Managed Services'], domain:'insight.com', notes:'Largest hardware spend in Coupa. Multi-vendor procurement. AMER and Canada active.' },
  { id:'V072', name:'Cisco', category:'Hardware & Infrastructure', tier:2, status:'Active', region:'Global', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'170 West Tasman Drive, San Jose, CA 95134', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Networking, security, and collaboration infrastructure.', sla_score:92, concentration_risk:45, financial_risk:15, delivery_risk:18, compliance_risk:12, risk_score:26, capabilities:['Network & AV','Security','Cloud Infrastructure'], domain:'cisco.com', notes:'Enterprise networking and Webex.' },
  { id:'V010', name:'Gartner', category:'Software / SaaS', tier:3, status:'Active', region:'AMER', annual_spend:'$1.2M', renewal_date:'2026-09-30', primary_contact:'VER Team', supplier_address:'56 Top Gallant Road, Stamford, CT 06902', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Research, advisory, and analyst subscription services.', sla_score:95, concentration_risk:15, financial_risk:20, delivery_risk:18, compliance_risk:15, risk_score:17, capabilities:['Consulting / Advisory','Analytics & BI'], domain:'gartner.com', notes:'Review seat count before renewal.' },
  { id:'V011', name:'Conviva', category:'Software / SaaS', tier:3, status:'Active', region:'AMER', annual_spend:'$0.8M', renewal_date:'2026-10-15', primary_contact:'VER Team', supplier_address:'989 E Hillsdale Blvd, Foster City, CA 94404', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Video intelligence and streaming analytics platform.', sla_score:93, concentration_risk:20, financial_risk:22, delivery_risk:25, compliance_risk:18, risk_score:22, capabilities:['Analytics & BI','Platform Engineering'], domain:'conviva.com', notes:'Usage at 84% of cap. Monitor monthly.' },
  { id:'V012', name:'New Relic', category:'Software / SaaS', tier:3, status:'Active', region:'AMER', annual_spend:'$0.6M', renewal_date:'2027-02-01', primary_contact:'VER Team', supplier_address:'188 Spear Street, Suite 1200, San Francisco, CA 94105', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Observability and performance monitoring platform.', sla_score:97, concentration_risk:15, financial_risk:15, delivery_risk:12, compliance_risk:10, risk_score:13, capabilities:['DevOps','Platform Engineering'], domain:'newrelic.com', notes:'Nominal. No concerns.' },
  { id:'V099', name:'Abakus Personal', category:'Contingent Workforce', tier:3, status:'Active', region:'EMEA', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Staff Augmentation', sla_score:90, concentration_risk:75, financial_risk:18, delivery_risk:16, compliance_risk:20, risk_score:38, capabilities:['12'], domain:'', notes:'Staff Augmentation' },
  { id:'V100', name:'Academic Work', category:'Contingent Workforce', tier:3, status:'Active', region:'EMEA', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Staff Augmentation', sla_score:90, concentration_risk:75, financial_risk:18, delivery_risk:16, compliance_risk:20, risk_score:38, capabilities:['12'], domain:'', notes:'Staff Augmentation' },
  { id:'V101', name:'Barden', category:'Contingent Workforce', tier:3, status:'Active', region:'EMEA', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Staff Augmentation', sla_score:90, concentration_risk:75, financial_risk:18, delivery_risk:16, compliance_risk:20, risk_score:38, capabilities:['12'], domain:'', notes:'Staff Augmentation' },
  { id:'V116', name:'Kelly Services (SGD)', category:'Contingent Workforce', tier:3, status:'Active', region:'APAC', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Staff Augmentation', sla_score:90, concentration_risk:75, financial_risk:18, delivery_risk:16, compliance_risk:20, risk_score:38, capabilities:['12'], domain:'kellyservices.com', notes:'Staff Augmentation' },
  { id:'V117', name:'Peoplebank (SGD)', category:'Contingent Workforce', tier:3, status:'Active', region:'APAC', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Staff Augmentation', sla_score:90, concentration_risk:75, financial_risk:18, delivery_risk:16, compliance_risk:20, risk_score:38, capabilities:['12'], domain:'peoplebank.com', notes:'Staff Augmentation' },
  { id:'V118', name:'Charterhouse', category:'Contingent Workforce', tier:3, status:'Active', region:'APAC', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Staff Augmentation', sla_score:90, concentration_risk:75, financial_risk:18, delivery_risk:16, compliance_risk:20, risk_score:38, capabilities:['12'], domain:'', notes:'Staff Augmentation' },
  { id:'V097', name:'Matata Solutions (Hakuna Studios)', category:'Professional Services', tier:3, status:'Active', region:'LATAM', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Application Development|Consulting / Advisory', sla_score:90, concentration_risk:78, financial_risk:20, delivery_risk:18, compliance_risk:22, risk_score:40, capabilities:['15'], domain:'', notes:'Application Development|Consulting / Advisory' },
  { id:'V098', name:'Page Interim', category:'Contingent Workforce', tier:3, status:'Active', region:'LATAM', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Staff Augmentation', sla_score:90, concentration_risk:75, financial_risk:18, delivery_risk:16, compliance_risk:20, risk_score:38, capabilities:['12'], domain:'', notes:'Staff Augmentation' },
  { id:'V161', name:'Tata Consultancy Services Limited', category:'Professional Services', tier:3, status:'Active', region:'Global|LATAM', annual_spend:'$0', renewal_date:'2026-12-31', primary_contact:'VER Team', supplier_address:'See vendor website', supplier_notice:'Same as principal', supplier_rep_name:'VER Team', supplier_rep_email:'ver@salesforce.com', description:'Professional Services vendor. StaffUp approved across Global|LATAM.', sla_score:78, concentration_risk:15, financial_risk:18, delivery_risk:20, compliance_risk:15, risk_score:17, capabilities:['Consulting / Advisory'], domain:'tcs.com', notes:'StaffUp approved supplier. Source: LATAM Agency Temp, Profile Worker Suppliers.' }
  ],

  // ── UTILITY FUNCTIONS ──────────────────────────────────────────
  riskBand(score) {
    if (score <= 33) return this.RISK.low;
    if (score <= 66) return this.RISK.medium;
    return this.RISK.high;
  },

  tierInfo(tier) {
    return this.TIERS[tier] || this.TIERS[3];
  },

  formatSpend(val) {
    if (!val) return '—';
    return val.toString().startsWith('$') ? val : '$' + val;
  },

  statusBadge(status) {
    const map = {
      'Active':     { bg:'#D1FAE5', color:'#065F46', dot:'#059669' },
      'Escalation': { bg:'#FEE2E2', color:'#7F1D1D', dot:'#DC2626' },
      'Under Review':{ bg:'#FEF3C7', color:'#78350F', dot:'#D97706' },
      'Inactive':   { bg:'#F3F4F6', color:'#374151', dot:'#9CA3AF' },
      'Transitioning':{ bg:'#EDE9FE', color:'#4C1D95', dot:'#7C3AED' },
    };

// ══════════════════════════════════════════════════════════════════
// VER LOGO ENGINE
// Priority: /logos folder → Clearbit API → Favicon → Initials
// ══════════════════════════════════════════════════════════════════
const VPLogo = {

  // Cache to avoid re-fetching
  _cache: {},

  // Generate styled initials fallback
  initials(name) {
    const words = (name || '').replace(/[^a-zA-Z\s]/g,'').trim().split(/\s+/);
    if (words.length === 1) return words[0].slice(0,2).toUpperCase();
    return (words[0][0] + words[words.length-1][0]).toUpperCase();
  },

  // Color from name (deterministic)
  color(name) {
    const colors = [
      '#0F1E3C','#0D9488','#7C3AED','#D97706',
      '#059669','#DC2626','#2563EB','#DB2777'
    ];
    let hash = 0;
    for (let i = 0; i < (name||'').length; i++) {
      hash = (name.charCodeAt(i) + ((hash << 5) - hash)) | 0;
    }
    return colors[Math.abs(hash) % colors.length];
  },

  // Render logo into an img or div element
  async render(name, domain, container, size=40) {
    if (!container) return;
    const cacheKey = domain || name;

    if (this._cache[cacheKey]) {
      container.innerHTML = this._cache[cacheKey];
      return;
    }

    const initHtml = this._initialsHtml(name, size);

    if (!domain) {
      container.innerHTML = initHtml;
      this._cache[cacheKey] = initHtml;
      return;
    }

    // Try sources in priority order
    const sources = [
      `./logos/${domain}.png`,
      `./logos/${domain}.svg`,
      `./logos/${domain}.jpg`,
      `https://logo.clearbit.com/${domain}`,
      `https://www.${domain}/favicon.ico`,
    ];

    for (const src of sources) {
      const ok = await this._tryImg(src, size);
      if (ok) {
        const html = this._imgHtml(src, name, size);
        container.innerHTML = html;
        this._cache[cacheKey] = html;
        return;
      }
    }

    // Final fallback — initials
    container.innerHTML = initHtml;
    this._cache[cacheKey] = initHtml;
  },

  // Test if image loads
  _tryImg(src, size) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload  = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
      // Timeout after 3s
      setTimeout(() => resolve(false), 3000);
    });
  },

  _imgHtml(src, name, size) {
    return `<img src="${src}" alt="${name}" 
      style="width:${size}px;height:${size}px;object-fit:contain;border-radius:6px;background:#fff;padding:2px;"
      onerror="this.parentElement.innerHTML=VPLogo._initialsHtml('${name.replace(/'/g,"\\'")}',${size})">`;
  },

  _initialsHtml(name, size) {
    const bg    = this.color(name);
    const init  = this.initials(name);
    const fs    = size <= 32 ? Math.round(size*0.38) : Math.round(size*0.35);
    return `<div style="width:${size}px;height:${size}px;border-radius:8px;
      background:${bg};display:flex;align-items:center;justify-content:center;
      flex-shrink:0;font-size:${fs}px;font-weight:800;color:#fff;font-family:Arial,sans-serif;
      letter-spacing:-0.5px;">${init}</div>`;
  },

  // Render synchronously with initials (no async needed for fast render)
  renderSync(name, size=40) {
    return this._initialsHtml(name, size);
  },

  // Upgrade initials to real logo after render
  async upgrade(name, domain, containerId, size=40) {
    const container = document.getElementById(containerId);
    if (!container) return;
    await this.render(name, domain, container, size);
  }
};

    const s = map[status] || map['Active'];
    return `<span style="display:inline-flex;align-items:center;gap:4px;font-size:7pt;font-weight:700;padding:2px 8px;border-radius:10px;background:${s.bg};color:${s.color}"><span style="width:6px;height:6px;border-radius:50%;background:${s.dot};flex-shrink:0"></span>${status}</span>`;
  },

  tierBadge(tier) {
    const t = this.TIERS[tier] || this.TIERS[3];
    return `<span style="font-size:7pt;font-weight:700;padding:2px 8px;border-radius:10px;background:${t.bg};color:${t.color}">T${tier}</span>`;
  },

  riskBadge(score) {
    const b = this.riskBand(score);
    return `<span style="font-size:7pt;font-weight:800;padding:2px 9px;border-radius:10px;background:${b.bg};color:${b.color}">${score}</span>`;
  },


  // Region filter for selector
  matchesRegion(vendor, requestedRegion) {
    if (!requestedRegion || requestedRegion === 'Any') return true;
    const regions = (vendor.region || 'Global').split('|');
    return regions.includes(requestedRegion) || regions.includes('Global');
  },
  // Score a vendor against selector parameters (0-100)
  scoreVendorMatch(vendor, params) {
    let score = 0; let max = 0;

    // Capability match (40 points)
    if (params.capabilities && params.capabilities.length > 0) {
      const matched = params.capabilities.filter(c => vendor.capabilities.includes(c)).length;
      score += (matched / params.capabilities.length) * 40;
    } else { score += 40; }
    max += 40;

    // Risk fit (20 points — lower risk preferred unless tolerance is high)
    const riskTolerance = params.risk_tolerance || 50;
    const riskFit = 100 - Math.abs(vendor.risk_score - riskTolerance);
    score += (riskFit / 100) * 20; max += 20;

    // Category match (20 points)
    if (params.category && params.category !== 'Any') {
      score += vendor.category === params.category ? 20 : 0;
    } else { score += 20; }
    max += 20;

    // SLA performance (10 points)
    score += (vendor.sla_score / 100) * 10; max += 10;

    // Tier preference (10 points — Tier 1 scores highest)
    const tierScore = vendor.tier === 1 ? 10 : vendor.tier === 2 ? 7 : 4;
    score += tierScore; max += 10;

    return Math.round((score / max) * 100);
  },

  // Generate recommendation rationale
  rationale(vendor, params, rank) {
    const band = this.riskBand(vendor.risk_score);
    const capMatch = params.capabilities
      ? params.capabilities.filter(c => vendor.capabilities.includes(c))
      : [];
    const tier = this.TIERS[vendor.tier];

    let text = `${vendor.name} is recommended`;
    if (rank === 1) text += ' as the primary vendor';
    text += ` based on `;
    const reasons = [];
    if (capMatch.length > 0) reasons.push(`strong capability alignment (${capMatch.join(', ')})`);
    if (vendor.risk_score <= 33) reasons.push(`a low risk profile (${vendor.risk_score}/100)`);
    if (vendor.sla_score >= 95) reasons.push(`consistently high SLA performance (${vendor.sla_score}%)`);
    if (vendor.tier === 1) reasons.push(`Tier 1 strategic status within the DET portfolio`);
    text += reasons.join(', ') + '. ';
    text += `${tier.desc.toLowerCase()}.`;
    return text;
  },

  // CSV parser
  parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = this._parseCSVLine(lines[0]);
    return lines.slice(1).filter(l => l.trim()).map(line => {
      const vals = this._parseCSVLine(line);
      const obj = {};
      headers.forEach((h, i) => { obj[h] = (vals[i] || '').trim(); });
      // Auto-parse numeric fields
      ['sla_score','concentration_risk','financial_risk',
       'delivery_risk','compliance_risk','risk_score'].forEach(f => {
        if (obj[f] !== undefined && obj[f] !== '') obj[f] = parseFloat(obj[f]) || 0;
      });
      // Tier as integer
      if (obj.tier !== undefined && obj.tier !== '') obj.tier = parseInt(obj.tier) || 3;
      // Parse capabilities pipe-separated string to array
      if (obj.capabilities) obj.capabilities = obj.capabilities.split('|').map(c => c.trim()).filter(Boolean);
      // Domain — already a string, just trim
      if (obj.domain) obj.domain = obj.domain.trim();
      return obj;
    });
  },

  _parseCSVLine(line) {
    const result = []; let cur = ''; let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') { inQ = !inQ; }
      else if (ch === ',' && !inQ) { result.push(cur.replace(/^"|"$/g,'')); cur = ''; }
      else { cur += ch; }
    }
    result.push(cur.replace(/^"|"$/g,''));
    return result;
  },

  // Fetch from Google Sheets (falls back to sample data)
  async fetchVendors() {
    // Try ./data/vendors.csv first (works on GitHub Pages)
    // Falls back to SAMPLE_VENDORS when running locally
    const sources = [
      './data/vendors.csv',
      'data/vendors.csv',
    ];
    for (const src of sources) {
      try {
        const resp = await fetch(src, { cache: 'no-cache' });
        if (!resp.ok) continue;
        const text = await resp.text();
        if (text.trim().startsWith('id,') || text.trim().startsWith('"id"')) {
          const parsed = this.parseCSV(text);
          if (parsed.length > 10) {
            console.info(`Loaded ${parsed.length} vendors from ${src}`);
            return parsed;
          }
        }
      } catch(e) { /* try next source */ }
    }
    // Also try Google Sheets URL if configured
    if (this.SHEETS.vendors && !this.SHEETS.vendors.startsWith('./')) {
      try {
        const resp = await fetch(this.SHEETS.vendors);
        if (resp.ok) {
          const text = await resp.text();
          const parsed = this.parseCSV(text);
          if (parsed.length > 10) return parsed;
        }
      } catch(e) { /* fall through */ }
    }
    console.info('Using sample vendor data. Push /data/vendors.csv to GitHub Pages to load all 1,368 vendors.');
    return this.SAMPLE_VENDORS;
  },
  async fetchEngagements() {
    try {
      const resp = await fetch(this.SHEETS.engagements);
      const text = await resp.text();
      return this.parseCSV(text);
    } catch(e) { console.warn('Engagements fetch failed:', e); return []; }
  },

  async fetchIntake() {
    try {
      const resp = await fetch(this.SHEETS.intake);
      const text = await resp.text();
      return this.parseCSV(text);
    } catch(e) { console.warn('Intake fetch failed:', e); return []; }
  },


  // ── CONNECTION STATUS ─────────────────────────────────────────
  async checkDataConnection() {
    try {
      const resp = await fetch('./data/vendors.csv', { method: 'HEAD', cache: 'no-cache' });
      return resp.ok;
    } catch(e) { return false; }
  },

  showConnectionStatus(connected, vendorCount) {
    const el = document.getElementById('vp-connection-status');
    if (!el) return;
    if (connected && vendorCount > 100) {
      el.innerHTML = '<span style="color:#059669;font-weight:700;">&#9679; Live</span>'
        + '<span style="color:#6B7280;"> &mdash; ' + vendorCount.toLocaleString() + ' vendors loaded</span>';
    } else {
      el.innerHTML = '<span style="color:#059669;font-weight:700;">&#9679; Ready</span>'
        + '<span style="color:#6B7280;"> &mdash; ' + vendorCount + ' vendors in preview mode &middot; '
        + 'Full registry loads automatically when deployed to GitHub Pages</span>';
    }
  },


  async fetchRateCards() {
    if (false) {
      return this.SAMPLE_RATE_CARDS || [];
    }
    try {
      const resp = await fetch(this.SHEETS.rate_cards);
      const text = await resp.text();
      return this.parseCSV(text);
    } catch(e) {
      console.warn('Rate cards fetch failed:', e);
      return [];
    }
  },
};
