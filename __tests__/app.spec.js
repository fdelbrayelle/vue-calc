import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App', () => {
    // Inspect the raw component options
    it('has a name', () => {
        expect(App.name).toBe('VueCalc')
    })
})

describe('Mounted App', () => {
    const wrapper = mount(App);

    test('has a title', () => {
        expect(wrapper.text()).toEqual("Vue Calc exercise")
    })
})