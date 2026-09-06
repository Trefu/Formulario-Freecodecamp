<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  age: '',
  race: '',
  season: '2011',
  ban: 'no',
  comments: '',
  terms: false,
  cannonRush: false,
  cry: false
})

const submitted = ref(false)

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <div id="app-shell" class="relative isolate min-h-screen overflow-hidden">
    <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-brand/20 to-transparent"></div>

    <main id="contenedor-general" class="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between border-b border-white/10 pb-5">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-xs font-extrabold tracking-wider text-white shadow-lg shadow-brand/20">
            SC2
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-white">Tournament office</p>
            <p class="mt-1 text-xs text-slate-400">Player registration portal</p>
          </div>
        </div>
        <span class="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 sm:flex">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Registration open
        </span>
      </div>

      <header class="mx-auto max-w-3xl px-2 pb-10 pt-14 text-center sm:pb-14 sm:pt-20">
        <p class="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-blue-300">Community competitive series</p>
        <h1 id="title" class="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Starcraft 2 Tournament
        </h1>
        <p id="description" class="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          Gaming Tournament Registration
        </p>
      </header>

      <section id="contenedor-form" class="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-surface shadow-2xl shadow-black/20 ring-1 ring-white/10">
        <div class="flex flex-col justify-between gap-4 border-b border-slate-200 px-6 py-6 sm:flex-row sm:items-center sm:px-10">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand">Registration profile</p>
            <h2 class="mt-2 text-xl font-bold tracking-tight text-navy sm:text-2xl">Tell us about your playstyle</h2>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Complete the details below to reserve your place in the next tournament.</p>
          </div>
          <div class="flex items-center gap-2 self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500 sm:self-center">
            <span class="h-1.5 w-1.5 rounded-full bg-brand"></span>
            Required fields
          </div>
        </div>

        <form id="survey-form" class="space-y-8 px-6 py-8 sm:px-10 sm:py-10" @submit.prevent="submitForm">
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label id="name-label" class="field-label" for="name">Player name</label>
              <input
                id="name"
                v-model="form.name"
                minlength="3"
                type="text"
                class="form-control"
                placeholder="Enter player name"
                required
              >
            </div>

            <div>
              <label id="email-label" class="field-label" for="email">E-mail</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-control"
                placeholder="name@company.com"
                required
              >
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label id="number-label" class="field-label" for="number">Age</label>
              <input
                id="number"
                v-model="form.age"
                type="number"
                min="18"
                max="50"
                class="form-control"
                placeholder="18–50"
                required
              >
              <p class="field-hint">Players must be between 18 and 50 years old.</p>
            </div>

            <div>
              <label class="field-label" for="dropdown">Main race</label>
              <select id="dropdown" v-model="form.race" class="form-control">
                <option disabled value="">Select your main race</option>
                <option value="terran">Terran</option>
                <option value="zerg">Zerg</option>
                <option value="protoss">Protoss</option>
              </select>
            </div>
          </div>

          <div class="grid gap-6 border-t border-slate-100 pt-8 md:grid-cols-2">
            <fieldset>
              <legend class="field-label">Season</legend>
              <div class="space-y-3">
                <label class="choice-card" for="season-2011">
                  <input id="season-2011" v-model="form.season" type="radio" name="season" value="2011">
                  <span>Season 2011</span>
                </label>
                <label class="choice-card" for="season-2020">
                  <input id="season-2020" v-model="form.season" type="radio" name="season" value="2020">
                  <span>Season 2020</span>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend class="field-label">Bans</legend>
              <div class="space-y-3">
                <label class="choice-card" for="ban-no">
                  <input id="ban-no" v-model="form.ban" type="radio" name="ban" value="no">
                  <span>No bans</span>
                </label>
                <label class="choice-card" for="ban-yes">
                  <input id="ban-yes" v-model="form.ban" type="radio" name="ban" value="yes">
                  <span>Bans allowed</span>
                </label>
              </div>
            </fieldset>
          </div>

          <div class="border-t border-slate-100 pt-8">
            <label class="field-label" for="textarea">Additional notes</label>
            <textarea
              id="textarea"
              v-model="form.comments"
              rows="4"
              class="form-control resize-y"
              placeholder="Share any information the tournament team should know."
            ></textarea>
          </div>

          <fieldset class="space-y-3 border-t border-slate-100 pt-8">
            <legend class="mb-4 text-sm font-bold text-navy">Tournament agreements</legend>
            <label class="choice-card items-start" for="terms">
              <input id="terms" v-model="form.terms" name="accept" type="checkbox" value="terms" class="mt-0.5" required>
              <span>I accept the <a class="font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition hover:text-brand-dark" href="https://starcraft2.com/es-es/" target="_blank" rel="noreferrer">Terms and Conditions</a>.</span>
            </label>
            <label class="choice-card items-start" for="cannon-rush">
              <input id="cannon-rush" v-model="form.cannonRush" name="accept" type="checkbox" value="rush" class="mt-0.5">
              <span>I will not use unintended game mechanics.</span>
            </label>
            <label class="choice-card items-start" for="cry">
              <input id="cry" v-model="form.cry" name="accept" type="checkbox" value="cry" class="mt-0.5">
              <span>I will participate with a respectful attitude.</span>
            </label>
          </fieldset>

          <div class="flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-xs leading-5 text-slate-500">By submitting, you confirm that the information provided is accurate.</p>
            <button id="submit" type="submit" class="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark focus:outline-none focus:ring-4 focus:ring-brand/20">
              Submit registration
              <span aria-hidden="true" class="ml-2 text-base">→</span>
            </button>
          </div>

          <p v-if="submitted" class="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700" role="status">
            Registration received. The tournament team will be in touch soon.
          </p>
        </form>
      </section>

      <footer class="mt-auto flex flex-col gap-4 pt-10 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 <a class="font-semibold text-slate-300 transition hover:text-white" href="https://github.com/trefu" target="_blank" rel="noreferrer">Trefu</a>. Built for the community.</p>
        <div class="flex items-center gap-4">
          <a class="transition hover:text-white" href="https://github.com/trefu" target="_blank" rel="noreferrer">GitHub / Trefu</a>
          <span aria-hidden="true" class="h-1 w-1 rounded-full bg-slate-600"></span>
          <a class="transition hover:text-white" href="https://starcraft2.com/es-es/" target="_blank" rel="noreferrer">Official game site</a>
        </div>
      </footer>
    </main>
  </div>
</template>
