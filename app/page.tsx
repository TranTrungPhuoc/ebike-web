import {Carousel} from './containers/Carousel';
import {Service} from './containers/Service';
import {BestSeller} from './containers/BestSeller';

export default function Home() {
  return (
    <main>
      <Carousel />
      <Service />
      <BestSeller />
    </main>
  )
}
