import { Machine } from 'xstate';

export const showMachine = Machine({
  id: 'toggle',
  initial: 'show',
  states: {
    show: {
      on: { TOGGLE: 'hide' },
    },
    hide: {
      on: { TOGGLE: 'show' },
    }
  }
})

export const showActionToggle = "TOGGLE"