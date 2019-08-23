// 创建基本状态
const state = {
  username: sessionStorage.getItem('username') , // 登录用户
  addr: sessionStorage.getItem('addr') ,
  users: [], // 所有注册用户
  addRoutes: [],
  orderDate: [],
  txHash:[]
}
export default state;
