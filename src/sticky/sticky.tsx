import { Header } from "../header";

// sticky - элемент позиционируется в нормальном потоке так же как и static, а затем смещается при помощи свойств top left right bottom.
// В примере ниже элемент будет расположен обычно как static, до момента, когда расстояние от верха родителя до верхней границы элемента будет меньше 10px.
// Он будет оставаться приклеенным пока не встретит вторую границу родителя или расстояние между верхами будет >= 10px;

// .block {
//   position: sticky;
//   top: 10px;
// }
//У элемента должна быть прокрутка
// .items {
//   position: relative;
//   width: 80%;
//   height: 200vh;
// }

export function Sticky(): JSX.Element {
  return (
    <div className="container__page sticky">
      <Header />
      <div className="container__unique sticky">
        <div className="group">
          <h1 className="title sticky">Sticky</h1>
          <p className="text">This is some text template</p>
          <p className="text">This is some text template</p>
          <p className="text">This is some text template</p>
          <p className="text">This is some text template</p>
          <p className="text">This is some text template</p>
          <p className="text">This is some text template</p>
          <p className="text">This is some text template</p>
        </div>
      </div>
    </div>
  );
}
