import React from 'react'
import { Route, Switch } from 'react-router'
import './AdminContent.scss'
import AddBrand from './Links/AddBrand/AddBrand'
import AddModel from './Links/AddBrand/AddModel/AddModel'
import FakeAddModel from './Links/AddBrand/AddModel/FakeAddModel'
import AddProducts from './Links/AddBrand/AddProducts/AddProducts'
import FakeAddProd from './Links/AddBrand/AddProducts/FakeAddProd'
import FakeAddBrand from './Links/AddBrand/FakeAddbrand'

function AdminContent() {
  
  return (
    <div className='content'>
      <Switch>
        <Route path='/admin/addBrand' exact component={FakeAddBrand}/>
          <Route path='/admin/addModel' exact component={FakeAddModel} />
            <Route path='/admin/addProducts' exact component={FakeAddProd} />

        {/* <Route path='/admin/addBrasletsStraps' component={}/>
        <Route path='/admin/addAdapter' component={}/>
        <Route path='/admin/addCharging' component={}/>
        <Route path='/admin/addHeadphones' component={}/>
        <Route path='/admin/addPowerbank' component={} />
        <Route path='/admin/addHolders' component={} />
        <Route path='/admin/addAccum' component={} />
        <Route path='/admin/addBags' component={} />
        <Route path='/admin/addOthers' component={} /> */}
      </Switch>
    </div>
  )
}

export default AdminContent
