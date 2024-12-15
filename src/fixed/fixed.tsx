import { Header } from "../header";

// fixed - позиционирование происходит относительно окна браузера, за исключением случаев,
// когда св-ва transition, perspective или filter имеют значения отличные от none.
// fixed как и  absolute уходит из основного потока документа.

export function Fixed(): JSX.Element {
  return (
    <div className="container__page fixed">
      <Header />
      <div className="container__unique fixed">
        <div className="group">
          <h1 className="title fixed">Fixed</h1>
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
