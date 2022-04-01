const path = require('path')

module.exports = {
  // `content` is replaced instead of extended, so this line has to be added in
  // the `content` of each app' tailwind.config.js
  content: [path.join(path.dirname(require.resolve('@company/ui')), '**/*.js')],
  theme: {
    extend: {
      colors: {
        'accents-0': 'var(--accents-0)',
        'accents-1': 'var(--accents-1)',
        'accents-2': 'var(--accents-2)',
        'accents-3': 'var(--accents-3)',
        'accents-4': 'var(--accents-4)',
        'accents-5': 'var(--accents-5)',
        'accents-6': 'var(--accents-6)',
        'accents-7': 'var(--accents-7)',
        'accents-8': 'var(--accents-8)',
        'accents-9': 'var(--accents-9)',
        'success-lighter': 'var(--geist-success-lighter)',
        'success-light': 'var(--geist-success-light)',
        success: 'var(--geist-success-lighter)',
        'success-dark': 'var(--geist-success-dark)',
      },
    },
  },
}
