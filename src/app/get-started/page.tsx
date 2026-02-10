'use client';

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f97316_0%,transparent_60%)] opacity-25" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,#0ea5e9_0%,transparent_55%)] opacity-25" />

        <section className="relative px-6 pt-28 pb-16">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-orange-300">Contact Us</p>
              <h1 className="mt-4 text-5xl md:text-6xl font-bold font-space-grotesk">
                Let&apos;s Get <span className="gradient-text">Started</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                Whether you&apos;re starting from scratch or already know what you need, we&apos;re here to listen and
                build a story-driven plan.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:2316132717"
                  className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:border-orange-400 hover:text-orange-200 transition-colors"
                >
                  Call Us
                </a>
                <a
                  href="mailto:info@lakefxmedia.com"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-sm font-medium text-black hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <form className="grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm text-gray-300">
                    First Name *
                    <input
                      required
                      type="text"
                      name="firstName"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
                      placeholder="First name"
                    />
                  </label>
                  <label className="text-sm text-gray-300">
                    Last Name *
                    <input
                      required
                      type="text"
                      name="lastName"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
                      placeholder="Last name"
                    />
                  </label>
                </div>

                <label className="text-sm text-gray-300">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
                    placeholder="(000) 000-0000"
                  />
                </label>

                <label className="text-sm text-gray-300">
                  Email *
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="text-sm text-gray-300">
                  What&apos;s your story? *
                  <textarea
                    required
                    name="story"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
                    placeholder="Tell us about the project and the audience you want to reach."
                  />
                </label>

                <label className="text-sm text-gray-300">
                  What service are you interested in?
                  <select
                    name="service"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="video">Video & Photo Services</option>
                    <option value="marketing">Marketing Services</option>
                    <option value="web">Web Services</option>
                    <option value="branding">Branding Services</option>
                  </select>
                </label>

                <label className="text-sm text-gray-300">
                  Your ideal budget
                  <select
                    name="budget"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">Under $5k</option>
                    <option value="5-15k">$5k - $15k</option>
                    <option value="15-30k">$15k - $30k</option>
                    <option value="30-50k">$30k - $50k</option>
                    <option value="50-plus">$50k+</option>
                  </select>
                </label>

                <label className="text-sm text-gray-300">
                  How did you hear about us? *
                  <select
                    required
                    name="referral"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                  >
                    <option value="">Select one</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social media</option>
                    <option value="search">Search</option>
                    <option value="event">Event</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
