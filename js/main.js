/* ═══════════════════════════════════════════════════
   RAKESH DASH — PORTFOLIO JS
   Change SECRET_PIN to your own 4-digit PIN
═══════════════════════════════════════════════════ */

const SECRET_PIN = '4321'; // ← CHANGE THIS

/* ── Active Nav ──────────────────────────────────── */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── Copy Email ──────────────────────────────────── */
function copyEmail(btnId) {
  navigator.clipboard.writeText('rakeshdash6180@gmail.com').then(() => {
    const btn = document.getElementById(btnId || 'copy-btn');
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = orig, 2000);
  });
}

/* ── Starfield (astroveda page) ──────────────────── */
function initStars() {
  const el = document.getElementById('starfield');
  if (!el) return;
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('span');
    const sz = i % 6 === 0 ? 2 : 1;
    s.style.cssText = [
      `width:${sz}px`, `height:${sz}px`,
      `left:${Math.random()*100}%`, `top:${Math.random()*100}%`,
      `opacity:${(0.15 + Math.random()*0.6).toFixed(2)}`,
      `animation-delay:${(Math.random()*4).toFixed(1)}s`,
      `animation-duration:${(2+Math.random()*3).toFixed(1)}s`,
    ].join(';');
    el.appendChild(s);
  }
}

/* ── PIN Gate ────────────────────────────────────── */
let pinValue = '';

function initPin() {
  if (!document.getElementById('pin-gate')) return;
  updateDots();
  document.querySelectorAll('.pin-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.val;
      if (v === 'del') pinValue = pinValue.slice(0, -1);
      else if (pinValue.length < 4) pinValue += v;
      updateDots();
      updateSubmit();
    });
  });
  const sub = document.getElementById('pin-submit');
  if (sub) sub.addEventListener('click', checkPin);
}

function updateDots() {
  document.querySelectorAll('.pin-dot').forEach((d, i) => {
    d.className = 'pin-dot ' + (i < pinValue.length ? 'filled' : 'empty');
    d.textContent = i < pinValue.length ? '●' : '';
  });
}

function updateSubmit() {
  const s = document.getElementById('pin-submit');
  if (s) s.className = 'pin-submit' + (pinValue.length === 4 ? ' ready' : '');
}

function checkPin() {
  if (pinValue !== SECRET_PIN) {
    document.querySelectorAll('.pin-dot').forEach(d => d.classList.add('error'));
    const err = document.getElementById('pin-error');
    if (err) err.textContent = 'Incorrect PIN — try again';
    setTimeout(() => {
      pinValue = '';
      updateDots();
      updateSubmit();
      document.querySelectorAll('.pin-dot').forEach(d => d.classList.remove('error'));
      if (err) err.textContent = '';
    }, 1100);
    return;
  }
  document.getElementById('pin-gate').style.display = 'none';
  document.getElementById('resume-unlocked').style.display = 'block';
  document.getElementById('resume-unlocked').scrollIntoView({ behavior: 'smooth' });
}

