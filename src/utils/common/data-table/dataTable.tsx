import React, { useEffect, useState } from "react";
import { Form, Pagination } from "react-bootstrap";
import "../../../stylesheet/table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TaskList } from "../../model/dataModel";

export const DataTable = ({
  header,
  data,
  objKey,
  action,
}: {
  header: string[];
  data: TaskList[];
  objKey: string[];
  action: any;
}) => {
  const [page, setPage] = useState([] as any);
  const [active, setActive] = useState(1 as number);
  const [currPage, setCurrPage] = useState(1 as number);
  const [tableData, setTableData] = useState<TaskList[]>([]);
  useEffect(() => {
    firstPagination();
  }, [data.length, tableData.length === 0]);

  const firstPagination = () => {
    let items: any[] = [];
    let temp_data: TaskList[] = [];
    for (let number = 1; number <= Math.ceil(data.length / 8); number++) {
      items.push(number);
      console.log(items);
    }
    setPage(items);
    for (let i: number = 0; i < 8; i++) {
      temp_data.push(data[i]);
      setTableData(temp_data);
    }
  };

  const pageItemClick = (num: number) => {
    setActive(num);
    setCurrPage(num);
    let offset = (num - 1) * 8;
    let paginatedItems = data.slice(offset).slice(0, 8);
    setTableData(paginatedItems);
  };

  const nextItemClick = () => {
    if (active < Math.ceil(data.length / 8)) {
      setActive(active + 1);
      setCurrPage(active + 1);
      let offset = active * 8;
      let paginatedItems = data.slice(offset).slice(0, 8);
      setTableData(paginatedItems);
    } else {
      return null;
    }
  };

  const prevItemClick = () => {
    if (active > 1) {
      setActive(active - 1);
      setCurrPage(active - 1);
      let offset = (active - 2) * 8;
      let paginatedItems = data.slice(offset).slice(0, 8);
      setTableData(paginatedItems);
    } else {
      return null;
    }
  };

  const lastPageClick = () => {
    let lpage = Math.ceil(data.length / 8);
    setActive(lpage);
    setCurrPage(lpage);
    let offset = (lpage - 1) * 8;
    let paginatedItems = data.slice(offset).slice(0, 8);
    setTableData(paginatedItems);
  };

  return (
    <>
      <div>
        <Form className="table-search">
          <Form.Group className="mb-3" controlId="Search">
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>
        </Form>
      </div>
      <table id="example" className="table table-striped ">
        <thead>
          <tr>
            {header.map((item: any, ind: any) => (
              <th key={ind}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.length &&
            tableData.map((item: any, ind: number) => (
              <tr key={ind}>
                {objKey.map((el: any, i: any) => (
                  <td key={i}>{item[el]}</td>
                ))}
                {action.map((item: any, ind: any) => (
                  <td key={ind} className="w-0">
                    <FontAwesomeIcon
                      icon={item.action === "edit" ? faPenToSquare : faTrash}
                    />
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination className="pagination justify-content-end">
        <Pagination.First onClick={firstPagination} />
        <Pagination.Prev onClick={prevItemClick} disabled={active === 1} />
        {page.map((item: number, ind: number) => (
          <Pagination.Item
            key={item}
            active={item === active}
            onClick={() => pageItemClick(item)}
          >
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={nextItemClick}
          disabled={active === Math.ceil(data.length / 8)}
        />
        <Pagination.Last onClick={lastPageClick} />
      </Pagination>
    </>
  );
};
