import React from "react";
import t from "./box2.module.css";

const Box2 = () => {
  return (
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
  );
};

export default Box2;
