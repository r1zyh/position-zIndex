import { Header } from "../header";

// absolute - элемент выходит из потока документа и не участвует в позиционировании соседних элементов,
// сам же позиционируется относительно ближайшего позиционированного предка.
// Если элемент был частью строчного контекста, он приобретает блочный контекст форматирования и к нему применима блочная модель.
// Если элемент был блочный и занимал всю ширину, то теперь она будет равна ширине контента, если не задана явно.
// Отступы не схлопываются с соседними элементами
//Позиционирование относительно container__unique absolute

export function Absolute(): JSX.Element {
  return (
    <div className="container__page">
      <Header />
      <div className="container__unique absolute">
        <div className="group">
          <h1 className="title absolute">Absolute</h1>
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
