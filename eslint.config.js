import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['src/**/*.js'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser, // ← добавляет все браузерные глобалы
        ...globals.node,    // ← добавляет все Node.js глобалы
      }
    },
    rules: {
      // === Google Style Guide Rules ===

      // Отступы - 2 пробела
      'indent': ['error', 2],

      // Точка с запятой обязательна
      'semi': ['error', 'always'],

      // Кавычки - одинарные
      'quotes': ['error', 'single', { allowTemplateLiterals: true }], // ← разрешаем шаблонные строки

      // Максимальная длина строки - 80 символов (Google стандарт)
      'max-len': ['error', {
        code: 120,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true, // ← игнорируем длинные строки
        ignoreComments: true // ← игнорируем комментарии
      }],

      // Запятая в конце всегда для многострочных
      'comma-dangle': ['error', 'always-multiline'],

      // Пробелы вокруг операторов
      'space-infix-ops': 'error',

      // Пробел перед function parentheses
      'space-before-function-paren': ['error', {
        anonymous: 'always', // function ()
        named: 'never',      // function name()
        asyncArrow: 'always' // async () =>
      }],

      // Пробелы вокруг ключевых слов
      'keyword-spacing': 'error',

      // Пробелы в блоках
      'block-spacing': 'error',

      // Пробелы в объектах
      'object-curly-spacing': ['error', 'always'],

      // Пробелы в массивах
      'array-bracket-spacing': ['error', 'never'],

      // Стрелочные функции с одним параметром без скобок
      'arrow-parens': ['error', 'as-needed'],

      // === Дополнительные Google-правила ===
      'comma-spacing': 'error',           // пробел после запятой
      'comma-style': ['error', 'last'],   // запятая в конце строки
      'eol-last': 'error',                // пустая строка в конце файла
      'no-multiple-empty-lines': ['error', { max: 2 }], // макс 2 пустых строки

      'no-var': 'error',                    // запрет var
      'prefer-const': 'error',              // предпочитать const
      'prefer-arrow-callback': 'error',     // стрелочные функции для колбэков
      'arrow-body-style': ['error', 'as-needed'], // убрать фигурные если не нужны
    }
  }
];