/* ── Resume HTML Generators ──────────────────────── */
const RESUME = {
  name:     'RAKESH DASH',
  email:    'rakeshdash6180@gmail.com',
  phone:    '+91-7008339812',
  linkedin: 'linkedin.com/in/rakeshdash007',
  website:  'rakeshd3.github.io/CV',
  summary:  'Senior Data Engineer with 8+ years of progressive experience designing enterprise-grade data platforms, ETL/ELT pipelines, and distributed data systems across Banking, Marketing Technology, and Aerospace domains. Deep expertise in Python, PySpark, Snowflake, and Apache Airflow — including 2TB+ ESG and financial data pipelines at HSBC and 50M+ customer record platforms at Zeta Global. Track record: 45% Spark optimization, $2.5M+ revenue contribution, $500K+ cost savings. Working knowledge of Databricks, Apache Kafka, dbt, and Delta Lake.',
  skills: {
    'Languages':            'Python, PySpark, SQL, Scala',
    'Big Data & Streaming': 'Apache Spark, PySpark, Apache Kafka, Databricks, Delta Lake',
    'Data Warehousing':     'Snowflake, PostgreSQL, Oracle, MySQL',
    'Data Transformation':  'dbt (Data Build Tool), SQL-based ELT, Schema Design',
    'Data Quality':         'Great Expectations, Automated Validation, Data Reconciliation, Regulatory Compliance',
    'Workflow & DevOps':    'Apache Airflow, Jenkins, GitHub Actions, CI/CD',
    'Cloud Platforms':      'AWS, Microsoft Azure, Google Cloud Platform (GCP)',
    'Containerization':     'Docker, Kubernetes',
    'Analytics & Viz':      'Power BI, Tableau',
  },
  experience: [
    {
      title: 'AVP — Data Specialist',
      note:  'Senior Data Engineering — ESG & Financial Data Platforms',
      co:    'HSBC Electronic Data Processing India',
      period:'Jul 2023 – Present', loc: 'Bengaluru, India',
      bullets: [
        'Architected Python & PySpark pipelines processing 2TB+ of ESG, risk, and financial data daily across Sustainability, Regulatory Reporting, and Finance domains.',
        'Reduced PySpark execution time by 45% through partition key optimization, broadcast join replacement, and adaptive query execution tuning.',
        'Automated Airflow & Jenkins CI/CD workflows eliminating 25+ hours of weekly manual effort, scaling monitoring from 8 to 15+ data assets.',
        'Built Great Expectations quality framework across 15+ critical ESG assets — 40% fewer failures, zero regulatory reporting errors.',
        'Standardized vendor onboarding across 8+ source systems — time-to-production from 6 weeks to under 2 weeks, efficiency +35%.',
      ]
    },
    {
      title: 'Data Analyst',
      note:  'Data Engineering & Snowflake Platform — MarTech Scale',
      co:    'Zeta Global',
      period:'Jul 2021 – May 2023', loc: 'Hyderabad, India',
      bullets: [
        'Improved customer identity matching by 35% via NLP probabilistic matching — supporting $2.5M+ revenue growth.',
        'Consolidated 10+ source systems: business reporting from 4 hours to under 15 minutes.',
        'Optimized Snowflake warehouse for 50M+ records — report generation time cut by 50%.',
        'Reduced data quality incidents by 90% through automated validation pipeline (15M+ records).',
        'Reduced Snowflake storage costs by 25% through schema optimization and lifecycle policies.',
      ]
    },
    {
      title: 'Reliability Analyst',
      note:  'Python Automation & Data Analytics — Aerospace Domain',
      co:    'Cyient Ltd',
      period:'Apr 2018 – Jul 2021', loc: 'Hyderabad, India',
      bullets: [
        'Automated 10,000+ XML/HTML files monthly — execution from 8 hours to under 15 minutes.',
        'Generated ~$500K annual cost savings through process automation and pipeline optimization.',
        'Reduced data error rates from ~20% to under 1% via automated validation framework.',
        'Built Power BI dashboards tracking 15+ KPIs — 80% reduction in manual reporting effort.',
      ]
    },
  ],
  edu:   'B.E. Mechanical Engineering, Institution of Engineers (India), 2016',
  certs: [
    'Analyzing Data with Python — edX',
    'Structuring Machine Learning Projects — DeepLearning.AI',
    'Design Databases with PostgreSQL — Codecademy',
    'Analyze Business Metrics with SQL — Codecademy',
  ],
};

