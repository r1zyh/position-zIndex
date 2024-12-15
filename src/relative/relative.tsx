import { Header } from "../header";

// relative - позиционирование происходит так же как и static, 
// но элемент может быть смещен относительно своего начального положения. 
// Он не будет влиять на расположение других элементов, кроме случая, 
// когда элемент выходит за пределы границы своего родителя имеющего прокрутку.


export function Relative(): JSX.Element {
  return (
    <div className="container__page">
      <Header />
      <div className="container__unique relative">
        <div className="group">
          <h1 className="title relative">Relative</h1>
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
