import React from 'react'
import { Route, Switch } from 'react-router'
import './AdminContent.scss'
import AddBrand from './Links/AddBrand/AddBrand'
import AddModel from './Links/AddBrand/AddModel/AddModel'
import AddProducts from './Links/AddBrand/AddProducts/AddProducts'
import AddBrasletsOrStraps from './Links/AddBrasletsOrStraps/AddBrasletsOrStraps'
import AddBraslets from './Links/AddBrasletsOrStraps/AddBraslets/AddBraslets'
import AddStraps from './Links/AddBrasletsOrStraps/AddStraps/AddStraps'
import AddModelStraps from './Links/AddBrasletsOrStraps/AddStraps/AddModelStraps/AddModelStraps'
import AddProdStraps from './Links/AddBrasletsOrStraps/AddStraps/AddProdStraps/AddProdStraps'
import AddProdBraslets from './Links/AddBrasletsOrStraps/AddBraslets/AddProdBraslets/AddProdBraslets'

function AdminContent() {
  
  return (
    <div className='content'>
      <Switch>
        <Route path='/admin/addBrand' exact component={AddBrand}/>
          <Route path='/admin/addModel' exact component={AddModel} />
            <Route path='/admin/addProducts' exact component={AddProducts} />

        <Route path='/admin/addBrasletsOrStraps' component={AddBrasletsOrStraps}/>
          <Route path='/admin/addBraslets' component={AddBraslets}/>    
            <Route path='/admin/addProdBraslets' component={AddProdBraslets}/>    
          <Route path='/admin/addStraps' component={AddStraps}/>    
            <Route path='/admin/addModelStraps' component={AddModelStraps}/>    
              <Route path='/admin/addProdStraps' component={AddProdStraps}/>    
        {/* <Route path='/admin/addAdapter' component={}/>
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
