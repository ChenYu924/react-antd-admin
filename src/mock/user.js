export const token = "ec24e170-a7fc-4956-b5fb-4d576fe1234a";

// 用户数据
export const userData = {
  id: 1,
  info: {
    username: "admin",
    nickname: "管理员",
  },
  userType: "1",
  mgrType: "9",
  menuTree: [
    {
      key: "workbench",
      label: "我的工作台",
      menuIco: "home",
    },
    {
      key: "form",
      label: "Form 表单",
      menuIco: "form",
      children: [
        {
          key: "form-splice",
          label: "表单拼接",
        },
      ],
    },
    {
      key: "carousel",
      label: "Carousel 走马灯",
      menuIco: "stepForward",
      children: [
        {
          key: "carousel-horizontal",
          label: "横向走马灯",
        },
      ],
    },
  ],
  menuTreeAll: [
    {
      key: "workbench",
      label: "我的工作台",
      menuIco: "home",
    },
    {
      key: "form",
      label: "Form 表单",
      menuIco: "form",
      children: [
        {
          key: "form-splice",
          label: "表单拼接",
        },
      ],
    },
    {
      key: "carousel",
      label: "Carousel 走马灯",
      menuIco: "stepForward",
      children: [
        {
          key: "carousel-horizontal",
          label: "横向走马灯",
        },
      ],
    },
    { key: "test1", label: "test1", menuIco: "closed" },
    { key: "test2", label: "test2", menuIco: "closed" },
  ],
  menuList: ["/workbench", "/form-splice", "/carousel-horizontal"],
  menuListAll: [
    "/workbench",
    "/form-splice",
    "/carousel-horizontal",
    "/test1",
    "/test2",
  ],
};
