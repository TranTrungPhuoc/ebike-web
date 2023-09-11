import {Carousel} from './containers/Carousel';
import {Service} from './containers/Service';
import {BestSeller} from './containers/BestSeller';
import {Main} from './containers/Main';
import {Attribute} from './containers/Attribute';
import {Tutorial} from './containers/Tutorial';
export default function Home() {
  return (
    <main>
      <Carousel />
      <Service />
      <BestSeller />
      <Main />
      <Attribute />
      <Tutorial />
    </main>
  )
}
