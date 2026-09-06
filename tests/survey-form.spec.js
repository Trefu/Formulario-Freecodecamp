import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

function mountForm() {
  return mount(App)
}

describe('FreeCodeCamp Survey Form contract', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('renders the required title and description', () => {
    const wrapper = mountForm()

    expect(wrapper.find('#title').element.tagName).toBe('H1')
    expect(wrapper.find('#description').element.tagName).toBe('P')
  })

  it('renders the survey form', () => {
    const wrapper = mountForm()

    expect(wrapper.find('form#survey-form').exists()).toBe(true)
  })

  it('renders a required name field and matching label', () => {
    const wrapper = mountForm()
    const input = wrapper.find('#name')

    expect(input.element.tagName).toBe('INPUT')
    expect(input.attributes('type')).not.toBe('checkbox')
    expect(input.attributes('type')).not.toBe('radio')
    expect(input.element.required).toBe(true)
    expect(wrapper.find('label#name-label[for="name"]').exists()).toBe(true)
  })

  it('renders a required email field and matching label', () => {
    const wrapper = mountForm()
    const input = wrapper.find('#email')

    expect(input.attributes('type')).toBe('email')
    expect(input.element.required).toBe(true)
    expect(wrapper.find('label#email-label[for="email"]').exists()).toBe(true)
  })

  it('renders a constrained required number field and matching label', () => {
    const wrapper = mountForm()
    const input = wrapper.find('#number')

    expect(input.attributes('type')).toBe('number')
    expect(input.attributes('min')).toBe('18')
    expect(input.attributes('max')).toBe('50')
    expect(input.element.required).toBe(true)
    expect(wrapper.find('label#number-label[for="number"]').exists()).toBe(true)
  })

  it('renders the dropdown inside the form', () => {
    const wrapper = mountForm()

    expect(wrapper.find('form#survey-form select#dropdown').exists()).toBe(true)
  })

  it('renders at least two radio groups', () => {
    const wrapper = mountForm()
    const names = new Set(
      wrapper.findAll('form#survey-form input[type="radio"]').map((input) => input.attributes('name'))
    )

    expect(names.size).toBeGreaterThanOrEqual(2)
  })

  it('renders at least two named checkboxes', () => {
    const wrapper = mountForm()
    const checkboxes = wrapper.findAll('form#survey-form input[type="checkbox"]')

    expect(checkboxes.length).toBeGreaterThanOrEqual(2)
    expect(checkboxes.every((input) => input.attributes('name'))).toBe(true)
  })

  it('renders the textarea inside the form', () => {
    const wrapper = mountForm()

    expect(wrapper.find('form#survey-form textarea#textarea').exists()).toBe(true)
  })

  it('renders the submit button with the required attributes', () => {
    const wrapper = mountForm()
    const button = wrapper.find('#submit')

    expect(button.element.tagName).toBe('BUTTON')
    expect(button.attributes('type')).toBe('submit')
  })
})
