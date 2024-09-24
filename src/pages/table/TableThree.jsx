import { useEffect, useState } from "react";
import { Button } from "antd";
import request from "@/utils/request";
import { publicCol } from "@/components/table/TableThreeColumns";
import IndexPage from "@/components/indexPage/IndexPage";

function TableThree() {
  const searchItems = [
    {
      key: "keyword",
      label: "计划编号",
      componentProps: {
        placeholder: "模糊搜索",
      },
    },
  ];
  const tabKey = {
    TO_BE_EDIT: "0",
    IN_REVIEW: "1",
    PASSED: "2",
  };
  const [total, setTotal] = useState({});
  const [currentTableKey, setCurrentTableKey] = useState("0");

  useEffect(() => {
    fetchNumber();
  }, []);

  function fetchNumber() {
    request.get("/tableThree/total").then((res) => {
      setTotal(res.data);
    });
  }
  function chooseCol() {
    switch (currentTableKey) {
      case tabKey.TO_BE_EDIT:
        return publicCol;
      case tabKey.IN_REVIEW:
        return [];
      case tabKey.PASSED:
        return [];
      default:
        return [];
    }
  }

  return (
    <IndexPage
      pageTitle="临时计划"
      pageExtra={<Button type="primary">新建</Button>}
      searchItems={searchItems}
      tabList={[
        {
          key: tabKey.TO_BE_EDIT,
          tab: `待编辑（${total[tabKey.TO_BE_EDIT] ?? 0}）`,
        },
        {
          key: tabKey.IN_REVIEW,
          tab: `审核中（${total[tabKey.IN_REVIEW] ?? 0}）`,
        },
        { key: tabKey.PASSED, tab: `已通过（${total[tabKey.PASSED] ?? 0}）` },
      ]}
      sceneNumber="T-LSJH"
    />
  );
}

export default TableThree;
