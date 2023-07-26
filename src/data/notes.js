import { setDate } from '../utils';

export const notes = [
  {
    id: 1,
    created: setDate(),
    category: 'Task',
    content: 'Learn Node.js till 10/9/2023',
  },
  {
    id: 2,
    created: Date.now(),
    category: 'Random Thought',
    content:
      'Learn as if you will live forever, live like you will die tomorrow.',
  },
  {
    id: 3,
    created: Date.now(),
    category: 'Idea',
    content: 'Make a cake for my best friend birthday party',
  },
  {
    id: 4,
    created: Date.now(),
    category: 'Task',
    content: 'Get signature Lady Gaga on her concert 30/8/2023',
  },
  {
    id: 5,
    created: Date.now(),
    category: 'Idea',
    content: 'Write web application using React.js + Node.js',
  },
  {
    id: 6,
    created: Date.now(),
    category: 'Random Thought',
    content:
      'When you change your thoughts, remember to also change your world.',
  },
  {
    id: 7,
    created: Date.now(),
    category: 'Task',
    content: 'To buy a book about JavaScript ',
  },
];
