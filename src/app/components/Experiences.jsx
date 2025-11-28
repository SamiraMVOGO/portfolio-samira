import React from 'react'

const experiences = [
  {
    company: 'Best Experts Group',
    role: 'Flutter / Laravel Developer',
    period: 'July 2025',
    location: 'Cotonou, Benin',
    bullets: [
      'Developed a mobile application for tracking school activities, designed for teachers and parents.'
    ]
  },
  {
    company: 'TettriX',
    role: 'Fullstack Vue.js / Laravel Developer',
    period: 'Oct 2024 — Jan 2025',
    location: 'Remote',
    bullets: [
      'Developed an innovative MVP in the healthcare domain using Vue.js and Laravel.'
    ]
  },
  {
    company: 'ByteInnovIT',
    role: 'Lead Front‑End Developer',
    period: 'July 2024 — Oct 2024',
    location: 'Cotonou, Benin',
    bullets: [
      'Designed interfaces and integrated APIs for a SaaS suite (Next.js / Tailwind-like design).'
    ]
  },
  {
    company: 'Fictagroup',
    role: 'React.js Developer Intern',
    period: 'Apr 2024 — Aug 2024',
    location: 'Remote',
    bullets: [
      'Developed a React project for a university and a company specializing in agriculture.'
    ]
  },
  {
    company: 'MIFY',
    role: 'Analyst / Developer Intern',
    period: 'Aug 2023 — Nov 2023',
    location: 'Arconville, Benin',
    bullets: [
      'Analyzed patient data to improve a predictive model for chronic kidney diseases.'
    ]
  }
]

function IconCompany() {
  return (
    <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 13h18v8H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 13V7a2 2 0 012-2h6a2 2 0 012 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function ExperiencesSection({ cvPath = '/cv.pdf' }) {
  return (
    <section className="mx-auto text-black mt-[5%] mb-[10%]" id="experiences">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div className='text-center'>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Professional Experiences</h1>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-1  inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-gray-200 text-black mt-3"
          >
            <span className="block bg-[#121212] flex gap-2 text-white hover:bg-slate-800 rounded-full px-5 py-2">
              <svg className="w-4 h-4 mt-1" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View / Download CV
            </span>
          </a>

           
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20 text-white">
        <div className='max-w-4xl'>
          <ol className="relative">
            {experiences.map((exp, idx) => (
              <li key={idx} className="mb-10">
                <div className='flex gap-2'>
                  <span className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full shadow timeline-icon">
                    <IconCompany />
                  </span>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-medium">
                      {exp.role} <span className="text-gray-600 text-sm">— {exp.company}</span>
                    </h3>
                    <time className="text-sm text-gray-600 mt-1 md:mt-0">{exp.period} · {exp.location}</time>
                  </div>
                </div>

                <ul className="mt-3 list-disc  text-[#ADB7BE]  space-y-1">
                  {exp.bullets.map((b, i) => <div key={i}>{b}</div>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <aside className="border rounded-lg p-4 bg-[#f5f5f5]">
          <div className="flex items-center justify-between mb-3">
            <strong className="text-sm text-black">Resume Preview</strong>
            <a href={cvPath} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:underline">Open</a>
          </div>

          <div className="h-[400px] overflow-hidden rounded-md border">
            <iframe
              src={cvPath}
              title="CV_Samira_MVOGO_FULLSTACK_DEVELOPER"
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </aside>
      </div>
    </section>
  )
}
