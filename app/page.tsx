import {Carousel} from './containers/Carousel';
import {Service} from './containers/Service';
import {BestSeller} from './containers/Category';
import {Main} from './containers/Main';
import {Attribute} from './containers/Attribute';
import {Tutorial} from './containers/Tutorial';
import {Knowledge} from './containers/Knowledge';
import {Store} from './containers/Store';
export default function Home() {
  return (
    <main>
      <Carousel />
      <Service />
      <BestSeller />
      <Main />
      <Attribute />
      <Tutorial />
      <Knowledge />
      <Store />
    </main>
  )
}
