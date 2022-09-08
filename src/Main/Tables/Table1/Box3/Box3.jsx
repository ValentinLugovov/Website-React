import React from "react";
import t from "./box3.module.css";
import { useState } from "react";

const Box3 = () => {
  const [value, setValue] = useState("");

  function changeInput(event) {
    setValue(event.target.value);
  }
  return (
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
            <td rowSpan="3">ФИО, подпись ответственного за учет результатов</td>
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
            <td className="sampleNumber">
              <input defaultValue={value} onBlur={changeInput}></input>
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
              из реактора соответствует/несоответствует требованиям спецификации
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
  );
};

export default Box3;
