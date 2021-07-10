/*
 * @Author: itcast 
 * @Description: xxx业务模块 
 * @Date: 2018-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-09-03 11:12:47
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/saas-clients', // 父路径
    component: Layout,
    redirect: 'noredirect',
    name: 'saas-clients',
    meta: {
      title: 'xxx业务模块管理',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        component: _import('saas-clients/pages/index'),
        name: 'saas-clients-index',
<<<<<<< HEAD
        meta: {title: 'SAAS企业管理', icon: 'component', noCache: true}
=======
        meta: {title: 'SAAS高校管理', icon: 'component', noCache: true}
>>>>>>> 增加员工管理模块 以及权限管理界面后续添加
      },
      {
        path: 'details/:id',
        component: _import('saas-clients/pages/detail'),
        name: 'saas-clients-detail',
<<<<<<< HEAD
        meta: {title: 'SAAS企业详情', icon: 'component', noCache: true}
=======
        meta: {title: 'SAAS高校详情', icon: 'component', noCache: true}
>>>>>>> 增加员工管理模块 以及权限管理界面后续添加
      }
    ]
  }
]
