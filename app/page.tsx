import {Carousel} from './containers/Carousel';
import {Service} from './containers/Service';
import {Category} from './containers/Category';
import {Main} from './containers/Main';
import {Attribute} from './containers/Attribute';
import {Tutorial} from './containers/Tutorial';
import {Knowledge} from './containers/Knowledge';
import {Store} from './containers/Store';

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Trang Chủ | Xe Điện Vui',
}

export default function Home() {
  return (
    <main>
      <Carousel />
      <Service />
      <Category />
      <Main />
      <Attribute />
      <Tutorial />
      <Knowledge />
      <Store />
    </main>
  )
}
