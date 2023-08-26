import { SvgPhone } from "../component/svg/svgPhone";
export function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-1/5 flex">
            <div className="svg-phone flex-none">
              <SvgPhone />
            </div>
            <div className="buy-phone grow ml-2 uppercase">
              Mua hàng: 028 6253 9118
            </div>
          </div>
          <div className="basis-2/5 flex">
            <div className="svg-phone flex-none">
              <SvgPhone />
            </div>
            <div className="guarante-phone grow ml-2 uppercase">
              Bảo hành: 028 6253 9118
            </div>
          </div>
          <div className="basis-1/5">
            <div className="uppercase">The work Ebike.com</div>
          </div>
          <div className="basis-1/5 uppercase">
            <div className="uppercase">Bảo hành 2 năm</div>
          </div>
        </div>
      </div>
    </header>
  );
}