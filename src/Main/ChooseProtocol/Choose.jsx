import React, { useState } from "react";
import Table1 from "../Tables/Table1/Table1";
import c from "./Choose.module.css";
import b from "../../Header/Buttons/Buttons.module.css";
import t from "../Tables/Table1/Table1.module.css";

const Choose = () => {
  const [value, setValue] = useState("");

  function changeSelect(event) {
    setValue(event.target.value);
  }

  return (
    <div className={c.choose}>
      <div className={c.chooseAndSelect}>
        <p className={c.selectionString}>
          Выберите протокол для заполнения данных:
        </p>
        <select className={c.protocolName} onChange={changeSelect}>
          <option selected value="none"></option>
          <option value="table1">
            Оценка стерильности произведенной продукции
          </option>
          <option value="table2">
            Анализ содержания бактериальных эндотоксинов в препарате (КТА)
          </option>
          <option value="table3">Бла бла бла</option>
        </select>
      </div>
      <div className={c.download}>
        <button className={b.buttonLogin}>Сохранить</button>
      </div>
      {value == "table1" ? (
        <div className={t.tableMain}>
          <Table1 />
        </div>
      ) : (
        ""
      )}
      {/* {value == "table1" ? (<div className={c.download}><button className={b.buttonLogin}>Сохранить</button></div>) : ("")} */}
    </div>
  );
};

export default Choose;
