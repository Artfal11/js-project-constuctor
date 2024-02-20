import image from './assets/image.png'
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from './classes/blocks'

export const model = [
  new TitleBlock('Конструктор сайтов на JS', {
    tag: 'h2',
    styles: {
      background: 'red',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),
  new TextBlock('Это блок с текстом)', {
    styles: {
      'font-size': '16px',
      background: 'black',
      color: 'red',
      'text-align': 'right',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),
  new ColumnsBlock(['Первая колонна', 'Вторая колонна', 'Третья колонна'], {
    styles: {
      background: 'purple',
      color: '#fff',
      padding: '2rem',
      'font-weight': 'bold',
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Эта картинка',
  }),
]
