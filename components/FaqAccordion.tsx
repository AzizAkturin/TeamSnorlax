'use client';

import { useState } from "react";

const faqs = [
  {
    q: "How does the 14-day free trial work?",
    a: "You get full access to the Growth plan for 14 days — no credit card required. At the end of the trial you can choose a plan or let it expire. Your data is retained for 30 days after expiry.",
  },
  {
    q: "Can I connect my existing data sources on day one?",
    a: "Yes. Meridian ships with native connectors for Postgres, MySQL, Snowflake, BigQuery, Redshift, and 40+ other sources. Most connections take under five minutes to set up through our guided wizard.",
  },
  {
    q: "How does anomaly detection work?",
    a: "Meridian continuously monitors your key metrics and builds a baseline model of normal behaviour. When a metric deviates beyond a configurable threshold, you receive an alert via email, Slack, or webhook — typically within minutes of the anomaly occurring.",
  },
  {
    q: "Is my data secure?",
    a: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Meridian is SOC 2 Type II certified, and we never share or sell your data. Enterprise customers can also opt for a VPC deployment.",
  },
  {
    q: "Can I export my dashboards and reports?",
    a: "Yes — dashboards can be exported to PDF or PNG, and tabular reports export to CSV or Excel. Scheduled exports can be delivered to email or dropped into an S3 bucket automatically.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-8 py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                data-ph-id={`faq-toggle-${i}`}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span
                  className={`ml-4 shrink-0 text-gray-400 transition-transform duration-200 ${open === i ? "rotate-45" : "rotate-0"}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