function genATS(d, hl) {
  const skRows = Object.entries(d.skills).map(([c,s]) =>
    `<tr><td style="font-weight:700;font-size:9pt;color:#1B3A6B;width:160px;vertical-align:top;padding:2px 10px 2px 0">${c}</td><td style="font-size:9pt;color:#333;padding:2px 0">${s}</td></tr>`
  ).join('');
  const exp = d.experience.map(e =>
    `<div style="margin-bottom:13px">
      <div style="display:flex;justify-content:space-between"><strong style="font-size:10.5pt">${e.title}</strong><span style="font-size:9pt;color:#666;font-family:monospace">${e.period}</span></div>
      <div style="font-style:italic;font-size:9pt;color:#888;margin-bottom:2px">${e.note}</div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="color:#2E6DA4;font-weight:600;font-size:10pt">${e.co}</span><span style="font-size:9pt;color:#666">${e.loc}</span></div>
      <ul style="margin:0;padding-left:17px">${e.bullets.map(b=>`<li style="font-size:10pt;color:#333;margin-bottom:2px">${b}</li>`).join('')}</ul>
    </div>`
  ).join('');
  const sh = t => `<div style="font-size:9.5pt;font-weight:700;color:#1B3A6B;text-transform:uppercase;letter-spacing:1.5px;border-bottom:1px solid #1B3A6B;padding-bottom:2px;margin:14px 0 6px">${t}</div>`;
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${d.name}</title>
<style>*{box-sizing:border-box}body{font-family:Arial,sans-serif;max-width:800px;margin:30px auto;padding:0 44px;font-size:10pt;color:#1a1a1a;line-height:1.55}@media print{body{margin:0;padding:20px}}</style>
</head><body>
<div style="font-size:24pt;font-weight:700;color:#1B3A6B;letter-spacing:1px">${d.name}</div>
<div style="font-size:11pt;color:#444;margin:2px 0 4px">${hl}</div>
<div style="font-size:9pt;color:#666;padding-bottom:8px;border-bottom:2px solid #1B3A6B">${d.email} | ${d.phone} | ${d.linkedin} | ${d.website}</div>
${sh('Professional Summary')}<p style="font-size:10pt;color:#333;margin:0 0 4px">${d.summary}</p>
${sh('Technical Skills')}<table style="width:100%;border-collapse:collapse">${skRows}</table>
${sh('Professional Experience')}${exp}
${sh('Education')}<p style="font-size:10pt">${d.edu}</p>
${sh('Certifications')}<ul style="margin:0;padding-left:17px">${d.certs.map(c=>`<li style="font-size:10pt;color:#333;margin-bottom:2px">${c}</li>`).join('')}</ul>
<p style="margin-top:32px;font-size:8pt;color:#bbb;text-align:center">Open in Chrome → Ctrl+P / Cmd+P → Save as PDF</p>
</body></html>`;
}

function genTech(d, hl) {
  const CY = '#00C6FF';
  const COLS = ['#00C6FF','#6366F1','#10B981','#F59E0B','#EF4444','#8B5CF6','#EC4899','#14B8A6','#F97316'];
  const chips = Object.entries(d.skills).map(([c,s],i) =>
    `<div style="margin-bottom:5px"><span style="font-weight:700;font-size:8pt;color:#374151;margin-right:5px">${c}:</span>${s.split(', ').map(sk=>`<span style="display:inline-block;background:${COLS[i%COLS.length]}18;border:1px solid ${COLS[i%COLS.length]}44;color:${COLS[i%COLS.length]};border-radius:3px;padding:1px 6px;font-size:7.5pt;margin:1px 2px">${sk}</span>`).join('')}</div>`
  ).join('');
  const exp = d.experience.map(e =>
    `<div style="background:#fff;border-radius:6px;padding:10px 14px;margin-bottom:8px;border-left:3px solid ${CY}44">
      <div style="display:flex;justify-content:space-between"><strong style="font-size:10.5pt;color:#0B1F3A">${e.title}</strong><span style="font-size:8.5pt;color:#64748B;background:#EFF6FF;padding:1px 6px;border-radius:3px">${e.period}</span></div>
      <div style="font-size:8pt;color:#94A3B8;font-style:italic;margin-bottom:2px">${e.note}</div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="color:#2E6DA4;font-weight:600;font-size:9.5pt">${e.co}</span><span style="font-size:8.5pt;color:#64748B">${e.loc}</span></div>
      <ul style="margin:0;padding-left:15px">${e.bullets.map(b=>`<li style="font-size:9pt;color:#4B5563;margin-bottom:2px">${b}</li>`).join('')}</ul>
    </div>`
  ).join('');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${d.name}</title>
<style>*{box-sizing:border-box}body{margin:0;font-family:Segoe UI,Arial,sans-serif;font-size:10pt;background:#F0F4F8}@media print{body{background:#fff}}</style>
</head><body>
<div style="background:#0B1F3A;color:#fff;padding:22px 28px;border-bottom:4px solid ${CY}">
  <div style="font-size:22pt;font-weight:800">${d.name}</div>
  <div style="font-size:10pt;color:${CY};margin:2px 0 8px">${hl}</div>
  <div style="display:flex;gap:14px;flex-wrap:wrap">${[d.email,d.phone,d.linkedin,d.website].map(v=>`<span style="font-size:8.5pt;color:#94A3B8">◆ ${v}</span>`).join('')}</div>
</div>
<div style="padding:14px 28px">
  <div style="font-size:9pt;font-weight:700;color:${CY};text-transform:uppercase;letter-spacing:2px;margin:10px 0 5px">Summary</div>
  <div style="font-size:10pt;color:#374151;line-height:1.7;background:#fff;padding:10px 14px;border-radius:6px;border-left:3px solid ${CY};margin-bottom:8px">${d.summary}</div>
  <div style="font-size:9pt;font-weight:700;color:${CY};text-transform:uppercase;letter-spacing:2px;margin:10px 0 5px">Technical Skills</div>
  <div style="background:#fff;border-radius:6px;padding:10px 14px;margin-bottom:8px">${chips}</div>
  <div style="font-size:9pt;font-weight:700;color:${CY};text-transform:uppercase;letter-spacing:2px;margin:10px 0 5px">Experience</div>
  ${exp}
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:10px">
    <div><div style="font-size:9pt;font-weight:700;color:${CY};text-transform:uppercase;letter-spacing:2px;margin-bottom:5px">Education</div><div style="background:#fff;border-radius:6px;padding:8px 12px;font-size:9pt;color:#374151">${d.edu}</div></div>
    <div><div style="font-size:9pt;font-weight:700;color:${CY};text-transform:uppercase;letter-spacing:2px;margin-bottom:5px">Certifications</div><div style="background:#fff;border-radius:6px;padding:8px 12px">${d.certs.map(c=>`<div style="font-size:8.5pt;color:#4B5563;margin-bottom:3px">${c}</div>`).join('')}</div></div>
  </div>
  <p style="margin-top:28px;font-size:8pt;color:#aaa;text-align:center">Open in Chrome → Ctrl+P / Cmd+P → Save as PDF</p>
</div></body></html>`;
}

function downloadResume(type) {
  const hl_de = 'Senior Data Engineer | Data Platform Engineer | PySpark · Databricks · Snowflake';
  const hl_ae = 'Analytics Engineer | Senior Data Engineer | Snowflake · dbt · SQL · Python';
  let html, filename;
  if (type === 'de-ats')  { html = genATS(RESUME, hl_de);  filename = 'Rakesh_Dash_DataEngineer_ATS.html'; }
  if (type === 'de-tech') { html = genTech(RESUME, hl_de); filename = 'Rakesh_Dash_DataEngineer_Tech.html'; }
  if (type === 'ae-ats')  { html = genATS(RESUME, hl_ae);  filename = 'Rakesh_Dash_AnalyticsEngineer_ATS.html'; }
  if (type === 'ae-tech') { html = genTech(RESUME, hl_ae); filename = 'Rakesh_Dash_AnalyticsEngineer_Tech.html'; }
  const blob = new Blob([html], { type: 'text/html' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

/* ── Init ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initStars();
  initPin();
});
