"use client"

import * as React from "react"
import Link from "next/link"

export function CTASectionus() {
  return (
    <section className="bg-background py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Placeholder Image */}
        <div className="w-full md:w-1/2">
          <div className="bg-muted rounded-lg h-150 flex items-center justify-center">
            <img src="/q-line/src/app/assets/small.black.biegestone.alb.01.png" alt="hoho" />
          </div>
        </div>

        {/* Right Side: Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            CTA section
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Action-driving headline that creates urgency
          </h2>
          <p className="text-base text-muted-foreground">
            Add one or two compelling sentences that reinforce your main value
            proposition and overcome initial objections. End with a clear reason
            to act now. Align this copy with your CTA button text.
          </p>
          <Link href="/get-started" passHref>
            <button className="self-start px-6 py-2 bg-background border border-foreground text-foreground rounded-md flex items-center gap-2 hover:bg-muted transition-colors">
              Get started
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASectionus