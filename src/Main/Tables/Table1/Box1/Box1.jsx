import React from "react";
import t from "./box1.module.css";

const Box1 = () => {
  return (
    <div className={t.box1}>
      <table className={t.table1}>
        <tbody>
          <tr className={t.head1}>
            <td>ООО НТФФ "ПОЛИСАН"</td>
            <td>Отдел контроля качества</td>
            <td colSpan="2">Микробиологическая лаборатория</td>
          </tr>
          <tr>
            <td colSpan="4" style={{ fontSize: "25px", fontWeight: "700" }}>
              Протокол <br />
              <span style={{ fontSize: "15px" }}>
                Оценка стерильности произведенной продукции
              </span>
            </td>
          </tr>
          <tr>
            <td>Наименование препарата</td>
            <td>Гадовист, раствор для внутривенного введения 1 ммоль/мл</td>
            <td>в бутылках</td>
            <td>15 мл</td>
          </tr>
          <tr>
            <td colSpan="4" style={{ border: "2px solid" }}>
              Контроль бионагрузки в промежуточном продукте Гадовиста раствор
            </td>
          </tr>
          <tr>
            <td>Нормативный документ</td>
            <td colSpan="3">
              СПС-КО-1917-1645 "Промежуточный продукт Гадовиста раствор"
            </td>
          </tr>
          <tr>
            <td>Методика контроля</td>
            <td colSpan="3">
              СПС-КО-2200-0197 "Контроль бионагрузки в растворах лекарственных
              препаратов"
            </td>
          </tr>
          <tr>
            <td>Норма</td>
            <td colSpan="3">по факту</td>
          </tr>
          <tr className={t.head8}>
            <td colSpan="4">
              Условные сокращения: р.н. - роста нет; к.б. - коккобацила -
              палочка сворообразующая; м/о - микроорганизм; шт. - штука; н.и. -
              не использовался
            </td>
          </tr>
          <tr>
            <td colSpan="1">Рабочее место свободно и очищено</td>
            <td colSpan="3">
              <input type="checkbox" className="checkbox" /> Да /
              <input type="checkbox" className="checkbox" /> Нет
            </td>
          </tr>
          <tr>
            <td colSpan="1">Материалы</td>
            <td colSpan="3">Отметка о стерильности</td>
          </tr>
          <tr>
            <td colSpan="1">
              Мембранные фильтры, воронки для мембранной фильтрации, пипетка
            </td>
            <td colSpan="3">
              <input type="checkbox" /> Да / <input type="checkbox" /> Нет
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Box1;
