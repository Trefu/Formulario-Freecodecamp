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
  <main id="contenedor-general" class="min-h-screen px-4 py-8 text-center text-paper sm:px-6 lg:px-8">
    <header class="mx-auto max-w-4xl px-2 py-8 sm:py-12">
      <h1 id="title" class="font-display text-3xl font-bold text-brand sm:text-5xl">
        Starcraft 2 Tournament
      </h1>
      <p id="description" class="mt-4 text-sm text-paper/90 sm:text-base">
        Gaming Tournament Registration
      </p>
    </header>

    <section id="contenedor-form" class="mx-auto min-h-[calc(100vh-14rem)] max-w-3xl rounded-lg bg-surface p-4 shadow-2xl sm:p-8">
      <form id="survey-form" class="space-y-6 text-left" @submit.prevent="submitForm">
        <div>
          <label id="name-label" class="mb-2 block text-sm font-semibold" for="name">Player name</label>
          <input
            id="name"
            v-model="form.name"
            minlength="3"
            type="text"
            class="block w-full rounded border border-white/40 bg-white/95 px-3 py-2 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand"
            placeholder="Enter player name"
            required
          >
        </div>

        <div>
          <label id="email-label" class="mb-2 block text-sm font-semibold" for="email">E-mail</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="block w-full rounded border border-white/40 bg-white/95 px-3 py-2 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand"
            placeholder="E-mail"
            required
          >
        </div>

        <div>
          <label id="number-label" class="mb-2 block text-sm font-semibold" for="number">Age</label>
          <input
            id="number"
            v-model="form.age"
            type="number"
            min="18"
            max="50"
            class="block w-full rounded border border-white/40 bg-white/95 px-3 py-2 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand"
            placeholder="Age"
            required
          >
        </div>

        <div>
          <label class="mb-2 block text-lg font-semibold" for="dropdown">Pick main race</label>
          <select
            id="dropdown"
            v-model="form.race"
            class="block w-full rounded border border-white/40 bg-white/95 px-3 py-2 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand sm:w-1/2"
          >
            <option disabled value="">Main race</option>
            <option value="terran">Terran</option>
            <option value="zerg">Zerg</option>
            <option value="protoss">Protoss</option>
          </select>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <fieldset>
            <legend class="mb-3 text-base font-semibold">Season</legend>
            <div class="space-y-2">
              <label class="flex items-center gap-2" for="season-2011">
                <input id="season-2011" v-model="form.season" type="radio" name="season" value="2011">
                <span>Season 2011</span>
              </label>
              <label class="flex items-center gap-2" for="season-2020">
                <input id="season-2020" v-model="form.season" type="radio" name="season" value="2020">
                <span>Season 2020</span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend class="mb-3 text-base font-semibold">Bans</legend>
            <div class="space-y-2">
              <label class="flex items-center gap-2" for="ban-no">
                <input id="ban-no" v-model="form.ban" type="radio" name="ban" value="no">
                <span>No bans</span>
              </label>
              <label class="flex items-center gap-2" for="ban-yes">
                <input id="ban-yes" v-model="form.ban" type="radio" name="ban" value="yes">
                <span>Bans allowed</span>
              </label>
            </div>
          </fieldset>
        </div>

        <div>
          <label class="mb-2 block text-sm font-semibold" for="textarea">Feel free to insult Blizzard</label>
          <textarea
            id="textarea"
            v-model="form.comments"
            rows="3"
            class="block w-full rounded border border-white/40 bg-white/95 px-3 py-2 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand"
          ></textarea>
        </div>

        <fieldset class="space-y-3">
          <legend class="sr-only">Tournament agreements</legend>
          <label class="flex items-start gap-2" for="terms">
            <input id="terms" v-model="form.terms" name="accept" type="checkbox" value="terms" class="mt-1" required>
            <span>I accept <a class="underline transition hover:text-brand" href="https://starcraft2.com/es-es/" target="_blank" rel="noreferrer">Terms and Conditions</a></span>
          </label>
          <label class="flex items-start gap-2" for="cannon-rush">
            <input id="cannon-rush" v-model="form.cannonRush" name="accept" type="checkbox" value="rush" class="mt-1">
            <span>I've will not fricking cannon rush</span>
          </label>
          <label class="flex items-start gap-2" for="cry">
            <input id="cry" v-model="form.cry" name="accept" type="checkbox" value="cry" class="mt-1">
            <span>I've will not cry like a baby</span>
          </label>
        </fieldset>

        <div class="text-center">
          <button id="submit" type="submit" class="rounded bg-brand px-6 py-2 font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand">
            Sign in
          </button>
        </div>

        <p v-if="submitted" class="text-center text-sm font-semibold text-paper" role="status">
          Registration received.
        </p>
      </form>
    </section>
  </main>
</template>
