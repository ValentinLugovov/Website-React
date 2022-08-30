import React from "react";
import Input from "../Input";
import t from "./Table1.module.css";

const Table1 = () => {
  return (
    <div>
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
      <div className={t.table1}>
        <table className={t.table2}>
          <tbody>
            <tr style={{ fontWeight: "bold" }}>
              <td>Питательные среды, растворы</td>
              <td>Номер серии</td>
              <td>Годен до</td>
              <td>Ростовые свойства</td>
              <td>ИО</td>
              <td>Заводской номер</td>
              <td>Дата следующей поверки/аттестации</td>
            </tr>
            <tr>
              <td>Соево-козеиновый агар</td>
              <td className="serialNumber">№</td>
              <td className="expirationDate">---</td>
              <td>
                <input type="checkbox" className="checkbox" /> подтверждены /
                <input type="checkbox" className="checkbox" /> не подтверждены
                <br />
                протокол номер ____
              </td>
              <td>Инкубатор Memmert IN750</td>
              <td>
                <input type="checkbox" className="checkbox" /> D818.0116
                <br />
                <input type="checkbox" className="checkbox" />
                D818.0117
              </td>
              <td className="verificationDate">---</td>
            </tr>
            <tr>
              <td>
                Фосфатный буферный раствор <br />с натрия хлоридом и пептоном pH
                7,0
              </td>
              <td className="serialNumber">№</td>
              <td className="expirationDate">---</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Жидкость №2</td>
              <td className="serialNumber">№</td>
              <td className="expirationDate">---</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={t.table1}>
        <table className={t.table3}>
          <tbody>
            <tr style={{ fontWeight: "bold" }}>
              <td rowSpan="3">Номер поступившей пробы</td>
              <td rowSpan="3">Объем посевной пробы, мл</td>
              <td rowSpan="3">Дата и время отбора пробы</td>
              <td rowSpan="3">Дата и время посева</td>
              <td rowSpan="3">ФИО, подпись проводившего посев</td>
              <td rowSpan="3">Дата и время учета результатов</td>
              <td rowSpan="3">
                ФИО, подпись ответственного за учет результатов
              </td>
              <td colSpan="3">Учет результатов</td>
            </tr>
            <tr style={{ fontWeight: "bold" }}>
              <td colSpan="2">
                отсутствие/наличие роста
                <br />
                количество КОЕ
              </td>
              <td rowSpan="2">идентификация выделенных м/о</td>
            </tr>
            <tr>
              <td>10 мл</td>
              <td>1 мл</td>
            </tr>
            <tr>
              <td className="sampleNumber" onClick={<Input />}>
                nnnnnn
              </td>
              <td className="sampleVolume">---</td>
              <td className="sampleDate">---</td>
              <td className="sowingDate">---</td>
              <td>
                <select className="sowingName">
                  <option value="name1">Филиппова А.Ю.</option>
                  <option value="name1">Гаврилова Ю.С.</option>
                </select>
              </td>
              <td className="resultDate">---</td>
              <td>
                <select className="sowingName">
                  <option value="name1">Филиппова А.Ю.</option>
                  <option value="name1">Гаврилова Ю.С.</option>
                </select>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="10">
                <b>Заключение</b>: по показателю "Бионагрузка" раствор препарата
                из реактора соответствует/несоответствует требованиям
                спецификации
              </td>
            </tr>
            <tr>
              <td colSpan="3" rowSpan="2">
                Заведующий микробиологической лабораторией
              </td>
              <td colSpan="3" style={{ fontWeight: "bold" }}>
                ФИО
              </td>
              <td colSpan="2" style={{ fontWeight: "bold" }}>
                Подпись
              </td>
              <td colSpan="2" style={{ fontWeight: "bold" }}>
                Дата
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
              <td colSpan="2"></td>
              <td colSpan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table1;
